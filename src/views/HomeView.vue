<template>
  <div class="home-view">
    <AppHeader />

    <!-- Hero Section -->
    <section class="hero-section">
      <div class="container">
        <div class="hero-banner">
          <div class="hero-banner-badge">Updated 2026</div>
        </div>
        <div class="hero-content">
          <div class="hero-main">
            <h1 class="hero-title">
              PokéPath TD Guide - Complete Wiki, Tier List & Strategy
            </h1>
            <p class="hero-subtitle">
              Master <strong>PokéPath TD</strong> tower defense with our comprehensive strategy guide. Complete Pokémon
              database, DPS calculator, route strategy analysis, and enemy data. Build the perfect team and conquer all
              routes with PokéPath TD best teams and meta strategies.
            </p>
            <div class="hero-stats">
              <div class="stat-item">
                <div class="stat-value">100+</div>
                <div class="stat-label">Pokémon</div>
              </div>
              <div class="stat-item">
                <div class="stat-value">9</div>
                <div class="stat-label">Routes</div>
              </div>
              <div class="stat-item">
                <div class="stat-value">18</div>
                <div class="stat-label">Types</div>
              </div>
              <div class="stat-item">
                <div class="stat-value">TD</div>
                <div class="stat-label">Game Mode</div>
              </div>
            </div>
            <div class="hero-actions">
              <a href="/all-pokemon" class="btn-primary">
                <span>Explore All Pokemon</span>
                <span class="btn-arrow">→</span>
              </a>
              <a href="/tools" class="btn-secondary">
                <span>View All Tools</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Video Section -->
    <section class="home-section video-section">
      <div class="container">
        <div class="video-wrapper">
          <iframe v-if="iframeLoaded" :src="currentIframeSrc" class="video-iframe" frameborder="0"
            allowfullscreen></iframe>
          <div v-else class="video-overlay">
            <div class="game-version-selector">
              <h3 class="version-title">Choose Game Version</h3>
              <div class="version-buttons">
                <button class="version-button" @click="loadGame('1.2.5')">
                  <span class="play-icon">▶</span>
                  <span class="version-text">Play PokéPath TD 1.2.5</span>
                </button>
                <button class="version-button" @click="loadGame('1.3.3')">
                  <span class="play-icon">▶</span>
                  <span class="version-text">Play PokéPath TD 1.3.3</span>
                </button>
                <button class="version-button" @click="loadGame('1.3.6')">
                  <span class="play-icon">▶</span>
                  <span class="version-text">Play PokéPath TD 1.3.6</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Game Introduction Section -->
    <section class="home-section game-intro-section">
      <div class="container">
        <div class="section-header">
          <div class="section-title-wrapper">
            <div class="section-title-line"></div>
            <h2 class="section-title">What is PokéPath TD?</h2>
            <div class="section-title-line"></div>
          </div>
        </div>
        <div class="game-intro-content">
          <div class="game-intro-text">
            <p class="intro-main-text">
              <strong>PokéPath TD</strong> is a tower defense game featuring Pokémon. Strategically place your Pokémon
              along paths to defend against waves of enemies. Each Pokémon has unique abilities, stats, and evolution
              paths that unlock at levels 16, 36, and 100.
            </p>
            <div class="game-mechanics-grid">
              <div class="mechanic-item">
                <div class="mechanic-icon">⚔️</div>
                <div class="mechanic-content">
                  <h4 class="mechanic-title">Power</h4>
                  <p class="mechanic-desc">Base damage dealt by each attack</p>
                </div>
              </div>
              <div class="mechanic-item">
                <div class="mechanic-icon">⏱️</div>
                <div class="mechanic-content">
                  <h4 class="mechanic-title">Recharge</h4>
                  <p class="mechanic-desc">Time between attacks (lower is better)</p>
                </div>
              </div>
              <div class="mechanic-item">
                <div class="mechanic-icon">💥</div>
                <div class="mechanic-content">
                  <h4 class="mechanic-title">Critical</h4>
                  <p class="mechanic-desc">Chance to deal critical damage</p>
                </div>
              </div>
              <div class="mechanic-item">
                <div class="mechanic-icon">📏</div>
                <div class="mechanic-content">
                  <h4 class="mechanic-title">Range</h4>
                  <p class="mechanic-desc">Attack range of the Pokémon</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Database Section (All Pokemon + Enemy Database) -->
    <section class="home-section database-section">
      <div class="container">
        <div class="section-header">
          <div class="section-title-wrapper">
            <div class="section-title-line"></div>
            <h2 class="section-title">Complete Databases - PokéPath TD All Pokémon</h2>
            <div class="section-title-line"></div>
          </div>
          <p class="section-description">Access comprehensive data for all Pokémon and enemies</p>
        </div>
        <div class="database-grid">
          <!-- All Pokemon Card -->
          <div class="database-card pokemon-db-card">
            <div class="database-card-header">
              <div class="database-icon">⚔️</div>
              <h3 class="database-title">All Pokemon</h3>
            </div>
            <p class="database-description">
              Browse 100+ Pokémon with complete data across all evolution stages. View comprehensive stats, abilities,
              terrain compatibility, and evolution chains from Level 1 to Level 100.
            </p>
            <div class="database-preview">
              <div class="database-preview-grid">
                <div class="db-preview-item" v-for="preview in pokemonPreview.slice(0, 8)" :key="preview.id">
                  <div class="db-preview-image">
                    <img v-if="preview.imageUrl" :src="preview.imageUrl" :alt="preview.name" class="db-preview-img" />
                    <div v-else class="db-preview-placeholder">{{ preview.name.charAt(0) }}</div>
                  </div>
                  <div class="db-preview-info">
                    <h4 class="db-preview-name">{{ preview.name }}</h4>
                    <div class="db-preview-stats">
                      <span class="db-preview-stat">⚔️ {{ preview.power }}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="database-action">
              <a href="/all-pokemon" class="btn-primary">
                <span>Explore All Pokemon</span>
                <span class="btn-arrow">→</span>
              </a>
            </div>
          </div>

          <!-- Enemy Database Card -->
          <div class="database-card enemy-db-card">
            <div class="database-card-header">
              <div class="database-icon">👹</div>
              <h3 class="database-title">Enemy Database</h3>
            </div>
            <p class="database-description">
              Complete reference for 125+ enemies across all threat levels. View stats, resistances, special abilities,
              and gold rewards to build effective defense strategies.
            </p>
            <div class="database-preview">
              <div class="database-preview-grid">
                <div class="db-preview-item" v-for="enemy in featuredEnemies.slice(0, 8)" :key="enemy.id">
                  <div class="db-preview-image">
                    <img v-if="enemy.imageUrl" :src="enemy.imageUrl" :alt="enemy.name" class="db-preview-img" />
                    <div v-else class="db-preview-placeholder">{{ enemy.name.charAt(0) }}</div>
                  </div>
                  <div class="db-preview-info">
                    <h4 class="db-preview-name">{{ enemy.name }}</h4>
                    <span class="db-enemy-threat" :class="`threat-${enemy.threat.toLowerCase().replace(' ', '-')}`">
                      {{ enemy.threat }}
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div class="database-action">
              <a href="/enemies" class="btn-primary">
                <span>View Enemy Database</span>
                <span class="btn-arrow">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Routes Section -->
    <section class="home-section routes-section">
      <div class="container">
        <div class="section-header">
          <div class="section-title-wrapper">
            <div class="section-title-line"></div>
            <h2 class="section-title">Route Strategies - PokéPath TD Map Guides</h2>
            <div class="section-title-line"></div>
          </div>
          <p class="section-description">Detailed guides for all 9 routes with recommended teams and terrain analysis. Check out our comprehensive guides for <a href="/map-router/how-to-beat-route-1-1-articuno" class="inline-link">Route 1-1 (Articuno)</a> and <a href="/map-router/how-to-beat-route-3-1-regirock-wave-100-guide" class="inline-link">Route 3-1 (Regirock)</a>.
          </p>
        </div>
        <div class="routes-preview-grid">
          <a v-for="route in featuredRoutes.slice(0, 3)" :key="route.id" :href="`/map-router/${route.id}`"
            class="route-preview-card">
            <div class="route-preview-image">
              <img v-if="route.mapImage" :src="route.mapImage" :alt="route.name" class="route-preview-img" />
              <div v-else class="route-preview-placeholder">
                <span class="placeholder-icon">🗺️</span>
              </div>
              <div class="route-preview-overlay">
                <div class="route-preview-number">{{ route.routeNumber }}</div>
                <div class="route-preview-difficulty" :style="{ backgroundColor: difficultyColors[route.difficulty] }">
                  {{ route.difficulty }}
                </div>
              </div>
            </div>
            <div class="route-preview-content">
              <h3 class="route-preview-name">{{ route.name }}</h3>
              <div class="route-preview-meta">
                <span class="route-preview-star">⭐ {{ route.stars }}</span>
                <span class="route-preview-wave">🌊 {{ route.totalWaves || 100 }}</span>
              </div>
              <div class="route-preview-terrain" v-if="route.terrain && route.terrain.length > 0">
                <span class="terrain-tag" v-for="terrain in route.terrain.slice(0, 3)" :key="terrain">
                  {{ terrain }}
                </span>
              </div>
            </div>
          </a>
        </div>
        <div class="section-footer">
          <a href="/map-router/how-to-beat-route-1-3-6" class="btn-secondary">
            <span>Route 1-3-6 Guide</span>
            <span class="btn-arrow">→</span>
          </a>
          <a href="/map-router" class="btn-secondary">
            <span>View All Routes</span>
            <span class="btn-arrow">→</span>
          </a>
        </div>
      </div>
    </section>

    <!-- Tools Section -->
    <section class="home-section tools-section">
      <div class="container">
        <div class="section-header">
          <div class="section-title-wrapper">
            <div class="section-title-line"></div>
            <h2 class="section-title">Strategy Tools - PokéPath TD DPS Calculator</h2>
            <div class="section-title-line"></div>
          </div>
          <p class="section-description">Essential calculators and utilities to optimize your strategy</p>
        </div>
        <div class="tools-grid">
          <a v-for="tool in toolsPreview" :key="tool.id" :href="tool.path" class="tool-card">
            <div class="tool-icon">{{ tool.icon }}</div>
            <h3 class="tool-title">{{ tool.title }}</h3>
            <p class="tool-description">{{ tool.description }}</p>
            <div class="tool-link">
              <span>Use Tool</span>
              <span class="tool-arrow">→</span>
            </div>
          </a>
        </div>
        <div class="section-footer">
          <a href="/tools" class="btn-secondary">
            <span>View All Tools</span>
            <span class="btn-arrow">→</span>
          </a>
        </div>
      </div>
    </section>

    <AppFooter />
  </div>
</template>

<script setup>
import { computed, ref } from 'vue'
import AppHeader from '../components/AppHeader.vue'
import AppFooter from '../components/AppFooter.vue'
import pokemonData from '../data/pokemon.js'
import enemyData from '../data/enemies.js'
import { stages, difficultyColors } from '../data/routes.js'

// Video iframe
const iframeLoaded = ref(false)
const currentIframeSrc = ref('')

// Game version URLs
const gameVersions = {
  '1.2.5': 'https://html-classic.itch.zone/html/15902423/PokePath%20TD%20WEB/index.html',
  '1.3.3': 'https://hozygame.online/',
  '1.3.6': 'https://v136.hozygame.online/'
}

const loadGame = (version) => {
  currentIframeSrc.value = gameVersions[version]
  iframeLoaded.value = true
}

// Featured Routes
const featuredRoutes = computed(() => {
  const difficulties = ['Easy', 'Medium', 'Hard', 'Very Hard']
  const samples = []
  const usedDifficulties = new Set()

  for (const difficulty of difficulties) {
    if (samples.length >= 3) break
    const route = stages.find(r => r.difficulty === difficulty && !usedDifficulties.has(difficulty))
    if (route) {
      usedDifficulties.add(difficulty)
      samples.push(route)
    }
  }

  for (const route of stages) {
    if (samples.length >= 3) break
    if (!samples.find(r => r.id === route.id)) {
      samples.push(route)
    }
  }

  return samples
})

// Tools Preview Data
const toolsPreview = [
  {
    id: 1,
    icon: '⚡',
    title: 'DPS Calculator',
    description: 'Calculate and compare Pokémon damage per second. Analyze power, recharge time, and critical hit rate to find the best damage dealers.',
    path: '/tools/dps-calculator',
  },
  {
    id: 2,
    icon: '📋',
    title: 'Pokémon Categories',
    description: 'Browse Pokémon by tactical categories. Find specialized Pokémon for status effects, AOE attacks, burst damage, and support roles.',
    path: '/tools/pokemon-categories',
  },
  {
    id: 3,
    icon: '⚔️',
    title: 'Enemy Counter',
    description: 'Find the best Pokémon to counter specific enemies. Analyze resistances and get personalized recommendations based on DPS calculations.',
    path: '/tools/enemy-counter',
  },
  {
    id: 4,
    icon: '🗺️',
    title: 'Route Strategy',
    description: 'Optimize your team composition for each map route. Get recommended Pokémon types, terrain advantages, and strategic tips.',
    path: '/tools/route-strategy',
  },
]

// Pokemon Preview
const pokemonPreview = computed(() => {
  const categories = new Set()
  const samples = []

  for (const pokemon of pokemonData) {
    if (!categories.has(pokemon.category) && samples.length < 8) {
      categories.add(pokemon.category)
      samples.push({
        id: pokemon.id,
        name: pokemon.name,
        imageUrl: pokemon.imageUrl,
        power: pokemon.power,
        recharge: pokemon.recharge,
      })
    }
  }

  return samples
})

// Featured Enemies
const featuredEnemies = computed(() => {
  const samples = []
  const usedThreats = new Set()
  const threatLevels = ['Legendary', 'Elite', 'Strong', 'Normal']

  for (const threat of threatLevels) {
    if (samples.length >= 8) break
    const enemy = enemyData.find(e => e.threat === threat && !usedThreats.has(threat))
    if (enemy) {
      usedThreats.add(threat)
      samples.push(enemy)
    }
  }

  for (const enemy of enemyData) {
    if (samples.length >= 8) break
    if (!samples.find(e => e.id === enemy.id)) {
      samples.push(enemy)
    }
  }

  return samples
})
</script>

<style scoped>
.home-view {
  min-height: 100vh;
  position: relative;
  color: #f5f8f0;
}

/* Hero Section */
.hero-section {
  padding: 50px 0 40px;
  position: relative;
  z-index: 1;
}

.hero-banner {
  text-align: center;
  margin-bottom: 24px;
}

.hero-banner-badge {
  display: inline-block;
  padding: 8px 20px;
  background: linear-gradient(135deg, #5cb85c 0%, #4a9a4a 100%);
  border-radius: 20px;
  color: white;
  font-size: 0.85rem;
  font-weight: 600;
  letter-spacing: 0.5px;
  box-shadow: 0 4px 12px rgba(92, 184, 92, 0.3);
}

.hero-main {
  text-align: center;
}

.hero-title {
  font-size: 2.5rem;
  font-weight: 800;
  margin-bottom: 20px;
  line-height: 1.2;
  color: #f5f8f0;
  background: linear-gradient(135deg, #f5f8f0 0%, #6ba3e8 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.hero-subtitle {
  font-size: 1rem;
  color: rgba(245, 248, 240, 0.85);
  line-height: 1.7;
  margin-bottom: 32px;
}

.hero-subtitle strong {
  color: #6ba3e8;
  font-weight: 700;
}

.hero-stats {
  display: flex;
  justify-content: center;
  gap: 24px;
  margin-bottom: 32px;
  flex-wrap: wrap;
}

.stat-item {
  text-align: center;
  padding: 16px 24px;
  background: rgba(26, 35, 50, 0.6);
  border: 1px solid rgba(107, 163, 232, 0.2);
  border-radius: 12px;
  backdrop-filter: blur(10px);
  min-width: 100px;
}

.stat-value {
  font-size: 1.75rem;
  font-weight: 800;
  background: linear-gradient(135deg, #6ba3e8 0%, #5cb85c 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 4px;
  line-height: 1.2;
}

.stat-label {
  font-size: 0.75rem;
  color: rgba(245, 248, 240, 0.7);
  text-transform: uppercase;
  letter-spacing: 0.1em;
  font-weight: 600;
}

.hero-actions {
  display: flex;
  gap: 16px;
  justify-content: center;
  flex-wrap: wrap;
}

/* Buttons */
.btn-primary {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 12px 28px;
  border-radius: 10px;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.2s ease;
  letter-spacing: 0.3px;
  font-size: 0.95rem;
  background: linear-gradient(135deg, #6ba3e8 0%, #5cb85c 100%);
  color: white;
  box-shadow: 0 4px 12px rgba(107, 163, 232, 0.3);
  border: none;
  cursor: pointer;
}

.btn-secondary {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 12px 28px;
  border-radius: 10px;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.2s ease;
  letter-spacing: 0.3px;
  font-size: 0.95rem;
  border: 1px solid rgba(107, 163, 232, 0.4);
  color: #6ba3e8;
  background: rgba(26, 35, 50, 0.6);
  backdrop-filter: blur(10px);
}

.btn-arrow {
  transition: transform 0.3s ease;
}

.btn-primary:hover .btn-arrow,
.btn-secondary:hover .btn-arrow {
  transform: translateX(4px);
}

/* Sections */
.home-section {
  margin-bottom: 48px;
  position: relative;
  z-index: 1;
}

.section-header {
  text-align: center;
  margin-bottom: 48px;
  position: relative;
}

.section-title-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  margin-bottom: 16px;
}

.section-title-line {
  flex: 1;
  height: 1px;
  background: linear-gradient(90deg, transparent, rgba(107, 163, 232, 0.5), transparent);
  max-width: 150px;
}

.section-title {
  font-size: 2rem;
  font-weight: 800;
  color: #6ba3e8;
  line-height: 1.2;
  text-shadow: 0 0 10px rgba(107, 163, 232, 0.3);
}

.section-description {
  color: rgba(245, 248, 240, 0.7);
  font-size: 0.95rem;
  margin: 0;
}

.section-footer {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
  margin-top: 32px;
  flex-wrap: wrap;
}

/* Video Section */
.video-wrapper {
  position: relative;
  width: 100%;
  aspect-ratio: 16/9;
  background: url("/images/video-bg.webp") no-repeat center center rgba(26, 35, 50, 0.7);
  background-size: 100% 100%;
  border-radius: 16px;
  overflow: hidden;
  border: 1px solid rgba(107, 163, 232, 0.25);
  backdrop-filter: blur(10px);
}

.video-iframe {
  width: 100%;
  height: 100%;
  border: none;
}

.video-overlay {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(15, 20, 30, 0.8);
}

.game-version-selector {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
}

.version-title {
  font-size: 1.5rem;
  font-weight: 700;
  color: #f5f8f0;
  margin: 0;
  text-align: center;
}

.version-buttons {
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  justify-content: center;
}

.version-button {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 16px 32px;
  background: linear-gradient(135deg, #6ba3e8 0%, #5cb85c 100%);
  border: none;
  border-radius: 50px;
  color: white;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 8px 24px rgba(107, 163, 232, 0.3);
  min-width: 220px;
}

.version-button:hover {
  transform: scale(1.05);
  box-shadow: 0 12px 32px rgba(107, 163, 232, 0.4);
}

.version-button:nth-child(2) {
  background: linear-gradient(135deg, #5cb85c 0%, #4a9a4a 100%);
  box-shadow: 0 8px 24px rgba(92, 184, 92, 0.3);
}

.version-button:nth-child(2):hover {
  box-shadow: 0 12px 32px rgba(92, 184, 92, 0.4);
}

.version-button:nth-child(3) {
  background: linear-gradient(135deg, #f0ad4e 0%, #d9534f 100%);
  box-shadow: 0 8px 24px rgba(240, 173, 78, 0.3);
}

.version-button:nth-child(3):hover {
  box-shadow: 0 12px 32px rgba(240, 173, 78, 0.4);
}

.play-icon {
  font-size: 1.5rem;
}

.version-text {
  font-size: 1rem;
  font-weight: 600;
}

/* Game Introduction */
.game-intro-content {
  margin-top: 40px;
}

.game-intro-text {
  max-width: 900px;
  margin: 0 auto;
}

.intro-main-text {
  font-size: 1.15rem;
  color: rgba(245, 248, 240, 0.9);
  line-height: 1.8;
  margin: 0 0 40px 0;
  text-align: center;
}

.intro-main-text strong {
  color: #6ba3e8;
  font-weight: 700;
}

.game-mechanics-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
}

.mechanic-item {
  background: rgba(26, 35, 50, 0.7);
  border: 1px solid rgba(107, 163, 232, 0.25);
  border-radius: 12px;
  padding: 24px;
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
  display: flex;
  align-items: flex-start;
  gap: 16px;
}

.mechanic-item:hover {
  border-color: rgba(107, 163, 232, 0.5);
  transform: translateY(-4px);
  box-shadow: 0 8px 24px rgba(107, 163, 232, 0.2);
}

.mechanic-icon {
  font-size: 2rem;
  line-height: 1;
  flex-shrink: 0;
}

.mechanic-content {
  flex: 1;
}

.mechanic-title {
  font-size: 1.1rem;
  color: #f5f8f0;
  font-weight: 700;
  margin: 0 0 8px 0;
}

.mechanic-desc {
  font-size: 0.9rem;
  color: rgba(245, 248, 240, 0.75);
  line-height: 1.6;
  margin: 0;
}

/* Database Section */
.database-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 32px;
  margin-top: 40px;
}

.database-card {
  background: rgba(26, 35, 50, 0.7);
  border: 1px solid rgba(107, 163, 232, 0.25);
  border-radius: 16px;
  padding: 32px;
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
}

.pokemon-db-card:hover {
  border-color: rgba(107, 163, 232, 0.5);
  transform: translateY(-4px);
  box-shadow: 0 8px 24px rgba(107, 163, 232, 0.2);
}

.enemy-db-card:hover {
  border-color: rgba(230, 126, 34, 0.5);
  transform: translateY(-4px);
  box-shadow: 0 8px 24px rgba(230, 126, 34, 0.2);
}

.database-card-header {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 16px;
}

.database-icon {
  font-size: 2rem;
  line-height: 1;
}

.database-title {
  font-size: 1.5rem;
  color: #f5f8f0;
  font-weight: 700;
  margin: 0;
}

.database-description {
  font-size: 0.95rem;
  color: rgba(245, 248, 240, 0.75);
  line-height: 1.6;
  margin: 0 0 24px 0;
}

.database-preview {
  margin: 24px 0;
  flex: 1;
}

.database-preview-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
}

.db-preview-item {
  background: rgba(15, 20, 30, 0.5);
  border: 1px solid rgba(107, 163, 232, 0.2);
  border-radius: 12px;
  padding: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  transition: all 0.2s ease;
}

.db-preview-item:hover {
  border-color: rgba(107, 163, 232, 0.4);
  transform: translateY(-2px);
}

.db-preview-image {
  width: 64px;
  height: 64px;
  flex-shrink: 0;
}

.db-preview-img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  border-radius: 8px;
  background: rgba(107, 163, 232, 0.1);
}

.db-preview-placeholder {
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, rgba(107, 163, 232, 0.3), rgba(92, 184, 92, 0.3));
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  font-weight: 700;
  color: #6ba3e8;
}

.db-preview-info {
  text-align: center;
  width: 100%;
}

.db-preview-name {
  font-size: 0.85rem;
  color: #f5f8f0;
  font-weight: 600;
  margin: 0 0 4px 0;
  word-break: break-word;
}

.db-preview-stats {
  font-size: 0.75rem;
  color: rgba(245, 248, 240, 0.7);
}

.db-enemy-threat {
  display: inline-block;
  padding: 2px 8px;
  border-radius: 6px;
  font-size: 0.7rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.database-action {
  margin-top: auto;
  padding-top: 24px;
}

/* Routes Section */
.routes-section {
  background: linear-gradient(180deg, transparent, rgba(92, 184, 92, 0.03), transparent);
}

.routes-preview-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  margin-top: 40px;
}

.route-preview-card {
  background: rgba(26, 35, 50, 0.7);
  border: 1px solid rgba(92, 184, 92, 0.25);
  border-radius: 16px;
  overflow: hidden;
  text-decoration: none;
  color: inherit;
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
}

.route-preview-card:hover {
  border-color: rgba(92, 184, 92, 0.5);
  transform: translateY(-4px);
  box-shadow: 0 8px 24px rgba(92, 184, 92, 0.2);
}

.route-preview-image {
  position: relative;
  width: 100%;
  height: 180px;
  overflow: hidden;
  background: rgba(15, 20, 30, 0.8);
}

.route-preview-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.route-preview-card:hover .route-preview-img {
  transform: scale(1.05);
}

.route-preview-placeholder {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(15, 20, 30, 0.8);
}

.placeholder-icon {
  font-size: 4rem;
  opacity: 0.4;
}

.route-preview-overlay {
  position: absolute;
  top: 12px;
  left: 12px;
  right: 12px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 8px;
}

.route-preview-number {
  padding: 6px 12px;
  background: rgba(26, 35, 50, 0.9);
  border: 1px solid rgba(107, 163, 232, 0.4);
  border-radius: 8px;
  color: #6ba3e8;
  font-weight: 700;
  font-size: 0.9rem;
  backdrop-filter: blur(10px);
}

.route-preview-difficulty {
  padding: 6px 12px;
  border-radius: 8px;
  color: white;
  font-weight: 700;
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  backdrop-filter: blur(10px);
}

.route-preview-content {
  padding: 20px;
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.route-preview-name {
  font-size: 1.1rem;
  color: #f5f8f0;
  font-weight: 700;
  margin: 0;
}

.route-preview-meta {
  display: flex;
  gap: 16px;
  font-size: 0.85rem;
  color: rgba(245, 248, 240, 0.7);
}

.route-preview-terrain {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-top: auto;
}

.terrain-tag {
  padding: 4px 10px;
  background: rgba(92, 184, 92, 0.15);
  border: 1px solid rgba(92, 184, 92, 0.4);
  border-radius: 6px;
  font-size: 0.75rem;
  color: #5cb85c;
  font-weight: 500;
}

/* Tools Section */
.tools-section {
  background: linear-gradient(180deg, transparent, rgba(107, 163, 232, 0.03), transparent);
}

.tools-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 24px;
  margin-top: 40px;
}

.tool-card {
  background: rgba(26, 35, 50, 0.7);
  border: 1px solid rgba(107, 163, 232, 0.25);
  border-radius: 16px;
  padding: 28px;
  text-decoration: none;
  color: inherit;
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.tool-card:hover {
  border-color: rgba(107, 163, 232, 0.5);
  transform: translateY(-4px);
  box-shadow: 0 8px 24px rgba(107, 163, 232, 0.2);
}

.tool-icon {
  font-size: 2.5rem;
  line-height: 1;
}

.tool-title {
  font-size: 1.25rem;
  color: #f5f8f0;
  font-weight: 700;
  margin: 0;
}

.tool-description {
  font-size: 0.9rem;
  color: rgba(245, 248, 240, 0.75);
  line-height: 1.6;
  margin: 0;
  flex: 1;
}

.tool-link {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 16px;
  border-top: 1px solid rgba(107, 163, 232, 0.2);
  margin-top: auto;
  font-size: 0.9rem;
  color: #6ba3e8;
  font-weight: 600;
}

.tool-arrow {
  font-size: 1.2rem;
  color: #6ba3e8;
  transition: transform 0.3s ease;
}

  .tool-card:hover .tool-arrow {
    transform: translateX(4px);
  }

/* Inline Links */
.inline-link {
  color: #6ba3e8;
  text-decoration: none;
  font-weight: 600;
  border-bottom: 1px solid rgba(107, 163, 232, 0.3);
  transition: all 0.2s ease;
}

.inline-link:hover {
  color: #5cb85c;
  border-bottom-color: rgba(92, 184, 92, 0.5);
}

/* 1024px 响应式样式 */
@media (max-width: 1024px) {
  .hero-section {
    padding: 40px 0 32px;
  }

  .home-section {
    margin-bottom: 40px;
  }

  .section-header {
    margin-bottom: 40px;
  }

  .hero-title {
    font-size: 2.2rem;
    margin-bottom: 18px;
  }

  .hero-subtitle {
    font-size: 0.95rem;
    margin-bottom: 28px;
  }

  .section-title {
    font-size: 1.8rem;
  }

  .section-description {
    font-size: 0.9rem;
  }

  .hero-stats {
    gap: 20px;
    margin-bottom: 28px;
  }

  .stat-item {
    padding: 14px 20px;
    min-width: 90px;
  }

  .stat-value {
    font-size: 1.6rem;
  }

  .hero-actions {
    gap: 14px;
  }

  .btn-primary,
  .btn-secondary {
    padding: 11px 24px;
    font-size: 0.9rem;
  }

  .video-wrapper {
    height: 350px;
  }

  .game-version-selector {
    gap: 20px;
  }

  .version-title {
    font-size: 1.4rem;
  }

  .version-buttons {
    gap: 16px;
  }

  .version-button {
    padding: 14px 28px;
    font-size: 1rem;
    gap: 10px;
    min-width: 200px;
  }

  .play-icon {
    font-size: 1.3rem;
  }

  .version-text {
    font-size: 0.95rem;
  }

  .intro-main-text {
    font-size: 1.05rem;
    margin-bottom: 32px;
  }

  .game-mechanics-grid {
    gap: 20px;
  }

  .mechanic-item {
    padding: 20px;
    gap: 14px;
  }

  .mechanic-title {
    font-size: 1.05rem;
  }

  .mechanic-desc {
    font-size: 0.85rem;
  }

  .database-grid {
    gap: 28px;
    margin-top: 32px;
  }

  .database-card {
    padding: 28px;
  }

  .database-title {
    font-size: 1.4rem;
  }

  .database-description {
    font-size: 0.9rem;
  }

  .database-preview-grid {
    gap: 14px;
  }

  .db-preview-item {
    padding: 10px;
  }

  .db-preview-image {
    width: 56px;
    height: 56px;
  }

  .db-preview-name {
    font-size: 0.8rem;
  }

  .routes-preview-grid {
    gap: 20px;
    margin-top: 32px;
  }

  .route-preview-image {
    height: 160px;
  }

  .route-preview-content {
    padding: 18px;
    gap: 10px;
  }

  .route-preview-name {
    font-size: 1.05rem;
  }

  .route-preview-meta {
    font-size: 0.8rem;
    gap: 14px;
  }

  .terrain-tag {
    font-size: 0.7rem;
    padding: 3px 8px;
  }

  .tools-grid {
    gap: 20px;
    margin-top: 32px;
  }

  .tool-card {
    padding: 24px;
    gap: 14px;
  }

  .tool-icon {
    font-size: 2.2rem;
  }

  .tool-title {
    font-size: 1.2rem;
  }

  .tool-description {
    font-size: 0.85rem;
  }

  .tool-link {
    padding-top: 14px;
    font-size: 0.85rem;
  }

  .section-footer {
    margin-top: 28px;
  }
}

/* 768px 移动端响应式样式 */
@media (max-width: 768px) {
  .hero-section {
    padding: 30px 0 24px;
  }

  .home-section {
    margin-bottom: 1.2rem;
  }

  .section-header {
    margin-bottom: 1.2rem;
  }

  .hero-banner {
    margin-bottom: 1.2rem;
  }

  .hero-banner-badge {
    padding: 6px 16px;
    font-size: 0.75rem;
  }

  .hero-title {
    font-size: 1.6rem;
    margin-bottom: 0.8rem;
  }

  .hero-subtitle {
    font-size: 0.8rem;
    margin-bottom: 1.2rem;
    line-height: 1.6;
  }

  .section-title {
    font-size: 1.4rem;
  }

  .section-description {
    font-size: 0.8rem;
  }

  .section-title-wrapper {
    gap: 16px;
    margin-bottom: 0.8rem;
  }

  .section-title-line {
    max-width: 100px;
  }

  .hero-stats {
    gap: 16px;
    margin-bottom: 1.2rem;
  }

  .stat-item {
    padding: 12px 16px;
    min-width: 80px;
  }

  .stat-value {
    font-size: 1.4rem;
  }

  .stat-label {
    font-size: 0.7rem;
  }

  .hero-actions {
    gap: 12px;
    flex-direction: column;
    align-items: center;
  }

  .btn-primary,
  .btn-secondary {
    padding: 10px 20px;
    font-size: 0.85rem;
    min-width: 200px;
  }

  .video-wrapper {
    height: 250px;
  }

  .game-version-selector {
    gap: 1.2rem;
  }

  .version-title {
    font-size: 1.4rem;
  }

  .version-buttons {
    gap: 1.2rem;
    flex-direction: column;
  }

  .version-button {
    padding: 12px 24px;
    font-size: 1rem;
    gap: 8px;
    min-width: 200px;
  }

  .play-icon {
    font-size: 1.2rem;
  }

  .version-text {
    font-size: 0.9rem;
  }

  .game-intro-content {
    margin-top: 1.2rem;
  }

  .intro-main-text {
    font-size: 0.8rem;
    margin-bottom: 1.2rem;
    line-height: 1.6;
  }

  .game-mechanics-grid {
    grid-template-columns:  repeat(2, 1fr);
    gap: 0.8rem;
  }

  .mechanic-item {
    padding: 0.8rem;
    gap: 0.8rem;
    flex-direction: column;
    text-align: center;
  }

  .mechanic-icon {
    font-size: 1.8rem;
  }

  .mechanic-title {
    font-size: 1rem;
    margin-bottom: 0.4rem;
  }

  .mechanic-desc {
    font-size: 0.8rem;
  }

  .database-grid {
    grid-template-columns: 1fr;
    gap: 1.2rem;
    margin-top: 1.2rem;
  }

  .database-card {
    padding: 1.2rem;
  }

  .database-card-header {
    gap: 0.8rem;
    margin-bottom: 0.8rem;
  }

  .database-icon {
    font-size: 1.8rem;
  }

  .database-title {
    font-size: 1.2rem;
  }

  .database-description {
    font-size: 0.8rem;
    margin-bottom: 1.2rem;
  }

  .database-preview {
    margin: 1.2rem 0;
  }

  .database-preview-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 0.8rem;
  }

  .db-preview-item {
    padding: 0.8rem;
    gap: 0.4rem;
  }

  .db-preview-image {
    width: 48px;
    height: 48px;
  }

  .db-preview-name {
    font-size: 0.75rem;
  }

  .db-preview-stats {
    font-size: 0.7rem;
  }

  .db-enemy-threat {
    font-size: 0.65rem;
    padding: 1px 6px;
  }

  .database-action {
    padding-top: 1.2rem;
  }

  .routes-preview-grid {
    grid-template-columns: 1fr;
    gap: 1.2rem;
    margin-top: 1.2rem;
  }

  .route-preview-image {
    height: 200px;
  }

  .route-preview-overlay {
    top: 0.8rem;
    left: 0.8rem;
    right: 0.8rem;
  }

  .route-preview-number {
    padding: 4px 8px;
    font-size: 0.8rem;
  }

  .route-preview-difficulty {
    padding: 4px 8px;
    font-size: 0.7rem;
  }

  .route-preview-content {
    padding: 1.2rem;
    gap: 0.8rem;
  }

  .route-preview-name {
    font-size: 1.2rem;
  }

  .route-preview-meta {
    font-size: 0.75rem;
    gap: 12px;
  }

  .terrain-tag {
    font-size: 0.65rem;
    padding: 2px 6px;
  }

  .tools-grid {
    grid-template-columns: 1fr;
    gap: 1.2rem;
    margin-top: 1.2rem;
  }

  .tool-card {
    padding: 1.2rem;
    gap: 0.8rem;
  }

  .tool-icon {
    font-size: 2rem;
  }

  .tool-title {
    font-size: 1.2rem;
  }

  .tool-description {
    font-size: 0.8rem;
  }

  .tool-link {
    padding-top: 0.8rem;
    font-size: 0.8rem;
  }

  .tool-arrow {
    font-size: 1.1rem;
  }

  .section-footer {
    margin-top: 1.2rem;
  }
}
</style>