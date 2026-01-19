<template>
  <div class="page-view">
    <AppHeader />

    <div class="page-content">
      <!-- Page Header -->
      <section class="page-header">
        <div class="page-header-content">
          <div class="page-header-badge">
            <span class="badge-icon">🗺️</span>
            <span class="badge-text">Map Router</span>
          </div>
          <h1 class="page-title">PokéPath TD Routes - Complete Strategy Guide & Teams</h1>
          <p class="page-subtitle">
            Explore comprehensive PokéPath TD routes strategies, including detailed map guides, terrain analysis, and recommended teams for every PokéPath TD route 1-1 and beyond.
          </p>
        </div>
      </section>

      <div class="container">
        <!-- Filters Section -->
        <section class="filters-section">
          <div class="filters-container">
            <div class="filters-header">
              <h2 class="filters-title">Filter Routes</h2>
              <button v-if="hasActiveFilters" @click="clearFilters" class="clear-filters-btn">
                Clear Filters
              </button>
            </div>
            <div class="filters-grid">
              <!-- Difficulty Filter -->
              <div class="filter-group">
                <label class="filter-label">Difficulty</label>
                <div class="filter-buttons">
                  <button
                    v-for="difficulty in ['All', 'Easy', 'Medium', 'Hard', 'Very Hard']"
                    :key="difficulty"
                    @click="selectedDifficulty = difficulty === 'All' ? '' : difficulty"
                    :class="[
                      'filter-btn',
                      { active: selectedDifficulty === (difficulty === 'All' ? '' : difficulty) },
                    ]"
                  >
                    {{ difficulty }}
                  </button>
                </div>
              </div>

              <!-- Terrain Filter -->
              <div class="filter-group">
                <label class="filter-label">Terrain</label>
                <div class="filter-buttons">
                  <button
                    v-for="terrain in allTerrains"
                    :key="terrain"
                    @click="toggleTerrain(terrain)"
                    :class="['filter-btn', { active: selectedTerrains.includes(terrain) }]"
                  >
                    {{ terrain }}
                  </button>
                </div>
              </div>

              <!-- Playstyle Filter -->
              <div class="filter-group">
                <label class="filter-label">Playstyle</label>
                <div class="filter-buttons">
                  <button
                    v-for="style in [
                      'All',
                      'Balanced',
                      'Aggressive',
                      'Defensive',
                      'Tactical',
                      'Versatile',
                      'Elite',
                    ]"
                    :key="style"
                    @click="selectedPlaystyle = style === 'All' ? '' : style"
                    :class="[
                      'filter-btn',
                      { active: selectedPlaystyle === (style === 'All' ? '' : style) },
                    ]"
                  >
                    {{ style }}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- Routes Grid -->
        <section class="page-section">
          <div class="routes-container">
            <div v-for="stage in displayStages" :key="stage.id" class="route-card">
              <!-- Map Image with Overlay Info -->
              <div class="route-map-section">
                <img
                  v-if="stage.mapImage"
                  :src="stage.mapImage"
                  :alt="`${stage.name} map`"
                  class="map-image"
                />
                <div v-else class="map-placeholder">
                  <span class="placeholder-icon">🗺️</span>
                  <span class="placeholder-text">Map Preview</span>
                </div>

                <!-- Overlay Gradient -->
                <div class="map-overlay"></div>

                <!-- Top Badges -->
                <div class="map-top-badges">
                  <div class="route-number-badge">
                    {{ stage.routeNumber }}
                  </div>
                  <div
                    class="difficulty-badge-overlay"
                    :style="{ '--difficulty-color': difficultyColors[stage.difficulty] }"
                  >
                    {{ stage.difficulty }}
                  </div>
                </div>

                <!-- Bottom Info Overlay -->
                <div class="map-bottom-overlay">
                  <h3 class="route-name-overlay">{{ stage.name }}</h3>
                  <div class="overlay-stats">
                    <div class="overlay-stat">
                      <span class="overlay-stat-icon">⭐</span>
                      <span class="overlay-stat-value">{{ stage.stars }}</span>
                    </div>
                    <div class="overlay-stat">
                      <span class="overlay-stat-icon">🌊</span>
                      <span class="overlay-stat-value">{{ stage.totalWaves || 100 }}</span>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Route Info Section -->
              <div class="route-info-section">
                <!-- Playstyle Badge -->
                <div v-if="stage.playstyle" class="playstyle-badge">
                  <span class="playstyle-icon">🎮</span>
                  <span class="playstyle-text">{{ stage.playstyle }}</span>
                </div>

                <!-- Terrain Tags -->
                <div v-if="stage.terrain && stage.terrain.length > 0" class="info-row">
                  <div class="info-row-label">
                    <span class="label-icon">🗺️</span>
                    <span>Terrain</span>
                  </div>
                  <div class="terrain-tags">
                    <span v-for="terrain in stage.terrain" :key="terrain" class="terrain-tag">
                      {{ terrain }}
                    </span>
                  </div>
                </div>

                <!-- View Details Button -->
                <button class="view-details-btn" @click.stop="goToRouteDetail(stage.id)">
                  <span>View Route Details</span>
                  <span class="btn-arrow">→</span>
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>

    <!-- Introduction Section -->
    <section class="intro-section">
      <div class="container">
        <div class="intro-card">
          <h2 class="intro-title">📖 How to Use PokéPath TD Routes Guide</h2>
          <div class="intro-content">
            <p>
              The Routes Guide provides comprehensive strategies for every map in PokéPath TD.
              Use filters to find routes by difficulty, terrain, and playstyle, then access detailed strategy guides with recommended teams and tactics. Explore our in-depth guides for challenging routes like <a href="/map-router/how-to-beat-route-3-2-regice-dewgong-strategy" class="inline-link">Route 3-2 (Regice)</a> and <a href="/map-router/how-to-beat-route-2-1-raikou-wave-100" class="inline-link">Route 2-1 (Raikou)</a>.
            </p>
            <div class="intro-steps">
              <div class="intro-step">
                <span class="step-number">1</span>
                <div class="step-content">
                  <h4>Filter by Difficulty & Terrain</h4>
                  <p>Use the filter options to narrow down routes by difficulty level (Easy to Very Hard) and terrain types to match your preferred challenges.</p>
                </div>
              </div>
              <div class="intro-step">
                <span class="step-number">2</span>
                <div class="step-content">
                  <h4>Review Route Information</h4>
                  <p>Each route card shows key details including difficulty rating, terrain advantages, recommended playstyles, and enemy types.</p>
                </div>
              </div>
              <div class="intro-step">
                <span class="step-number">3</span>
                <div class="step-content">
                  <h4>Access Route Details</h4>
                  <p>Click "View Route Details" to get detailed terrain analysis, optimal team compositions, and tactical advice for each route. For example, check out our <a href="/map-router/how-to-beat-route-1-1-articuno" class="inline-link">Route 1-1 guide</a> for Articuno strategies.</p>
                </div>
              </div>
              <div class="intro-step">
                <span class="step-number">4</span>
                <div class="step-content">
                  <h4>Adapt to Your Style</h4>
                  <p>Routes support different playstyles (Aggressive, Defensive, Balanced). Choose strategies that match your preferred approach.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ Section -->
    <section class="faq-section">
      <div class="container">
        <div class="faq-card">
          <h2 class="faq-title">❓ Frequently Asked Questions</h2>
          <div class="faq-list">
            <div class="faq-item">
              <h3 class="faq-question">How do difficulty levels work?</h3>
              <p class="faq-answer">
                Difficulty is based on enemy strength, terrain complexity, and strategic requirements. Easy routes are straightforward, while Very Hard routes require precise team composition and advanced tactics.
              </p>
            </div>
            <div class="faq-item">
              <h3 class="faq-question">What do terrain types affect?</h3>
              <p class="faq-answer">
                Terrain influences Pokémon effectiveness, movement patterns, and strategic options. Some Pokémon excel on specific terrains, so choose teams that match the route's terrain advantages.
              </p>
            </div>
            <div class="faq-item">
              <h3 class="faq-question">Can I complete routes with different playstyles?</h3>
              <p class="faq-answer">
                Yes! Most routes can be completed with Aggressive (fast clearing), Defensive (turtle strategies), or Balanced approaches. Choose based on your available Pokémon and preferred playstyle.
              </p>
            </div>
            <div class="faq-item">
              <h3 class="faq-question">How often are route strategies updated?</h3>
              <p class="faq-answer">
                Route guides are updated with new game patches, balance changes, and community-discovered strategies. Major updates may introduce new optimal teams or tactics.
              </p>
            </div>
            <div class="faq-item">
              <h3 class="faq-question">What if I don't have the recommended Pokémon?</h3>
              <p class="faq-answer">
                Strategy guides include alternative team suggestions and adaptation tips. Focus on type advantages and role coverage rather than exact Pokémon matches. See our <a href="/map-router/how-to-beat-route-2-3-suicune-wave-100" class="inline-link">Route 2-3 guide</a> for alternative strategies.
              </p>
            </div>
            <div class="faq-item">
              <h3 class="faq-question">Are there shortcuts or alternative paths?</h3>
              <p class="faq-answer">
                Some routes have multiple paths or strategic shortcuts. Advanced guides cover alternative approaches and speedrunning techniques for experienced players.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <AppFooter />
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import AppHeader from '../components/AppHeader.vue'
import AppFooter from '../components/AppFooter.vue'
import { stages, difficultyColors } from '../data/routes.js'

const router = useRouter()

// Filters
const selectedDifficulty = ref('')
const selectedTerrains = ref([])
const selectedPlaystyle = ref('')

// Get all unique terrains
const allTerrains = computed(() => {
  const terrainSet = new Set()
  stages.forEach((stage) => {
    if (stage.terrain) {
      stage.terrain.forEach((terrain) => terrainSet.add(terrain))
    }
  })
  return Array.from(terrainSet).sort()
})

// Filtered stages
const filteredStages = computed(() => {
  return stages.filter((stage) => {
    // Difficulty filter
    if (selectedDifficulty.value && stage.difficulty !== selectedDifficulty.value) {
      return false
    }

    // Terrain filter
    if (selectedTerrains.value.length > 0) {
      const hasMatchingTerrain = selectedTerrains.value.some(
        (terrain) => stage.terrain && stage.terrain.includes(terrain)
      )
      if (!hasMatchingTerrain) {
        return false
      }
    }

    // Playstyle filter
    if (selectedPlaystyle.value && stage.playstyle !== selectedPlaystyle.value) {
      return false
    }

    return true
  })
})

// Check if any filters are active
const hasActiveFilters = computed(() => {
  return (
    selectedDifficulty.value !== '' ||
    selectedTerrains.value.length > 0 ||
    selectedPlaystyle.value !== ''
  )
})

// Clear all filters
const clearFilters = () => {
  selectedDifficulty.value = ''
  selectedTerrains.value = []
  selectedPlaystyle.value = ''
}

// Toggle terrain filter
const toggleTerrain = (terrain) => {
  const index = selectedTerrains.value.indexOf(terrain)
  if (index > -1) {
    selectedTerrains.value.splice(index, 1)
  } else {
    selectedTerrains.value.push(terrain)
  }
}

// Navigate to route detail page
const goToRouteDetail = (routeId) => {
  router.push({
    path: `/map-router/${routeId}`
  })
}

// Use filtered stages
const displayStages = computed(() => filteredStages.value)
</script>

<style scoped>
/* Page View and Content styles are now in main.css */

/* Page Section */
.page-section {
  padding: 40px 0;
  position: relative;
  z-index: 1;
}

/* Routes Container */
.routes-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  max-width: 1600px;
  margin: 0 auto;
}

/* Route Card */
.route-card {
  background: rgba(26, 35, 50, 0.8);
  border: 1px solid rgba(107, 163, 232, 0.2);
  border-radius: 12px;
  overflow: hidden;
  backdrop-filter: blur(10px);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  display: flex;
  flex-direction: column;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.4);
}

.route-card:hover {
  border-color: #6ba3e8;
  transform: translateY(-4px);
  box-shadow: 0 8px 32px rgba(107, 163, 232, 0.4);
}

/* Map Section */
.route-map-section {
  position: relative;
  width: 100%;
  height: 240px;
  overflow: hidden;
  background: rgba(15, 20, 30, 0.8);
}

.map-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}

.map-placeholder {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;
  color: rgba(245, 248, 240, 0.4);
}

.placeholder-icon {
  font-size: 3rem;
}

.placeholder-text {
  font-size: 0.9rem;
  font-weight: 500;
}

/* Map Overlay */
.map-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 60%;
  background: linear-gradient(
    to top,
    rgba(0, 0, 0, 0.85) 0%,
    rgba(0, 0, 0, 0.4) 50%,
    transparent 100%
  );
  pointer-events: none;
}

/* Top Badges */
.map-top-badges {
  position: absolute;
  top: 12px;
  left: 12px;
  right: 12px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 8px;
  z-index: 2;
}

.route-number-badge {
  padding: 6px 14px;
  background: rgba(26, 35, 50, 0.95);
  border: 2px solid #6ba3e8;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 700;
  color: #6ba3e8;
  backdrop-filter: blur(10px);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.4);
}

.difficulty-badge-overlay {
  padding: 6px 14px;
  background: var(--difficulty-color);
  color: white;
  border-radius: 8px;
  font-size: 0.85rem;
  font-weight: 600;
  white-space: nowrap;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(10px);
}

/* Bottom Overlay */
.map-bottom-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 16px;
  z-index: 2;
}

.route-name-overlay {
  font-size: 1.3rem;
  font-weight: 700;
  color: #f5f8f0;
  margin: 0 0 10px 0;
  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.8);
  line-height: 1.2;
}

.overlay-stats {
  display: flex;
  gap: 16px;
}

.overlay-stat {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 4px 10px;
  background: rgba(26, 35, 50, 0.7);
  border: 1px solid rgba(107, 163, 232, 0.3);
  border-radius: 6px;
  backdrop-filter: blur(10px);
}

.overlay-stat-icon {
  font-size: 1rem;
}

.overlay-stat-value {
  font-size: 0.9rem;
  font-weight: 700;
  color: #f5f8f0;
}

/* Info Section */
.route-info-section {
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  background: rgba(15, 20, 30, 0.3);
}

.info-row {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.info-row-label {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 0.8rem;
  font-weight: 600;
  color: rgba(245, 248, 240, 0.7);
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.label-icon {
  font-size: 1rem;
}

.terrain-tags,
.type-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}

.terrain-tag {
  padding: 5px 12px;
  background: rgba(107, 163, 232, 0.15);
  border: 1px solid rgba(107, 163, 232, 0.4);
  border-radius: 6px;
  font-size: 0.8rem;
  color: #6ba3e8;
  font-weight: 500;
  transition: all 0.2s ease;
}

.terrain-tag:hover {
  background: rgba(107, 163, 232, 0.25);
  border-color: rgba(107, 163, 232, 0.6);
}

.type-tag {
  padding: 5px 12px;
  background: rgba(92, 184, 92, 0.15);
  border: 1px solid rgba(92, 184, 92, 0.4);
  border-radius: 6px;
  font-size: 0.8rem;
  color: #5cb85c;
  font-weight: 500;
  transition: all 0.2s ease;
}

.type-tag:hover {
  background: rgba(92, 184, 92, 0.25);
  border-color: rgba(92, 184, 92, 0.6);
}

/* Playstyle Badge */
.playstyle-badge {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 6px 12px;
  background: rgba(92, 184, 92, 0.15);
  border: 1px solid rgba(92, 184, 92, 0.4);
  border-radius: 8px;
  margin-bottom: 12px;
  font-size: 0.85rem;
  font-weight: 600;
  color: #5cb85c;
}

.playstyle-icon {
  font-size: 1rem;
}

/* Strategy Tags */
.strategy-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}

.strategy-tag {
  padding: 5px 12px;
  background: rgba(255, 193, 7, 0.15);
  border: 1px solid rgba(255, 193, 7, 0.4);
  border-radius: 6px;
  font-size: 0.8rem;
  color: #ffc107;
  font-weight: 500;
}

/* Description */
.route-description {
  padding-top: 8px;
  border-top: 1px solid rgba(107, 163, 232, 0.2);
  margin-top: 4px;
}

.route-description p {
  color: rgba(245, 248, 240, 0.8);
  font-size: 0.85rem;
  line-height: 1.6;
  margin: 0;
}

/* Filters Section */
.filters-section {
  padding: 30px 0;
  position: relative;
  z-index: 1;
}

.filters-container {
  max-width: 1600px;
  margin: 0 auto;
  background: rgba(26, 35, 50, 0.7);
  border: 1px solid rgba(107, 163, 232, 0.2);
  border-radius: 12px;
  padding: 24px;
  backdrop-filter: blur(10px);
}

.filters-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.filters-title {
  font-size: 1.3rem;
  font-weight: 700;
  color: #f5f8f0;
  margin: 0;
}

.clear-filters-btn {
  padding: 6px 16px;
  background: rgba(107, 163, 232, 0.2);
  border: 1px solid rgba(107, 163, 232, 0.4);
  border-radius: 8px;
  color: #6ba3e8;
  font-size: 0.85rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
}

.clear-filters-btn:hover {
  background: rgba(107, 163, 232, 0.3);
  border-color: #6ba3e8;
}

.filters-grid {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.filter-group {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.filter-label {
  font-size: 0.9rem;
  font-weight: 600;
  color: rgba(245, 248, 240, 0.8);
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.filter-buttons {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.filter-btn {
  padding: 6px 14px;
  background: rgba(15, 20, 30, 0.5);
  border: 1px solid rgba(107, 163, 232, 0.3);
  border-radius: 8px;
  color: rgba(245, 248, 240, 0.8);
  font-size: 0.85rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
}

.filter-btn:hover {
  border-color: #6ba3e8;
  background: rgba(107, 163, 232, 0.15);
}

.filter-btn.active {
  background: rgba(107, 163, 232, 0.3);
  border-color: #6ba3e8;
  color: #6ba3e8;
  font-weight: 600;
}


/* View Details Button */
.view-details-btn {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 10px 16px;
  margin-top: 12px;
  background: rgba(107, 163, 232, 0.2);
  border: 1px solid rgba(107, 163, 232, 0.4);
  border-radius: 8px;
  color: #6ba3e8;
  font-size: 0.9rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
}

.view-details-btn:hover {
  background: rgba(107, 163, 232, 0.3);
  border-color: #6ba3e8;
  transform: translateY(-1px);
}

.btn-arrow {
  font-size: 1.2rem;
  transition: transform 0.2s ease;
}

.view-details-btn:hover .btn-arrow {
  transform: translateX(4px);
}

/* Introduction Section */
.intro-section {
  padding: 2rem 0;
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
  padding: 3rem 0;
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

  .faq-answer a {
    color: #6ba3e8;
    text-decoration: none;
    font-weight: 600;
    border-bottom: 1px solid rgba(107, 163, 232, 0.3);
    transition: all 0.2s ease;
  }

  .faq-answer a:hover {
    color: #5cb85c;
    border-bottom-color: rgba(92, 184, 92, 0.5);
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
  .page-section { padding: 32px 0; }
  .routes-container { grid-template-columns: repeat(2, 1fr); gap: 20px; }
  .route-map-section { height: 200px; }
  .route-number-badge { padding: 5px 12px; font-size: 0.9rem; }
  .difficulty-badge-overlay { padding: 5px 12px; font-size: 0.8rem; }
  .route-name-overlay { font-size: 1.2rem; margin-bottom: 8px; }
  .overlay-stats { gap: 12px; }
  .overlay-stat { padding: 3px 8px; }
  .overlay-stat-value { font-size: 0.85rem; }
  .route-info-section { padding: 14px; gap: 10px; }
  .info-row-label { font-size: 0.75rem; }
  .terrain-tag, .type-tag { padding: 4px 10px; font-size: 0.75rem; }
  .playstyle-badge { padding: 5px 10px; font-size: 0.8rem; }
  .strategy-tag { padding: 4px 10px; font-size: 0.75rem; }
  .route-description p { font-size: 0.8rem; }
  .view-details-btn { padding: 8px 14px; font-size: 0.85rem; }
  .filters-section { padding: 24px 0; }
  .filters-container { padding: 20px; }
  .filters-title { font-size: 1.2rem; }
  .clear-filters-btn { padding: 5px 14px; font-size: 0.8rem; }
  .filter-label { font-size: 0.85rem; }
  .filter-btn { padding: 5px 12px; font-size: 0.8rem; }
  .intro-section { padding: 1.8rem 0; }
  .intro-card { padding: 1.8rem; }
  .intro-title { font-size: 1.4rem; margin-bottom: 1.3rem; }
  .intro-content p { font-size: 0.95rem; margin-bottom: 1.8rem; }
  .intro-steps { gap: 1.3rem; }
  .step-number { width: 2.2rem; height: 2.2rem; font-size: 1.1rem; }
  .step-content h4 { font-size: 1.05rem; }
  .step-content p { font-size: 0.9rem; }
  .faq-section { padding: 2.5rem 0; }
  .faq-card { padding: 1.8rem; }
  .faq-title { font-size: 1.4rem; margin-bottom: 1.8rem; }
  .faq-list { gap: 1.3rem; }
  .faq-item { padding: 1.3rem; }
  .faq-question { font-size: 1.05rem; margin-bottom: 0.6rem; }
  .faq-answer { font-size: 0.9rem; }
}

/* 768px 移动端响应式样式 */
@media (max-width: 768px) {
  .page-section { padding: 1.2rem 0; }
  .routes-container { grid-template-columns: 1fr; gap: 1.2rem; }
  .route-map-section { height: 180px; }
  .map-top-badges { top: 0.8rem; left: 0.8rem; right: 0.8rem; gap: 0.5rem; }
  .route-number-badge { padding: 4px 8px; font-size: 0.8rem; }
  .difficulty-badge-overlay { padding: 4px 8px; font-size: 0.7rem; }
  .map-bottom-overlay { padding: 1.2rem; }
  .route-name-overlay { font-size: 1.4rem; margin-bottom: 0.8rem; }
  .overlay-stats { gap: 0.8rem; flex-wrap: wrap; }
  .overlay-stat { padding: 0.2rem 0.6rem; }
  .overlay-stat-icon { font-size: 0.9rem; }
  .overlay-stat-value { font-size: 0.8rem; }
  .route-info-section { padding: 0.8rem; gap: 0.8rem; }
  .info-row { gap: 0.6rem; }
  .info-row-label { font-size: 0.7rem; }
  .label-icon { font-size: 0.9rem; }
  .terrain-tags, .type-tags { gap: 0.4rem; }
  .terrain-tag, .type-tag { padding: 0.3rem 0.8rem; font-size: 0.7rem; }
  .playstyle-badge { padding: 0.4rem 0.8rem; font-size: 0.75rem; margin-bottom: 0.8rem; }
  .strategy-tags { gap: 0.4rem; }
  .strategy-tag { padding: 0.3rem 0.8rem; font-size: 0.7rem; }
  .route-description { padding-top: 0.6rem; margin-top: 0.3rem; }
  .route-description p { font-size: 0.8rem; }
  .view-details-btn { padding: 0.8rem 1.2rem; font-size: 0.8rem; margin-top: 0.8rem; gap: 0.6rem; }
  .btn-arrow { font-size: 1.1rem; }
  .filters-section { padding: 1.2rem 0; }
  .filters-container { padding: 1.2rem; }
  .filters-header { flex-direction: column; gap: 1rem; align-items: flex-start; margin-bottom: 1.2rem; }
  .filters-title { font-size: 1.4rem; }
  .clear-filters-btn { padding: 0.4rem 1.2rem; font-size: 0.75rem; }
  .filters-grid { gap: 1.2rem; }
  .filter-group { gap: 0.8rem; }
  .filter-label { font-size: 0.8rem; }
  .filter-buttons { gap: 0.6rem; }
  .filter-btn { padding: 0.4rem 1rem; font-size: 0.75rem; }
  .intro-section { padding: 1.2rem 0; }
  .intro-card { padding: 1.2rem; }
  .intro-title { font-size: 1.4rem; margin-bottom: 0.8rem; }
  .intro-content p { font-size: 0.8rem; margin-bottom: 1.2rem; }
  .intro-steps { gap: 0.8rem; }
  .intro-step { gap: 0.8rem; }
  .step-number { width: 2rem; height: 2rem; font-size: 1rem; }
  .step-content h4 { font-size: 1rem; margin-bottom: 0.3rem; }
  .step-content p { font-size: 0.8rem; }
  .faq-section { padding: 1.2rem 0; }
  .faq-card { padding: 1.2rem; }
  .faq-title { font-size: 1.4rem; margin-bottom: 1.2rem; }
  .faq-list { gap: 0.8rem; }
  .faq-item { padding: 0.8rem; }
  .faq-question { font-size: 1.2rem; margin-bottom: 0.4rem; }
  .faq-answer { font-size: 0.8rem; }
}
</style>
