const post_types = {
  label: 'Post Types',
  name: 'post_types',
  path: '_post-types',
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
      label: 'Post Type',
      required: true
    },
    {
      type: 'string',
      name: 'description',
      label: 'Description',
      ui: {
        component: 'textarea'
      }
    },
    {
      type: 'image',
      name: 'feature_image',
      label: 'Feature Image'
    },
    {
      type: 'string',
      name: 'feature_image_credit',
      label: 'Feature Image Credit'
    }
  ]
}

export default post_types
