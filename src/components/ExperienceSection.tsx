import { useEffect, useRef, useState } from 'react';

const experiences = [
  {
    title: 'Frontend Developer Intern',
    company: 'Litgrey Technologies',
    period: 'Nov 2025 – Present',
    location: 'Remote',
    points: [
      'Developing and maintaining responsive web applications using Angular, HTML, CSS, and Bootstrap.',
      'Performing manual QA testing, identifying UI/UX issues, and documenting bugs.',
      'Ensuring cross-browser compatibility and mobile responsiveness.',
    ],
  },
  {
    title: 'Final Year Project',
    company: 'Comsats University Islamabad, Abbottabad Campus',
    period: 'Sep 2025',
    location: 'Abbottabad',
    points: ['Completed capstone project demonstrating full-stack development skills.'],
  },
  {
    title: 'Semester Projects',
    company: 'Comsats University Islamabad, Abbottabad Campus',
    period: 'Sep 2023',
    location: 'Abbottabad',
    points: ['Built multiple academic projects showcasing web development fundamentals.'],
  },
];

export default function ExperienceSection() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => e.isIntersecting && setVisible(true), { threshold: 0.1 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="experience" className="py-24 px-6">
      <div ref={ref} className="max-w-4xl mx-auto">
        <h2 className={`text-4xl font-heading font-bold text-center mb-4 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          Work <span className="text-gradient">Experience</span>
        </h2>
        <div className="w-16 h-1 bg-gradient-primary mx-auto rounded-full mb-12" />

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-px bg-border" />

          {experiences.map((exp, i) => (
            <div key={i} className={`relative flex flex-col sm:flex-row gap-4 mb-12 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: `${i * 200}ms` }}>
              {/* Dot */}
              <div className="absolute left-4 sm:left-1/2 w-3 h-3 rounded-full bg-primary -translate-x-1/2 top-6 animate-pulse-glow z-10" />
              
              {/* Content */}
              <div className={`ml-10 sm:ml-0 ${i % 2 === 0 ? 'sm:pr-12 sm:text-right sm:w-1/2' : 'sm:pl-12 sm:ml-auto sm:w-1/2'}`}>
                <div className="glass rounded-xl p-6">
                  <span className="text-primary text-xs font-semibold tracking-wider uppercase">{exp.period} · {exp.location}</span>
                  <h3 className="text-xl font-heading font-bold text-foreground mt-1">{exp.title}</h3>
                  <p className="text-secondary text-sm font-medium mb-3">{exp.company}</p>
                  <ul className={`space-y-1 ${i % 2 === 0 ? 'sm:text-right' : ''}`}>
                    {exp.points.map((p, j) => (
                      <li key={j} className="text-muted-foreground text-sm leading-relaxed">• {p}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
