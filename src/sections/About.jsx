import { Code2, Lightbulb, Rocket, Users } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "24-48 Hour Response Time",
    description:
      "Reliable virtual support designed around a 24–48 hour response timeline",
  },
  {
    icon: Rocket,
    title: "Performance",
    description:
      "Optimizing for speed and delivering lightning-fast user experiences.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "Working closely with teams to bring ideas to life.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "Staying ahead with the latest technologies and best practices.",
  },
];

export const About = () => {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
                About Me
              </span>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground">
              Keep your operations running smoothly, 
              <span className="font-serif italic font-normal text-white">
                {" "}
                one task at a time.
              </span>
            </h2>

            <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200">
              <p>
                I’m Confidence Okoha, a passionate and results-driven Executive 
                Virtual Assistant and Customer Support Specialist with over 
                5 years of experience supporting CEOs, founders, coaches, 
                and entrepreneurs in building efficient, well-organized 
                businesses. My journey began with a strong interest in 
                productivity and digital tools, and it has evolved into a 
                deep expertise in administrative support, workflow optimization, and client communication.
              </p>
              <p>
                I specialize in email and calendar management, task and 
                project coordination, customer support, CRM management, 
                reporting, and documentation, helping busy professionals 
                stay focused on growth and strategic decisions. My approach 
                blends efficiency, attention to detail, and a proactive 
                mindset to ensure nothing falls through the cracks.
              </p>
              <p>
                When I’m not supporting clients, you’ll find me improving 
                my skills with new productivity tools, refining systems 
                that enhance workflow, and staying up to date with best 
                practices in virtual assistance and remote operations—all 
                to help my clients work smarter and stress less.
              </p>
            </div>

            <div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300">
              <p className="text-lg font-medium italic text-foreground">
                "My mission is to help business owners stay organized, stress-free, and focused 
                by delivering dependable virtual support that keeps everything running smoothly."
              </p>
            </div>
          </div>

          {/* Right Column - Hilights */}
          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((item, idx) => (
              <div
                key={idx}
                className="glass p-6 rounded-2xl animate-fade-in"
                style={{ animationDelay: `${(idx + 1) * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
