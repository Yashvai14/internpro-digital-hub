import { useState, useEffect, useRef } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin, Send, Clock, CheckCircle } from "lucide-react";

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);
    toast({
      title: "Message sent successfully!",
      description: "We'll get back to you within 24 hours.",
    });

    setFormData({ name: "", email: "", subject: "", message: "" });
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      content: "hello@internpro.com",
      description: "We reply within 24 hours",
    },
    {
      icon: Phone,
      title: "Call Us",
      content: "+1 (555) 123-4567",
      description: "Mon-Fri 9am-6pm EST",
    },
    {
      icon: MapPin,
      title: "Visit Us",
      content: "123 Tech Street",
      description: "Silicon Valley, CA 94000",
    },
    {
      icon: Clock,
      title: "Working Hours",
      content: "Monday - Friday",
      description: "9:00 AM - 6:00 PM EST",
    },
  ];

  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-glow" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse-glow animation-delay-300" />
        </div>

        <div className="container mx-auto px-4 text-center">
          <div className={`${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
            <span className="text-primary font-medium mb-4 block">Get in Touch</span>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Let's Start a{" "}
              <span className="gradient-text">Conversation</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Have a project in mind? We'd love to hear about it. Send us a message
              and we'll respond as soon as possible.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-12 relative">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className={`glass-card p-6 rounded-2xl text-center group hover:scale-105 transition-all duration-500 ${
                  isVisible ? "animate-scale-in" : "opacity-0"
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                  <info.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-semibold mb-1">{info.title}</h3>
                <p className="text-primary font-medium">{info.content}</p>
                <p className="text-sm text-muted-foreground">{info.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section ref={sectionRef} className="py-16 relative">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left - Info */}
            <div className={`${isVisible ? "animate-slide-in-left animation-delay-200" : "opacity-0"}`}>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Build Something{" "}
                <span className="gradient-text">Amazing?</span>
              </h2>
              <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                Whether you need a stunning website, a powerful mobile app, or
                comprehensive IT solutions, our team is here to help bring your
                vision to life.
              </p>

              <div className="space-y-6">
                {[
                  "Free initial consultation",
                  "Detailed project proposal within 48 hours",
                  "Transparent pricing with no hidden costs",
                  "Dedicated project manager assigned",
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3 group">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                      <CheckCircle className="w-5 h-5 text-primary group-hover:text-primary-foreground transition-colors" />
                    </div>
                    <span className="text-muted-foreground group-hover:text-foreground transition-colors">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              {/* Decorative Element */}
              <div className="mt-12 p-6 glass-card rounded-2xl">
                <p className="text-lg font-medium mb-2">Quick Response Guarantee</p>
                <p className="text-muted-foreground">
                  We respond to all inquiries within 24 hours. Your project matters to us!
                </p>
              </div>
            </div>

            {/* Right - Form */}
            <div className={`${isVisible ? "animate-slide-in-right animation-delay-300" : "opacity-0"}`}>
              <form onSubmit={handleSubmit} className="glass-card p-8 rounded-2xl space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Your Name</label>
                    <Input
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      required
                      className="bg-background/50 border-border/50 focus:border-primary transition-colors"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Email Address</label>
                    <Input
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      required
                      className="bg-background/50 border-border/50 focus:border-primary transition-colors"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Subject</label>
                  <Input
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Project Inquiry"
                    required
                    className="bg-background/50 border-border/50 focus:border-primary transition-colors"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Your Message</label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your project..."
                    required
                    rows={6}
                    className="bg-background/50 border-border/50 focus:border-primary transition-colors resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  variant="hero"
                  size="xl"
                  className="w-full group"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <div className="flex items-center gap-2">
                      <div className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                      Sending...
                    </div>
                  ) : isSubmitted ? (
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5" />
                      Message Sent!
                    </div>
                  ) : (
                    <>
                      Send Message
                      <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </>
                  )}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className={`glass-card rounded-2xl overflow-hidden h-80 relative ${isVisible ? "animate-fade-in-up animation-delay-400" : "opacity-0"}`}>
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-12 h-12 text-primary mx-auto mb-4 animate-bounce" />
                <p className="text-xl font-semibold">123 Tech Street, Silicon Valley</p>
                <p className="text-muted-foreground">California, CA 94000</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Contact;
