import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Target, Eye, Award, Users, Lightbulb, Heart, TrendingUp } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 lg:px-8 bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="container mx-auto text-center space-y-6">
          <h1 className="text-5xl lg:text-6xl font-bold">About AROTOG</h1>
          <p className="text-xl text-muted-foreground font-light max-w-3xl mx-auto leading-relaxed">
            Your trusted partner in digital transformation and business process excellence
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 px-4 lg:px-8">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="glass-card p-8 space-y-6">
              <div className="w-16 h-16 bg-primary/10 flex items-center justify-center">
                <Target className="text-primary" size={32} />
              </div>
              <h2 className="text-3xl font-bold">Our Mission</h2>
              <p className="text-muted-foreground font-light leading-relaxed">
                To empower innovation and streamline processes for businesses worldwide, enabling them to achieve their
                full potential through exceptional outsourcing solutions.
              </p>
            </div>

            <div className="glass-card p-8 space-y-6">
              <div className="w-16 h-16 bg-accent/10 flex items-center justify-center">
                <Eye className="text-accent" size={32} />
              </div>
              <h2 className="text-3xl font-bold">Our Vision</h2>
              <p className="text-muted-foreground font-light leading-relaxed">
                To be the leading partner in digital transformation, recognized for our commitment to excellence and
                forward-thinking solutions that drive business success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The AROTOG Story */}
      <section className="py-20 px-4 lg:px-8 bg-muted/30">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <img src="/modern-office-building-professional-workspace.jpg" alt="AROTOG office" className="w-full h-[500px] object-cover" />
            </div>
            <div className="space-y-6">
              <h2 className="text-4xl font-bold">The AROTOG Story</h2>
              <p className="text-muted-foreground font-light leading-relaxed">
                AROTOG emerged from a vision to revolutionize business process outsourcing. We
                recognized that businesses needed more than just cost savings they needed a partner who understood their
                challenges and could deliver innovative solutions.
              </p>
              <p className="text-muted-foreground font-light leading-relaxed">
                Today, we serve clients across industries, providing comprehensive BPO services that combine
                cutting-edge technology with human expertise. Our commitment to integrity, collaboration, and relentless
                pursuit of progress defines everything we do.
              </p>
              <p className="text-muted-foreground font-light leading-relaxed">
                As we continue to grow, our focus remains unchanged: elevating processes and empowering businesses to
                thrive in an ever evolving digital landscape.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 px-4 lg:px-8">
        <div className="container mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl font-bold">Our Core Values</h2>
            <p className="text-lg text-muted-foreground font-light max-w-2xl mx-auto leading-relaxed">
              The principles that guide our every decision and action
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Award,
                title: "Integrity",
                desc: "We operate with honesty and transparency in all our relationships and commitments",
              },
              {
                icon: Lightbulb,
                title: "Innovation",
                desc: "We embrace change and continuously seek better ways to serve our clients",
              },
              {
                icon: Users,
                title: "Collaboration",
                desc: "We work as partners with our clients, fostering strong, lasting relationships",
              },
              {
                icon: Target,
                title: "Excellence",
                desc: "We are committed to delivering the highest quality in everything we do",
              },
              {
                icon: Heart,
                title: "Client-Centricity",
                desc: "Our clients' success is our success—we prioritize their needs above all",
              },
              {
                icon: TrendingUp,
                title: "Progress",
                desc: "We relentlessly pursue improvement and growth for ourselves and our clients",
              },
            ].map((value, idx) => (
              <div key={idx} className="glass-card p-8 space-y-4 text-center">
                <div className="w-16 h-16 bg-primary/10 flex items-center justify-center mx-auto">
                  <value.icon className="text-primary" size={32} />
                </div>
                <h3 className="text-xl font-semibold">{value.title}</h3>
                <p className="text-sm text-muted-foreground font-light leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      {/* <section className="py-20 px-4 lg:px-8 bg-secondary text-secondary-foreground">
        <div className="container mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl font-bold">Meet Our Leadership</h2>
            <p className="text-lg text-secondary-foreground/80 font-light max-w-2xl mx-auto leading-relaxed">
              Experienced professionals dedicated to your success
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                name: "James Anderson",
                role: "Chief Executive Officer",
                image: "professional executive portrait business suit",
              },
              {
                name: "Maria Santos",
                role: "Chief Operations Officer",
                image: "professional female executive portrait",
              },
              { name: "David Park", role: "Chief Technology Officer", image: "professional tech executive portrait" },
              { name: "Lisa Thompson", role: "Chief Client Officer", image: "professional female executive smiling" },
            ].map((member, idx) => (
              <div key={idx} className="glass-dark p-6 space-y-4 text-center">
                <div className="w-full aspect-square bg-muted/20 flex items-center justify-center mb-4">
                  <img
                    src={`/.jpg?key=mdwcv&height=300&width=300&query=${member.image}`}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-lg font-semibold">{member.name}</h3>
                <p className="text-sm text-secondary-foreground/80 font-light">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      <Footer />
    </div>
  )
}
