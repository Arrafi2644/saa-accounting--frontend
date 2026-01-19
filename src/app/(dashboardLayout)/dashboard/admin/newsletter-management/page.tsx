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

import { useDeleteNewsletterMutation, useGetAllNewslettersQuery } from "@/redux/features/newsletter/newsletter.api";

import { INewsletter } from "@/types";
import NewsletterToolbar from "@/components/modules/dashboard/newsletter/NewsletterToolbar";
import TablePagination from "@/components/modules/shared/tablePagination/TablePagination";

const NewsletterManagementPage = () => {
  const [deleteReferral] = useDeleteNewsletterMutation();
  const [searchTerm, setSearchTerm] = React.useState("");
  const [sort, setSort] = React.useState("");
  const [page, setPage] = React.useState(1);
  const limit = 10;

  const { data, isLoading, isError } = useGetAllNewslettersQuery({
    ...(searchTerm && { searchTerm }),
    ...(sort && { sort }),
    page,
    limit,
  });

  React.useState<INewsletter | null>(null);

  const [newsletterToDeleted, setNewsletterToDeleted] =
    React.useState<INewsletter | null>(null);
  const [openDeleteAlert, setOpenDeleteAlert] = React.useState(false);

  const handleDelete = async (item: INewsletter) => {
    try {
      const res = await deleteReferral(item._id as string);
      if (res?.data?.success) {
        toast.success("Newsletter deleted successfully");
      }
    } catch (error: any) {
      toast.error("Failed to delete referral");
    }
  };

  const columns: ColumnDef<INewsletter>[] = [
    { accessorKey: "email", header: "Email" },
  ];

  const actions = [
    {
      label: "Delete",
      onClick: (item: INewsletter) => {
        setNewsletterToDeleted(item);
        setOpenDeleteAlert(true);
      },
    },
  ];

  if (isLoading) return <DashboardManagementPageSkeleton />;
  if (isError) return <p>Error loading newsletters.</p>;

  return (
    <div>
      <DashboardPageHeader title="Newsletter Management" />
      <NewsletterToolbar
        onSearchChange={setSearchTerm}
        onSortChange={setSort}
      />

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

      {/* Delete Confirmation */}
      {newsletterToDeleted && (
        <DeleteAlert
          open={openDeleteAlert}
          onOpenChange={setOpenDeleteAlert}
          description="Are you sure you want to delete this referral? This action cannot be undone."
          onConfirm={async () => {
            await handleDelete(newsletterToDeleted);
            setOpenDeleteAlert(false);
            setNewsletterToDeleted(null);
          }}
        />
      )}
    </div>
  );
};

export default NewsletterManagementPage;
