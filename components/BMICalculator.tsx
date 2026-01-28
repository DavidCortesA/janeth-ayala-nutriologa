'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Calculator, TrendingUp, TrendingDown, Minus, Info } from 'lucide-react'

interface BMIResult {
  bmi: number
  category: string
  color: string
  icon: any
  message: string
  recommendations: string[]
}

export default function BMICalculator() {
  const [weight, setWeight] = useState('')
  const [height, setHeight] = useState('')
  const [result, setResult] = useState<BMIResult | null>(null)
  const [unit, setUnit] = useState<'metric' | 'imperial'>('metric')

  const calculateBMI = (e: React.FormEvent) => {
    e.preventDefault()

    const w = parseFloat(weight)
    const h = parseFloat(height)

    if (!w || !h || w <= 0 || h <= 0) {
      return
    }

    let bmi: number

    if (unit === 'metric') {
      // kg / (m^2)
      const heightInMeters = h / 100
      bmi = w / (heightInMeters * heightInMeters)
    } else {
      // (lbs / (inches^2)) * 703
      bmi = (w / (h * h)) * 703
    }

    const bmiResult = getBMICategory(bmi)
    setResult(bmiResult)
  }

  const getBMICategory = (bmi: number): BMIResult => {
    if (bmi < 18.5) {
      return {
        bmi,
        category: 'Bajo Peso',
        color: 'text-blue-500',
        icon: TrendingDown,
        message: 'Tu IMC indica que estás por debajo del peso recomendado.',
        recommendations: [
          'Aumenta tu ingesta calórica de forma saludable',
          'Incluye proteínas y grasas saludables',
          'Consulta con un nutriólogo para un plan personalizado',
          'Realiza ejercicios de fuerza para ganar masa muscular',
        ],
      }
    } else if (bmi >= 18.5 && bmi < 25) {
      return {
        bmi,
        category: 'Peso Normal',
        color: 'text-green-500',
        icon: Minus,
        message: '¡Excelente! Tu IMC está en el rango saludable.',
        recommendations: [
          'Mantén tu dieta balanceada actual',
          'Continúa con actividad física regular',
          'Hidrátate adecuadamente',
          'Duerme entre 7-9 horas diarias',
        ],
      }
    } else if (bmi >= 25 && bmi < 30) {
      return {
        bmi,
        category: 'Sobrepeso',
        color: 'text-yellow-500',
        icon: TrendingUp,
        message: 'Tu IMC indica sobrepeso. Es momento de hacer algunos ajustes.',
        recommendations: [
          'Reduce calorías de forma gradual',
          'Aumenta tu actividad física diaria',
          'Consume más frutas y verduras',
          'Limita alimentos procesados y azúcares',
        ],
      }
    } else {
      return {
        bmi,
        category: 'Obesidad',
        color: 'text-red-500',
        icon: TrendingUp,
        message: 'Tu IMC indica obesidad. Es importante buscar apoyo profesional.',
        recommendations: [
          'Consulta con un nutriólogo certificado',
          'Inicia un plan de alimentación personalizado',
          'Comienza con ejercicio moderado supervisado',
          'Considera apoyo psicológico si es necesario',
        ],
      }
    }
  }

  const reset = () => {
    setWeight('')
    setHeight('')
    setResult(null)
  }

  return (
    <div className="space-y-8">
      {/* Calculator Form */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="card-light p-8 rounded-3xl shadow-xl border"
      >
        <div className="flex items-center gap-3 mb-6">
          <div className="p-3 bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-secondary)] rounded-xl">
            <Calculator className="w-6 h-6 text-white" />
          </div>
          <h3 className="text-2xl font-bold text-primary">Calculadora de IMC</h3>
        </div>

        {/* Unit Toggle */}
        <div className="flex gap-4 mb-6">
          <button
            onClick={() => setUnit('metric')}
            className={`flex-1 py-3 px-6 rounded-xl font-semibold transition-all ${
              unit === 'metric'
                ? 'bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] text-white shadow-lg'
                : 'card-light border text-secondary hover:border-[var(--color-primary)]'
            }`}
          >
            Métrico (kg/cm)
          </button>
          <button
            onClick={() => setUnit('imperial')}
            className={`flex-1 py-3 px-6 rounded-xl font-semibold transition-all ${
              unit === 'imperial'
                ? 'bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] text-white shadow-lg'
                : 'card-light border text-secondary hover:border-[var(--color-primary)]'
            }`}
          >
            Imperial (lbs/in)
          </button>
        </div>

        <form onSubmit={calculateBMI} className="space-y-6">
          <div>
            <label htmlFor="weight" className="block text-primary font-semibold mb-2">
              Peso {unit === 'metric' ? '(kg)' : '(lbs)'}
            </label>
            <input
              type="number"
              id="weight"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              step="0.1"
              min="0"
              required
              className="w-full px-4 py-3 rounded-2xl border-2 card-light focus:border-[var(--color-primary)] focus:outline-none focus:ring-4 focus:ring-[var(--color-primary)]/10 transition-all text-lg"
              placeholder={unit === 'metric' ? '70' : '154'}
            />
          </div>

          <div>
            <label htmlFor="height" className="block text-primary font-semibold mb-2">
              Altura {unit === 'metric' ? '(cm)' : '(pulgadas)'}
            </label>
            <input
              type="number"
              id="height"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
              step="0.1"
              min="0"
              required
              className="w-full px-4 py-3 rounded-2xl border-2 card-light focus:border-[var(--color-primary)] focus:outline-none focus:ring-4 focus:ring-[var(--color-primary)]/10 transition-all text-lg"
              placeholder={unit === 'metric' ? '170' : '67'}
            />
          </div>

          <div className="flex gap-4">
            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex-1 bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] text-white py-4 rounded-2xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all"
            >
              Calcular IMC
            </motion.button>
            {result && (
              <motion.button
                type="button"
                onClick={reset}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-4 card-light border-2 border-[var(--color-primary)] text-primary rounded-2xl font-semibold hover:bg-[var(--color-primary)] hover:text-white transition-all"
              >
                Reset
              </motion.button>
            )}
          </div>
        </form>
      </motion.div>

      {/* Results */}
      <AnimatePresence mode="wait">
        {result && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -50, scale: 0.95 }}
            transition={{ duration: 0.5 }}
            className="card-light p-8 rounded-3xl shadow-xl border"
          >
            <div className="text-center mb-8">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
                className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-secondary)] rounded-full mb-4"
              >
                <result.icon className="w-12 h-12 text-white" />
              </motion.div>

              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-5xl font-bold text-primary mb-2"
              >
                {result.bmi.toFixed(1)}
              </motion.h3>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className={`text-2xl font-bold ${result.color} mb-4`}
              >
                {result.category}
              </motion.p>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="text-secondary max-w-md mx-auto"
              >
                {result.message}
              </motion.p>
            </div>

            {/* Recommendations */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="bg-gradient-to-br from-[var(--color-primary)]/5 to-[var(--color-secondary)]/5 p-6 rounded-2xl"
            >
              <div className="flex items-center gap-2 mb-4">
                <Info className="w-5 h-5 text-primary" />
                <h4 className="text-lg font-bold text-primary">Recomendaciones</h4>
              </div>
              <ul className="space-y-3">
                {result.recommendations.map((rec, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.7 + index * 0.1 }}
                    className="flex items-start gap-3 text-secondary"
                  >
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-secondary)] flex items-center justify-center text-white text-sm font-bold">
                      {index + 1}
                    </span>
                    <span>{rec}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* BMI Scale */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="mt-8"
            >
              <h4 className="text-sm font-semibold text-primary mb-3 text-center">
                Escala de IMC
              </h4>
              <div className="h-4 rounded-full overflow-hidden flex">
                <div className="flex-1 bg-blue-500" title="Bajo Peso: < 18.5" />
                <div className="flex-1 bg-green-500" title="Normal: 18.5 - 24.9" />
                <div className="flex-1 bg-yellow-500" title="Sobrepeso: 25 - 29.9" />
                <div className="flex-1 bg-red-500" title="Obesidad: ≥ 30" />
              </div>
              <div className="flex justify-between text-xs text-secondary mt-2">
                <span>&lt;18.5</span>
                <span>18.5</span>
                <span>25</span>
                <span>30</span>
                <span>40+</span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Info Box */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="card-light p-6 rounded-2xl border"
      >
        <div className="flex items-start gap-3">
          <Info className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
          <div className="text-sm text-secondary">
            <p className="mb-2">
              <strong className="text-primary">Nota importante:</strong> El IMC es una guía general y no considera factores como masa muscular, densidad ósea o distribución de grasa.
            </p>
            <p>
              Para una evaluación completa y personalizada, te recomiendo agendar una consulta profesional.
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
