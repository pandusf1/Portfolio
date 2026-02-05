import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import ProjectCard from './ProjectCard';
import ProjectDetailView from './ProjectDetailView'; // Import komponen Detail
import { client, urlFor } from '../client';
import { ArrowRight } from 'lucide-react';

const FeaturedProjects = () => {
  const [projects, setProjects] = useState([]);
  
  // State untuk fitur Detail (sama seperti di halaman Projects)
  const [selectedSlug, setSelectedSlug] = useState(null);
  const detailSectionRef = useRef(null);

  useEffect(() => {
    const query = '*[_type == "project" && isFeatured == true] | order(_updatedAt desc)[0...4]{..., slug}';

    client.fetch(query)
      .then((data) => {
        setProjects(data);
      })
      .catch(console.error);
  }, []);

  // Fungsi Scroll & Buka Detail
  const handleViewDetail = (project) => {
    if (project.slug?.current) {
      setSelectedSlug(project.slug.current);
      setTimeout(() => {
        if (detailSectionRef.current) {
          detailSectionRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    } else {
      alert("Detail project belum tersedia (Slug kosong).");
    }
  };

  const handleCloseDetail = () => {
    setSelectedSlug(null);
  };

  return (
    <section className="pt-20 pb-10 bg-white">
      <div className="container mx-auto px-6">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Selected Projects
            </h2>
            <p className="text-slate-600 max-w-xl">
              Beberapa eksperimen project dan pengembangan sistem.
            </p>
          </div>
          
          {/* Tombol ke Halaman Semua Project */}
          <Link 
            to="/explorations" 
            className="hidden md:inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
          >
            Lihat Semua Project <ArrowRight size={20} />
          </Link>
        </div>

        {/* Grid Projects (UPDATED: 4 Kolom) */}
        {/* Perubahan ada di sini: lg:grid-cols-4 dan gap-6 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {projects.map((item) => (
            <ProjectCard 
              key={item._id} 
              project={{
                title: item.title,
                category: item.category,
                description: item.description,
                techStack: item.techStack || [], 
                image: item.image ? urlFor(item.image).url() : null,
                slug: item.slug // Pastikan slug dipassing
              }}
              // Sambungkan fungsi klik disini
              onClick={handleViewDetail} 
            />
          ))}
        </div>

        {/* --- AREA DETAIL PROJECT (Expandable) --- */}
        <div ref={detailSectionRef} className="scroll-mt-32"> 
          {selectedSlug && (
            <div className="animate-fade-in py-10 border-t border-slate-100">
                <div className="flex items-center gap-4 mb-8">
                    <div className="h-1 flex-grow bg-slate-100 rounded"></div>
                    <span className="text-slate-400 text-xs font-bold uppercase tracking-widest">Quick Preview</span>
                    <div className="h-1 flex-grow bg-slate-100 rounded"></div>
                </div>
                
                {/* Panggil Komponen Detail View */}
                <ProjectDetailView 
                  slug={selectedSlug} 
                  onClose={handleCloseDetail} 
                />
            </div>
          )}
        </div>

        {/* Tombol Mobile (View All) */}
        <div className="text-center md:hidden mt-8">
           <Link 
            to="/explorations" 
            className="inline-flex items-center gap-2 bg-slate-100 text-slate-700 px-6 py-3 rounded-xl font-semibold hover:bg-slate-200 transition-colors"
          >
            Lihat Semua Project <ArrowRight size={18} />
          </Link>
        </div>

      </div>
    </section>
  );
};

export default FeaturedProjects;