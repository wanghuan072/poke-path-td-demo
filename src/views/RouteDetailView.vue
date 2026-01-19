<template>
  <div class="page-view">
    <AppHeader />

    <div class="page-content" v-if="route">
      <div class="container">
        <!-- Header Section -->
        <section class="header-section">
          <div class="route-header">
            <div class="route-number">{{ route.routeNumber }}</div>
            <h1 class="route-title">{{ route.name }}</h1>
            <p class="route-description">{{ route.description }}</p>
          </div>
          
          <div class="route-meta">
            <div class="meta-item">
              <span class="meta-label">Stars</span>
              <span class="meta-value">{{ route.stars }}</span>
            </div>
            <div class="meta-item">
              <span class="meta-label">Difficulty</span>
              <span class="meta-value" :style="{ color: difficultyColors[route.difficulty] }">
                {{ route.difficulty }}
              </span>
            </div>
            <div class="meta-item">
              <span class="meta-label">Waves</span>
              <span class="meta-value">{{ route.totalWaves }}</span>
            </div>
            <div class="meta-item">
              <span class="meta-label">Playstyle</span>
              <span class="meta-value">{{ route.playstyle }}</span>
            </div>
          </div>
        </section>

        <!-- Main Content -->
        <div class="content-layout">
          <!-- Left Column: Route Guide (HTML Content) -->
          <div class="content-left">
            <!-- Route Guide (HTML Content) -->
            <section v-if="route.detailsHtml" class="section-card guide-card">
              <h2 class="section-title">Route Guide</h2>
              <div class="guide-content" v-html="route.detailsHtml"></div>
            </section>

            <!-- Related Tools -->
            <section class="section-card">
              <h2 class="section-title">Related Tools</h2>
              <div class="tools-list">
                <a href="/tools/route-strategy" class="tool-link">
                  <span class="tool-name">Route Strategy Tool</span>
                  <span class="tool-arrow">→</span>
                </a>
                <a href="/tools/dps-calculator" class="tool-link">
                  <span class="tool-name">DPS Calculator</span>
                  <span class="tool-arrow">→</span>
                </a>
                <a href="/tools/enemy-counter" class="tool-link">
                  <span class="tool-name">Enemy Counter</span>
                  <span class="tool-arrow">→</span>
                </a>
                <a href="/tier-list" class="tool-link">
                  <span class="tool-name">Tier List</span>
                  <span class="tool-arrow">→</span>
                </a>
              </div>
            </section>
          </div>

          <!-- Right Column: Map & Field Data -->
          <div class="content-right">
            <!-- Map Image Section -->
            <section class="section-card map-card">
              <h2 class="section-title">Map Overview</h2>
              <div class="map-container">
                <img
                  v-if="route.mapImage"
                  :src="route.mapImage"
                  :alt="`${route.name} map`"
                  class="map-image"
                />
                <div v-else class="map-placeholder">
                  <span>Map Preview</span>
                </div>
              </div>
            </section>

            <!-- Terrain Analysis -->
            <section class="section-card">
              <h2 class="section-title">Terrain Analysis</h2>
              
              <!-- Roads -->
              <div v-if="route.terrainAnalysis?.roads?.length" class="terrain-group">
                <h3 class="group-title">Roads & Paths</h3>
                <div class="terrain-list">
                  <div v-for="(road, index) in route.terrainAnalysis.roads" :key="index" class="terrain-item">
                    <div class="item-header">
                      <span class="item-name">Path {{ index + 1 }}</span>
                      <span class="item-badge">{{ road.length }}</span>
                    </div>
                    <p class="item-desc">{{ road.description }}</p>
                    <div v-if="road.chokepoints > 0" class="item-info">
                      {{ road.chokepoints }} chokepoints
                    </div>
                  </div>
                </div>
              </div>

              <!-- Water -->
              <div v-if="route.terrainAnalysis?.water?.length" class="terrain-group">
                <h3 class="group-title">Water Areas</h3>
                <div class="terrain-list">
                  <div v-for="(water, index) in route.terrainAnalysis.water" :key="index" class="terrain-item water-item">
                    <div class="item-header">
                      <span class="item-name">{{ water.type }}</span>
                      <span class="item-badge water-badge">{{ water.strategicValue }}</span>
                    </div>
                    <p class="item-desc">{{ water.description }}</p>
                    <div v-if="water.benefits" class="item-benefits">
                      {{ water.benefits }}
                    </div>
                  </div>
                </div>
              </div>

              <!-- Mountains -->
              <div v-if="route.terrainAnalysis?.mountains?.length" class="terrain-group">
                <h3 class="group-title">Mountains & High Ground</h3>
                <div class="terrain-list">
                  <div v-for="(mountain, index) in route.terrainAnalysis.mountains" :key="index" class="terrain-item mountain-item">
                    <div class="item-header">
                      <span class="item-name">{{ mountain.height }} Elevation</span>
                      <span class="item-badge mountain-badge">{{ mountain.strategicValue }}</span>
                    </div>
                    <p class="item-desc">{{ mountain.description }}</p>
                    <div v-if="mountain.benefits" class="item-benefits">
                      <div v-for="(benefit, idx) in mountain.benefits" :key="idx" class="benefit-item">
                        {{ benefit }}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Grass -->
              <div v-if="route.terrainAnalysis?.grass?.length" class="terrain-group">
                <h3 class="group-title">Grass & Vegetation</h3>
                <div class="terrain-list">
                  <div v-for="(grass, index) in route.terrainAnalysis.grass" :key="index" class="terrain-item grass-item">
                    <div class="item-header">
                      <span class="item-name">{{ grass.coverage }} Coverage</span>
                      <span class="item-badge grass-badge">Grass Terrain</span>
                    </div>
                    <p class="item-desc">{{ grass.description }}</p>
                    <div v-if="grass.benefits" class="item-benefits">
                      <div v-for="(benefit, idx) in grass.benefits" :key="idx" class="benefit-item">
                        {{ benefit }}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Chokepoints -->
              <div v-if="route.terrainAnalysis?.chokepoints?.length" class="terrain-group">
                <h3 class="group-title">Strategic Chokepoints</h3>
                <div class="chokepoints-list">
                  <div v-for="(point, index) in route.terrainAnalysis.chokepoints" :key="index" class="chokepoint-item">
                    <div class="chokepoint-header">
                      <span class="chokepoint-name">{{ point.location }}</span>
                      <span class="chokepoint-priority" :class="`priority-${point.priority.toLowerCase().replace(' ', '-')}`">
                        {{ point.priority }}
                      </span>
                    </div>
                    <p class="chokepoint-desc">{{ point.description }}</p>
                  </div>
                </div>
              </div>
            </section>

            <!-- Team Composition -->
            <section class="section-card">
              <h2 class="section-title">Team Composition</h2>
              
              <div class="team-phases">
                <div class="team-phase">
                  <div class="phase-label">Early Game (Levels 1-15)</div>
                  <div class="pokemon-list">
                    <span v-for="pokemon in route.teamComposition.early" :key="pokemon" class="pokemon-tag">
                      {{ pokemon }}
                    </span>
                  </div>
                </div>

                <div class="team-phase">
                  <div class="phase-label">Mid Game (Levels 16-35)</div>
                  <div class="pokemon-list">
                    <span v-for="pokemon in route.teamComposition.mid" :key="pokemon" class="pokemon-tag">
                      {{ pokemon }}
                    </span>
                  </div>
                </div>

                <div class="team-phase">
                  <div class="phase-label">Late Game (Levels 36-100)</div>
                  <div class="pokemon-list">
                    <span v-for="pokemon in route.teamComposition.late" :key="pokemon" class="pokemon-tag">
                      {{ pokemon }}
                    </span>
                  </div>
                </div>
              </div>
            </section>

            <!-- Recommended Types -->
            <section v-if="route.recommendedTypes?.length" class="section-card">
              <h2 class="section-title">Recommended Types</h2>
              <div class="types-list">
                <span v-for="type in route.recommendedTypes" :key="type" class="type-tag">
                  {{ type }}
                </span>
              </div>
            </section>

            <!-- Strategies -->
            <section v-if="route.strategies?.length" class="section-card">
              <h2 class="section-title">Key Strategies</h2>
              <div class="strategies-list">
                <span v-for="strategy in route.strategies" :key="strategy" class="strategy-tag">
                  {{ strategy }}
                </span>
              </div>
            </section>

            <!-- Tips -->
            <section v-if="route.tips?.length" class="section-card">
              <h2 class="section-title">Pro Tips</h2>
              <div class="tips-list">
                <div v-for="(tip, index) in route.tips" :key="index" class="tip-item">
                  <span class="tip-number">{{ index + 1 }}</span>
                  <span class="tip-text">{{ tip }}</span>
                </div>
              </div>
            </section>
          </div>
        </div>

        <!-- Back Button -->
        <div class="back-section">
          <a href="/map-router" class="back-link">← Back to Routes</a>
        </div>
      </div>
    </div>

    <div v-else class="page-content">
      <div class="container">
        <div class="error-message">
          <h2>Route not found</h2>
          <p>The route you're looking for doesn't exist.</p>
          <a href="/map-router" class="back-link">Back to Routes List</a>
        </div>
      </div>
    </div>

    <AppFooter />
  </div>
</template>

<script setup>
import { ref, computed, onMounted, watch } from 'vue'
import { useRoute } from 'vue-router'
import AppHeader from '../components/AppHeader.vue'
import AppFooter from '../components/AppFooter.vue'
import { stages, difficultyColors } from '../data/routes.js'
import { useSEO } from '../seo/composables.js'

const routeParams = useRoute()
const routeData = ref(null)
const { setSEO } = useSEO()

const loadRoute = () => {
  const routeId = routeParams.params.id
  routeData.value = stages.find(s => s.id === routeId)
  if (routeData.value && routeData.value.seo) {
    // 使用数据中的 seo 字段设置 TDK
    const seoData = {
      title: routeData.value.seo.title || `${routeData.value.name} - Detailed Strategy Guide | PokéPath TD`,
      description: routeData.value.seo.description || routeData.value.description,
      keywords: routeData.value.seo.keywords || 'Route Detail, Terrain Analysis, Team Composition, Strategy Guide',
      image: routeData.value.mapImage || '/images/logo.webp',
      type: 'article'
    }
    setSEO(seoData)
  }
}

onMounted(() => {
  loadRoute()
})

watch(() => routeParams.params.id, () => {
  loadRoute()
})

const route = computed(() => routeData.value)
</script>

<style scoped>
.page-view {
  min-height: 100vh;
  background: linear-gradient(180deg, #0f1419 0%, #1a2332 100%);
}

.page-content {
  padding-top: 80px;
}

.container {
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 1rem;
}

@media (min-width: 640px) {
  .container {
    padding: 0 1.5rem;
  }
}

@media (min-width: 1024px) {
  .container {
    padding: 0 2rem;
  }
}

/* Header Section */
.header-section {
  margin-bottom: 1.5rem;
}

.route-header {
  margin-bottom: 1rem;
}

.route-number {
  display: inline-block;
  padding: 0.4rem 0.8rem;
  background: rgba(107, 163, 232, 0.2);
  border: 1px solid rgba(107, 163, 232, 0.4);
  border-radius: 6px;
  color: #6ba3e8;
  font-weight: 600;
  font-size: 0.9rem;
  margin-bottom: 0.75rem;
}

.route-title {
  font-size: 2rem;
  font-weight: 700;
  color: #f5f8f0;
  margin: 0 0 0.5rem 0;
}

.route-description {
  font-size: 1rem;
  color: rgba(245, 248, 240, 0.8);
  line-height: 1.6;
  margin: 0;
}

.route-meta {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: 0.75rem;
  margin-top: 1rem;
}

.meta-item {
  display: flex;
  flex-direction: column;
  padding: 0.75rem;
  background: rgba(26, 35, 50, 0.6);
  border: 1px solid rgba(107, 163, 232, 0.2);
  border-radius: 8px;
}

.meta-label {
  font-size: 0.75rem;
  color: rgba(245, 248, 240, 0.6);
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin-bottom: 0.25rem;
}

.meta-value {
  font-size: 1.1rem;
  font-weight: 600;
  color: #f5f8f0;
}

/* Map Card */
.map-card {
  margin-bottom: 1.5rem;
}

.map-container {
  width: 100%;
  border-radius: 8px;
  overflow: hidden;
  background: rgba(15, 20, 30, 0.4);
  border: 1px solid rgba(107, 163, 232, 0.15);
}

.map-image {
  width: 100%;
  height: auto;
  display: block;
}

.map-placeholder {
  width: 100%;
  min-height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgba(245, 248, 240, 0.4);
  font-size: 0.9rem;
}

/* Content Layout */
.content-layout {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
  margin-bottom: 2rem;
}

@media (min-width: 1024px) {
  .content-layout {
    grid-template-columns: 1.5fr 1fr;
  }
}

/* Section Card */
.section-card {
  background: rgba(26, 35, 50, 0.6);
  border: 1px solid rgba(107, 163, 232, 0.2);
  border-radius: 12px;
  padding: 1.25rem;
  margin-bottom: 1.5rem;
}

.section-title {
  font-size: 1.25rem;
  font-weight: 600;
  color: #f5f8f0;
  margin: 0 0 1rem 0;
  padding-bottom: 0.75rem;
  border-bottom: 1px solid rgba(107, 163, 232, 0.2);
}

/* Guide Content (HTML) */
.guide-card {
  margin-bottom: 1.5rem;
}

.guide-content {
  color: rgba(245, 248, 240, 0.9);
  line-height: 1.7;
  font-size: 0.95rem;
}

.guide-content :deep(p) {
  margin: 0.75rem 0;
  line-height: 1.7;
}

.guide-content :deep(h3) {
  font-size: 1.2rem;
  font-weight: 600;
  color: #6ba3e8;
  margin: 1.5rem 0 0.75rem 0;
  padding-top: 1rem;
  border-top: 1px solid rgba(107, 163, 232, 0.2);
}

.guide-content :deep(h3:first-child) {
  margin-top: 0;
  padding-top: 0;
  border-top: none;
}

.guide-content :deep(h4) {
  font-size: 1.05rem;
  font-weight: 600;
  color: #5cb85c;
  margin: 1.25rem 0 0.5rem 0;
}

.guide-content :deep(ul),
.guide-content :deep(ol) {
  margin: 0.75rem 0;
  padding-left: 1.5rem;
}

.guide-content :deep(li) {
  margin: 0.5rem 0;
  line-height: 1.6;
}

.guide-content :deep(ul ul),
.guide-content :deep(ol ol) {
  margin: 0.5rem 0;
  padding-left: 1.25rem;
}

.guide-content :deep(strong) {
  color: #f5f8f0;
  font-weight: 600;
}

.guide-content :deep(em) {
  color: rgba(245, 248, 240, 0.8);
  font-style: italic;
}

.guide-content :deep(img) {
  width: 100%;
  height: auto;
  display: block;
  margin: 0.75rem 0;
}

/* Terrain Section */
.terrain-group {
  margin-bottom: 1.25rem;
}

.terrain-group:last-child {
  margin-bottom: 0;
}

.group-title {
  font-size: 1rem;
  font-weight: 600;
  color: #6ba3e8;
  margin: 0 0 0.75rem 0;
}

.terrain-list {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.terrain-item {
  padding: 0.75rem;
  background: rgba(15, 20, 30, 0.4);
  border-left: 3px solid rgba(107, 163, 232, 0.5);
  border-radius: 6px;
}

.water-item {
  border-left-color: rgba(92, 184, 232, 0.5);
}

.mountain-item {
  border-left-color: rgba(184, 134, 92, 0.5);
}

.grass-item {
  border-left-color: rgba(92, 184, 92, 0.5);
}

.item-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.5rem;
}

.item-name {
  font-weight: 600;
  color: #f5f8f0;
  font-size: 0.9rem;
}

.item-badge {
  padding: 0.2rem 0.6rem;
  background: rgba(107, 163, 232, 0.2);
  border: 1px solid rgba(107, 163, 232, 0.4);
  border-radius: 4px;
  font-size: 0.75rem;
  color: #6ba3e8;
  font-weight: 500;
}

.water-badge {
  background: rgba(92, 184, 232, 0.2);
  border-color: rgba(92, 184, 232, 0.4);
  color: #5cb8e8;
}

.mountain-badge {
  background: rgba(184, 134, 92, 0.2);
  border-color: rgba(184, 134, 92, 0.4);
  color: #b8865c;
}

.grass-badge {
  background: rgba(92, 184, 92, 0.2);
  border-color: rgba(92, 184, 92, 0.4);
  color: #5cb85c;
}

.item-desc {
  color: rgba(245, 248, 240, 0.8);
  font-size: 0.85rem;
  line-height: 1.5;
  margin: 0.5rem 0;
}

.item-info {
  font-size: 0.75rem;
  color: rgba(245, 248, 240, 0.6);
  margin-top: 0.5rem;
}

.item-benefits {
  margin-top: 0.5rem;
  padding-top: 0.5rem;
  border-top: 1px solid rgba(107, 163, 232, 0.1);
}

.benefit-item {
  font-size: 0.8rem;
  color: rgba(245, 248, 240, 0.8);
  margin-top: 0.25rem;
}

.benefit-item:first-child {
  margin-top: 0;
}

/* Chokepoints */
.chokepoints-list {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.chokepoint-item {
  padding: 0.75rem;
  background: rgba(15, 20, 30, 0.4);
  border-left: 3px solid rgba(107, 163, 232, 0.5);
  border-radius: 6px;
}

.chokepoint-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.5rem;
}

.chokepoint-name {
  font-weight: 600;
  color: #f5f8f0;
  font-size: 0.9rem;
}

.chokepoint-priority {
  padding: 0.2rem 0.6rem;
  border-radius: 4px;
  font-size: 0.7rem;
  font-weight: 600;
  text-transform: uppercase;
}

.priority-very-high {
  background: rgba(217, 83, 79, 0.2);
  border: 1px solid rgba(217, 83, 79, 0.4);
  color: #d9534f;
}

.priority-high {
  background: rgba(240, 173, 78, 0.2);
  border: 1px solid rgba(240, 173, 78, 0.4);
  color: #f0ad4e;
}

.priority-medium {
  background: rgba(92, 184, 92, 0.2);
  border: 1px solid rgba(92, 184, 92, 0.4);
  color: #5cb85c;
}

.chokepoint-desc {
  color: rgba(245, 248, 240, 0.8);
  font-size: 0.85rem;
  line-height: 1.5;
  margin: 0;
}

/* Team Section */
.team-phases {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.team-phase {
  padding-bottom: 1rem;
  border-bottom: 1px solid rgba(107, 163, 232, 0.1);
}

.team-phase:last-child {
  border-bottom: none;
  padding-bottom: 0;
}

.phase-label {
  font-size: 0.9rem;
  font-weight: 600;
  color: #6ba3e8;
  margin-bottom: 0.75rem;
}

.pokemon-list {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.pokemon-tag {
  padding: 0.5rem 0.9rem;
  background: rgba(107, 163, 232, 0.15);
  border: 1px solid rgba(107, 163, 232, 0.4);
  border-radius: 6px;
  color: #6ba3e8;
  font-weight: 500;
  font-size: 0.85rem;
}

/* Types Section */
.types-list {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.type-tag {
  padding: 0.5rem 0.9rem;
  background: rgba(92, 184, 92, 0.15);
  border: 1px solid rgba(92, 184, 92, 0.4);
  border-radius: 6px;
  color: #5cb85c;
  font-weight: 500;
  font-size: 0.85rem;
}

/* Strategies Section */
.strategies-list {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.strategy-tag {
  padding: 0.5rem 0.9rem;
  background: rgba(255, 193, 7, 0.15);
  border: 1px solid rgba(255, 193, 7, 0.4);
  border-radius: 6px;
  color: #ffc107;
  font-weight: 500;
  font-size: 0.85rem;
}

/* Tips Section */
.tips-list {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.tip-item {
  display: flex;
  gap: 0.75rem;
  padding: 0.75rem;
  background: rgba(15, 20, 30, 0.4);
  border-left: 3px solid rgba(92, 184, 92, 0.5);
  border-radius: 6px;
}

.tip-number {
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(92, 184, 92, 0.2);
  border-radius: 4px;
  color: #5cb85c;
  font-weight: 600;
  font-size: 0.8rem;
  flex-shrink: 0;
}

.tip-text {
  color: rgba(245, 248, 240, 0.9);
  font-size: 0.85rem;
  line-height: 1.5;
  flex: 1;
}

/* Tools Section */
.tools-list {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.tool-link {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.75rem;
  background: rgba(15, 20, 30, 0.4);
  border: 1px solid rgba(107, 163, 232, 0.2);
  border-radius: 6px;
  text-decoration: none;
  color: #f5f8f0;
  transition: all 0.2s ease;
}

.tool-link:hover {
  background: rgba(107, 163, 232, 0.1);
  border-color: rgba(107, 163, 232, 0.4);
}

.tool-name {
  font-size: 0.9rem;
  font-weight: 500;
}

.tool-arrow {
  color: #6ba3e8;
  font-size: 1rem;
}

/* Back Section */
.back-section {
  text-align: center;
  padding: 1.5rem 0 3rem;
}

.back-link {
  display: inline-block;
  padding: 0.75rem 1.5rem;
  background: rgba(107, 163, 232, 0.2);
  border: 1px solid rgba(107, 163, 232, 0.4);
  border-radius: 8px;
  color: #6ba3e8;
  text-decoration: none;
  font-weight: 500;
  font-size: 0.9rem;
  transition: all 0.2s ease;
}

.back-link:hover {
  background: rgba(107, 163, 232, 0.3);
  border-color: #6ba3e8;
}

/* Error Message */
.error-message {
  text-align: center;
  padding: 4rem 2rem;
  color: #f5f8f0;
}

.error-message h2 {
  font-size: 2rem;
  margin: 0 0 1rem 0;
}

.error-message p {
  font-size: 1.1rem;
  color: rgba(245, 248, 240, 0.8);
  margin: 0 0 2rem 0;
}

/* Responsive */
@media (max-width: 768px) {
  .route-title {
    font-size: 1.5rem;
  }

  .route-meta {
    grid-template-columns: repeat(2, 1fr);
  }

  .section-card {
    padding: 1rem;
  }

  .section-title {
    font-size: 1.1rem;
  }
}
</style>
