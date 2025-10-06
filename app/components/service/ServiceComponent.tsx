import { TextInput, Select, Textarea, Button } from '@mantine/core';
import { IconPhone, IconMail, IconClock, IconMapPin, IconSend, IconBrandFacebook, IconBrandInstagram, IconBrandTwitter, IconBrandLinkedin } from '@tabler/icons-react';

const ContactSection = () => {
    // داده‌های بخش اطلاعات تماس
    const contactInfo = [
        {
            id: 1,
            icon: IconMapPin,
            title: 'آدرس دفتر مرکزی',
            content: ['تهران، خیابان ولیعصر، بالاتر از میدان ونک، برج آسمان، طبقه ۱۳ واحد ۱۲۰۳.']
        },
        {
            id: 2,
            icon: IconPhone,
            title: 'شماره تماس',
            content: ['+۲۱-۸۸۶۵۴۳۱۱', '+۱۳۳۴۵۷۸۹']
        },
        {
            id: 3,
            icon: IconMail,
            title: 'ایمیل',
            content: ['info@armo-agency.com', 'support@armo-agency.com']
        },
        {
            id: 4,
            icon: IconClock,
            title: 'ساعات کاری',
            content: ['شنبه تا چهارشنبه: ۹ صبح تا ۶ عصر', 'پنجشنبه: ۹ صبح تا ۱ بعدازظهر']
        }
    ];

    // داده‌های شبکه‌های اجتماعی
    const socialMedia = [
        { id: 1, icon: IconBrandFacebook, name: 'Facebook' },
        { id: 2, icon: IconBrandInstagram, name: 'Instagram' },
        { id: 3, icon: IconBrandTwitter, name: 'Twitter' },
        { id: 4, icon: IconBrandLinkedin, name: 'LinkedIn' }
    ];

    // گزینه‌های خدمات
    const serviceOptions = [
        { value: 'digital-marketing', label: 'بازاریابی دیجیتال' },
        { value: 'web-design', label: 'طراحی وبسایت' },
        { value: 'graphic-design', label: 'طراحی گرافیک' },
        { value: 'seo', label: 'سئو و بهینه‌سازی' }
    ];

    return (
        <div className="max-w-6xl mx-auto px-4 py-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* بخش فرم درخواست مشاوره */}
                <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 order-2 md:order-1">
                    <h2 className="text-2xl font-bold text-gray-800 mb-2">درخواست مشاوره رایگان</h2>
                    <p className="text-gray-600 mb-6">
                        برای دریافت مشاوره رایگان درباره خدمات تبلیغاتی و بازاریابی، فرم زیر را تکمیل کنید.
                        کارشناسان ما در اسرع وقت با شما تماس خواهند گرفت.
                    </p>

                    <form className="space-y-4">
                        <TextInput
                            label="نام و نام خانوادگی"
                            placeholder="نام و نام خانوادگی خود را وارد کنید"
                            required
                            radius="md"
                        />

                        <TextInput
                            label="شماره تماس"
                            placeholder="شماره تماس خود را وارد کنید"
                            required
                            radius="md"
                        />

                        <TextInput
                            label="ایمیل (اختیاری)"
                            placeholder="ایمیل خود را وارد کنید"
                            radius="md"
                        />

                        <Select
                            label="خدمات مورد نیاز"
                            placeholder="انتخاب کنید"
                            data={serviceOptions}
                            radius="md"
                        />

                        <Textarea
                            label="توضیحات"
                            placeholder="توضیحات خود را وارد کنید"
                            radius="md"
                            minRows={3}
                        />

                        <Button
                            type="submit"
                            fullWidth
                            radius="md"
                            size="md"
                            className="bg-[#ffc400] hover:bg-[#e6b000] text-gray-800 font-medium"
                            leftSection={<IconSend size={18} />}
                        >
                            ارسال درخواست
                        </Button>
                    </form>
                </div>

                {/* بخش اطلاعات تماس */}
                <div className="space-y-6 order-1 md:order-2">
                    <h1 className="text-3xl font-bold text-gray-800 mb-6">راه‌های ارتباطی</h1>

                    {contactInfo.map((item) => {
                        const Icon = item.icon;
                        return (
                            <div key={item.id} className="flex items-start gap-4">
                                <div className="p-2 rounded-full bg-[#ffc400]/10">
                                    <Icon className="text-[#ffc400] w-6 h-6" />
                                </div>
                                <div>
                                    <h2 className="text-xl font-semibold text-gray-700 mb-2">{item.title}</h2>
                                    {item.content.map((text, index) => (
                                        <p key={index} className="text-gray-600">{text}</p>
                                    ))}
                                </div>
                            </div>
                        );
                    })}

                    <div className="pt-4">
                        <h2 className="text-xl font-semibold text-gray-700 mb-4">ما را در شبکه‌های اجتماعی دنبال کنید</h2>
                        <div className="flex gap-4">
                            {socialMedia.map((social) => {
                                const SocialIcon = social.icon;
                                return (
                                    <div
                                        key={social.id}
                                        className="w-10 h-10 rounded-full bg-[#ffc400]/10 flex items-center justify-center hover:bg-[#ffc400]/20 transition-colors cursor-pointer"
                                        title={social.name}
                                    >
                                        <SocialIcon className="text-[#ffc400] w-5 h-5" />
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactSection;