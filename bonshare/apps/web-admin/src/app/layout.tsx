import type { Metadata } from "next";
import {Recursive} from "next/font/google"
import localFont from "next/font/local";
import "./globals.css";

const recursive = Recursive({subsets: ['latin']})

export const metadata: Metadata = {
  title: "H@rtman | Admin",
  description: "Admin",
};

// const MENUITEMS: MenuItem[] = [
//   { label: 'Safaris', href: '/' },
//   { label: 'Admins', href: '/manageAdmins' },
// ]

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={recursive.className}
      >
        {children}
      </body>
    </html>
  );
}
