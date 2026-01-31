// admin/schemaTypes/project.js

export default {
  name: 'project',
  title: 'My Projects',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Judul Project',
      type: 'string',
    },
    {
      name: 'category',
      title: 'Kategori',
      type: 'string',
      options: {
        list: [
          { title: 'Odoo ERP', value: 'Odoo ERP' },
          { title: 'Supply Chain', value: 'Supply Chain' },
          { title: 'Python Automation', value: 'Python Automation' },
          { title: 'Other', value: 'Other' },
        ],
      },
    },
    {
      name: 'image',
      title: 'Screenshot Project',
      type: 'image',
      options: {
        hotspot: true, // Supaya bisa atur titik tengah gambar
      },
    },
    {
      name: 'description',
      title: 'Deskripsi',
      type: 'text',
    },
    {
      name: 'techStack',
      title: 'Tech Stack / Tools',
      type: 'array',
      of: [{ type: 'string' }], // Bisa input banyak tool
      options: {
        layout: 'tags'
      }
    },
    {
      name: 'link',
      title: 'Link Demo / GitHub',
      type: 'url',
    },
  ],
}