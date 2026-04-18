import FaqsCard from "./FaqsCard";

function FAQs() {
  const faqsList = [
    {
      q: "What are some random questions to ask?",
      a: "That's exactly the reason we created this random question generator. There are hundreds of random questions to choose from so you're able to find the perfect random question.",
    },
    {
      q: "Do you include common questions?",
      a: "This generator doesn't include most common questions. The thought is that you can come up with common questions on your own so most of the questions in this generator.",
    },
    {
      q: "Can I use this for 21 questions?",
      a: "Yes! there are two ways that you can use this question generator depending on what you're after. You can indicate that you want 21 questions generated.",
    },
    {
      q: "Are these questions for girls or for boys?",
      a: "The questions in this generator are gender neutral and can be used to ask either male of females (or any other gender the person identifies with).",
    },
    {
      q: "What do you wish you had more talent doing?",
      a: "If you've been searching for a way to get random questions, you've landed on the correct webpage. We created the Random Question Generator to ask you as many random questions as your heart desires.",
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-14 reveal">
          <span className="section-subtitle text-gold">Have Questions?</span>
          <h2 className="section-title text-brand-black">
            Frequently Asked{" "}
            <span className="text-gold-gradient italic">Questions</span>
          </h2>
          <div className="gold-divider" />
          <p className="font-sans text-gray-500 max-w-lg mx-auto">
            Answered all frequently asked questions. Still confused? Feel free to
            contact us.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="reveal">
          {faqsList.map((item, idx) => (
            <div key={idx}>
              <FaqsCard idx={idx} faqsList={item} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FAQs;
