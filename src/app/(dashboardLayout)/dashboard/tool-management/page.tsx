
"use client";

import { useState } from "react";
import DashboardPageHeader from "@/components/modules/dashboard/DashboardPageHeader";
import DeleteAlert from "@/components/modules/dashboard/DeleteAlert";
import {
  useGetAllToolsQuery,
  useDeleteToolMutation,
} from "@/redux/features/tool/tool.api";
import { toast } from "sonner";
import { ITool } from "@/types";
import UpdateToolModal from "@/components/modules/dashboard/tool/UpdateToolModal";
import ToolDetailsModal from "@/components/modules/dashboard/tool/ToolDetailsModal";
import CreateToolModal from "@/components/modules/dashboard/tool/CreateToolModal";
import ToolToolbar from "@/components/modules/dashboard/tool/ToolToolbar";
import { DynamicDataTable } from "@/components/modules/dashboard/DataTable";
import TablePagination from "@/components/modules/shared/tablePagination/TablePagination";

const ToolManagementPage = () => {
  const [page, setPage] = useState(1);
  const limit = 10;

  const [searchTerm, setSearchTerm] = useState("");
  const [sort, setSort] = useState("");

  const { data, isLoading, isError } = useGetAllToolsQuery({
    page,
    limit,
    ...(searchTerm && { searchTerm }),
    ...(sort && { sort }),
  });

  const [deleteTool] = useDeleteToolMutation();

  const [selectedTool, setSelectedTool] = useState<ITool | null>(null);
  const [openViewModal, setOpenViewModal] = useState(false);

  const [toolToUpdate, setToolToUpdate] = useState<ITool | null>(null);
  const [openUpdateModal, setOpenUpdateModal] = useState(false);

  const [toolToDelete, setToolToDelete] = useState<ITool | null>(null);
  const [openDeleteAlert, setOpenDeleteAlert] = useState(false);

  const handleDelete = async (tool: ITool) => {
    try {
      const res = await deleteTool(tool._id!).unwrap();
      if (res.success) {
        await fetch("/api/revalidate/tools", { method: "POST" });
        toast.success("Tool deleted successfully");
      }
    } catch {
      toast.error("Failed to delete tool");
    }
  };

  const columns = [
    { accessorKey: "title", header: "Title" },
    { accessorKey: "description", header: "Description" },
    { accessorKey: "icon", header: "Icon URL" },
    { accessorKey: "status", header: "Status" },
  ];

  const actions = [
    {
      label: "View",
      onClick: (tool: ITool) => {
        setSelectedTool(tool);
        setOpenViewModal(true);
      },
    },
    {
      label: "Edit",
      onClick: (tool: ITool) => {
        setToolToUpdate(tool);
        setOpenUpdateModal(true);
      },
    },
    {
      label: "Delete",
      onClick: (tool: ITool) => {
        setToolToDelete(tool);
        setOpenDeleteAlert(true);
      },
    },
  ];

  if (isLoading) return <p>Loading tools...</p>;
  if (isError) return <p>Error loading tools.</p>;

  return (
    <div>
      <DashboardPageHeader title="Tool Management" />

      <div className="flex justify-between items-center mb-4">
        <ToolToolbar
          onSearchChange={setSearchTerm}
          onSortChange={setSort}
        />
        <CreateToolModal />
      </div>

      {/* Table */}
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
      {selectedTool && (
        <ToolDetailsModal
          open={openViewModal}
          onOpenChange={setOpenViewModal}
          tool={selectedTool}
        />
      )}

      {/* Update Modal */}
      {toolToUpdate && (
        <UpdateToolModal
          open={openUpdateModal}
          onOpenChange={setOpenUpdateModal}
          tool={toolToUpdate}
        />
      )}

      {/* Delete Alert */}
      {toolToDelete && (
        <DeleteAlert
          open={openDeleteAlert}
          onOpenChange={setOpenDeleteAlert}
          description={`Are you sure you want to delete ${toolToDelete.title}? This action is permanent.`}
          onConfirm={async () => {
            await handleDelete(toolToDelete);
            setOpenDeleteAlert(false);
            setToolToDelete(null);
          }}
        />
      )}
    </div>
  );
};

export default ToolManagementPage;
