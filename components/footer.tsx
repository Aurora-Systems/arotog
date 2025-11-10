import Link from "next/link"
import Image from "next/image"
import { Mail, Phone, MapPin } from "lucide-react"


export function Footer() {
 
  
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Untitled%20design%20%285%29-GqxspR4Q8PnrDLr6fCSdnuLCdEtAmw.png"
                alt="AROTOG Logo"
                width={40}
                height={40}
                className="w-10 h-10"
              />
              <span className="text-xl font-semibold">AROTOG</span>
            </div>
            <p className="text-sm text-secondary-foreground/80 font-light leading-relaxed">Elevating Your Process</p>
            <p className="text-xs text-secondary-foreground/60 font-light leading-relaxed">
              Empowering innovation and streamlining processes for businesses worldwide.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/about"
                  className="text-sm text-secondary-foreground/80 hover:text-accent transition-colors font-light"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-sm text-secondary-foreground/80 hover:text-accent transition-colors font-light"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-sm text-secondary-foreground/80 hover:text-accent transition-colors font-light"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-sm text-secondary-foreground/80 hover:text-accent transition-colors font-light"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-3">
              <li className="text-sm text-secondary-foreground/80 font-light">Customer Support</li>
              <li className="text-sm text-secondary-foreground/80 font-light">Data Processing</li>
              <li className="text-sm text-secondary-foreground/80 font-light">Back-Office Support</li>
              <li className="text-sm text-secondary-foreground/80 font-light">Virtual Assistance</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm text-secondary-foreground/80 font-light">
                <Mail size={16} className="mt-1 flex-shrink-0" />
                <span>contact@arotog.com</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-secondary-foreground/80 font-light">
                <Phone size={16} className="mt-1 flex-shrink-0" />
                <span>+1 (681) 221-5728</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-secondary-foreground/80 font-light">
                <MapPin size={16} className="mt-1 flex-shrink-0" />
                <span>1111B S Governors Ave, STE 39351, Dover, DE 19904, USA</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-secondary-foreground/10 mt-12 pt-8 text-center">
          <p className="text-xs text-secondary-foreground/60 font-light">
            © 2025 AROTOG. All rights reserved. | www.arotog.com
          </p>
        </div>
      </div>
    </footer>
  )
}
