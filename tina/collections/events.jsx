import sectors from '../options/sectors'
import subsectors from '../options/subsectors'

const events = {
  label: 'Events',
  name: 'events',
  path: '_events',
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
      label: 'Title',
      required: true
    },
    {
      type: 'datetime',
      name: 'date',
      label: 'Date',
      required: true
    },
    {
      type: 'string',
      name: 'tags',
      label: 'Tags',
      list: true,
      ui: {
        component: 'tags'
      }
    },
    {
      type: 'string',
      name: 'excerpt',
      label: 'Excerpt',
      ui: {
        component: 'textarea'
      }
    },
    {
      type: 'string',
      name: 'sectors',
      label: 'Sectors',
      options: sectors
    },
    {
      type: 'string',
      name: 'subsectors',
      label: 'Subsectors',
      options: subsectors
    },
    {
      type: 'boolean',
      name: 'is_featured',
      label: 'Is Featured'
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
    },
    {
      type: 'object',
      name: 'details',
      label: 'Details',
      list: true,
      fields: [
        {
          type: 'string',
          name: 'name',
          label: 'Name'
        },
        {
          type: 'string',
          name: 'url',
          label: 'Url'
        }
      ]
    },
    {
      type: 'boolean',
      name: 'is_analysis',
      label: 'Is Analysis'
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
                defaultValue="events"
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
                defaultValue="events"
              />
            </div>
          )
        }
      }
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
export default events
