/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React from "react";
import DashboardManagementPageSkeleton from "@/components/modules/dashboard/DashboardManagePageSkeleton";
import DashboardPageHeader from "@/components/modules/dashboard/DashboardPageHeader";
import { DynamicDataTable } from "@/components/modules/dashboard/DataTable";
import { toast } from "sonner";

import { IJoiningRequest } from "@/types";
import DeleteAlert from "@/components/modules/dashboard/DeleteAlert";
import { ColumnDef } from "@tanstack/react-table";
import { useDeleteJoiningRequestMutation, useGetAllJoiningRequestsQuery } from "@/redux/features/joiningRequest/joiningRequest.api";
import UserToolbar from "@/components/modules/dashboard/user/UserToolbar";
import JoiningRequestDetailsModal from "@/components/modules/dashboard/joiningForm/JoiningRequestDetailsModal";
import JoiningRequestToolbar from "@/components/modules/dashboard/joiningForm/JoiningRequestToolbar";

const JoinUsFormManagementPage = () => {
  const [deleteJoinUsForm] = useDeleteJoiningRequestMutation();
    const [searchTerm, setSearchTerm] = React.useState("");
      const [sort, setSort] = React.useState("");
  
      const { data, isLoading, isError } = useGetAllJoiningRequestsQuery({
          ...(searchTerm && { searchTerm }),
          ...(sort && { sort }),
      });

  const [selectedForm, setSelectedForm] = React.useState<IJoiningRequest | null>(null);
  const [openViewModal, setOpenViewModal] = React.useState(false);

  const [formToDelete, setFormToDelete] = React.useState<IJoiningRequest | null>(null);
  const [openDeleteAlert, setOpenDeleteAlert] = React.useState(false);

  // Delete Handler
  const handleDelete = async (item: IJoiningRequest) => {
    try {
      const res = await deleteJoinUsForm(item._id as string);
      if (res?.data?.success) {
        toast.success("Joining request deleted successfully");
      }
    } catch (error: any) {
      toast.error("Failed to delete joining request");
    }
  };

  // Table Columns
  const columns: ColumnDef<IJoiningRequest>[] = [
    { accessorKey: "companyName", header: "Company Name" },
    { accessorKey: "email", header: "Email" },
    { accessorKey: "phoneBusiness", header: "Business Phone" },
    { accessorKey: "phoneMobile", header: "Mobile" },
  ];


  // Table Actions
  const actions = [
    {
      label: "View",
      onClick: (item: IJoiningRequest) => {
        setSelectedForm(item);
        setOpenViewModal(true);
      },
    },
    {
      label: "Delete",
      onClick: (item: IJoiningRequest) => {
        setFormToDelete(item);
        setOpenDeleteAlert(true);
      },
    },
  ];

  if (isLoading) return <DashboardManagementPageSkeleton />;
  if (isError) return <p>Error loading joining requests.</p>;

  return (
    <div>
      <DashboardPageHeader title="Joining Request Management" />
      <JoiningRequestToolbar
        onSearchChange={setSearchTerm}
        onSortChange={setSort}
      />
      <DynamicDataTable
        columns={columns}
        data={data?.data ?? []}
        actions={actions}
      />

      {/* View Modal */}
      {selectedForm && (
        <JoiningRequestDetailsModal
          open={openViewModal}
          onOpenChange={setOpenViewModal}
          request={selectedForm}
        />
      )}

      {/* Delete Confirmation */}
      {formToDelete && (
        <DeleteAlert
          open={openDeleteAlert}
          onOpenChange={setOpenDeleteAlert}
          description={`Are you sure you want to delete this joining request? This action cannot be undone.`}
          onConfirm={async () => {
            await handleDelete(formToDelete);
            setOpenDeleteAlert(false);
            setFormToDelete(null);
          }}
        />
      )}
    </div>
  );
};

export default JoinUsFormManagementPage;
