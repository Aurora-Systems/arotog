import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Calendar, User, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function BlogPage() {
  const posts = [
    {
      title: "5 Ways Business Process Outsourcing Reduces Operational Costs",
      excerpt:
        "Discover how strategic outsourcing can significantly lower your business expenses while maintaining quality and efficiency.",
      date: "2025-01-15",
      author: "Sarah Mitchell",
      category: "Cost Optimization",
      image: "business cost reduction financial analytics",
    },
    {
      title: "The Future of Customer Support: AI and Human Expertise Combined",
      excerpt:
        "Explore how the integration of AI technology and skilled professionals is revolutionizing customer service delivery.",
      date: "2025-01-10",
      author: "Michael Chen",
      category: "Customer Support",
      image: "AI customer support technology modern interface",
    },
    {
      title: "Scaling Your Business: When to Consider Outsourcing",
      excerpt:
        "Learn the key indicators that signal it's time to leverage outsourcing for sustainable business growth.",
      date: "2025-01-05",
      author: "Emily Rodriguez",
      category: "Business Growth",
      image: "business growth scaling team expansion",
    },
    {
      title: "Data Security in BPO: Best Practices and Standards",
      excerpt:
        "Understanding how to maintain the highest security standards when outsourcing sensitive business processes.",
      date: "2024-12-28",
      author: "David Park",
      category: "Data Security",
      image: "data security cybersecurity professional technology",
    },
    {
      title: "Remote Work Revolution: How Virtual Assistants Boost Productivity",
      excerpt:
        "Discover the productivity benefits of working with skilled virtual assistants in today's remote-first world.",
      date: "2024-12-20",
      author: "Lisa Thompson",
      category: "Virtual Assistance",
      image: "remote work virtual assistant productivity home office",
    },
    {
      title: "Quality Assurance in Outsourcing: What to Look For",
      excerpt:
        "Essential criteria for evaluating quality standards when selecting a business process outsourcing partner.",
      date: "2024-12-15",
      author: "James Anderson",
      category: "Quality Standards",
      image: "quality assurance business standards professional review",
    },
  ]

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 lg:px-8 bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="container mx-auto text-center space-y-6">
          <h1 className="text-5xl lg:text-6xl font-bold">Blog & Insights</h1>
          <p className="text-xl text-muted-foreground font-light max-w-3xl mx-auto leading-relaxed">
            Industry insights, best practices, and thought leadership from the AROTOG team
          </p>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20 px-4 lg:px-8">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, idx) => (
              <article key={idx} className="glass-card overflow-hidden hover:shadow-xl transition-shadow">
                <div className="relative h-48 bg-muted">
                  <img
                    src={`/.jpg?height=300&width=400&query=${post.image}`}
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-accent text-accent-foreground text-xs font-semibold px-3 py-1">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-6 space-y-4">
                  <h2 className="text-xl font-semibold leading-tight hover:text-accent transition-colors">
                    <Link href="#">{post.title}</Link>
                  </h2>
                  <p className="text-sm text-muted-foreground font-light leading-relaxed">{post.excerpt}</p>
                  <div className="flex items-center gap-4 text-xs text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar size={14} />
                      <span className="font-light">
                        {new Date(post.date).toLocaleDateString("en-US", {
                          month: "short",
                          day: "numeric",
                          year: "numeric",
                        })}
                      </span>
                    </div>
                    <div className="flex items-center gap-1">
                      <User size={14} />
                      <span className="font-light">{post.author}</span>
                    </div>
                  </div>
                  <Link href="#" className="inline-flex items-center text-sm font-medium text-accent hover:underline">
                    Read More <ArrowRight size={16} className="ml-1" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
