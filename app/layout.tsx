import type { Metadata } from 'next'
import { Playfair_Display, Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/ThemeProvider'
import WhatsAppWidget from '@/components/WhatsappWidget'

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-display',
  weight: ['400', '600', '700'],
  display: 'swap',
})

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-body',
  weight: ['300', '400', '600', '700'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Lic. Janeth Ayala - Nutrióloga Certificada | Planes Personalizados',
  description: 'Nutrióloga certificada especializada en planes personalizados. Transforma tu salud con asesoría nutricional profesional en Nuevo León, México.',
  keywords: ['nutrióloga', 'nutrición', 'Janeth Ayala', 'planes alimenticios', 'IMC', 'salud', 'Nuevo León', 'México', 'nutricionista', 'monterrey', 'nutrióloga regiomontana'],
  authors: [{ name: 'Lic. Janeth Ayala' }],
  viewport: 'width=device-width, initial-scale=1',
  manifest: '/manifest.json',
  themeColor: '#10b981',
  icons: {
    icon: '/icon/icon.png',
    apple: '/icon/icon.png',
  },
  openGraph: {
    title: 'Lic. Janeth Ayala - Nutrióloga Certificada',
    description: 'Transforma tu salud con planes nutricionales personalizados',
    type: 'website',
    images: [
      {
        url: './opengraph-image.png',
        width: 1200,
        height: 630,
        alt: 'Lic. Janeth Ayala - Nutrióloga Certificada',
      }
    ]
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className={`${playfair.variable} ${inter.variable}`} suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange={false}
        >
          {children}
          <WhatsAppWidget
            phoneNumber="528127482590"
            message="¡Hola! Me gustaría obtener más información sobre tus servicios."
          />
        </ThemeProvider>
      </body>
    </html>
  )
}
