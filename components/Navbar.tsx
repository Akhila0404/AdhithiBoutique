import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="w-full max-w-[390px] mx-auto z-50 bg-background border-b border-brand-gold/10">
      <div className="h-24 flex items-center justify-center px-4">
        <Link href="/" className="relative flex items-center justify-center px-8 py-3 group transition-transform active:scale-95">
          {/* Luxury Plaque Background */}
          <div className="absolute inset-0 bg-brand-dark rounded-[1px] shadow-sm border border-brand-gold/30"></div>

          <div className="relative flex flex-col items-center">
            <h1 className="text-xl font-serif font-bold tracking-[0.2em] text-brand-gold uppercase leading-tight">
              Adhithi
            </h1>
            <div className="flex items-center gap-2 mt-1">
              <div className="h-[0.5px] w-3 bg-brand-gold/30"></div>
              <p className="text-[9px] tracking-[0.3em] text-brand-gold/90 uppercase font-semibold">Designer & Boutique</p>
              <div className="h-[0.5px] w-3 bg-brand-gold/30"></div>
            </div>
          </div>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
