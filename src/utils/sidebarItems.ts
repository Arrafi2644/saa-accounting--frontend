import { Home, FileText, Users, MessageCircle, LayoutDashboardIcon, Quote, ToolCase, Grid, Share2, Inbox, Search, Info } from "lucide-react";

export const editorSidebar = [
  {
    title: "Content Management",
    items: [
      { title: "Dashboard", url: "/dashboard", icon: LayoutDashboardIcon },
      { title: "Service", url: "/dashboard/service-management", icon: ToolCase },
      { title: "Service Type", url: "/dashboard/service-type-management", icon: Grid },
      { title: "Testimonial", url: "/dashboard/testimonial-management", icon: Quote },
    ],
  },
  {
    title: "SEO Management",
    items: [
       { title: "SEO Pages", url: "/dashboard/seo", icon: Search},
    ],
  },
   {
    title: "Site Info Management",
    items: [
       { title: "Site Info", url: "/dashboard/site-info", icon: FileText},
    ],
  },
];

export const adminSidebar = [
  {
    title: "Admin Management",
    items: [
      { title: "Dashboard", url: "/dashboard", icon: LayoutDashboardIcon },
      { title: "Service", url: "/dashboard/service-management", icon: ToolCase },
      { title: "Service Type", url: "/dashboard/service-type-management", icon: Grid },
      { title: "User Management", url: "/dashboard/admin/user-management", icon: Users },
      { title: "Joining Requests", url: "/dashboard/admin/joining-request-management", icon: Inbox },
      { title: "Referral Data", url: "/dashboard/admin/referrals-management", icon: Share2 },
      { title: "Messages", url: "/dashboard/admin/message-management", icon: MessageCircle },
      { title: "Testimonial", url: "/dashboard/testimonial-management", icon: Quote },
      { title: "Site Info", url: "/dashboard/site-info", icon: Info }
    ],
  },
  {
    title: "SEO Management",
    items: [
      { title: "SEO Pages", url: "/dashboard/seo", icon: Search},
    
    ],
  },
   {
    title: "Site Info Management",
    items: [
       { title: "Site Info", url: "/dashboard/site-info", icon: FileText},
    ],
  },
];
