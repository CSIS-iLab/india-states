import post_types from '../options/post_types'
import sectors from '../options/sectors'
import states from '../options/states'
import subsectors from '../options/subsectors'

const analysis = {
  label: 'All Analysis',
  name: 'analysis',
  path: '_analysis',
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
      placeholder: 'Excerpt of the document'
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
      name: 'post_types',
      label: 'Post Types',
      options: post_types,
      description:
        'Select the type of post (eg, Partnership Matrices, Reports, India States Weekly, etc.)'
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
      type: 'string',
      name: 'author',
      label: 'Author',
      component: 'select',
      options: [
        'Sidhanta Mehra',
        'Sarah Watson',
        'Natalie Tecimer',
        'Aman Thakker',
        'Kartikeya Singh',
        'Afeena Ashfaque',
        'Sharmila Bellur',
        'Sarah Ladislaw',
        'Jane Nakano',
        'Richard M. Rossow',
        'Neelima Jain'
      ]
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
                defaultValue="analysis"
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
                defaultValue="analysis"
              />
            </div>
          )
        }
      }
    }
  ]
}
export default analysis
