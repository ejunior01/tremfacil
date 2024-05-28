
import Link from "next/link"
import {
  Home,
  Menu,
  CircleHelp,
  SquareActivity,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes"
import { ToggleTheme } from "@/components/ToggleTheme"
import { LastOccurrenceList } from "@/components/LastOccurenceList";
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, navigationMenuTriggerStyle } from "@/components/ui/NavigationMenu";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TremFacil",
  description: "Projeto desenvolvimento pelos alunos do Senac do curso de análise e desenvolvimento de sistemas",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={`${inter.className}`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex flex-col min-h-screen w-full">
            <div className="hidden border-r bg-muted/40 md:block">
              <div className="flex justify-between gap-24 items-center px-7">
                <div className="flex h-14 items-center px-4 lg:h-[60px] lg:px-6">
                  <Link href="/" className="flex items-center gap-2 font-semibold">
                    <span className="text-primary">TremFacil</span>
                  </Link>
                </div>
                <div className="flex justify-between items-center">

                  <NavigationMenu>
                    <NavigationMenuList>
                      <NavigationMenuItem>
                        <Link href="/" legacyBehavior passHref>
                          <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                            Home
                          </NavigationMenuLink>
                        </Link>
                      </NavigationMenuItem>
                      <NavigationMenuItem>
                        <Link href="/status" legacyBehavior passHref>
                          <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                            Status
                          </NavigationMenuLink>
                        </Link>
                      </NavigationMenuItem>
                      <NavigationMenuItem>
                        <Link href="/help" legacyBehavior passHref>
                          <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                            Ajuda
                          </NavigationMenuLink>
                        </Link>
                      </NavigationMenuItem>
                    </NavigationMenuList>
                  </NavigationMenu>

                  {/* <nav className="flex flex-1 items-start px-2 gap-4 text-sm font-medium lg:px-4">
                    <Link

                      href="/"
                      className="active: flex items-center gap-3 rounded-lg py-2 px-6 text-foreground transition-all hover:text-foreground active:text-foreground"
                    >
                      Home
                    </Link>
                    <Link
                      href="/status"
                      className="flex items-center gap-3 rounded-lg py-2 px-6 text-muted-foreground transition-all hover:text-foreground active:text-foreground"
                    >
                      Status
                    </Link>
                    <Link
                      href="/help"
                      className="flex items-center gap-3 rounded-lg py-2 px-6 text-muted-foreground transition-all hover:text-foreground active:text-foreground"
                    >
                      Ajuda
                    </Link>
                  </nav> */}
                </div>
                <div className="px-2 rounded-lg flex items-center">
                  <ToggleTheme />
                </div>
              </div>
            </div>
            <div className="flex flex-col">
              <header className="flex h-14 md:hidden items-center gap-4 border-b bg-muted/40 px-4">
                <Sheet>
                  <SheetTrigger asChild>
                    <Button
                      variant="outline"
                      size="icon"
                      className="shrink-0 md:hidden"
                    >
                      <Menu className="h-5 w-5" />
                      <span className="sr-only">Alternar menu de navegação</span>
                    </Button>
                  </SheetTrigger>
                  <SheetContent side="left" className="flex flex-col justify-between">
                    <nav className="grid gap-2 text-lg font-medium">
                      <Link
                        href="#"
                        className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
                      >
                        <Home className="h-5 w-5" />
                        Home
                      </Link>
                      <Link
                        href="#"
                        className="mx-[-0.65rem] flex items-center gap-4 rounded-xl bg-muted px-3 py-2 text-foreground hover:text-foreground"
                      >
                        <SquareActivity className="h-5 w-5" />
                        Status
                      </Link>
                      <Link
                        href="#"
                        className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
                      >
                        <CircleHelp className="h-5 w-5" />
                        Ajuda
                      </Link>
                    </nav>
                    <div className="px-2 mb-4 w-full rounded-lg">
                      <ToggleTheme />
                    </div>
                  </SheetContent>
                </Sheet>
                <Link
                  href="/"
                  className="mx-[-0.65rem] flex-1 flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground transition-all hover:text-primary md:flex-none"
                >
                  TremFacil
                </Link>
              </header>
              <main className="flex flex-col px-12 py-4 lg:gap-6">
                {children}
              </main>
            </div>
            {/* <div className="flex flex-col gap-2 border-l">
              <LastOccurrenceList />
            </div> */}
          </div>
        </ThemeProvider>
      </body>
    </html >
  )
}
