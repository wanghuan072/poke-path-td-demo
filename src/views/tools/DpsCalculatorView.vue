<template>
  <div class="page-view">
    <AppHeader />
    
    <div class="page-content">
    <!-- Page Header -->
    <section class="page-header">
        <div class="page-header-content">
          <div class="page-header-badge">
            <span class="badge-icon">⚡</span>
            <span class="badge-text">DPS Calculator</span>
          </div>
          <h1 class="page-title">PokéPath TD DPS Calculator - Damage Calculation Tool</h1>
          <p class="page-subtitle">
            Calculate precise DPS for any PokéPath TD Pokémon with our advanced calculator. Input stats manually or select from the database for accurate damage calculations.
          </p>
      </div>
    </section>

      <div class="container">
        <section class="calculator-section">
          <!-- Results and Input Section -->
          <div class="main-content-layout">
            <!-- Left: Results or Placeholder -->
            <div class="results-container">
              <div v-if="selectedPokemon || (power > 0 && recharge > 0)" class="results-card">
                <div class="results-layout">
                  <!-- Left: Pokémon Info -->
                  <div class="pokemon-info-side">
                    <div class="pokemon-image-wrapper" v-if="selectedPokemon">
                      <img
                        v-if="selectedPokemon.imageUrl"
                        :src="selectedPokemon.imageUrl"
                        :alt="selectedPokemon.name"
                        class="pokemon-image"
                      />
                      <div v-else class="pokemon-image-placeholder">
                        {{ selectedPokemon.name.charAt(0) }}
                      </div>
                    </div>
                    <h2 class="pokemon-name">{{ selectedPokemon ? selectedPokemon.name : 'Manual Calculation' }}</h2>
                    <div class="pokemon-params">
                      <div class="param-row">
                        <span class="param-label">Power:</span>
                        <span class="param-value">{{ power || 0 }}</span>
                      </div>
                      <div class="param-row">
                        <span class="param-label">Recharge:</span>
                        <span class="param-value">{{ recharge || 0 }}s</span>
                      </div>
                      <div class="param-row">
                        <span class="param-label">Critical:</span>
                        <span class="param-value">{{ formatCritical(critical) }}</span>
                      </div>
                      <div class="param-row" v-if="selectedPokemon">
                        <span class="param-label">Range:</span>
                        <span class="param-value">{{ selectedPokemon.range }}</span>
            </div>
                </div>
                  </div>

                  <!-- Right: DPS Results -->
                  <div class="dps-results-side">
                    <div class="dps-primary">
                      <div class="dps-primary-item">
                        <div class="dps-primary-label">BASE DPS</div>
                        <div class="dps-primary-value">{{ baseDPS.toFixed(2) }}</div>
                      </div>
                      <div class="dps-primary-item highlight">
                        <div class="dps-primary-label">EXPECTED DPS</div>
                        <div class="dps-primary-value highlight">{{ expectedDPS.toFixed(2) }}</div>
                      </div>
                    </div>
                    <div class="dps-secondary">
                      <div class="dps-secondary-item">
                        <span class="dps-secondary-label">Avg Damage</span>
                        <span class="dps-secondary-value">{{ avgDamage.toFixed(2) }}</span>
                      </div>
                      <div class="dps-secondary-item">
                        <span class="dps-secondary-label">Attacks/sec</span>
                        <span class="dps-secondary-value">{{ attacksPerSecond.toFixed(2) }}</span>
                  </div>
                  </div>
                  </div>
                </div>
              </div>

              <div v-else class="placeholder-card">
                <div class="placeholder-icon">⚡</div>
                <h3 class="placeholder-title">Select a Pokémon</h3>
                <p class="placeholder-text">Choose a level 100 Pokémon from the list below or enter values manually</p>
              </div>
            </div>

            <!-- Right: Manual Input -->
            <div class="manual-input-section">
              <div class="input-card">
                <h3 class="input-title">Manual Input</h3>
                
                <div class="input-group">
                  <label class="input-label">Power</label>
                  <input
                    v-model.number="power"
                    type="number"
                    min="0"
                    step="1"
                    class="input-field"
                    placeholder="Enter power value"
                    @input="clearPokemonSelection"
                  />
                  </div>

                <div class="input-group">
                  <label class="input-label">Recharge Time (seconds)</label>
                  <input
                    v-model.number="recharge"
                    type="number"
                    min="0.1"
                    step="0.01"
                    class="input-field"
                    placeholder="Enter recharge time"
                    @input="clearPokemonSelection"
                  />
                  </div>

                <div class="input-group">
                  <label class="input-label">Critical Hit Rate (%)</label>
                  <input
                    v-model.number="criticalPercent"
                    type="number"
                    min="0"
                    max="100"
                    step="0.1"
                    class="input-field"
                    placeholder="Enter critical rate as percentage"
                    @input="updateCriticalFromPercent"
                  />
                </div>
              </div>
            </div>
          </div>

          <!-- Pokémon List Section -->
          <div class="pokemon-list-container">
            <div class="list-header">
              <h3 class="section-heading">
                <span class="heading-icon">⚡</span>
                Level 100 Pokémon
              </h3>
              <p class="section-subtitle">Click a Pokémon to calculate its DPS</p>
            </div>
            
            <div class="pokemon-grid">
              <div
                v-for="pokemon in level100Pokemon"
                :key="pokemon.id"
                @click="selectPokemon(pokemon)"
                :class="['pokemon-card', { active: selectedPokemon && selectedPokemon.id === pokemon.id }]"
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
                <div class="pokemon-card-body">
                  <h4 class="pokemon-card-name">{{ pokemon.name }}</h4>
                  <div class="pokemon-stats">
                    <span class="stat-badge">P: {{ pokemon.power }}</span>
                    <span class="stat-badge">R: {{ pokemon.recharge }}s</span>
                    <span class="stat-badge">C: {{ formatCritical(pokemon.critical) }}</span>
                  </div>
                </div>
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
          <h2 class="intro-title">📖 How to Use DPS Calculator</h2>
          <div class="intro-content">
            <p>
              The DPS Calculator helps you understand and compare Pokémon damage output in PokéPath TD.
              Calculate both base DPS and expected DPS with critical hits to make informed decisions about your team's damage dealers.
            </p>
            <div class="intro-steps">
              <div class="intro-step">
                <span class="step-number">1</span>
                <div class="step-content">
                  <h4>Select or Input Pokémon</h4>
                  <p>Choose a Pokémon from the database or manually input Power, Recharge, and Critical values for custom calculations.</p>
                </div>
              </div>
              <div class="intro-step">
                <span class="step-number">2</span>
                <div class="step-content">
                  <h4>Review DPS Results</h4>
                  <p>View base DPS (damage per second) and expected DPS (accounting for critical hits) to understand true damage potential.</p>
                </div>
              </div>
              <div class="intro-step">
                <span class="step-number">3</span>
                <div class="step-content">
                  <h4>Compare Multiple Pokémon</h4>
                  <p>Use the calculator to compare different Pokémon and find the most efficient damage dealers for your team composition.</p>
                </div>
              </div>
              <div class="intro-step">
                <span class="step-number">4</span>
                <div class="step-content">
                  <h4>Optimize Team DPS</h4>
                  <p>Balance your team's overall damage output by selecting Pokémon with complementary DPS values and abilities.</p>
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
              <h3 class="faq-question">What is the difference between Base DPS and Expected DPS?</h3>
              <p class="faq-answer">
                Base DPS shows damage per second without critical hits. Expected DPS factors in critical hit chance and damage multipliers, giving a more realistic average damage output.
              </p>
            </div>
            <div class="faq-item">
              <h3 class="faq-question">How accurate are the DPS calculations?</h3>
              <p class="faq-answer">
                Calculations are based on game mechanics and are highly accurate. However, actual in-game DPS may vary slightly due to enemy resistances, terrain effects, and ability interactions.
              </p>
            </div>
            <div class="faq-item">
              <h3 class="faq-question">Can I calculate DPS for Pokémon not in the database?</h3>
              <p class="faq-answer">
                Yes! Use the manual input fields to calculate DPS for any Pokémon by entering their Power, Recharge time, and Critical hit values.
              </p>
            </div>
            <div class="faq-item">
              <h3 class="faq-question">What does the critical multiplier mean?</h3>
              <p class="faq-answer">
                The critical multiplier shows how much extra damage critical hits deal. For example, 1.5x means critical hits deal 50% more damage than normal attacks.
              </p>
            </div>
            <div class="faq-item">
              <h3 class="faq-question">How do abilities affect DPS calculations?</h3>
              <p class="faq-answer">
                The calculator focuses on base attack DPS. Abilities that modify damage, attack speed, or add effects aren't directly calculated but should be considered separately.
              </p>
            </div>
            <div class="faq-item">
              <h3 class="faq-question">Why is recharge time important for DPS?</h3>
              <p class="faq-answer">
                Recharge time determines how often a Pokémon can attack. Lower recharge time means more attacks per second, resulting in higher DPS even with lower power.
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
import AppHeader from '../../components/AppHeader.vue'
import AppFooter from '../../components/AppFooter.vue'
import pokemonData from '../../data/pokemon.js'

// Get level 100 Pokémon
const level100Pokemon = computed(() => {
  return pokemonData.filter(pokemon => {
    const levelMatch = pokemon.name.match(/\[(\d+)\]/)
    return levelMatch && parseInt(levelMatch[1]) === 100
  }).sort((a, b) => a.name.localeCompare(b.name))
})

const selectedPokemon = ref(null)
const power = ref(0)
const recharge = ref(1)
const criticalPercent = ref(0)
const criticalDecimal = ref(0)

// Computed critical rate
const critical = computed(() => {
  if (criticalDecimal.value > 0) {
    return criticalDecimal.value
  }
  if (criticalPercent.value > 0) {
    return criticalPercent.value / 100
  }
  if (selectedPokemon.value) {
    return selectedPokemon.value.critical
  }
  return 0
})

// Select Pokémon
const selectPokemon = (pokemon) => {
  selectedPokemon.value = pokemon
  power.value = pokemon.power
  recharge.value = pokemon.recharge
  criticalDecimal.value = pokemon.critical
  criticalPercent.value = pokemon.critical * 100
}

// Clear Pokémon selection when manual input
const clearPokemonSelection = () => {
  selectedPokemon.value = null
}

// Update critical from percentage
const updateCriticalFromPercent = () => {
  if (criticalPercent.value > 0) {
    criticalDecimal.value = criticalPercent.value / 100
  } else {
    criticalDecimal.value = 0
  }
  clearPokemonSelection()
}

// Calculate DPS
const baseDPS = computed(() => {
  if (!power.value || !recharge.value || recharge.value <= 0) return 0
  return power.value / recharge.value
})

const expectedDPS = computed(() => {
  if (!power.value || !recharge.value || recharge.value <= 0) return 0
  return (power.value * (1 + critical.value)) / recharge.value
})

const avgDamage = computed(() => {
  if (!power.value) return 0
  return power.value * (1 + critical.value)
})

const attacksPerSecond = computed(() => {
  if (!recharge.value || recharge.value <= 0) return 0
  return 1 / recharge.value
})

// Format critical rate
const formatCritical = (critical) => {
  if (critical === 0) return '0%'
  if (critical >= 1) {
    return `${(critical * 100).toFixed(1)}%`
  }
  return `${(critical * 100).toFixed(0)}%`
}
</script>

<style scoped>
.calculator-section {
  padding: 2rem 0;
}

/* Main Content Layout */
.main-content-layout {
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  gap: 1.5rem;
  margin-bottom: 1.5rem;
}

/* Results Container */
.results-container {
  display: flex;
  flex-direction: column;
}

.results-card {
  background: rgba(20, 28, 42, 0.8);
  border-radius: 12px;
  padding: 1.5rem;
  border: 1px solid rgba(107, 163, 232, 0.2);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
}

.results-layout {
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  gap: 2rem;
  align-items: start;
}

/* Left: Pokémon Info */
.pokemon-info-side {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding-right: 2rem;
  border-right: 2px solid rgba(107, 163, 232, 0.2);
}

.pokemon-image-wrapper {
  margin-bottom: 1rem;
}

.pokemon-image {
  width: 60px;
  height: 60px;
  object-fit: contain;
  border-radius: 8px;
  background: rgba(107, 163, 232, 0.1);
  padding: 0.4rem;
  border: 1px solid rgba(107, 163, 232, 0.3);
}

.pokemon-image-placeholder {
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(107, 163, 232, 0.15);
  border: 1px solid rgba(107, 163, 232, 0.3);
  border-radius: 8px;
  color: #6ba3e8;
  font-size: 1.5rem;
  font-weight: 600;
}

.pokemon-name {
  font-size: 1rem;
  color: #f5f8f0;
  margin: 0 0 0.6rem 0;
  font-weight: 700;
}

.pokemon-params {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  width: 100%;
}

.param-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 0;
  border-bottom: 1px solid rgba(107, 163, 232, 0.1);
}

.param-row:last-child {
  border-bottom: none;
}

.param-label {
  font-size: 0.8rem;
  color: rgba(245, 248, 240, 0.8);
}

.param-value {
  font-size: 0.85rem;
  color: #6ba3e8;
  font-weight: 600;
}

/* Right: DPS Results */
.dps-results-side {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.dps-primary {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
}

.dps-primary-item {
  background: rgba(26, 35, 50, 0.6);
  border-radius: 10px;
  padding: 1rem;
  border: 1px solid rgba(107, 163, 232, 0.2);
  text-align: center;
}

.dps-primary-item.highlight {
  background: linear-gradient(135deg, rgba(107, 163, 232, 0.2), rgba(92, 184, 92, 0.2));
  border-color: rgba(107, 163, 232, 0.4);
  box-shadow: 0 4px 16px rgba(107, 163, 232, 0.3);
}

.dps-primary-label {
  font-size: 0.65rem;
  color: rgba(245, 248, 240, 0.7);
  margin-bottom: 0.5rem;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  font-weight: 600;
}

.dps-primary-value {
  font-size: 1.6rem;
  font-weight: 800;
  color: #6ba3e8;
  line-height: 1;
}

.dps-primary-value.highlight {
  color: #5cb85c;
  font-size: 1.75rem;
}

.dps-secondary {
  display: flex;
  gap: 1rem;
}

.dps-secondary-item {
  flex: 1;
  background: rgba(26, 35, 50, 0.5);
  border-radius: 8px;
  padding: 0.75rem;
  border: 1px solid rgba(107, 163, 232, 0.15);
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.dps-secondary-label {
  font-size: 0.75rem;
  color: rgba(245, 248, 240, 0.7);
  font-weight: 500;
}

.dps-secondary-value {
  font-size: 0.95rem;
  font-weight: 700;
  color: #6ba3e8;
}

.placeholder-card {
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

/* Manual Input Section */
.manual-input-section {
  display: flex;
  flex-direction: column;
}

.input-card {
  background: rgba(20, 28, 42, 0.6);
  border-radius: 10px;
  padding: 1.25rem;
  border: 1px solid rgba(107, 163, 232, 0.2);
}

.input-title {
  font-size: 1.1rem;
  font-weight: 700;
  color: #f5f8f0;
  margin: 0 0 1rem 0;
  padding-bottom: 0.75rem;
  border-bottom: 1px solid rgba(107, 163, 232, 0.2);
}

.input-group {
  margin-bottom: 1rem;
}

.input-label {
  display: block;
  font-size: 0.85rem;
  font-weight: 600;
  color: rgba(245, 248, 240, 0.9);
  margin-bottom: 0.5rem;
}

.input-field {
  width: 100%;
  padding: 0.6rem;
  border: 1px solid rgba(107, 163, 232, 0.3);
  border-radius: 8px;
  font-size: 0.9rem;
  background: rgba(26, 35, 50, 0.6);
  color: #f5f8f0;
  transition: all 0.2s ease;
  font-family: inherit;
  box-sizing: border-box;
}

.input-field:focus {
  outline: none;
  border-color: #6ba3e8;
  box-shadow: 0 0 0 3px rgba(107, 163, 232, 0.15);
  background: rgba(26, 35, 50, 0.8);
}

.input-field::placeholder {
  color: rgba(245, 248, 240, 0.4);
}

/* Pokémon List Container */
.pokemon-list-container {
  background: rgba(20, 28, 42, 0.6);
  border-radius: 10px;
  padding: 1rem;
  border: 1px solid rgba(107, 163, 232, 0.2);
}

.list-header {
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

.pokemon-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(85px, 1fr));
  gap: 0.5rem;
}

.pokemon-card {
  background: rgba(26, 35, 50, 0.7);
  border-radius: 8px;
  overflow: hidden;
  border: 1px solid rgba(107, 163, 232, 0.2);
  cursor: pointer;
  transition: all 0.2s ease;
  text-align: center;
}

.pokemon-card:hover {
  border-color: rgba(107, 163, 232, 0.5);
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(107, 163, 232, 0.2);
}

.pokemon-card.active {
  border-color: #6ba3e8;
  background: rgba(107, 163, 232, 0.15);
  box-shadow: 0 0 0 2px rgba(107, 163, 232, 0.4);
}

.pokemon-card-image {
  width: 100%;
  height: 50px;
  background: rgba(107, 163, 232, 0.08);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.4rem;
}

.pokemon-card-img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.pokemon-card-placeholder {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #6ba3e8;
  font-size: 1.5rem;
  font-weight: 600;
}

.pokemon-card-body {
  padding: 0.4rem 0.3rem;
}

.pokemon-card-name {
  font-size: 0.75rem;
  color: #f5f8f0;
  margin: 0 0 0.3rem 0;
  font-weight: 500;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  line-height: 1.2;
}

.pokemon-stats {
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
}

.stat-badge {
  font-size: 0.65rem;
  color: rgba(245, 248, 240, 0.7);
  background: rgba(26, 35, 50, 0.5);
  padding: 0.15rem 0.3rem;
  border-radius: 4px;
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
  .calculator-section { padding: 1.8rem 0; }
  .calculator-header { gap: 10px; margin-bottom: 20px; }
  .calculator-icon { width: 36px; height: 36px; font-size: 1.4rem; }
  .calculator-title { font-size: 1.6rem; }
  .calculator-main-container { gap: 18px; }
  .calculator-step-card { padding: 18px; gap: 14px; }
  .step-number { width: 28px; height: 28px; font-size: 0.85rem; }
  .step-label { font-size: 0.85rem; }
  .calculator-select { padding: 10px 14px; font-size: 0.95rem; }
  .calculator-results-card { }
  .result-header { padding: 20px 20px 18px; }
  .result-title { font-size: 1.4rem; margin-bottom: 10px; }
  .result-stats-grid { gap: 10px; padding: 20px; }
  .result-stat-item { padding: 12px; gap: 10px; }
  .stat-icon { font-size: 1.1rem; width: 28px; height: 28px; }
  .result-stat-item .stat-label { font-size: 0.7rem; }
  .result-stat-item .stat-value { font-size: 1.05rem; }
  .result-dps-section { gap: 10px; padding: 20px; }
  .dps-result-item { padding: 14px; }
  .dps-label { font-size: 0.9rem; }
  .dps-value { font-size: 1.4rem; }
  .dps-result-item.highlight .dps-value.highlight-value { font-size: 1.6rem; }
  .calculator-info-card { }
  .info-content-wrapper { padding: 20px; }
  .info-title { font-size: 1.05rem; margin-bottom: 14px; }
  .info-formulas { padding: 14px; gap: 8px; margin-bottom: 14px; }
  .formula-item { font-size: 0.85rem; }
  .info-description { font-size: 0.8rem; }
}

/* 768px 移动端响应式样式 */
@media (max-width: 768px) {
  .calculator-section { padding: 1.2rem 0; }
  .calculator-header { gap: 0.8rem; margin-bottom: 1.2rem; }
  .calculator-icon { width: 32px; height: 32px; font-size: 1.3rem; }
  .calculator-title { font-size: 1.6rem; }
  .calculator-main-container { gap: 1.2rem; }
  .calculator-step-card { padding: 1.2rem; gap: 0.8rem; flex-direction: column; text-align: center; }
  .step-number { width: 2rem; height: 2rem; font-size: 1rem; }
  .step-content { gap: 0.8rem; }
  .step-label { font-size: 0.8rem; }
  .calculator-select { padding: 0.8rem 1.2rem; font-size: 0.9rem; }
  .calculator-results-card { }
  .result-header { padding: 1.2rem; }
  .result-title { font-size: 1.4rem; margin-bottom: 0.8rem; }
  .result-stats-grid { grid-template-columns: 1fr; gap: 0.8rem; padding: 1.2rem; }
  .result-stat-item { padding: 0.8rem; gap: 0.8rem; }
  .stat-icon { font-size: 1rem; width: 24px; height: 24px; }
  .result-stat-item .stat-label { font-size: 0.65rem; }
  .result-stat-item .stat-value { font-size: 1rem; }
  .result-section-divider { margin: 0 1.2rem; }
  .result-dps-section { gap: 0.8rem; padding: 1.2rem; }
  .dps-result-item { padding: 1.2rem; }
  .dps-label { font-size: 0.8rem; }
  .dps-value { font-size: 1.3rem; }
  .dps-result-item.highlight .dps-value.highlight-value { font-size: 1.5rem; }
  .dps-note { font-size: 0.65rem; }
  .calculator-info-card { flex-direction: column; }
  .info-card-border-left { width: 100%; height: 3px; }
  .info-content-wrapper { padding: 1.2rem; }
  .info-title { font-size: 1rem; margin-bottom: 0.8rem; }
  .info-formulas { padding: 0.8rem; gap: 0.6rem; margin-bottom: 0.8rem; }
  .formula-item { font-size: 0.8rem; }
  .info-description { font-size: 0.8rem; }
}
</style>
