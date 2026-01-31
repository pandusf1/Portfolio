import { ArrowUpRight, FolderGit2 } from 'lucide-react';

const ProjectCard = ({ project }) => {
  return (
    <div className="group relative bg-white rounded-2xl overflow-hidden border border-slate-200 hover:border-blue-500/50 hover:shadow-xl transition-all duration-300">
      
      {/* Bagian Gambar (Placeholder Warna dulu) */}
      <div className={`h-48 w-full ${project.image} flex items-center justify-center relative overflow-hidden`}>
        {/* Overlay effect saat hover */}
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all"></div>
        
        {/* Ikon folder sebagai pengganti gambar sementara */}
        <FolderGit2 className="text-white opacity-50 w-16 h-16 group-hover:scale-110 transition-transform duration-500" />
      </div>

      {/* Bagian Konten Teks */}
      <div className="p-6">
        <div className="text-xs font-bold text-secondary uppercase tracking-wider mb-2">
          {project.category}
        </div>
        
        <h3 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-primary transition-colors">
          {project.title}
        </h3>
        
        <p className="text-slate-600 text-sm leading-relaxed mb-6">
          {project.description}
        </p>

        {/* Tags Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.techStack.map((tech, index) => (
            <span key={index} className="text-xs font-medium px-2 py-1 bg-slate-100 text-slate-600 rounded-md">
              {tech}
            </span>
          ))}
        </div>

        {/* Link / Button */}
        <a href="#" className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-blue-600 transition-colors">
          Lihat Detail Case Study <ArrowUpRight size={16} />
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;