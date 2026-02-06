import { ArrowUpRight, FolderGit2 } from 'lucide-react';

const ProjectCard = ({ project, onClick }) => {
  return (
    <div className="relative bg-white rounded-xl overflow-hidden border border-slate-200 hover:border-blue-500/50 hover:shadow-lg transition-all duration-300 flex flex-col h-full">
      
      <div className="h-40 w-full bg-slate-100 flex items-center justify-center relative overflow-hidden">
        {project.image ? (
          <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
        ) : (
          <FolderGit2 className="text-slate-300 w-12 h-12" />
        )}
      </div>

      <div className="p-5 flex flex-col flex-grow">
        {/* Kategori */}
        <div className="text-[10px] font-bold text-secondary uppercase tracking-wider mb-2">
          {project.category}
        </div>
        
        {/* Judul Font */}
        <h3 className="text-lg font-bold text-slate-800 mb-2 group-hover:text-primary transition-colors line-clamp-1">
          {project.title}
        </h3>
        
        {/* Deskripsi */}
        <p className="text-slate-600 text-xs leading-relaxed mb-4 line-clamp-2">
          {project.description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-1.5 mb-4 mt-auto">
          {(project.techStack || []).map((tech, index) => (
            <span key={index} className="text-[10px] font-medium px-2 py-1 bg-slate-100 text-slate-600 rounded">
              {tech}
            </span>
          ))}
        </div>

        {/* Tombol Action */}
        <button 
          onClick={() => onClick(project)} 
          className="inline-flex items-center gap-1.5 text-xs font-bold text-primary hover:text-blue-700 transition-colors mt-1"
        >
          Lihat Detail <ArrowUpRight size={14} />
        </button>
      </div>
    </div>
  );
};

export default ProjectCard;