"use client";

import React from "react";
import { ColumnDef } from "@tanstack/react-table";
import { toast } from "sonner";

import DashboardManagementPageSkeleton from "@/components/modules/dashboard/DashboardManagePageSkeleton";
import DashboardPageHeader from "@/components/modules/dashboard/DashboardPageHeader";
import { DynamicDataTable } from "@/components/modules/dashboard/DataTable";
import DeleteAlert from "@/components/modules/dashboard/DeleteAlert";

import ArticleToolbar from "@/components/modules/dashboard/article/ArticleToolbar";
import ArticleDetailsModal from "@/components/modules/dashboard/article/ArticleDetailsModal";
import UpdateArticleModal from "@/components/modules/dashboard/article/UpdateArticleModal";

import {
  useGetAllArticlesQuery,
  useDeleteArticleMutation,
} from "@/redux/features/article/article.api";

import { IArticle } from "@/types";
import TablePagination from "@/components/modules/shared/tablePagination/TablePagination";

const ArticleManagementPage = () => {
  const [deleteArticle] = useDeleteArticleMutation();

  const [searchTerm, setSearchTerm] = React.useState("");
  const [sort, setSort] = React.useState("");
  const [page, setPage] = React.useState(1);
  const limit = 10;

  const { data, isLoading, isError } = useGetAllArticlesQuery({
    ...(searchTerm && { searchTerm }),
    ...(sort && { sort }),
    page,
    limit
  });

  // Modal states
  const [selectedArticle, setSelectedArticle] =
    React.useState<IArticle | null>(null);
  const [openViewModal, setOpenViewModal] = React.useState(false);

  const [articleToUpdate, setArticleToUpdate] =
    React.useState<IArticle | null>(null);
  const [openUpdateModal, setOpenUpdateModal] = React.useState(false);

  const [articleToDelete, setArticleToDelete] =
    React.useState<IArticle | null>(null);
  const [openDeleteAlert, setOpenDeleteAlert] = React.useState(false);

  // Delete handler
  const handleDelete = async (article: IArticle) => {
    try {
      const res = await deleteArticle(article._id);
      if (res?.data?.success) {
        await fetch("/api/revalidate/articles", { method: "POST" });
        toast.success("Article deleted successfully");
      }
    } catch {
      toast.error("Failed to delete article");
    }
  };

  // Columns
  const columns: ColumnDef<IArticle>[] = [
    { accessorKey: "title", header: "Title" },
    { accessorKey: "category", header: "Category" },
    { accessorKey: "readTime", header: "Read Time" },
  ];

  // Actions
  const actions = [
    {
      label: "View",
      onClick: (article: IArticle) => {
        setSelectedArticle(article);
        setOpenViewModal(true);
      },
    },
    {
      label: "Edit",
      onClick: (article: IArticle) => {
        setArticleToUpdate(article);
        setOpenUpdateModal(true);
      },
    },
    {
      label: "Delete",
      onClick: (article: IArticle) => {
        setArticleToDelete(article);
        setOpenDeleteAlert(true);
      },
    },
  ];

  if (isLoading) return <DashboardManagementPageSkeleton />;
  if (isError) return <p>Error loading articles.</p>;

  return (
    <div>
      <DashboardPageHeader title="Article Management" />

      <ArticleToolbar
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

      {/* View Modal */}
      {selectedArticle && (
        <ArticleDetailsModal
          open={openViewModal}
          onOpenChange={setOpenViewModal}
          article={selectedArticle}
        />
      )}

      {/* Update Modal */}
      {articleToUpdate && (
        <UpdateArticleModal
          open={openUpdateModal}
          onOpenChange={setOpenUpdateModal}
          article={articleToUpdate}
        />
      )}

      {/* Delete Confirmation */}
      {articleToDelete && (
        <DeleteAlert
          open={openDeleteAlert}
          onOpenChange={setOpenDeleteAlert}
          description={`Are you sure you want to delete "${articleToDelete.title}"? This action cannot be undone.`}
          onConfirm={async () => {
            await handleDelete(articleToDelete);
            setOpenDeleteAlert(false);
            setArticleToDelete(null);
          }}
        />
      )}
    </div>
  );
};

export default ArticleManagementPage;
