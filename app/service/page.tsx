import { Button } from '@mantine/core';
import {
    IconBrandDingtalk,
    IconCode,
    IconBrush,
    IconSeo,
    IconBrandInstagram,
    IconEdit,
    IconBrandApple,
    IconBrandGoogle,
    IconDeviceMobile,
    IconChartLine
} from '@tabler/icons-react';
import React from 'react'
import FAQSection from '../components/main/FAQ';

export default function ServicePage() {


    const services = [
        {
            title: 'بازاریابی دیجیتال',
            description: 'استراتژی‌های بازاریابی محتوا، شبکه‌های اجتماعی، تبلیغات کلیکی و ایمیل مارکینگ',
            icon: IconBrandDingtalk,
        },
        {
            title: 'طراحی وب‌سایت',
            description: 'طراحی و توسعه وب‌سایت‌های مدرن، واکنش‌گرا و بهینه‌شده برای موتورهای جستجو',
            icon: IconCode,
        },
        {
            title: 'طراحی گرافیک',
            description: 'طراحی لوگو، هویت بصری، بروشور، کاتالوگ و سایر المان‌های گرافیکی با رویکرد خلاقانه',
            icon: IconBrush,
        },
        {
            title: 'سئو و بهینه‌سازی',
            description: 'بهینه‌سازی سایت برای موتورهای جستجو و بهبود رتبه در نتایج گوگل',
            icon: IconSeo,
        },
        {
            title: 'تبلیغات اینستاگرام',
            description: 'مدیریت حرفه‌ای پیج اینستاگرام و اجرای کمپین‌های تبلیغاتی موثر',
            icon: IconBrandInstagram,
        },
        {
            title: 'تولید محتوا',
            description: 'تولید محتوای حرفه‌ای و جذاب برای وبسایت و شبکه‌های اجتماعی',
            icon: IconEdit,
        },
        {
            title: 'برندینگ',
            description: 'طراحی استراتژی برند و هویت بصری منحصر به فرد برای کسب‌وکار شما',
            icon: IconBrandApple,
        },
        {
            title: 'تبلیغات گوگل ادز',
            description: 'اجرای کمپین‌های تبلیغاتی هدفمند در گوگل برای جذب مشتریان بیشتر',
            icon: IconBrandGoogle,
        },
        {
            title: 'طراحی اپلیکیشن',
            description: 'طراحی و توسعه اپلیکیشن‌های موبایل با آخرین فناوری‌های روز',
            icon: IconDeviceMobile,
        },
        {
            title: 'مشاوره دیجیتال مارکتینگ',
            description: 'مشاوره تخصصی در زمینه بازاریابی دیجیتال و استراتژی‌های فروش آنلاین',
            icon: IconChartLine,
        }
    ];
    return (

        <div>

            <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
                <div className=" ">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">
                        خدمات حرفه‌ای آژانس تبلیغاتی آرمو
                    </h2>

                    <div className="space-y-4 mb-8">
                        <p className="text-lg text-gray-600">
                            ما با ارائه راهکارهای خلاقانه و متناسب با نیاز شما، به رشد و توسعه کسب‌وکارتان کمک می‌کنیم. <br />  تیم متخصص ما آماده است تا با بهره‌گیری از جدیدترین تکنیک‌ها و ابزارها، برند شما را به جایگاه برتر برساند.
                        </p>
                    </div>

                    <Button
                        size="lg"
                        className="bg-[#ffc400] hover:bg-[#e6b000] text-gray-900 font-bold py-3 px-8 rounded-md transition-colors"
                    >
                        مشاوره رایگان
                    </Button>
                </div>
            </div>

            <section className="mt-8 mb-8">
                <div className="flex flex-col w-full justify-center items-center gap-3 ">
                    <h3 className="text-2xl font-bold text-zinc-800">خدمات ما</h3>
                    <p className=" text-zinc-600">راهکارهای تبلیغاتی جامع برای رشد کسب و کار شما</p>
                </div>


                <div className="w-full md:w-[80%] mx-auto p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
                    {services.map(item => {

                        const { description, icon, title } = item
                        const Icon = icon
                        return (
                            <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200 w-full hover:shadow-lg transition-shadow">
                                <div className="flex flex-col gap-3 mb-4">
                                    <div className="bg-[#ffc400]/10 p-3 w-fit rounded-full ">
                                        <Icon className="text-[#ffc400] w-fit" />
                                    </div>
                                    <h3 className="text-lg font-bold text-gray-800">{title}</h3>
                                </div>
                                <p className="text-gray-600 text-right">
                                    {description}
                                </p>
                            </div>
                        )
                    })}
                </div>

            </section>

            <FAQSection />
        </div>


    )
}
