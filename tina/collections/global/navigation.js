const navigation = {
  label: 'Navigation',
  name: 'main',
  path: '_data',
  format: 'yaml',
  ui: {
    global: true,
    allowedActions: {
      create: false,
      delete: false
    }
  },
  match: {
    include: 'navigation'
  },
  fields: [
    {
      type: 'object',
      name: 'main',
      label: 'Main',
      list: true,
      fields: [
        {
          type: 'string',
          name: 'title',
          label: 'Title'
        },
        {
          type: 'string',
          name: 'href',
          label: 'href'
        },
        {
          type: 'string',
          name: 'class',
          label: 'Class'
        },
        {
          type: 'boolean',
          name: 'dropdown',
          label: 'Dropdown'
        },
        {
          type: 'string',
          name: 'dropdownContent',
          label: 'Dropdown Content'
        }
      ]
    }
  ]
}

export default navigation
