import { adminSidebar, editorSidebar } from "./sidebarItems";

export const getSidebarData = (role: "ADMIN" | "EDITOR") => {
  if (role === "ADMIN") {
    return adminSidebar;
  }
  return editorSidebar;
};