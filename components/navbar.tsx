"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { LayoutDashboard, Users, Calendar, ClipboardList, LogOut } from "lucide-react"
import { cn } from "@/lib/utils"
import { ThemeToggle } from "@/components/theme-toggle"

const navItems = [
  { href: "/dashboard", icon: LayoutDashboard, label: "Дашборд" },
  { href: "/students", icon: Users, label: "Ученики" },
  { href: "/schedule", icon: Calendar, label: "Расписание" },
  { href: "/plan", icon: ClipboardList, label: "План" },
]

export function Navbar() {
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/dashboard" className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
            <span className="text-sm font-bold text-primary-foreground">ЕГЭ</span>
          </div>
          <span className="hidden font-heading font-semibold sm:inline-block">Больше чем ЕГЭ</span>
        </Link>

        <nav className="flex items-center gap-1 sm:gap-2">
          {navItems.map((item) => {
            const isActive = pathname === item.href
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "flex flex-col items-center gap-1 rounded-lg px-3 py-2 text-sm transition-colors hover:bg-secondary",
                  isActive ? "bg-secondary text-primary" : "text-muted-foreground",
                )}
              >
                <item.icon className="h-5 w-5" />
                <span className="hidden text-xs sm:inline-block">{item.label}</span>
              </Link>
            )
          })}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Link
            href="/auth"
            className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
          >
            <LogOut className="h-5 w-5" />
            <span className="hidden sm:inline-block">Выход</span>
          </Link>
        </div>
      </div>
    </header>
  )
}
