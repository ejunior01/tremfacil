"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Menubar, MenubarCheckboxItem, MenubarContent, MenubarItem, MenubarMenu, MenubarRadioGroup, MenubarRadioItem, MenubarSeparator, MenubarShortcut, MenubarSub, MenubarSubContent, MenubarSubTrigger, MenubarTrigger } from "@/components/ui/menubar"

export function ToggleTheme() {
    const { setTheme } = useTheme()

    return (
        <Menubar className="gap-1 md:px-2 md:py-4 md:h-11">
            <MenubarMenu>
                <MenubarTrigger onClick={() => setTheme("light")} className="cursor-pointer flex-1 flex sm:gap-1 md:gap-2 justify-center not:dark:bg-primary">
                    <Sun className="h-4 w-4" />
                    Light
                </MenubarTrigger>
            </MenubarMenu>
            <MenubarMenu>
                <MenubarTrigger onClick={() => setTheme("dark")} className="cursor-pointer flex-1 flex sm:gap-1 md:gap-2 justify-center dark:bg-muted">
                    <Moon className="h-4 w-4" />
                    Dark
                </MenubarTrigger>
            </MenubarMenu>
        </Menubar>
    )
}
