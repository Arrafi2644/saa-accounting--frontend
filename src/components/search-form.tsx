// import { Search } from "lucide-react"

import { Search } from "lucide-react";
import { Label } from "./ui/label";
import { SidebarGroup, SidebarGroupContent, SidebarInput } from "./ui/sidebar";

// import { Label } from "@/components/ui/label"
// import {
//   SidebarGroup,
//   SidebarGroupContent,
//   SidebarInput,
// } from "@/components/ui/sidebar"

// export function SearchForm({ ...props }: React.ComponentProps<"form">) {
//   return (
//     <form {...props}>
//       <SidebarGroup className="p-0">
//         <SidebarGroupContent className="relative">
//           <Label htmlFor="search" className="sr-only">
//             Search
//           </Label>
//           <SidebarInput
//             id="search"
//             placeholder="Search the docs..."
//             className="pl-8"
//           />
//           <Search className="pointer-events-none absolute top-1/2 left-2 size-4 -translate-y-1/2 opacity-50 select-none" />
//         </SidebarGroupContent>
//       </SidebarGroup>
//     </form>
//   )
// }


export function SearchForm({ onSearchChange, ...props }: React.ComponentProps<"form"> & {
  onSearchChange?: (value: string) => void;
}) {
  return (
    <form {...props}>
      <SidebarGroup className="p-0">
        <SidebarGroupContent className="relative">
          <Label htmlFor="search" className="sr-only">
            Search
          </Label>
          <SidebarInput
            id="search"
            placeholder="Search..."
            className="pl-8"
            onChange={(e) => onSearchChange?.(e.target.value)} // ⭐ value pass
          />
          <Search className="pointer-events-none absolute top-1/2 left-2 size-4 -translate-y-1/2 opacity-50 select-none" />
        </SidebarGroupContent>
      </SidebarGroup>
    </form>
  );
}
