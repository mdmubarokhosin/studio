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
import { SheetTitle } from '@/components/ui/sheet';

function AppHeader() {
  const { isMobile } = useSidebar();
  return (
    <header className="sticky top-0 z-40 flex h-14 items-center gap-4 border-b bg-background/80 px-4 backdrop-blur-sm md:h-16 md:px-6">
      <div className="flex w-full items-center justify-between">
        <div className="flex items-center gap-2">
          {isMobile && <SidebarTrigger />}
          <Link
            href="/"
            className="font-headline text-lg md:text-xl font-bold text-primary"
          >
            {appName}
          </Link>
        </div>
        {!isMobile && <SidebarTrigger />}
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
    <Sidebar collapsible="offcanvas" variant="floating">
      <SidebarHeader>
        <SheetTitle className="sr-only">Main Menu</SheetTitle>
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
              <Link href={link.href} passHref>
                <SidebarMenuButton
                  as="a"
                  isActive={pathname === link.href}
                  onClick={handleLinkClick}
                >
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
      <AppSidebar />
      <SidebarInset className="flex min-h-screen flex-col">
        <AppHeader />
        <div className="flex-1">{children}</div>
      </SidebarInset>
    </SidebarProvider>
  );
}
