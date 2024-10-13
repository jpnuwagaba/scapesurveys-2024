export default {
  name: 'gallery',
  title: 'Gallery',
  type: 'document',
  fields: [
    {
      name: 'image',
      title: 'Image',
      type: 'image',
    },
    {
      name: 'project',
      title: 'Project',
      type: 'reference',
      to: [{type: 'project'}]
    },    
  ],
}