
// /* eslint-disable @typescript-eslint/no-explicit-any */
// "use client";

// import * as React from "react";
// import {
//   ColumnDef,
//   flexRender,
//   getCoreRowModel,
//   getFilteredRowModel,
//   getPaginationRowModel,
//   RowSelectionState,
//   useReactTable,
// } from "@tanstack/react-table";

// import {
//   Table,
//   TableBody,
//   TableCell,
//   TableHead,
//   TableHeader,
//   TableRow,
// } from "@/components/ui/table";

// import { Checkbox } from "@/components/ui/checkbox";
// import { Button } from "@/components/ui/button";
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu";

// import { MoreHorizontal } from "lucide-react";
// import { IUser } from "@/types";

// import UserDetailsModal from "./user/UserDetailsModal";
// import UpdateUserModal from "./user/UpdateUserModal";
// import DeleteAlert from "./DeleteAlert";

// import { useDeleteUserMutation } from "@/redux/features/user/user.api";
// import { toast } from "sonner";

// interface DataTableProps<T> {
//   columns: ColumnDef<T>[];
//   data: T[];
//   onEdit?: (row: T) => void;
// }

// export function DataTable<T>({ columns, data, onEdit }: DataTableProps<T>) {
//   const [rowSelection, setRowSelection] = React.useState<RowSelectionState>({});

//   // View modal state
//   const [openModal, setOpenModal] = React.useState(false);
//   const [selectedUser, setSelectedUser] = React.useState<any>(null);

//   // Update modal state
//   const [openUpdateModal, setOpenUpdateModal] = React.useState(false);
//   const [userToUpdate, setUserToUpdate] = React.useState<any>(null);

//   // Delete Alert state
//   const [openDeleteAlert, setOpenDeleteAlert] = React.useState(false);
//   const [userToDelete, setUserToDelete] = React.useState<IUser | null>(null);

//   const [deleteUser] = useDeleteUserMutation();

//   // React Table Config
//   const table = useReactTable({
//     data,
//     columns,
//     state: { rowSelection },
//     onRowSelectionChange: setRowSelection,
//     getCoreRowModel: getCoreRowModel(),
//     getFilteredRowModel: getFilteredRowModel(),
//     getPaginationRowModel: getPaginationRowModel(),
//   });

//   // Delete Handler
//   const handleDeleteUser = async (data: IUser) => {
//     try {
//       const res = await deleteUser(data._id);
//       if (res?.data?.success === true) {
//         toast.success("User deleted");
//       }
//     } catch (error) {
//       console.log(error);
//       toast.error("Failed user deletion");
//     }
//   };

//   return (
//     <div className="space-y-4">

//       {/* Table */}
//       <div className="rounded-md border">
//         <Table>
//           <TableHeader>
//             {table.getHeaderGroups().map((headerGroup) => (
//               <TableRow key={headerGroup.id}>
//                 <TableHead className="w-4 px-4">
//                   <Checkbox
//                     checked={table.getIsAllRowsSelected()}
//                     onCheckedChange={(value) =>
//                       table.toggleAllRowsSelected(!!value)
//                     }
//                   />
//                 </TableHead>

//                 {headerGroup.headers.map((header) => (
//                   <TableHead key={header.id}>
//                     {header.isPlaceholder
//                       ? null
//                       : flexRender(
//                         header.column.columnDef.header,
//                         header.getContext()
//                       )}
//                   </TableHead>
//                 ))}

//                 <TableHead className="text-right">Actions</TableHead>
//               </TableRow>
//             ))}
//           </TableHeader>

//           <TableBody>
//             {table.getRowModel().rows.length > 0 ? (
//               table.getRowModel().rows.map((row) => (
//                 <TableRow key={row.id}>
//                   <TableCell className="px-4">
//                     <Checkbox
//                       checked={row.getIsSelected()}
//                       onCheckedChange={(value) =>
//                         row.toggleSelected(!!value)
//                       }
//                     />
//                   </TableCell>

//                   {row.getVisibleCells().map((cell) => (
//                     <TableCell key={cell.id}>
//                       {flexRender(
//                         cell.column.columnDef.cell,
//                         cell.getContext()
//                       )}
//                     </TableCell>
//                   ))}

//                   {/* ACTION MENU */}
//                   <TableCell className="text-right">
//                     <DropdownMenu>
//                       <DropdownMenuTrigger asChild>
//                         <Button variant="ghost" size="sm">
//                           <MoreHorizontal className="w-4 h-4" />
//                         </Button>
//                       </DropdownMenuTrigger>

//                       <DropdownMenuContent align="end">
//                         {/* EDIT */}
//                         <DropdownMenuItem
//                           onClick={() => {
//                             setUserToUpdate(row.original);
//                             setOpenUpdateModal(true);
//                           }}
//                         >
//                           Edit
//                         </DropdownMenuItem>


//                         {/* DELETE */}
//                         <DropdownMenuItem
//                           onClick={() => {
//                             setUserToDelete(row.original as IUser);
//                             setOpenDeleteAlert(true);
//                           }}
//                         >
//                           Delete
//                         </DropdownMenuItem>

//                         {/* VIEW */}
//                         <DropdownMenuItem
//                           onClick={() => {
//                             setSelectedUser(row.original);
//                             setOpenModal(true);
//                           }}
//                         >
//                           View
//                         </DropdownMenuItem>
//                       </DropdownMenuContent>
//                     </DropdownMenu>
//                   </TableCell>

//                 </TableRow>
//               ))
//             ) : (
//               <TableRow>
//                 <TableCell
//                   colSpan={columns.length + 2}
//                   className="text-center h-24"
//                 >
//                   No results.
//                 </TableCell>
//               </TableRow>
//             )}
//           </TableBody>
//         </Table>
//       </div>

//       {/* Pagination */}
//       <div className="flex items-center justify-end space-x-2">
//         <Button
//           variant="outline"
//           size="sm"
//           onClick={() => table.previousPage()}
//           disabled={!table.getCanPreviousPage()}
//         >
//           Previous
//         </Button>

//         <Button
//           variant="outline"
//           size="sm"
//           onClick={() => table.nextPage()}
//           disabled={!table.getCanNextPage()}
//         >
//           Next
//         </Button>
//       </div>

//       {/* VIEW MODAL */}
//       <UserDetailsModal
//         open={openModal}
//         onOpenChange={setOpenModal}
//         user={selectedUser}
//       />

//       {/* UPDATE MODAL */}
//       <UpdateUserModal
//         open={openUpdateModal}
//         onOpenChange={setOpenUpdateModal}
//         user={userToUpdate}
//       />

//       {/* DELETE CONFIRMATION */}
//       {userToDelete && (
//         <DeleteAlert
//           open={openDeleteAlert}
//           onOpenChange={setOpenDeleteAlert}
//           onConfirm={async () => {
//             await handleDeleteUser(userToDelete);
//             setOpenDeleteAlert(false);
//             setUserToDelete(null);
//           }}
//         />
//       )}
//     </div>
//   );
// }


"use client";

import * as React from "react";
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  RowSelectionState,
  useReactTable,
} from "@tanstack/react-table";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MoreHorizontal } from "lucide-react";

interface ActionItem<T> {
  label: string;
  onClick: (row: T) => void;
}

interface DynamicDataTableProps<T> {
  columns: ColumnDef<T>[];
  data: T[];
  actions?: ActionItem<T>[]; // dynamic actions
}

export function DynamicDataTable<T>({
  columns,
  data,
  actions,
}: DynamicDataTableProps<T>) {
  const [rowSelection, setRowSelection] = React.useState<RowSelectionState>({});

  const table = useReactTable({
    data,
    columns,
    state: { rowSelection },
    onRowSelectionChange: setRowSelection,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  });

  return (
    <div className="space-y-4">
      {/* Table */}
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                <TableHead className="w-4 px-4">
                  <Checkbox
                    checked={table.getIsAllRowsSelected()}
                    onCheckedChange={(value) =>
                      table.toggleAllRowsSelected(!!value)
                    }
                  />
                </TableHead>

                {headerGroup.headers.map((header) => (
                  <TableHead key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </TableHead>
                ))}

                {actions && <TableHead className="text-right">Actions</TableHead>}
              </TableRow>
            ))}
          </TableHeader>

          <TableBody>
            {table.getRowModel().rows.length > 0 ? (
              table.getRowModel().rows.map((row) => (
                <TableRow key={row.id}>
                  <TableCell className="px-4">
                    <Checkbox
                      checked={row.getIsSelected()}
                      onCheckedChange={(value) =>
                        row.toggleSelected(!!value)
                      }
                    />
                  </TableCell>

                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}

                  {/* ACTION MENU */}
                  {actions && (
                    <TableCell className="text-right">
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="sm">
                            <MoreHorizontal/>
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          {actions.map((action) => (
                            <DropdownMenuItem
                              key={action.label}
                              onClick={() => action.onClick(row.original)}
                            >
                              {action.label}
                            </DropdownMenuItem>
                          ))}
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  )}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length + 2}
                  className="text-center h-24"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>

      {/* Pagination */}
      <div className="flex justify-end gap-2">
        <Button
          size="sm"
          variant="outline"
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
        >
          Previous
        </Button>
        <Button
          size="sm"
          variant="outline"
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
        >
          Next
        </Button>
      </div>
    </div>
  );
}




