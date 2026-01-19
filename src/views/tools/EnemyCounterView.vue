<template>
  <div class="page-view">
    <AppHeader />
    
    <div class="page-content">
      <!-- Page Header -->
      <section class="page-header">
        <div class="page-header-content">
          <div class="page-header-badge">
            <span class="badge-icon">⚔️</span>
            <span class="badge-text">Enemy Counter</span>
          </div>
          <h1 class="page-title">Enemy Counter Guide</h1>
          <p class="page-subtitle">
            Discover optimal PokéPath TD enemy counters with detailed analysis of resistances, stats, and recommended Pokémon matchups for strategic advantage.
          </p>
        </div>
      </section>

      <div class="container">
        <!-- Main Functionality -->
        <section class="strategy-content">
          <!-- Enemy Detail Section -->
          <div class="enemy-detail-container">
              <div v-if="selectedEnemy" class="enemy-detail-card">
                <!-- Enemy Info Section -->
                <div class="enemy-info-section">
                  <div class="enemy-main-info">
                    <div class="enemy-image-wrapper">
                      <img
                        v-if="selectedEnemy.imageUrl"
                        :src="selectedEnemy.imageUrl"
                        :alt="selectedEnemy.name"
                        class="enemy-detail-image"
                      />
                      <div v-else class="enemy-detail-placeholder">
                        {{ selectedEnemy.name.charAt(0) }}
                      </div>
                    </div>
                    <div class="enemy-basic-info">
                      <div class="enemy-name-row">
                        <h2 class="enemy-detail-name">{{ selectedEnemy.name }}</h2>
                        <span class="threat-badge-large" :class="getThreatClass(selectedEnemy.threat)">
                          {{ selectedEnemy.threat }}
                        </span>
                      </div>
                      <div class="enemy-stats-compact">
                        <div class="stat-compact">
                          <span class="stat-label-compact">HP</span>
                          <span class="stat-value-compact">{{ formatNumber(selectedEnemy.hp) }}</span>
                        </div>
                        <div class="stat-compact">
                          <span class="stat-label-compact">Armor</span>
                          <span class="stat-value-compact">{{ selectedEnemy.armor ? formatNumber(selectedEnemy.armor) : '-' }}</span>
                        </div>
                        <div class="stat-compact">
                          <span class="stat-label-compact">Speed</span>
                          <span class="stat-value-compact">{{ selectedEnemy.speed }}</span>
                        </div>
                        <div class="stat-compact">
                          <span class="stat-label-compact">Gold</span>
                          <span class="stat-value-compact">{{ formatNumber(selectedEnemy.gold) }}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="enemy-attributes">
                    <div v-if="selectedEnemy.resistances && selectedEnemy.resistances.length > 0" class="attribute-group">
                      <span class="attribute-label">Resistances</span>
                      <span
                        v-for="resistance in selectedEnemy.resistances"
                        :key="resistance"
                        class="attribute-tag"
                      >
                        {{ resistance }}
                      </span>
                    </div>
                    <div v-if="selectedEnemy.invisible || selectedEnemy.regeneration" class="attribute-group">
                      <span class="attribute-label">Special</span>
                      <span v-if="selectedEnemy.invisible" class="attribute-tag special">
                        <span class="special-icon">👻</span>
                        Invisible
                      </span>
                      <span v-if="selectedEnemy.regeneration" class="attribute-tag special">
                        <span class="special-icon">💚</span>
                        {{ selectedEnemy.regeneration }}
                      </span>
                    </div>
                  </div>
                </div>

                <!-- Recommendations -->
                <div class="recommendations-section">
                  <div class="recommendations-header">
                    <h3 class="recommendations-title">
                      <span class="title-icon">⭐</span>
                      Recommended Pokémon
                    </h3>
                  </div>
                  <div class="pokemon-grid">
                    <div
                      v-for="pokemon in recommendedPokemon"
                      :key="pokemon.id"
                      class="pokemon-card"
                    >
                      <div class="pokemon-card-image">
                        <img
                          v-if="pokemon.imageUrl"
                          :src="pokemon.imageUrl"
                          :alt="pokemon.name"
                          class="pokemon-image"
                        />
                        <div v-else class="pokemon-image-placeholder">
                          {{ pokemon.name.charAt(0) }}
                        </div>
                      </div>
                      <div class="pokemon-card-body">
                        <h4 class="pokemon-name">{{ pokemon.name }}</h4>
                        <div class="pokemon-stats-compact">
                          <div class="pokemon-stat-compact">
                            <span class="stat-label-tiny">Power</span>
                            <span class="stat-value-tiny">{{ pokemon.power }}</span>
                          </div>
                          <div class="pokemon-stat-compact">
                            <span class="stat-label-tiny">Range</span>
                            <span class="stat-value-tiny">{{ pokemon.range }}</span>
                          </div>
                        </div>
                        <div class="pokemon-ability-text">{{ pokemon.ability }}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div v-else class="enemy-placeholder-card">
                <div class="placeholder-icon">⚔️</div>
                <h3 class="placeholder-title">Select an Enemy</h3>
                <p class="placeholder-text">Choose an enemy from the list below to view details and recommendations</p>
              </div>
          </div>

          <!-- Enemy List Section -->
          <div class="enemy-list-container">
            <div class="enemy-list-header">
              <h3 class="section-heading">
                <span class="heading-icon">👹</span>
                Enemy List
              </h3>
              <p class="section-subtitle">
                {{ selectedEnemy ? 'Click another enemy to switch' : 'Select an enemy to view details and recommendations' }}
              </p>
            </div>
            
            <div class="enemy-grid">
              <div
                v-for="enemy in enemyData"
                :key="enemy.id"
                @click="selectEnemy(enemy)"
                :class="['enemy-card', { active: selectedEnemy && selectedEnemy.id === enemy.id }]"
              >
                <div class="enemy-card-image">
                  <img
                    v-if="enemy.imageUrl"
                    :src="enemy.imageUrl"
                    :alt="enemy.name"
                    class="enemy-card-img"
                  />
                  <div v-else class="enemy-card-placeholder">
                    {{ enemy.name.charAt(0) }}
                  </div>
                </div>
                <div class="enemy-card-body">
                  <h4 class="enemy-card-name">{{ enemy.name }}</h4>
                  <span class="threat-badge-small" :class="getThreatClass(enemy.threat)">
                    {{ enemy.threat }}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- Introduction Section -->
        <section class="intro-section">
          <div class="intro-card">
            <h2 class="intro-title">📖 How to Use Enemy Counter</h2>
            <div class="intro-content">
              <p>
                The Enemy Counter tool helps you find the best Pokémon to defeat specific enemies in PokéPath TD. 
                By analyzing enemy statistics and resistances, you can build an effective counter team.
              </p>
              <div class="intro-steps">
                <div class="intro-step">
                  <span class="step-number">1</span>
                  <div class="step-content">
                    <h4>Search or Select Enemy</h4>
                    <p>Use the search bar to find enemies by name, or browse through the enemy grid below.</p>
                  </div>
                </div>
                <div class="intro-step">
                  <span class="step-number">2</span>
                  <div class="step-content">
                    <h4>Analyze Enemy Stats</h4>
                    <p>Review the enemy's HP, Armor, Speed, and most importantly, their Resistances.</p>
                  </div>
                </div>
                <div class="intro-step">
                  <span class="step-number">3</span>
                  <div class="step-content">
                    <h4>Get Recommendations</h4>
                    <p>View recommended Pokémon based on DPS calculations and ability analysis to counter the enemy effectively.</p>
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
                <h3 class="faq-question">How are counter Pokémon recommended?</h3>
                <p class="faq-answer">
                  Recommendations are based on DPS (Damage Per Second) calculations and ability analysis. 
                  Pokémon with higher DPS and abilities that can bypass or counter enemy resistances are prioritized.
                </p>
              </div>
              <div class="faq-item">
                <h3 class="faq-question">What should I do if an enemy has resistances?</h3>
                <p class="faq-answer">
                  If an enemy resists certain status effects (like Burn, Poison, Slow, Stun), avoid using Pokémon 
                  that rely on those effects. Instead, focus on high raw DPS Pokémon or those with abilities that 
                  can bypass the resistances.
                </p>
              </div>
              <div class="faq-item">
                <h3 class="faq-question">How important is enemy armor?</h3>
                <p class="faq-answer">
                  High armor enemies require sustained damage over time. Pokémon with high DPS and good range are 
                  ideal. Consider Pokémon with abilities that can reduce armor or deal percentage-based damage.
                </p>
              </div>
              <div class="faq-item">
                <h3 class="faq-question">What about invisible enemies?</h3>
                <p class="faq-answer">
                  Invisible enemies can only be targeted by certain Pokémon or abilities. Make sure to include 
                  Pokémon with abilities that can reveal or target invisible units in your team composition.
                </p>
              </div>
              <div class="faq-item">
                <h3 class="faq-question">Should I only use the recommended Pokémon?</h3>
                <p class="faq-answer">
                  Recommendations are a starting point. Consider your overall team composition, available resources, 
                  and synergy between Pokémon. Sometimes a well-balanced team performs better than pure DPS.
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
import { ref, computed } from 'vue'
import AppHeader from '../../components/AppHeader.vue'
import AppFooter from '../../components/AppFooter.vue'
import enemyData from '../../data/enemies.js'
import pokemonData from '../../data/pokemon.js'

const selectedEnemy = ref(null)
const enemySearchQuery = ref('')

const recommendedPokemon = computed(() => {
  if (!selectedEnemy.value) return []
  
  // Get highest level Pokémon from each category
  const highestLevelPokemon = {}
  pokemonData.forEach(pokemon => {
    const category = pokemon.category
    if (!highestLevelPokemon[category]) {
      highestLevelPokemon[category] = pokemon
    } else {
      const currentLevel = parseInt(pokemon.name.match(/\[(\d+)\]/)?.[1] || '0')
      const existingLevel = parseInt(highestLevelPokemon[category].name.match(/\[(\d+)\]/)?.[1] || '0')
      if (currentLevel > existingLevel) {
        highestLevelPokemon[category] = pokemon
      }
    }
  })

  // Filter Pokémon based on enemy resistances
  let candidates = Object.values(highestLevelPokemon)
  
  // If enemy has resistances, prioritize Pokémon that can counter them
  if (selectedEnemy.value.resistances && selectedEnemy.value.resistances.length > 0) {
    // For now, just return top DPS Pokémon
    // In a real implementation, you'd check ability descriptions for counters
    candidates = candidates
      .sort((a, b) => {
        const dpsA = a.power / a.recharge
        const dpsB = b.power / b.recharge
        return dpsB - dpsA
      })
      .slice(0, 6)
  } else {
    // No resistances, recommend highest DPS
    candidates = candidates
      .sort((a, b) => {
        const dpsA = a.power / a.recharge
        const dpsB = b.power / b.recharge
        return dpsB - dpsA
      })
      .slice(0, 6)
  }

  return candidates
})

const selectEnemy = (enemy) => {
  selectedEnemy.value = enemy
  enemySearchQuery.value = ''
}

const formatNumber = (num) => {
  if (num === null || num === undefined) return '-'
  return num.toLocaleString()
}

const getThreatClass = (threat) => {
  if (threat.includes('Normal')) return 'threat-normal'
  if (threat.includes('Strong')) return 'threat-strong'
  if (threat.includes('Elite')) return 'threat-elite'
  if (threat.includes('Boss')) return 'threat-boss'
  if (threat.includes('Legendary')) return 'threat-legendary'
  return ''
}
</script>

<style scoped>
/* Page View and Content styles are now in main.css */
/* Page Header styles are now in main.css */

.strategy-content {
  width: 100%;
}

/* Enemy List Container */
.enemy-list-container {
  background: rgba(20, 28, 42, 0.6);
  border-radius: 10px;
  padding: 1rem;
  border: 1px solid rgba(107, 163, 232, 0.2);
  margin-bottom: 2rem;
}

.enemy-list-header {
  margin-bottom: 0.75rem;
  padding-bottom: 0.6rem;
  border-bottom: 1px solid rgba(107, 163, 232, 0.15);
}

.section-heading {
  display: flex;
  align-items: center;
  gap: 0.4rem;
  font-size: 1.1rem;
  color: #f5f8f0;
  margin: 0 0 0.3rem 0;
}

.heading-icon {
  font-size: 0.95rem;
}

.section-subtitle {
  color: rgba(245, 248, 240, 0.6);
  font-size: 0.9rem;
  margin: 0;
}

.enemy-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(85px, 1fr));
  gap: 0.5rem;
}

.enemy-card {
  background: rgba(26, 35, 50, 0.7);
  border-radius: 8px;
  overflow: hidden;
  border: 2px solid rgba(107, 163, 232, 0.2);
  cursor: pointer;
  transition: all 0.2s ease;
  text-align: center;
}

.enemy-card:hover {
  border-color: rgba(107, 163, 232, 0.5);
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(107, 163, 232, 0.2);
}

.enemy-card.active {
  border-color: #6ba3e8;
  background: rgba(107, 163, 232, 0.15);
  box-shadow: 0 0 0 2px rgba(107, 163, 232, 0.4);
}

.enemy-card-image {
  width: 100%;
  height: 50px;
  background: rgba(107, 163, 232, 0.08);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.4rem;
}

.enemy-card-img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.enemy-card-placeholder {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #6ba3e8;
  font-size: 1.5rem;
  font-weight: 600;
}

.enemy-card-body {
  padding: 0.4rem 0.3rem;
}

.enemy-card-name {
  font-size: 0.75rem;
  color: #f5f8f0;
  margin: 0 0 0.3rem 0;
  font-weight: 500;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  line-height: 1.2;
}

.enemy-card-body .threat-badge-small {
  display: block;
  margin: 0 auto;
}

/* Enemy Detail Container */
.enemy-detail-container {
  margin-bottom: 1.5rem;
}

.enemy-detail-card {
  background: rgba(20, 28, 42, 0.8);
  border-radius: 10px;
  padding: 1rem;
  border: 1px solid rgba(107, 163, 232, 0.2);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
}

/* Enemy Info Section */
.enemy-info-section {
  margin-bottom: 1rem;
}

.enemy-main-info {
  display: flex;
  gap: 0.75rem;
  align-items: flex-start;
  margin-bottom: 0.75rem;
  padding-bottom: 0.75rem;
  border-bottom: 1px solid rgba(107, 163, 232, 0.2);
}

.enemy-image-wrapper {
  flex-shrink: 0;
}

.enemy-detail-image {
  width: 50px;
  height: 50px;
  object-fit: contain;
  border-radius: 6px;
  background: rgba(107, 163, 232, 0.1);
  padding: 0.3rem;
  border: 1px solid rgba(107, 163, 232, 0.3);
}

.enemy-detail-placeholder {
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(107, 163, 232, 0.15);
  border: 1px solid rgba(107, 163, 232, 0.3);
  border-radius: 6px;
  color: #6ba3e8;
  font-size: 1.3rem;
  font-weight: 600;
}

.enemy-basic-info {
  flex: 1;
  min-width: 0;
}

.enemy-name-row {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  margin-bottom: 0.5rem;
  flex-wrap: wrap;
}

.enemy-detail-name {
  font-size: 1.25rem;
  color: #f5f8f0;
  margin: 0;
  font-weight: 700;
}

.enemy-stats-compact {
  display: flex;
  gap: 0.75rem;
  flex-wrap: wrap;
}

.stat-compact {
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
}

.stat-label-compact {
  font-size: 0.7rem;
  color: rgba(245, 248, 240, 0.6);
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.stat-value-compact {
  font-size: 0.9rem;
  color: #f5f8f0;
  font-weight: 600;
}

.enemy-attributes {
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
}

.attribute-group {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  flex-wrap: wrap;
}

.attribute-label {
  font-size: 0.75rem;
  color: rgba(245, 248, 240, 0.7);
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  flex-shrink: 0;
}

.attribute-tag {
  display: inline-flex;
  align-items: center;
  gap: 0.3rem;
  padding: 0.3rem 0.6rem;
  background: rgba(26, 35, 50, 0.6);
  border: 1px solid rgba(107, 163, 232, 0.2);
  border-radius: 5px;
  color: rgba(245, 248, 240, 0.9);
  font-size: 0.75rem;
}

.attribute-tag.special {
  background: rgba(107, 163, 232, 0.15);
  border-color: rgba(107, 163, 232, 0.3);
  color: #6ba3e8;
}

.special-icon {
  font-size: 0.7rem;
}

/* Recommendations Section */
.recommendations-section {
  margin-top: 1rem;
  padding-top: 1rem;
  border-top: 1px solid rgba(107, 163, 232, 0.2);
}

.recommendations-header {
  margin-bottom: 0.75rem;
}

.recommendations-title {
  display: flex;
  align-items: center;
  gap: 0.4rem;
  font-size: 1.1rem;
  color: #f5f8f0;
  margin: 0;
  font-weight: 600;
}

.title-icon {
  font-size: 0.9rem;
}

.pokemon-grid {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 0.75rem;
}

.pokemon-card {
  background: rgba(26, 35, 50, 0.7);
  border-radius: 8px;
  overflow: hidden;
  border: 1px solid rgba(107, 163, 232, 0.2);
  transition: all 0.2s ease;
  display: flex;
  flex-direction: column;
}

.pokemon-card:hover {
  border-color: rgba(107, 163, 232, 0.4);
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(107, 163, 232, 0.2);
}

.pokemon-card-image {
  background: linear-gradient(135deg, rgba(107, 163, 232, 0.08), rgba(92, 184, 92, 0.08));
  padding: 0.4rem;
  text-align: center;
  border-bottom: 1px solid rgba(107, 163, 232, 0.1);
}

.pokemon-image {
  width: 40px;
  height: 40px;
  object-fit: contain;
}

.pokemon-image-placeholder {
  width: 40px;
  height: 40px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: rgba(107, 163, 232, 0.2);
  border: 1px solid rgba(107, 163, 232, 0.3);
  border-radius: 6px;
  color: #6ba3e8;
  font-size: 1.1rem;
  font-weight: 600;
}

.pokemon-card-body {
  padding: 0.5rem;
  flex: 1;
  display: flex;
  flex-direction: column;
}

.pokemon-name {
  font-size: 0.8rem;
  color: #f5f8f0;
  margin: 0 0 0.4rem 0;
  text-align: center;
  font-weight: 600;
  line-height: 1.2;
}

.pokemon-stats-compact {
  display: flex;
  justify-content: center;
  gap: 0.6rem;
  margin-bottom: 0.4rem;
}

.pokemon-stat-compact {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.2rem;
}

.stat-label-tiny {
  font-size: 0.6rem;
  color: rgba(245, 248, 240, 0.6);
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.stat-value-tiny {
  font-size: 0.85rem;
  color: #f5f8f0;
  font-weight: 600;
}

.pokemon-ability-text {
  font-size: 0.7rem;
  color: rgba(245, 248, 240, 0.75);
  line-height: 1.3;
  text-align: center;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 0.2rem;
}

/* Placeholder */
.enemy-placeholder-card {
  background: rgba(20, 28, 42, 0.6);
  border-radius: 10px;
  padding: 2rem 1.5rem;
  border: 1px dashed rgba(107, 163, 232, 0.25);
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 200px;
}

.placeholder-icon {
  font-size: 2.5rem;
  margin-bottom: 0.75rem;
  opacity: 0.5;
  filter: grayscale(0.4);
}

.placeholder-title {
  color: rgba(245, 248, 240, 0.9);
  font-size: 1.2rem;
  margin: 0 0 0.5rem 0;
  font-weight: 600;
}

.placeholder-text {
  color: rgba(245, 248, 240, 0.6);
  line-height: 1.5;
  margin: 0;
  font-size: 0.85rem;
  max-width: 400px;
}


/* Threat Badges */
.threat-badge-large {
  display: inline-block;
  padding: 0.4rem 0.8rem;
  border-radius: 6px;
  font-size: 0.9rem;
  font-weight: 600;
}

.threat-badge-small {
  display: inline-block;
  padding: 0.25rem 0.5rem;
  border-radius: 5px;
  font-size: 0.7rem;
  font-weight: 500;
}

.threat-normal {
  background: rgba(92, 184, 92, 0.2);
  color: #5cb85c;
  border: 1px solid rgba(92, 184, 92, 0.3);
}

.threat-strong {
  background: rgba(240, 173, 78, 0.2);
  color: #f0ad4e;
  border: 1px solid rgba(240, 173, 78, 0.3);
}

.threat-elite {
  background: rgba(217, 83, 79, 0.2);
  color: #d9534f;
  border: 1px solid rgba(217, 83, 79, 0.3);
}

.threat-boss {
  background: rgba(153, 102, 204, 0.2);
  color: #9966cc;
  border: 1px solid rgba(153, 102, 204, 0.3);
}

.threat-legendary {
  background: rgba(255, 215, 0, 0.2);
  color: #ffd700;
  border: 1px solid rgba(255, 215, 0, 0.3);
}

.resistance-tag {
  display: inline-block;
  padding: 0.35rem 0.7rem;
  background: rgba(217, 83, 79, 0.2);
  color: #d9534f;
  border: 1px solid rgba(217, 83, 79, 0.4);
  border-radius: 6px;
  font-size: 0.8rem;
  font-weight: 500;
  transition: all 0.2s ease;
}

.resistance-tag:hover {
  background: rgba(217, 83, 79, 0.3);
  border-color: rgba(217, 83, 79, 0.6);
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

/* 1024px 响应式样式 */
@media (max-width: 1024px) {
  .counter-section { padding: 1.8rem 0; }
  .counter-container { gap: 1.1rem; }
  .counter-card { padding: 1.3rem; }
  .counter-title { font-size: 1.4rem; margin-bottom: 1.1rem; }
  .counter-form { gap: 1.1rem; }
  .form-group { gap: 0.6rem; }
  .form-label { font-size: 0.85rem; }
  .form-select { padding: 0.7rem 1rem; font-size: 0.9rem; }
  .counter-results { gap: 1.1rem; }
  .result-card { padding: 1.3rem; }
  .result-title { font-size: 1.2rem; margin-bottom: 1.1rem; }
  .pokemon-result-item { padding: 1.1rem; gap: 0.9rem; }
  .pokemon-result-image { width: 50px; height: 50px; }
  .pokemon-result-info h4 { font-size: 1.05rem; margin-bottom: 0.4rem; }
  .pokemon-result-stats { gap: 0.6rem; }
  .result-stat { font-size: 0.8rem; }
  .result-reason { font-size: 0.85rem; }
}

/* 768px 移动端响应式样式 */
@media (max-width: 768px) {
  .counter-section { padding: 1.2rem 0; }
  .counter-container { grid-template-columns: 1fr; gap: 1.2rem; }
  .counter-card { padding: 1.2rem; }
  .counter-title { font-size: 1.4rem; margin-bottom: 0.8rem; }
  .counter-form { gap: 1.2rem; }
  .form-group { gap: 0.5rem; }
  .form-label { font-size: 0.8rem; }
  .form-select { padding: 0.8rem 1.2rem; font-size: 0.85rem; }
  .counter-results { gap: 1.2rem; }
  .result-card { padding: 1.2rem; }
  .result-title { font-size: 1.4rem; margin-bottom: 0.8rem; }
  .pokemon-result-item { padding: 0.8rem; gap: 0.8rem; flex-direction: column; text-align: center; }
  .pokemon-result-image { width: 45px; height: 45px; }
  .pokemon-result-info h4 { font-size: 1rem; margin-bottom: 0.3rem; }
  .pokemon-result-stats { gap: 0.4rem; flex-wrap: wrap; justify-content: center; }
  .result-stat { font-size: 0.75rem; }
  .result-reason { font-size: 0.8rem; }
}
</style>

