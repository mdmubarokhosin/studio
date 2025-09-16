'use client';

import * as React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  SidebarProvider,
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarInset,
  SidebarTrigger,
  useSidebar,
} from '@/components/ui/sidebar';
import { appName, navLinks } from '@/data/content';
import ResponsiveNav from './responsive-nav';

function AppHeader() {
  const { isMobile, toggleSidebar } = useSidebar();
  return (
    <header className="sticky top-0 z-40 flex h-14 items-center gap-4 border-b bg-background/80 px-4 backdrop-blur-sm md:h-16 md:px-6">
      <div className="flex w-full items-center justify-between">
        <div className="flex items-center gap-2">
          {isMobile && <SidebarTrigger onClick={toggleSidebar} />}
          <Link
            href="/"
            className="font-headline text-lg md:text-xl font-bold text-primary"
          >
            {appName}
          </Link>
        </div>
        {!isMobile && <SidebarTrigger onClick={toggleSidebar} />}
      </div>
    </header>
  );
}

function AppSidebar() {
  const pathname = usePathname();
  const { setOpenMobile } = useSidebar();

  const handleLinkClick = () => {
    setOpenMobile(false);
  };

  return (
    <Sidebar>
      <SidebarHeader>
        <Link
          href="/"
          className="font-headline text-xl font-bold text-primary"
          onClick={handleLinkClick}
        >
          {appName}
        </Link>
      </SidebarHeader>
      <SidebarContent>
        <SidebarMenu>
          {navLinks.map((link) => (
            <SidebarMenuItem key={link.href}>
              <Link href={link.href} onClick={handleLinkClick}>
                <SidebarMenuButton isActive={pathname === link.href}>
                  <link.icon />
                  {link.label}
                </SidebarMenuButton>
              </Link>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>
    </Sidebar>
  );
}

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <div className="flex min-h-screen flex-col">
        <AppSidebar />
        <ResponsiveNav />
        <SidebarInset>
          <AppHeader />
          <div className="flex-1">{children}</div>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
}
