/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React from "react";
import DashboardManagementPageSkeleton from "@/components/modules/dashboard/DashboardManagePageSkeleton";
import DashboardPageHeader from "@/components/modules/dashboard/DashboardPageHeader";
import { DynamicDataTable } from "@/components/modules/dashboard/DataTable";
import { toast } from "sonner";
import DeleteAlert from "@/components/modules/dashboard/DeleteAlert";
import { ColumnDef } from "@tanstack/react-table";
import { useDeleteSEOMutation, useGetAllSEOQuery } from "@/redux/features/seo/seo.api";
import { ISEO } from "@/types";
import SeoToolbar from "@/components/modules/dashboard/seo/SeoToolBar";
import UpdateSeoModal from "@/components/modules/dashboard/seo/SeoUpdateModal";
import SeoDetailsModal from "@/components/modules/dashboard/seo/SeoDetailsModal";
import TablePagination from "@/components/modules/shared/tablePagination/TablePagination";

const SeoManagementPage = () => {
  const [deleteSeo] = useDeleteSEOMutation();

  const [searchTerm, setSearchTerm] = React.useState("");
  const [sort, setSort] = React.useState("");
  const [page, setPage] = React.useState(1);
  const limit = 10;

  const { data, isLoading, isError } = useGetAllSEOQuery({
    ...(searchTerm && { searchTerm }),
    ...(sort && { sort }),
    page,
    limit,
  });

  const [selectedSeo, setSelectedSeo] = React.useState<ISEO | null>(null);
  const [openViewModal, setOpenViewModal] = React.useState(false);

  const [seoToUpdate, setSeoToUpdate] = React.useState<ISEO | null>(null);
  const [openUpdateModal, setOpenUpdateModal] = React.useState(false);

  const [seoToDelete, setSeoToDelete] = React.useState<ISEO | null>(null);
  const [openDeleteAlert, setOpenDeleteAlert] = React.useState(false);

  // Delete Handler
  const handleDelete = async (item: ISEO) => {
    try {
      const res: any = await deleteSeo(item.pagePath as string);
      if (res?.data?.success) {
        await fetch("/api/revalidate/seos", { method: "POST" });
        toast.success("SEO data deleted successfully!");
      }
    } catch (error) {
      toast.error("Failed to delete SEO data");
    }
  };

  // Table Columns
  const columns: ColumnDef<ISEO>[] = [
    { accessorKey: "pagePath", header: "Page Path" },
    { accessorKey: "metaTitle", header: "Meta Title" },
    // {
    //   accessorKey: "metaDescription",
    //   header: "Meta Description",
    //   cell: ({ row }) => (
    //     <span className="line-clamp-1">{row.original.metaDescription}</span>
    //   ),
    // },

  ];

  // Table Row Actions
  const actions = [
    {
      label: "View",
      onClick: (item: ISEO) => {
        setSelectedSeo(item);
        setOpenViewModal(true);
      },
    },
    {
      label: "Edit",
      onClick: (item: ISEO) => {
        setSeoToUpdate(item);
        setOpenUpdateModal(true);
      },
    },
    {
      label: "Delete",
      onClick: (item: ISEO) => {
        setSeoToDelete(item);
        setOpenDeleteAlert(true);
      },
    },
  ];

  if (isLoading) return <DashboardManagementPageSkeleton />;
  if (isError) return <p>Error loading SEO data.</p>;

  return (
    <div className="">
      <DashboardPageHeader title="SEO Management" />
      <SeoToolbar onSearchChange={setSearchTerm} onSortChange={setSort} />

      <DynamicDataTable
        columns={columns}
        data={data?.data ?? []}
        actions={actions}
      />
      {/* Pagination */}
      <TablePagination
        currentPage={page}
        totalPages={data?.meta?.totalPage ?? 1}
        onPageChange={setPage}
      />

      {/* View Modal */}
      {selectedSeo && (
        <SeoDetailsModal
          open={openViewModal}
          onOpenChange={setOpenViewModal}
          seo={selectedSeo}
        />
      )}

      {/* Update Modal */}
      {seoToUpdate && (
        <UpdateSeoModal
          open={openUpdateModal}
          onOpenChange={setOpenUpdateModal}
          data={seoToUpdate}
        />
      )}

      {/* Delete Confirmation */}
      {seoToDelete && (
        <DeleteAlert
          open={openDeleteAlert}
          onOpenChange={setOpenDeleteAlert}
          description="Are you sure you want to delete this SEO entry?"
          onConfirm={async () => {
            await handleDelete(seoToDelete);
            setOpenDeleteAlert(false);
            setSeoToDelete(null);
          }}
        />
      )}
    </div>
  );
};

export default SeoManagementPage;
