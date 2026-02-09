import { BookOpen, Target, Coffee } from 'lucide-react';
import Contact from '../components/Contact'; // Import Form Kontak
const fotoProfil = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop"; 

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
              Halo! Saya <span className="font-bold text-slate-800">Pandu Safrilio Fadhil</span>, seorang mahasiswa D4 Komputerisasi Akuntansi di Politeknik Negeri Semarang yang menemukan passion di dunia sistem informasi akuntansi, khususnya sistem ERP.
            </p>
            
            <p>
              Ketertarikan saya pada akuntansi bermula saat duduk di bangku kelas 12 SMA. Saat itu, saya menikmati proses pembukuan manual menyeimbangkan debit dan kredit memberikan kepuasan tersendiri. Namun, saya segera menyadari satu kelemahan fatal yaitu Human Error. Satu kesalahan input kecil bisa merusak seluruh laporan, dan proses perbaikannya memakan waktu lama.            
            </p>
          </div>
        </div>

          <div className="pt-5 flex-1 space-y-6 text-lg text-slate-600 leading-relaxed text-justify md:text-left">
            <p>
              Perspektif saya berubah total semenjak kuliah. Saya menyadari bahwa akuntansi modern tidak lagi soal 'siapa yang paling teliti mencatat', tapi 'siapa yang bisa membangun sistem paling efisien'. Rasa ingin tahu mendorong untuk belajar lebih jauh dengan mencoba hal baru secara otodidak, saya suka bereksperimen dengan teknologi baru seperti integrasi AI dan Cloud Database untuk menciptakan solusi nyata yang mempermudah pekerjaan manusia.
            </p>
            <p>
              Di sinilah saya tertarik pada logika pemrograman. Saya mulai melihat kode bukan sebagai bahasa mesin yang rumit, melainkan sebagai alat untuk menciptakan otomatisasi. Kini, fokus saya bukan lagi sekadar menjadi pengguna aplikasi, tapi menjadi kreator solusi bisnis merancang sistem yang memastikan data akurat, transparan, dan bebas dari kesalahan manusia.
            </p>
          </div>

        {/* ---  VISI/MISI --- */}
        <div className="grid md:grid-cols-3 gap-6 mt-16">
          <div className="p-6 bg-slate-50 rounded-xl border border-slate-100 hover:shadow-md transition-shadow">
            <BookOpen className="text-secondary mb-4" size={32} />
            <h3 className="font-bold text-slate-900 mb-2">Academic Base</h3>
            <p className="text-sm text-slate-600">Mahasiswa Komputerisasi Akuntansi yang hobby mencoba hal baru khususnya penerapan akuntansi dalam sistem informasi.</p>
          </div>
          
          <div className="p-6 bg-slate-50 rounded-xl border border-slate-100 hover:shadow-md transition-shadow">
            <Target className="text-blue-600 mb-4" size={32} />
            <h3 className="font-bold text-slate-900 mb-2">Focus</h3>
            <p className="text-sm text-slate-600">Implementasi Logika Akuntansi dalam ERP & solusi teknis.</p>
          </div>

          <div className="p-6 bg-slate-50 rounded-xl border border-slate-100 hover:shadow-md transition-shadow">
            <Coffee className="text-orange-500 mb-4" size={32} />
            <h3 className="font-bold text-slate-900 mb-2">Career Objective</h3>
            <p className="text-sm text-slate-600">Memulai karier sebagai Junior ERP Consultant atau System Analyst, membantu perusahaan bertransformasi digital secara efisien.</p>
          </div>
        </div>

        <div className="mt-20 border-t border-slate-100"></div>
        <Contact />
      </div>
    </section>
  );
};

export default About;