"use client"


import AdvertisementPartner from "@/app/components/main/Heading";
import { Button } from "@mantine/core";
import { IconBrush, IconCode, IconBrandDingtalk } from "@tabler/icons-react";
import Image from "next/image";
import CountUp from "react-countup";
import ContactSection from "./components/service/ServiceComponent";


const data = [
  { title: "مشتری راضی", value: 50 },
  { title: "پروژه موفق", value: 50 },
  { title: "سال تجربه", value: 50 },
  { title: "متخصص خلاق", value: 50 },

]


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
  }
];

export default function Home() {
  return (
    <div className="">
      <AdvertisementPartner />

      <section className="w-full flex justify-evenly my-8 ">
        {data?.map(item => {
          const { title, value } = item
          return (
            <div className="px-4 py-3 w-[150px]  shadow  items-center  flex flex-col  rounded-lg">
              <div className="flex text-lg text-[#ffc400] flex-row-reverse">
                <span>+</span>
                <CountUp className="" end={value} />
              </div>
              <span className="text-sm text-zinc-600">{title}</span>
            </div>
          )
        })}
      </section>


      <section className="mt-24 mb-8">
        <div className="flex flex-col w-full justify-center items-center gap-3 ">
          <h3 className="text-2xl font-bold text-zinc-800">خدمات ما</h3>
          <p className=" text-zinc-600">راهکارهای تبلیغاتی جامع برای رشد کسب و کار شما</p>
        </div>


        <div className="w-full  md:w-[80%]  mx-auto p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
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

        <div className="flex justify-center my-8">
          <Button size="lg" variant="outline">
            مشاهده بیشتر
          </Button>
        </div>
      </section>


      <section className="max-w-5xl mx-auto" >

        <div className="flex justify-center my-12">
          <h4 className="text-2xl font-bold text-zinc-800">نمونه کار های برجسته</h4>
        </div>

        <div className="flex-col-reverse lg:flex-row flex px-2 md:px-12 gap-2 ">

          <div className="lg:w-2/5  w-full flex flex-col gap-2 h-full ">

            {Array(3).fill(undefined).map(i => (
              <div className="h-1/4  border-[#ffc400] border cursor-pointer hover:bg-[#ffc400] transition-all   rounded-lg p-4">
                <h5 className="text-zinc-600 text-lg font-bold">شرکت آرمو</h5>
                <p className="text-zinc-500 font-light">این یک تست است برای توضیحات</p>
              </div>
            ))}


          </div>
          <div className="lg:w-3/5 w-full">
            <video src={"/test"} about="tets" className="w-full mx-auto border rounded-lg h-full" />
          </div>
        </div>
      </section>

      <ContactSection />



    </div>
  );
}
