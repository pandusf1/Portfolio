import ProjectCard from './ProjectCard';
import { projects } from '../data/projects'; // Import data dummy tadi

const FeaturedProjects = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        
        {/* Judul Section */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Selected Projects
            </h2>
            <p className="text-slate-600 max-w-xl">
              Beberapa simulasi implementasi ERP dan alat bantu teknis yang telah saya kerjakan untuk menyelesaikan masalah bisnis nyata.
            </p>
          </div>
          
          <a href="/projects" className="text-primary font-semibold hover:text-secondary transition-colors">
            Lihat Semua Proyek &rarr;
          </a>
        </div>

        {/* Grid Kartu Proyek */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((item) => (
            <ProjectCard key={item.id} project={item} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default FeaturedProjects;