/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React from "react";
import DashboardManagementPageSkeleton from "@/components/modules/dashboard/DashboardManagePageSkeleton";
import DashboardPageHeader from "@/components/modules/dashboard/DashboardPageHeader";
import { DynamicDataTable } from "@/components/modules/dashboard/DataTable";
import { toast } from "sonner";

import { IServiceType } from "@/types";
import DeleteAlert from "@/components/modules/dashboard/DeleteAlert";

import { ColumnDef } from "@tanstack/react-table";
import { useDeleteServiceTypeMutation, useGetAllServiceTypesQuery } from "@/redux/features/serviceType/serviceType.api";
import UpdateServiceTypeModal from "@/components/modules/dashboard/serviceType/UpdateServiceTypeModal";
import ServiceTypeDetailsModal from "@/components/modules/dashboard/serviceType/ServiceTypeDetailsModal";
import ServiceTypeToolbar from "@/components/modules/dashboard/serviceType/ServiceTypeToolbar";

const ServiceTypeManagementPage = () => {
  const [deleteServiceType] = useDeleteServiceTypeMutation();

  const [searchTerm, setSearchTerm] = React.useState("");
  const [sort, setSort] = React.useState("");

  const { data, isLoading, isError } = useGetAllServiceTypesQuery({
    ...(searchTerm && { searchTerm }),
    ...(sort && { sort }),
  });

  const [selectedType, setSelectedType] = React.useState<IServiceType | null>(null);
  const [openViewModal, setOpenViewModal] = React.useState(false);

  const [typeToUpdate, setTypeToUpdate] = React.useState<IServiceType | null>(null);
  const [openUpdateModal, setOpenUpdateModal] = React.useState(false);

  const [typeToDelete, setTypeToDelete] = React.useState<IServiceType | null>(null);
  const [openDeleteAlert, setOpenDeleteAlert] = React.useState(false);

  // Delete Handler
  const handleDelete = async (item: IServiceType) => {
    try {
      const res = await deleteServiceType(item._id as string);
      if (res?.data?.success) {
        toast.success("Service Type deleted successfully");
      }
    } catch (error: any) {
      toast.error("Failed to delete service type");
    }
  };

  // Table Columns
  const columns: ColumnDef<IServiceType>[] = [
    { accessorKey: "name", header: "Name" },
    { accessorKey: "description", header: "Description" },
  ];

  // Table Actions
  const actions = [
    {
      label: "View",
      onClick: (item: IServiceType) => {
        setSelectedType(item);
        setOpenViewModal(true);
      },
    },
    {
      label: "Edit",
      onClick: (item: IServiceType) => {
        setTypeToUpdate(item);
        setOpenUpdateModal(true);
      },
    },
    {
      label: "Delete",
      onClick: (item: IServiceType) => {
        setTypeToDelete(item);
        setOpenDeleteAlert(true);
      },
    },
  ];


  if (isLoading) return <DashboardManagementPageSkeleton />;
  if (isError) return <p>Error loading service types.</p>;

  return (
    <div>
      <DashboardPageHeader title="Service Type Management" />
      <ServiceTypeToolbar
        onSearchChange={setSearchTerm}
        onSortChange={setSort}
      />

      <DynamicDataTable
        columns={columns}
        data={data?.data ?? []}
        actions={actions}
      />

      {/* View Modal */}
      {selectedType && (
        <ServiceTypeDetailsModal
          open={openViewModal}
          onOpenChange={setOpenViewModal}
          serviceType={selectedType}
        />
      )}

      {/* Update Modal */}
      {typeToUpdate && (
        <UpdateServiceTypeModal
          open={openUpdateModal}
          onOpenChange={setOpenUpdateModal}
          data={typeToUpdate}
        />
      )}

      {/* Delete Confirmation */}
      {typeToDelete && (
        <DeleteAlert
          open={openDeleteAlert}
          onOpenChange={setOpenDeleteAlert}
          description={`Are you sure you want to delete this service type? If you delete this service type, all services associated with it will also be permanently deleted.`}
          onConfirm={async () => {
            await handleDelete(typeToDelete);
            setOpenDeleteAlert(false);
            setTypeToDelete(null);
          }}
        />
      )}
    </div>
  );
};

export default ServiceTypeManagementPage;
