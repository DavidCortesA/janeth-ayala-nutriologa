'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Sparkles } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import ThemeToggle from './ThemeToggle'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { href: '/', label: 'Inicio' },
    { href: '/servicios', label: 'Servicios' },
    { href: '/calculadora', label: 'Calculadora IMC' },
  ]

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'card-light backdrop-blur-xl shadow-2xl' 
          : 'card-light backdrop-blur-md shadow-lg'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link href="/" className="flex items-center gap-2 group">
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6 }}
            >
              <Sparkles className="w-8 h-8 text-primary" />
            </motion.div>
            <span className="font-[var(--font-display)] text-2xl font-bold text-primary">
              Lic. Janeth Ayala
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <ul className="flex items-center gap-8">
              {navItems.map((item, index) => {
                const isActive = pathname === item.href
                return (
                  <motion.li
                    key={item.href}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link 
                      href={item.href}
                      className={`relative text-secondary hover:text-primary transition-colors duration-300 group font-medium ${
                        isActive ? 'text-primary' : ''
                      }`}
                    >
                      {item.label}
                      <motion.span 
                        className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] ${
                          isActive ? 'w-full' : 'w-0'
                        } group-hover:w-full transition-all duration-300`}
                      />
                    </Link>
                  </motion.li>
                )
              })}
            </ul>
            
            <ThemeToggle />
          </div>

          {/* Mobile Menu Button & Theme Toggle */}
          <div className="md:hidden flex items-center gap-4">
            <ThemeToggle />
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-primary"
              aria-label="Toggle menu"
            >
              <motion.div
                animate={{ rotate: isMobileMenuOpen ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </motion.div>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden card-light backdrop-blur-xl border-t"
          >
            <ul className="px-4 py-6 space-y-4">
              {navItems.map((item, index) => {
                const isActive = pathname === item.href
                return (
                  <motion.li
                    key={item.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`block py-3 px-4 rounded-xl text-lg font-medium transition-all ${
                        isActive 
                          ? 'bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] text-white' 
                          : 'text-secondary hover:text-primary hover:bg-[var(--color-primary)]/5'
                      }`}
                    >
                      {item.label}
                    </Link>
                  </motion.li>
                )
              })}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
