import sectors from '../options/sectors'
import states from '../options/states'
import subsectors from '../options/subsectors'

const allResources = {
  label: 'All Resources',
  name: 'allResources',
  path: '_resources',
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
      name: 'type',
      label: 'Type'
    },
    {
      type: 'string',
      name: 'title',
      label: 'Title'
    },
    {
      type: 'string',
      name: 'link',
      label: 'Link'
    },
    {
      type: 'string',
      name: 'author',
      label: 'Author'
    },
    {
      type: 'string',
      name: 'posted_on',
      ui: {
        component: () => {
          return (
            <div className="relative mb-5 last:mb-0">
              <label
                htmlFor="posted_on"
                className="block font-sans text-xs font-semibold text-gray-700 whitespace-normal mb-2"
              >
                Posted on
              </label>
              <input
                type="text"
                className="shadow-inner focus:shadow-outline focus:border-blue-500 focus:outline-none block text-base placeholder:text-gray-300 px-3 py-2 text-gray-600 w-full bg-white border border-gray-200 transition-all ease-out duration-150 focus:text-gray-900 rounded-md"
                name="posted_on"
                defaultValue="undefined"
              />
            </div>
          )
        }
      }
    },
    {
      type: 'string',
      name: 'summary',
      label: 'Summary',
      ui: {
        component: 'textarea'
      }
    },
    {
      type: 'string',
      name: 'states',
      label: 'States',
      options: states
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
                className="shadow-inner focus:shadow-outline focus:border-blue-500 focus:outline-none block text-base placeholder:text-gray-300 px-3 py-2 text-gray-600 w-full bg-white border border-gray-200 transition-all ease-out duration-150 focus:text-gray-900 rounded-md"
                name="content_type"
                defaultValue="resource"
              />
            </div>
          )
        }
      }
    }
  ]
}

export default allResources
