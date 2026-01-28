# Lic. Janeth Ayala - Nutrióloga Certificada 💕

Landing page profesional premium con 3 páginas completas, modo oscuro, calculadora de IMC y diseño moderno en tonos rosas.

![Next.js](https://img.shields.io/badge/Next.js-15-black)
![TypeScript](https://img.shields.io/badge/TypeScript-5.7-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.0-38bdf8)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-11.15-ff69b4)

## ✨ Características Premium

### 🎨 Diseño y Estilo
- **Paleta Rosa Moderna** - Colores vibrantes y femeninos con gradientes suaves
- **Light & Dark Mode** - Cambio fluido entre temas con persistencia
- **Animaciones Profesionales** - Framer Motion con efectos suaves y elegantes
- **100% Responsive** - Diseño adaptable a todos los dispositivos
- **Imágenes de Unsplash** - Fotografías profesionales de alta calidad

### 📱 3 Páginas Completas

#### 1. **Página Principal** (`/`)
- Hero section impactante con CTA
- Sección "Sobre Mí" con credenciales
- Formulario de contacto funcional
- Estadísticas y testimonios

#### 2. **Página de Servicios** (`/servicios`)
- 6 servicios especializados con imágenes
- Cards interactivas con hover effects
- Información detallada de cada servicio
- Call-to-action personalizado

#### 3. **Calculadora de IMC** (`/calculadora`)
- Calculadora funcional con sistema métrico e imperial
- Resultados instantáneos con categorización
- Recomendaciones personalizadas según IMC
- Escala visual de categorías
- Información educativa sobre IMC

### 🛠️ Stack Tecnológico

```json
{
  "framework": "Next.js 15 (App Router)",
  "language": "TypeScript 5.7",
  "styling": "Tailwind CSS 4.0",
  "animations": "Framer Motion 11.15",
  "icons": "Lucide React 0.469",
  "themes": "next-themes 0.4",
  "images": "Next/Image con Unsplash"
}
```

## 🚀 Instalación Rápida

```bash
# Clonar o extraer el proyecto
cd janeth-ayala-nextjs

# Instalar dependencias
npm install
# o
yarn install
# o
pnpm install

# Iniciar servidor de desarrollo
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

## 📁 Estructura del Proyecto

```
janeth-ayala-nextjs/
├── app/
│   ├── calculadora/
│   │   └── page.tsx           # Página de calculadora IMC
│   ├── servicios/
│   │   └── page.tsx           # Página de servicios
│   ├── layout.tsx             # Layout con theme provider
│   ├── page.tsx               # Página principal
│   └── globals.css            # Estilos globales con Tailwind 4
├── components/
│   ├── About.tsx              # Sección sobre mí
│   ├── BMICalculator.tsx      # Calculadora de IMC completa
│   ├── Contact.tsx            # Formulario de contacto
│   ├── Footer.tsx             # Footer con redes sociales
│   ├── Header.tsx             # Navegación con 3 páginas
│   ├── Hero.tsx               # Hero section principal
│   ├── ServicesContent.tsx    # Grid de servicios
│   ├── ThemeProvider.tsx      # Provider de temas
│   └── ThemeToggle.tsx        # Botón de cambio de tema
├── lib/                       # Utilidades (si es necesario)
├── public/                    # Archivos estáticos
├── package.json
├── next.config.ts
├── tsconfig.json
├── postcss.config.js
└── README.md
```

## 🎨 Paleta de Colores

### Modo Claro
```css
--color-primary: #d946a6         /* Rosa principal */
--color-primary-light: #ec4899   /* Rosa claro */
--color-secondary: #f472b6       /* Rosa secundario */
--color-accent: #fb923c          /* Naranja acento */
--color-bg: #fef3f9              /* Fondo rosa suave */
--color-card: #ffffff            /* Blanco */
--color-text: #1f1f1f            /* Negro suave */
```

### Modo Oscuro
```css
--color-dark-primary: #ec4899    /* Rosa brillante */
--color-dark-secondary: #d946a6  /* Rosa oscuro */
--color-dark-bg: #0f0a0d         /* Negro con tinte rosa */
--color-dark-card: #1a121a       /* Gris oscuro rosado */
--color-dark-text: #f3f4f6       /* Blanco suave */
```

## 🔧 Personalización

### Cambiar Colores

Edita `/app/globals.css`:

```css
@theme {
  --color-primary: #tu-color;
  --color-secondary: #tu-color;
  /* ... */
}
```

### Modificar Servicios

Edita el array `services` en `/components/ServicesContent.tsx`:

```typescript
const services = [
  {
    icon: Target,
    title: 'Tu Servicio',
    description: 'Descripción',
    image: 'URL de Unsplash',
    features: ['Feature 1', 'Feature 2'],
    color: 'from-pink-500 to-rose-500',
  },
  // ...
]
```

### Imágenes de Unsplash

Las imágenes actuales son de Unsplash. Para cambiarlas:

```typescript
// Formato: https://images.unsplash.com/photo-ID?w=WIDTH&h=HEIGHT&fit=crop
<Image
  src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800&h=1000&fit=crop"
  alt="Descripción"
  fill
/>
```

### Calculadora de IMC

La calculadora en `/components/BMICalculator.tsx` incluye:
- Sistema métrico (kg/cm) e imperial (lbs/in)
- Cálculo automático de IMC
- Categorización: Bajo peso, Normal, Sobrepeso, Obesidad
- Recomendaciones personalizadas
- Escala visual de colores
- Animaciones en resultados

## 🌙 Dark Mode

El tema se persiste automáticamente usando `next-themes`:

```typescript
// El usuario puede cambiar el tema con el botón en el header
// El tema se guarda en localStorage
// Por defecto usa el tema del sistema
```

## 📝 Formulario de Contacto

El formulario está listo para integrarse con servicios como:

### EmailJS
```bash
npm install @emailjs/browser
```

### Resend (Recomendado para Next.js)
```bash
npm install resend
```

### FormSubmit (Sin código)
Solo cambia el action del form a:
```html
<form action="https://formsubmit.co/tu@email.com">
```

## 🚀 Deploy

### Vercel (Recomendado)

1. Push a GitHub
2. Importa en Vercel
3. Deploy automático ✅

```bash
# O usa el CLI
npx vercel
```

### Variables de Entorno

Crea `.env.local`:

```env
# Opcional para analytics
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX

# Para email (si usas Resend)
RESEND_API_KEY=re_xxxxxxxxxxxx
```

### Netlify

```bash
# Build command
npm run build

# Publish directory
.next
```

### Otros Hostings
- Railway
- Render  
- DigitalOcean App Platform
- AWS Amplify

## 📱 Responsive Breakpoints

```css
/* Mobile First */
< 640px   - Móvil pequeño
640px     - Móvil grande (sm:)
768px     - Tablet (md:)
1024px    - Desktop pequeño (lg:)
1280px    - Desktop grande (xl:)
1536px    - Desktop XL (2xl:)
```

## ⚡ Performance

- **Next.js 15** con Turbopack (dev más rápido)
- **Optimización de imágenes** automática
- **Code splitting** por rutas
- **CSS optimizado** con Tailwind 4
- **Lazy loading** de componentes
- **Prefetching** de links
- **Animations GPU-accelerated**

## 🎯 SEO

Cada página incluye:
- Meta tags optimizados
- Open Graph para redes sociales
- Títulos descriptivos
- Descripciones únicas
- Estructura semántica HTML5

## 🔒 Características de Seguridad

- TypeScript para type safety
- Validación de formularios
- Sanitización de inputs
- Headers de seguridad Next.js
- HTTPS por defecto en deploy

## 🎨 Características de Diseño

### Animaciones
- Fade in al scroll
- Hover effects en cards
- Smooth page transitions
- Loading states
- Micro-interactions
- Floating elements

### Componentes Interactivos
- Toggle de tema animado
- Menú móvil con transiciones
- Cards con efectos 3D
- Botones con estados hover
- Formularios con validación visual
- Calculadora con feedback instantáneo

## 📧 Contacto y Soporte

Para modificaciones o consultas:
- Email: janeth.ayala@nutricion.com
- WhatsApp: +52 81 1234 5678

## 📄 Licencia

© 2026 Lic. Janeth Ayala - Todos los derechos reservados

---

## 🎁 Extras Incluidos

✅ 3 páginas completamente funcionales  
✅ Calculadora de IMC con lógica completa  
✅ Dark mode con persistencia  
✅ 12+ componentes reutilizables  
✅ Imágenes profesionales de Unsplash  
✅ Animaciones con Framer Motion  
✅ 100% responsive  
✅ SEO optimizado  
✅ TypeScript completo  
✅ Código limpio y documentado  

## 🚀 Próximos Pasos

1. Instala las dependencias
2. Personaliza colores y contenido
3. Conecta el formulario de contacto
4. Añade tus propias imágenes (opcional)
5. Deploy a Vercel

---

**Desarrollado con 💕 usando Next.js 15, Tailwind CSS 4, Framer Motion y TypeScript**

¡Disfruta tu nuevo sitio web! 🎉
