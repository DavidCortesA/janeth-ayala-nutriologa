'use client'

import { motion } from 'framer-motion'
import { CheckCircle2, Award, Users2, GraduationCap, Heart, Star } from 'lucide-react'
import Image from 'next/image'

const credentials = [
  'Licenciatura en Nutrición',
  'Certificación en Nutrición Clínica',
  'Especialización en Nutrición Deportiva',
  'Más de 5 años de experiencia',
  'Cédula Profesional Vigente',
]

const stats = [
  { icon: Users2, value: '500+', label: 'Clientes Felices' },
  { icon: Star, value: '5.0', label: 'Rating Promedio' },
  { icon: Heart, value: '95%', label: 'Satisfacción' },
]

export default function About() {
  return (
    <section className="py-20 lg:py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25px 25px, var(--color-primary) 2%, transparent 0%), radial-gradient(circle at 75px 75px, var(--color-secondary) 2%, transparent 0%)`,
          backgroundSize: '100px 100px'
        }} />
      </div>

      <div className="max-w-7xl mx-auto relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative">
              {/* Main Image */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.5 }}
                className="relative w-full max-w-md mx-auto aspect-square rounded-[60px] overflow-hidden shadow-2xl"
              >
                <Image
                  src="https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=800&h=800&fit=crop"
                  alt="Nutrióloga profesional"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-primary)]/30 to-transparent" />
              </motion.div>

              {/* Floating Stats */}
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
                  className={`absolute card-light p-4 rounded-2xl shadow-xl border backdrop-blur-sm ${
                    index === 0 ? '-top-6 -right-6' :
                    index === 1 ? 'bottom-20 -left-6' :
                    '-bottom-6 right-12'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <stat.icon className="w-8 h-8 text-primary" />
                    <div>
                      <p className="font-bold text-2xl text-primary">{stat.value}</p>
                      <p className="text-xs text-secondary">{stat.label}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6 order-1 lg:order-2"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full card-light border"
            >
              <Award className="w-5 h-5 text-primary" />
              <span className="text-sm font-semibold text-primary">Tu Aliada en Salud</span>
            </motion.div>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary leading-tight">
              Conoce a tu
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-accent)]">
                Nutrióloga
              </span>
            </h2>

            <div className="space-y-4 text-lg text-secondary leading-relaxed">
              <p>
                ¡Hola! Soy <span className="font-semibold text-primary">Janeth Ayala</span>, Licenciada en Nutrición con una verdadera pasión por transformar vidas a través de la alimentación consciente y el bienestar integral.
              </p>
              <p>
                Mi enfoque va más allá de las dietas tradicionales. Creo en crear planes nutricionales que sean <span className="font-semibold text-primary">sostenibles, deliciosos y adaptados a tu estilo de vida único</span>. La nutrición no debe ser una restricción, sino un camino hacia el amor propio y la salud.
              </p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="card-light p-8 rounded-3xl shadow-lg border-l-4 border-[var(--color-accent)]"
            >
              <div className="flex items-center gap-3 mb-6">
                <GraduationCap size={28} className="text-primary" />
                <h3 className="text-2xl font-bold text-primary">
                  Formación y Experiencia
                </h3>
              </div>

              <ul className="space-y-3">
                {credentials.map((credential, index) => (
                  <motion.li
                    key={credential}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle2 size={24} className="text-[var(--color-secondary)] flex-shrink-0 mt-0.5" />
                    <span className="text-secondary">{credential}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="flex items-center gap-4 pt-4"
            >
              <div className="flex -space-x-2">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full card-light border-2 border-[var(--color-primary)] flex items-center justify-center">
                    <Star className="w-5 h-5 text-[var(--color-accent)] fill-current" />
                  </div>
                ))}
              </div>
              <p className="text-sm text-secondary">
                <span className="font-semibold text-primary">Calificación perfecta</span> en todas nuestras reseñas
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
