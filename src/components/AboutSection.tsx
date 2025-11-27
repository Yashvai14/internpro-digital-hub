import { useEffect, useRef, useState } from "react";
import { Target, Lightbulb, Users, Zap } from "lucide-react";

const AboutSection = () => {
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

  const features = [
    {
      icon: Target,
      title: "Mission Driven",
      description: "Delivering excellence in every project with precision and dedication.",
    },
    {
      icon: Lightbulb,
      title: "Innovation First",
      description: "Leveraging cutting-edge technologies to create future-ready solutions.",
    },
    {
      icon: Users,
      title: "Client Focused",
      description: "Your success is our priority. We work closely to understand your needs.",
    },
    {
      icon: Zap,
      title: "Fast Delivery",
      description: "Agile methodologies ensure quick turnarounds without compromising quality.",
    },
  ];

  return (
    <section ref={sectionRef} id="about" className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-secondary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className={`${isVisible ? "animate-slide-in-left" : "opacity-0"}`}>
            <span className="text-primary font-medium mb-4 block">About Us</span>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              We Are{" "}
              <span className="gradient-text">InternPro</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
              InternPro is a leading IT services company dedicated to transforming 
              businesses through innovative technology solutions. With years of 
              experience and a passionate team of experts, we deliver exceptional 
              results that exceed expectations.
            </p>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              From web development to mobile applications, we specialize in creating 
              digital experiences that are not just functional but truly remarkable. 
              Our commitment to quality and innovation sets us apart in the industry.
            </p>

            {/* Progress Bars */}
            <div className="space-y-4">
              {[
                { skill: "Web Development", percentage: 95 },
                { skill: "App Development", percentage: 90 },
                { skill: "Software Solutions", percentage: 88 },
              ].map((item, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-medium">{item.skill}</span>
                    <span className="text-sm text-primary">{item.percentage}%</span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-primary to-secondary transition-all duration-1000 ease-out"
                      style={{
                        width: isVisible ? `${item.percentage}%` : "0%",
                        transitionDelay: `${index * 0.2}s`,
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Feature Cards */}
          <div className={`grid grid-cols-2 gap-4 ${isVisible ? "animate-slide-in-right" : "opacity-0"}`}>
            {features.map((feature, index) => (
              <div
                key={index}
                className="glass-card p-6 rounded-2xl hover:scale-105 transition-all duration-500 group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
