import Image from "next/image";

export default function Collections() {
  const collections = [
    {
      title: "Maggam Work",
      description: "Intricate bead & thread embroidery for bridal and special occasions. Handcrafted precision in every stitch.",
      image: "/images/maggam work/3.jpg",
    },
    {
      title: "Tops",
      description: "Indo-western styles ranging from casual everyday wear to semi-formal designer pieces.",
      image: "/images/tops/2.jpg",
    },
    {
      title: "Blouses",
      description: "Custom-stitched masterpieces featuring unique designer neck patterns and perfect fits.",
      image: "/images/maggam work/1.jpg",
    },
    {
      title: "Lehengas",
      description: "Grand bridal collections, party wear, and festive lehengas that make a statement.",
      image: "/images/lehengas/3.jpg",
    },
  ];

  return (
    <div className="flex flex-col">
      {/* Top Banner */}
      <section className="bg-brand-dark py-8 px-6 text-center border-b border-brand-gold/30">
        <h2 className="text-brand-gold text-xl font-serif mb-2 tracking-wide uppercase">Custom Orders Welcome</h2>
        <p className="text-white/60 text-[10px] uppercase tracking-[0.2em]">Bespoke designs tailored exclusively for you</p>
      </section>

      {/* Header Section */}
      <header className="px-6 py-16 bg-background flex flex-col items-center text-center">
        <h1 className="text-3xl font-serif text-brand-dark italic font-medium relative inline-block">
          Our Collections
          <div className="absolute -bottom-3 left-1/4 right-1/4 h-[1px] bg-brand-gold"></div>
        </h1>
      </header>

      {/* Collections List */}
      <div className="px-6 pb-20 bg-background flex flex-col gap-16">
        {collections.map((item, index) => (
          <div key={index} className="flex flex-col gap-6 group items-center text-center">
            <div className="relative w-full aspect-[4/5] overflow-hidden rounded-sm shadow-xl group-hover:shadow-2xl transition-all duration-500">
              <Image
                src={item.image}
                alt={item.title}
                width={390}
                height={200}
                className="w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-brand-dark/40 to-transparent"></div>
            </div>

            <div className="flex flex-col gap-3 items-center max-w-[300px]">
              <h2 className="text-xl font-serif text-brand-dark font-bold tracking-tight">{item.title}</h2>
              <p className="text-brand-dark/70 text-xs leading-relaxed italic">
                {item.description}
              </p>
              <button className="mt-4 bg-brand-gold text-white px-10 py-3 text-[10px] font-bold uppercase tracking-[0.2em] rounded-sm hover:bg-brand-gold/90 transition-all flex items-center gap-2">
                Book a Consultation
                <span>✦</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
