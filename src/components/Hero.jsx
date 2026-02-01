import { Link } from 'react-router-dom';
import { ArrowRight, Database, TrendingUp, Layers, MapPin, GraduationCap } from 'lucide-react'; // Tambah Ikon MapPin & GraduationCap

const Hero = () => {
  return (
    <section className="relative bg-slate-50 pt-32 -mt-24 pb-20 lg:pt-48 lg:pb-10 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          
          {/* --- KOLOM KIRI: TEKS & PROFIL --- */}
          <div className="w-full lg:w-1/2 space-y-6 z-10">
            
            {/* 1. Badge Status (Aspiring ERP Consultant) */}
            <div className="inline-flex -mb-10 items-center gap-2 px-3 py-1 rounded-full bg-blue-100 border border-blue-200 text-blue-800 text-xs font-bold uppercase tracking-wider w-fit">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              Aspiring ERP Consultant
            </div>

            {/* 3. Headline Utama (Opsi 2) */}
            <h1 className="text-xl lg:text-5xl font-bold text-slate-900 leading-tight">
              Digitalizing Finance & <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
                Operations
              </span>
              <br /> through ERP Systems.
            </h1>
            
            {/* 4. Deskripsi (Versi Mahasiswa/Learner) */}
            <p className="text-lg mb-2 text-slate-600 max-w-xl leading-relaxed border-l-4 border-blue-200 pl-4">
              Halo! Saya Pandu Safrilio Fadhil mahasiswa STr Komputerisasi Akuntansi yang menemukan *passion* di dunia sistem informasi akuntansi, khususnya sistem ERP.
              Aktif mendalami <b>Odoo ERP</b> untuk menghubungkan teori akuntansi dengan simulasi bisnis nyata.
            </p>

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

            {/* Buttons */}
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

          {/* --- KOLOM KANAN: VISUAL (Tetap sama seperti kodemu) --- */}
          <div className="w-full lg:w-1/2 relative flex justify-center">
            
            {/* Lingkaran Background Dekoratif */}
            <div className="absolute top-10 right-10 w-72 h-72 bg-secondary/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-10 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"></div>

            {/* Kartu Visual */}
            <div className="relative bg-white p-8 rounded-2xl shadow-xl border border-slate-100 w-full max-w-md z-10">
              <div className="flex items-center gap-4 mb-6 border-b border-slate-100 pb-4">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
                  <Database size={20} />
                </div>
                <div>
                  <h3 className="font-bold text-slate-800">System Integration</h3>
                  <p className="text-xs text-slate-500">Odoo 16 • Accounting • Inventory</p>
                </div>
              </div>
              
              {/* Simulasi Flowchart */}
              <div className="space-y-4">
                <div className="flex items-center justify-between text-sm">
                  <span className="flex items-center gap-2 text-slate-600"><Layers size={16}/> Purchase Order</span>
                  <span className="text-green-500 font-mono">Done</span>
                </div>
                <div className="w-full h-1 bg-slate-100 rounded overflow-hidden">
                  <div className="h-full bg-green-500 w-full"></div>
                </div>

                <div className="flex items-center justify-between text-sm">
                  <span className="flex items-center gap-2 text-slate-600"><Database size={16}/> Goods Receipt</span>
                  <span className="text-green-500 font-mono">Done</span>
                </div>
                <div className="w-full h-1 bg-slate-100 rounded overflow-hidden">
                  <div className="h-full bg-green-500 w-full"></div>
                </div>

                <div className="flex items-center justify-between text-sm">
                  <span className="flex items-center gap-2 text-slate-600"><TrendingUp size={16}/> Vendor Bill & Journal</span>
                  <span className="text-blue-500 font-bold font-mono">Processing...</span>
                </div>
                 <div className="w-full h-1 bg-slate-100 rounded overflow-hidden">
                  <div className="h-full bg-blue-500 w-2/3 animate-pulse"></div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 text-center">
                <p className="text-xs text-slate-400">Automated Journal Entries Generated</p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;