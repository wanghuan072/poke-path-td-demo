import { ref, computed, watch } from 'vue'
import { useRoute } from 'vue-router'
import { seoConfig } from './config.js'

/**
 * 加载数据模块（用于 SEO）- PokéPath TD 目前无动态数据，预留接口
 */
// eslint-disable-next-line no-unused-vars
const loadDataForSEO = async (dataType) => {
  try {
    if (dataType === 'pokemon') {
      const module = await import('../data/pokemon.js')
      return module.default || []
    } else if (dataType === 'routes') {
      const module = await import('../data/routes.js')
      return module.stages || []
    } else {
      throw new Error(`Unknown data type: ${dataType}`)
    }
  } catch (error) {
    console.warn(`Failed to load data for SEO: ${dataType}`, error)
    return []
  }
}

// SEO composable
export function useSEO() {
  const route = useRoute()

  // 当前页面的SEO数据
  const currentSEO = ref({})

  // 获取当前页面路径
  const currentPath = computed(() => {
    return route.path
  })

  // 获取Canonical URL
  const canonicalUrl = computed(() => {
    return `${seoConfig.fullDomain}${currentPath.value}`
  })

  // 设置页面SEO数据
  const setSEO = (seoData) => {
    currentSEO.value = {
      ...seoConfig.defaults,
      ...seoData
    }
    updateMetaTags()
  }

  // 更新HTML meta标签
  const updateMetaTags = () => {
    if (typeof document === 'undefined') return

    const seo = currentSEO.value

    // 更新title
    document.title = seo.title || seoConfig.defaults.title

    // 更新或创建meta标签
    updateMetaTag('description', seo.description)
    updateMetaTag('keywords', seo.keywords)
    updateMetaTag('author', seo.author)

    // Open Graph标签
    updateMetaTag('og:title', seo.title, 'property')
    updateMetaTag('og:description', seo.description, 'property')
    updateMetaTag('og:image', seo.image, 'property')
    updateMetaTag('og:url', canonicalUrl.value, 'property')
    updateMetaTag('og:type', seo.type, 'property')
    updateMetaTag('og:site_name', seoConfig.siteName, 'property')

    // Twitter Card标签
    updateMetaTag('twitter:card', 'summary_large_image', 'name')
    updateMetaTag('twitter:title', seo.title, 'name')
    updateMetaTag('twitter:description', seo.description, 'name')
    updateMetaTag('twitter:image', seo.image, 'name')
    updateMetaTag('twitter:site', seoConfig.social.twitter, 'name')

    // Canonical URL
    updateCanonicalLink()
  }

  // 更新单个meta标签
  const updateMetaTag = (name, content, attribute = 'name') => {
    if (!content) return

    // 查找现有标签
    let tag = document.querySelector(`meta[${attribute}="${name}"]`)

    if (tag) {
      // 如果标签存在，直接更新content
      tag.setAttribute('content', content)
    } else {
      // 如果标签不存在，创建新标签
      tag = document.createElement('meta')
      tag.setAttribute(attribute, name)
      tag.setAttribute('content', content)
      document.head.appendChild(tag)
    }
  }

  // 更新Canonical链接
  const updateCanonicalLink = () => {
    let canonical = document.querySelector('link[rel="canonical"]')
    if (!canonical) {
      canonical = document.createElement('link')
      canonical.setAttribute('rel', 'canonical')
      document.head.appendChild(canonical)
    }
    canonical.setAttribute('href', canonicalUrl.value)
  }

  // 生成结构化数据
  const generateStructuredData = (pageType = 'WebPage') => {
    const baseData = {
      '@context': 'https://schema.org',
      '@type': pageType,
      name: currentSEO.value.title,
      description: currentSEO.value.description,
      url: canonicalUrl.value,
      publisher: seoConfig.structuredData.organization
    }

    // 根据页面类型添加特定数据
    if (pageType === 'VideoGame') {
      baseData.genre = seoConfig.structuredData.game.genre
      baseData.gamePlatform = seoConfig.structuredData.game.platform
      baseData.applicationCategory = seoConfig.structuredData.game.applicationCategory
      baseData.description = seoConfig.structuredData.game.description
    }

    if (pageType === 'Article') {
      baseData.author = seoConfig.structuredData.organization
      baseData.datePublished = new Date().toISOString()
      baseData.dateModified = new Date().toISOString()
    }

    return baseData
  }

  // 添加结构化数据到页面
  const addStructuredData = (data) => {
    if (typeof document === 'undefined') return

    // 移除现有的结构化数据
    const existingScript = document.querySelector('script[type="application/ld+json"]')
    if (existingScript) {
      existingScript.remove()
    }

    // 添加新的结构化数据
    const script = document.createElement('script')
    script.type = 'application/ld+json'
    script.textContent = JSON.stringify(data, null, 2)
    document.head.appendChild(script)
  }

  return {
    currentSEO,
    currentPath,
    canonicalUrl,
    setSEO,
    updateMetaTags,
    generateStructuredData,
    addStructuredData
  }
}

// 动态路由名称集合（需要从数据加载 SEO 的路由）
const dynamicRouteNames = new Set([
  // 目前无动态路由，可扩展
])

// 自动SEO composable - 监听路由变化自动设置SEO
export function useAutoSEO() {
  const { setSEO, generateStructuredData, addStructuredData } = useSEO()
  const route = useRoute()

  // 处理SEO的函数
  const handleSEO = async () => {
    const routeName = route.name
    let finalSEOData = {
      ...seoConfig.defaults
    }

    // 先从路由 meta 获取 TDK
    if (route.meta) {
      if (route.meta.title) {
        finalSEOData.title = route.meta.title
      }
      if (route.meta.description) {
        finalSEOData.description = route.meta.description
      }
      if (route.meta.keywords) {
        finalSEOData.keywords = route.meta.keywords
      }
      if (route.meta.image) {
        finalSEOData.image = route.meta.image
      }
      if (route.meta.type) {
        finalSEOData.type = route.meta.type
      }
    }

    // 处理动态路由（从数据加载 SEO）- 目前无
    if (dynamicRouteNames.has(routeName)) {
      // 预留逻辑
    }

    // 设置 SEO
    setSEO(finalSEOData)

    // 添加结构化数据
    const structuredData = generateStructuredData(finalSEOData.type === 'article' ? 'Article' : 'WebPage')
    addStructuredData(structuredData)
  }

  // 监听路由变化
  watch(
    [() => route.fullPath, () => route.name],
    async () => {
      await handleSEO()
    },
    { immediate: true }
  )
}