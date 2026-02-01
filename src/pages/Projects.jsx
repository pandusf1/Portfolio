import { useState, useEffect } from 'react';
import ProjectCard from '../components/ProjectCard';
import { client, urlFor } from '../client'; // 1. Import Client Sanity

const Projects = () => {
  // State untuk menyimpan data ASLI dari Sanity
  const [projects, setProjects] = useState([]); 
  // State untuk filter
  const [activeCategory, setActiveCategory] = useState('All');
  // State untuk loading (biar user tau lagi ambil data)
  const [isLoading, setIsLoading] = useState(true);

  // Daftar kategori untuk tombol filter (Harus sama dengan yang di Schema Sanity)
  const categories = ['All', 'Odoo ERP', 'Supply Chain', 'Other'];

  // 2. Ambil data saat halaman dibuka
  useEffect(() => {
    const query = '*[_type == "project"]'; // Ambil semua tipe 'project'

    client.fetch(query)
      .then((data) => {
        setProjects(data); // Simpan data ke state
        setIsLoading(false); // Matikan loading
      })
      .catch((err) => {
        console.error("Gagal ambil data:", err);
        setIsLoading(false);
      });
  }, []);

  // 3. Logika penyaringan data (Updated)
  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(item => {
        // Jaga-jaga kalau kategori kosong, biar gak error
        if (!item.category) return false;
        // Cek apakah kategori di Sanity mengandung kata kunci tombol
        return item.category.includes(activeCategory);
      });

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
                  ? 'bg-primary text-white shadow-lg scale-105' 
                  : 'bg-white text-slate-600 border border-slate-200 hover:border-secondary hover:text-secondary' 
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Kondisi Loading */}
        {isLoading ? (
          <div className="flex justify-center items-center py-20">
             <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
          </div>
        ) : (
          /* Grid Hasil Proyek */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.length > 0 ? (
              filteredProjects.map((item) => (
                <ProjectCard 
                  key={item._id} // Pakai _id dari Sanity
                  project={{
                    title: item.title,
                    category: item.category,
                    description: item.description,
                    techStack: item.techStack || [], // Default array kosong biar gak error
                    // Konversi gambar Sanity ke URL asli
                    image: item.image ? urlFor(item.image).url() : null 
                  }} 
                />
              ))
            ) : (
              // Tampilan kalau tidak ada proyek
              <div className="col-span-full text-center py-20 text-slate-400">
                <p>Belum ada proyek di kategori <span className="font-semibold text-slate-600">"{activeCategory}"</span>.</p>
              </div>
            )}
          </div>
        )}

      </div>
    </section>
  );
};

export default Projects;