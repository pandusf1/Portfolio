import { useState } from 'react';
import ProjectCard from '../components/ProjectCard';
import { projects } from '../data/projects'; // Import data dummy

const Projects = () => {
  // State untuk menyimpan kategori yang sedang dipilih
  const [activeCategory, setActiveCategory] = useState('All');

  // Daftar kategori untuk tombol filter
  const categories = ['All', 'Odoo ERP', 'Supply Chain', 'Python Automation'];

  // Logika penyaringan data
  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(item => item.category.includes(activeCategory.split(" ")[0])); 
    // ^ Trik simpel: filter berdasarkan kata pertama kategori (misal: "Odoo" dari "Odoo ERP")
    // Kamu bisa sesuaikan logika ini nanti kalau datanya makin kompleks.

  return (
    <section className="pt-32 pb-20 bg-slate-50 min-h-screen">
      <div className="container mx-auto px-6">
        
        {/* Header Halaman */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Portofolio & Studi Kasus</h1>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Kumpulan proyek implementasi ERP dan alat teknis yang telah saya kerjakan. 
            Gunakan filter di bawah untuk memilah berdasarkan kategori.
          </p>
        </div>

        {/* Tombol Filter Kategori */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-primary text-white shadow-lg scale-105' // Style kalau aktif
                  : 'bg-white text-slate-600 border border-slate-200 hover:border-secondary hover:text-secondary' // Style kalau tidak aktif
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Grid Hasil Proyek */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.length > 0 ? (
            filteredProjects.map((item) => (
              <ProjectCard key={item.id} project={item} />
            ))
          ) : (
            // Tampilan kalau tidak ada proyek di kategori tersebut
            <div className="col-span-full text-center py-20 text-slate-400">
              <p>Belum ada proyek di kategori ini.</p>
            </div>
          )}
        </div>

      </div>
    </section>
  );
};

export default Projects;