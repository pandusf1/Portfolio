import { Link } from 'react-router-dom';
// TAMBAHAN: Import ikon 'Factory' untuk Manufacturing
import { ArrowRight, Database, TrendingUp, Layers, Code2, Factory } from 'lucide-react'; 

const Hero = () => {
  return (
    <section className="relative bg-slate-50 pt-32 -mt-24 pb-20 lg:pt-48 lg:pb-10 overflow-hidden">
      <div className="container mx-auto px-6 pt-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          
          {/* --- KOLOM KIRI: TEKS (Tetap Sama) --- */}
          <div className="w-full lg:w-1/2 space-y-6 z-10">
            <h1 className="text-3xl lg:text-5xl font-bold text-slate-900 leading-tight">
              Bridging <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Accounting</span><br />
              with ERP Technology.
            </h1>
            
            <p className="text-lg mb-2 text-slate-600 max-w-xl leading-relaxed border-l-4 border-blue-200 pl-4">
              Halo! Saya Pandu Safrilio Fadhil mahasiswa STr Komputerisasi Akuntansi yang menemukan *passion* di dunia sistem informasi akuntansi, khususnya sistem ERP.
              Aktif mendalami <b>Odoo ERP</b> untuk menghubungkan teori akuntansi dengan simulasi bisnis nyata.
            </p>

            <div className="inline-flex -mb-10 items-center gap-2 px-3 py-1 rounded-full bg-blue-100 border border-blue-200 text-blue-800 text-xs font-bold uppercase tracking-wider w-fit">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              Aspiring ERP Consultant
            </div>

            <div className="flex gap-6 -pt-1 mt-1 border-t border-slate-200/60">
                <div>
                    <span className="block text-2xl font-bold text-slate-900">3.52</span>
                    <span className="text-xs text-slate-500 uppercase font-semibold">IPK</span>
                </div>
                <div>
                    <span className="block text-2xl font-bold text-slate-900">Active</span>
                    <span className="text-xs text-slate-500 uppercase font-semibold">Learner</span>
                </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-1">
              <Link 
                to="/projects" 
                className="inline-flex justify-center items-center gap-2 bg-primary text-white px-8 py-4 rounded-lg font-semibold hover:bg-slate-800 transition-all hover:translate-y-[-2px]"
              >
                Lihat Studi Kasus
                <ArrowRight size={20} />
              </Link>
              <Link 
                to="/about" 
                className="inline-flex justify-center items-center gap-2 bg-white text-primary border border-slate-200 px-8 py-4 rounded-lg font-semibold hover:bg-slate-50 transition-all"
              >
                Tentang Saya
              </Link>
            </div>
          </div>

          {/* --- KOLOM KANAN: VISUAL (4 Nodes Ecosystem) --- */}
          <div className="w-full lg:w-1/2 relative flex justify-center py-10 lg:py-0">
            
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>

            {/* Container Utama */}
            <div className="relative w-80 h-80 md:w-96 md:h-96">
              
              {/* --- CENTER HUB (Accounting) --- */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 flex flex-col items-center">
                <div className="relative">
                  <span className="absolute -inset-2 rounded-full bg-blue-100 opacity-75 animate-ping"></span>
                  <div className="relative w-24 h-24 bg-white rounded-full shadow-2xl border-4 border-blue-50 flex items-center justify-center text-blue-600 z-10">
                    <Database size={32} />
                  </div>
                </div>
                <div className="mt-3 text-center bg-white/80 backdrop-blur-sm px-3 py-1 rounded-full shadow-sm border border-slate-100">
                  <h3 className="font-bold text-slate-800 text-sm">Accounting</h3>
                  <p className="text-[10px] text-slate-500">General Ledger</p>
                </div>
              </div>

              {/* --- NODES SEKELILING --- */}
              
              {/* 1. SALES (Kiri Atas) */}
              <div className="absolute top-0 left-0 animate-float-slow z-10">
                 <div className="w-14 h-14 bg-white rounded-2xl shadow-lg border border-slate-100 flex items-center justify-center text-green-500 mb-2 mx-auto">
                    <TrendingUp size={22} />
                 </div>
                 <div className="text-center">
                    <span className="text-[10px] font-bold text-slate-600 bg-white px-2 py-1 rounded-md shadow-sm">Sales</span>
                 </div>
                 {/* Garis ke Tengah */}
                 <div className="absolute top-14 left-7 w-20 h-0.5 bg-gradient-to-r from-green-300 to-transparent rotate-45 origin-left -z-10"></div>
              </div>

              {/* 2. PURCHASE (Kanan Atas) */}
              <div className="absolute top-0 right-0 animate-float-delayed z-10">
                 <div className="w-14 h-14 bg-white rounded-2xl shadow-lg border border-slate-100 flex items-center justify-center text-purple-500 mb-2 mx-auto">
                    <Layers size={22} />
                 </div>
                 <div className="text-center">
                    <span className="text-[10px] font-bold text-slate-600 bg-white px-2 py-1 rounded-md shadow-sm">Purchase</span>
                 </div>
                 {/* Garis ke Tengah */}
                 <div className="absolute top-14 right-7 w-20 h-0.5 bg-gradient-to-l from-purple-300 to-transparent -rotate-45 origin-right -z-10"></div>
              </div>

              {/* 3. INVENTORY (Kiri Bawah - Posisi Baru) */}
              <div className="absolute bottom-0 left-0 animate-float z-10">
                 {/* Garis ke Tengah (Arah ke atas kanan) */}
                 <div className="absolute bottom-16 left-7 w-20 h-0.5 bg-gradient-to-r from-orange-300 to-transparent -rotate-45 origin-left -z-10"></div>
                 
                 <div className="w-14 h-14 bg-white rounded-2xl shadow-lg border border-slate-100 flex items-center justify-center text-orange-500 mb-2 mx-auto">
                    <Code2 size={22} /> 
                 </div>
                 <div className="text-center">
                    <span className="text-[10px] font-bold text-slate-600 bg-white px-2 py-1 rounded-md shadow-sm">Inventory</span>
                 </div>
              </div>

              {/* 4. MANUFACTURING (Kanan Bawah - Module Baru) */}
              <div className="absolute bottom-0 right-0 animate-float-slow z-10">
                 {/* Garis ke Tengah (Arah ke atas kiri) */}
                 <div className="absolute bottom-16 right-7 w-20 h-0.5 bg-gradient-to-l from-rose-300 to-transparent rotate-45 origin-right -z-10"></div>
                 
                 <div className="w-14 h-14 bg-white rounded-2xl shadow-lg border border-slate-100 flex items-center justify-center text-rose-500 mb-2 mx-auto">
                    <Factory size={22} /> 
                 </div>
                 <div className="text-center">
                    <span className="text-[10px] font-bold text-slate-600 bg-white px-2 py-1 rounded-md shadow-sm">Manufacturing</span>
                 </div>
              </div>

              {/* Partikel Hiasan (Data Flow) */}
              <div className="absolute top-1/3 left-1/4 w-1.5 h-1.5 bg-green-400 rounded-full animate-ping"></div>
              <div className="absolute top-1/3 right-1/4 w-1.5 h-1.5 bg-purple-400 rounded-full animate-ping animation-delay-500"></div>
              <div className="absolute bottom-1/3 left-1/4 w-1.5 h-1.5 bg-orange-400 rounded-full animate-ping animation-delay-700"></div>
              <div className="absolute bottom-1/3 right-1/4 w-1.5 h-1.5 bg-rose-400 rounded-full animate-ping animation-delay-1000"></div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;