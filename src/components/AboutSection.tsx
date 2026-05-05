import { useEffect, useRef, useState } from 'react';

export default function AboutSection() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => e.isIntersecting && setVisible(true), { threshold: 0.2 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="about" className="py-24 px-6">
      <div ref={ref} className={`max-w-4xl mx-auto transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <h2 className="text-4xl font-heading font-bold text-center mb-4">
          About <span className="text-gradient">Me</span>
        </h2>
        <div className="w-16 h-1 bg-gradient-primary mx-auto rounded-full mb-10" />
        
        <div className="glass rounded-2xl p-8 sm:p-10">
          <p className="text-muted-foreground leading-relaxed text-lg">
            Computer Science graduate and Frontend Developer with hands-on experience in building responsive, 
            user-focused web applications. Currently working at <span className="text-primary font-semibold">Litgrey Technologies</span> as 
            a Frontend Developer Intern. Skilled in HTML, CSS, JavaScript, Angular, and Bootstrap, with additional 
            experience in manual QA testing, bug reporting, and UI validation. Passionate about delivering 
            high-quality, scalable, and performance-optimized applications.
          </p>
          
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-10">
            {[
              { value: '2.80', label: 'CGPA' },
              { value: 'BS CS', label: 'Degree' },
              { value: 'Angular', label: 'Speciality' },
              { value: 'QA', label: 'Experience' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-2xl font-heading font-bold text-gradient">{stat.value}</div>
                <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
