"use client";

import Link from "next/link";
import * as React from "react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar";
import { useUserInfoQuery } from "@/redux/features/auth/auth.api";
import { getSidebarData } from "@/utils/getSidebarData";
import { usePathname } from "next/navigation";


export function AppSidebar(props: React.ComponentProps<typeof Sidebar>) {
  const pathname = usePathname();
  const { data, isLoading, isError } = useUserInfoQuery(undefined);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-full text-sm text-muted-foreground">
        Loading sidebar...
      </div>
    );
  }

  if (isError || !data?.data?.role) {
    return (
      <div className="flex items-center justify-center h-full text-red-500 text-sm">
        Failed to load user info
      </div>
    );
  }

  const role = data?.data?.role as "ADMIN" | "EDITOR";
  const sidebarData = getSidebarData(role);

  return (
    <Sidebar {...props}>
      <SidebarHeader>
        <h2 className="text-lg font-semibold px-2">
          {role === "ADMIN" ? "Admin Dashboard" : "Editor Dashboard"}
        </h2>
      </SidebarHeader>

      <SidebarContent>
        {sidebarData.map((section, sectionIndex) => (
          <SidebarGroup key={`${section.title}-${sectionIndex}`}>
            <SidebarGroupLabel>{section.title}</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {section.items.map((item, itemIndex) => (
                  <SidebarMenuItem key={`${item.url}-${itemIndex}`}>
                    <SidebarMenuButton asChild>
                      <Link
                        href={item.url}
                        className={`w-full flex items-center gap-2 text-sm transition-colors ${pathname === item.url
                            ? "text-foreground bg-background font-semibold"
                            : "text-muted-foreground hover:text-foreground"
                          }`}
                      >
                        {item.icon && <item.icon className="w-4 h-4" />} {/* Render icon */}
                        {item.title}
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>

                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>


      <SidebarRail />
    </Sidebar>
  );
}
