import sectors from '../options/sectors'

const subsectors = {
  label: 'Subsectors',
  name: 'subsectors',
  path: '_subsectors',
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
      type: 'string',
      name: 'sectors',
      label: 'Sectors',
      options: sectors
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
                defaultValue="subsector"
              />
            </div>
          )
        }
      }
    }
  ]
}

export default subsectors
