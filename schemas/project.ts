import { differenceInDays, format } from 'date-fns';
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
      type: 'array', // Change to array type
      of: [{ type: 'string' }], // Specify that it contains strings
      options: {
        list: [
          {value: "cadastral surveys", title: "Cadastral Surveys"},
          {value: "engineering surveys", title: "Engineering Surveys"},
          {value: "gid surveying and consulting", title: "GIS Surveying & Consulting"},
          {value: "uav lidar scanning and aerial mapping", title: "UAV Lidar Scanning & Aerial Mapping"},
          {value: "utility mapping", title: "Utility Mapping"},
          {value: "3d laser scanning", title: "3D Laser Scanning"},
          {value: "land development services", title: "Land Development Services"}
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
    prepare({ title, startDate, endDate }: any) {
      let duration = '';
      if (startDate && endDate) {
        const start = new Date(startDate);
        const end = new Date(endDate);
        const days = differenceInDays(end, start);
        duration = `${days} days`;
      }
      return {
        title: `${title} (${duration})`
      };
    }
  }
};