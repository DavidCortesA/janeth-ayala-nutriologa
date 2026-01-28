import Header from '@/components/Header'
import ServicesContent from '@/components/ServicesContent'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Servicios - Lic. Janeth Ayala | Nutrióloga Certificada',
  description: 'Descubre nuestros servicios de nutrición: pérdida de peso, nutrición deportiva, embarazo, enfermedades crónicas y más.',
}

export default function ServicesPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <ServicesContent />
      <Footer />
    </main>
  )
}
