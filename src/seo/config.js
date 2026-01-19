// SEO Configuration for PokéPath TD Strategy Guide
export const seoConfig = {
  // 站点基本信息
  fullDomain: 'https://pokepathgame.org', // 替换为实际域名
  siteName: 'PokéPath TD Strategy Guide',
  description: 'Comprehensive strategy guide for PokéPath TD tower defense game. Complete Pokémon database, DPS calculator, route strategies, and enemy data.',
  keywords: 'PokéPath TD, Pokémon, Tower Defense, Strategy Guide, DPS Calculator, Route Strategy',

  // 默认SEO数据
  defaults: {
    title: 'PokéPath TD Strategy Guide - Master the Game with Pro Tips',
    description: 'Master PokéPath TD with our comprehensive strategy guide. Complete Pokémon database, DPS calculator, route analysis, and enemy counter strategies.',
    keywords: 'PokéPath TD, Pokémon Tower Defense, Strategy Guide, DPS Calculator, Route Strategy, Enemy Database, Tier List',
    image: '/images/og-image.webp', // 默认Open Graph图片
    type: 'website',
    author: 'PokéPath TD Community'
  },

  // 社交媒体配置
  social: {
    twitter: '@PokePathTDGuide', // Twitter handle
    facebook: 'PokePathTDGuide', // Facebook page
    instagram: 'pokepathtdguide', // Instagram handle
    discord: 'pokepathtd' // Discord invite code
  },

  // 结构化数据配置
  structuredData: {
    organization: {
      name: 'PokéPath TD Strategy Guide',
      url: 'https://pokepathgame.org',
      logo: 'https://pokepathgame.org/images/logo.webp',
      sameAs: [
        'https://twitter.com/PokePathTDGuide',
        'https://facebook.com/PokePathTDGuide',
        'https://instagram.com/pokepathtdguide',
        'https://discord.gg/pokepathtd'
      ]
    },
    game: {
      name: 'PokéPath TD',
      genre: 'Tower Defense',
      platform: ['PC', 'Mobile'],
      applicationCategory: 'Game',
      description: 'A tower defense game featuring Pokémon strategic gameplay.'
    }
  }
}