const FAQSection = () => {
  const faqs = [
    {
      id: 1,
      question: 'هزینه خدمات تبلیغاتی آزمون چگونه محاسبه می‌شود؟',
      answer: 'هزینه خدمات تبلیغاتی آزمون بر اساس نوع خدمات، گستردگی پروژه، زمان مورد نیاز و پیچیدگی آن محاسبه می‌شود.'
    },
    {
      id: 2,
      question: 'مدت زمان انجام پروژه‌های تبلیغاتی چقدر است؟',
      answer: 'مدت زمان انجام پروژه‌های تبلیغاتی بسته به نوع و پیچیدگی پروژه متفاوت است. به عنوان مثال، طراحی یک لوگو...'
    },
    {
      id: 3,
      question: 'آیا امکان اصلاح و تغییر در طرح‌ها وجود دارد؟',
      answer: 'بله، در تمامی خدمات طراحی ما، امکان اصلاح و تغییر وجود دارد. در قرارداد هر پروژه، تعداد مشخص اصلاحات رایگان...'
    },
    {
      id: 4,
      question: 'آیا آزمون خدمات پس از فروش ارائه می‌دهد؟',
      answer: 'بله، آزمون برای تمامی خدمات خود، پشتیبانی و خدمات پس از فروش ارائه می‌دهد. برای وبسایت‌ها، ما خدمات...'
    },
    {
      id: 5,
      question: 'آیا امکان همکاری از راه دور با آزمون وجود دارد؟',
      answer: 'بله، آزمون با مشتریان از سراسر ایران و حتی خارج از کشور همکاری می‌کند. تمامی مراحل پروژه از مشاوره اولیه تا تحویل...'
    }
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">سوالات متداول</h1>
      <p className="text-lg text-gray-600 text-center mb-12">
        پاسخ به سوالات رایج درباره خدمات آژانس تبلیغاتی آزمون
      </p>

      <div className="space-y-6">
        {faqs.map((faq) => (
          <div key={faq.id} className="border-b border-gray-200 pb-6">
            <h3 className="text-xl font-semibold text-gray-700 mb-2">{faq.question}</h3>
            <p className="text-gray-600">{faq.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQSection;