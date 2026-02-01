import { ArrowUpRight, FolderGit2 } from 'lucide-react';

// Tambahkan prop "onClick"
const ProjectCard = ({ project, onClick }) => {
  return (
    <div className="group relative bg-white rounded-2xl overflow-hidden border border-slate-200 hover:border-blue-500/50 hover:shadow-xl transition-all duration-300 flex flex-col h-full">
      
      {/* Bagian Gambar */}
      <div className="h-48 w-full bg-slate-100 flex items-center justify-center relative overflow-hidden">
        {project.image ? (
          <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
        ) : (
          <FolderGit2 className="text-slate-300 w-16 h-16" />
        )}
      </div>

      {/* Bagian Konten */}
      <div className="p-6 flex flex-col flex-grow">
        <div className="text-xs font-bold text-secondary uppercase tracking-wider mb-2">
          {project.category}
        </div>
        
        <h3 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-primary transition-colors">
          {project.title}
        </h3>
        
        <p className="text-slate-600 text-sm leading-relaxed mb-6 line-clamp-3">
          {project.description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-6 mt-auto">
          {project.techStack.map((tech, index) => (
            <span key={index} className="text-xs font-medium px-2 py-1 bg-slate-100 text-slate-600 rounded-md">
              {tech}
            </span>
          ))}
        </div>

        {/* Tombol Action */}
        <button 
          onClick={() => onClick(project)} // Panggil fungsi saat diklik
          className="inline-flex items-center gap-2 text-sm font-bold text-primary hover:text-blue-700 transition-colors mt-2"
        >
          Lihat Detail Case Study <ArrowUpRight size={16} />
        </button>
      </div>
    </div>
  );
};

export default ProjectCard;