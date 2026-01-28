'use client'

import { motion } from 'framer-motion'
import { Facebook, Instagram, MessageCircle, Heart, Sparkles } from 'lucide-react'
import Link from 'next/link'

export default function Footer() {
  const socialLinks = [
    { icon: Facebook, href: 'https://www.facebook.com/Nutby.Oralia', label: 'Facebook' },
    { icon: Instagram, href: 'https://www.instagram.com/nut.jayala', label: 'Instagram' },
    { icon: MessageCircle, href: 'https://wa.me/528127482590', label: 'WhatsApp' },
  ]

  const quickLinks = [
    { href: '/', label: 'Inicio' },
    { href: '/servicios', label: 'Servicios' },
    { href: '/calculadora', label: 'Calculadora IMC' },
  ]

  return (
    <footer className="relative border-t">
      <div className="card-light backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid md:grid-cols-3 gap-12"
          >
            {/* Brand */}
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Sparkles className="w-8 h-8 text-primary" />
                <h3 className="text-2xl font-[var(--font-display)] font-bold text-primary">
                  Lic. Janeth Ayala
                </h3>
              </div>
              <p className="text-secondary">
                Nutrióloga Certificada especializada en transformar vidas a través de la alimentación consciente.
              </p>
              {/* <p className="text-sm text-secondary">Cédula Profesional: 1234567</p> */}
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-bold text-primary mb-4">Enlaces Rápidos</h4>
              <ul className="space-y-2">
                {quickLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-secondary hover:text-primary transition-colors inline-flex items-center gap-2 group"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-primary)] group-hover:w-3 transition-all" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Social & Contact */}
            <div>
              <h4 className="text-lg font-bold text-primary mb-4">Sígueme</h4>
              <div className="flex gap-4 mb-6">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    whileHover={{ 
                      scale: 1.2, 
                      y: -5,
                    }}
                    whileTap={{ scale: 0.9 }}
                    className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-secondary)] rounded-xl shadow-lg hover:shadow-xl transition-all"
                    aria-label={social.label}
                  >
                    <social.icon size={20} className="text-white" />
                  </motion.a>
                ))}
              </div>
              <p className="text-sm text-secondary">
                Monterrey, Nuevo León, México
              </p>
            </div>
          </motion.div>

          {/* Bottom Bar */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="mt-12 pt-8 border-t border-[var(--color-border)]"
          >
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-secondary text-sm text-center md:text-left">
                &copy; {new Date().getFullYear()} Lic. Janeth Ayala. Todos los derechos reservados.
              </p>
              <p className="text-secondary text-sm flex items-center gap-2">
                Hecho con <Heart size={16} className="text-[var(--color-accent)] fill-current" /> para tu bienestar
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  )
}
