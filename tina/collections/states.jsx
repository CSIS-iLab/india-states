const states = {
  label: 'All States',
  name: 'states',
  path: '_states',
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
      type: 'string',
      name: 'title',
      label: 'Title'
    },
    {
      type: 'object',
      name: 'feature_images',
      label: 'Feature Images',
      fields: [
        {
          type: 'object',
          name: 'primary',
          label: 'Primary',
          fields: [
            {
              type: 'image',
              name: 'image',
              label: 'Image'
            },
            {
              type: 'string',
              name: 'credit',
              label: 'Credit'
            }
          ]
        },
        {
          type: 'object',
          name: 'secondary',
          label: 'Secondary',
          fields: [
            {
              type: 'image',
              name: 'image',
              label: 'Image'
            },
            {
              type: 'string',
              name: 'credit',
              label: 'Credit'
            }
          ]
        }
      ]
    },
    {
      type: 'string',
      name: 'size',
      label: 'Size'
    },
    {
      type: 'string',
      name: 'population',
      label: 'Population'
    },
    {
      type: 'string',
      name: 'party_affiliation',
      label: 'Party Affiliation'
    },
    {
      type: 'string',
      name: 'legislative_seats',
      label: 'Legislative Seats'
    },
    {
      type: 'string',
      name: 'rajya_seats',
      label: 'Rajya Seats'
    },
    {
      type: 'string',
      name: 'lok_seats',
      label: 'Lok Seats'
    },
    {
      type: 'string',
      name: 'gdp',
      label: 'GDP'
    },
    {
      type: 'rich-text',
      name: 'body',
      label: 'Body of Document',
      description: 'This is the markdown body',
      isBody: true
    },
    {
      type: 'string',
      name: 'content_type',
      ui: {
        component: () => {
          return (
            <div className="relative mb-5 last:mb-0 hidden">
              <label
                htmlFor="content_type"
                className="block font-sans text-xs font-semibold text-gray-700 whitespace-normal mb-2"
              >
                Content Type
              </label>
              <input
                type="text"
                className="shadow-inner focus:shadow-outline focus:border-blue-500 focus:outline-none block text-base placeholder:text-gray-300 px-3 py-2 text-gray-600 w-full bg-white border border-gray-200 transition-all ease-out duration-150 focus:text-gray-900 rounded-md  "
                name="content_type"
                defaultValue="states"
              />
            </div>
          )
        }
      }
    },
    {
      type: 'string',
      name: 'breadcrumbs',
      ui: {
        component: () => {
          return (
            <div className="relative mb-5 last:mb-0 hidden">
              <label
                htmlFor="breadcrumbs"
                className="block font-sans text-xs font-semibold text-gray-700 whitespace-normal mb-2"
              >
                Breadcrumbs
              </label>
              <input
                type="text"
                className="shadow-inner focus:shadow-outline focus:border-blue-500 focus:outline-none block text-base placeholder:text-gray-300 px-3 py-2 text-gray-600 w-full bg-white border border-gray-200 transition-all ease-out duration-150 focus:text-gray-900 rounded-md "
                name="breadcrumbs"
                defaultValue="states"
              />
            </div>
          )
        }
      }
    }
  ]
}

export default states
