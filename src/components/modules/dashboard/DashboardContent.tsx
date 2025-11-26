import { useUserInfoQuery } from "@/redux/features/auth/auth.api";
import DashboardSkeleton from "./DashboardSkeleton";
import { AppSidebar } from "@/components/app-sidebar";
import { SidebarInset, SidebarTrigger } from "@/components/ui/sidebar";
import { ProfileDropdown } from "./ProfileDropdown";

export const DashboardContent = ({ children }: { children: React.ReactNode }) => {
  const { isLoading } = useUserInfoQuery(undefined);

  if (isLoading) {
    return <DashboardSkeleton />;
  }

  return (
    <>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4 justify-between">
          <SidebarTrigger className="-ml-1" />
          <ProfileDropdown/> 
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4">{children}</div>
      </SidebarInset>
    </>
  );
}