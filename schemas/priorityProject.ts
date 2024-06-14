export default {
  name: 'priorityProject',
  title: 'Priority Project',
  type: 'document',
  fields: [
    {
      name: 'project',
      title: 'Project',
      type: 'reference',
      to: [{ type: 'project' }],
      validation: (Rule: { required: () => any }) => Rule.required(),
    },
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      readOnly: true,
      description:
        'This field is auto-generated based on the selected project and should not be filled manually.',
    },
    {
      name: 'summary',
      title: 'Summary',
      type: 'text',
    },
  ],
  preview: {
    select: {
      title: 'project.name',
    },
    prepare(selection: { title?: string }) {
      const { title } = selection;
      return {
        title: title || 'Unnamed Project',
      };
    },
  },
};
