export default function TailwindCSS() {
  return (
    // Background utama dekat-hitam (dark gray) agar tidak terlalu tajam di mata
    <div className="min-h-screen bg-[#0A0A0B] text-[#E4E4E7] font-sans"> 
        <Navbar/>
        
        {/* Container Utama - Lebar penuh untuk layout bento */}
        <main className="max-w-7xl mx-auto px-6 pt-12 pb-24">
            
            {/* Hero Section - Lebih Dramatis */}
            <header className="text-center py-20 mb-12 border-b border-[#1F1F23]">
                <div className="inline-flex items-center gap-2 bg-[#1A1A1D] border border-[#2A2A2E] px-4 py-1 rounded-full text-xs text-[#A1A1AA] mb-6">
                   <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
                   </span>
                   Sekarang Belajar:
                   <span className="text-cyan-400 font-medium">Tailwind v4 Alpha</span>
                </div>
                <h1 className="text-6xl md:text-7xl font-extrabold text-white tracking-tighter leading-[0.95]">
                   Desain <span className="text-cyan-400">Gacor</span> Tanpa Pusing CSS.
                </h1>
                <p className="text-xl text-[#A1A1AA] mt-8 max-w-3xl mx-auto leading-relaxed">
                   Selamat datang di dunia utility-first. Tinggalkan cara lama, bangun antarmuka modern tercepat langsung di HTML Anda.
                </p>
                <div className="mt-12 flex gap-4 justify-center">
                    <button className="bg-cyan-500 hover:bg-cyan-400 text-[#0A0A0B] font-bold px-10 py-4 rounded-xl shadow-lg shadow-cyan-950/40 transition-all active:scale-95 text-lg">
                        Mulai Belajar
                    </button>
                    <button className="bg-[#1A1A1D] hover:bg-[#2A2A2E] text-white font-medium px-10 py-4 rounded-xl border border-[#2A2A2E] transition-all">
                        Dokumentasi
                    </button>
                </div>
            </header>

            {/* --- Bento Grid Section --- */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                
                {/* Kolom 1: Spacing & Shadow (Bento Besar) */}
                <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
                   <SpacingCard />
                   <ShadowEffects />
                </div>

                {/* Kolom 2: Typography (Bento Tinggi) */}
                <div className="md:row-span-2">
                   <TypographyBox />
                </div>

                {/* Kolom 3: Buttons & Colors (Bento Pendek) */}
                <div className="md:col-span-2 grid grid-cols-2 gap-6">
                    <BorderRadiusBtn />
                    <BackgroundColors />
                </div>

            </div>

        </main>
    </div>
  )
}

function Navbar(){
    return (
        // Glassmorphism effect: sticky, backdrop-blur, semi-transparent background
        <nav className="sticky top-0 z-50 backdrop-blur-lg bg-[#0A0A0B]/80 border-b border-[#1F1F23] p-4">
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                <h1 className="text-2xl font-black text-white tracking-tighter flex items-center gap-2">
                    <div className="w-5 h-5 bg-cyan-500 rounded-sm"></div>
                    TW<span className="text-cyan-400">LEARN.</span>
                </h1>
                <ul className="flex space-x-2 text-sm font-medium text-[#A1A1AA]">
                    <li><a href="#" className="hover:text-cyan-400 hover:bg-[#1A1A1D] px-4 py-2 rounded-lg transition-colors duration-300">Home</a></li>
                    <li><a href="#" className="hover:text-cyan-400 hover:bg-[#1A1A1D] px-4 py-2 rounded-lg transition-colors duration-300">Features</a></li>
                    <li><a href="#" className="hover:text-cyan-400 hover:bg-[#1A1A1D] px-4 py-2 rounded-lg transition-colors duration-300">Contact</a></li>
                </ul>
            </div>
        </nav>
    )
}

{/* Komponen Bento: Desain Konsisten */}
const BentoItem = ({ children, className="" }) => (
    <div className={`bg-[#121215] p-8 rounded-3xl border border-[#1F1F23] hover:border-[#2A2A2E] transition-all duration-300 group ${className}`}>
        {children}
    </div>
);

function SpacingCard(){
    return (
        <BentoItem>
            <div className="flex justify-between items-start">
                <h2 className="text-2xl font-bold text-white tracking-tight">System Spacing</h2>
                <span className="text-3xl text-cyan-400">📏</span>
            </div>
            <p className="mt-4 text-[#A1A1AA] leading-relaxed">
                Menggunakan <code className="bg-[#1A1A1D] px-2 py-1 rounded text-cyan-300">gap-6</code> dan 
                <code className="bg-[#1A1A1D] px-2 py-1 rounded text-cyan-300">p-8</code> untuk konsistensi layout bento yang rapi dan 'breathable'.
            </p>
        </BentoItem>
    )
}

function TypographyBox(){
    return (
        <BentoItem className="h-full flex flex-col justify-between">
            <div>
                <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-[#A1A1AA] mb-3">Scale</h3>
                <h1 className="text-5xl font-black text-white leading-[0.9] tracking-tighter">Typo-<br/>graphy</h1>
                <p className="text-cyan-400 font-mono text-xs mt-3">text-5xl / tracking-tighter</p>
            </div>
            <div className="mt-8 pt-6 border-t border-[#1F1F23]">
                <p className="text-[#A1A1AA] italic">"Tailwind utility classes are like LEGO blocks for UI."</p>
                <p className="text-[#E4E4E7] font-semibold mt-2">- Anonim</p>
            </div>
        </BentoItem>
    )
}

function BorderRadiusBtn(){
    return (
        <BentoItem className="flex items-center justify-center gap-4 hover:bg-[#161619]">
           <button className="flex-1 py-4 border border-[#2A2A2E] text-white font-medium rounded-full hover:bg-[#2A2A2E] transition-all">
               Ghost Lg
           </button>
           <button className="flex-1 py-4 bg-white text-black font-bold rounded-full hover:bg-slate-200 transition-all">
               Solid Lg
           </button>
        </BentoItem>
    )
}

function BackgroundColors(){
    return(
        <BentoItem className="bg-gradient-to-br from-cyan-600 to-indigo-700 !border-0 shadow-lg shadow-cyan-950/20">
            <h3 className="text-lg font-bold text-white">Neon Gradients</h3>
            <p className="mt-2 text-cyan-50 opacity-90 text-sm">Memberikan aksen warna yang tajam pada tema gelap.</p>
        </BentoItem>
    )
}

function ShadowEffects(){
    return (
        <BentoItem className="group cursor-pointer">
            <h3 className="text-2xl font-bold text-white tracking-tight">Glass & Shadows</h3>
            <p className="text-[#A1A1AA] mt-3 mb-6">Efek bayangan pada dark mode harus halus. Perhatikan perbedaan saat hover.</p>
            
            {/* Box kecil untuk demo hover */}
            <div className="w-full h-16 bg-[#1A1A1D] rounded-xl border border-[#2A2A2E] group-hover:shadow-[0_0_30px_rgba(34,211,238,0.15)] group-hover:border-cyan-800 transition-all duration-500 flex items-center justify-center">
               <span className="text-sm font-mono text-[#A1A1AA] group-hover:text-cyan-300">Hover kotak ini!</span>
            </div>
        </BentoItem>
    )
}