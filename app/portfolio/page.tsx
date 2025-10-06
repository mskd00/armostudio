"use client"

import React, { useState } from 'react'
import ProjectsList from './ProjectList';

export default function page() {

    const [activeCategory, setActiveCategory] = useState('همه');

    const categories = [
        'همه',
        'طراحی گرافیک',
        'طراحی وب‌سایت',
        'بازاریابی دیجیتال',
        'تولید ویدیو',
        'عکاسی'
    ];

    return (
        <div>
            <div className="max-w-6xl mx-auto px-4 py-8">
                <div className="flex justify-center flex-wrap gap-2 mb-6">
                    {categories.map((category) => (
                        <button

                            key={category}
                            onClick={() => setActiveCategory(category)}
                            className={`px-4 py-2 rounded-full text-sm cursor-pointer font-medium transition-colors ${activeCategory === category
                                ? 'bg-[#ffc400] text-gray-900'
                                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>
            </div>

            <div className="max-w-6xl text-center flex flex-col gap-6 mx-auto px-4 py-8">

                <h4 className='text-3xl font-bold'>لورم ایپسوم</h4>

                <p className="text-gray-600 text-center max-w-2xl mx-auto leading-relaxed">
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.
                    چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز
                    و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.
                </p>
            </div>


            <ProjectsList />
        </div>
    )
}
