import { FileText, Users, MessageCircle, LayoutDashboardIcon, Quote, ToolCase, Inbox, Search, Mails, Newspaper } from "lucide-react";

export const editorSidebar = [
  {
    title: "Content Management",
    items: [
      { title: "Dashboard", url: "/dashboard", icon: LayoutDashboardIcon },
      { title: "Service", url: "/dashboard/service-management", icon: ToolCase },
      { title: "Testimonial", url: "/dashboard/testimonial-management", icon: Quote },
      { title: "Articles", url: "/dashboard/article-management", icon: Newspaper },
      { title: "Tools", url: "/dashboard/tool-management", icon: ToolCase },

    ],
  },
  {
    title: "SEO Management",
    items: [
      { title: "SEO Pages", url: "/dashboard/seo", icon: Search },
    ],
  },
  {
    title: "Site Info Management",
    items: [
      { title: "Site Info", url: "/dashboard/site-info", icon: FileText },
    ],
  },
];

export const adminSidebar = [
  {
    title: "Admin Management",
    items: [
      { title: "Dashboard", url: "/dashboard", icon: LayoutDashboardIcon },
      { title: "Service", url: "/dashboard/service-management", icon: ToolCase },
      { title: "User Management", url: "/dashboard/admin/user-management", icon: Users },
      { title: "Joining Requests", url: "/dashboard/admin/joining-request-management", icon: Inbox },
      { title: "Newsletters", url: "/dashboard/admin/newsletter-management", icon: Mails },
      { title: "Messages", url: "/dashboard/admin/message-management", icon: MessageCircle },
      { title: "Testimonials", url: "/dashboard/testimonial-management", icon: Quote },
      { title: "Articles", url: "/dashboard/article-management", icon: Newspaper },
      { title: "Tools", url: "/dashboard/tool-management", icon: ToolCase },

    ],
  },
  {
    title: "SEO Management",
    items: [
      { title: "SEO Pages", url: "/dashboard/seo", icon: Search },

    ],
  },
  {
    title: "Site Info Management",
    items: [
      { title: "Site Info", url: "/dashboard/site-info", icon: FileText },
    ],
  },
];
