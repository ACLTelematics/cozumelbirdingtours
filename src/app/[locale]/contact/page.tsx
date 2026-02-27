'use client';

import { useState } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { Send, Mail, Phone, MapPin, Clock, MessageCircle } from 'lucide-react';

export default function ContactPage() {
  const t = useTranslations('contact');
  const locale = useLocale();
  const message = locale === 'en'
    ? 'Hello! I am interested in your birding tours in Cozumel.'
    : 'Hola! Me interesa información sobre sus tours de avistamiento en Cozumel.';
  const whatsappUrl = `https://wa.me/5219871134222?text=${encodeURIComponent(message)}`;

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
            <h2 className="text-2xl font-bold text-[#263238] mb-6">Send us a Message</h2>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name */}
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

              {/* Email */}
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

              {/* Phone */}
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

              {/* Tour Select */}
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
                  <option value="">Select a tour...</option>
                  <option value="morning-birding">Morning Birding Tour</option>
                  <option value="full-day">Full Day Adventure</option>
                  <option value="photography">Photography Tour</option>
                  <option value="custom">Custom Tour</option>
                  <option value="general">General Inquiry</option>
                </select>
              </div>

              {/* Message */}
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
                  placeholder="I'm interested in booking a birding tour..."
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full bg-[#F57C00] hover:bg-[#1FB6B1] text-white font-bold py-4 px-6 rounded-full transition duration-300 flex items-center justify-center gap-2 disabled:opacity-50"
              >
                {status === 'loading' ? (
                  'Sending...'
                ) : (
                  <>
                    {t('send')}
                    <Send className="w-5 h-5" />
                  </>
                )}
              </button>

              {/* Status Messages */}
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
              <h3 className="text-xl font-bold text-[#263238] mb-4">Contact Information</h3>
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
                    <p className="text-sm text-gray-600">Phone / WhatsApp</p>
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
                    <p className="text-sm text-gray-600">Tour Hours</p>
                    <p className="text-[#263238] font-medium">Monday - Sunday<br />6:00 AM - 6:00 PM</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MessageCircle className="w-5 h-5 text-[#1FB6B1] mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-sm text-gray-600">Languages</p>
                    <p className="text-[#263238] font-medium">English · Spanish</p>
                  </div>
                </div>
              </div>
              {/* Social Media */}
              <div className="mt-6 pt-6 border-t border-gray-200">
                <p className="text-sm text-gray-600 mb-3">Follow Us</p>
                <div className="flex gap-3">
                  <a href="#" className="w-10 h-10 bg-[#1FB6B1]/10 hover:bg-[#1FB6B1] text-[#1FB6B1] hover:text-white rounded-full flex items-center justify-center transition">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/></svg>
                  </a>
                  <a href="#" className="w-10 h-10 bg-[#1FB6B1]/10 hover:bg-[#1FB6B1] text-[#1FB6B1] hover:text-white rounded-full flex items-center justify-center transition">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                  </a>
                  <a href="#" className="w-10 h-10 bg-[#1FB6B1]/10 hover:bg-[#1FB6B1] text-[#1FB6B1] hover:text-white rounded-full flex items-center justify-center transition">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z"/></svg>
                  </a>
                  <a href={whatsappUrl} className="w-10 h-10 bg-green-500 hover:bg-green-600 text-white rounded-full flex items-center justify-center transition">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How to Book */}
      <section className="bg-white py-12">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-[#263238] mb-8">How to Book Your Experience</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#1FB6B1] text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-3">1</div>
              <h3 className="font-bold text-[#263238] mb-2">Select Tour</h3>
              <p className="text-sm text-gray-600">Choose from our tours</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#2E7D32] text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-3">2</div>
              <h3 className="font-bold text-[#263238] mb-2">Make Payment</h3>
              <p className="text-sm text-gray-600">Bank transfer</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#F57C00] text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-3">3</div>
              <h3 className="font-bold text-[#263238] mb-2">Send Voucher</h3>
              <p className="text-sm text-gray-600">Via WhatsApp/Email</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#1565C0] text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-3">4</div>
              <h3 className="font-bold text-[#263238] mb-2">Get Confirmed</h3>
              <p className="text-sm text-gray-600">Within 24 hours</p>
            </div>
          </div>
        </div>
      </section>

      {/* Payment Info */}
      <section className="bg-[#FAFAFA] py-12">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-[#263238] mb-8">Payment Information</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {/* Bank Transfer */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-[#263238] mb-4">Bank Transfer</h3>
              <div className="space-y-2 text-sm">
                <p><span className="font-medium">Bank:</span> Banco Nacional</p>
                <p><span className="font-medium">Account:</span> 1234 5678 9012 3456</p>
                <p><span className="font-medium">CLABE:</span> 012345678901234567</p>
                <p><span className="font-medium">Name:</span> Cozumel Birding Tours</p>
              </div>
              <div className="mt-4 p-3 bg-yellow-50 rounded-lg">
                <p className="text-sm text-yellow-800">⚠️ <strong>Important:</strong> Include your name in payment reference</p>
              </div>
            </div>
            {/* QR Code */}
            <div className="bg-white rounded-xl shadow-lg p-6 text-center">
              <h3 className="text-xl font-bold text-[#263238] mb-4">QR Code Payment</h3>
              <div className="w-48 h-48 bg-gray-200 rounded-lg mx-auto mb-4 flex items-center justify-center">
                <p className="text-gray-500">QR Code Here</p>
              </div>
              <p className="text-sm text-gray-600">Scan to pay with your banking app</p>
            </div>
          </div>
          {/* After Payment */}
          <div className="mt-8 bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-lg font-bold text-[#263238] mb-3">📝 After Payment</h3>
            <p className="text-gray-700 mb-3">Send your payment confirmation via:</p>
            <ul className="space-y-2 text-gray-700">
              <li>• <strong>WhatsApp:</strong> +52 987 113 4222</li>
              <li>• <strong>Email:</strong> cozumelbirdingtours@gmail.com</li>
            </ul>
            <div className="mt-4 p-3 bg-green-50 rounded-lg">
              <p className="text-sm text-green-800">✓ Reservation confirmed after payment verification (within 24 hours)</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-gradient-to-r from-[#1FB6B1] to-[#2E7D32] text-white py-12">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Have Questions? Let's Chat!</h2>
          <p className="text-lg mb-6 text-white/90">Get instant answers via WhatsApp</p>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-8 rounded-full transition duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg>
            Start WhatsApp Chat
          </a>
          <p className="mt-4 text-sm text-white/80">Or call us: +52 987 113 4222 (English/Spanish)</p>
        </div>
      </section>
    </div>
  );
}