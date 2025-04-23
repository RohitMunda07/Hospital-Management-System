import React from 'react';

const faqs = [
  {
    question: "How can I check my claim status?",
    answer: "Go to the Transactions page and use the stepper to track your claim progress.",
  },
  {
    question: "Can I update my bank details after submission?",
    answer: "Please contact your admin directly or raise a request using the contact form above.",
  },
  {
    question: "Who can approve my claim?",
    answer: "Only the designated admin and HR department can approve your claim.",
  },
];

const Support = () => {
  return (
    <div className="min-h-screen bg-[#f4f7fb] text-black p-6 md:p-10">
      <h1 className="text-4xl font-bold text-center mb-10 text-[#003366]">Support & Help Center</h1>

      {/* Contact Form */}
      <div className="bg-white p-6 md:p-10 rounded-xl shadow-md max-w-4xl mx-auto mb-16">
        <h2 className="text-2xl font-semibold mb-6">Contact Us</h2>
        <form className="space-y-6">
          <div className='flex items-center gap-8'>
            <label className="block text-sm font-medium">Name</label>
            <input type="text" className="w-full mt-1 p-3 border border-gray-300 rounded" placeholder="Your Name" />
          </div>
          <div className='flex items-center gap-8'>
            <label className="block text-sm font-medium">Email</label>
            <input type="email" className="w-full mt-1 p-3 border border-gray-300 rounded" placeholder="you@example.com" />
          </div>
          <div className='flex'>
            <label className="text-sm font-medium">Message</label>
            <textarea className="w-full mt-8 p-3 border border-gray-300 rounded" rows="5" placeholder="How can we help you?" />
          </div>
          <button type="submit" className="bg-[#003366] text-white px-6 py-2 rounded hover:bg-blue-800 transition">
            Submit
          </button>
        </form>
      </div>

      {/* FAQ Section */}
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold mb-6">Frequently Asked Questions</h2>
        <div className="flex gap-8">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow-sm">
              <h3 className="font-semibold text-lg text-start">{faq.question}</h3>
              <p className="text-sm mt-1 text-gray-600 text-start">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Support;
