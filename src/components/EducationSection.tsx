import { useEffect, useRef, useState } from 'react';

const education = [
  { degree: 'BS Computer Science', school: 'Comsats University Islamabad, Abbottabad', period: '2021 – 2025', grade: '2.80 CGPA' },
  { degree: 'FSC Pre-Engineering', school: 'Shaheen Public Higher Secondary School, Mirpur Mathelo', period: '2020 – 2021', grade: '94%' },
  { degree: 'Matriculation Pre-Engineering', school: 'Cambridge Public Higher Secondary School, Mirpur Mathelo', period: '2019 – 2020', grade: '80%' },
];

export default function EducationSection() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => e.isIntersecting && setVisible(true), { threshold: 0.2 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="education" className="py-24 px-6">
      <div ref={ref} className="max-w-4xl mx-auto">
        <h2 className={`text-4xl font-heading font-bold text-center mb-4 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <span className="text-gradient">Education</span>
        </h2>
        <div className="w-16 h-1 bg-gradient-primary mx-auto rounded-full mb-12" />

        <div className="grid gap-6">
          {education.map((edu, i) => (
            <div key={i} className={`glass rounded-2xl p-7 flex flex-col sm:flex-row sm:items-center justify-between gap-4 transition-all duration-700 hover:border-primary/30 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: `${i * 150}ms` }}>
              <div>
                <h3 className="text-lg font-heading font-bold text-foreground">{edu.degree}</h3>
                <p className="text-muted-foreground text-sm mt-1">{edu.school}</p>
                <p className="text-primary text-xs font-medium mt-1">{edu.period}</p>
              </div>
              <div className="px-5 py-2 rounded-xl bg-gradient-primary text-primary-foreground font-bold text-sm whitespace-nowrap self-start sm:self-center">
                {edu.grade}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
