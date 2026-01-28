'use client'

import { motion } from 'framer-motion'
import { Sparkles, Heart, Leaf, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  }

  const floatingVariants = {
    animate: {
      y: [-10, 10, -10],
      rotate: [-5, 5, -5],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: 'easeInOut',
      },
    },
  }

  return (
    <section className="relative min-h-screen flex items-center pt-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Gradient Background */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5 }}
        className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-[var(--color-primary)]/20 via-[var(--color-secondary)]/20 to-transparent rounded-full blur-3xl"
        style={{ transform: 'translate(30%, -30%)' }}
      />
      
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, delay: 0.3 }}
        className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-[var(--color-accent)]/20 to-transparent rounded-full blur-3xl"
        style={{ transform: 'translate(-30%, 30%)' }}
      />

      <div className="max-w-7xl mx-auto w-full">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center"
        >
          {/* Text Content */}
          <div className="space-y-8 z-10">
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-4 py-2 rounded-full card-light border shadow-lg">
              <Sparkles className="w-5 h-5 text-primary" />
              <span className="text-sm font-semibold text-primary">Nutrición Personalizada</span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-5xl sm:text-6xl lg:text-7xl font-bold text-primary leading-tight"
            >
              Transforma tu Salud con Amor
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-xl text-secondary leading-relaxed max-w-xl"
            >
              Tu bienestar es mi prioridad. Juntos crearemos un plan nutricional personalizado que se adapte a tu estilo de vida, objetivos y necesidades únicas.
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
              <Link
                href="/servicios"
                className="group inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] text-white rounded-full font-semibold text-lg shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
              >
                Ver Servicios
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <Link
                href="/calculadora"
                className="group inline-flex items-center gap-2 px-8 py-4 card-light border-2 border-[var(--color-primary)] text-primary rounded-full font-semibold text-lg hover:bg-[var(--color-primary)] hover:text-white transition-all duration-300"
              >
                Calcular IMC
                <Sparkles className="w-5 h-5" />
              </Link>
            </motion.div>

            <motion.div variants={itemVariants} className="flex items-center gap-8 pt-4">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-12 h-12 rounded-full card-light border-2 border-[var(--color-primary)] flex items-center justify-center text-2xl">
                    {['💚', '✨', '🌸', '💪'][i - 1]}
                  </div>
                ))}
              </div>
              <div>
                <p className="font-semibold text-primary">+500 clientes felices</p>
                <p className="text-sm text-secondary">Transformando vidas</p>
              </div>
            </motion.div>
          </div>

          {/* Image Container */}
          <motion.div
            variants={itemVariants}
            className="relative"
          >
            <div className="relative w-full aspect-[4/5] max-w-lg mx-auto">
              {/* Main Image */}
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
                className="relative w-full h-full rounded-[60px] overflow-hidden shadow-2xl"
              >
                <Image
                  src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800&h=1000&fit=crop"
                  alt="Comida saludable y nutritiva"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-primary)]/20 to-transparent" />
              </motion.div>

              {/* Floating Card 1 */}
              <motion.div
                variants={floatingVariants}
                animate="animate"
                className="absolute -top-6 -right-6 card-light p-4 rounded-2xl shadow-xl border backdrop-blur-sm"
              >
                <Heart className="w-8 h-8 text-[var(--color-accent)] fill-current" />
              </motion.div>

              {/* Floating Card 2 */}
              <motion.div
                variants={floatingVariants}
                animate="animate"
                transition={{ delay: 1 }}
                className="absolute -bottom-6 -left-6 card-light p-6 rounded-2xl shadow-xl border backdrop-blur-sm"
              >
                <div className="flex items-center gap-3">
                  <Leaf className="w-8 h-8 text-[var(--color-secondary)]" />
                  <div>
                    <p className="font-bold text-primary">100%</p>
                    <p className="text-xs text-secondary">Natural</p>
                  </div>
                </div>
              </motion.div>

              {/* Decorative Circle */}
              <motion.div
                animate={{
                  scale: [1, 1.1, 1],
                  rotate: [0, 180, 360],
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: 'linear',
                }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border border-[var(--color-primary)]/20 rounded-full -z-10"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
