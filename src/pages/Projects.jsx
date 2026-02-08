import { useState, useEffect, useRef } from 'react';
import { client, urlFor } from '../client';

// Pastikan import komponen sudah benar
import ProjectCard from '../components/ProjectCard';
import ProjectDetailView from '../components/ProjectDetailView'; 

const Projects = () => {
  const [projects, setProjects] = useState([]); 
  const [activeCategory, setActiveCategory] = useState('All');
  const [isLoading, setIsLoading] = useState(true);
  const [activeSlide, setActiveSlide] = useState(0);
  
  // State untuk menyimpan slug project yang sedang dibuka
  const [selectedSlug, setSelectedSlug] = useState(null);
  
  // Ref untuk target scroll
  const detailSectionRef = useRef(null);

  const categories = ['All', 'ERP', 'Other'];

  // Fungsi untuk mendeteksi scroll
  const handleScroll = (e) => {
    if (!e.target.firstChild) return;
    const scrollLeft = e.target.scrollLeft;
    const cardWidth = e.target.firstChild.offsetWidth;
    // Hitung index berdasarkan posisi scroll
    const newIndex = Math.round(scrollLeft / cardWidth);
    setActiveSlide(newIndex);
  };

  useEffect(() => {
    // Query data project
    const query = '*[_type == "project"]{_id, title, category, description, techStack, image, slug, content}'; 

    client.fetch(query)
      .then((data) => {
        setProjects(data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.error("Gagal ambil data:", err);
        setIsLoading(false);
      });
  }, []);

  const handleViewDetail = (project) => {
    if (project.slug?.current) {
      setSelectedSlug(project.slug.current);
      setTimeout(() => {
        if (detailSectionRef.current) {
          detailSectionRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    } else {
      alert("Project ini tidak memiliki Slug (URL). Mohon generate di Sanity Studio.");
    }
  };

  const handleCloseDetail = () => {
    setSelectedSlug(null);
  };

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(item => item.category && item.category.includes(activeCategory));

  return (
    <section className="pt-32 pb-20 bg-slate-50 min-h-screen">
      <div className="container mx-auto px-6">
        
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Eksplorasi Project</h1>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Masa depan milik mereka yang tetap penasaran..
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => { setActiveCategory(category); setSelectedSlug(null); }}
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

        {/* Grid Project Cards */}
        {isLoading ? (
          <div className="flex justify-center items-center py-20">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
          </div>
        ) : (
          <div 
            onScroll={handleScroll} 
            className="flex -mx-6 md:mx-0 md:grid md:grid-cols-4 gap-0 md:gap-6 overflow-x-auto snap-x snap-mandatory pb-8 md:pb-0 scrollbar-hide"
            style={{ scrollBehavior: 'smooth' }}
          >
            {filteredProjects.map((item, index) => (
              <div 
                key={item._id || index}
                className="w-full md:w-auto flex-none snap-center snap-always px-6 md:px-0"
              >
                <ProjectCard 
                  project={{...item, techStack: item.techStack || [], image: item.image ? urlFor(item.image).url() : null}} 
                  onClick={handleViewDetail} 
                  
                />
              </div>
            ))}
          </div>
        )}
        {!isLoading && (
          <div className="flex justify-center gap-2 mt-4 md:hidden">
            {filteredProjects.map((_, index) => (
              <div
                key={index}
                className={`h-2 rounded-full transition-all duration-300 ${
                  activeSlide === index 
                    ? "w-6 bg-blue-600" 
                    : "w-2 bg-slate-300"
                }`}
              />
            ))}
          </div>
        )}

        {/* --- DETAIL PROJECT SECTION --- */}
        <div ref={detailSectionRef} className="scroll-mt-32"> 
          {selectedSlug && (
            <div className="animate-fade-in py-10 border-t border-slate-200">
                <div className="flex items-center gap-4 mb-8">
                    <div className="h-1 flex-grow bg-slate-200 rounded"></div>
                    <span className="text-slate-400 text-sm font-semibold uppercase tracking-widest">Detail Project</span>
                    <div className="h-1 flex-grow bg-slate-200 rounded"></div>
                </div>
                
                <ProjectDetailView 
                  slug={selectedSlug} 
                  onClose={handleCloseDetail} 
                />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Projects;