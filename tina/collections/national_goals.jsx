import sectors from '../options/sectors'
import subsectors from '../options/subsectors'

const national_goals = {
  label: 'All National goals',
  name: 'national_goals',
  path: '_national-goals',
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
      type: 'string',
      name: 'subsectors',
      label: 'Subsectors',
      options: subsectors
    },
    {
      type: 'string',
      name: 'data_source',
      label: 'Data source'
    },
    {
      type: 'string',
      name: 'data_missing_message',
      label: 'Data Missing Message'
    },
    {
      type: 'object',
      name: 'map',
      label: 'Map',
      fields: [
        {
          type: 'string',
          name: 'title',
          label: 'Title'
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
          type: 'string',
          name: 'legend_title',
          label: 'Legend Title'
        },
        {
          type: 'string',
          name: 'value_suffix',
          label: 'Value Suffix'
        }
      ]
    },
    {
      type: 'object',
      name: 'progressbars',
      label: 'Progressbars',
      fields: [
        {
          type: 'string',
          name: 'title',
          label: 'Title'
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
          type: 'string',
          name: 'legend_title',
          label: 'Legend Title'
        },
        {
          type: 'string',
          name: 'value_suffix',
          label: 'Value Suffix'
        }
      ]
    },
    {
      type: 'string',
      name: 'state_text',
      label: 'State Text'
    },
    {
      type: 'datetime',
      name: 'last_updated_at',
      label: 'Last Updated At'
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
                defaultValue="national goal"
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
                className="shadow-inner focus:shadow-outline focus:border-blue-500 focus:outline-none block text-base placeholder:text-gray-300 px-3 py-2 text-gray-600 w-full bg-white border border-gray-200 transition-all ease-out duration-150 focus:text-gray-900 rounded-md  "
                name="breadcrumbs"
                defaultValue="goals"
              />
            </div>
          )
        }
      }
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
      type: 'rich-text',
      name: 'body',
      label: 'Body of Document',
      description: 'This is the markdown body',
      isBody: true
    }
  ]
}

export default national_goals
