'use client';
import { useState } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { Send, Mail, Phone, MapPin, Clock, MessageCircle } from 'lucide-react';

export default function ContactPage() {
  const t = useTranslations('contact');
  const locale = useLocale();

  const message = locale === 'en'
    ? 'Hello! I would like to check availability for your birding tours in Cozumel.'
    : 'Hola! Me gustaría consultar disponibilidad para sus tours de avistamiento en Cozumel.';

  const whatsappUrl = `https://wa.me/5219871134222?text=${encodeURIComponent(message)}`;
  const paymentUrl = 'https://pago.clip.mx/v3/29923160-9085-41d0-89fb-5a6fc1735158';

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    tour: '',
    message: ''
  });

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', phone: '', tour: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="min-h-screen bg-[#FAFAFA]">

      {/* Header */}
      <section className="bg-gradient-to-r from-[#2E7D32] to-[#1FB6B1] text-white py-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{t('title')}</h1>
          <p className="text-lg text-white/90">{t('subtitle')}</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-[1.5fr_1fr] gap-8">

          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-[#263238] mb-6">
              {locale === 'en' ? 'Send us a Message' : 'Envíanos un Mensaje'}
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-[#263238] mb-1">
                  {t('name')} *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1FB6B1] focus:border-transparent outline-none transition"
                  placeholder="John Smith"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-[#263238] mb-1">
                  {t('email')} *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1FB6B1] focus:border-transparent outline-none transition"
                  placeholder="john@example.com"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-[#263238] mb-1">
                  {t('phone')}
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1FB6B1] focus:border-transparent outline-none transition"
                  placeholder="+1 234 567 8900"
                />
              </div>
              <div>
                <label htmlFor="tour" className="block text-sm font-medium text-[#263238] mb-1">
                  {t('tourInterest')}
                </label>
                <select
  id="tour"
  name="tour"
  value={formData.tour}
  onChange={handleChange}
  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1FB6B1] focus:border-transparent outline-none transition"
>
  <option value="">{locale === 'en' ? 'Select a tour...' : 'Selecciona un tour...'}</option>
  <option value="bird-watching">{locale === 'en' ? 'Bird Watching Tour' : 'Observación de Aves'}</option>
  <option value="flavor-nature">{locale === 'en' ? 'Flavor & Nature' : 'Sabor y Naturaleza'}</option>
  <option value="punta-sur-boat">{locale === 'en' ? 'Sunrise at Punta Sur — Boat' : 'Amanecer en Punta Sur — Lancha'}</option>
  <option value="punta-sur-walk">{locale === 'en' ? 'Sunrise at Punta Sur — Walking' : 'Amanecer en Punta Sur — A pie'}</option>
  <option value="birds-bees-full">{locale === 'en' ? 'Birds & Mayan Bees — Full Experience' : 'Aves y Abejas Mayas — Experiencia Completa'}</option>
  <option value="birds-bees-express">{locale === 'en' ? 'Birds & Mayan Bees — Express' : 'Aves y Abejas Mayas — Exprés'}</option>
  <option value="birds-watercolors">{locale === 'en' ? 'Birds & Watercolors' : 'Aves y Acuarelas'}</option>
  <option value="birds-flavors">{locale === 'en' ? 'Birds & Local Flavors' : 'Aves y Sabores Locales'}</option>
  <option value="painting">{locale === 'en' ? 'Painting Class' : 'Clases de Pintura'}</option>
  <option value="cacao">{locale === 'en' ? 'Cacao Circle' : 'Círculo de Cacao'}</option>
  <option value="fishing-half">{locale === 'en' ? 'Deep Fishing — Half Day' : 'Pesca Profunda — Medio Día'}</option>
  <option value="fishing-full">{locale === 'en' ? 'Deep Fishing — Full Day' : 'Pesca Profunda — Día Completo'}</option>
  <option value="general">{locale === 'en' ? 'General Inquiry' : 'Consulta General'}</option>
</select>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-[#263238] mb-1">
                  {t('message')} *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1FB6B1] focus:border-transparent outline-none transition resize-none"
                  placeholder={locale === 'en' ? "I'm interested in booking a birding tour..." : 'Me interesa reservar un tour de avistamiento...'}
                />
              </div>
              <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full bg-[#F57C00] hover:bg-[#1FB6B1] text-white font-bold py-4 px-6 rounded-full transition duration-300 flex items-center justify-center gap-2 disabled:opacity-50"
              >
                {status === 'loading' ? (
                  locale === 'en' ? 'Sending...' : 'Enviando...'
                ) : (
                  <>
                    {t('send')}
                    <Send className="w-5 h-5" />
                  </>
                )}
              </button>
              {status === 'success' && (
                <div className="bg-green-50 text-green-800 p-4 rounded-lg text-center">
                  {t('success')}
                </div>
              )}
              {status === 'error' && (
                <div className="bg-red-50 text-red-800 p-4 rounded-lg text-center">
                  {t('error')}
                </div>
              )}
            </form>
          </div>

          {/* Contact Info Sidebar */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-[#263238] mb-4">
                {locale === 'en' ? 'Contact Information' : 'Información de Contacto'}
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-[#1FB6B1] mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-sm text-gray-600">Email</p>
                    <a href="mailto:cozumelbirdingtours@gmail.com" className="text-[#263238] hover:text-[#1FB6B1] font-medium">
                      cozumelbirdingtours@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-[#1FB6B1] mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-sm text-gray-600">WhatsApp</p>
                    <a href={whatsappUrl} className="text-[#263238] hover:text-[#1FB6B1] font-medium">
                      +52 987 113 4222
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#1FB6B1] mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-sm text-gray-600">Location</p>
                    <p className="text-[#263238] font-medium">Cozumel, Quintana Roo<br />México</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-[#1FB6B1] mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-sm text-gray-600">{locale === 'en' ? 'Tour Hours' : 'Horarios'}</p>
                    <p className="text-[#263238] font-medium">
                      {locale === 'en' ? 'Monday - Sunday' : 'Lunes - Domingo'}<br />6:00 AM - 6:00 PM
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MessageCircle className="w-5 h-5 text-[#1FB6B1] mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-sm text-gray-600">{locale === 'en' ? 'Languages' : 'Idiomas'}</p>
                    <p className="text-[#263238] font-medium">English · Español</p>
                  </div>
                </div>
              </div>
            </div>

            {/* WhatsApp CTA */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-6 rounded-2xl transition shadow-lg w-full justify-center"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
              </svg>
              {locale === 'en' ? 'Check Availability on WhatsApp' : 'Consultar Disponibilidad por WhatsApp'}
            </a>
          </div>
        </div>
      </section>

      {/* How to Book */}
      <section className="bg-white py-12">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-[#263238] mb-8">
            {locale === 'en' ? 'How to Book Your Experience' : 'Cómo Reservar tu Experiencia'}
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#1FB6B1] text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-3">1</div>
              <h3 className="font-bold text-[#263238] mb-2">
                {locale === 'en' ? 'Choose Your Tour' : 'Elige tu Tour'}
               
              </h3>
              <p className="text-sm text-gray-600">
                {locale === 'en' ? 'Select date & tour' : 'Selecciona fecha y tour'}
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#2E7D32] text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-3">2</div>
              <h3 className="font-bold text-[#263238] mb-2">
                {locale === 'en' ? 'Check Availability' : 'Consulta Disponibilidad'}
              </h3>
              <p className="text-sm text-gray-600">
                {locale === 'en' ? 'Via WhatsApp' : 'Por WhatsApp'}
               
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#F57C00] text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-3">3</div>
              <h3 className="font-bold text-[#263238] mb-2">
                {locale === 'en' ? 'Make Deposit' : 'Realiza el Deposito'}
              </h3>
              <p className="text-sm text-gray-600">
                {locale === 'en' ? 'Secure link · MXN pesos' : 'Link seguro · Pesos mexicanos'}
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#1565C0] text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-3">4</div>
              <h3 className="font-bold text-[#263238] mb-2">
                {locale === 'en' ? 'Send Voucher' : 'Envía tu Voucher'}
              </h3>
              <p className="text-sm text-gray-600">
                {locale === 'en' ? 'WhatsApp or Email' : 'WhatsApp o Correo'}
              </p>
            </div>
          </div>
        </div>
      </section>
{/* Payment */}
<section className="bg-[#FAFAFA] py-12">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-[#263238] mb-4">
            {locale === 'en' ? 'Payment' : 'Pago'}
          </h2>
          <p className="text-gray-600 mb-8">
            {locale === 'en'
              ? 'Secure payment processed in Mexican Pesos (MXN)'
              : 'Pago seguro procesado en Pesos Mexicanos (MXN)'}
          </p>
          <a
            href={paymentUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-[#F57C00] hover:bg-[#1FB6B1] text-white font-bold py-5 px-12 rounded-full text-xl transition duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            💳 {locale === 'en' ? 'Pay Deposit · MXN Pesos' : 'Pagar Depósito · Pesos MXN'}
          </a>
          <div className="mt-6 p-4 bg-white rounded-xl shadow-sm border border-gray-100">
            <p className="text-sm text-gray-600 mb-3">
              {locale === 'en'
                ? 'A deposit is required to secure your tour. Full payment is due on the day of the tour.'
                : 'Se requiere un depósito para asegurar tu tour. El pago completo se realiza el día del tour.'}
            </p>
            <div className="mb-4 p-3 bg-yellow-50 rounded-lg border border-yellow-200">
              <p className="text-sm text-yellow-800 font-medium">
                {locale === 'en'
                  ? '⚠️ Important: The deposit is non-refundable in case of cancellation.'
                  : '⚠️ Importante: El depósito no es reembolsable en caso de cancelación.'}
              </p>
            </div>
            <div className="flex justify-center gap-6">
              <a href={whatsappUrl} className="text-green-600 font-medium hover:underline">
                WhatsApp
              </a>
              <span className="text-gray-300">|</span>
              <a href="mailto:cozumelbirdingtours@gmail.com" className="text-[#1FB6B1] font-medium hover:underline">
                Email
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
  