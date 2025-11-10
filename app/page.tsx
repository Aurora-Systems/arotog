import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import {
  ArrowRight,
  CheckCircle2,
  Users,
  Clock,
  TrendingUp,
  Shield,
  Headphones,
  Database,
  FileText,
  MessageSquare,
} from "lucide-react"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5 -z-10" />
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-5xl lg:text-6xl font-bold text-balance leading-tight">Elevating Your Process</h1>
                <p className="text-xl text-muted-foreground font-light leading-relaxed">
                  Empowering innovation and streamlining processes for businesses worldwide, enabling them to achieve
                  their full potential.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/services"><Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                  Discover Our Solutions <ArrowRight className="ml-2" size={20} />
                </Button></Link>
                <Link href="/about"><Button
                  size="lg"
                  variant="outline"
                  className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
                >
                  Learn More
                </Button></Link>
              </div>
            </div>
            <div className="relative h-[400px] lg:h-[500px]">
              <img
                src="https://arotog.sirv.com/website/121891.jpg"
                alt="Professional team collaboration"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview Grid */}
      <section className="py-20 px-4 lg:px-8 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl font-bold">Our Core Services</h2>
            <p className="text-lg text-muted-foreground font-light max-w-2xl mx-auto leading-relaxed">
              Comprehensive business process outsourcing solutions tailored to your needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Headphones, title: "Customer Support", desc: "24/7 professional customer service solutions" },
              { icon: Database, title: "Data Processing", desc: "Accurate and efficient data management" },
              { icon: FileText, title: "Back-Office Support", desc: "Streamlined administrative operations" },
              { icon: MessageSquare, title: "Virtual Assistance", desc: "Dedicated virtual assistant services" },
            ].map((service, idx) => (
              <div key={idx} className="glass-card p-6 space-y-4 hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-primary/10 flex items-center justify-center">
                  <service.icon className="text-primary" size={24} />
                </div>
                <h3 className="text-xl font-semibold">{service.title}</h3>
                <p className="text-sm text-muted-foreground font-light leading-relaxed">{service.desc}</p>
                {/* <Link
                  href="/services"
                  className="inline-flex items-center text-sm font-medium text-accent hover:underline"
                >
                  Learn More <ArrowRight size={16} className="ml-1" />
                </Link> */}
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/services">
            <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">View All Services <ArrowRight className="ml-2" size={20} /></Button>

            </Link>
          </div>
        </div>
      </section>

      {/* Pain Points Section */}
      <section className="py-20 px-4 lg:px-8">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-balance">Struggling with Inefficient Operations? We Can Help.</h2>
              <div className="space-y-4">
                {[
                  {
                    title: "High Operational Costs",
                    desc: "Reduce expenses with our cost-effective outsourcing solutions",
                  },
                  {
                    title: "Scaling Challenges",
                    desc: "Grow your business without the overhead of hiring and training",
                  },
                  { title: "Time-Consuming Tasks", desc: "Focus on core business while we handle routine operations" },
                  { title: "Quality Concerns", desc: "Benefit from our expert team and rigorous quality standards" },
                ].map((pain, idx) => (
                  <div key={idx} className="flex gap-4">
                    <CheckCircle2 className="text-accent flex-shrink-0 mt-1" size={24} />
                    <div>
                      <h3 className="font-semibold mb-1">{pain.title}</h3>
                      <p className="text-sm text-muted-foreground font-light leading-relaxed">{pain.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative h-[500px]">
              <img src="https://arotog.sirv.com/website/home_two.jpg" alt="Business solutions" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Why AROTOG Section */}
      <section className="py-20 px-4 lg:px-8 bg-secondary text-secondary-foreground">
        <div className="container mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl font-bold">Why Choose AROTOG</h2>
            <p className="text-lg text-secondary-foreground/80 font-light max-w-2xl mx-auto leading-relaxed">
              Your trusted partner in digital transformation and business excellence
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: TrendingUp,
                title: "Cost-Effective Solutions",
                desc: "Maximize efficiency while minimizing operational expenses",
              },
              { icon: Users, title: "Expert Team", desc: "Skilled professionals committed to your success" },
              { icon: Clock, title: "24/7 Support", desc: "Round-the-clock availability to meet your business needs" },
              {
                icon: Shield,
                title: "Data Security",
                desc: "Enterprise-grade security for your sensitive information",
              },
              {
                icon: CheckCircle2,
                title: "Quality Assurance",
                desc: "Rigorous quality control processes and standards",
              },
              { icon: TrendingUp, title: "Scalable Services", desc: "Flexible solutions that grow with your business" },
            ].map((benefit, idx) => (
              <div key={idx} className="glass-dark p-6 space-y-4 text-center">
                <div className="w-16 h-16 bg-accent/20 flex items-center justify-center mx-auto">
                  <benefit.icon className="text-accent" size={32} />
                </div>
                <h3 className="text-xl font-semibold">{benefit.title}</h3>
                <p className="text-sm text-secondary-foreground/80 font-light leading-relaxed">{benefit.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-16">
            <img src="https://arotog.sirv.com/website/home_three.jpg" alt="AROTOG team" className="w-full h-[400px] object-cover" />
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 lg:px-8">
        <div className="container mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl font-bold">What Our Clients Say</h2>
            <p className="text-lg text-muted-foreground font-light max-w-2xl mx-auto leading-relaxed">
              Trusted by businesses worldwide for exceptional service delivery
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Johnson",
                role: "Doctor, Dentine Health",
                quote:
                  "AROTOG transformed our operations. Their expertise and dedication have been invaluable to our growth.",
              },
              {
                name: "Michael Chen",
                role: "Operations Director, Alpha Venures,LLC",
                quote:
                  "Outstanding service quality and professionalism. They truly understand business needs and deliver results.",
              },
              {
                name: "Emily Rodriguez",
                role: "Founder, Home from Home",
                quote:
                  "The best outsourcing partner we've worked with. Reliable, efficient, and always exceeding expectations.",
              },
            ].map((testimonial, idx) => (
              <div key={idx} className="glass-card p-8 space-y-4">
                <div className="flex gap-4 items-center">
                  <div className="w-12 h-12 bg-primary/10 flex items-center justify-center font-semibold text-primary">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground font-light">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-sm font-light leading-relaxed italic">"{testimonial.quote}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 px-4 lg:px-8 bg-secondary text-secondary-foreground">
        <div className="container mx-auto text-center space-y-8">
          <h2 className="text-4xl lg:text-5xl font-bold text-balance">Ready to Elevate Your Business?</h2>
          <p className="text-lg text-secondary-foreground/80 font-light max-w-2xl mx-auto leading-relaxed">
            Let's discuss how AROTOG can transform your operations and drive success
          </p>
          <Link href="/contact">
            <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
              Contact Us Today <ArrowRight className="ml-2" size={20} />
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  )
}
