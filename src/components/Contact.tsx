import React, { useRef, useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useApp } from '../AppContext';
import emailjs from '@emailjs/browser';

type FormError = 'email' | 'phone' | 'send';

const labelClass = "font-label text-xs font-semibold uppercase tracking-widest text-on-surface-variant";
const fieldClass = "w-full bg-surface-container-lowest border border-outline-variant/20 rounded-lg px-4 py-3 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/30 transition-all";

const isValidPhone = (value: string) => {
  const digits = value.replace(/\D/g, '');
  return /^[+\d\s().-]+$/.test(value) && digits.length >= 7 && digits.length <= 15;
};

const Contact = () => {
  const { t } = useApp();
  const form = useRef<HTMLFormElement>(null);
  const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [error, setError] = useState<FormError | null>(null);
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSent(false);

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError('email');
      return;
    }

    if (phone.trim() && !isValidPhone(phone)) {
      setError('phone');
      return;
    }

    if (!form.current) return;

    setIsSending(true);
    setError(null);

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
          form.current?.reset();
          setEmail('');
          setPhone('');
        },
        () => {
          setIsSending(false);
          setError('send');
        }
      );
  };

  return (
    <section id="contact" className="py-24 px-6 md:px-8 bg-surface-container-lowest relative overflow-hidden">
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
            {t.contact.responseTime}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-surface-container-low p-8 rounded-xl border border-outline-variant/10 space-y-8">
              <h3 className="font-bold text-xl">{t.contact.info.title}</h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-surface-container-high flex items-center justify-center text-primary shrink-0">
                    <Mail size={20} aria-hidden="true" />
                  </div>
                  <div className="min-w-0">
                    <p className="font-label text-xs uppercase tracking-widest text-on-surface-variant mb-1">{t.contact.info.email}</p>
                    <a href="mailto:chems-eddine.rebouh.1@ens.etsmtl.ca" className="font-medium hover:text-primary transition-colors break-all">
                      chems-eddine.rebouh.1@ens.etsmtl.ca
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-surface-container-high flex items-center justify-center text-primary shrink-0">
                    <Phone size={20} aria-hidden="true" />
                  </div>
                  <div>
                    <p className="font-label text-xs uppercase tracking-widest text-on-surface-variant mb-1">{t.contact.info.phone}</p>
                    <a href="tel:+15145614766" className="font-medium hover:text-primary transition-colors">
                      514-561-4766
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-surface-container-high flex items-center justify-center text-primary shrink-0">
                    <MapPin size={20} aria-hidden="true" />
                  </div>
                  <div>
                    <p className="font-label text-xs uppercase tracking-widest text-on-surface-variant mb-1">{t.contact.info.location}</p>
                    <p className="font-medium">Montréal, QC</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="glass-card p-6 md:p-12 rounded-2xl border border-outline-variant/10">
              <form ref={form} onSubmit={sendEmail} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="client_name" className={labelClass}>{t.contact.form.name}</label>
                    <input
                      id="client_name"
                      type="text"
                      name="client_name"
                      autoComplete="name"
                      className={fieldClass}
                      placeholder={t.contact.form.placeholders.name}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="client_email" className={labelClass}>{t.contact.form.email}</label>
                    <input
                      id="client_email"
                      type="email"
                      name="client_email"
                      autoComplete="email"
                      className={fieldClass}
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder={t.contact.form.placeholders.email}
                      aria-invalid={error === 'email'}
                      required
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="client_phone" className={labelClass}>{t.contact.form.phone}</label>
                    <input
                      id="client_phone"
                      type="tel"
                      name="client_phone"
                      autoComplete="tel"
                      className={fieldClass}
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder={t.contact.form.placeholders.phone}
                      aria-invalid={error === 'phone'}
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="subject" className={labelClass}>{t.contact.form.subject}</label>
                    <input
                      id="subject"
                      type="text"
                      name="subject"
                      className={fieldClass}
                      placeholder={t.contact.form.placeholders.subject}
                      required
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className={labelClass}>{t.contact.form.message}</label>
                  <textarea
                    id="message"
                    rows={6}
                    name="message"
                    className={`${fieldClass} resize-none`}
                    placeholder={t.contact.form.placeholders.message}
                    required
                  />
                </div>
                <button type="submit" disabled={isSending} className="w-full md:w-auto bg-gradient-to-r from-primary to-primary-end text-on-primary font-bold px-10 py-4 rounded-lg flex items-center justify-center gap-3 transition-all hover:shadow-[0_0_30px_rgba(173,198,255,0.3)] group disabled:opacity-50">
                  {isSending ? t.contact.form.sending : t.contact.form.send}
                  {!isSending && <Send size={18} aria-hidden="true" className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />}
                </button>
                <div className="mt-4 font-medium" role="status" aria-live="polite">
                  {isSent && <p className="text-primary">{t.contact.form.success}</p>}
                  {error && <p className="text-red-500">{t.contact.form.errors[error]}</p>}
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
