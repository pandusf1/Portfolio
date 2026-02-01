// admin/schemaTypes/project.js

export default {
  name: 'project',
  title: 'My Projects',
  type: 'document',
  fields: [
    {
      name: 'isFeatured',
      title: 'Tampilkan di Home?',
      type: 'boolean', 
      initialValue: false, 
    },
    {
      name: 'title',
      title: 'Judul Project',
      type: 'string',
    },
    {
      name: 'year',
      title: 'Tahun Project',
      type: 'number',
    },
    {
      name: 'target',
      title: 'Target User',
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
        hotspot: true, 
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
      of: [{ type: 'string' }], 
      options: {
        layout: 'tags'
      }
    },
    {
      name: 'slug',
      title: 'Slug (URL Link)',
      type: 'slug',
      options: {
        source: 'title', 
        maxLength: 96,
      },
    },
    {
      name: 'gallery',
      title: 'Galeri Foto (Slide)',
      type: 'array',
      of: [{ type: 'image', options: { hotspot: true } }],
      options: {
        layout: 'grid',
      },
    },
    {
      name: 'liveUrl',
      title: 'Link Website (Live Demo)',
      type: 'url',
      description: 'Contoh: https://google.com (Kosongkan jika proyek offline)',
    },
    {
      name: 'content',
      title: 'Cerita Case Study',
      type: 'array',
      of: [{type: 'block'}], 
    },

  ],
}