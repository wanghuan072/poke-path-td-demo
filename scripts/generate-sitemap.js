// Generate sitemap for PokéPath TD Strategy Guide
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// 所有路线详情页 ID（已更新为新的 SEO 友好 ID）
const routeIds = [
  'how-to-beat-route-1-1-articuno',
  'how-to-beat-route-1-2-zapdos-wave-100',
  'how-to-beat-route-1-3-moltres',
  'how-to-beat-route-2-1-raikou-wave-100',
  'how-to-beat-route-2-2-entei',
  'how-to-beat-route-2-3-suicune-wave-100',
  'how-to-beat-route-3-1-regirock-wave-100-guide',
  'how-to-beat-route-3-2-regice-dewgong-strategy',
  'how-to-beat-route-3-3-registeel-wave-100-guide'
]

// 站点配置
const config = {
  baseUrl: 'https://pokepathgame.org', // 替换为实际域名
  outputPath: path.join(__dirname, '../public/sitemap.xml'),
  routes: [
    { path: '/', priority: '1.0', changefreq: 'weekly' },
    { path: '/all-pokemon', priority: '0.9', changefreq: 'weekly' },
    { path: '/map-router', priority: '0.8', changefreq: 'weekly' },
    // 添加所有路线详情页
    ...routeIds.map(id => ({
      path: `/map-router/${id}`,
      priority: '0.8',
      changefreq: 'monthly'
    })),
    { path: '/enemies', priority: '0.8', changefreq: 'weekly' },
    { path: '/tier-list', priority: '0.8', changefreq: 'weekly' },
    { path: '/tools', priority: '0.7', changefreq: 'monthly' },
    { path: '/tools/dps-calculator', priority: '0.8', changefreq: 'monthly' },
    { path: '/tools/pokemon-categories', priority: '0.7', changefreq: 'monthly' },
    { path: '/tools/enemy-counter', priority: '0.7', changefreq: 'monthly' },
    { path: '/tools/route-strategy', priority: '0.7', changefreq: 'monthly' },
    { path: '/wiki', priority: '0.6', changefreq: 'monthly' },
    { path: '/about-us', priority: '0.5', changefreq: 'monthly' },
    { path: '/contact-us', priority: '0.5', changefreq: 'monthly' },
    { path: '/copyright', priority: '0.5', changefreq: 'monthly' },
    { path: '/privacy-policy', priority: '0.5', changefreq: 'monthly' },
    { path: '/terms-of-service', priority: '0.5', changefreq: 'monthly' }
  ]
}

// 生成sitemap XML
function generateSitemap() {
  const currentDate = new Date().toISOString()

  let sitemap = '<?xml version="1.0" encoding="UTF-8"?>\n'
  sitemap += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n'

  config.routes.forEach(route => {
    sitemap += '  <url>\n'
    sitemap += `    <loc>${config.baseUrl}${route.path}</loc>\n`
    sitemap += `    <lastmod>${currentDate}</lastmod>\n`
    sitemap += `    <changefreq>${route.changefreq}</changefreq>\n`
    sitemap += `    <priority>${route.priority}</priority>\n`
    sitemap += '  </url>\n'
  })

  sitemap += '</urlset>'

  return sitemap
}

// 写入文件
function writeSitemap() {
  const sitemap = generateSitemap()

  try {
    fs.writeFileSync(config.outputPath, sitemap, 'utf8')
    console.log('✅ Sitemap generated successfully at:', config.outputPath)
  } catch (error) {
    console.error('❌ Error writing sitemap:', error)
    throw error
  }
}

// 执行生成
writeSitemap()
