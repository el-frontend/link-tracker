import AppRootLayout from "@/core/layout/root";

export default function DashboardRootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <AppRootLayout>{children}</AppRootLayout>;
}
