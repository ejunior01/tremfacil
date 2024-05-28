import Image from "next/image"
import Link from "next/link"
import {
  ChevronLeft,
  ChevronRight,
  CircleCheck,
  CircleHelp,
  Construction,
  CreditCard,
  Home,
  LineChart,
  PanelLeft,
  Search,
} from "lucide-react"

import { Badge } from "@/components/ui/badge"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
} from "@/components/ui/breadcrumb"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import {
  Pagination,
  PaginationContent,
  PaginationItem,
} from "@/components/ui/pagination"
import { Separator } from "@/components/ui/separator"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  TooltipProvider
} from "@/components/ui/tooltip"
import { ThemeSwitcher } from "@/components/ThemeSwitcher"
import { format, subDays } from 'date-fns';
import { ptBR } from "date-fns/locale"

const generateDates = () => {
  const dates = [];
  const today = new Date();

  for (let i = 0; i <= 45; i += 10) {
    const date = subDays(today, i);
    dates.push(date);
  }

  return dates;
};


const renderDates = (dates: Date[]) => {
  return (
    dates.map((date: Date, index: number) => (
      <span key={index} className="date-item block capitalize">
        {format(date, 'dd MMM', { locale: ptBR })}
      </span>
    ))
  );
};

const dates = generateDates();

export default function Dashboard() {
  return (
    <TooltipProvider>
      <div className="flex min-h-screen w-full flex-col bg-muted/40">
        <aside className="fixed inset-y-0 left-0 z-10 hidden w-14 flex-col border-r bg-background sm:flex">
          <nav className="flex flex-col items-center gap-4 px-2 sm:py-5">
            <Link
              href="#"
              className="group flex h-9 w-9 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:h-8 md:w-8 md:text-base"
            >
              T
              <span className="sr-only">Acme Inc</span>
            </Link>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href="#"
                  className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
                >
                  <Home className="h-5 w-5" />
                  <span className="sr-only">Home</span>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right">Home</TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href="#"
                  className="flex h-9 w-9 items-center justify-center rounded-lg text-accent-foreground transition-colors hover:text-foreground md:h-8 md:w-8"

                >
                  <LineChart className="h-5 w-5" />
                  <span className="sr-only">Status</span>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right">Status</TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href="#"
                  className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
                >
                  <CircleHelp className="h-5 w-5" />
                  <span className="sr-only">Help</span>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right">Help</TooltipContent>
            </Tooltip>
          </nav>
        </aside>
        <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
          <header className="sticky top-0 z-30 flex h-20 items-center gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
            <Sheet>
              <SheetTrigger asChild>
                <Button size="icon" variant="outline" className="sm:hidden">
                  <PanelLeft className="h-5 w-5" />
                  <span className="sr-only">Toggle Menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="sm:max-w-xs">
                <nav className="grid gap-6 text-lg font-medium">
                  <Link
                    href="#"
                    className="group flex h-10 w-10 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:text-base"
                  >
                    T
                    <span className="sr-only">Acme Inc</span>
                  </Link>
                  <Link
                    href="#"
                    className="flex items-center gap-4 px-2.5 text-foreground hover:text-foreground"
                  >
                    <Home className="h-5 w-5" />
                    Home
                  </Link>
                  <Link
                    href="#"
                    className="flex items-center gap-4 px-2.5 text-muted-foreground"
                  >
                    <LineChart className="h-5 w-5" />
                    Status
                  </Link>
                  <Link
                    href="#"
                    className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                  >
                    <CircleHelp className="h-5 w-5" />
                    Help
                  </Link>
                </nav>
              </SheetContent>
            </Sheet>
            <Breadcrumb className="hidden md:flex">
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink asChild>
                    <Link href="/">Home</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
            <ThemeSwitcher className="ml-auto flex-1 grow-0" />
          </header>
          <main className="md:grid flex-1 md:items-start p-4 sm:px-6 sm:py-0 md:gap-8 lg:grid-cols-3 xl:grid-cols-3 flex flex-col gap-6">
            <div className="flex flex-col md:grid md:auto-rows-max md:items-start gap-4 md:gap-8 lg:col-span-2">
              <div className="flex flex-col gap-4">
                <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4">
                  <Card
                    className="sm:col-span-2 flex flex-col justify-between" x-chunk="dashboard-05-chunk-0"
                  >
                    <CardHeader className="pb-3">
                      <CardTitle>Visualizar Status por Estação</CardTitle>
                      <CardDescription className="max-w-lg text-balance leading-relaxed">
                        Veja o status atualizado de uma estação específica
                      </CardDescription>
                    </CardHeader>
                    <CardFooter>
                      <Button className="w-full">Selecionar</Button>
                    </CardFooter>
                  </Card>
                  <Card
                    className="sm:col-span-2 flex flex-col justify-between" x-chunk="dashboard-05-chunk-0"
                  >
                    <CardHeader className="pb-3">
                      <CardTitle>Relatar um problema em uma estação</CardTitle>
                      <CardDescription className="max-w-lg leading-relaxed">
                        Reporte problemas, atrasos ou outras questões relacionadas ao serviço de trens
                      </CardDescription>
                    </CardHeader>
                    <CardFooter>
                      <Button className="w-full">Selecionar</Button>
                    </CardFooter>
                  </Card>
                </div>
              </div>
              <div className="flex flex-col gap-5">
                <h2 className="text-xl font-semibold leading-none tracking-tight">Status das Operadoras</h2>
                <ul className="flex flex-col gap-4 lg:grid lg:grid-cols-2">
                  <li>
                    <Card>
                      <CardHeader className="flex flex-row gap-2 items-center justify-between py-4 mb-2">
                        <CardTitle className="flex flex-row gap-2 items-center text-xl">

                          <Image
                            width={28}
                            height={28}
                            src={"/cptm-logo.svg"}
                            alt=""
                          />
                          CPTM
                        </CardTitle>
                        <Badge className="rounded-sm py-2 px-3 flex items-center justify-center gap-2 text-card-foreground transition-colors" variant={"outline"}>
                          <div className="relative h-3 w-3">
                            <div
                              className="absolute inset-0 m-auto h-3 w-3 animate-ping items-center justify-center rounded-full group-hover:animate-none bg-green-500"></div>
                            <div className="absolute inset-0 z-10 m-auto h-3 w-3 rounded-full bg-green-500"></div>
                          </div>
                          <div className="flex">
                            <span className="text-xs font-bold">Operação normal</span>
                          </div>
                        </Badge>
                      </CardHeader>
                      <CardContent className="flex flex-col gap-4">
                        <div className="flex gap-3 flex-col">
                          <div className="flex justify-between gap-[0.10rem] md:gap-1 lg:gap-1">
                            {
                              Array.from({ length: 45 }).map((_, index) => {
                                return (
                                  <a key={index} href="#">
                                    <span className="transition bg-[#84da83] fill-[#84da83] h-7 w-1 md:w-[0.45rem] lg:w-1 rounded-md block" >
                                    </span>
                                  </a>
                                )
                              })
                            }
                          </div>
                          <div className="flex justify-between gap-2 text-sm">
                            {renderDates(dates)}
                          </div>
                        </div>
                        <span className="text-xs text-muted-foreground text-end w-full block mt-2">Atualizado em 24/05/2024 ás 10:10</span>
                      </CardContent>
                    </Card>
                  </li>
                  <li>
                    <Card>
                      <CardHeader className="flex flex-row gap-2 items-center justify-between py-4 mb-2">
                        <CardTitle className="flex flex-row gap-2 items-center text-lg lg:text-xl">

                          <Image
                            width={28}
                            height={28}
                            src={"/viamobilidade-logo.svg"}
                            alt=""
                          />
                          ViaMobilidade
                        </CardTitle>
                        <Badge className="rounded-sm py-2 px-3 flex items-center justify-center gap-2 text-card-foreground transition-colors" variant={"outline"}>
                          <div className="relative h-3 w-3">
                            <div
                              className="absolute inset-0 m-auto h-3 w-3 animate-ping items-center justify-center rounded-full group-hover:animate-none bg-green-500"></div>
                            <div className="absolute inset-0 z-10 m-auto h-3 w-3 rounded-full bg-green-500"></div>
                          </div>
                          <div className="flex">
                            <span className="text-xs font-bold">Operação normal</span>
                          </div>
                        </Badge>
                      </CardHeader>
                      <CardContent className="flex flex-col gap-4">
                        <div className="flex gap-3 flex-col">
                          <div className="flex justify-between gap-[0.10rem] md:gap-1 lg:gap-1">
                            {
                              Array.from({ length: 45 }).map((_, index) => {
                                return (
                                  <Tooltip key={index}>
                                    <TooltipTrigger asChild>
                                      <Link
                                        href="#"
                                        className="cursor-default"
                                      >
                                        <span className="transition-all bg-[#84da83] fill-[#84da83] hover:bg-[#31a350] hover:fill-[#31a350] h-7 w-1 md:w-[0.45rem] lg:w-1 rounded-md block" >
                                        </span>
                                      </Link>
                                    </TooltipTrigger>
                                    <TooltipContent side="top">
                                      <div className="flex flex-col gap-2 px-2 justify-start text-muted-foreground text-xs">
                                        <span className="capitalize">qui, 16 de mai de 2024</span>
                                        <span className="flex gap-1 items-center">
                                          <CircleCheck size={16} color="#31a350" />
                                          Sem ocorrências
                                        </span>
                                      </div>

                                    </TooltipContent>
                                  </Tooltip>
                                )
                              })
                            }
                          </div>
                          <div className="flex justify-between gap-2 text-sm">
                            {renderDates(dates)}
                          </div>
                        </div>
                        <span className="text-xs text-muted-foreground text-end w-full block mt-2">Atualizado em 24/05/2024 ás 10:10</span>
                      </CardContent>
                    </Card>
                  </li>
                </ul>
              </div>
            </div>
            <div>
              <Card
                className="overflow-hidden" x-chunk="dashboard-05-chunk-4"
              >
                <CardHeader className="flex flex-row items-start bg-muted/50 p-5">
                  <div className="grid gap-0.5">
                    <CardTitle className="group flex items-center gap-2 text-lg">
                      Últimas ocorrências reportadas
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="p-6 text-sm">


                  <div className="grid grid-cols-[24px_1fr_1fr] gap-2 items-center justify-between">
                    <Image
                      src={"/cptm-logo.svg"}
                      alt=""
                      width={24}
                      height={24}
                      quality={100}
                    />
                    <div className="flex items-center gap-2">
                      <h3 className="text-sm leading-none tracking-tight font-semibold">Berrini</h3>
                      <p className="text-sm text-muted-foreground font-medium">9 - Esmeralda</p>
                    </div>
                    <div className="justify-self-end">
                      <div className="text-xs text-right text-yellow-500 font-semibold">Via interditada</div>
                      <span className="text-xs text-muted-foreground text-end">22/10/25 18:24:23</span>
                    </div>
                  </div>
                  <Separator className="my-2" />
                  <div className="grid grid-cols-[24px_1fr_1fr] gap-2 items-center justify-between">
                    <Image
                      src={"/cptm-logo.svg"}
                      alt=""
                      width={24}
                      height={24}
                      quality={100}
                    />
                    <div className="flex items-center gap-2">
                      <h3 className="text-sm leading-none tracking-tight font-semibold">Berrini</h3>
                      <p className="text-sm text-muted-foreground font-medium">9 - Esmeralda</p>
                    </div>
                    <div className="justify-self-end">
                      <div className="text-xs text-right text-yellow-500 font-semibold">Via interditada</div>
                      <span className="text-xs text-muted-foreground text-end">22/10/25 18:24:23</span>
                    </div>
                  </div>
                  <Separator className="my-2" />
                  <div className="grid grid-cols-[24px_1fr_1fr] gap-2 items-center justify-between">
                    <Image
                      src={"/cptm-logo.svg"}
                      alt=""
                      width={24}
                      height={24}
                      quality={100}
                    />
                    <div className="flex items-center gap-2">
                      <h3 className="text-sm leading-none tracking-tight font-semibold">Berrini</h3>
                      <p className="text-sm text-muted-foreground font-medium">9 - Esmeralda</p>
                    </div>
                    <div className="justify-self-end">
                      <div className="text-xs text-right text-yellow-500 font-semibold">Via interditada</div>
                      <span className="text-xs text-muted-foreground text-end">22/10/25 18:24:23</span>
                    </div>
                  </div>
                  <Separator className="my-2" />
                  <div className="grid grid-cols-[24px_1fr_1fr] gap-2 items-center justify-between">
                    <Image
                      src={"/cptm-logo.svg"}
                      alt=""
                      width={24}
                      height={24}
                      quality={100}
                    />
                    <div className="flex items-center gap-2">
                      <h3 className="text-sm leading-none tracking-tight font-semibold">Berrini</h3>
                      <p className="text-sm text-muted-foreground font-medium">9 - Esmeralda</p>
                    </div>
                    <div className="justify-self-end">
                      <div className="text-xs text-right text-yellow-500 font-semibold">Via interditada</div>
                      <span className="text-xs text-muted-foreground text-end">22/10/25 18:24:23</span>
                    </div>
                  </div>
                  <Separator className="my-2" />
                  <div className="grid grid-cols-[24px_1fr_1fr] gap-2 items-center justify-between">
                    <Image
                      src={"/cptm-logo.svg"}
                      alt=""
                      width={24}
                      height={24}
                      quality={100}
                    />
                    <div className="flex items-center gap-2">
                      <h3 className="text-sm leading-none tracking-tight font-semibold">Berrini</h3>
                      <p className="text-sm text-muted-foreground font-medium">9 - Esmeralda</p>
                    </div>
                    <div className="justify-self-end">
                      <div className="text-xs text-right text-yellow-500 font-semibold">Via interditada</div>
                      <span className="text-xs text-muted-foreground text-end">22/10/25 18:24:23</span>
                    </div>
                  </div>
                  <Separator className="my-2" />
                  <div className="grid grid-cols-[24px_1fr_1fr] gap-2 items-center justify-between">
                    <Image
                      src={"/cptm-logo.svg"}
                      alt=""
                      width={24}
                      height={24}
                      quality={100}
                    />
                    <div className="flex items-center gap-2">
                      <h3 className="text-sm leading-none tracking-tight font-semibold">Berrini</h3>
                      <p className="text-sm text-muted-foreground font-medium">9 - Esmeralda</p>
                    </div>
                    <div className="justify-self-end">
                      <div className="text-xs text-right text-yellow-500 font-semibold">Via interditada</div>
                      <span className="text-xs text-muted-foreground text-end">22/10/25 18:24:23</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex flex-row items-center border-t bg-muted/50 px-6 py-3 mt-2">
                  <div className="text-xs text-muted-foreground">
                    Atualizado há <time dateTime="2023-11-23">10 minutos</time>
                  </div>
                  <Pagination className="ml-auto mr-0 w-auto">
                    <PaginationContent>
                      <PaginationItem>
                        <Button size="icon" variant="outline" className="h-6 w-6">
                          <ChevronLeft className="h-3.5 w-3.5" />
                          <span className="sr-only">Previous Order</span>
                        </Button>
                      </PaginationItem>
                      <PaginationItem>
                        <Button size="icon" variant="outline" className="h-6 w-6">
                          <ChevronRight className="h-3.5 w-3.5" />
                          <span className="sr-only">Next Order</span>
                        </Button>
                      </PaginationItem>
                    </PaginationContent>
                  </Pagination>
                </CardFooter>
              </Card>
            </div>
          </main>
        </div>
      </div >
    </TooltipProvider >
  )
}
