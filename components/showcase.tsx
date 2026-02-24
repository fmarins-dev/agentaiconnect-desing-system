"use client"

import * as React from "react"
import {
  IconBell,
  IconBluetooth,
  IconBold,
  IconCheck,
  IconChevronRight,
  IconCode,
  IconCopy,
  IconDownload,
  IconFile,
  IconFolder,
  IconHeart,
  IconHome,
  IconItalic,
  IconLayoutSidebar,
  IconMoon,
  IconPalette,
  IconPlus,
  IconSearch,
  IconSettings,
  IconShare,
  IconStar,
  IconSun,
  IconTrash,
  IconUnderline,
  IconUser,
  IconX,
} from "@tabler/icons-react"

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogMedia,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import {
  Avatar,
  AvatarBadge,
  AvatarFallback,
  AvatarGroup,
  AvatarGroupCount,
  AvatarImage,
} from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
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
import { Checkbox } from "@/components/ui/checkbox"
import {
  Combobox,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
} from "@/components/ui/combobox"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Skeleton } from "@/components/ui/skeleton"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { Toggle } from "@/components/ui/toggle"
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

const sections = [
  { id: "buttons", label: "Buttons" },
  { id: "badges", label: "Badges" },
  { id: "avatars", label: "Avatars" },
  { id: "cards", label: "Cards" },
  { id: "tabs", label: "Tabs" },
  { id: "toggles", label: "Toggles" },
  { id: "checkboxes", label: "Checkboxes" },
  { id: "inputs", label: "Inputs" },
  { id: "select", label: "Select" },
  { id: "combobox", label: "Combobox" },
  { id: "skeleton", label: "Skeleton" },
  { id: "separator", label: "Separator" },
  { id: "breadcrumb", label: "Breadcrumb" },
  { id: "tooltip", label: "Tooltip" },
  { id: "alert-dialog", label: "Alert Dialog" },
  { id: "dropdown", label: "Dropdown Menu" },
  { id: "sheet", label: "Sheet" },
  { id: "drawer", label: "Drawer" },
]

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-foreground text-lg font-semibold tracking-tight">
      {children}
    </h2>
  )
}

function SectionDescription({ children }: { children: React.ReactNode }) {
  return <p className="text-muted-foreground text-sm">{children}</p>
}

function ShowcaseSection({
  id,
  title,
  description,
  children,
}: {
  id: string
  title: string
  description?: string
  children: React.ReactNode
}) {
  return (
    <section id={id} className="flex flex-col gap-4 scroll-mt-6">
      <div className="flex flex-col gap-1">
        <SectionTitle>{title}</SectionTitle>
        {description && <SectionDescription>{description}</SectionDescription>}
      </div>
      <div className="ring-border rounded-xl p-6 ring-1">{children}</div>
    </section>
  )
}

function Row({
  label,
  children,
}: {
  label?: string
  children: React.ReactNode
}) {
  return (
    <div className="flex flex-col gap-2">
      {label && (
        <span className="text-muted-foreground text-xs font-medium">
          {label}
        </span>
      )}
      <div className="flex flex-wrap items-center gap-2">{children}</div>
    </div>
  )
}

const frameworks = ["Next.js", "SvelteKit", "Nuxt.js", "Remix", "Astro"] as const

export function Showcase() {
  const [activeSection, setActiveSection] = React.useState("buttons")

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        }
      },
      { rootMargin: "-20% 0% -70% 0%", threshold: 0 }
    )

    for (const section of sections) {
      const el = document.getElementById(section.id)
      if (el) observer.observe(el)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <TooltipProvider>
      <div className="bg-background min-h-screen">
        {/* Header */}
        <header className="border-border bg-background/95 sticky top-0 z-40 border-b backdrop-blur-sm">
          <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-6">
            <div className="flex items-center gap-3">
              <div className="bg-primary size-6 rounded-md" />
              <span className="font-semibold">Design System</span>
              <Badge variant="secondary">v1.0</Badge>
            </div>
            <div className="text-muted-foreground flex items-center gap-2 text-sm">
              <span>Component Showcase</span>
            </div>
          </div>
        </header>

        <div className="mx-auto max-w-7xl px-6 py-8">
          <div className="flex gap-10">
            {/* Sticky sidebar nav */}
            <aside className="hidden w-44 shrink-0 lg:block">
              <nav className="sticky top-22 flex flex-col gap-1">
                <p className="text-muted-foreground mb-2 text-xs font-semibold uppercase tracking-widest">
                  Components
                </p>
                {sections.map((section) => (
                  <a
                    key={section.id}
                    href={`#${section.id}`}
                    className={`rounded-md px-2.5 py-1.5 text-sm transition-colors ${
                      activeSection === section.id
                        ? "bg-muted text-foreground font-medium"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {section.label}
                  </a>
                ))}
              </nav>
            </aside>

            {/* Main content */}
            <main className="flex min-w-0 flex-1 flex-col gap-12">
              {/* Intro */}
              <div className="flex flex-col gap-2">
                <h1 className="text-3xl font-bold tracking-tight">
                  Component Showcase
                </h1>
                <p className="text-muted-foreground text-base">
                  A complete overview of all UI components in the design system.
                </p>
              </div>

              {/* ── Buttons ── */}
              <ShowcaseSection
                id="buttons"
                title="Buttons"
                description="Available variants, sizes, and icon button configurations."
              >
                <div className="flex flex-col gap-6">
                  <Row label="Variants">
                    <Button variant="default">Default</Button>
                    <Button variant="secondary">Secondary</Button>
                    <Button variant="outline">Outline</Button>
                    <Button variant="ghost">Ghost</Button>
                    <Button variant="destructive">Destructive</Button>
                    <Button variant="link">Link</Button>
                  </Row>
                  <Row label="Sizes">
                    <Button size="lg">Large</Button>
                    <Button size="default">Default</Button>
                    <Button size="sm">Small</Button>
                    <Button size="xs">Extra Small</Button>
                  </Row>
                  <Row label="With icons">
                    <Button>
                      <IconPlus data-icon="inline-start" />
                      Add item
                    </Button>
                    <Button variant="outline">
                      <IconDownload data-icon="inline-start" />
                      Download
                    </Button>
                    <Button variant="secondary">
                      Share
                      <IconShare data-icon="inline-end" />
                    </Button>
                  </Row>
                  <Row label="Icon buttons">
                    <Button size="icon-lg" variant="default">
                      <IconStar />
                    </Button>
                    <Button size="icon" variant="outline">
                      <IconSettings />
                    </Button>
                    <Button size="icon-sm" variant="ghost">
                      <IconSearch />
                    </Button>
                    <Button size="icon-xs" variant="secondary">
                      <IconX />
                    </Button>
                  </Row>
                  <Row label="States">
                    <Button disabled>Disabled</Button>
                    <Button variant="outline" disabled>
                      Disabled outline
                    </Button>
                  </Row>
                </div>
              </ShowcaseSection>

              {/* ── Badges ── */}
              <ShowcaseSection
                id="badges"
                title="Badges"
                description="Labels used to highlight status, categories, or counts."
              >
                <div className="flex flex-col gap-6">
                  <Row label="Variants">
                    <Badge variant="default">Default</Badge>
                    <Badge variant="secondary">Secondary</Badge>
                    <Badge variant="outline">Outline</Badge>
                    <Badge variant="destructive">Destructive</Badge>
                    <Badge variant="ghost">Ghost</Badge>
                  </Row>
                  <Row label="With icons">
                    <Badge variant="default">
                      <IconCheck />
                      Verified
                    </Badge>
                    <Badge variant="secondary">
                      <IconStar />
                      Featured
                    </Badge>
                    <Badge variant="destructive">
                      <IconX />
                      Error
                    </Badge>
                  </Row>
                </div>
              </ShowcaseSection>

              {/* ── Avatars ── */}
              <ShowcaseSection
                id="avatars"
                title="Avatars"
                description="User profile images with fallback, badge, and group support."
              >
                <div className="flex flex-col gap-6">
                  <Row label="Sizes">
                    <Avatar size="sm">
                      <AvatarImage
                        src="https://github.com/shadcn.png"
                        alt="@shadcn"
                      />
                      <AvatarFallback>SC</AvatarFallback>
                    </Avatar>
                    <Avatar size="default">
                      <AvatarImage
                        src="https://github.com/shadcn.png"
                        alt="@shadcn"
                      />
                      <AvatarFallback>SC</AvatarFallback>
                    </Avatar>
                    <Avatar size="lg">
                      <AvatarImage
                        src="https://github.com/shadcn.png"
                        alt="@shadcn"
                      />
                      <AvatarFallback>SC</AvatarFallback>
                    </Avatar>
                  </Row>
                  <Row label="Fallback">
                    <Avatar size="sm">
                      <AvatarFallback>JD</AvatarFallback>
                    </Avatar>
                    <Avatar size="default">
                      <AvatarFallback>AB</AvatarFallback>
                    </Avatar>
                    <Avatar size="lg">
                      <AvatarFallback>MK</AvatarFallback>
                    </Avatar>
                  </Row>
                  <Row label="With badge">
                    <Avatar size="default">
                      <AvatarImage
                        src="https://github.com/shadcn.png"
                        alt="@shadcn"
                      />
                      <AvatarFallback>SC</AvatarFallback>
                      <AvatarBadge />
                    </Avatar>
                    <Avatar size="lg">
                      <AvatarFallback>AB</AvatarFallback>
                      <AvatarBadge>
                        <IconCheck />
                      </AvatarBadge>
                    </Avatar>
                  </Row>
                  <Row label="Group">
                    <AvatarGroup>
                      <Avatar>
                        <AvatarImage
                          src="https://github.com/shadcn.png"
                          alt="@shadcn"
                        />
                        <AvatarFallback>SC</AvatarFallback>
                      </Avatar>
                      <Avatar>
                        <AvatarFallback>JD</AvatarFallback>
                      </Avatar>
                      <Avatar>
                        <AvatarFallback>AB</AvatarFallback>
                      </Avatar>
                      <AvatarGroupCount>+5</AvatarGroupCount>
                    </AvatarGroup>
                  </Row>
                </div>
              </ShowcaseSection>

              {/* ── Cards ── */}
              <ShowcaseSection
                id="cards"
                title="Cards"
                description="Container component with header, content, and footer regions."
              >
                <div className="grid gap-4 sm:grid-cols-2">
                  <Card>
                    <CardHeader>
                      <CardTitle>Basic Card</CardTitle>
                      <CardDescription>
                        A simple card with title and description.
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground text-sm">
                        Card content goes here. Use cards to group related
                        information and actions.
                      </p>
                    </CardContent>
                    <CardFooter>
                      <Button size="sm">Action</Button>
                      <Button size="sm" variant="ghost" className="ml-auto">
                        Cancel
                      </Button>
                    </CardFooter>
                  </Card>

                  <Card size="sm">
                    <CardHeader>
                      <CardTitle>Small Card</CardTitle>
                      <CardDescription>Compact size variant.</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center gap-3">
                        <Avatar>
                          <AvatarFallback>JD</AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="text-sm font-medium">John Doe</p>
                          <p className="text-muted-foreground text-xs">
                            john@example.com
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="sm:col-span-2">
                    <CardHeader>
                      <CardTitle>Stats Overview</CardTitle>
                      <CardDescription>
                        Monthly performance metrics.
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-3 gap-4">
                        {[
                          { label: "Revenue", value: "$12,430" },
                          { label: "Users", value: "2,840" },
                          { label: "Conversion", value: "3.2%" },
                        ].map((stat) => (
                          <div key={stat.label} className="flex flex-col gap-1">
                            <span className="text-muted-foreground text-xs">
                              {stat.label}
                            </span>
                            <span className="text-xl font-semibold">
                              {stat.value}
                            </span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </ShowcaseSection>

              {/* ── Tabs ── */}
              <ShowcaseSection
                id="tabs"
                title="Tabs"
                description="Tabbed interface in default pill and line variants."
              >
                <div className="flex flex-col gap-8">
                  <div className="flex flex-col gap-3">
                    <span className="text-muted-foreground text-xs font-medium">
                      Default variant
                    </span>
                    <Tabs defaultValue="overview">
                      <TabsList>
                        <TabsTrigger value="overview">Overview</TabsTrigger>
                        <TabsTrigger value="analytics">Analytics</TabsTrigger>
                        <TabsTrigger value="settings">Settings</TabsTrigger>
                      </TabsList>
                      <TabsContent value="overview">
                        <Card>
                          <CardContent className="pt-4">
                            <p className="text-muted-foreground text-sm">
                              Overview content — summary of your project.
                            </p>
                          </CardContent>
                        </Card>
                      </TabsContent>
                      <TabsContent value="analytics">
                        <Card>
                          <CardContent className="pt-4">
                            <p className="text-muted-foreground text-sm">
                              Analytics content — charts and metrics.
                            </p>
                          </CardContent>
                        </Card>
                      </TabsContent>
                      <TabsContent value="settings">
                        <Card>
                          <CardContent className="pt-4">
                            <p className="text-muted-foreground text-sm">
                              Settings content — configure your project.
                            </p>
                          </CardContent>
                        </Card>
                      </TabsContent>
                    </Tabs>
                  </div>

                  <div className="flex flex-col gap-3">
                    <span className="text-muted-foreground text-xs font-medium">
                      Line variant
                    </span>
                    <Tabs defaultValue="tab1">
                      <TabsList variant="line">
                        <TabsTrigger value="tab1">Account</TabsTrigger>
                        <TabsTrigger value="tab2">Security</TabsTrigger>
                        <TabsTrigger value="tab3">Notifications</TabsTrigger>
                      </TabsList>
                      <TabsContent value="tab1">
                        <p className="text-muted-foreground py-3 text-sm">
                          Account settings panel.
                        </p>
                      </TabsContent>
                      <TabsContent value="tab2">
                        <p className="text-muted-foreground py-3 text-sm">
                          Security settings panel.
                        </p>
                      </TabsContent>
                      <TabsContent value="tab3">
                        <p className="text-muted-foreground py-3 text-sm">
                          Notification preferences.
                        </p>
                      </TabsContent>
                    </Tabs>
                  </div>
                </div>
              </ShowcaseSection>

              {/* ── Toggles ── */}
              <ShowcaseSection
                id="toggles"
                title="Toggles"
                description="Toggle buttons and toggle groups for binary or multi-option selection."
              >
                <div className="flex flex-col gap-6">
                  <Row label="Toggle variants">
                    <Toggle aria-label="Bold">
                      <IconBold />
                    </Toggle>
                    <Toggle variant="outline" aria-label="Italic">
                      <IconItalic />
                    </Toggle>
                    <Toggle aria-label="With text">
                      <IconSun />
                      Light
                    </Toggle>
                  </Row>
                  <Row label="Toggle sizes">
                    <Toggle size="lg" aria-label="Large">
                      <IconBold />
                    </Toggle>
                    <Toggle size="default" aria-label="Default">
                      <IconBold />
                    </Toggle>
                    <Toggle size="sm" aria-label="Small">
                      <IconBold />
                    </Toggle>
                  </Row>
                  <Row label="Toggle group">
                    <ToggleGroup defaultValue={["bold"]}>
                      <ToggleGroupItem value="bold" aria-label="Bold">
                        <IconBold />
                      </ToggleGroupItem>
                      <ToggleGroupItem value="italic" aria-label="Italic">
                        <IconItalic />
                      </ToggleGroupItem>
                      <ToggleGroupItem value="underline" aria-label="Underline">
                        <IconUnderline />
                      </ToggleGroupItem>
                    </ToggleGroup>
                    <ToggleGroup defaultValue={["light"]} variant="outline">
                      <ToggleGroupItem value="light" aria-label="Light">
                        <IconSun />
                        Light
                      </ToggleGroupItem>
                      <ToggleGroupItem value="dark" aria-label="Dark">
                        <IconMoon />
                        Dark
                      </ToggleGroupItem>
                    </ToggleGroup>
                  </Row>
                </div>
              </ShowcaseSection>

              {/* ── Checkboxes ── */}
              <ShowcaseSection
                id="checkboxes"
                title="Checkboxes"
                description="Boolean input component with label support."
              >
                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-2">
                    <Checkbox id="cb1" defaultChecked />
                    <label
                      htmlFor="cb1"
                      className="cursor-pointer text-sm font-medium"
                    >
                      Checked by default
                    </label>
                  </div>
                  <div className="flex items-center gap-2">
                    <Checkbox id="cb2" />
                    <label
                      htmlFor="cb2"
                      className="cursor-pointer text-sm font-medium"
                    >
                      Unchecked
                    </label>
                  </div>
                  <div className="flex items-center gap-2">
                    <Checkbox id="cb3" disabled />
                    <label
                      htmlFor="cb3"
                      className="cursor-pointer text-sm font-medium opacity-50"
                    >
                      Disabled
                    </label>
                  </div>
                  <div className="flex items-center gap-2">
                    <Checkbox id="cb4" defaultChecked disabled />
                    <label
                      htmlFor="cb4"
                      className="cursor-pointer text-sm font-medium opacity-50"
                    >
                      Disabled checked
                    </label>
                  </div>
                </div>
              </ShowcaseSection>

              {/* ── Inputs ── */}
              <ShowcaseSection
                id="inputs"
                title="Inputs"
                description="Text input, input groups, and textarea."
              >
                <div className="flex max-w-sm flex-col gap-6">
                  <FieldGroup>
                    <Field>
                      <FieldLabel htmlFor="inp-basic">Basic input</FieldLabel>
                      <Input
                        id="inp-basic"
                        placeholder="Enter some text…"
                      />
                    </Field>
                    <Field>
                      <FieldLabel htmlFor="inp-icon">
                        Input with icon prefix
                      </FieldLabel>
                      <InputGroup>
                        <InputGroupAddon align="inline-start">
                          <IconSearch className="size-4" />
                        </InputGroupAddon>
                        <InputGroupInput id="inp-icon" placeholder="Search…" />
                      </InputGroup>
                    </Field>
                    <Field>
                      <FieldLabel htmlFor="inp-suffix">
                        Input with text suffix
                      </FieldLabel>
                      <InputGroup>
                        <InputGroupInput id="inp-suffix" placeholder="0.00" />
                        <InputGroupAddon align="inline-end">USD</InputGroupAddon>
                      </InputGroup>
                    </Field>
                    <Field>
                      <FieldLabel htmlFor="inp-disabled">
                        Disabled input
                      </FieldLabel>
                      <Input
                        id="inp-disabled"
                        placeholder="Not editable"
                        disabled
                      />
                    </Field>
                    <Field>
                      <FieldLabel htmlFor="inp-textarea">Textarea</FieldLabel>
                      <Textarea
                        id="inp-textarea"
                        placeholder="Write your message here…"
                      />
                    </Field>
                  </FieldGroup>
                </div>
              </ShowcaseSection>

              {/* ── Select ── */}
              <ShowcaseSection
                id="select"
                title="Select"
                description="Dropdown selection component."
              >
                <div className="flex max-w-xs flex-col gap-4">
                  <Field>
                    <FieldLabel htmlFor="sel-role">Role</FieldLabel>
                    <Select defaultValue={null}>
                      <SelectTrigger id="sel-role">
                        <SelectValue placeholder="Select a role…" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          <SelectItem value="developer">Developer</SelectItem>
                          <SelectItem value="designer">Designer</SelectItem>
                          <SelectItem value="manager">Manager</SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </Field>
                </div>
              </ShowcaseSection>

              {/* ── Combobox ── */}
              <ShowcaseSection
                id="combobox"
                title="Combobox"
                description="Searchable select with filterable list."
              >
                <div className="max-w-xs">
                  <Field>
                    <FieldLabel htmlFor="cmb-fw">Framework</FieldLabel>
                    <Combobox items={frameworks}>
                      <ComboboxInput
                        id="cmb-fw"
                        placeholder="Select a framework…"
                      />
                      <ComboboxContent>
                        <ComboboxEmpty>No frameworks found.</ComboboxEmpty>
                        <ComboboxList>
                          {(item) => (
                            <ComboboxItem key={item} value={item}>
                              {item}
                            </ComboboxItem>
                          )}
                        </ComboboxList>
                      </ComboboxContent>
                    </Combobox>
                  </Field>
                </div>
              </ShowcaseSection>

              {/* ── Skeleton ── */}
              <ShowcaseSection
                id="skeleton"
                title="Skeleton"
                description="Loading placeholder with pulse animation."
              >
                <div className="flex flex-col gap-6">
                  <Row label="Basic skeletons">
                    <Skeleton className="h-4 w-48" />
                    <Skeleton className="h-4 w-32" />
                    <Skeleton className="h-4 w-64" />
                  </Row>
                  <Row label="Card skeleton">
                    <div className="flex w-full max-w-sm items-center gap-4">
                      <Skeleton className="size-10 rounded-full" />
                      <div className="flex flex-1 flex-col gap-2">
                        <Skeleton className="h-4 w-3/4" />
                        <Skeleton className="h-3 w-1/2" />
                      </div>
                    </div>
                  </Row>
                </div>
              </ShowcaseSection>

              {/* ── Separator ── */}
              <ShowcaseSection
                id="separator"
                title="Separator"
                description="Visual divider for content sections."
              >
                <div className="flex flex-col gap-6">
                  <div className="flex flex-col gap-2">
                    <span className="text-muted-foreground text-xs font-medium">
                      Horizontal
                    </span>
                    <div>
                      <p className="text-sm">Above the separator</p>
                      <Separator className="my-3" />
                      <p className="text-sm">Below the separator</p>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <span className="text-muted-foreground text-xs font-medium">
                      Vertical
                    </span>
                    <div className="flex h-6 items-center gap-3 text-sm">
                      <span>Left</span>
                      <Separator orientation="vertical" />
                      <span>Middle</span>
                      <Separator orientation="vertical" />
                      <span>Right</span>
                    </div>
                  </div>
                </div>
              </ShowcaseSection>

              {/* ── Breadcrumb ── */}
              <ShowcaseSection
                id="breadcrumb"
                title="Breadcrumb"
                description="Navigation breadcrumb trail."
              >
                <div className="flex flex-col gap-4">
                  <Breadcrumb>
                    <BreadcrumbList>
                      <BreadcrumbItem>
                        <BreadcrumbLink href="#">
                          <IconHome className="size-3.5" />
                          Home
                        </BreadcrumbLink>
                      </BreadcrumbItem>
                      <BreadcrumbSeparator />
                      <BreadcrumbItem>
                        <BreadcrumbLink href="#">Components</BreadcrumbLink>
                      </BreadcrumbItem>
                      <BreadcrumbSeparator />
                      <BreadcrumbItem>
                        <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
                      </BreadcrumbItem>
                    </BreadcrumbList>
                  </Breadcrumb>
                </div>
              </ShowcaseSection>

              {/* ── Tooltip ── */}
              <ShowcaseSection
                id="tooltip"
                title="Tooltip"
                description="Contextual information on hover."
              >
                <Row label="Examples">
                  <Tooltip>
                    <TooltipTrigger render={<Button variant="outline" />}>
                      Hover me
                    </TooltipTrigger>
                    <TooltipContent>
                      This is a helpful tooltip
                    </TooltipContent>
                  </Tooltip>
                  <Tooltip>
                    <TooltipTrigger
                      render={<Button size="icon" variant="ghost" />}
                    >
                      <IconSettings />
                    </TooltipTrigger>
                    <TooltipContent side="bottom">Settings</TooltipContent>
                  </Tooltip>
                  <Tooltip>
                    <TooltipTrigger
                      render={<Button size="icon" variant="ghost" />}
                    >
                      <IconCopy />
                    </TooltipTrigger>
                    <TooltipContent side="right">Copy to clipboard</TooltipContent>
                  </Tooltip>
                </Row>
              </ShowcaseSection>

              {/* ── Alert Dialog ── */}
              <ShowcaseSection
                id="alert-dialog"
                title="Alert Dialog"
                description="Modal dialog for confirmations and alerts."
              >
                <Row>
                  <AlertDialog>
                    <AlertDialogTrigger render={<Button />}>
                      Open Dialog
                    </AlertDialogTrigger>
                    <AlertDialogContent size="sm">
                      <AlertDialogHeader>
                        <AlertDialogMedia>
                          <IconTrash />
                        </AlertDialogMedia>
                        <AlertDialogTitle>Delete item?</AlertDialogTitle>
                        <AlertDialogDescription>
                          This action cannot be undone. The item will be
                          permanently deleted from your account.
                        </AlertDialogDescription>
                      </AlertDialogHeader>
                      <AlertDialogFooter>
                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                        <AlertDialogAction>Delete</AlertDialogAction>
                      </AlertDialogFooter>
                    </AlertDialogContent>
                  </AlertDialog>

                  <AlertDialog>
                    <AlertDialogTrigger render={<Button variant="outline" />}>
                      Bluetooth Dialog
                    </AlertDialogTrigger>
                    <AlertDialogContent>
                      <AlertDialogHeader>
                        <AlertDialogMedia>
                          <IconBluetooth />
                        </AlertDialogMedia>
                        <AlertDialogTitle>
                          Allow accessory to connect?
                        </AlertDialogTitle>
                        <AlertDialogDescription>
                          Do you want to allow the USB accessory to connect to
                          this device?
                        </AlertDialogDescription>
                      </AlertDialogHeader>
                      <AlertDialogFooter>
                        <AlertDialogCancel>Don&apos;t allow</AlertDialogCancel>
                        <AlertDialogAction>Allow</AlertDialogAction>
                      </AlertDialogFooter>
                    </AlertDialogContent>
                  </AlertDialog>
                </Row>
              </ShowcaseSection>

              {/* ── Dropdown Menu ── */}
              <ShowcaseSection
                id="dropdown"
                title="Dropdown Menu"
                description="Context menu with grouped actions, shortcuts, and separators."
              >
                <Row>
                  <DropdownMenu>
                    <DropdownMenuTrigger render={<Button variant="outline" />}>
                      Open Menu
                      <IconChevronRight
                        data-icon="inline-end"
                        className="rotate-90"
                      />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-48">
                      <DropdownMenuLabel>My Account</DropdownMenuLabel>
                      <DropdownMenuSeparator />
                      <DropdownMenuGroup>
                        <DropdownMenuItem>
                          <IconUser />
                          Profile
                          <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <IconSettings />
                          Settings
                          <DropdownMenuShortcut>⌘,</DropdownMenuShortcut>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <IconBell />
                          Notifications
                        </DropdownMenuItem>
                      </DropdownMenuGroup>
                      <DropdownMenuSeparator />
                      <DropdownMenuGroup>
                        <DropdownMenuItem>
                          <IconFile />
                          New File
                          <DropdownMenuShortcut>⌘N</DropdownMenuShortcut>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <IconFolder />
                          New Folder
                        </DropdownMenuItem>
                      </DropdownMenuGroup>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem variant="destructive">
                        <IconTrash />
                        Delete
                        <DropdownMenuShortcut>⌫</DropdownMenuShortcut>
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>

                  <DropdownMenu>
                    <DropdownMenuTrigger
                      render={<Button size="icon" variant="ghost" />}
                    >
                      <IconSettings />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-44">
                      <DropdownMenuItem>
                        <IconPalette />
                        Appearance
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <IconCode />
                        Developer
                      </DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem>
                        <IconLayoutSidebar />
                        Layout
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </Row>
              </ShowcaseSection>

              {/* ── Sheet ── */}
              <ShowcaseSection
                id="sheet"
                title="Sheet"
                description="Slide-in panel from any edge of the screen."
              >
                <Row>
                  {(["left", "right", "top", "bottom"] as const).map(
                    (side) => (
                      <Sheet key={side}>
                        <SheetTrigger render={<Button variant="outline" />}>
                          {side.charAt(0).toUpperCase() + side.slice(1)}
                        </SheetTrigger>
                        <SheetContent side={side}>
                          <SheetHeader>
                            <SheetTitle>
                              {side.charAt(0).toUpperCase() + side.slice(1)}{" "}
                              Sheet
                            </SheetTitle>
                            <SheetDescription>
                              This sheet slides in from the {side}.
                            </SheetDescription>
                          </SheetHeader>
                          <div className="flex-1 px-4 py-2">
                            <p className="text-muted-foreground text-sm">
                              Add your content here. This panel can contain
                              forms, details, or navigation.
                            </p>
                          </div>
                          <SheetFooter>
                            <SheetClose render={<Button />}>Close</SheetClose>
                          </SheetFooter>
                        </SheetContent>
                      </Sheet>
                    )
                  )}
                </Row>
              </ShowcaseSection>

              {/* ── Drawer ── */}
              <ShowcaseSection
                id="drawer"
                title="Drawer"
                description="Bottom (or directional) drawer powered by Vaul."
              >
                <Row>
                  <Drawer>
                    <DrawerTrigger asChild>
                      <Button variant="outline">Open Drawer</Button>
                    </DrawerTrigger>
                    <DrawerContent>
                      <DrawerHeader>
                        <DrawerTitle>Edit Profile</DrawerTitle>
                        <DrawerDescription>
                          Make changes to your profile here. Click save when
                          you&apos;re done.
                        </DrawerDescription>
                      </DrawerHeader>
                      <div className="px-4 py-2">
                        <FieldGroup>
                          <Field>
                            <FieldLabel htmlFor="drawer-name">Name</FieldLabel>
                            <Input
                              id="drawer-name"
                              placeholder="Your name"
                            />
                          </Field>
                          <Field>
                            <FieldLabel htmlFor="drawer-email">
                              Email
                            </FieldLabel>
                            <Input
                              id="drawer-email"
                              placeholder="your@email.com"
                            />
                          </Field>
                        </FieldGroup>
                      </div>
                      <DrawerFooter>
                        <Button>Save changes</Button>
                        <DrawerClose asChild>
                          <Button variant="outline">Cancel</Button>
                        </DrawerClose>
                      </DrawerFooter>
                    </DrawerContent>
                  </Drawer>

                  <Drawer direction="right">
                    <DrawerTrigger asChild>
                      <Button variant="secondary">Right Drawer</Button>
                    </DrawerTrigger>
                    <DrawerContent>
                      <DrawerHeader>
                        <DrawerTitle>Right Panel</DrawerTitle>
                        <DrawerDescription>
                          A drawer that slides in from the right.
                        </DrawerDescription>
                      </DrawerHeader>
                      <div className="flex-1 px-4 py-2">
                        <p className="text-muted-foreground text-sm">
                          Panel content goes here.
                        </p>
                      </div>
                      <DrawerFooter>
                        <DrawerClose asChild>
                          <Button variant="outline">Close</Button>
                        </DrawerClose>
                      </DrawerFooter>
                    </DrawerContent>
                  </Drawer>
                </Row>
              </ShowcaseSection>

              {/* Footer spacer */}
              <div className="h-16" />
            </main>
          </div>
        </div>
      </div>
    </TooltipProvider>
  )
}
