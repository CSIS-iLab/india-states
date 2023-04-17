const articlesPage = {
  label: 'Article',
  name: 'articlesPage',
  path: 'pages',
  ui: {
    allowedActions: {
      create: false,
      delete: false
    }
  },
  match: {
    include: 'articles'
  },
  fields: [
    {
      type: 'string',
      name: 'title',
      label: 'Title'
    },
    {
      type: 'string',
      name: 'permalink',
      label: 'Permalink'
    },
    {
      type: 'string',
      name: 'excerpt',
      label: 'Excerpt',
      placeholder: 'Excerpt of the document'
    },
    {
      type: 'string',
      name: 'layout',
      label: 'Layout'
    },
    {
      type: 'boolean',
      name: 'extendedBreadcrumbs',
      label: 'Extended Breadcrumbs'
    },
    {
      type: 'rich-text',
      name: 'body',
      label: 'Body of Document',
      description: 'This is the markdown body',
      isBody: true
    }
  ]
}
export default articlesPage
