"use client"

import type React from "react"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Loader2 } from "lucide-react"
import { FormEvent, useRef, useState } from "react"
import emailjs from "@emailjs/browser"

export default function ContactPage() {
  const [loading,set_loading] = useState<boolean>(false)
  const [showAlert, setShowAlert] = useState(false);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const form: any = useRef(null)

    const send_application = (e: FormEvent) => {
        e.preventDefault()
        set_loading(true)
        emailjs.sendForm("service_znqk044", "template_7ao1wti", form.current, {
            publicKey: "RnEtq4qKzX5WQQOEo"
        }).then(() => {
            alert("✅ We received your enquiry, expect a call or an email soon!")
            form.current.reset()
        }).catch(() => {
            alert("⚠️ Message not sent, please try again or send us a message on our email support@aurorasystems.co.zw!")
        }).finally(()=>{
            set_loading(false)
        })
    }


  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 lg:px-8 bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="container mx-auto text-center space-y-6">
          <h1 className="text-5xl lg:text-6xl font-bold">Contact Us</h1>
          <p className="text-xl text-muted-foreground font-light max-w-3xl mx-auto leading-relaxed">
            Get in touch with our team to discuss how we can elevate your business processes
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20 px-4 lg:px-8">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold mb-6">Let's Talk</h2>
                <p className="text-muted-foreground font-light leading-relaxed">
                  We're here to answer your questions and discuss how AROTOG can support your business goals. Reach out
                  to us through any of the following channels.
                </p>
              </div>

              <div className="space-y-6">
                <div className="glass-card p-6 flex gap-4">
                  <div className="w-12 h-12 bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Email Us</h3>
                    <p className="text-sm text-muted-foreground font-light">contact@arotog.com</p>
                    <p className="text-sm text-muted-foreground font-light">support@arotog.com</p>
                  </div>
                </div>

                <div className="glass-card p-6 flex gap-4">
                  <div className="w-12 h-12 bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Call Us</h3>
                    <p className="text-sm text-muted-foreground font-light">+1 (681) 221-5728</p>
                    <p className="text-sm text-muted-foreground font-light">Mon-Fri, 9:00 AM - 6:00 PM EST</p>
                  </div>
                </div>

                <div className="glass-card p-6 flex gap-4">
                  <div className="w-12 h-12 bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Visit Us</h3>
                    <p className="text-sm text-muted-foreground font-light leading-relaxed">
                    1111B S Governors Ave

                      <br />
                      STE 39351

                      <br />
                      Dover, DE 19904, USA
                    </p>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
            
            </div>

            {/* Contact Form */}
            <div className="glass-card p-8">
              <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
              <form onSubmit={send_application} ref={form} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Name *
                  </label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Your name"
                    name="full_name"
                   
                 
                    required
                    className="w-full"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email *
                  </label>
                  <Input
                    type="email"
                    name="email"
                    required
                    className="w-full"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Contact Number *
                  </label>
                  <Input
                    type="tel"
                    name="contact_number"
                    required
                    className="w-full"
                  />
                </div>


                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2">
                    Subject *
                  </label>
                  <Input
                    type="text"
                    placeholder="How can we help?"
                    name="subject"
                    required
                    className="w-full"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message *
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Tell us about your needs..."
                    rows={6}
                    name="message"
                    required
                    className="w-full"
                  />
                </div>

                <Button type="submit" disabled={loading} className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
                  {loading ? <Loader2 className="animate-spin" size={20} /> : "Send Message"}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
