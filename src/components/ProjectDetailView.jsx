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
    <div className="py-8 text-center">
      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto"></div>
      <p className="mt-2 text-xs text-slate-500">Memuat...</p>
    </div>
  );

  if (!project) return null;

  const allImages = [];
  if (project.image) allImages.push(project.image);
  if (project.gallery) allImages.push(...project.gallery);

  const myPortableTextComponents = {
    block: {
    normal: ({children}) => <p className="mb-4 text-slate-600 leading-relaxed">{children}</p>,
    h1: ({children}) => <h1 className="text-2xl font-bold mb-4 mt-6 text-slate-800">{children}</h1>,
    h2: ({children}) => <h2 className="text-xl font-bold mb-3 mt-6 text-slate-800">{children}</h2>,
    h3: ({children}) => <h2 className="text-lg font-bold mb-1 mt-6 text-slate-800">{children}</h2>,
  },
  list: {
    bullet: ({children}) => <ul className="list-disc ml-5 mb-4 space-y-2 text-slate-600">{children}</ul>,
    number: ({children}) => <ol className="list-decimal ml-5 mb-4 space-y-2 text-slate-600">{children}</ol>,
  },
  listItem: {
    bullet: ({children}) => <li>{children}</li>,
  },
    marks: {
      strong: ({children}) => <strong className="font-bold text-slate-800">{children}</strong>,
    },
  };

  return (
    <>
      {/* CSS Khusus untuk Scrollbar Tipis */}
      <style>{`
        .thin-scrollbar::-webkit-scrollbar {
          height: 4px; /* Ukuran scrollbar sangat kecil */
        }
        .thin-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .thin-scrollbar::-webkit-scrollbar-thumb {
          background-color: #e2e8f0; /* slate-200 */
          border-radius: 10px;
        }
        .thin-scrollbar::-webkit-scrollbar-thumb:hover {
          background-color: #cbd5e1; /* slate-300 */
        }
      `}</style>

      {/* --- LIGHTBOX (Zoom Gambar) --- */}
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
      <div className="bg-white rounded-xl shadow-lg border border-slate-100 overflow-hidden animate-fade-in-up relative mt-4">
        <button 
          onClick={onClose}
          className="absolute top-2 right-2 z-20 bg-white/90 hover:bg-red-50 text-slate-400 hover:text-red-500 p-1 rounded-full shadow-sm transition-all border border-slate-200"
        >
          <X size={18} />
        </button>

        {/* --- BAGIAN GALERI --- */}
        <div className="bg-slate-50/50 pt-3 pb-1 border-b border-slate-200">
          <div className="px-5 mb-1 flex items-center gap-1">
             <Maximize2 size={10} className="text-slate-400"/>
             <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Gallery</span>
          </div>

          <div className="thin-scrollbar flex overflow-x-auto snap-x snap-mandatory gap-3 px-5 pb-3" style={{ scrollBehavior: 'smooth' }}>
            {allImages.length > 0 ? (
              allImages.map((img, index) => (
                <div 
                  key={index} 
                  className="snap-center snap-always flex-shrink-0 cursor-zoom-in relative group"
                  onClick={() => setSelectedImage(img)}
                >
                  <img 
                    src={urlFor(img).height(200).url()} 
                    alt={`Screenshot ${index + 1}`} 
                    className="h-32 md:h-48 w-auto object-cover rounded shadow-sm border border-slate-200 group-hover:brightness-90 transition-all"
                  />
                </div>
              ))
            ) : (
              <div className="h-20 w-full flex items-center justify-center text-xs text-slate-400 italic bg-slate-100 rounded">
                Tidak ada gambar
              </div>
            )}
          </div>
        </div>

        {/* KONTEN TEXT */}
        <div className="p-5 md:p-6"> 
          <div className="flex flex-col md:flex-row justify-between items-start gap-3 mb-4">
            <div>
               <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-1 leading-tight">{project.title}</h2>
               <div className="inline-block bg-blue-50 text-blue-700 px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider border border-blue-100">
                 {project.category}
               </div>
            </div>

            {project.liveUrl && (
              <a 
                href={project.liveUrl} 
                target="_blank" 
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 bg-green-600 hover:bg-green-700 text-white px-3 py-1.5 rounded-md font-bold shadow-sm text-xs transition-all"
              >
                <Globe size={14} />
                Visit Live
                <ExternalLink size={12} />
              </a>
            )}
          </div>

          {/* Metadata Row */}
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-slate-500 text-xs mb-5 border-y border-slate-50 py-3 bg-slate-50/30 rounded px-2">
              <div className="flex items-center gap-1.5">
                  <User size={14} className="text-blue-500" />
                  <span className="font-semibold text-slate-700">User:</span>
                  {project.target ? project.target : '-'}
              </div>
              <div className="flex items-center gap-1.5">
                  <Calendar size={14} className="text-blue-500" />
                  <span className="font-semibold text-slate-700">Year:</span>
                  {project.year ? project.year: '-'}
              </div>
              <div className="flex items-center gap-1.5">
                  <Tag size={14} className="text-blue-500" />
                  <span className="font-semibold text-slate-700">Stack:</span> 
                  {Array.isArray(project.techStack) ? project.techStack.join(", ") : project.techStack || '-'}
              </div>
          </div>

          <div className="prose prose-sm prose-slate max-w-none text-slate-600 leading-relaxed text-sm">
             {project.content ? (
               <PortableText value={project.content} components={myPortableTextComponents} />
             ) : (
               <p className="italic text-black text-xs">Deskripsi detail proyek belum tersedia.</p>
             )}
          </div>
          
          <div className="mt-6 text-center pt-2">
              <button 
                  onClick={onClose}
                  className="text-slate-400 hover:text-red-500 font-medium transition-colors flex items-center gap-1.5 mx-auto text-xs"
              >
                  <X size={12}/> Tutup Detail
              </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectDetailView;