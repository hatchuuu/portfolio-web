import { House, LayoutTemplate, Users, Wrench } from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { Link } from "react-router-dom";

const items = [
  {
    title: "HOME",
    url: "/",
    icon: House,
  },
  {
    title: "PENGALAMAN",
    url: "/experience",
    icon: Wrench,
  },
  {
    title: "PROJEK",
    url: "/project",
    icon: LayoutTemplate,
  },
  {
    title: "KONTAK",
    url: "/contact",
    icon: Users,
  },
];

export const AppSidebar = () => {
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="py-10 bg-main mb-2">
            <h1 className="uppercase font-bold text-black text-sm sm:text-xl text-center w-full">
              RYAN KUSUMA PORTFOLIO
            </h1>
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem
                  key={item.title}
                  className="flex items-center justify-center group"
                >
                  <SidebarMenuButton asChild>
                    <Link to={item.url} className="h-[40px] text-lg font-bold">
                      <item.icon className="text-black group-hover:text-white" />
                      <span className="text-black group-hover:text-white">
                        {item.title}
                      </span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
};
