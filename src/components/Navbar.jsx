"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/lib/utils";
import { Button } from "./ui/moving-border";
import Projects from "./Projects"
import About from "./About"

export function NavbarDemo() {
  return (
    (<div className="relative w-full flex items-center justify-center">
      <Navbar className="top-2" />
      <p className="text-black dark:text-white">
        The Navbar will show on top of the page
      </p>
    </div>)
  );
}

export default function Navbar({
  className
}) {
  const [active, setActive] = useState(null);
  return (
    (<div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}>
        <Button
        borderRadius="1.75rem"
        className="bg-white dark:bg-transparent text-black dark:text-white border-neutral-200 dark:border-none w-full"
      >
      <Menu setActive={setActive}>
        <HoveredLink href="#home">
        <MenuItem setActive={setActive} active={active} item="Home">
        </MenuItem>
        </HoveredLink>
        <HoveredLink href='#about'>
        <MenuItem setActive={setActive} active={active} item="About">
        </MenuItem>
        </HoveredLink>
        <HoveredLink href='#projects'>
        <MenuItem setActive={setActive} active={active} item="Projects">
        </MenuItem>
        </HoveredLink>
        <HoveredLink href="#contact">
        <MenuItem setActive={setActive} active={active} item="Contact">
        </MenuItem>
        </HoveredLink>
      </Menu>
      </Button>
    </div>)
  );
}
