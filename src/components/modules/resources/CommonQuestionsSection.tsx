import { FAQCard } from "./FaqCard";

interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

const CommonQuestionsSection = () => {
  const faqs: FAQItem[] = [
    {
      id: '1',
      question: 'When is my provisional tax due?',
      answer: 'Provisional tax is typically due in 3 instalments throughout the year. The exact dates depend on your balance date. For a standard March balance date, payments are due on 28th August, 15th January, and 7th May.'
    },
    {
      id: '2',
      question: 'Do I need to register for GST?',
      answer: 'You must register for GST if your turnover exceeds $60,000 in any 12-month period, or if you expect it to exceed $60,000 in the next 12 months. You can also voluntarily register below this threshold.'
    },
    {
      id: '3',
      question: 'What records should I keep for tax purposes?',
      answer: 'You should keep all invoices, receipts, bank statements, and accounting records for at least 7 years. Digital copies are acceptable as long as they\'re legible and properly organized.'
    },
    {
      id: '4',
      question: 'When should I consider incorporating my business?',
      answer: 'Consider incorporating when your annual profits exceed $70,000-$100,000, you need asset protection, or you\'re seeking investment. The right structure depends on your specific circumstances.'
    }
  ];

  return (
    <div className="w-full min-h-screen bg-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Common <span className="text-[#4D5CAC]">Questions</span>
          </h1>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-4">
            Quick answers to frequently asked questions about NZ business accounting.
          </p>
        </div>

        {/* FAQ Cards */}
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <FAQCard
              key={faq.id}
              index={index}
              question={faq.question}
              answer={faq.answer}
            />
          ))}
        </div>

      </div>
    </div>
  );
};

export default CommonQuestionsSection;