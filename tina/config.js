import { defineConfig } from 'tinacms'
import analysis from './collections/analysis'
import articles from './collections/articles'
import authors from './collections/authors'
import events from './collections/events'
import breadcrumbs from './collections/global/breadcrumbs'
import navigation from './collections/global/navigation'
import sectorIcons from './collections/global/sector-icons'
import national_goals from './collections/national_goals'
import about from './collections/pages/about'
import analysisPage from './collections/pages/analysis'
import articlesPage from './collections/pages/articles'
import homepage from './collections/pages/homepage'
import map from './collections/pages/map'
import nationalGoals from './collections/pages/national-goals'
import resourcesPages from './collections/pages/resources'
import sectorsPages from './collections/pages/sectors'
import statesPages from './collections/pages/states'
import post_types from './collections/post_types'
import resources from './collections/resources'
import sectors from './collections/sectors'
import states from './collections/states'
import subsectors from './collections/subsectors'
// import team from './collections/team'

// Your hosting provider likely exposes this as an environment variable
const branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || 'main'

export default defineConfig({
  branch,
  clientId: null, // Get this from tina.io
  token: null, // Get this from tina.io
  client: { skip: true },
  build: {
    outputFolder: 'admin',
    publicFolder: './'
  },
  media: {
    tina: {
      mediaRoot: 'assets/img',
      publicFolder: ''
    }
  },
  schema: {
    collections: [
      navigation,
      homepage,
      about,
      analysisPage,
      analysis,
      articlesPage,
      articles,
      authors,
      nationalGoals,
      national_goals,
      resourcesPages,
      resources,
      sectorsPages,
      sectors,
      subsectors,
      statesPages,
      states,
      events,
      post_types,
      map,
      breadcrumbs,
      sectorIcons
      // team
    ]
  }
})
