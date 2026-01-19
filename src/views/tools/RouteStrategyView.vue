<template>
  <div class="page-view">
    <AppHeader />
    
    <div class="page-content">
      <!-- Page Header -->
      <section class="page-header">
        <div class="page-header-content">
          <div class="page-header-badge">
            <span class="badge-icon">🗺️</span>
            <span class="badge-text">Route Strategy</span>
          </div>
          <h1 class="page-title">Route Strategy Guide</h1>
          <p class="page-subtitle">
            Master PokéPath TD route strategy with expert team compositions, terrain advantages, and map-specific tips for every route. For detailed walkthroughs, check out our comprehensive guides for <a href="/map-router/how-to-beat-route-1-1-articuno" class="inline-link">Route 1-1</a>, <a href="/map-router/how-to-beat-route-2-2-entei" class="inline-link">Route 2-2</a>, and <a href="/map-router/how-to-beat-route-3-1-regirock-wave-100-guide" class="inline-link">Route 3-1</a>.
          </p>
        </div>
      </section>

      <div class="container">
        <!-- Main Functionality -->
        <section class="strategy-content">
          <!-- Left: Route List -->
          <div class="route-list-section">
            <div class="route-list-header">
              <h3 class="section-heading">
                <span class="heading-icon">🗺️</span>
                Route List
              </h3>
            </div>
            <div class="route-list-grid">
              <div
                v-for="route in routes"
                :key="route.id"
                class="route-card"
                :class="{ active: selectedRouteId === route.id }"
                @click="selectedRouteId = route.id"
              >
                <!-- Route Image -->
                <div class="route-card-image-wrapper">
                  <img
                    v-if="route.mapImage"
                    :src="route.mapImage"
                    :alt="`${route.name} map`"
                    class="route-card-image"
                  />
                  <div v-else class="route-card-image-placeholder">
                    <span class="placeholder-icon-small">🗺️</span>
                  </div>
                  <!-- Overlay Badges -->
                  <div class="route-card-overlay-badges">
                    <div class="route-card-number">{{ route.routeNumber }}</div>
                    <div
                      class="route-card-difficulty"
                      :style="{ '--difficulty-color': difficultyColors[route.difficulty] }"
                    >
                      {{ route.difficulty }}
                    </div>
                  </div>
                </div>
                <!-- Route Info -->
                <div class="route-card-content">
                  <h4 class="route-card-name">{{ route.name }}</h4>
                  <div class="route-card-meta">
                    <span class="route-card-star">⭐ {{ route.stars }}</span>
                    <span class="route-card-wave">🌊 {{ route.totalWaves || 100 }}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Right: Route Detail -->
          <div class="route-detail-section">
            <div v-if="selectedRoute" class="route-detail-card">
              <!-- Route Header with Image -->
              <div class="route-detail-header">
                <div class="route-detail-image-wrapper">
                  <img
                    v-if="selectedRoute.mapImage"
                    :src="selectedRoute.mapImage"
                    :alt="`${selectedRoute.name} map`"
                    class="route-detail-image"
                  />
                  <div v-else class="route-detail-image-placeholder">
                    <span class="placeholder-icon-large">🗺️</span>
                  </div>
                </div>
                <div class="route-detail-info">
                  <div class="route-detail-title-row">
                    <div class="route-number-detail">{{ selectedRoute.routeNumber }}</div>
                    <h2 class="route-name-detail">{{ selectedRoute.name }}</h2>
                  </div>
                  <div class="route-detail-meta-row">
                    <span
                      class="difficulty-badge-detail"
                      :style="{ '--difficulty-color': difficultyColors[selectedRoute.difficulty] }"
                    >
                      {{ selectedRoute.difficulty }}
                    </span>
                    <span class="route-stars-detail">⭐ {{ selectedRoute.stars }}</span>
                    <span class="route-waves-detail">🌊 {{ selectedRoute.totalWaves || 100 }}</span>
                    <span v-if="selectedRoute.playstyle" class="route-playstyle-detail">
                      🎮 {{ selectedRoute.playstyle }}
                    </span>
                  </div>
                </div>
              </div>

              <!-- Route Attributes -->
              <div class="route-attributes-compact">
                <div v-if="selectedRoute.terrain && selectedRoute.terrain.length > 0" class="attribute-row">
                  <span class="attribute-label-compact">🗺️ Terrain</span>
                  <div class="attribute-tags-compact">
                    <span
                      v-for="terrain in selectedRoute.terrain"
                      :key="terrain"
                      class="attribute-tag-compact terrain"
                    >
                      {{ terrain }}
                    </span>
                  </div>
                </div>
                <div v-if="selectedRoute.recommendedTypes && selectedRoute.recommendedTypes.length > 0" class="attribute-row">
                  <span class="attribute-label-compact">💡 Recommended Types</span>
                  <div class="attribute-tags-compact">
                    <span
                      v-for="type in selectedRoute.recommendedTypes"
                      :key="type"
                      class="attribute-tag-compact type"
                    >
                      {{ type }}
                    </span>
                  </div>
                </div>
              </div>

              <!-- Team Composition -->
              <div v-if="selectedRoute.teamComposition" class="team-composition-compact">
                <h3 class="section-title-compact">
                  <span class="title-icon-compact">👥</span>
                  Team Composition
                </h3>
                <div class="team-phases-compact">
                  <div v-if="selectedRoute.teamComposition.early" class="team-phase-compact">
                    <h4 class="phase-title-compact">Early Game</h4>
                    <div class="team-pokemon-compact">
                      <span
                        v-for="pokemon in selectedRoute.teamComposition.early"
                        :key="pokemon"
                        class="team-pokemon-tag-compact"
                      >
                        {{ pokemon }}
                      </span>
                    </div>
                  </div>
                  <div v-if="selectedRoute.teamComposition.mid" class="team-phase-compact">
                    <h4 class="phase-title-compact">Mid Game</h4>
                    <div class="team-pokemon-compact">
                      <span
                        v-for="pokemon in selectedRoute.teamComposition.mid"
                        :key="pokemon"
                        class="team-pokemon-tag-compact"
                      >
                        {{ pokemon }}
                      </span>
                    </div>
                  </div>
                  <div v-if="selectedRoute.teamComposition.late" class="team-phase-compact">
                    <h4 class="phase-title-compact">Late Game</h4>
                    <div class="team-pokemon-compact">
                      <span
                        v-for="pokemon in selectedRoute.teamComposition.late"
                        :key="pokemon"
                        class="team-pokemon-tag-compact"
                      >
                        {{ pokemon }}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Tips Section -->
              <div v-if="selectedRoute.tips && selectedRoute.tips.length > 0" class="tips-section-compact">
                <h3 class="section-title-compact">
                  <span class="title-icon-compact">💡</span>
                  Strategy Tips
                </h3>
                <ul class="tips-list-compact">
                  <li v-for="(tip, index) in selectedRoute.tips" :key="index">{{ tip }}</li>
                </ul>
              </div>
            </div>

            <div v-else class="route-placeholder-card">
              <div class="placeholder-icon">🗺️</div>
              <h3 class="placeholder-title">Select a Route</h3>
              <p class="placeholder-text">Choose a route from the list to view detailed strategy guide. Or explore our in-depth guides for <a href="/map-router/how-to-beat-route-1-3-moltres" class="inline-link">Route 1-3 (Moltres)</a> and <a href="/map-router/how-to-beat-route-3-2-regice-dewgong-strategy" class="inline-link">Route 3-2 (Regice)</a>.</p>
            </div>
          </div>
        </section>

        <!-- Introduction Section -->
        <section class="intro-section">
          <div class="intro-card">
            <h2 class="intro-title">📖 How to Use Route Strategy</h2>
            <div class="intro-content">
              <p>
                The Route Strategy tool provides comprehensive guidance for each map route in PokéPath TD. 
                Plan your team composition, understand terrain advantages, and follow strategic tips to master every route.
              </p>
              <div class="intro-steps">
                <div class="intro-step">
                  <span class="step-number">1</span>
                  <div class="step-content">
                    <h4>Select Your Route</h4>
                    <p>Choose the route you want to strategize for from the dropdown menu above.</p>
                  </div>
                </div>
                <div class="intro-step">
                  <span class="step-number">2</span>
                  <div class="step-content">
                    <h4>Review Terrain & Types</h4>
                    <p>Understand the terrain types and recommended Pokémon types for optimal placement and effectiveness.</p>
                  </div>
                </div>
                <div class="intro-step">
                  <span class="step-number">3</span>
                  <div class="step-content">
                    <h4>Plan Team Composition</h4>
                    <p>Follow the recommended team compositions for early, mid, and late game phases to ensure a smooth progression.</p>
                  </div>
                </div>
                <div class="intro-step">
                  <span class="step-number">4</span>
                  <div class="step-content">
                    <h4>Apply Strategic Tips</h4>
                    <p>Read and implement the strategic tips provided for each route to maximize your success rate.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- FAQ Section -->
        <section class="faq-section">
          <div class="faq-card">
            <h2 class="faq-title">❓ Frequently Asked Questions</h2>
            <div class="faq-list">
              <div class="faq-item">
                <h3 class="faq-question">Why are team compositions split into Early/Mid/Late game?</h3>
                <p class="faq-answer">
                  Different phases of the game require different strategies. Early game focuses on economy and basic defense, 
                  mid game transitions to stronger units, and late game requires maximum DPS and specialized counters for bosses.
                </p>
              </div>
              <div class="faq-item">
                <h3 class="faq-question">How important is terrain advantage?</h3>
                <p class="faq-answer">
                  Terrain advantages can significantly boost Pokémon effectiveness. For example, Grass-type Pokémon perform 
                  better on Grass terrain, and Water-type Pokémon excel near water areas. Always consider terrain when placing units.
                </p>
              </div>
              <div class="faq-item">
                <h3 class="faq-question">Should I follow the recommended team exactly?</h3>
                <p class="faq-answer">
                  Recommendations are guidelines based on optimal strategies. Adapt them based on your available Pokémon, 
                  upgrade levels, and personal playstyle. The key is understanding the principles behind the recommendations.
                </p>
              </div>
              <div class="faq-item">
                <h3 class="faq-question">What if I don't have all recommended Pokémon?</h3>
                <p class="faq-answer">
                  Look for Pokémon with similar roles and abilities. For example, if a Fire-type is recommended but you 
                  don't have it, consider other high DPS Pokémon or those with similar abilities. The tool helps you understand 
                  what roles need to be filled.
                </p>
              </div>
              <div class="faq-item">
                <h3 class="faq-question">How do I transition between game phases?</h3>
                <p class="faq-answer">
                  Gradually replace early game units with mid game upgrades as you accumulate resources. Don't sell all 
                  early units at once - maintain coverage while upgrading. Save resources for late game power spikes when bosses appear.
                </p>
              </div>
              <div class="faq-item">
                <h3 class="faq-question">What does the difficulty rating mean?</h3>
                <p class="faq-answer">
                  Difficulty ratings indicate the overall challenge level of the route. Easy routes are beginner-friendly, 
                  while harder routes require more strategic planning, better team composition, and optimal resource management.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>

    <AppFooter />
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import AppHeader from '../../components/AppHeader.vue'
import AppFooter from '../../components/AppFooter.vue'
import { stages as routesData, difficultyColors } from '../../data/routes.js'

const route = useRoute()
const selectedRouteId = ref('')

const routes = computed(() => routesData)

const selectedRoute = computed(() => {
  if (!selectedRouteId.value) return null
  return routesData.find(r => r.id === selectedRouteId.value)
})

// Auto-select route from query parameter
onMounted(() => {
  const routeParam = route.query.route
  if (routeParam) {
    selectedRouteId.value = routeParam
  }
})
</script>

<style scoped>
/* Page View and Content styles are now in main.css */
/* Page Header styles are now in main.css */

.strategy-content {
  padding: 2rem 0;
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  gap: 24px;
  align-items: start;
}

/* Route List Section */
.route-list-section {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

/* Route Detail Section */
.route-detail-section {
  position: sticky;
  top: 20px;
}

.route-detail-card {
  background: rgba(26, 35, 50, 0.8);
  border: 1px solid rgba(107, 163, 232, 0.2);
  border-radius: 12px;
  padding: 20px;
  backdrop-filter: blur(10px);
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.route-placeholder-card {
  background: rgba(26, 35, 50, 0.8);
  border: 1px solid rgba(107, 163, 232, 0.2);
  border-radius: 12px;
  padding: 60px 24px;
  text-align: center;
  backdrop-filter: blur(10px);
}

.placeholder-icon {
  font-size: 3rem;
  margin-bottom: 16px;
  opacity: 0.5;
}

.placeholder-title {
  font-size: 1.3rem;
  color: #f5f8f0;
  margin: 0 0 8px 0;
  font-weight: 700;
}

.placeholder-text {
  color: rgba(245, 248, 240, 0.6);
  font-size: 0.9rem;
  margin: 0;
}

/* Route Detail Header */
.route-detail-header {
  display: flex;
  gap: 16px;
  padding-bottom: 16px;
  border-bottom: 1px solid rgba(107, 163, 232, 0.2);
}

.route-detail-image-wrapper {
  flex-shrink: 0;
  width: 200px;
  height: 140px;
  border-radius: 8px;
  overflow: hidden;
  background: rgba(15, 20, 30, 0.8);
  border: 1px solid rgba(107, 163, 232, 0.2);
}

.route-detail-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.route-detail-image-placeholder {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(15, 20, 30, 0.8);
}

.placeholder-icon-large {
  font-size: 3rem;
  opacity: 0.4;
}

.route-detail-info {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.route-detail-title-row {
  display: flex;
  align-items: center;
  gap: 12px;
}

.route-number-detail {
  padding: 6px 12px;
  background: rgba(26, 35, 50, 0.95);
  border: 2px solid #6ba3e8;
  border-radius: 6px;
  font-size: 0.85rem;
  font-weight: 700;
  color: #6ba3e8;
  white-space: nowrap;
}

.route-name-detail {
  font-size: 1.5rem;
  color: #f5f8f0;
  margin: 0;
  font-weight: 700;
  line-height: 1.2;
}

.route-detail-meta-row {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  align-items: center;
}

.difficulty-badge-detail {
  padding: 5px 10px;
  background: var(--difficulty-color);
  color: white;
  border-radius: 6px;
  font-size: 0.8rem;
  font-weight: 600;
  white-space: nowrap;
}

.route-stars-detail,
.route-waves-detail,
.route-playstyle-detail {
  padding: 5px 10px;
  background: rgba(15, 20, 30, 0.5);
  border: 1px solid rgba(107, 163, 232, 0.2);
  border-radius: 6px;
  font-size: 0.8rem;
  font-weight: 600;
  color: #f5f8f0;
}

.route-stars-detail {
  color: #ffd700;
}

/* Route Attributes Compact */
.route-attributes-compact {
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding-top: 16px;
  border-top: 1px solid rgba(107, 163, 232, 0.2);
}

.attribute-row {
  display: flex;
  align-items: flex-start;
  gap: 10px;
}

.attribute-label-compact {
  font-size: 0.8rem;
  font-weight: 600;
  color: rgba(245, 248, 240, 0.8);
  white-space: nowrap;
  padding-top: 4px;
  min-width: 120px;
}

.attribute-tags-compact {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  flex: 1;
}

.attribute-tag-compact {
  padding: 5px 10px;
  border-radius: 6px;
  font-size: 0.75rem;
  font-weight: 500;
}

.attribute-tag-compact.terrain {
  background: rgba(107, 163, 232, 0.15);
  border: 1px solid rgba(107, 163, 232, 0.4);
  color: #6ba3e8;
}

.attribute-tag-compact.type {
  background: rgba(92, 184, 92, 0.15);
  border: 1px solid rgba(92, 184, 92, 0.4);
  color: #5cb85c;
}

/* Team Composition Compact */
.team-composition-compact {
  padding-top: 16px;
  border-top: 1px solid rgba(107, 163, 232, 0.2);
}

.section-title-compact {
  font-size: 1.1rem;
  color: #f5f8f0;
  margin: 0 0 12px 0;
  font-weight: 700;
  display: flex;
  align-items: center;
  gap: 6px;
}

.title-icon-compact {
  font-size: 1rem;
}

.team-phases-compact {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.team-phase-compact {
  padding: 12px;
  background: rgba(15, 20, 30, 0.5);
  border: 1px solid rgba(107, 163, 232, 0.2);
  border-radius: 8px;
}

.phase-title-compact {
  font-size: 0.9rem;
  color: #6ba3e8;
  margin: 0 0 10px 0;
  font-weight: 700;
  padding-bottom: 6px;
  border-bottom: 2px solid rgba(107, 163, 232, 0.3);
}

.team-pokemon-compact {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}

.team-pokemon-tag-compact {
  padding: 5px 10px;
  background: rgba(92, 184, 92, 0.15);
  border: 1px solid rgba(92, 184, 92, 0.4);
  border-radius: 6px;
  color: #5cb85c;
  font-size: 0.75rem;
  font-weight: 500;
}

/* Tips Section Compact */
.tips-section-compact {
  padding-top: 16px;
  border-top: 1px solid rgba(107, 163, 232, 0.2);
}

.tips-list-compact {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.tips-list-compact li {
  padding: 10px 14px;
  padding-left: 36px;
  position: relative;
  background: rgba(15, 20, 30, 0.5);
  border-left: 3px solid #6ba3e8;
  border-radius: 8px;
  color: rgba(245, 248, 240, 0.9);
  font-size: 0.85rem;
  line-height: 1.5;
}

.tips-list-compact li::before {
  content: '💡';
  position: absolute;
  left: 10px;
  top: 10px;
  font-size: 1rem;
}

.route-list-header {
  margin-bottom: 12px;
}

.section-heading {
  font-size: 1.3rem;
  color: #f5f8f0;
  margin: 0;
  font-weight: 700;
  display: flex;
  align-items: center;
  gap: 8px;
}

.heading-icon {
  font-size: 1.2rem;
}

.route-list-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 12px;
  padding-right: 8px;
}

.route-list-grid::-webkit-scrollbar {
  width: 6px;
}

.route-list-grid::-webkit-scrollbar-track {
  background: rgba(15, 20, 30, 0.5);
  border-radius: 3px;
}

.route-list-grid::-webkit-scrollbar-thumb {
  background: rgba(107, 163, 232, 0.3);
  border-radius: 3px;
}

.route-list-grid::-webkit-scrollbar-thumb:hover {
  background: rgba(107, 163, 232, 0.5);
}

.route-card {
  background: rgba(26, 35, 50, 0.8);
  border: 1px solid rgba(107, 163, 232, 0.2);
  border-radius: 10px;
  overflow: hidden;
  cursor: pointer;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
  display: flex;
  flex-direction: column;
  gap: 0;
}

.route-card:hover {
  border-color: #6ba3e8;
  transform: translateY(-4px);
  box-shadow: 0 8px 24px rgba(107, 163, 232, 0.4);
}

.route-card.active {
  border-color: #6ba3e8;
  box-shadow: 0 0 0 2px rgba(107, 163, 232, 0.3), 0 8px 24px rgba(107, 163, 232, 0.4);
}

/* Route Card Image */
.route-card-image-wrapper {
  position: relative;
  width: 100%;
  height: 120px;
  flex-shrink: 0;
  overflow: hidden;
  background: rgba(15, 20, 30, 0.8);
}

.route-card-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.route-card:hover .route-card-image {
  transform: scale(1.05);
}

.route-card-image-placeholder {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(15, 20, 30, 0.8);
}

.placeholder-icon-small {
  font-size: 3rem;
  opacity: 0.4;
}

.route-card-overlay-badges {
  position: absolute;
  top: 4px;
  left: 4px;
  right: 4px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 4px;
  z-index: 2;
}

.route-card-number {
  padding: 3px 8px;
  background: rgba(26, 35, 50, 0.95);
  border: 2px solid #6ba3e8;
  border-radius: 4px;
  font-size: 0.7rem;
  font-weight: 700;
  color: #6ba3e8;
  backdrop-filter: blur(10px);
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.4);
}

.route-card-difficulty {
  padding: 3px 8px;
  background: var(--difficulty-color);
  color: white;
  border-radius: 4px;
  font-size: 0.7rem;
  font-weight: 600;
  backdrop-filter: blur(10px);
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.4);
}

/* Route Card Content */
.route-card-content {
  padding: 10px 12px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 6px;
  flex: 1;
  min-width: 0;
}

.route-card-name {
  font-size: 0.9rem;
  color: #f5f8f0;
  margin: 0;
  font-weight: 700;
  line-height: 1.2;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.route-card-meta {
  display: flex;
  gap: 8px;
  font-size: 0.75rem;
  color: rgba(245, 248, 240, 0.8);
}

.route-card-star {
  color: #ffd700;
}

/* Introduction Section */
.intro-section {
  margin: 2rem 0;
}

.intro-card {
  background: rgba(20, 28, 42, 0.7);
  border-radius: 12px;
  padding: 2rem;
  border: 1px solid rgba(107, 163, 232, 0.2);
}

.intro-title {
  font-size: 1.5rem;
  color: #f5f8f0;
  margin: 0 0 1.5rem 0;
}

.intro-content p {
  color: rgba(245, 248, 240, 0.8);
  line-height: 1.6;
  margin-bottom: 2rem;
  font-size: 1rem;
}

.intro-steps {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.intro-step {
  display: flex;
  gap: 1rem;
  align-items: flex-start;
}

.step-number {
  flex-shrink: 0;
  width: 2.5rem;
  height: 2.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, rgba(107, 163, 232, 0.3), rgba(92, 184, 92, 0.3));
  border: 2px solid rgba(107, 163, 232, 0.5);
  border-radius: 50%;
  color: #6ba3e8;
  font-weight: 700;
  font-size: 1.2rem;
}

.step-content h4 {
  color: #f5f8f0;
  margin: 0 0 0.5rem 0;
  font-size: 1.1rem;
}

.step-content p {
  color: rgba(245, 248, 240, 0.7);
  margin: 0;
  line-height: 1.6;
  font-size: 0.95rem;
}

/* FAQ Section */
.faq-section {
  margin: 3rem 0;
}

.faq-card {
  background: rgba(20, 28, 42, 0.7);
  border-radius: 12px;
  padding: 2rem;
  border: 1px solid rgba(107, 163, 232, 0.2);
}

.faq-title {
  font-size: 1.5rem;
  color: #f5f8f0;
  margin: 0 0 2rem 0;
}

.faq-list {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.faq-item {
  padding: 1.5rem;
  background: rgba(26, 35, 50, 0.5);
  border-radius: 8px;
  border-left: 3px solid #6ba3e8;
}

.faq-question {
  color: #6ba3e8;
  font-size: 1.1rem;
  margin: 0 0 0.75rem 0;
  font-weight: 600;
}

.faq-answer {
  color: rgba(245, 248, 240, 0.8);
  line-height: 1.6;
  margin: 0;
  font-size: 0.95rem;
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

.page-subtitle a,
.placeholder-text a {
  color: #6ba3e8;
  text-decoration: none;
  font-weight: 600;
  border-bottom: 1px solid rgba(107, 163, 232, 0.3);
  transition: all 0.2s ease;
}

.page-subtitle a:hover,
.placeholder-text a:hover {
  color: #5cb85c;
  border-bottom-color: rgba(92, 184, 92, 0.5);
}

/* Responsive */


/* 1024px 响应式样式 */
@media (max-width: 1024px) {
  .strategy-section { padding: 1.8rem 0; }
  .strategy-container { gap: 1.1rem; }
  .strategy-card { padding: 1.3rem; }
  .strategy-title { font-size: 1.4rem; margin-bottom: 1.1rem; }
  .route-selector { gap: 0.8rem; margin-bottom: 1.3rem; }
  .route-select-label { font-size: 0.85rem; }
  .route-select { padding: 0.7rem 1rem; font-size: 0.9rem; }
  .strategy-content { gap: 1.1rem; }
  .strategy-item { padding: 1.1rem; }
  .strategy-item-title { font-size: 1.05rem; margin-bottom: 0.6rem; }
  .strategy-item-content { font-size: 0.85rem; }
  .recommended-pokemon { gap: 0.8rem; }
  .pokemon-recommendation { padding: 0.8rem; gap: 0.6rem; }
  .pokemon-rec-image { width: 45px; height: 45px; }
  .pokemon-rec-info h4 { font-size: 0.9rem; margin-bottom: 0.3rem; }
  .pokemon-rec-reason { font-size: 0.8rem; }
}

/* 768px 移动端响应式样式 */
@media (max-width: 768px) {
  .strategy-section { padding: 1.2rem 0; }
  .strategy-container { grid-template-columns: 1fr; gap: 1.2rem; }
  .strategy-card { padding: 1.2rem; }
  .strategy-title { font-size: 1.4rem; margin-bottom: 0.8rem; }
  .route-selector { gap: 0.6rem; margin-bottom: 1.2rem; }
  .route-select-label { font-size: 0.8rem; }
  .route-select { padding: 0.8rem 1.2rem; font-size: 0.85rem; }
  .strategy-content { gap: 1.2rem; }
  .strategy-item { padding: 0.8rem; }
  .strategy-item-title { font-size: 1.2rem; margin-bottom: 0.4rem; }
  .strategy-item-content { font-size: 0.8rem; }
  .recommended-pokemon { gap: 0.8rem; }
  .pokemon-recommendation { padding: 0.8rem; gap: 0.8rem; flex-direction: column; text-align: center; }
  .pokemon-rec-image { width: 40px; height: 40px; }
  .pokemon-rec-info h4 { font-size: 1rem; margin-bottom: 0.3rem; }
  .pokemon-rec-reason { font-size: 0.8rem; }
}
</style>

