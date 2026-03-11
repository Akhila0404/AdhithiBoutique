import Image from "next/image";
import HeroCarousel from "@/components/HeroCarousel";

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative w-full overflow-hidden flex flex-col h-[450px]">
        <HeroCarousel
          images={[
            "/images/lehengas/1.jpg",
            "/images/maggam work/1.jpg",
            "/images/tops/1.jpg",
            "/images/lehengas/2.jpg",
          ]}
        />

      </section>

      {/* Philosophy Section */}
      <section className="px-8 py-20 text-center bg-background">
        <p className="text-brand-dark text-sm leading-relaxed max-w-[300px] mx-auto font-medium opacity-80 italic">
          &quot;We blend traditional artistry with contemporary silhouettes to create pieces that celebrate your unique style.&quot;
        </p>
      </section>

      {/* Featured Section (Curated Collections) */}
      <section className="px-4 py-12 bg-white">
        <div className="flex flex-col items-center mb-12 text-center">
          <span className="text-[10px] uppercase tracking-[0.3em] text-brand-gold mb-3 font-bold">The Edit</span>
          <h2 className="text-3xl font-serif text-brand-dark mb-2">Curated Collections</h2>
          <p className="text-brand-dark/60 text-xs italic">Traditional Artistry</p>
        </div>

        <div className="grid grid-cols-2 gap-3">
          {/* Large Card */}
          <div className="col-span-2 relative aspect-[4/3] overflow-hidden rounded-sm group mb-1">
            <Image
              src="/images/maggam work/1.jpg"
              alt="Maggam Work"
              width={390}
              height={200}
              className="w-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            <div className="absolute bottom-4 left-4 text-white">
              <span className="text-[10px] uppercase tracking-widest opacity-80">Collection</span>
              <h3 className="text-lg font-serif">Maggam Work</h3>
            </div>
          </div>

          {/* 2. Lehengas - Full Width (Just below Maggam Work) */}
          <div className="col-span-2 relative aspect-[4/3] overflow-hidden rounded-sm group mb-1">
            <Image
              src="/images/lehengas/2.jpg"
              alt="Bridal Lehengas"
              width={390}
              height={300}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
            <div className="absolute inset-0 flex items-center justify-center p-2 text-center">
              <h3 className="text-white text-lg font-serif">Bridal Lehengas</h3>
            </div>
          </div>

          {/* 3. Designer Blouses - Full Width Stack */}
          <div className="col-span-2 relative aspect-[4/3] overflow-hidden rounded-sm group mb-1">
            <Image
              src="/images/maggam work/2.jpg"
              alt="Designer Blouses"
              width={390}
              height={300}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
            <div className="absolute inset-0 flex items-center justify-center p-2 text-center">
              <h3 className="text-white text-lg font-serif">Designer Blouses</h3>
            </div>
          </div>

          {/* 4. Custom Tops - Full Width Stack */}
          <div className="col-span-2 relative aspect-[4/3] overflow-hidden rounded-sm group">
            <Image
              src="/images/tops/1.jpg"
              alt="Custom Tops"
              width={390}
              height={300}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
            <div className="absolute inset-0 flex items-center justify-center p-2 text-center">
              <h3 className="text-white text-lg font-serif">Custom Tops</h3>
            </div>
          </div>
        </div>
      </section>

      {/* The Adhithi Promise */}
      <section className="bg-brand-dark px-8 py-20 text-center">
        <h2 className="text-2xl font-serif text-white mb-16 relative inline-block">
          The Adhithi Promise
          <div className="absolute -bottom-4 left-1/4 right-1/4 h-[1px] bg-brand-gold/40"></div>
        </h2>

        <div className="grid grid-cols-1 gap-16">
          <div className="flex flex-col items-center gap-4">
            <div className="text-brand-gold mb-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" /></svg>
            </div>
            <h3 className="text-brand-gold text-xs font-bold uppercase tracking-[0.2em]">Custom Fit</h3>
            <p className="text-white/60 text-xs leading-relaxed max-w-[240px]">Precisely tailored to your measurements for the perfect silhouette.</p>
          </div>

          <div className="flex flex-col items-center gap-4">
            <div className="text-brand-gold mb-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" /></svg>
            </div>
            <h3 className="text-brand-gold text-xs font-bold uppercase tracking-[0.2em]">Premium Fabrics</h3>
            <p className="text-white/60 text-xs leading-relaxed max-w-[240px]">Sourced from the finest looms across India to ensure lasting luxury.</p>
          </div>

          <div className="flex flex-col items-center gap-4">
            <div className="text-brand-gold mb-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><path d="M20 14.66V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h5.34" /><polygon points="18 2 22 6 12 16 8 16 8 12 18 2" /></svg>
            </div>
            <h3 className="text-brand-gold text-xs font-bold uppercase tracking-[0.2em]">Master Artisans</h3>
            <p className="text-white/60 text-xs leading-relaxed max-w-[240px]">Handcrafted by designers with decades of traditional expertise.</p>
          </div>
        </div>
      </section>

      {/* Contact Bar */}
      <div className="bg-white py-4 px-6 flex justify-center border-t border-gray-100">
        <div className="bg-brand-dark text-white px-6 py-3 rounded-full text-[10px] font-bold uppercase tracking-[0.15em] flex items-center gap-3">
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
          Find a Boutique Near You
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-brand-dark px-8 pt-16 pb-12 text-center text-white">
        <h2 className="text-4xl font-serif tracking-tighter mb-8">ADHITHI</h2>
        <div className="flex flex-col gap-6 items-center mb-12 opacity-80">
          <div className="flex flex-col gap-1">
            <span className="text-[10px] uppercase tracking-[0.2em] text-brand-gold font-bold">Location</span>
            <p className="text-xs font-light">Opp. Govt School, Ayyappa Society, <br />Suraram Village, Suraram, Hyderabad - 500055</p>
          </div>
          <div className="flex gap-6 mt-4">
            <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
            </div>
            <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg>
            </div>
            <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
            </div>
          </div>
        </div>
        <div className="text-[9px] uppercase tracking-[0.3em] opacity-40 pt-12 border-t border-white/10">
          © 2026 ADHITHI DESIGNER & BOUTIQUE
        </div>
      </footer>
    </div>
  );
}
