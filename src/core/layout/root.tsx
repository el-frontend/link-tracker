import { PropsWithChildren } from "react";
import { SidebarInset, SidebarProvider } from "../components/ui/sidebar";
import { SiteHeader } from "./header/site-header";
import { AppSidebar } from "./sidebar/app-sidebar";

const AppRootLayout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <SidebarProvider
      style={
        {
          "--sidebar-width": "calc(var(--spacing) * 72)",
          "--header-height": "calc(var(--spacing) * 12)",
        } as React.CSSProperties
      }
    >
      <AppSidebar variant="inset" />
      <SidebarInset>
        <SiteHeader />
        {children}
      </SidebarInset>
    </SidebarProvider>
  );
};

export default AppRootLayout;
