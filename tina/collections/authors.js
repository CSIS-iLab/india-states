const authors = {
  label: 'Authors',
  name: 'authors',
  path: '_authors',
  match: {
    include: '**/*'
  },
  ui: {
    filename: {
      slugify: values => {
        return `${values?.title
          ?.toLowerCase()
          .replace(/\s+/g, '-')
          .replace(/[^\w-]+/g, '')}`
      }
    }
  },
  fields: [
    {
      label: 'Draft',
      name: 'draft',
      type: 'boolean'
    },
    {
      type: 'string',
      name: 'title',
      label: 'Title'
    },
    {
      type: 'string',
      name: 'job_title',
      label: 'Job Title'
    },
    {
      type: 'image',
      name: 'image',
      label: 'Image'
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

export default authors
