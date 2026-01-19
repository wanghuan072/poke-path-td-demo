<template>
  <div class="page-view">
    <AppHeader />
    
    <div class="page-content">
      <!-- Page Header -->
      <section class="page-header">
        <div class="page-header-content">
          <div class="page-header-badge">
            <span class="badge-icon">📋</span>
            <span class="badge-text">Pokémon Categories</span>
          </div>
          <h1 class="page-title">pokepath td best units</h1>
          <p class="page-subtitle">
            Explore PokéPath TD Pokémon categories by tactical roles, including status effects, damage types, and optimal usage for building the best teams.
          </p>
        </div>
      </section>

      <div class="container">
        <!-- Filter Section -->
        <section class="filter-section">
          <!-- Main Categories Filter -->
          <div class="filter-group">
            <h3 class="filter-group-title">MAIN CATEGORIES</h3>
            <div class="filter-buttons">
              <button
                v-for="category in categories"
                :key="category.id"
                @click="selectCategory(category.id)"
                :class="['filter-button', { active: selectedCategoryId === category.id }]"
              >
                <span class="filter-icon">{{ category.icon }}</span>
                <span class="filter-text">{{ category.name }}</span>
              </button>
            </div>
          </div>

          <!-- Sub Categories Filter -->
          <div v-if="selectedCategory" class="filter-group">
            <h3 class="filter-group-title">SUB CATEGORIES</h3>
            <div class="filter-buttons">
              <button
                @click="selectedSubCategoryId = null"
                :class="['filter-button', { active: selectedSubCategoryId === null }]"
              >
                <span class="filter-text">All</span>
              </button>
              <button
                v-for="subCategory in selectedCategory.subCategories"
                :key="subCategory.id"
                @click="selectedSubCategoryId = subCategory.id"
                :class="['filter-button', { active: selectedSubCategoryId === subCategory.id }]"
              >
                <span class="filter-text">{{ subCategory.name }}</span>
              </button>
            </div>
          </div>
        </section>

        <!-- Main Content Layout -->
        <section v-if="selectedCategory" class="content-section">
          <!-- Category Info -->
          <div class="category-info">
            <h2 class="category-title">
              <span class="category-icon">{{ selectedCategory.icon }}</span>
              {{ selectedCategory.name }}
            </h2>
            <p class="category-tactical-use">
              <strong>Tactical Use:</strong> {{ selectedCategory.tacticalUse }}
            </p>
          </div>

          <!-- Sub Categories -->
          <div class="sub-categories">
            <div
              v-for="subCategory in displayedSubCategories"
              :key="subCategory.id"
              class="sub-category-group"
            >
              <div class="sub-category-header">
                <h3 class="sub-category-title">{{ subCategory.name }}</h3>
                <p v-if="subCategory.description" class="sub-category-desc">
                  {{ subCategory.description }}
                </p>
              </div>

              <!-- Pokemon Table -->
              <div class="table-wrapper">
                <table class="pokemon-table">
                  <thead>
                    <tr>
                      <th class="col-image">Image</th>
                      <th class="col-name">Level 100 Name</th>
                      <th class="col-power">Power</th>
                      <th class="col-recharge">Interval</th>
                      <th class="col-range">Range</th>
                      <th class="col-shape">Shape</th>
                      <th class="col-ability">Passive Skill / Description</th>
                      <th class="col-desc">Special Ability Summary</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr
                      v-for="pokemon in subCategory.pokemon"
                      :key="pokemon.name"
                      class="pokemon-row"
                    >
                      <td class="col-image">
                        <div class="pokemon-image-cell">
                          <img
                            v-if="getPokemonImage(pokemon.name)"
                            :src="getPokemonImage(pokemon.name)"
                            :alt="pokemon.name"
                            class="pokemon-image"
                          />
                          <div v-else class="pokemon-image-placeholder">
                            {{ pokemon.name.charAt(0) }}
                          </div>
                        </div>
                      </td>
                      <td class="col-name">
                        <strong>{{ pokemon.name }}</strong>
                      </td>
                      <td class="col-power">{{ pokemon.power }}</td>
                      <td class="col-recharge">{{ pokemon.recharge }}s</td>
                      <td class="col-range">{{ pokemon.range }}</td>
                      <td class="col-shape">{{ pokemon.shape }}</td>
                      <td class="col-ability">
                        <div class="ability-content">
                          {{ pokemon.ability }}
                        </div>
                      </td>
                      <td class="col-desc">
                        <div class="desc-content">
                          {{ pokemon.abilityDesc }}
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
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
          <h2 class="intro-title">📖 How to Use Pokémon Categories</h2>
          <div class="intro-content">
            <p>
              The Pokémon Categories tool helps you build balanced teams by organizing Pokémon by their tactical roles and abilities.
              Use this guide to understand different playstyles and find the right Pokémon for your strategy.
            </p>
            <div class="intro-steps">
              <div class="intro-step">
                <span class="step-number">1</span>
                <div class="step-content">
                  <h4>Select Main Category</h4>
                  <p>Choose from main categories like Damage, Support, Status Effects, or Special Roles to focus on specific tactical aspects.</p>
                </div>
              </div>
              <div class="intro-step">
                <span class="step-number">2</span>
                <div class="step-content">
                  <h4>Explore Sub-Categories</h4>
                  <p>Within each main category, browse sub-categories for more specific roles like AOE damage, burst damage, or healing.</p>
                </div>
              </div>
              <div class="intro-step">
                <span class="step-number">3</span>
                <div class="step-content">
                  <h4>Review Pokémon Details</h4>
                  <p>Examine each Pokémon's stats, abilities, and strategic notes to understand their strengths and optimal usage.</p>
                </div>
              </div>
              <div class="intro-step">
                <span class="step-number">4</span>
                <div class="step-content">
                  <h4>Build Balanced Teams</h4>
                  <p>Use the category insights to create teams with proper coverage across damage types, support roles, and strategic options.</p>
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
              <h3 class="faq-question">What are the main Pokémon categories?</h3>
              <p class="faq-answer">
                Main categories include Damage (DPS-focused), Support (healing/buffing), Status Effects (debuffs), and Special Roles (unique abilities). Each serves different strategic purposes in team composition.
              </p>
            </div>
            <div class="faq-item">
              <h3 class="faq-question">How do sub-categories differ from main categories?</h3>
              <p class="faq-answer">
                Sub-categories provide more specific classifications within main categories. For example, Damage category includes AOE (area damage), Burst (high single-target), and Sustained (consistent damage) sub-categories.
              </p>
            </div>
            <div class="faq-item">
              <h3 class="faq-question">Can one Pokémon belong to multiple categories?</h3>
              <p class="faq-answer">
                Yes, many Pokémon have versatile abilities that fit multiple roles. A Pokémon might provide damage while also offering support effects, making them valuable for flexible team building.
              </p>
            </div>
            <div class="faq-item">
              <h3 class="faq-question">How do I choose the right categories for my playstyle?</h3>
              <p class="faq-answer">
                Consider your preferred strategy: Aggressive players need high DPS categories, Defensive players benefit from Support and Status Effects, while Balanced players should mix various roles.
              </p>
            </div>
            <div class="faq-item">
              <h3 class="faq-question">What makes a good team composition?</h3>
              <p class="faq-answer">
                Good teams balance damage output with support capabilities. Include a mix of high DPS Pokémon, status effect appliers, and support units that can heal or buff your team.
              </p>
            </div>
            <div class="faq-item">
              <h3 class="faq-question">How often are categories updated?</h3>
              <p class="faq-answer">
                Categories are regularly updated with new game patches, ability discoveries, and community feedback. New Pokémon and ability changes may shift category assignments.
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
import categoriesData from '../../data/pokemonCategories.js'
import pokemonData from '../../data/pokemon.js'

// Selected category
const selectedCategoryId = ref(categoriesData[0].id)
// Selected sub category
const selectedSubCategoryId = ref(null)

// Get selected category
const selectedCategory = computed(() => {
  return categoriesData.find((cat) => cat.id === selectedCategoryId.value)
})

// Get selected sub category
// eslint-disable-next-line no-unused-vars
const selectedSubCategory = computed(() => {
  if (!selectedCategory.value || !selectedSubCategoryId.value) return null
  return selectedCategory.value.subCategories.find((sub) => sub.id === selectedSubCategoryId.value)
})

// Get displayed sub categories (all if none selected, or just the selected one)
const displayedSubCategories = computed(() => {
  if (!selectedCategory.value) return []
  if (selectedSubCategoryId.value === null) {
    // Show all sub categories
    return selectedCategory.value.subCategories
  } else {
    // Show only selected sub category
    const sub = selectedCategory.value.subCategories.find(
      (sub) => sub.id === selectedSubCategoryId.value
    )
    return sub ? [sub] : []
  }
})

// Get all categories
const categories = computed(() => categoriesData)

// Select category function
const selectCategory = (categoryId) => {
  selectedCategoryId.value = categoryId
  // Reset sub category selection when changing main category
  selectedSubCategoryId.value = null
}

// Get Pokemon image by name
const getPokemonImage = (name) => {
  // Extract base name (remove any brackets or extra text)
  const baseName = name.toUpperCase().split(' ')[0].trim()

  // Try to find by exact base name match (e.g., "CHARIZARD" matches "CHARIZARD [100]")
  let pokemon = pokemonData.find((p) => {
    const pokemonBaseName = p.name.toUpperCase().split(' ')[0].trim()
    return pokemonBaseName === baseName
  })

  // If not found, try to find by category (e.g., "CHARIZARD" -> "charmander")
  if (!pokemon) {
    const categoryName = name.toLowerCase()
    // Find highest level of this category
    const categoryPokemon = pokemonData
      .filter((p) => p.category === categoryName)
      .sort((a, b) => {
        const levelA = parseInt(a.name.match(/\[(\d+)\]/)?.[1] || '0')
        const levelB = parseInt(b.name.match(/\[(\d+)\]/)?.[1] || '0')
        return levelB - levelA
      })
    pokemon = categoryPokemon[0]
  }

  // If still not found, try partial match in name
  if (!pokemon) {
    pokemon = pokemonData.find((p) => p.name.toUpperCase().includes(baseName))
  }

  // Return highest level version if multiple found
  if (pokemon) {
    const allMatches = pokemonData.filter((p) => {
      const pokemonBaseName = p.name.toUpperCase().split(' ')[0].trim()
      return pokemonBaseName === baseName
    })
    if (allMatches.length > 0) {
      pokemon = allMatches.sort((a, b) => {
        const levelA = parseInt(a.name.match(/\[(\d+)\]/)?.[1] || '0')
        const levelB = parseInt(b.name.match(/\[(\d+)\]/)?.[1] || '0')
        return levelB - levelA
      })[0]
    }
  }

  return pokemon?.imageUrl || null
}
</script>

<style scoped>
/* Page View and Content styles are now in main.css */

/* Page Header styles are now in main.css */

/* Filter Section */
.filter-section {
  padding: 20px 0;
  background: rgba(20, 28, 42, 0.7);
  border-bottom: 1px solid rgba(107, 163, 232, 0.2);
  backdrop-filter: blur(10px);
}

.filter-group {
  margin-bottom: 16px;
}

.filter-group:last-child {
  margin-bottom: 0;
}

.filter-group-title {
  font-size: 0.7rem;
  font-weight: 700;
  color: #f5f8f0;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  margin: 0 0 8px 0;
  padding: 0 2rem;
}

.filter-buttons {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  padding: 0 2rem;
}

.filter-button {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 8px 16px;
  background: rgba(26, 35, 50, 0.6);
  border: 1px solid rgba(245, 248, 240, 0.2);
  border-radius: 6px;
  color: #f5f8f0;
  font-size: 0.85rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  white-space: nowrap;
}

.filter-button:hover {
  background: rgba(26, 35, 50, 0.8);
  border-color: rgba(107, 163, 232, 0.4);
}

.filter-button.active {
  background: rgba(107, 163, 232, 0.3);
  border-color: #6ba3e8;
  color: #f5f8f0;
  box-shadow: 0 2px 8px rgba(107, 163, 232, 0.2);
}

.filter-icon {
  font-size: 1rem;
  line-height: 1;
}

.filter-text {
  line-height: 1.2;
}

/* Content Section */
.content-section {
  padding: 24px 0;
  position: relative;
  z-index: 1;
}

.category-info {
  max-width: 1200px;
  margin: 0 auto 24px;
  padding: 0 2rem;
  text-align: center;
}

.category-title {
  font-size: 1.75rem;
  font-weight: 800;
  margin: 0 0 12px 0;
  color: #f5f8f0;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
}

.category-icon {
  font-size: 1.75rem;
}

.category-tactical-use {
  font-size: 0.9rem;
  color: rgba(245, 248, 240, 0.8);
  line-height: 1.5;
}

.category-tactical-use strong {
  color: #6ba3e8;
}

/* Sub Categories */
.sub-categories {
  display: flex;
  flex-direction: column;
  gap: 32px;
}

.sub-category-group {
  background: rgba(26, 35, 50, 0.4);
  border-radius: 12px;
  padding: 24px;
  border: 1px solid rgba(107, 163, 232, 0.2);
}

.sub-category-header {
  margin-bottom: 16px;
  padding-bottom: 12px;
  border-bottom: 2px solid rgba(107, 163, 232, 0.2);
}

.sub-category-title {
  font-size: 1.25rem;
  font-weight: 700;
  color: #6ba3e8;
  margin: 0 0 6px 0;
}

.sub-category-desc {
  font-size: 0.85rem;
  color: rgba(245, 248, 240, 0.7);
  margin: 0;
}

/* Table Wrapper */
.table-wrapper {
  border-radius: 12px;
  background: rgba(15, 20, 30, 0.4);
  border: 1px solid rgba(107, 163, 232, 0.2);
  width: 100%;
}

.pokemon-table {
  width: 100%;
  border-collapse: collapse;
  background: transparent;
  table-layout: fixed;
}

.pokemon-table thead {
  background: rgba(26, 35, 50, 0.8);
  position: sticky;
  top: 0;
  z-index: 10;
}

.pokemon-table th {
  padding: 12px 8px;
  text-align: left;
  font-size: 0.75rem;
  font-weight: 700;
  color: #6ba3e8;
  text-transform: uppercase;
  letter-spacing: 0.3px;
  border-bottom: 2px solid rgba(107, 163, 232, 0.3);
  word-wrap: break-word;
}

.pokemon-table th.col-image {
  width: 60px;
  text-align: center;
}

.pokemon-table th.col-name {
  width: 10%;
}

.pokemon-table th.col-power {
  width: 7%;
  text-align: center;
}

.pokemon-table th.col-recharge {
  width: 7%;
  text-align: center;
}

.pokemon-table th.col-range {
  width: 7%;
  text-align: center;
}

.pokemon-table th.col-shape {
  width: 8%;
  text-align: center;
}

.pokemon-table th.col-ability {
  width: 35%;
}

.pokemon-table th.col-desc {
  width: 16%;
}

.pokemon-table tbody tr {
  border-bottom: 1px solid rgba(107, 163, 232, 0.1);
  transition: background-color 0.2s ease;
}

.pokemon-table tbody tr:hover {
  background: rgba(107, 163, 232, 0.1);
}

.pokemon-table tbody tr:last-child {
  border-bottom: none;
}

.pokemon-table td {
  padding: 12px 8px;
  font-size: 0.8rem;
  color: rgba(245, 248, 240, 0.9);
  vertical-align: middle;
  word-wrap: break-word;
}

.pokemon-table td.col-image {
  text-align: center;
  padding: 8px;
}

.pokemon-table td.col-name {
  font-weight: 700;
  color: #f5f8f0;
}

.pokemon-table td.col-power,
.pokemon-table td.col-recharge,
.pokemon-table td.col-range {
  text-align: center;
  color: #6ba3e8;
  font-weight: 600;
}

.pokemon-table td.col-shape {
  text-align: center;
  color: rgba(245, 248, 240, 0.8);
}

.pokemon-image-cell {
  width: 50px;
  height: 50px;
  margin: 0 auto;
  border-radius: 6px;
  overflow: hidden;
  background: rgba(15, 20, 30, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
}

.pokemon-image {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.pokemon-image-placeholder {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  color: rgba(107, 163, 232, 0.5);
  font-weight: 700;
}

.ability-content {
  font-size: 0.75rem;
  line-height: 1.4;
  color: rgba(245, 248, 240, 0.9);
}

.desc-content {
  font-size: 0.75rem;
  line-height: 1.4;
  color: rgba(92, 184, 92, 0.9);
  font-style: italic;
}

/* Responsive */







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
  .categories-section { padding: 1.8rem 0; }
  .categories-grid { grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 1.1rem; }
  .category-card { padding: 1.3rem; gap: 0.9rem; }
  .category-header { gap: 0.65rem; margin-bottom: 0.8rem; }
  .category-icon { font-size: 1.8rem; }
  .category-title { font-size: 1.2rem; }
  .category-description { font-size: 0.8rem; margin-bottom: 0.9rem; }
  .category-pokemon-count { font-size: 0.75rem; padding: 0.25rem 0.5rem; }
  .category-use-cases { gap: 0.8rem; }
  .use-case-item { padding: 0.8rem; }
  .use-case-title { font-size: 0.9rem; margin-bottom: 0.4rem; }
  .use-case-desc { font-size: 0.8rem; }
}

/* 768px 移动端响应式样式 */
@media (max-width: 768px) {
  .categories-section { padding: 1.2rem 0; }
  .categories-grid { grid-template-columns: 1fr; gap: 1.2rem; }
  .category-card { padding: 1.2rem; gap: 0.8rem; }
  .category-header { gap: 0.6rem; margin-bottom: 0.8rem; }
  .category-icon { font-size: 1.6rem; }
  .category-title { font-size: 1.2rem; }
  .category-description { font-size: 0.8rem; margin-bottom: 0.8rem; }
  .category-pokemon-count { font-size: 0.7rem; padding: 0.2rem 0.4rem; }
  .category-use-cases { gap: 0.8rem; }
  .use-case-item { padding: 0.8rem; }
  .use-case-title { font-size: 1rem; margin-bottom: 0.3rem; }
  .use-case-desc { font-size: 0.8rem; }
}
</style>

