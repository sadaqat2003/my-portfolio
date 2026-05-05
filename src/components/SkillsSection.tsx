import { useEffect, useRef, useState } from 'react';

const skills = [
  { name: 'Angular', level: 85 },
  { name: 'JavaScript', level: 80 },
  { name: 'TypeScript', level: 75 },
  { name: 'HTML5', level: 95 },
  { name: 'CSS3 & SCSS', level: 90 },
  { name: 'Bootstrap', level: 88 },
  { name: 'Responsive Design', level: 90 },
  { name: 'REST API Integration', level: 70 },
  { name: 'Manual Testing', level: 80 },
  { name: 'Git / GitHub / GitLab', level: 75 },
  { name: 'Cross Browser Testing', level: 78 },
  { name: 'Postman', level: 70 },
];

export default function SkillsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => e.isIntersecting && setVisible(true), { threshold: 0.15 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="skills" className="py-24 px-6">
      <div ref={ref} className="max-w-5xl mx-auto">
        <h2 className={`text-4xl font-heading font-bold text-center mb-4 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          My <span className="text-gradient">Skills</span>
        </h2>
        <div className="w-16 h-1 bg-gradient-primary mx-auto rounded-full mb-12" />

        <div className="grid sm:grid-cols-2 gap-6">
          {skills.map((skill, i) => (
            <div key={skill.name} className={`glass rounded-xl p-5 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: `${i * 80}ms` }}>
              <div className="flex justify-between mb-2">
                <span className="text-foreground font-medium text-sm">{skill.name}</span>
                <span className="text-primary text-sm font-semibold">{skill.level}%</span>
              </div>
              <div className="w-full h-2 rounded-full bg-muted overflow-hidden">
                <div
                  className="h-full rounded-full bg-gradient-primary transition-all duration-1000 ease-out"
                  style={{ width: visible ? `${skill.level}%` : '0%', transitionDelay: `${i * 80 + 300}ms` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
