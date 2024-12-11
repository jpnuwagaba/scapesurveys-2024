import { orderRankField, orderRankOrdering } from '@sanity/orderable-document-list';

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
      title: 'Featured Image',
      type: 'image'
    },
    {
      name: 'client', 
      title: 'Client',
      type: 'string',
    },
    { 
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          {value: "engineering surveys", title: "Engineering Surveys"},
          {value: "3d laser scanning", title: "3D Laser Scanning"},
          {value: "uav lidar scanning and aerial mapping", title: "UAV Lidar Scanning & Aerial Mapping"},
          {value: "monitoring surveys", title: "Monitoring Surveys"},
          {value: "mining surveys", title: "Mining Surveys"},
          {value: "land development services", title: "Land Development Services"},
          {value: "cadastral surveys", title: "Cadastral Surveys"},
          {value: "gis and remote sensing", title: "GIS & Remote Sensing"},
          {value: "utility mapping", title: "Utility Mapping"},
          {value: "other", title: "Other"}
        ]
      }
    },
    {
      name: 'otherCategory',
      title: 'Other Category',
      type: 'string',
      hidden: ({ parent }: { parent: { category?: string } }) => parent?.category !== 'other'
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
      name: 'status',
      title: 'Status',
      type:'string',
      options: {
        list: [
          {value: "ongoing", title: "Ongoing"},
          {value: "completed", title: "Completed"}
        ]
      }
    },
    {
      name: 'startDate', 
      title: 'Start Date',
      type: 'date'
    },
    {
      name: 'endDate', 
      title: 'End Date',
      type: 'date'
    },
    {
      name: 'duration',
      title: 'Duration',
      type: 'string',
      readOnly: true, // Make this field read-only since it's computed
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
    {
      name: 'caseStudy',
      title: 'Project Case Study',
      type: 'file',
      options: {
        accept: '.pdf'
      }
    },
    {
      name: 'gallery',
      title: 'Gallery',
      type: 'array',
      of: [{ type: 'image' }],
      options: {
        layout: 'grid'
      }
    },
    {
      name: 'mapLink',
      title: 'Google Maps Pin Link',
      type: 'url'
    },
    orderRankField({ type: 'project' }) // Add orderRankField
  ],
  orderings: [orderRankOrdering], // Add orderRankOrdering
  preview: {
    select: {
      title: 'name',
      startDate: 'startDate',
      endDate: 'endDate'
    },
    prepare({ title }: any) {
      return {
        title: `${title}`
      };
    }
  }
};