export default {
  name: 'project',
  title: 'Projects',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string'
    },
    {
      name: 'image', 
      title: 'Image',
      type: 'image'
    },
    { 
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          {value: "cadastral surveying", title: "Cadastral Surveying"},
          {value: "engineering surveying", title: "Engineering Surveying"},
          {value: "gid surveying and consulting", title: "GIS Surveying & Consulting"},
          {value: "uav lidar scanning and aerial mapping", title: "UAV Lidar Scanning & Aerial Mapping"},
          {value: "utility mapping", title: "Utility Mapping"},
          {value: "3d laser scanning", title: "3D Laser Scanning "},
          {value: "land development", title: "Land Development Services"}
        ]
      }
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
      name: 'date', 
      title: 'Date',
      type: 'date'
    },
    {
      name: 'location',
      title: 'Location',
      type: 'string'
    },
    {
      name: 'details',
      title: 'Details',
      type: 'array',
      of: [{ type: 'block' }],
    },
  ]
} 
