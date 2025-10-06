import { useState } from 'react';
import { IconArrowLeft, IconArrowRight, IconMail, IconPhoneCall } from '@tabler/icons-react';
import { Button, TextInput } from '@mantine/core';

const ProjectsList = () => {
    const [activeCategory, setActiveCategory] = useState('همه');



    // لیست پروژه‌ها
    const projects = [
        {
            id: 1,
            title: 'کمپین بازاریابی دیجیتال',
            description: 'طراحی و اجرای کمپین جامع بازاریابی در شبکه‌های اجتماعی',
            client: 'شرکت تکنولوژی نوین',
            category: 'بازاریابی دیجیتال',
            image: 'https://picsum.photos/seed/picsum/200/300'
        },
        {
            id: 2,
            title: 'طراحی فروشگاه آنلاین',
            description: 'توسعه فروشگاه آنلاین مدرن با امکانات پیشرفته و رابط کاربری بهینه',
            client: 'فروشگاه دیجی کالا',
            category: 'طراحی وب سایت',
            image: 'https://picsum.photos/seed/picsum/200/300'
        },
        {
            id: 3,
            title: 'طراحی هویت بصری رستوران',
            description: 'طراحی کامل هویت بصری شامل لوگو، کارت ویزیت و منو برای رستوران پنج ستاره',
            client: 'رستوران پارسیان',
            category: 'طراحی گرافیک',
            image: 'https://picsum.photos/seed/picsum/200/300'
        },
        {
            id: 4,
            title: 'تولید ویدیو تبلیغاتی',
            description: 'ساخت ویدیو تبلیغاتی حرفه‌ای برای معرفی محصولات و خدمات',
            client: 'شرکت ساختمانی آسمان',
            category: 'تولید ویدیو',
            image: 'https://picsum.photos/id/237/200/300'
        }
    ];

    // فیلتر پروژه‌ها بر اساس دسته انتخاب شده
    const filteredProjects = activeCategory === 'همه'
        ? projects
        : projects.filter(project => project.category === activeCategory);

    return (
        <div className="max-w-7xl mx-auto px-4 py-12">
            {/* فیلتر دسته‌بندی */}


            {/* لیست پروژه‌ها */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProjects.map((project) => (
                    <div
                        key={project.id}
                        className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow"
                    >
                        {/* تصویر پروژه */}
                        <div className="h-48 bg-gray-200 relative overflow-hidden">
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-full object-cover"
                                onError={(e) => {
                                    e.target.src = '/images/placeholder.jpg';
                                }}
                            />
                        </div>

                        {/* محتوای پروژه */}
                        <div className="p-5">
                            <span className="text-xs font-medium text-[#ffc400] bg-[#ffc400]/10 px-2 py-1 rounded">
                                {project.category}
                            </span>
                            <h3 className="text-xl font-bold text-gray-800 mt-2 mb-1">{project.title}</h3>
                            <p className="text-gray-600 mb-3">{project.description}</p>

                            <div className="flex items-center justify-between mt-4">
                                <span className="text-sm text-gray-500">مشتری: {project.client}</span>
                                <button className="text-[#ffc400] hover:text-[#e6b000] font-medium flex items-center">
                                    مشاهده جزئیات
                                    <IconArrowLeft className="mr-1" size={16} />
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>


            <div className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto text-center">
                    <h1 className="text-3xl font-bold text-gray-800 mb-6">آماده شروع پروژه بعدی هستید؟</h1>
                    <p className="text-xl text-gray-600 mb-8">با تیم حرفه‌ای آژانس آرمو تماس بگیرید</p>

                    <div className="bg-white rounded-xl shadow-md p-6 md:p-8 max-w-2xl mx-auto">
                        <div className="space-y-4">
                            <TextInput
                                leftSection={<IconMail size={20} className="text-gray-400" />}
                                placeholder="ایمیل شما"
                                size="md"
                                radius="md"
                                className="text-right"
                            />

                            <div className="flex flex-col sm:flex-row gap-4 pt-2">
                                <Button
                                    fullWidth
                                    size="md"
                                    radius="md"
                                    className="bg-[#ffc400] hover:bg-[#e6b000] text-gray-800 font-medium"
                                    leftSection={<IconPhoneCall size={20} />}
                                >
                                    درخواست مشاوره
                                </Button>

                                <Button
                                    fullWidth
                                    size="md"
                                    radius="md"
                                    variant="outline"
                                    className="border-gray-300 text-gray-700 font-medium"
                                >
                                    ارسال ایمیل
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default ProjectsList;