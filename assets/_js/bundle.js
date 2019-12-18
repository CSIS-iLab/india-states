import BackToTop from './backtotop'
import Breadcrumbs from './breadcrumbs'
import Homepage from './homepage'
import NationalGoals from './national-goals'
import Navigation from './navigation'
import Pagination from './pagination'
import PostListing from './post-listing'
import ShareIcons from './share-icons'
import ShowMoreMeta from './show-more-meta'
import SmoothScroll from './smooth-scroll'
import StatesLanding from './state-landing'
import StickyMenu from './sticky-menu'
import { SearchOverlay, Search } from './searchpage'

window.addEventListener('DOMContentLoaded', () => {
  BackToTop()
  Breadcrumbs()
  Homepage()
  NationalGoals()
  Navigation()
  Pagination()
  PostListing()
  ShareIcons()
  ShowMoreMeta()
  SmoothScroll()
  StatesLanding()
  StickyMenu()
  SearchOverlay()
  Search()
})
