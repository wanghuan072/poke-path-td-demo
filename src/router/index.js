import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AllPokemonView from '../views/AllPokemonView.vue'
import RoutesView from '../views/RoutesView.vue'
import EnemyDatabaseView from '../views/EnemyDatabaseView.vue'
import ToolsView from '../views/tools/ToolsView.vue'
import DpsCalculatorView from '../views/tools/DpsCalculatorView.vue'
import PokemonCategoriesView from '../views/tools/PokemonCategoriesView.vue'
import EnemyCounterView from '../views/tools/EnemyCounterView.vue'
import RouteStrategyView from '../views/tools/RouteStrategyView.vue'
import RouteDetailView from '../views/RouteDetailView.vue'
import TierListView from '../views/TierListView.vue'
import WikiView from '../views/WikiView.vue'

// Legal Pages
import AboutUsView from '../views/legal/AboutUsView.vue'
import ContactUsView from '../views/legal/ContactUsView.vue'
import CopyrightView from '../views/legal/CopyrightView.vue'
import PrivacyPolicyView from '../views/legal/PrivacyPolicyView.vue'
import TermsOfServiceView from '../views/legal/TermsOfServiceView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: {
        title: 'PokéPath TD Guide & Wiki | Best Strategies, Towers & Maps',
        description: 'The ultimate PokéPath TD resource. Find comprehensive guides, tier lists, DPS calculators, and winning strategies for every map and enemy in the latest update.',
        keywords: 'PokéPath TD, PokéPath TD Wiki, PokéPath TD Strategy, Pokemon Tower Defense Guide',
        image: '/images/logo.webp'
      }
    },
    {
      path: '/all-pokemon',
      name: 'all-pokemon',
      component: AllPokemonView,
      meta: {
        title: 'All Pokemon Database & Stats List | PokéPath TD Guide',
        description: 'Browse the complete PokéPath TD Pokedex. Check base stats, hidden abilities, and evolution paths for every tower to optimize your defense and win every battle.',
        keywords: 'Pokémon Database, PokéPath TD Pokémon, Pokémon Stats, Evolution Guide',
        image: '/images/logo.webp'
      }
    },
    {
      path: '/map-router',
      name: 'map-router',
      component: RoutesView,
      meta: {
        title: 'Route Strategies - Map Guide | PokéPath TD Strategy Guide',
        description: 'Detailed route strategies for all PokéPath TD maps. Terrain analysis, recommended teams, and optimal gameplay tactics.',
        keywords: 'Route Strategy, Map Guide, Terrain Analysis, Team Composition',
        image: '/images/logo.webp'
      }
    },
    {
      path: '/map-router/:id',
      name: 'route-detail',
      component: RouteDetailView,
      meta: {
        title: 'Route Detail - PokéPath TD Strategy Guide',
        description: 'Detailed terrain analysis, team recommendations, and strategies for this route.',
        keywords: 'Route Detail, Terrain Analysis, Team Composition, Strategy Guide',
        image: '/images/logo.webp'
      }
    },
    {
      path: '/enemies',
      name: 'enemies',
      component: EnemyDatabaseView,
      meta: {
        title: 'Enemy Database & Boss Stats Guide | PokéPath TD Wiki',
        description: 'The complete guide to PokéPath TD enemies. Check boss HP, speed, and immunities to build the perfect defense for every wave and challenging level in the game.',
        keywords: 'Enemy Database, Counter Strategies, Enemy Stats, Boss Fights',
        image: '/images/logo.webp'
      }
    },
    {
      path: '/tools',
      name: 'tools',
      component: ToolsView,
      meta: {
        title: 'PokéPath TD Strategy Tools | DPS Calculator & Counters',
        description: 'Access all PokéPath TD utility tools in one place. Use our professional DPS calculators, enemy counter guides, and team builders to gain a competitive edge.',
        keywords: 'DPS Calculator, Team Builder, Strategy Tools, Game Calculators',
        image: '/images/logo.webp'
      }
    },
    {
      path: '/tools/dps-calculator',
      name: 'dps-calculator',
      component: DpsCalculatorView,
      meta: {
        title: 'DPS Calculator & Damage Optimizer Tool | PokéPath TD',
        description: 'Accurately calculate tower damage with our PokéPath TD DPS calculator. Compare levels, natures, and items to find the most efficient damage setup for your team.',
        keywords: 'DPS Calculator, Damage Calculation, Pokémon Stats, Team Building',
        image: '/images/logo.webp'
      }
    },
    {
      path: '/tools/pokemon-categories',
      name: 'pokemon-categories',
      component: PokemonCategoriesView,
      meta: {
        title: 'Pokemon Categories & Type Chart | PokéPath TD Database',
        description: 'Explore all PokéPath TD Pokemon categories. Filter towers by element types, rarities, and special roles like Shiny or Legendary to build your perfect team.',
        keywords: 'Pokémon Categories, Tactical Guide, Status Effects, Damage Types',
        image: '/images/logo.webp'
      }
    },
    {
      path: '/tools/enemy-counter',
      name: 'enemy-counter',
      component: EnemyCounterView,
      meta: {
        title: 'Enemy Counter Tool & Matchup Guide | PokéPath TD',
        description: 'Find the best Pokemon to defeat any boss. Use our PokéPath TD counter tool to beat tough waves and legendary enemies with the perfect elemental type matchups.',
        keywords: 'Enemy Counter, Best Matchups, Counter Strategies, Enemy Analysis',
        image: '/images/logo.webp'
      }
    },
    {
      path: '/tools/route-strategy',
      name: 'route-strategy',
      component: RouteStrategyView,
      meta: {
        title: 'Route Strategy & Map Walkthroughs | PokéPath TD Guide',
        description: 'Master every wave with our PokéPath TD route strategies. Find expert tower placement guides, tactics, and walkthroughs to conquer even the hardest maps.',
        keywords: 'Route Strategy, Advanced Tactics, Terrain Analysis, Enemy Positioning',
        image: '/images/logo.webp'
      }
    },
    {
      path: '/tier-list',
      name: 'tier-list',
      component: TierListView,
      meta: {
        title: 'Best Pokemon Tier List (2026 Meta) | PokéPath TD Rank',
        description: 'Discover the best towers in PokéPath TD today. Our updated 2026 tier list ranks every Pokemon by DPS and utility to help you build the ultimate winning team.',
        keywords: 'PokéPath TD tier list, best pokemon, tower rankings, meta pokemon 2026, PokéPath ranking',
        image: '/images/logo.webp'
      }
    },
    {
      path: '/wiki',
      name: 'wiki',
      component: WikiView,
      meta: {
        title: 'Game Wiki & Core Mechanics Guide | PokéPath TD Strategy',
        description: 'Master the core mechanics with our PokéPath TD Wiki. Find detailed guides on damage types, status effects, and held items to improve your gameplay strategy.',
        keywords: 'Wiki, Game Guide, FAQ, Tips, Advanced Strategies',
        image: '/images/logo.webp'
      }
    },
    // Legal Pages
    {
      path: '/about-us',
      name: 'about-us',
      component: AboutUsView,
      meta: {
        title: 'About Us | PokéPath TD Community',
        description: 'Learn about PokéPath TD Community, our mission, and how we help players master the game.',
        keywords: 'About Us, PokéPath TD Community, Mission, Fan Site'
      }
    },
    {
      path: '/contact-us',
      name: 'contact-us',
      component: ContactUsView,
      meta: {
        title: 'Contact Us | PokéPath TD Community',
        description: 'Get in touch with PokéPath TD Community. Contact us for questions, suggestions, or feedback.',
        keywords: 'Contact Us, Support, Feedback, Inquiries'
      }
    },
    {
      path: '/copyright',
      name: 'copyright',
      component: CopyrightView,
      meta: {
        title: 'Copyright | PokéPath TD Community',
        description: 'Copyright information and intellectual property rights for PokéPath TD Community.',
        keywords: 'Copyright, Intellectual Property, DMCA, Fair Use'
      }
    },
    {
      path: '/privacy-policy',
      name: 'privacy-policy',
      component: PrivacyPolicyView,
      meta: {
        title: 'Privacy Policy | PokéPath TD Community',
        description: 'Privacy Policy for PokéPath TD Community. Learn how we protect your personal information.',
        keywords: 'Privacy Policy, Data Protection, Privacy Rights'
      }
    },
    {
      path: '/terms-of-service',
      name: 'terms-of-service',
      component: TermsOfServiceView,
      meta: {
        title: 'Terms of Service | PokéPath TD Community',
        description: 'Terms of Service for PokéPath TD Community. Read our terms and conditions.',
        keywords: 'Terms of Service, Terms and Conditions, User Agreement'
      }
    }
  ],
})

// Set page title based on route meta
router.beforeEach((to, from, next) => {
  document.title = to.meta.title || 'PokéPath TD Strategy Guide'
  next()
})

export default router
