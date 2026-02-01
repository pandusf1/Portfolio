import { CheckCircle2, Calculator, Code2, Database, LayoutTemplate } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Functional & Accounting",
      icon: <Calculator className="w-6 h-6 text-blue-600" />,
      description: "Pemahaman mendalam tentang alur bisnis dan standar akuntansi (PSAK).",
      skills: [
        "Financial Reporting (Neraca/Laba Rugi)",
        "Cost Accounting (HPP & Overhead)",
        "Bank Reconciliation",
        "Tax Configuration (PPN/PPh)",
        "Inventory Valuation (FIFO/Avg)",
        "Fixed Asset Management"
      ]
    },
    {
      title: "Technical & ERP Implementation",
      icon: <Database className="w-6 h-6 text-teal-600" />,
      description: "Keahlian teknis dalam konfigurasi sistem dan manajemen data.",
      skills: [
        "Odoo 16/17 (Accounting, Sales, Inv, Mfg)",
        "Data Migration (Excel to Odoo)",
        "User Access Rights Management",
        "React.js & Frontend Basic",
        "Python Scripting (Automation)",
        "PostgreSQL (Basic Query)"
      ]
    }
  ];

  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Technical Proficiency
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Kombinasi pemahaman akuntansi yang kuat dengan kemampuan teknis untuk menerjemahkan kebutuhan bisnis ke dalam sistem.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 hover:shadow-md transition-shadow">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-slate-100 rounded-lg">
                  {category.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900">{category.title}</h3>
                  <p className="text-sm text-slate-500 mt-1">{category.description}</p>
                </div>
              </div>
              
              <div className="space-y-3">
                {category.skills.map((skill, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <CheckCircle2 size={18} className="text-secondary shrink-0" />
                    <span className="text-slate-700 font-medium">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bagian Tools/Logo (Opsional - Biar keren) */}
        <div className="mt-16 pt-8 border-t border-slate-200">
           <p className="text-center text-sm font-semibold text-slate-400 uppercase tracking-wider mb-6">
             Tools I Use Daily
           </p>
           <div className="flex flex-wrap justify-center gap-8 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
             {/* Logo Teks Sederhana */}
             <span className="text-2xl font-bold text-slate-600">Odoo</span>
             <span className="text-2xl font-bold text-slate-600">Excel</span>
             <span className="text-2xl font-bold text-slate-600">VS Code</span>
             <span className="text-2xl font-bold text-slate-600">AI</span>
             <span className="text-2xl font-bold text-slate-600">GitHub</span>
           </div>
        </div>

      </div>
    </section>
  );
};

export default Skills;