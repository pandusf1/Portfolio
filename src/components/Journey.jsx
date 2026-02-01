import { useState } from 'react';
import { Briefcase, GraduationCap, Calendar } from 'lucide-react';

const Journey = () => {
  const [activeTab, setActiveTab] = useState('education'); // Default tab: Education

  // Data Dummy (Sesuaikan dengan CV aslimu nanti)
  const journeyData = {
    education: [
      {
        title: "STr Komputerisasi Akuntansi",
        place: "Politeknik Negeri Semarang",
        date: "2023 - 2027",
        description: "Lulus dengan predikat Cumlaude. Fokus skripsi pada Sistem Informasi Akuntansi."
      },
      {
        title: "Odoo Functional Certification",
        place: "Udemy / Official Odoo Partner",
        date: "2023 - Sekarang",
        description: "Mendalami modul Accounting, Inventory, dan Manufacturing untuk implementasi ERP."
      },
      {
        title: "SMA Jurusan IPS",
        place: "SMA Negeri 11 Semarang",
        date: "2020 - 2023",
        description: "Aktif dalam organisasi kepramukaan dan kegiatan luar sekolah."
      }
    ],
    experience: [
      {
        title: "Freelance Tax Assistant",
        place: "Kantor Konsultan Pajak ABC",
        date: "2021 - 2022",
        description: "Membantu pelaporan SPT Tahunan Badan dan Orang Pribadi."
      },
      {
        title: "Warehouse SPX",
        place: "Gudang Semarang DC",
        date: "Jan 2023 - Agust 2025",
        description: "Mengelola paket pelanggan dari masuk ke gudang hingga keluar."
      },
    ]
  };

  // Pilih data berdasarkan tab yang aktif
  const dataToShow = activeTab === 'education' ? journeyData.education : journeyData.experience;

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6 max-w-4xl">
        
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-2">Qualification</h2>
          <p className="text-slate-500">My Personal Journey</p>
        </div>

        {/* Tab Buttons (Pilihan Menu) */}
        <div className="flex justify-center gap-8 mb-12">
          <button 
            onClick={() => setActiveTab('education')}
            className={`flex items-center gap-2 text-xl font-semibold transition-colors ${
              activeTab === 'education' ? 'text-primary' : 'text-slate-400 hover:text-slate-600'
            }`}
          >
            <GraduationCap size={24} />
            Education
          </button>
          
          <button 
            onClick={() => setActiveTab('experience')}
            className={`flex items-center gap-2 text-xl font-semibold transition-colors ${
              activeTab === 'experience' ? 'text-primary' : 'text-slate-400 hover:text-slate-600'
            }`}
          >
            <Briefcase size={24} />
            Experience
          </button>
        </div>

        {/* Timeline Content */}
        <div className="relative">
          {/* Garis Tengah (Vertical Line) */}
          <div className="absolute left-0 md:left-1/2 w-0.5 h-full bg-slate-200 transform -translate-x-1/2 md:translate-x-0"></div>

          <div className="space-y-12">
            {dataToShow.map((item, index) => (
              <div key={index} className={`relative flex flex-col md:flex-row items-center justify-between ${
                // Logika zig-zag: Genap di kiri, Ganjil di kanan (untuk Desktop)
                index % 2 === 0 ? 'md:flex-row-reverse' : ''
              }`}>
                
                {/* Spacer untuk sisi kosong (biar seimbang kiri-kanan) */}
                <div className="hidden md:block w-5/12"></div>

                {/* Titik Tengah (Dot) */}
                <div className="absolute left-0 md:left-1/2 w-4 h-4 bg-primary rounded-full border-4 border-slate-100 transform -translate-x-[9px] md:-translate-x-1/2 z-10"></div>

                {/* Kartu Konten */}
                <div className="w-full md:w-5/12 pl-8 md:pl-0">
                  <h3 className="text-lg font-bold text-slate-800">{item.title}</h3>
                  <span className="text-sm text-slate-500 block mb-2">{item.place}</span>
                  <div className="flex items-center gap-2 text-xs text-slate-400 mb-3">
                    <Calendar size={14} />
                    {item.date}
                  </div>
                  {/* Tooltip/Deskripsi kecil (Opsional) */}
                  <p className="text-sm text-slate-600 leading-relaxed bg-slate-50 p-3 rounded-lg border border-slate-100">
                    {item.description}
                  </p>
                </div>

              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Journey;