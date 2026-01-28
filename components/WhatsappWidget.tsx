'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X } from 'lucide-react';

interface WhatsAppWidgetProps {
  phoneNumber: string; // Formato: 521234567890 (código de país + número sin espacios)
  message?: string;
}

export default function WhatsAppWidget({ 
  phoneNumber, 
  message = "¡Hola! Me gustaría obtener más información sobre tus servicios." 
}: WhatsAppWidgetProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleWhatsAppClick = () => {
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <>
      {/* Widget Button */}
      <motion.div
        className="fixed bottom-6 right-6 z-50"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1, duration: 0.5, type: "spring" }}
      >
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.8 }}
              transition={{ duration: 0.3 }}
              className="absolute bottom-20 right-0 bg-white/50 backdrop-blur-md border border-camel-500/30 rounded-2xl p-6 shadow-2xl w-80 mb-2"
            >
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-3 right-3 text-ink-black-400 hover:text-ink-black-200 transition-colors"
              >
                <X size={20} />
              </button>

              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] rounded-full flex items-center justify-center">
                  <MessageCircle size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-ink-black-50">
                    ¿Necesitas ayuda?
                  </h3>
                  <p className="text-sm text-ink-black-400">
                    Estoy en línea
                  </p>
                </div>
              </div>

              <p className="text-ink-black-300 mb-4 text-sm">
                Haz clic en el botón de abajo para agendar cita por WhatsApp.
              </p>

              <motion.button
                onClick={handleWhatsAppClick}
                className="w-full bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] text-white font-semibold py-3 rounded-xl flex items-center justify-center space-x-2 hover:from-[var(--color-secondary)]  hover:to-[var(--color-primary)] transition-all"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <MessageCircle size={20} />
                <span>Chatear por Whatsapp</span>
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>

        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          className="relative w-16 h-16 bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] text-white rounded-full shadow-lg flex items-center justify-center group overflow-hidden"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          animate={{
            boxShadow: [
              "0 4px 20px rgba(197, 34, 189, 0.3)",
              "0 4px 30px rgba(197, 34, 189, 0.5)",
              "0 4px 20px rgba(197, 34, 189, 0.3)",
            ],
          }}
          transition={{
            boxShadow: {
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            },
          }}
        >
          <motion.div
            className="absolute inset-0 bg-[var(--color-primary)] opacity-0 group-hover:opacity-20 transition-opacity"
          />
          
          <AnimatePresence mode="wait">
            {isOpen ? (
              <motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <X size={28} className="text-white" />
              </motion.div>
            ) : (
              <motion.div
                key="whatsapp"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <MessageCircle size={28} className="text-white" />
              </motion.div>
            )}
          </AnimatePresence>

          {/* Ping animation */}
          {!isOpen && (
            <motion.div
              className="absolute inset-0 rounded-full bg-[var(--color-primary)]"
              initial={{ scale: 1, opacity: 0.5 }}
              animate={{ scale: 1.5, opacity: 0 }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeOut",
              }}
            />
          )}
        </motion.button>

        {/* Tooltip */}
        {!isOpen && (
          <motion.div
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 2 }}
            className="absolute right-20 top-2.5 -translate-y-1/2 bg-ink-black-900 text-ink-black-50 px-4 py-2 rounded-lg shadow-lg whitespace-nowrap pointer-events-none hidden md:block"
          >
            <span className="text-sm font-medium">¿Necesitas ayuda?</span>
            <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-full">
              <div className="w-0 h-0 border-t-8 border-t-transparent border-b-8 border-b-transparent border-l-8 border-l-ink-black-900" />
            </div>
          </motion.div>
        )}
      </motion.div>
    </>
  );
}