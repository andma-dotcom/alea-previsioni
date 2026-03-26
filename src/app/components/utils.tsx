import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { VariantProps, cva } from "class-variance-authority"

// Import corretti dai componenti UI
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { Separator } from "./ui/separator"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "./ui/tooltip"
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet"
import { useIsMobile } from "./use-mobile"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Qui sotto ci sarà il resto del codice della tua Sidebar (SidebarContext, ecc.)
// NON cancellare le funzioni che iniziano con "export function Sidebar" 
// se sono già presenti nel tuo file originale!