/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React from "react";
import DashboardManagementPageSkeleton from "@/components/modules/dashboard/DashboardManagePageSkeleton";
import DashboardPageHeader from "@/components/modules/dashboard/DashboardPageHeader";
import { DynamicDataTable } from "@/components/modules/dashboard/DataTable";
import { toast } from "sonner";

import { IReferralForm } from "@/types";
import DeleteAlert from "@/components/modules/dashboard/DeleteAlert";
import { ColumnDef } from "@tanstack/react-table";

import {
  useDeleteReferralMutation,
  useGetAllReferralsQuery
} from "@/redux/features/referral/referral.api";

import UserToolbar from "@/components/modules/dashboard/user/UserToolbar";
import ReferralDetailsModal from "@/components/modules/dashboard/referralForm/ReferralDetailsModal";
import ReferralToolbar from "@/components/modules/dashboard/referralForm/ReferralToolbar";

const ReferralManagementPage = () => {
  const [deleteReferral] = useDeleteReferralMutation();
  const [searchTerm, setSearchTerm] = React.useState("");
  const [sort, setSort] = React.useState("");

  console.log('search ', searchTerm);
  console.log('sort ', sort);

  const { data, isLoading, isError } = useGetAllReferralsQuery({
    ...(searchTerm && { searchTerm }),
    ...(sort && { sort }),
  });

  const [selectedReferral, setSelectedReferral] =
    React.useState<IReferralForm | null>(null);
  const [openViewModal, setOpenViewModal] = React.useState(false);

  const [referralToDelete, setReferralToDelete] =
    React.useState<IReferralForm | null>(null);
  const [openDeleteAlert, setOpenDeleteAlert] = React.useState(false);

  // ⭐ Delete Handler
  const handleDelete = async (item: IReferralForm) => {
    try {
      const res = await deleteReferral(item._id as string);
      if (res?.data?.success) {
        toast.success("Referral deleted successfully");
      }
    } catch (error: any) {
      toast.error("Failed to delete referral");
    }
  };

  // ⭐ Table Columns
  const columns: ColumnDef<IReferralForm>[] = [
    { accessorKey: "referralName", header: "Referral Name" },
    { accessorKey: "yourName", header: "Your Name" },
    { accessorKey: "referralEmail", header: "Referral Email" },
    { accessorKey: "referralPhone", header: "Phone" },
  ];

  // ⭐ Table Actions
  const actions = [
    {
      label: "View",
      onClick: (item: IReferralForm) => {
        setSelectedReferral(item);
        setOpenViewModal(true);
      },
    },
    {
      label: "Delete",
      onClick: (item: IReferralForm) => {
        setReferralToDelete(item);
        setOpenDeleteAlert(true);
      },
    },
  ];

  if (isLoading) return <DashboardManagementPageSkeleton />;
  if (isError) return <p>Error loading referrals.</p>;

  return (
    <div>
      <DashboardPageHeader title="Referral Management" />
      <ReferralToolbar
        onSearchChange={setSearchTerm}
        onSortChange={setSort}
      />

      <DynamicDataTable
        columns={columns}
        data={data?.data ?? []}
        actions={actions}
      />

      {/* View Modal */}
      {selectedReferral && (
        <ReferralDetailsModal
          open={openViewModal}
          onOpenChange={setOpenViewModal}
          referral={selectedReferral}
        />
      )}

      {/* Delete Confirmation */}
      {referralToDelete && (
        <DeleteAlert
          open={openDeleteAlert}
          onOpenChange={setOpenDeleteAlert}
          description="Are you sure you want to delete this referral? This action cannot be undone."
          onConfirm={async () => {
            await handleDelete(referralToDelete);
            setOpenDeleteAlert(false);
            setReferralToDelete(null);
          }}
        />
      )}
    </div>
  );
};

export default ReferralManagementPage;
