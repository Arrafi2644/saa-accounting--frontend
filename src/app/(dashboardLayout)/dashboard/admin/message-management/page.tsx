/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React from "react";
import DashboardManagementPageSkeleton from "@/components/modules/dashboard/DashboardManagePageSkeleton";
import DashboardPageHeader from "@/components/modules/dashboard/DashboardPageHeader";
import { DynamicDataTable } from "@/components/modules/dashboard/DataTable";
import { toast } from "sonner";

import { IMessage } from "@/types";
import DeleteAlert from "@/components/modules/dashboard/DeleteAlert";
import { ColumnDef } from "@tanstack/react-table";
import { useDeleteMessageMutation, useGetAllMessagesQuery } from "@/redux/features/message/message.api";
import MessageDetailsModal from "@/components/modules/dashboard/MessageDetailsModal";
import MessageToolbar from "@/components/modules/dashboard/message/MessageToolbar";


const MessageManagementPage = () => {
    const [deleteMessage] = useDeleteMessageMutation();
   const [searchTerm, setSearchTerm] = React.useState("");
    const [sort, setSort] = React.useState("");

    const { data, isLoading, isError } = useGetAllMessagesQuery({
        ...(searchTerm && { searchTerm }),
        ...(sort && { sort }),
    });

    const [selectedMessage, setSelectedMessage] = React.useState<IMessage | null>(null);
    const [openViewModal, setOpenViewModal] = React.useState(false);

    const [messageToDelete, setMessageToDelete] = React.useState<IMessage | null>(null);
    const [openDeleteAlert, setOpenDeleteAlert] = React.useState(false);

    // Delete Handler
    const handleDelete = async (item: IMessage) => {
        try {
            const res = await deleteMessage(item._id as string);
            if (res?.data?.success) {
                toast.success("Message deleted successfully");
            }
        } catch (error: any) {
            toast.error("Failed to delete message");
        }
    };

    // Table Columns
    const columns: ColumnDef<IMessage>[] = [
        { accessorKey: "fullName", header: "Full Name" },
        { accessorKey: "email", header: "Email" },
        { accessorKey: "phone", header: "Phone" },
        { accessorKey: "subject", header: "Subject" },
    ];

    // Table Actions
    const actions = [
        {
            label: "View",
            onClick: (item: IMessage) => {
                setSelectedMessage(item);
                setOpenViewModal(true);
            },
        },
        {
            label: "Delete",
            onClick: (item: IMessage) => {
                setMessageToDelete(item);
                setOpenDeleteAlert(true);
            },
        },
    ];

    if (isLoading) return <DashboardManagementPageSkeleton />;
    if (isError) return <p>Error loading messages.</p>;

    return (
        <div>
            <DashboardPageHeader title="Message Management" />

            <MessageToolbar
                onSearchChange={setSearchTerm}
                onSortChange={setSort}
            />

            <DynamicDataTable
                columns={columns}
                data={data?.data ?? []}
                actions={actions}
            />

            {/* View Modal */}
            {selectedMessage && (
                <MessageDetailsModal
                    open={openViewModal}
                    onOpenChange={setOpenViewModal}
                    message={selectedMessage}
                />
            )}

            {/* Delete Confirmation */}
            {messageToDelete && (
                <DeleteAlert
                    open={openDeleteAlert}
                    onOpenChange={setOpenDeleteAlert}
                    description={`Are you sure you want to delete this message? This action cannot be undone.`}
                    onConfirm={async () => {
                        await handleDelete(messageToDelete);
                        setOpenDeleteAlert(false);
                        setMessageToDelete(null);
                    }}
                />
            )}
        </div>
    );
};

export default MessageManagementPage;


