const breadcrumbs = {
  label: 'Breadcrumbs',
  name: 'breadcrumbs',
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
    include: 'breadcrumbs'
  },
  fields: [
    {
      type: 'object',
      name: 'states',
      label: 'States',
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
        }
      ]
    },
    {
      type: 'object',
      name: 'sectors',
      label: 'Sectors',
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
        }
      ]
    },
    {
      type: 'object',
      name: 'goals',
      label: 'Goals',
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
        }
      ]
    },
    {
      type: 'object',
      name: 'analysis',
      label: 'Analysis',
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
        }
      ]
    },
    {
      type: 'object',
      name: 'articles',
      label: 'Articles',
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
        }
      ]
    }
  ]
}

export default breadcrumbs
