"use client";

import Link from "next/link";
import { Button, TextInput } from "@mantine/core";
import { IconBrandInstagram, IconBrandLinkedin, IconBrandX } from "@tabler/icons-react";

export default function Footer() {
    const quickLinks = [
        { label: "صفحه اصلی", href: "/" },
        { label: "خدمات", href: "/services" },
        { label: "نمونه کارها", href: "/portfolio" },
        { label: "تعرفه‌ها", href: "/pricing" },
        { label: "درباره ما", href: "/about" },
        { label: "تماس با ما", href: "/contact" },
    ];

    const services = [
        "طراحی گرافیک",
        "طراحی وبسایت",
        "بازاریابی دیجیتال",
        "تولید محتوای ویدیویی",
        "عکاسی تبلیغاتی",
        "تبلیغات محیطی",
    ];

    const socialLinks = [
        { icon: <IconBrandX size={18} />, href: "#" },
        { icon: <IconBrandLinkedin size={18} />, href: "#" },
        { icon: <IconBrandInstagram size={18} />, href: "#" },
    ];

    return (
        <footer className="bg-[#0d1117] text-gray-300 pt-10 pb-6">
            {/* بخش اصلی فوتر */}
            <div className="max-w-7xl mx-auto px-4 grid gap-8 md:grid-cols-4">

                {/* ستون 1 - برند */}
                <div>
                    <h3 className="text-yellow-500 font-bold text-lg mb-3">آرمو</h3>
                    <p className="text-sm leading-6 mb-4">
                        آژانس تبلیغاتی آرمو با بیش از 5 سال تجربه، ارائه‌دهنده خدمات جامع تبلیغاتی و بازاریابی
                        برای کسب و کارهای مختلف است.
                    </p>
                    <div className="flex gap-3 mt-4">
                        {socialLinks.map((item, idx) => (
                            <Link
                                key={idx}
                                href={item.href}
                                className="bg-[#1f2937] p-2 rounded-full hover:bg-yellow-500 transition"
                            >
                                {item.icon}
                            </Link>
                        ))}
                    </div>
                </div>

                {/* ستون 2 - دسترسی سریع */}
                <div>
                    <h3 className="text-white font-semibold text-lg mb-3">دسترسی سریع</h3>
                    <ul className="space-y-2">
                        {quickLinks.map((link) => (
                            <li key={link.label}>
                                <Link href={link.href} className="hover:text-yellow-500">
                                    {link.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* ستون 3 - خدمات ما */}
                <div>
                    <h3 className="text-white font-semibold text-lg mb-3">خدمات ما</h3>
                    <ul className="space-y-2">
                        {services.map((service) => (
                            <li key={service}>{service}</li>
                        ))}
                    </ul>
                </div>

                {/* ستون 4 - خبرنامه */}
                <div>
                    <h3 className="text-white font-semibold text-lg mb-3">خبرنامه</h3>
                    <p className="text-sm mb-4">
                        برای دریافت آخرین اخبار و مطالب آموزشی در حوزه تبلیغات و بازاریابی، در خبرنامه ما عضو شوید.
                    </p>
                    <div className="flex gap-2">
                        <TextInput
                            placeholder="ایمیل خود را وارد کنید"
                            radius="md"
                            className="flex-1"
                        />
                        <Button color="yellow" radius="md" className="text-black font-medium">
                            عضویت
                        </Button>
                    </div>
                </div>
            </div>

            {/* کپی‌رایت */}
            <div className="max-w-7xl mx-auto px-4 mt-8 pt-4 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400 gap-3">
                <p>© 1404 آژانس تبلیغاتی آرمو تمامی حقوق محفوظ است.</p>
                <div className="flex gap-4">
                    <Link href="#" className="hover:text-yellow-500">
                        حریم خصوصی
                    </Link>
                    <Link href="#" className="hover:text-yellow-500">
                        قوانین و مقررات
                    </Link>
                </div>
            </div>
        </footer>
    );
}
