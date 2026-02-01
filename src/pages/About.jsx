import { BookOpen, Target, Coffee } from 'lucide-react';

const About = () => {
  return (
    <section className="pt-32 pb-20 bg-white">
      <div className="container mx-auto px-6 max-w-4xl">
        
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Tentang Saya</h1>
          <div className="h-1 w-20 bg-secondary rounded"></div>
        </div>

        {/* Konten Cerita */}
        <div className="space-y-8 text-lg text-slate-600 leading-relaxed">
          <p>
            Halo! Saya Pandu Safrilio Fadhil seorang lulusan STr Komputerisasi Akuntansi yang menemukan *passion* di dunia sistem informasi akuntansi, khususnya sistem ERP.
          </p>
          
          <p>
            Perjalanan saya dimulai ketika menyadari bahwa banyak masalah akuntansi di lapangan sebenarnya bukan karena manusianya, tapi karena sistem yang tidak terintegrasi. Sejak itu, saya mendalami <b>Odoo ERP</b> untuk menjembatani kesenjangan antara tim Keuangan dan Operasional.
          </p>

          <p>
             Saat ini, fokus utama saya adalah membantu bisnis melakukan digitalisasi pembukuan, mulai dari manajemen stok hingga pelaporan keuangan otomatis.
          </p>
        </div>

        {/* Kotak Visi/Misi */}
        <div className="grid md:grid-cols-3 gap-6 mt-16">
          <div className="p-6 bg-slate-50 rounded-xl border border-slate-100">
            <BookOpen className="text-secondary mb-4" size={32} />
            <h3 className="font-bold text-slate-900 mb-2">Background</h3>
            <p className="text-sm">Sarjana Akuntansi dengan pemahaman kuat tentang PSAK dan Perpajakan.</p>
          </div>
          
          <div className="p-6 bg-slate-50 rounded-xl border border-slate-100">
            <Target className="text-blue-600 mb-4" size={32} />
            <h3 className="font-bold text-slate-900 mb-2">Focus</h3>
            <p className="text-sm">Implementasi Odoo (Accounting, Inventory, Purchase, Sales) & Integrasi Data.</p>
          </div>

          <div className="p-6 bg-slate-50 rounded-xl border border-slate-100">
            <Coffee className="text-orange-500 mb-4" size={32} />
            <h3 className="font-bold text-slate-900 mb-2">Next Goal</h3>
            <p className="text-sm">Memperdalam SAP S/4HANA Finance & Python Scripting lanjutan.</p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;