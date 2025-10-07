import { Button } from '@mantine/core';

const AdvertisementPartner = () => {
    return (
        <div className=" mx-auto p-2 lg:p-6 flex-col-reverse lg:flex-row flex gap-2 items-center bg-white rounded-lg ">
            <div className="lg:w-1/2 w-full ">
                <h2 className="lg:text-4xl text-xl font-bold text-gray-900 mb-2">آرمو شریک تبلیغاتی <br /> کسب‌وکار شما</h2>

                <p className="text-gray-600 mb-6 leading-relaxed">
                    ما به رشد برند شما با تبلیغات هدفمند و محتوای حرفه‌ای کمک می‌کنیم. با بیش از 5 سال تجربه در صنعت تبلیغات، راهکارهای خلافانه برای موفقیت کسب و کار شما ارائه می‌دهیم.
                </p>

                <div className="flex justify-start gap-4">
                    <Button
                        variant="filled"
                        size="md"
                        className="font-medium"
                    >
                        شروع همکاری

                    </Button>

                    <Button
                        variant="outline"

                        size="md"
                        className="font-medium"
                    >
                        نمونه کارها
                    </Button>
                </div>
            </div>
            <div className='w-full lg:w-1/2'>
                <img src="/images/main/banner.png" className='w-[80%] mx-auto   ' alt="jsj" />
            </div>
        </div>
    );
};

export default AdvertisementPartner;