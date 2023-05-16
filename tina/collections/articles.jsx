import sectors from '../options/sectors'
import states from '../options/states'
import subsectors from '../options/subsectors'

const articles = {
  label: 'All Articles',
  name: 'articles',
  path: '_posts',
  match: {
    include: '**/*'
  },
  ui: {
    filename: {
      readonly: false,
      slugify: values => {
        return `${values?.date?.substr(0, 10)}-${values?.title
          ?.toLowerCase()
          .replace(/\s+/g, '-')
          .replace(/[^\w\-]+/g, '')}`
      }
    }
  },
  fields: [
    {
      type: 'string',
      name: 'title',
      label: 'Title',
      required: true
    },
    {
      type: 'datetime',
      name: 'Date',
      label: 'Date',
      required: true
    },
    {
      type: 'string',
      name: 'sates',
      label: 'States',
      list: true,
      options: states
    },
    {
      type: 'string',
      name: 'sectors',
      label: 'Sectors',
      list: true,
      options: sectors
    },
    {
      type: 'string',
      name: 'subsectors',
      label: 'Subsectors',
      list: true,
      options: subsectors
    },
    {
      type: 'string',
      name: 'tags',
      label: 'Tags',
      list: true
    },
    {
      type: 'object',
      name: 'sources',
      label: 'Sources',
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
                defaultValue="articles"
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
                htmlFor="content_type"
                className="block font-sans text-xs font-semibold text-gray-700 whitespace-normal mb-2"
              >
                Breadcrumbs
              </label>
              <input
                type="text"
                className="shadow-inner focus:shadow-outline focus:border-blue-500 focus:outline-none block text-base placeholder:text-gray-300 px-3 py-2 text-gray-600 w-full bg-white border border-gray-200 transition-all ease-out duration-150 focus:text-gray-900 rounded-md "
                name="breadcrumbs"
                defaultValue="articles"
              />
            </div>
          )
        }
      }
    }
  ]
}

export default articles
