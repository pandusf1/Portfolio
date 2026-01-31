import { useEffect, useState } from 'react';
import ProjectCard from './ProjectCard';
import { client, urlFor } from '../client'; // Import jembatan tadi

const FeaturedProjects = () => {
  const [projects, setProjects] = useState([]); // Tempat nyimpen data

  useEffect(() => {
    // Query bahasa GROQ (mirip SQL tapi buat Sanity)
    // Artinya: Ambil semua dokumen tipe 'project'
    const query = '*[_type == "project"]';

    client.fetch(query)
      .then((data) => {
        setProjects(data); // Simpan data ke state
      })
      .catch(console.error);
  }, []);

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Selected Projects (Live Data)
            </h2>
            <p className="text-slate-600 max-w-xl">
              Project di bawah ini diambil langsung dari Sanity CMS.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((item) => (
            // Kita perlu sesuaikan props-nya sedikit karena format data Sanity beda dikit
            <ProjectCard 
              key={item._id} 
              project={{
                title: item.title,
                category: item.category,
                description: item.description,
                techStack: item.techStack || [], // Jaga-jaga kalau kosong
                image: item.image ? urlFor(item.image).url() : null // Konversi gambar
              }} 
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default FeaturedProjects;