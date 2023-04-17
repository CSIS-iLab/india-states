const team = {
  label: 'Team',
  name: 'team',
  path: '_data',
  format: 'yaml',
  ui: {
    allowedActions: {
      create: false,
      delete: false
    }
  },
  match: {
    include: 'team'
  },
  fields: [
    {
      type: 'object',
      name: 'Team',
      label: 'Team',
      list: true,
      fields: [
        {
          type: 'string',
          name: 'name',
          label: 'Name'
        },
        {
          type: 'string',
          name: 'title',
          label: 'Title'
        },
        {
          type: 'image',
          name: 'image',
          label: 'Image'
        },
        {
          type: 'boolean',
          name: 'current',
          label: 'Current?'
        }
      ]
    }
  ]
}

export default team
