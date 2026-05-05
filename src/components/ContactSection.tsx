import { useEffect, useRef, useState } from 'react';

const contactInfo = [
  { icon: '✉️', label: 'Email', value: 'sadaqatofficial145@gmail.com', href: 'mailto:sadaqatofficial145@gmail.com' },
  { icon: '📞', label: 'Phone', value: '+92 302 2165855', href: 'tel:+923022165855' },
  { icon: '📍', label: 'Location', value: 'Islamabad, Pakistan', href: '#' },
  { icon: '🐙', label: 'GitHub', value: 'github.com/sadaqat2003', href: 'https://github.com/sadaqat2003' },
];

export default function ContactSection() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => e.isIntersecting && setVisible(true), { threshold: 0.2 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="contact" className="py-24 px-6">
      <div ref={ref} className="max-w-4xl mx-auto">
        <h2 className={`text-4xl font-heading font-bold text-center mb-4 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          Get in <span className="text-gradient">Touch</span>
        </h2>
        <div className="w-16 h-1 bg-gradient-primary mx-auto rounded-full mb-12" />

        <div className="grid sm:grid-cols-2 gap-6">
          {contactInfo.map((item, i) => (
            <a
              key={item.label}
              href={item.href}
              target={item.href.startsWith('http') ? '_blank' : undefined}
              rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className={`glass rounded-xl p-6 flex items-center gap-4 hover:border-primary/40 transition-all duration-700 group ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <span className="text-3xl">{item.icon}</span>
              <div>
                <div className="text-xs text-muted-foreground uppercase tracking-wider">{item.label}</div>
                <div className="text-foreground font-medium group-hover:text-primary transition-colors">{item.value}</div>
              </div>
            </a>
          ))}
        </div>

        {/* Footer */}
        <div className="text-center mt-20 text-muted-foreground text-sm">
          <p>© 2025 Sadaqat Hussain. Built with ❤️</p>
        </div>
      </div>
    </section>
  );
}
