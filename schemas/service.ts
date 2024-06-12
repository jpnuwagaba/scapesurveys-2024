export default {
  name: 'service',
  title: 'Services',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string'
    },
    {
      name: 'serviceImage',
      title: 'ServiceImg',
      type: 'image'
    },
    {
      name: 'serviceIcon',
      title: 'ServiceIcon',
      type: 'image'
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 90
      }
    },
    {
      name: 'details',
      title: 'Details',
      type: 'text'
    }
  ]
}