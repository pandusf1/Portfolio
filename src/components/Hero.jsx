import { Link } from 'react-router-dom';
import { ArrowRight, Database, GitMerge, Search, Terminal, FileText, Sparkles, Bot } from 'lucide-react'; 

const Hero = () => {
  return (
    <section className="relative bg-slate-50 pt-32 -mt-24 pb-20 lg:pt-48 lg:pb-10 overflow-hidden">
      <div className="container mx-auto px-6 pt-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          
          {/* --- KOLOM KIRI: NARASI --- */}
          <div className="w-full lg:w-1/2 space-y-6 z-10">
            <p className="text-slate-500 font-medium text-lg flex items-center gap-2 max-sm:pt-10 sm:pt-10 xl:-mt-16 xl:-mb-2">
              <span className="w-8 h-[2px] bg-blue-500 inline-block"></span>
              Hi, I'm <span className="text-slate-900 font-bold">Pandu Safrilio.</span>
            </p>

            <h1 className="text-3xl lg:text-5xl font-bold text-slate-900 leading-tight">
              Aspiring to Bridge <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Accounting Logic</span> & Technology.
            </h1>
            
            <div className="text-lg mb-2 text-slate-600 max-w-xl leading-relaxed space-y-4">
              <p>
                Sebagai mahasiswa Akuntansi, saya memiliki ketertarikan besar untuk memahami <b>bagaimana sistem ERP bekerja di balik layar</b>—bukan hanya pengguna, tapi juga perancang logika.
              </p>
              <p className="text-base border-l-4 border-blue-200 pl-4 italic text-slate-500">
                "Saya memanfaatkan teknologi & AI untuk membantu saya menerjemahkan logika akuntansi dalammembangun dan mengembangkan berbagai proyek teknologi, mulai dari sistem ERP hingga aplikasi finansial."
              </p>
            </div>

            <div className="flex gap-6 mt-2 border-t border-slate-200/60 py-2">
                <div className="flex items-start gap-3">
                    <div className="p-2 bg-blue-50 rounded-lg text-blue-600 mt-1">
                       <Terminal size={18} />
                    </div>
                    <div>
                        <span className="block font-bold text-slate-900">Tech Enthusiast</span>
                        <span className="text-xs text-slate-500">Tech Automation</span>
                    </div>
                </div>
                <div className="flex items-start gap-3">
                     <div className="p-2 bg-slate-900 text-white rounded-lg mt-1">
                       <GitMerge size={18} />
                    </div>
                    <div>
                        <span className="block font-bold text-slate-900">The Bridge</span>
                        <span className="text-xs text-slate-500">Finance x Tech</span>
                    </div>
                </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/projects" 
                className="inline-flex justify-center items-center gap-2 bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-slate-800 transition-all hover:translate-y-[-2px] shadow-lg shadow-blue-900/10"
              >
                Lihat Eksplorasi Saya
                <ArrowRight size={18} />
              </Link>
              
              <Link 
                to="/about" 
                className="inline-flex justify-center items-center gap-2 bg-white text-primary border border-slate-200 px-8 py-3 rounded-lg font-semibold hover:bg-slate-50 transition-all"
              >
                Tentang Saya
              </Link>
            </div>
            
          </div>

          {/* --- KOLOM KANAN: VISUAL --- */}
          <div className="w-full lg:w-1/2 relative flex justify-center py-10 lg:py-0">
            
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>

            <div className="relative w-full max-w-md aspect-square flex items-center justify-center">
              
              <div className="absolute top-0 right-0 w-3/4 bg-slate-800 rounded-xl shadow-2xl p-4 transform rotate-3 border border-slate-700 z-10 animate-float-slow">
                 {/* Header Window */}
                 <div className="flex items-center gap-2 mb-3 border-b border-slate-700 pb-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    <span className="text-xs text-slate-400 ml-2 font-mono">account_move.py</span>
                 </div>
                 {/* Code Snippet */}
                 <div className="space-y-2 font-mono text-[10px] sm:text-xs text-blue-300 leading-relaxed">
                    <p><span className="text-purple-400">def</span> <span className="text-yellow-300">action_post</span>(self):</p>
                    <p className="pl-4 text-slate-400"># Auto-generated by Logic</p>
                    <p className="pl-4"><span className="text-purple-400">if</span> self.state == <span className="text-green-300">'draft'</span>:</p>
                    <p className="pl-8">self.state = <span className="text-green-300">'posted'</span></p>
                    <p className="pl-8">self._create_journal_entry()</p>
                    <p className="pl-4"><span className="text-purple-400">return</span> True</p>
                 </div>

                 {/* AI Badge Kecil */}
                 <div className="absolute bottom-3 right-3 flex items-center gap-1 bg-slate-700/50 px-2 py-1 rounded text-[10px] text-teal-300 border border-slate-600">
                    <Sparkles size={10} /> AI Assisted
                 </div>
              </div>

              {/* 2. INVOICE RESULT */}
              <div className="absolute bottom-4 left-4 w-3/4 bg-white rounded-xl shadow-2xl p-5 transform -rotate-2 border border-slate-100 z-20 animate-float-delayed">
                  <div className="flex justify-between items-start mb-4">
                     <div className="flex items-center gap-2">
                        <div className="p-2 bg-green-100 rounded-lg text-green-600">
                           <FileText size={20} />
                        </div>
                        <div>
                           <h4 className="font-bold text-slate-800 text-sm">Vendor Bill</h4>
                           <p className="text-[10px] text-slate-500">INV/2024/001</p>
                        </div>
                     </div>
                     <span className="bg-green-100 text-green-700 text-[10px] font-bold px-2 py-1 rounded-full">
                        POSTED
                     </span>
                  </div>

                  {/* Data dummy */}
                  <div className="space-y-2">
                     <div className="flex justify-between text-xs text-slate-600">
                        <span>Total Untaxed</span>
                        <span>Rp 10.000.000</span>
                     </div>
                     <div className="flex justify-between text-xs font-bold text-slate-900 border-t border-slate-100 pt-2">
                        <span>Total</span>
                        <span>Rp 11.100.000</span>
                     </div>
                  </div>
              </div>

              {/* PENGHUBUNG */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-1 bg-gradient-to-r from-slate-600 to-green-400 opacity-20 -rotate-45 z-0 blur-sm"></div>
              
              {/* Ikon Bot */}
              <div className="absolute top-10 left-10 bg-white p-2 rounded-full shadow-lg border border-blue-100 text-blue-500 animate-bounce z-30">
                  <Bot size={20} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;