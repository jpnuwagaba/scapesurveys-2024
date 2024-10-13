import { orderRankField, orderRankOrdering } from '@sanity/orderable-document-list';

export default {
  name: "service",
  title: "Services",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
    },
    {
      name: "serviceImage",
      title: "ServiceImg",
      type: "image",
    },
    {
      name: "serviceIcon",
      title: "ServiceIcon",
      type: "image",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "name",
        maxLength: 90,
      },
    },
    {
      name: "details",
      title: "Details",
      type: "array",
      of: [
        { type: "block",
          lists: [
            {title: 'Bullet', value: 'bullet'},
            {title: 'Number', value: 'number'},
            {title: 'Check', value: 'check'}
          ],
        }, 
      ],
    },
    orderRankField({ type: 'service' }) // Add orderRankField
  ],
  orderings: [orderRankOrdering], // Add orderRankOrdering
};