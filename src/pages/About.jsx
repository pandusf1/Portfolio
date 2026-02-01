import { BookOpen, Target, Coffee } from 'lucide-react';
import Contact from '../components/Contact'; // Import Form Kontak
// GANTI DENGAN FOTO KAMU (Pastikan file ada di folder src/assets)
// Kalau belum ada foto, pakai link dummy dulu:
const fotoProfil = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop"; 
// import fotoProfil from '../assets/foto-profil.jpg'; // <-- Pakai ini kalau sudah ada file

const About = () => {
  return (
    <section className="pt-32 pb-20 bg-white">
      <div className="container mx-auto px-6 max-w-5xl">
        
        <div className="mb-10">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Tentang Saya</h1>
          <div className="h-1 w-20 bg-secondary rounded"></div>
        </div>

        <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-start">
          
          {/* BAGIAN FOTO (KIRI) */}
          <div className="flex-shrink-0 mx-auto md:mx-0">
             {/* Saya besarkan sedikit fotonya biar seimbang dengan teks disampingnya */}
             <div className="w-40 h-40 md:w-48 md:h-48 rounded-3xl overflow-hidden border-4 border-slate-100 shadow-xl">
               <img 
                 src={fotoProfil} 
                 alt="Profile" 
                 className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
               />
             </div>
          </div>

          {/* BAGIAN TEKS (KANAN) */}
          <div className="flex-1 space-y-6 text-lg text-slate-600 leading-relaxed text-justify md:text-left">
            <p>
              Halo! Saya <span className="font-bold text-slate-800">Pandu Safrilio Fadhil</span>, seorang lulusan STr Komputerisasi Akuntansi yang menemukan *passion* di dunia sistem informasi akuntansi, khususnya sistem ERP.
            </p>
            
            <p>
              Perjalanan saya dimulai ketika menyadari bahwa banyak masalah akuntansi di lapangan sebenarnya bukan karena manusianya, tapi karena sistem yang tidak terintegrasi. Sejak itu, saya mendalami <b>Odoo ERP</b> untuk menjembatani kesenjangan antara tim Keuangan dan Operasional.
            </p>

            <p>
                Saat ini, fokus utama saya adalah membantu bisnis melakukan digitalisasi pembukuan, mulai dari manajemen stok hingga pelaporan keuangan otomatis.
            </p>
          </div>

        </div>

        {/* --- KOTAK VISI/MISI (Tetap di bawah) --- */}
        <div className="grid md:grid-cols-3 gap-6 mt-16">
          <div className="p-6 bg-slate-50 rounded-xl border border-slate-100 hover:shadow-md transition-shadow">
            <BookOpen className="text-secondary mb-4" size={32} />
            <h3 className="font-bold text-slate-900 mb-2">Background</h3>
            <p className="text-sm text-slate-600">Sarjana Akuntansi dengan pemahaman kuat tentang PSAK dan Perpajakan.</p>
          </div>
          
          <div className="p-6 bg-slate-50 rounded-xl border border-slate-100 hover:shadow-md transition-shadow">
            <Target className="text-blue-600 mb-4" size={32} />
            <h3 className="font-bold text-slate-900 mb-2">Focus</h3>
            <p className="text-sm text-slate-600">Implementasi Odoo (Accounting, Inventory, Purchase, Sales) & Integrasi Data.</p>
          </div>

          <div className="p-6 bg-slate-50 rounded-xl border border-slate-100 hover:shadow-md transition-shadow">
            <Coffee className="text-orange-500 mb-4" size={32} />
            <h3 className="font-bold text-slate-900 mb-2">Next Goal</h3>
            <p className="text-sm text-slate-600">Memperdalam SAP S/4HANA Finance & Python Scripting lanjutan.</p>
          </div>
        </div>

        {/* Garis Pemisah */}
        <div className="mt-20 border-t border-slate-100"></div>

        {/* --- FORM KONTAK (PALING BAWAH) --- */}
        <Contact />

      </div>
    </section>
  );
};

export default About;