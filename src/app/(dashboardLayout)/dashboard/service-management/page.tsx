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
import UserToolbar from "@/components/modules/dashboard/user/UserToolbar";
import { IService } from "@/types";
import React from "react";
import ServiceDetailsModal from "@/components/modules/dashboard/service/ServiceDetailsModal";
import DeleteAlert from "@/components/modules/dashboard/DeleteAlert";
import ServiceToolbar from "@/components/modules/dashboard/service/ServiceToolbar";

const ServiceManagementPage = () => {
  const [deleteService] = useDeleteServiceMutation();
 const [searchTerm, setSearchTerm] = React.useState("");
    const [sort, setSort] = React.useState("");

    const { data, isLoading, isError } = useGetAllServicesQuery({
        ...(searchTerm && { searchTerm }),
        ...(sort && { sort }),
    });

  //   States
  const [selectedService, setSelectedService] = React.useState<IService | null>(null);
  const [openViewModal, setOpenViewModal] = React.useState(false);

  //   const [serviceToUpdate, setServiceToUpdate] = React.useState<IService | null>(null);
  //   const [openUpdateModal, setOpenUpdateModal] = React.useState(false);

  const [serviceToDelete, setServiceToDelete] = React.useState<IService | null>(null);
  const [openDeleteAlert, setOpenDeleteAlert] = React.useState(false);

  //   Delete Handler
  const handleDelete = async (item: IService) => {
    try {
      const res = await deleteService(item._id as string);
      if (res?.data?.success) {
        toast.success("Service deleted successfully");
      }
    } catch (error) {
      toast.error("Failed to delete service");
    }
  };

  //   Columns

  const columns: ColumnDef<IService>[] = [
    { accessorKey: "title", header: "Title" },
    { accessorKey: "slug", header: "Slug" },

    {
      header: "Service Type",
      accessorFn: (row) => row.serviceType?.name ?? "N/A",
    },
  ];


  // Dynamic Actions
  const actions = [
    {
      label: "View",
      onClick: (service: IService) => {
        setSelectedService(service);
        setOpenViewModal(true);
      },
    },
    // {
    //   label: "Edit",
    //   onClick: (service: IService) => {
    //     setServiceToUpdate(service);
    //     setOpenUpdateModal(true);
    //   },
    // },
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

      {/* VIEW MODAL */}
      {selectedService && (
        <ServiceDetailsModal
          open={openViewModal}
          onOpenChange={setOpenViewModal}
          service={selectedService}
        />
      )}

      {/* UPDATE MODAL */}
      {/* {serviceToUpdate && (
        <UpdateServiceModal
          open={openUpdateModal}
          onOpenChange={setOpenUpdateModal}
          service={serviceToUpdate}
        />
      )} */}

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
