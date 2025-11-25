"use client";



import * as React from "react";



export interface SidebarContextProps {

  state: "expanded" | "collapsed";

  open: boolean;

  setOpen: (value: boolean | ((value: boolean) => boolean)) => void;

  isMobile: boolean;

  openMobile: boolean;

  setOpenMobile: (value: boolean) => void;

  toggleSidebar: () => void;

}



export const SidebarContext = React.createContext<SidebarContextProps | undefined>(undefined);



export function useSidebar(): SidebarContextProps {

  const context = React.useContext(SidebarContext);

  if (!context) {

    throw new Error("useSidebar must be used within a SidebarProvider");

  }

  return context;

}
