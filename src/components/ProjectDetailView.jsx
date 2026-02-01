import { useEffect, useState } from 'react';
import { client, urlFor } from '../client';
import { PortableText } from '@portabletext/react';
import { X, Calendar, User, Tag, Globe, ExternalLink, Maximize2 } from 'lucide-react';

const ProjectDetailView = ({ slug, onClose }) => {
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    if (!slug) return;
    setLoading(true);
    const query = `*[_type == "project" && slug.current == "${slug}"][0]{
      ...,
      gallery[]
    }`;
    client.fetch(query)
      .then((data) => {
        setProject(data);
        setLoading(false);
      })
      .catch(console.error);
  }, [slug]);

  if (loading) return (
    <div className="py-12 text-center"> {/* Padding dikurangi */}
      <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-primary mx-auto"></div>
      <p className="mt-4 text-sm text-slate-500">Memuat detail...</p>
    </div>
  );

  if (!project) return null;

  const allImages = [];
  if (project.image) allImages.push(project.image);
  if (project.gallery) allImages.push(...project.gallery);

  return (
    <>
      {/* --- LIGHTBOX (Tetap sama) --- */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-[9999] bg-black/95 flex items-center justify-center p-4 backdrop-blur-sm cursor-zoom-out"
          onClick={() => setSelectedImage(null)}
        >
          <button className="absolute top-6 right-6 text-white bg-white/10 p-2 rounded-full hover:bg-white/20">
            <X size={24} />
          </button>
          <img 
            src={urlFor(selectedImage).url()} 
            alt="Fullsize Preview" 
            className="max-h-[90vh] max-w-[95vw] object-contain rounded-lg shadow-2xl animate-fade-in"
          />
        </div>
      )}

      {/* --- KONTEN DETAIL UTAMA --- */}
      <div className="bg-white rounded-2xl shadow-xl border border-slate-100 overflow-hidden animate-fade-in-up relative">
        
        <button 
          onClick={onClose}
          className="absolute top-3 right-3 z-20 bg-white/90 hover:bg-white text-slate-600 p-1.5 rounded-full shadow-sm transition-all border border-slate-200"
        >
          <X size={20} />
        </button>

        {/* --- BAGIAN GALERI (DIKECILKAN) --- */}
        <div className="bg-slate-50 pt-4 pb-2 border-b border-slate-200"> {/* Padding atas dikurangi */}
          <div className="flex overflow-x-auto snap-x snap-mandatory gap-3 px-6 pb-3 scrollbar-hide" style={{ scrollBehavior: 'smooth' }}>
            {allImages.length > 0 ? (
              allImages.map((img, index) => (
                <div 
                  key={index} 
                  className="snap-center flex-shrink-0 cursor-zoom-in relative group"
                  onClick={() => setSelectedImage(img)}
                >
                  {/* PERUBAHAN BESAR DI SINI: Tinggi gambar dikurangi */}
                  <img 
                    src={urlFor(img).height(300).url()} // Request ukuran lebih kecil ke Sanity
                    alt={`Screenshot ${index + 1}`} 
                    className="h-48 md:h-64 w-auto object-cover rounded-lg shadow-sm border border-slate-200 group-hover:brightness-90 transition-all"
                  />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="bg-black/50 text-white p-1.5 rounded-full backdrop-blur-sm">
                      <Maximize2 size={16} />
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="h-32 w-full flex items-center justify-center text-sm text-slate-400 italic bg-slate-100 rounded-lg">
                Tidak ada gambar
              </div>
            )}
          </div>
        </div>

        {/* --- KONTEN TEXT & TOMBOL (DIKECILKAN PADDINGNYA) --- */}
        <div className="p-6 md:p-8"> {/* Padding dikurangi dari p-8 md:p-12 */}
          
          <div className="flex flex-col md:flex-row justify-between items-start gap-4 mb-6">
            <div>
               {/* PERUBAHAN: Font size judul dikurangi */}
               <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2 leading-tight">{project.title}</h2>
               <span className="bg-blue-100 text-blue-800 px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider inline-block">
                 {project.category}
               </span>
            </div>

            {project.liveUrl && (
              <a 
                href={project.liveUrl} 
                target="_blank" 
                rel="noreferrer"
                className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg font-bold shadow-md text-sm transition-all hover:-translate-y-0.5"
              >
                <Globe size={16} />
                Visit Live Site
                <ExternalLink size={14} />
              </a>
            )}
          </div>

          {/* Metadata */}
          <div className="flex flex-wrap gap-4 text-slate-500 text-xs mb-6 border-y border-slate-100 py-4">
              <div className="flex items-center gap-1.5">
                  <User size={14} className="text-primary" />
                  <span className="font-semibold text-slate-700">Role:</span> ERP Implementer
              </div>
              <div className="flex items-center gap-1.5">
                  <Calendar size={14} className="text-primary" />
                  <span className="font-semibold text-slate-700">Year:</span> 2024
              </div>
              <div className="flex items-center gap-1.5">
                  <Tag size={14} className="text-primary" />
                  <span className="font-semibold text-slate-700">Stack:</span> 
                  {project.techStack?.join(", ") || "Odoo"}
              </div>
          </div>

          {/* Rich Text */}
          <div className="prose prose-sm md:prose-base prose-blue max-w-none text-slate-600">
             {project.content ? (
               <PortableText value={project.content} />
             ) : (
               <p className="italic text-slate-400 text-sm">Deskripsi detail proyek sedang disiapkan.</p>
             )}
          </div>
          
          <div className="mt-8 text-center border-t border-slate-100 pt-4">
              <button 
                  onClick={onClose}
                  className="text-slate-400 hover:text-red-500 font-semibold transition-colors flex items-center gap-2 mx-auto text-sm"
              >
                  <X size={14}/> Tutup Detail
              </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectDetailView;