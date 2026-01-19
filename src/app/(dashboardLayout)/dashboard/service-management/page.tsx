"use client";

import DashboardManagementPageSkeleton from "@/components/modules/dashboard/DashboardManagePageSkeleton";
import DashboardPageHeader from "@/components/modules/dashboard/DashboardPageHeader";

import { DynamicDataTable } from "@/components/modules/dashboard/DataTable";
// import DeleteAlert from "@/components/modules/dashboard/DeleteAlert";

import {
  useGetAllServicesQuery,
  useDeleteServiceMutation,
} from "@/redux/features/service/service.api";


import { ColumnDef } from "@tanstack/react-table";
import { toast } from "sonner";
import { IService } from "@/types";
import React from "react";
// import ServiceDetailsModal from "@/components/modules/dashboard/service/ServiceDetailsModal";
import DeleteAlert from "@/components/modules/dashboard/DeleteAlert";
import ServiceToolbar from "@/components/modules/dashboard/service/ServiceToolbar";
import { useRouter } from "next/navigation";
import TablePagination from "@/components/modules/shared/tablePagination/TablePagination";


const ServiceManagementPage = () => {
  const [deleteService] = useDeleteServiceMutation();
  const [searchTerm, setSearchTerm] = React.useState("");
  const [sort, setSort] = React.useState("");
  const [page, setPage] = React.useState(1);
  const limit = 10;

  const { data, isLoading, isError } = useGetAllServicesQuery({
    ...(searchTerm && { searchTerm }),
    ...(sort && { sort }),
    page,
    limit,
  });

  const [serviceToDelete, setServiceToDelete] = React.useState<IService | null>(null);
  const [openDeleteAlert, setOpenDeleteAlert] = React.useState(false);

  //   Delete Handler
  const handleDelete = async (item: IService) => {
    try {
      const res = await deleteService(item._id as string);
      if (res?.data?.success) {
        await Promise.all([
          fetch("/api/revalidate/services", { method: "POST" }),
          item?.slug
            ? fetch(`/api/revalidate/service/${item.slug}`, { method: "POST" })
            : Promise.resolve(),
        ]);
        toast.success("Service deleted successfully");
      }
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      toast.error("Failed to delete service");
      console.log(error);
    }
  };

  //   Columns
  const columns: ColumnDef<IService>[] = [
    { accessorKey: "title", header: "Title" },
    { accessorKey: "slug", header: "Slug" },

  ];

  const router = useRouter()
  // Dynamic Actions
  const actions = [
    {
      label: "Edit",
      onClick: (service: IService) => {
        router.push(`/dashboard/service-management/update-service/${service.slug}`);
      },
    },
    {
      label: "Delete",
      onClick: (service: IService) => {
        setServiceToDelete(service);
        setOpenDeleteAlert(true);
      },
    },
  ];

  if (isLoading) return <DashboardManagementPageSkeleton />;
  if (isError) return <p>Error loading services.</p>;

  return (
    <div>
      <DashboardPageHeader title="Service Management" />
      <ServiceToolbar
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

      {/* DELETE ALERT */}
      {serviceToDelete && (
        <DeleteAlert
          open={openDeleteAlert}
          onOpenChange={setOpenDeleteAlert}
          description={`Are you sure you want to delete the service "${serviceToDelete.title}"? This action is permanent and cannot be undone.`}
          onConfirm={async () => {
            await handleDelete(serviceToDelete);
            setOpenDeleteAlert(false);
            setServiceToDelete(null);
          }}
        />
      )}
    </div>
  );
};

export default ServiceManagementPage;
