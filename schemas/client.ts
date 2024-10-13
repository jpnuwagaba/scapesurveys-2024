import { orderRankField, orderRankOrdering } from '@sanity/orderable-document-list';

export default {
  name: 'client',
  title: 'Clients',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type:'string',
      description: 'Add name of the client',
    },
    {
      name: 'logo',
      title: 'Logo',
      type: 'image',
      description: 'Add logo of the client',
    },
    orderRankField({ type: 'client' }) // Add orderRankField
  ],
  orderings: [orderRankOrdering], // Add orderRankOrdering
}