import type { Metadata } from "next";
import "./globals.css";
import { vazirmatn } from "@/public/fonts/vazirmatn/vazirmant";
import Providers from "./Providers";

export const metadata: Metadata = {
  title: "استودیو تبلیغاتی آرمو",
  description: "استودیو تبلیغاتی آرمو، ارائه‌دهنده خدمات جامع برندینگ، بازاریابی دیجیتال، و تولید محتوای خلاقانه برای رشد کسب‌وکار شما",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html dir="rtl" lang="fa">
      <body
        className={vazirmatn.className}
      >
        <Providers font={vazirmatn}>
          <main className="p-6 mx-auto container">
            {children}
          </main>
        </Providers>

      </body>
    </html>
  );
}
