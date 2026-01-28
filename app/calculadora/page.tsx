import Header from '@/components/Header'
import BMICalculator from '@/components/BMICalculator'
import Footer from '@/components/Footer'
import { Calculator, Heart, Activity } from 'lucide-react'

export const metadata = {
  title: 'Calculadora IMC - Lic. Janeth Ayala | Nutrióloga',
  description: 'Calcula tu Índice de Masa Corporal (IMC) y recibe recomendaciones personalizadas para tu salud.',
}

export default function CalculatorPage() {
  return (
    <main className="min-h-screen">
      <Header />
      
      <section className="py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-primary)]/5 via-transparent to-[var(--color-accent)]/5" />
        
        <div className="max-w-4xl mx-auto relative">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full card-light border mb-6">
              <Activity className="w-5 h-5 text-primary" />
              <span className="text-sm font-semibold text-primary">Herramienta Gratuita</span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-primary mb-6">
              Calculadora de
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-accent)]">
                IMC
              </span>
            </h1>
            
            <p className="text-xl text-secondary max-w-2xl mx-auto mb-8">
              Descubre tu Índice de Masa Corporal y recibe recomendaciones personalizadas para tu bienestar.
            </p>

            {/* Info Cards */}
            <div className="grid sm:grid-cols-3 gap-4 mb-12">
              <div className="card-light p-6 rounded-2xl border">
                <div className="w-12 h-12 bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-secondary)] rounded-xl flex items-center justify-center mx-auto mb-3">
                  <Calculator className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-bold text-primary mb-1">Rápido</h3>
                <p className="text-sm text-secondary">Calcula en segundos</p>
              </div>

              <div className="card-light p-6 rounded-2xl border">
                <div className="w-12 h-12 bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-secondary)] rounded-xl flex items-center justify-center mx-auto mb-3">
                  <Heart className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-bold text-primary mb-1">Preciso</h3>
                <p className="text-sm text-secondary">Resultados exactos</p>
              </div>

              <div className="card-light p-6 rounded-2xl border">
                <div className="w-12 h-12 bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-secondary)] rounded-xl flex items-center justify-center mx-auto mb-3">
                  <Activity className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-bold text-primary mb-1">Consejos</h3>
                <p className="text-sm text-secondary">Recomendaciones útiles</p>
              </div>
            </div>
          </div>

          {/* Calculator */}
          <BMICalculator />

          {/* Additional Info */}
          <div className="mt-12 card-light p-8 rounded-3xl border">
            <h3 className="text-2xl font-bold text-primary mb-4 text-center">
              ¿Qué es el IMC?
            </h3>
            <div className="space-y-4 text-secondary">
              <p>
                El <strong className="text-primary">Índice de Masa Corporal (IMC)</strong> es una medida que relaciona tu peso con tu altura para determinar si estás en un rango de peso saludable.
              </p>
              <p>
                Aunque es una herramienta útil, el IMC no considera factores como la masa muscular, la densidad ósea o la distribución de grasa corporal. Por eso, es importante complementarlo con una evaluación profesional.
              </p>
              <div className="bg-gradient-to-br from-[var(--color-primary)]/10 to-[var(--color-accent)]/10 p-6 rounded-2xl mt-6">
                <h4 className="font-bold text-primary mb-3">💡 Consejo Profesional</h4>
                <p className="text-secondary">
                  Para obtener un análisis completo de tu composición corporal y un plan nutricional personalizado, te invito a agendar una consulta. Juntos crearemos un camino hacia tu mejor versión.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
