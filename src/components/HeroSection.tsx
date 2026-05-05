import FloatingScene from './FloatingScene';

export default function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <FloatingScene />
      
      {/* Radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-20" style={{ background: 'radial-gradient(circle, hsl(190 90% 50% / 0.3), transparent 70%)' }} />
      
      <div className="relative z-10 text-center px-6 max-w-3xl">
        <p className="text-primary font-medium tracking-widest uppercase text-sm mb-4 animate-fade-up" style={{ animationDelay: '0.2s', opacity: 0 }}>
          Hello, I'm
        </p>
        <h1 className="text-5xl sm:text-7xl font-heading font-bold mb-4 animate-fade-up" style={{ animationDelay: '0.4s', opacity: 0 }}>
          <span className="text-gradient">Sadaqat</span>{' '}
          <span className="text-foreground">Hussain</span>
        </h1>
        <p className="text-xl sm:text-2xl text-muted-foreground mb-8 animate-fade-up" style={{ animationDelay: '0.6s', opacity: 0 }}>
          Frontend Developer with QA Experience
        </p>
        <div className="flex gap-4 justify-center animate-fade-up" style={{ animationDelay: '0.8s', opacity: 0 }}>
          <a href="#contact" className="px-8 py-3 rounded-xl bg-gradient-primary font-semibold text-primary-foreground hover:opacity-90 transition-opacity glow-primary">
            Get in Touch
          </a>
          <a href="#experience" className="px-8 py-3 rounded-xl border border-border text-foreground hover:border-primary hover:text-primary transition-colors">
            View Work
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex justify-center pt-2">
          <div className="w-1 h-2 rounded-full bg-primary animate-bounce" />
        </div>
      </div>
    </section>
  );
}
