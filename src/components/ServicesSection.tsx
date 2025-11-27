import { useEffect, useRef, useState } from "react";
import { Globe, Smartphone, Settings, Code, Database, Shield } from "lucide-react";

const ServicesSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const services = [
    {
      icon: Globe,
      title: "Web Development",
      description:
        "Custom websites and web applications built with modern technologies. Responsive, fast, and SEO-optimized solutions.",
      features: ["React & Next.js", "Custom CMS", "E-commerce"],
    },
    {
      icon: Smartphone,
      title: "App Development",
      description:
        "Native and cross-platform mobile applications for iOS and Android. Intuitive UI/UX with seamless performance.",
      features: ["iOS & Android", "React Native", "Flutter"],
    },
    {
      icon: Settings,
      title: "Website Maintenance",
      description:
        "Keep your website running smoothly with our comprehensive maintenance services. Updates, security, and optimization.",
      features: ["24/7 Monitoring", "Security Updates", "Performance"],
    },
    {
      icon: Code,
      title: "Software Development",
      description:
        "Custom software solutions tailored to your business needs. Scalable, secure, and efficient applications.",
      features: ["Enterprise Apps", "SaaS Products", "APIs"],
    },
    {
      icon: Database,
      title: "Cloud Solutions",
      description:
        "Cloud infrastructure setup and management. Scalable solutions for growing businesses with optimal performance.",
      features: ["AWS & Azure", "DevOps", "Migration"],
    },
    {
      icon: Shield,
      title: "Cybersecurity",
      description:
        "Protect your digital assets with our security services. Vulnerability assessments and security implementations.",
      features: ["Penetration Testing", "Security Audits", "Compliance"],
    },
  ];

  return (
    <section ref={sectionRef} id="services" className="py-24 relative">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className={`text-center max-w-3xl mx-auto mb-16 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
          <span className="text-primary font-medium mb-4 block">Our Services</span>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            What We{" "}
            <span className="gradient-text">Offer</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Comprehensive IT solutions designed to elevate your business and drive
            digital transformation.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className={`group relative p-8 rounded-2xl glass-card overflow-hidden cursor-pointer transition-all duration-500 ${
                isVisible ? "animate-scale-in" : "opacity-0"
              } ${hoveredIndex === index ? "scale-105 shadow-2xl shadow-primary/20" : ""}`}
              style={{ animationDelay: `${index * 0.1}s` }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Gradient Border on Hover */}
              <div
                className={`absolute inset-0 rounded-2xl transition-opacity duration-500 ${
                  hoveredIndex === index ? "opacity-100" : "opacity-0"
                }`}
              >
                <div className="absolute inset-0 rounded-2xl gradient-border" />
              </div>

              {/* Glow Effect */}
              <div
                className={`absolute -top-24 -right-24 w-48 h-48 bg-primary/20 rounded-full blur-3xl transition-opacity duration-500 ${
                  hoveredIndex === index ? "opacity-100" : "opacity-0"
                }`}
              />

              <div className="relative z-10">
                {/* Icon */}
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                  <service.icon className="w-7 h-7 text-primary group-hover:text-secondary transition-colors duration-300" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <div className="flex flex-wrap gap-2">
                  {service.features.map((feature, fIndex) => (
                    <span
                      key={fIndex}
                      className="px-3 py-1 text-xs rounded-full bg-muted text-muted-foreground group-hover:bg-primary/10 group-hover:text-primary transition-all duration-300"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                {/* Arrow Indicator */}
                <div
                  className={`absolute bottom-8 right-8 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center transition-all duration-500 ${
                    hoveredIndex === index
                      ? "opacity-100 translate-x-0"
                      : "opacity-0 -translate-x-4"
                  }`}
                >
                  <svg
                    className="w-5 h-5 text-primary"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
