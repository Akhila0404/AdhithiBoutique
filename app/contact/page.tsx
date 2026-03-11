import Image from "next/image";
import Link from "next/link";

const PhoneIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
);

const LocationIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
);

const ClockIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
);

export default function Contact() {
  return (
    <div className="flex flex-col pb-12 bg-background">
      {/* Header Section */}
      <header className="px-6 py-20 flex flex-col items-center text-center">
        <h1 className="text-3xl font-serif text-brand-dark italic font-medium relative inline-block mb-6">
          Let&apos;s Create <br />Something Beautiful
          <div className="absolute -bottom-3 left-1/4 right-1/4 h-[1px] bg-brand-gold"></div>
        </h1>
        <p className="text-brand-dark/70 text-sm max-w-[280px] italic mt-4">
          &ldquo;Your dream outfit is just one conversation away.&rdquo;
        </p>
      </header>

      {/* Inquiry Form */}
      <section className="px-6 py-12 bg-white mx-4 rounded-sm shadow-sm">
        <h2 className="text-xl font-serif mb-10 text-brand-dark font-bold">Inquiry Form</h2>
        <form className="flex flex-col gap-8">
          <div className="flex flex-col gap-2">
            <label className="text-[10px] uppercase tracking-[0.2em] text-brand-dark font-bold">Full Name</label>
            <input type="text" className="bg-[#f9f9f9] border border-gray-100 p-4 text-sm focus:border-brand-gold outline-none transition-colors rounded-sm" placeholder="Enter your name" />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-[10px] uppercase tracking-[0.2em] text-brand-dark font-bold">Phone Number</label>
            <input type="tel" className="bg-[#f9f9f9] border border-gray-100 p-4 text-sm focus:border-brand-gold outline-none transition-colors rounded-sm" placeholder="+91 00000 00000" />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-[10px] uppercase tracking-[0.2em] text-brand-dark font-bold">Service Type</label>
            <select className="bg-[#f9f9f9] border border-gray-100 p-4 text-sm focus:border-brand-gold outline-none transition-colors rounded-sm appearance-none">
               <option>Maggam Work</option>
               <option>Designer Blouses</option>
               <option>Custom Tops</option>
               <option>Bridal Lehengas</option>
            </select>
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-[10px] uppercase tracking-[0.2em] text-brand-dark font-bold">Message</label>
            <textarea rows={4} className="bg-[#f9f9f9] border border-gray-100 p-4 text-sm focus:border-brand-gold outline-none transition-colors rounded-sm resize-none" placeholder="Describe your dream outfit..."></textarea>
          </div>
          <button type="button" className="bg-brand-gold text-white py-4 text-xs font-bold uppercase tracking-[0.2em] mt-4 flex items-center justify-center gap-3 active:scale-[0.98] transition-all rounded-sm shadow-md">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
            Send Inquiry
          </button>
        </form>
      </section>

      {/* Contact Details Block */}
      <section className="mx-4 my-12 bg-brand-dark p-10 rounded-xl shadow-2xl flex flex-col gap-10">
        <div className="flex gap-5 items-start">
          <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center text-brand-gold">
            <PhoneIcon />
          </div>
          <div className="flex flex-col">
            <span className="text-[10px] uppercase tracking-widest text-white/40">Call Us</span>
            <p className="text-white font-medium">+91 96526 16576</p>
          </div>
        </div>
        
        <Link 
          href="https://maps.google.com/?cid=452694772153201059" 
          target="_blank"
          className="flex gap-5 items-start hover:opacity-80 transition-opacity"
        >
          <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center text-brand-gold">
            <LocationIcon />
          </div>
          <div className="flex flex-col">
            <span className="text-[10px] uppercase tracking-widest text-white/40">Visit Boutique</span>
            <p className="text-white font-medium text-sm leading-relaxed">Opp. Govt School, Ayyappa Society,<br />Suraram Village, Suraram, Hyderabad - 500055</p>
          </div>
        </Link>
        
        <div className="flex gap-5 items-start">
          <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center text-brand-gold">
            <ClockIcon />
          </div>
          <div className="flex flex-col">
            <span className="text-[10px] uppercase tracking-widest text-white/40">Opening Hours</span>
            <p className="text-white font-medium text-sm">Daily: 8:00 AM – 10:00 PM</p>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="px-6 pb-12">
        <Link 
          href="https://maps.google.com/?cid=452694772153201059" 
          target="_blank"
          className="relative block aspect-[3/2] w-full rounded-2xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-xl transition-all group"
        >
          <Image
            src="/images/tops/3.jpg"
            alt="Map Preview"
            width={390}
            height={200}
            className="w-full object-cover opacity-60 grayscale scale-110 group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent text-white"></div>
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
            <div className="text-brand-gold mb-3">
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="currentColor" className="opacity-80"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 0 1 0-5 2.5 2.5 0 0 1 0 5z"/></svg>
            </div>
            <h3 className="text-brand-dark font-serif text-lg font-bold group-hover:text-brand-gold transition-colors">Find Us Here</h3>
            <p className="text-[10px] text-brand-dark/60 uppercase tracking-widest">Interactive Map Preview</p>
          </div>
        </Link>
      </section>

      <div className="text-center px-10 mb-20">
         <p className="text-brand-dark/50 italic text-sm font-serif leading-relaxed">
            &ldquo; Your dream outfit is just one conversation away. &rdquo;
         </p>
      </div>
    </div>
  );
}
