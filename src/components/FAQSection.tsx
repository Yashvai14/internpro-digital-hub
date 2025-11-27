import { useEffect, useRef, useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const faqs = [
    {
      question: "What services does InternPro offer?",
      answer:
        "InternPro offers a comprehensive range of IT services including web development, mobile app development, software development, website maintenance, cloud solutions, and cybersecurity services. We work with businesses of all sizes to deliver tailored digital solutions.",
    },
    {
      question: "How long does it take to complete a project?",
      answer:
        "Project timelines vary based on complexity and scope. A simple website might take 2-4 weeks, while complex applications can take several months. We provide detailed timelines during the initial consultation and keep you updated throughout the development process.",
    },
    {
      question: "What technologies do you use?",
      answer:
        "We use modern, industry-leading technologies including React, Next.js, Node.js, Python, React Native, Flutter, AWS, Azure, and more. Our tech stack is chosen based on your specific project requirements to ensure optimal performance and scalability.",
    },
    {
      question: "Do you provide ongoing support and maintenance?",
      answer:
        "Yes! We offer comprehensive maintenance and support packages. This includes regular updates, security patches, performance optimization, bug fixes, and 24/7 monitoring. Our team is always available to help keep your digital assets running smoothly.",
    },
    {
      question: "How do you ensure project quality?",
      answer:
        "We follow rigorous quality assurance processes including code reviews, automated testing, manual QA testing, and user acceptance testing. Our agile development approach ensures continuous feedback and improvements throughout the project lifecycle.",
    },
    {
      question: "What is your pricing model?",
      answer:
        "We offer flexible pricing models including fixed-price projects, hourly rates, and retainer agreements. The best model depends on your project scope and requirements. Contact us for a free consultation and detailed quote tailored to your needs.",
    },
  ];

  return (
    <section ref={sectionRef} id="faq" className="py-24 relative">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className={`text-center max-w-3xl mx-auto mb-16 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
          <span className="text-primary font-medium mb-4 block">FAQ</span>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Frequently Asked{" "}
            <span className="gradient-text">Questions</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Find answers to common questions about our services and how we work.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className={`max-w-3xl mx-auto ${isVisible ? "animate-fade-in-up animation-delay-200" : "opacity-0"}`}>
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="glass-card rounded-2xl px-6 border-none overflow-hidden group data-[state=open]:shadow-lg data-[state=open]:shadow-primary/10 transition-all duration-300"
              >
                <AccordionTrigger className="text-left hover:no-underline py-6 group-hover:text-primary transition-colors duration-300">
                  <span className="text-lg font-medium pr-4">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
