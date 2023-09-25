import "./globals.css";
import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import Notification from "@/components/home/Notification";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import AuthProvider from "@/components/utils/AuthProvider";
import QueryProvider from "@/components/utils/QueryProvider";
import { Toaster } from "react-hot-toast";

const inter = Raleway({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "BBQ KING",
  description: "Bbq king",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          <QueryProvider>
            <div>
              <Notification />
              <Navbar />
              {children}
              <Footer />
              <Toaster position="bottom-center" reverseOrder={false} />
            </div>
          </QueryProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
