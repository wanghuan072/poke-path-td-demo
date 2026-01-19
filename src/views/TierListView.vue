<template>
  <div class="page-view">
    <AppHeader />
    
    <div class="page-content">
      <!-- Page Header -->
      <section class="page-header">
        <div class="page-header-content">
          <div class="page-header-badge">
            <span class="badge-icon">🏆</span>
            <span class="badge-text">Tier List</span>
          </div>
          <h1 class="page-title">PokéPath TD Tier List - Best Pokémon Rankings</h1>
          <p class="page-subtitle">
            Discover the ultimate PokéPath TD tier list with best Pokémon rankings, meta analysis, and customizable tier charts for competitive play.
          </p>
        </div>
      </section>

      <div class="container">
        <!-- Pokémon List Section -->
        <section class="pokemon-list-section">
          <div class="list-header">
            <h3 class="section-heading">
              <span class="heading-icon">⚡</span>
              Level 100 Pokémon
            </h3>
            <p class="section-subtitle">Drag Pokémon to tiers below</p>
          </div>
          
          <div class="pokemon-grid">
            <div
              v-for="pokemon in availablePokemon"
              :key="pokemon.id"
              class="pokemon-card"
              :class="{ 'disabled': pokemonInTiers.has(pokemon.id) }"
              :draggable="!pokemonInTiers.has(pokemon.id)"
              @dragstart="handleDragStart($event, pokemon)"
              @dragend="handleDragEnd"
            >
              <div class="pokemon-card-image">
                <img
                  v-if="pokemon.imageUrl"
                  :src="pokemon.imageUrl"
                  :alt="pokemon.name"
                  class="pokemon-card-img"
                />
                <div v-else class="pokemon-card-placeholder">
                  {{ pokemon.name.charAt(0) }}
                </div>
              </div>
              <h4 class="pokemon-card-name">{{ pokemon.name }}</h4>
            </div>
          </div>
        </section>

        <!-- Tier List Section -->
        <section class="tier-list-section">
          <div class="tier-list-header">
            <h3 class="section-heading">
              <span class="heading-icon">🏆</span>
              Tier List
            </h3>
            <button @click="addTier" class="add-tier-btn">
              <span>+ Add Tier</span>
            </button>
          </div>

          <div class="tier-list-container">
            <div
              v-for="(tier, index) in tiers"
              :key="tier.id"
              class="tier-row"
              @dragover.prevent="handleDragOver($event, tier)"
              @drop="handleDrop($event, tier)"
              @dragleave="handleDragLeave"
            >
              <!-- Tier Label -->
              <div class="tier-label" :style="{ backgroundColor: tier.color }">
                <input
                  v-model="tier.name"
                  class="tier-name-input"
                  @blur="updateTierName(tier)"
                />
              </div>

              <!-- Tier Content -->
              <div class="tier-content" :class="{ 'drag-over': dragOverTier === tier.id }">
                <div
                  v-for="pokemon in tier.pokemon"
                  :key="pokemon.id"
                  class="tier-pokemon-item"
                  draggable="true"
                  @dragstart="handleDragStart($event, pokemon, tier)"
                  @dragend="handleDragEnd"
                >
                  <img
                    v-if="pokemon.imageUrl"
                    :src="pokemon.imageUrl"
                    :alt="pokemon.name"
                    class="tier-pokemon-image"
                  />
                  <div v-else class="tier-pokemon-placeholder">
                    {{ pokemon.name.charAt(0) }}
                  </div>
                  <span class="tier-pokemon-name">{{ pokemon.name }}</span>
                  <button
                    @click="removeFromTier(tier, pokemon)"
                    class="remove-pokemon-btn"
                    title="Remove from tier"
                  >
                    ×
                  </button>
                </div>
                <div v-if="tier.pokemon.length === 0" class="tier-empty">
                  Drop Pokémon here
                </div>
              </div>

              <!-- Tier Controls -->
              <div class="tier-controls">
                <button
                  @click="editTier(tier)"
                  class="tier-control-btn"
                  title="Edit tier"
                >
                  ⚙️
                </button>
                <button
                  v-if="index > 0"
                  @click="moveTierUp(index)"
                  class="tier-control-btn"
                  title="Move up"
                >
                  ↑
                </button>
                <button
                  v-if="index < tiers.length - 1"
                  @click="moveTierDown(index)"
                  class="tier-control-btn"
                  title="Move down"
                >
                  ↓
                </button>
                <button
                  @click="deleteTier(index)"
                  class="tier-control-btn delete"
                  title="Delete tier"
                >
                  🗑️
                </button>
              </div>
            </div>
          </div>
        </section>

        <!-- Community Rankings Section -->
        <!-- <section class="community-rankings-section">
          <div class="rankings-header">
            <h3 class="section-heading">
              <span class="heading-icon">👥</span>
              Community Rankings
            </h3>
            <p class="section-subtitle">Check out tier lists from other players</p>
          </div>

          <div class="rankings-grid">
            <div
              v-for="player in playerRankings"
              :key="player.id"
              class="ranking-card"
            >
              <div class="ranking-card-header">
                <div class="ranking-info">
                  <h4 class="ranking-title">{{ player.title }}</h4>
                  <p class="ranking-description">{{ player.description }}</p>
                </div>
                <div class="ranking-meta">
                  <span class="ranking-date">{{ formatDate(player.createdAt) }}</span>
                  <div class="ranking-likes">
                    <span class="likes-icon">❤️</span>
                    <span class="likes-count">{{ player.likes }}</span>
                  </div>
                </div>
              </div>
              
              <div class="ranking-image-container">
                <img
                  v-if="player.imageUrl"
                  :src="player.imageUrl"
                  :alt="player.imageAlt"
                  class="ranking-image"
                />
                <div v-else class="ranking-image-placeholder">
                  <span class="placeholder-icon">📊</span>
                  <p class="placeholder-text">Tier List Image</p>
                </div>
              </div>
            </div>
          </div>
        </section> -->
      </div>
    </div>

    <!-- Introduction Section -->
    <section class="intro-section">
      <div class="container">
        <div class="intro-card">
          <h2 class="intro-title">📖 How to Use PokéPath TD Tier List</h2>
          <div class="intro-content">
            <p>
              The Tier List helps you understand the relative strength and viability of different Pokémon in PokéPath TD.
              Use this interactive tool to create custom rankings, compare Pokémon performance, and build optimal team strategies.
            </p>
            <div class="intro-steps">
              <div class="intro-step">
                <span class="step-number">1</span>
                <div class="step-content">
                  <h4>Understand Tier Rankings</h4>
                  <p>S-Tier (best), A-Tier (strong), B-Tier (average), C-Tier (below average), D-Tier (weakest). Rankings are based on overall performance.</p>
                </div>
              </div>
              <div class="intro-step">
                <span class="step-number">2</span>
                <div class="step-content">
                  <h4>Drag and Drop Pokémon</h4>
                  <p>Drag Pokémon from the available list into your preferred tier. You can also move Pokémon between tiers to adjust rankings.</p>
                </div>
              </div>
              <div class="intro-step">
                <span class="step-number">3</span>
                <div class="step-content">
                  <h4>Customize Your Rankings</h4>
                  <p>Create personalized tier lists based on your playstyle, preferred strategies, or specific route requirements.</p>
                </div>
              </div>
              <div class="intro-step">
                <span class="step-number">4</span>
                <div class="step-content">
                  <h4>Share and Compare</h4>
                  <p>Use tier lists to discuss strategies with other players and refine your understanding of Pokémon viability.</p>
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
              <h3 class="faq-question">What do the tier letters mean?</h3>
              <p class="faq-answer">
                S-Tier: Exceptional Pokémon that excel in most situations. A-Tier: Strong performers with few weaknesses. B-Tier: Solid choices for specific roles. C-Tier: Situational or niche picks. D-Tier: Generally not recommended due to significant drawbacks.
              </p>
            </div>
            <div class="faq-item">
              <h3 class="faq-question">Are tier lists objective?</h3>
              <p class="faq-answer">
                Tier lists are subjective and can vary based on playstyle, team composition, and game updates. Use them as guidelines rather than absolute rules. Community consensus helps identify strong performers.
              </p>
            </div>
            <div class="faq-item">
              <h3 class="faq-question">How often are tiers updated?</h3>
              <p class="faq-answer">
                Tiers are updated regularly based on new game patches, balance changes, and community feedback. Major updates may significantly shift rankings as new strategies emerge.
              </p>
            </div>
            <div class="faq-item">
              <h3 class="faq-question">Can I create my own tier list?</h3>
              <p class="faq-answer">
                Yes! This interactive tier list allows you to drag and drop Pokémon to create custom rankings. Save your preferred setup or experiment with different team compositions.
              </p>
            </div>
            <div class="faq-item">
              <h3 class="faq-question">Why are some Pokémon in multiple tiers?</h3>
              <p class="faq-answer">
                Pokémon can perform differently based on their level, team synergy, and the specific route or challenge. A Pokémon might be S-tier in some situations but C-tier in others.
              </p>
            </div>
            <div class="faq-item">
              <h3 class="faq-question">How do I know which tier is right for me?</h3>
              <p class="faq-answer">
                Consider your playstyle, available resources, and goals. Beginners might prefer A/B-tier Pokémon for reliability, while experienced players can experiment with higher-risk, higher-reward options.
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
import { ref, computed, onMounted, onUnmounted } from 'vue'
import AppHeader from '../components/AppHeader.vue'
import AppFooter from '../components/AppFooter.vue'
import pokemonData from '../data/pokemon.js'
import playerRankingsData from '../data/playerRankings.js'

// Get level 100 Pokémon
const level100Pokemon = computed(() => {
  return pokemonData.filter(pokemon => {
    const levelMatch = pokemon.name.match(/\[(\d+)\]/)
    return levelMatch && parseInt(levelMatch[1]) === 100
  }).sort((a, b) => a.name.localeCompare(b.name))
})

// Track which Pokémon are in tiers (for disabling drag)
const pokemonInTiers = computed(() => {
  const tierPokemonIds = new Set()
  tiers.value.forEach(tier => {
    tier.pokemon.forEach(p => tierPokemonIds.add(p.id))
  })
  return tierPokemonIds
})

// Show all Pokémon, but disable drag for those already in tiers
const availablePokemon = computed(() => {
  return level100Pokemon.value
})

// Default tier colors
const defaultTierColors = [
  '#e74c3c', // S - Red
  '#e67e22', // A - Orange
  '#f1c40f', // B - Yellow
  '#2ecc71', // C - Green
  '#3498db', // D - Blue
]

// Tiers
const tiers = ref([
  { id: 'tier-1', name: 'S', color: defaultTierColors[0], pokemon: [] },
  { id: 'tier-2', name: 'A', color: defaultTierColors[1], pokemon: [] },
  { id: 'tier-3', name: 'B', color: defaultTierColors[2], pokemon: [] },
  { id: 'tier-4', name: 'C', color: defaultTierColors[3], pokemon: [] },
  { id: 'tier-5', name: 'D', color: defaultTierColors[4], pokemon: [] },
])

// Drag and drop
const draggedPokemon = ref(null)
const draggedFromTier = ref(null)
const dragOverTier = ref(null)
const autoScrollInterval = ref(null)

const handleDragStart = (event, pokemon, fromTier = null) => {
  draggedPokemon.value = pokemon
  draggedFromTier.value = fromTier
  event.dataTransfer.effectAllowed = 'move'
  event.dataTransfer.setData('text/plain', pokemon.id)
  event.target.style.opacity = '0.5'
  
  // Start auto-scroll on drag
  startAutoScroll()
}

const handleDragEnd = (event) => {
  event.target.style.opacity = '1'
  dragOverTier.value = null
  
  // Stop auto-scroll
  stopAutoScroll()
}

const handleDragOver = (event, tier) => {
  event.preventDefault()
  dragOverTier.value = tier.id
  
  // Check if near edges and auto-scroll
  checkAutoScroll(event)
}

// Auto-scroll functionality
const startAutoScroll = () => {
  // This will be triggered by drag events
}

const stopAutoScroll = () => {
  if (autoScrollInterval.value) {
    clearInterval(autoScrollInterval.value)
    autoScrollInterval.value = null
  }
}

const checkAutoScroll = (event) => {
  const scrollThreshold = 100 // pixels from edge
  const scrollSpeed = 10 // pixels per interval
  const viewportHeight = window.innerHeight
  const mouseY = event.clientY
  
  // Clear existing interval
  stopAutoScroll()
  
  // Check if near top edge
  if (mouseY < scrollThreshold && window.scrollY > 0) {
    autoScrollInterval.value = setInterval(() => {
      if (window.scrollY > 0) {
        window.scrollBy(0, -scrollSpeed)
      } else {
        stopAutoScroll()
      }
    }, 16) // ~60fps
  }
  // Check if near bottom edge
  else if (mouseY > viewportHeight - scrollThreshold && window.scrollY < document.documentElement.scrollHeight - viewportHeight) {
    autoScrollInterval.value = setInterval(() => {
      if (window.scrollY < document.documentElement.scrollHeight - viewportHeight) {
        window.scrollBy(0, scrollSpeed)
      } else {
        stopAutoScroll()
      }
    }, 16) // ~60fps
  }
}

const handleDragLeave = () => {
  // Stop auto-scroll when leaving tier area
  stopAutoScroll()
}

const handleDrop = (event, tier) => {
  event.preventDefault()
  dragOverTier.value = null
  stopAutoScroll()

  if (!draggedPokemon.value) return

  // Remove from source tier if it was in one
  if (draggedFromTier.value) {
    const sourceTier = draggedFromTier.value
    const index = sourceTier.pokemon.findIndex(p => p.id === draggedPokemon.value.id)
    if (index > -1) {
      sourceTier.pokemon.splice(index, 1)
    }
  }

  // Add to target tier if not already present
  const exists = tier.pokemon.some(p => p.id === draggedPokemon.value.id)
  if (!exists) {
    tier.pokemon.push(draggedPokemon.value)
  }

  draggedPokemon.value = null
  draggedFromTier.value = null
}

// Tier management
const addTier = () => {
  const newId = `tier-${Date.now()}`
  const colorIndex = tiers.value.length % defaultTierColors.length
  tiers.value.push({
    id: newId,
    name: `Tier ${tiers.value.length + 1}`,
    color: defaultTierColors[colorIndex],
    pokemon: []
  })
}

const deleteTier = (index) => {
  if (tiers.value.length > 1) {
    tiers.value.splice(index, 1)
  }
}

const moveTierUp = (index) => {
  if (index > 0) {
    const temp = tiers.value[index]
    tiers.value[index] = tiers.value[index - 1]
    tiers.value[index - 1] = temp
  }
}

const moveTierDown = (index) => {
  if (index < tiers.value.length - 1) {
    const temp = tiers.value[index]
    tiers.value[index] = tiers.value[index + 1]
    tiers.value[index + 1] = temp
  }
}

// eslint-disable-next-line no-unused-vars
const updateTierName = (tier) => {
  // Name is already updated via v-model
}

 
const editTier = (_tier) => {
   
  const newColor = prompt('Enter hex color (e.g., #e74c3c):', _tier.color)
  if (newColor && /^#[0-9A-F]{6}$/i.test(newColor)) {
    _tier.color = newColor
  }
}

const removeFromTier = (tier, pokemon) => {
  const index = tier.pokemon.findIndex(p => p.id === pokemon.id)
  if (index > -1) {
    tier.pokemon.splice(index, 1)
  }
}

// Player rankings
const playerRankings = ref(playerRankingsData)

// Format date
const formatDate = (dateString) => {
  const date = new Date(dateString)
  const now = new Date()
  const diffTime = Math.abs(now - date)
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24))
  
  if (diffDays === 0) return 'Today'
  if (diffDays === 1) return 'Yesterday'
  if (diffDays < 7) return `${diffDays} days ago`
  if (diffDays < 30) return `${Math.floor(diffDays / 7)} weeks ago`
  return date.toLocaleDateString('zh-CN', { year: 'numeric', month: 'short', day: 'numeric' })
}

// Global drag handler for auto-scroll
const handleGlobalDrag = (event) => {
  if (!draggedPokemon.value) return
  
  const scrollThreshold = 100
  const scrollSpeed = 15
  const viewportHeight = window.innerHeight
  const viewportWidth = window.innerWidth
  const mouseY = event.clientY
  const mouseX = event.clientX
  
  // Stop existing scroll
  stopAutoScroll()
  
  // Check top edge
  if (mouseY < scrollThreshold && window.scrollY > 0) {
    autoScrollInterval.value = setInterval(() => {
      if (window.scrollY > 0) {
        window.scrollBy(0, -scrollSpeed)
      } else {
        stopAutoScroll()
      }
    }, 16)
  }
  // Check bottom edge
  else if (mouseY > viewportHeight - scrollThreshold && 
           window.scrollY < document.documentElement.scrollHeight - viewportHeight) {
    autoScrollInterval.value = setInterval(() => {
      const maxScroll = document.documentElement.scrollHeight - viewportHeight
      if (window.scrollY < maxScroll) {
        window.scrollBy(0, scrollSpeed)
      } else {
        stopAutoScroll()
      }
    }, 16)
  }
  // Check left edge
  else if (mouseX < scrollThreshold && window.scrollX > 0) {
    autoScrollInterval.value = setInterval(() => {
      if (window.scrollX > 0) {
        window.scrollBy(-scrollSpeed, 0)
      } else {
        stopAutoScroll()
      }
    }, 16)
  }
  // Check right edge
  else if (mouseX > viewportWidth - scrollThreshold && 
           window.scrollX < document.documentElement.scrollWidth - viewportWidth) {
    autoScrollInterval.value = setInterval(() => {
      const maxScroll = document.documentElement.scrollWidth - viewportWidth
      if (window.scrollX < maxScroll) {
        window.scrollBy(scrollSpeed, 0)
      } else {
        stopAutoScroll()
      }
    }, 16)
  }
}

// Setup global drag listeners
onMounted(() => {
  document.addEventListener('dragover', handleGlobalDrag)
})

onUnmounted(() => {
  document.removeEventListener('dragover', handleGlobalDrag)
  stopAutoScroll()
})
</script>

<style scoped>
.list-header {
  margin-bottom: 16px;
}

.section-heading {
  font-size: 1.3rem;
  color: #f5f8f0;
  margin: 0 0 8px 0;
  font-weight: 700;
  display: flex;
  align-items: center;
  gap: 8px;
}

.heading-icon {
  font-size: 1.2rem;
}

.section-subtitle {
  color: rgba(245, 248, 240, 0.7);
  font-size: 0.9rem;
  margin: 0;
}

.pokemon-grid {
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  gap: 8px;
}

.pokemon-card {
  background: rgba(26, 35, 50, 0.8);
  border: 1px solid rgba(107, 163, 232, 0.2);
  border-radius: 8px;
  padding: 8px;
  cursor: grab;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
}

.pokemon-card:active {
  cursor: grabbing;
}

.pokemon-card:hover:not(.disabled) {
  border-color: #6ba3e8;
  transform: translateY(-2px);
  box-shadow: 0 4px 16px rgba(107, 163, 232, 0.3);
}

.pokemon-card.disabled {
  cursor: not-allowed;
  opacity: 0.5;
  background: rgba(26, 35, 50, 0.5);
  border-color: rgba(107, 163, 232, 0.1);
}

.pokemon-card-image {
  width: 48px;
  height: 48px;
  flex-shrink: 0;
}

.pokemon-card-img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  border-radius: 4px;
}

.pokemon-card-placeholder {
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, rgba(107, 163, 232, 0.3), rgba(92, 184, 92, 0.3));
  border: 1px solid rgba(107, 163, 232, 0.4);
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  font-weight: 700;
  color: #6ba3e8;
}

.pokemon-card-name {
  font-size: 0.7rem;
  color: #f5f8f0;
  margin: 0;
  font-weight: 600;
  text-align: center;
  line-height: 1.2;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 100%;
}

/* Tier List Section */
.tier-list-section {
  padding: 2rem 0;
}

.tier-list-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
}

.add-tier-btn {
  padding: 8px 16px;
  background: rgba(107, 163, 232, 0.2);
  border: 1px solid rgba(107, 163, 232, 0.4);
  border-radius: 8px;
  color: #6ba3e8;
  font-size: 0.9rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
}

.add-tier-btn:hover {
  background: rgba(107, 163, 232, 0.3);
  border-color: #6ba3e8;
}

.tier-list-container {
  display: flex;
  flex-direction: column;
  gap: 2px;
  background: rgba(15, 20, 30, 0.5);
  border-radius: 8px;
  overflow: hidden;
}

.tier-row {
  display: grid;
  grid-template-columns: 80px 1fr auto;
  gap: 0;
  background: rgba(26, 35, 50, 0.8);
  min-height: 100px;
}

.tier-label {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 12px;
  font-weight: 700;
  font-size: 1.5rem;
  color: white;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
}

.tier-name-input {
  background: transparent;
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-radius: 4px;
  color: white;
  font-size: 1.5rem;
  font-weight: 700;
  text-align: center;
  width: 50px;
  padding: 4px;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
}

.tier-name-input:focus {
  outline: none;
  border-color: rgba(255, 255, 255, 0.6);
  background: rgba(255, 255, 255, 0.1);
}

.tier-content {
  padding: 12px;
  min-height: 100px;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  align-items: flex-start;
  align-content: flex-start;
  background: rgba(20, 28, 42, 0.7);
  transition: background 0.2s ease;
}

.tier-content.drag-over {
  background: rgba(107, 163, 232, 0.2);
  border: 2px dashed #6ba3e8;
}

.tier-empty {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgba(245, 248, 240, 0.4);
  font-size: 0.9rem;
  font-style: italic;
  min-height: 76px;
}

.tier-pokemon-item {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 6px 10px;
  background: rgba(26, 35, 50, 0.8);
  border: 1px solid rgba(107, 163, 232, 0.2);
  border-radius: 6px;
  cursor: grab;
  transition: all 0.2s ease;
  position: relative;
}

.tier-pokemon-item:active {
  cursor: grabbing;
}

.tier-pokemon-item:hover {
  border-color: #6ba3e8;
  transform: translateY(-1px);
  box-shadow: 0 2px 8px rgba(107, 163, 232, 0.3);
}

.tier-pokemon-image {
  width: 32px;
  height: 32px;
  object-fit: contain;
  border-radius: 4px;
}

.tier-pokemon-placeholder {
  width: 32px;
  height: 32px;
  background: linear-gradient(135deg, rgba(107, 163, 232, 0.3), rgba(92, 184, 92, 0.3));
  border: 1px solid rgba(107, 163, 232, 0.4);
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.9rem;
  font-weight: 700;
  color: #6ba3e8;
  flex-shrink: 0;
}

.tier-pokemon-name {
  font-size: 0.8rem;
  color: #f5f8f0;
  font-weight: 500;
  white-space: nowrap;
}

.remove-pokemon-btn {
  background: rgba(231, 76, 60, 0.2);
  border: 1px solid rgba(231, 76, 60, 0.4);
  border-radius: 50%;
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #e74c3c;
  font-size: 1rem;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.2s ease;
  flex-shrink: 0;
  padding: 0;
  line-height: 1;
}

.remove-pokemon-btn:hover {
  background: rgba(231, 76, 60, 0.3);
  border-color: #e74c3c;
  transform: scale(1.1);
}

.tier-controls {
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding: 12px 8px;
  background: rgba(15, 20, 30, 0.5);
  align-items: center;
  justify-content: center;
}

.tier-control-btn {
  background: rgba(107, 163, 232, 0.2);
  border: 1px solid rgba(107, 163, 232, 0.3);
  border-radius: 4px;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #6ba3e8;
  font-size: 0.9rem;
  cursor: pointer;
  transition: all 0.2s ease;
  padding: 0;
}

.tier-control-btn:hover {
  background: rgba(107, 163, 232, 0.3);
  border-color: #6ba3e8;
}

.tier-control-btn.delete {
  background: rgba(231, 76, 60, 0.2);
  border-color: rgba(231, 76, 60, 0.3);
  color: #e74c3c;
}

.tier-control-btn.delete:hover {
  background: rgba(231, 76, 60, 0.3);
  border-color: #e74c3c;
}

/* Community Rankings Section */
.rankings-header {
  margin-bottom: 16px;
}

.rankings-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 20px;
}

.ranking-card {
  background: rgba(26, 35, 50, 0.8);
  border: 1px solid rgba(107, 163, 232, 0.2);
  border-radius: 12px;
  overflow: hidden;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
}

.ranking-card:hover {
  border-color: rgba(107, 163, 232, 0.4);
  transform: translateY(-4px);
  box-shadow: 0 8px 24px rgba(107, 163, 232, 0.2);
}

.ranking-card-header {
  padding: 16px;
  background: rgba(20, 28, 42, 0.6);
  border-bottom: 1px solid rgba(107, 163, 232, 0.1);
}

.ranking-info {
  margin-bottom: 12px;
}

.ranking-title {
  font-size: 1rem;
  color: #f5f8f0;
  margin: 0 0 8px 0;
  font-weight: 600;
}

.ranking-description {
  font-size: 0.85rem;
  color: rgba(245, 248, 240, 0.7);
  margin: 0;
  line-height: 1.5;
}

.ranking-meta {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 8px;
  border-top: 1px solid rgba(107, 163, 232, 0.1);
}

.ranking-date {
  font-size: 0.75rem;
  color: rgba(245, 248, 240, 0.5);
}

.ranking-likes {
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 0.8rem;
  color: rgba(245, 248, 240, 0.7);
}

.likes-icon {
  font-size: 0.9rem;
}

.likes-count {
  font-weight: 600;
}

.ranking-image-container {
  width: 100%;
  aspect-ratio: 16 / 9;
  background: rgba(15, 20, 30, 0.5);
  overflow: hidden;
}

.ranking-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.ranking-image-placeholder {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: rgba(245, 248, 240, 0.4);
  background: rgba(15, 20, 30, 0.3);
}

.placeholder-icon {
  font-size: 3rem;
  margin-bottom: 8px;
  opacity: 0.5;
}

.placeholder-text {
  font-size: 0.9rem;
  margin: 0;
  font-style: italic;
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

/* 1024px 响应式样式 */
@media (max-width: 1024px) {
  .section-heading { font-size: 1.2rem; }
  .section-subtitle { font-size: 0.85rem; }
  .pokemon-grid { grid-template-columns: repeat(8, 1fr); gap: 6px; }
  .pokemon-card { padding: 6px; gap: 4px; }
  .pokemon-card-image { width: 40px; height: 40px; }
  .pokemon-card-placeholder { font-size: 1rem; }
  .pokemon-card-name { font-size: 0.65rem; }
  .tier-list-section { padding: 1.8rem 0; }
  .add-tier-btn { padding: 6px 14px; font-size: 0.85rem; }
  .tier-row { grid-template-columns: 70px 1fr auto; min-height: 90px; }
  .tier-label { padding: 10px; font-size: 1.3rem; }
  .tier-name-input { font-size: 1.3rem; width: 45px; }
  .tier-content { padding: 10px; min-height: 90px; gap: 6px; }
  .tier-empty { min-height: 70px; font-size: 0.85rem; }
  .tier-pokemon-item { padding: 5px 8px; gap: 6px; }
  .tier-pokemon-image, .tier-pokemon-placeholder { width: 28px; height: 28px; }
  .tier-pokemon-placeholder { font-size: 0.8rem; }
  .tier-pokemon-name { font-size: 0.75rem; }
  .remove-pokemon-btn { width: 18px; height: 18px; font-size: 0.9rem; }
  .tier-controls { padding: 10px 6px; gap: 3px; }
  .tier-control-btn { width: 28px; height: 28px; font-size: 0.8rem; }
  .rankings-grid { grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 16px; }
  .ranking-card-header { padding: 14px; }
  .ranking-title { font-size: 0.95rem; margin-bottom: 6px; }
  .ranking-description { font-size: 0.8rem; }
  .ranking-meta { padding-top: 6px; }
  .ranking-date { font-size: 0.7rem; }
  .ranking-likes { font-size: 0.75rem; }
  .placeholder-icon { font-size: 2.5rem; margin-bottom: 6px; }
  .placeholder-text { font-size: 0.85rem; }
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
  .list-header { margin-bottom: 1.2rem; }
  .section-heading { font-size: 1.4rem; gap: 0.6rem; }
  .heading-icon { font-size: 1.1rem; }
  .section-subtitle { font-size: 0.8rem; }
  .pokemon-grid { grid-template-columns: repeat(5, 1fr); gap: 0.4rem; }
  .pokemon-card { padding: 0.4rem; gap: 0.3rem; }
  .pokemon-card-image { width: 35px; height: 35px; }
  .pokemon-card-placeholder { font-size: 0.9rem; }
  .pokemon-card-name { font-size: 0.6rem; }
  .tier-list-section { padding: 1.2rem 0; }
  .tier-list-header { flex-direction: column; gap: 0.8rem; align-items: flex-start; margin-bottom: 1.2rem; }
  .add-tier-btn { padding: 0.5rem 1.2rem; font-size: 0.8rem; }
  .tier-list-container { gap: 1px; }
  .tier-row { grid-template-columns: 60px 1fr; min-height: 80px; }
  .tier-label { padding: 0.8rem; font-size: 1.2rem; }
  .tier-name-input { font-size: 1.2rem; width: 40px; padding: 0.2rem; }
  .tier-content { padding: 0.8rem; min-height: 80px; gap: 0.4rem; }
  .tier-empty { min-height: 64px; font-size: 0.8rem; }
  .tier-pokemon-item { padding: 0.4rem 0.6rem; gap: 0.4rem; }
  .tier-pokemon-image, .tier-pokemon-placeholder { width: 24px; height: 24px; }
  .tier-pokemon-placeholder { font-size: 0.7rem; }
  .tier-pokemon-name { font-size: 0.7rem; }
  .remove-pokemon-btn { width: 16px; height: 16px; font-size: 0.8rem; }
  .tier-controls { display: none; }
  .rankings-header { margin-bottom: 1.2rem; }
  .rankings-grid { grid-template-columns: 1fr; gap: 1.2rem; }
  .ranking-card-header { padding: 1.2rem; }
  .ranking-info { margin-bottom: 0.8rem; }
  .ranking-title { font-size: 1rem; margin-bottom: 0.5rem; }
  .ranking-description { font-size: 0.8rem; }
  .ranking-meta { padding-top: 0.5rem; }
  .ranking-date { font-size: 0.65rem; }
  .ranking-likes { font-size: 0.7rem; gap: 0.3rem; }
  .likes-icon { font-size: 0.8rem; }
  .placeholder-icon { font-size: 2rem; margin-bottom: 0.5rem; }
  .placeholder-text { font-size: 0.8rem; }
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

