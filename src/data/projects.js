export const projects = [
  {
    id: 1,
    title: "Manufacturing Cost Analysis & Valuation",
    category: "Odoo ERP • Manufacturing",
    description: "Implementasi modul Manufaktur untuk menghitung HPP (COGS) otomatis. Mencakup konfigurasi Bill of Materials (BoM), Work Centers, dan pembebanan biaya Overhead pabrik ke dalam jurnal akuntansi.",
    techStack: ["Odoo 16", "Accounting", "Manufacturing", "Python"],
    image: "bg-blue-600", // Nanti diganti URL gambar asli
    featured: true
  },
  {
    id: 2,
    title: "Full-Cycle Trading with Landed Costs",
    category: "Odoo ERP • Supply Chain",
    description: "Sistem trading end-to-end untuk importir. Fitur unggulan: Perhitungan Landed Cost (Bea Masuk/Freight) yang otomatis terkapitalisasi ke nilai persediaan, serta manajemen Multi-currency (USD/IDR).",
    techStack: ["Odoo 16", "Purchase", "Inventory", "Landed Cost"],
    image: "bg-teal-600",
    featured: true
  },
  {
    id: 3,
    title: "Automated Stock Opname Script",
    category: "Python Automation",
    description: "Script Python eksternal untuk mempercepat proses Stock Opname. Membaca file Excel hasil scan barcode dan otomatis membuat adjustment inventory di database Odoo via XML-RPC.",
    techStack: ["Python", "Pandas", "XML-RPC", "Excel"],
    image: "bg-slate-700",
    featured: false
  }
];