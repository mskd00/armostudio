"use clinet"


import {useEffect, useState} from "react";
import {Burger, Button, Drawer} from "@mantine/core";
import {usePathname} from "next/navigation";
import Link from "next/link";
import {modals} from "@mantine/modals";
import ServiceComponent from "@/app/components/service/ServiceComponent";
import ContactSection from "@/app/components/service/ServiceComponent";

export default function Header() {
    const [opened, setOpened] = useState(false);

    const pathname = usePathname()

    const navLinks = [
        { label: "خانه", href: "/" },
        { label: "خدمات", href: "service" },
        { label: "نمونه‌کارها", href: "portfolio" },
        { label: "تماس با ما", href: "contact" },
    ];


    useEffect(() => {
        setOpened(false)
    }, [pathname])

    const menu = navLinks.map((link) => {
        const mainPath = pathname.split("/")[1]
        const isActive =  mainPath === link.href ? "text-yellow-500" : ""

        return (
            <Link

                key={link.label}
                href={link.href}
                className={`hover:text-yellow-500 ${isActive && "text-yellow-500"} transition`}
            >
                {link.label}
            </Link>
        )
    })

    return (
        <header className="w-full bg-white shadow-sm">
            <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">

                <div className="flex items-center space-x-2 rtl:space-x-reverse">
                    <img src="/persianLogoType.png" alt="Armo Studio Logo" className="h-10" />



                </div>


                <nav className="hidden md:flex items-center gap-6 text-gray-800 font-medium">
                    {menu}
                </nav>

                {/* دکمه دسکتاپ */}
                <div className="hidden md:block">
                    <Button
                        color="yellow"
                        radius="md"
                        size="sm"
                        className="text-black font-medium"
                    >
                        درخواست مشاوره
                    </Button>
                </div>

                {/* آیکون منو موبایل */}
                <div className="md:hidden">
                    <Burger
                        opened={opened}
                        onClick={() => setOpened(true)}
                        color="black"
                    />
                </div>
            </div>

            {/* Drawer موبایل */}
            <Drawer
                opened={opened}
                onClose={() => setOpened(false)}
                padding="md"
                position="right"
                size="75%"
                title="منو"
            >
                <div className="flex flex-col gap-4 mt-4">
                    {menu}

                    <Button
                        onClick={() => {
                            setOpened(false)
                            modals.open({
                                title: "فرم سرویس",
                                children: <ContactSection />
                            })
                        }}
                        color="yellow"
                        radius="md"
                        size="sm"
                        className="text-black font-medium mt-4"
                    >
                        درخواست مشاوره
                    </Button>
                </div>
            </Drawer>
        </header>
    );
}
