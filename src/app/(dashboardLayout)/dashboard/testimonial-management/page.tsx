"use client";

import React from "react";
import DashboardManagementPageSkeleton from "@/components/modules/dashboard/DashboardManagePageSkeleton";
import DashboardPageHeader from "@/components/modules/dashboard/DashboardPageHeader";
import { DynamicDataTable } from "@/components/modules/dashboard/DataTable";

import TestimonialToolbar from "@/components/modules/dashboard/testimonial/TestimonialToolbar";
import TestimonialDetailsModal from "@/components/modules/dashboard/testimonial/TestimonialDetailsModal";
import DeleteAlert from "@/components/modules/dashboard/DeleteAlert";
import ApprovalToggle from "@/components/modules/dashboard/testimonial/ApprovalToggle";

import {
  useGetAllTestimonialsQuery,
  useDeleteTestimonialMutation,
} from "@/redux/features/testimonial/testimonial.api";
import { ITestimonial } from "@/types";
import { ColumnDef } from "@tanstack/react-table";
import { toast } from "sonner";

const TestimonialManagementPage = () => {
  const [deleteTestimonial] = useDeleteTestimonialMutation();

  // Filters
  const [searchTerm, setSearchTerm] = React.useState("");
  const [sort, setSort] = React.useState("");

  const { data, isLoading, isError } = useGetAllTestimonialsQuery({
    ...(searchTerm && { searchTerm }),
    ...(sort && { sort }),
  });

  // Modal states
  const [selectedTestimonial, setSelectedTestimonial] =
    React.useState<ITestimonial | null>(null);
  const [openViewModal, setOpenViewModal] = React.useState(false);

  const [testimonialToDelete, setTestimonialToDelete] =
    React.useState<ITestimonial | null>(null);
  const [openDeleteAlert, setOpenDeleteAlert] = React.useState(false);

  // Delete handler
  const handleDelete = async (testimonial: ITestimonial) => {
    if (!testimonial._id) return toast.error("Testimonial ID not found");

    try {
      const res = await deleteTestimonial(testimonial._id).unwrap();
      if (res.success) {
        toast.success("Testimonial deleted successfully");
      }
    } catch (error) {
      toast.error("Failed to delete testimonial");
    }
  };

  // Table columns
  const columns: ColumnDef<ITestimonial>[] = [
    { accessorKey: "fullName", header: "Name" },
    { accessorKey: "email", header: "Email" },
    { accessorKey: "rating", header: "Rating" },

    // Inline toggle for approval
    {
      accessorKey: "isApproved",
      header: "Approved",
      cell: ({ row }) => <ApprovalToggle testimonial={row.original} />,
    },
  ];

  // Actions column
  const actions = [
    {
      label: "View",
      onClick: (testimonial: ITestimonial) => {
        setSelectedTestimonial(testimonial);
        setOpenViewModal(true);
      },
    },
    {
      label: "Delete",
      onClick: (testimonial: ITestimonial) => {
        setTestimonialToDelete(testimonial);
        setOpenDeleteAlert(true);
      },
    },
  ];

  if (isLoading) return <DashboardManagementPageSkeleton />;
  if (isError) return <p>Error loading testimonials.</p>;

  return (
    <div>
      <DashboardPageHeader title="Testimonial Management" />

      <TestimonialToolbar
        onSearchChange={setSearchTerm}
        onSortChange={setSort}
      />

      <DynamicDataTable
        columns={columns}
        data={data?.data ?? []}
        actions={actions}
      />

      {/* View Modal */}
      {selectedTestimonial && (
        <TestimonialDetailsModal
          open={openViewModal}
          onOpenChange={setOpenViewModal}
          testimonial={selectedTestimonial}
        />
      )}

      {/* Delete Confirmation */}
      {testimonialToDelete && (
        <DeleteAlert
          open={openDeleteAlert}
          onOpenChange={setOpenDeleteAlert}
          description={`Are you sure you want to delete the testimonial from ${testimonialToDelete.fullName}? This action is permanent.`}
          onConfirm={async () => {
            await handleDelete(testimonialToDelete);
            setOpenDeleteAlert(false);
            setTestimonialToDelete(null);
          }}
        />
      )}
    </div>
  );
};

export default TestimonialManagementPage;
