"use client"

import {IconClock, IconDeviceMobile, IconMail, IconMapPin, IconPhone} from '@tabler/icons-react';
import React from 'react'
import ContactSection from '../components/service/ServiceComponent';
import dynamic from "next/dynamic";

export default function ContactPage() {

    const Map = dynamic(() => import("../components/map/Map"), {ssr: false});

    const contactInfo = [
        {
            id: 1,
            title: 'تماس مستقیم',
            Icon: IconPhone,
            items: [
                { icon: <IconPhone size={20} />, text: 'تلفن', value: '034-32122333' },
                { icon: <IconDeviceMobile size={20} />, text: 'موبایل', value: '09221564089' },
                { icon: <IconMail size={20} />, text: 'ایمیل', value: 'info@armo-agency.com' }
            ]
        },
        {
            id: 2,
            title: 'ساعات کاری',
            Icon: IconClock,
            items: [
                { icon: <IconClock size={20} />, text: 'شنبه تا چهارشنبه', value: 'صبح تا 6 عصر' },
                { icon: <IconClock size={20} />, text: 'پنجشنبه', value: 'صبح تا 7 بعد از ظهر' },
                { icon: <IconClock size={20} />, text: 'جمعه', value: 'تعطیل' }
            ]
        },
        {
            id: 3,
            title: 'آدرس دفتر مرکزی',
            Icon: IconMapPin,
            items: [
                {
                    icon: <IconMapPin size={20} />,
                    text: 'خیابان ولیعصر، بالاتر از میدان ونک، برج آسمان، طبقه 12، واحد 12+2',
                    value: ''
                }
            ]
        }
    ];

    return (
        <div>

            <div className='flex flex-col mt-12 mb-10 gap-2 items-center '>
                <h1 className='text-4xl font-bold '>ارتباط با آژانس تبلیغاتی آرمو</h1>
                <p className='text-center text-zinc-600'>برای ارتباط با ما و دریافت مشاوره تخصصی، می‌توانید از طریق راه‌های ارتباطی زیر با ما در تماس باشید یا فرم <br /> تماس را تکمیل کنید.</p>
            </div>

            <div className="max-w-6xl mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {contactInfo.map((section) => {
                        const { Icon, id, items, title } = section
                        return (
                            <div key={section.id} className="bg-white p-6 rounded-lg shadow-sm  ">
                                <div className='flex flex-col items-center gap-6'>
                                    <div className='bg-[#ffc400]/20 flex justify-center items-center rounded-full w-12 h-12'>
                                        <Icon color='#ffc400' size={20} />
                                    </div>
                                    <h2 className="text-xl font-bold text-gray-800 mb-4  pb-2">{section.title}</h2>
                                </div>
                                <div className="space-y-4 text-center text-sm text-zinc-500">
                                    {section.items.map((item, index) => (
                                        <div>
                                            {item.text} {item.value}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>

            <div>
                <Map  />
            </div>

            <ContactSection />
        </div>
    )
}
