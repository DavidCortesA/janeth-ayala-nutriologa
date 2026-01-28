'use client'

import { motion } from 'framer-motion'
import { Target, Dumbbell, Baby, Stethoscope, Users, Sprout, ArrowRight, Check } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

const services = [
  {
    icon: Target,
    title: 'Pérdida de Peso',
    description: 'Programas personalizados para alcanzar tu peso ideal de manera saludable y sostenible.',
    image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&h=600&fit=crop',
    features: [
      'Plan nutricional personalizado',
      'Seguimiento semanal',
      'Recetas saludables',
      'Apoyo constante',
    ],
    color: 'from-pink-500 to-rose-500',
  },
  {
    icon: Dumbbell,
    title: 'Nutrición Deportiva',
    description: 'Optimiza tu rendimiento físico con planes diseñados para atletas.',
    image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&h=600&fit=crop',
    features: [
      'Planes para antes/después del ejercicio',
      'Suplementación adecuada',
      'Optimización de energía',
      'Recuperación muscular',
    ],
    color: 'from-purple-500 to-pink-500',
  },
  {
    icon: Baby,
    title: 'Embarazo y Lactancia',
    description: 'Acompañamiento nutricional durante esta etapa tan especial.',
    image: 'https://images.unsplash.com/photo-1584515933487-779824d29309?w=800&h=600&fit=crop',
    features: [
      'Nutrición prenatal',
      'Control de peso saludable',
      'Alimentación durante lactancia',
      'Cuidado integral',
    ],
    color: 'from-pink-400 to-rose-400',
  },
  {
    icon: Stethoscope,
    title: 'Enfermedades Crónicas',
    description: 'Manejo especializado de diabetes, hipertensión y más.',
    image: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=800&h=600&fit=crop',
    features: [
      'Control de glucosa',
      'Reducción de presión arterial',
      'Manejo de colesterol',
      'Prevención de complicaciones',
    ],
    color: 'from-rose-500 to-pink-500',
  },
  {
    icon: Users,
    title: 'Nutrición Familiar',
    description: 'Hábitos saludables para toda la familia.',
    image: 'https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?w=800&h=600&fit=crop',
    features: [
      'Menús familiares',
      'Educación nutricional',
      'Hábitos para niños',
      'Cocina saludable',
    ],
    color: 'from-pink-500 to-purple-500',
  },
  {
    icon: Sprout,
    title: 'Alimentación Vegetariana',
    description: 'Asesoría en dietas plant-based equilibradas.',
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&h=600&fit=crop',
    features: [
      'Proteínas vegetales',
      'Balance nutricional',
      'Recetas veganas',
      'Suplementación necesaria',
    ],
    color: 'from-green-400 to-emerald-500',
  },
]

export default function ServicesContent() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  }

  return (
    <section className="py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-primary)]/5 via-transparent to-[var(--color-accent)]/5" />

      <div className="max-w-7xl mx-auto relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full card-light border mb-6"
          >
            <Target className="w-5 h-5 text-primary" />
            <span className="text-sm font-semibold text-primary">Servicios Profesionales</span>
          </motion.div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-primary mb-6">
            Encuentra tu
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-accent)]">
              Servicio Ideal
            </span>
          </h1>
          <p className="text-xl text-secondary max-w-3xl mx-auto">
            Cada persona es única, por eso ofrezco servicios personalizados que se adaptan a tus necesidades, objetivos y estilo de vida.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="card-light rounded-3xl overflow-hidden shadow-xl border hover:border-[var(--color-primary)] transition-all group"
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${service.color} opacity-60 group-hover:opacity-70 transition-opacity`} />
                
                {/* Icon Badge */}
                <div className="absolute top-4 right-4 w-14 h-14 bg-white/90 backdrop-blur-sm rounded-2xl flex items-center justify-center shadow-lg">
                  <service.icon className="w-7 h-7 text-primary" />
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <h3 className="text-2xl font-bold text-primary group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[var(--color-primary)] group-hover:to-[var(--color-accent)] transition-all">
                  {service.title}
                </h3>
                
                <p className="text-secondary leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-2 pt-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-secondary">
                      <Check size={16} className="text-[var(--color-secondary)] flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Link
                  href="/#contacto"
                  className="inline-flex items-center gap-2 text-primary font-semibold group/link mt-4"
                >
                  Más información
                  <ArrowRight size={18} className="group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-20 card-light p-12 rounded-3xl shadow-2xl border text-center relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-primary)]/10 to-[var(--color-accent)]/10" />
          <div className="relative">
            <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">
              ¿No encuentras lo que buscas?
            </h2>
            <p className="text-xl text-secondary mb-8 max-w-2xl mx-auto">
              Ofrezco consultas personalizadas para necesidades específicas. Contáctame y juntos encontraremos la mejor solución para ti.
            </p>
            <Link
              href="/#contacto"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] text-white rounded-full font-semibold text-lg shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all"
            >
              Agenda tu Consulta
              <ArrowRight size={20} />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
