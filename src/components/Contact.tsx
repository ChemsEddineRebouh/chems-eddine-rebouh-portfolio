import React, { useRef, useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useApp } from '../AppContext';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const { t, lang } = useApp();
  const form = useRef<HTMLFormElement>(null);
  const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Invalid email format");
      return;
    }

    if (!/^\d+$/.test(phone)) {
      setError("Phone number should only contain numbers");
      return;
    }
    setIsSending(true);
    setError(null);
    setIsSent(false);

    if (form.current) {
      emailjs
        .sendForm(
          import.meta.env.VITE_EMAILJS_SERVICE_ID,
          import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
          form.current,
          import.meta.env.VITE_EMAILJS_PUBLIC_KEY
        )
        .then(
          () => {
            setIsSending(false);
            setIsSent(true);
            if (form.current) {
              form.current.reset();
            }
          },
          (error) => {
            setIsSending(false);
            setError(error.text);
          }
        );
    }
  };

  return (
    <section id="contact" className="py-24 px-8 bg-surface-container-lowest relative overflow-hidden">
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/5 rounded-full blur-[120px]" />
      
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <p className="font-label text-primary uppercase tracking-[0.3em] text-xs mb-4">{t.contact.title}</p>
          <h2 className="text-5xl md:text-7xl font-black font-headline tracking-tighter leading-none mb-6">
            {t.contact.subtitle}
          </h2>
          <p className="text-on-surface-variant text-lg max-w-2xl leading-relaxed">
            {t.contact.description}
          </p>
          <div className="mt-4 flex items-center gap-2 text-xs font-label text-primary uppercase tracking-widest opacity-80">
            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
            {lang === 'en' ? "Response time: ~24 hours" : "Temps de réponse : ~24 heures"}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-surface-container-low p-8 rounded-xl border border-outline-variant/10 space-y-8">
              <h3 className="font-bold text-xl">{t.contact.info.title}</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-surface-container-high flex items-center justify-center text-primary">
                    <Mail size={20} />
                  </div>
                  <div>
                    <p className="font-label text-[10px] uppercase tracking-widest text-on-surface-variant mb-1">{t.contact.info.email}</p>
                    <a href="mailto:chems-eddine.rebouh.1@ens.etsmtl.ca" className="font-medium hover:text-primary transition-colors break-all">
                      chems-eddine.rebouh.1@ens.etsmtl.ca
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-surface-container-high flex items-center justify-center text-primary">
                    <Phone size={20} />
                  </div>
                  <div>
                    <p className="font-label text-[10px] uppercase tracking-widest text-on-surface-variant mb-1">{t.contact.info.phone}</p>
                    <a href="tel:+15145614766" className="font-medium hover:text-primary transition-colors">
                      514-561-4766
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-surface-container-high flex items-center justify-center text-primary">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <p className="font-label text-[10px] uppercase tracking-widest text-on-surface-variant mb-1">{t.contact.info.location}</p>
                    <p className="font-medium">Montréal, QC</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="glass-card p-8 md:p-12 rounded-2xl border border-outline-variant/10">
              <form ref={form} onSubmit={sendEmail} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="font-label text-xs font-semibold uppercase tracking-widest text-on-surface-variant">{t.contact.form.name}</label>
                    <input 
                      type="text" 
                      name="client_name"
                      className="w-full bg-surface-container-lowest border border-outline-variant/20 rounded-lg px-4 py-3 focus:outline-none focus:border-primary transition-all"
                      placeholder="John Doe"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="font-label text-xs font-semibold uppercase tracking-widest text-on-surface-variant">{t.contact.form.email}</label>
                    <input 
                      type="email" 
                      name="client_email"
                      className="w-full bg-surface-container-lowest border border-outline-variant/20 rounded-lg px-4 py-3 focus:outline-none focus:border-primary transition-all"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="john@example.com"
                      required
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="font-label text-xs font-semibold uppercase tracking-widest text-on-surface-variant">{t.contact.form.phone}</label>
                    <input 
                      type="tel" 
                      name="client_phone"
                      className="w-full bg-surface-container-lowest border border-outline-variant/20 rounded-lg px-4 py-3 focus:outline-none focus:border-primary transition-all"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="514-555-5555"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="font-label text-xs font-semibold uppercase tracking-widest text-on-surface-variant">{t.contact.form.subject}</label>
                    <input 
                      type="text" 
                      name="subject"
                      className="w-full bg-surface-container-lowest border border-outline-variant/20 rounded-lg px-4 py-3 focus:outline-none focus:border-primary transition-all"
                      placeholder="Project Inquiry"
                      required
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="font-label text-xs font-semibold uppercase tracking-widest text-on-surface-variant">{t.contact.form.message}</label>
                  <textarea 
                    rows={6}
                    name="message"
                    className="w-full bg-surface-container-lowest border border-outline-variant/20 rounded-lg px-4 py-4 focus:outline-none focus:border-primary transition-all resize-none"
                    placeholder="Tell me about your project..."
                    required
                  />
                </div>
                <button type="submit" disabled={isSending} className="w-full md:w-auto bg-gradient-to-r from-primary to-primary-container text-on-primary font-bold px-10 py-4 rounded-lg flex items-center justify-center gap-3 transition-all hover:shadow-[0_0_30px_rgba(173,198,255,0.3)] group disabled:opacity-50">
                  {isSending ? (lang === 'en' ? 'Sending...' : 'Envoi...') : t.contact.form.send}
                  {!isSending && <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />}
                </button>
                <div className="mt-4">
                  {isSent && <p className="text-green-500">{lang === 'en' ? 'Message sent successfully!' : 'Message envoyé avec succès !'}</p>}
                  {error && <p className="text-red-500">{lang === 'en' ? 'An error occurred:' : 'Une erreur s`est produite :'} {error}</p>}
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
