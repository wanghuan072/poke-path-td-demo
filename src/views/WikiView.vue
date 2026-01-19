<template>
  <div class="page-view">
    <AppHeader />

    <div class="page-content">
      <!-- Page Header -->
      <section class="page-header">
        <div class="page-header-content">
          <div class="page-header-badge">
            <span class="badge-icon">📚</span>
            <span class="badge-text">Wiki</span>
          </div>
          <h1 class="page-title">PokéPath TD Wiki - Complete Game Guide & Tips</h1>
          <p class="page-subtitle">
            Your ultimate PokéPath TD wiki resource, featuring comprehensive game mechanics, advanced strategies, and expert tips to master every aspect of PokéPath TD gameplay.
          </p>
        </div>
      </section>

      <div class="container">
        <!-- Wiki Sections -->
        <section class="page-section">
          <div class="wiki-sections">
            <!-- Game Basics -->
            <div class="wiki-section">
              <div class="wiki-section-header">
                <h2 class="wiki-section-title">
                  <span class="section-icon">🎮</span>
                  Game Basics
                </h2>
              </div>
              <div class="wiki-section-content">
                <div class="wiki-card">
                  <h3 class="wiki-card-title">What is PokéPath TD? - Complete Guide</h3>
                  <p class="wiki-card-text">
                    PokéPath TD is a tower defense game featuring Pokémon. Place your Pokémon
                    strategically along paths to defend against waves of enemies. Each Pokémon has
                    unique abilities, stats, and evolution paths. Master PokéPath TD tips and guides for optimal gameplay.
                  </p>
                </div>
                <div class="wiki-card">
                  <h3 class="wiki-card-title">PokéPath TD Game Mechanics - Tips & Strategies</h3>
                  <ul class="wiki-list">
                    <li><strong>Power:</strong> Base damage dealt by each attack</li>
                    <li><strong>Recharge:</strong> Time between attacks (lower is better)</li>
                    <li><strong>Critical:</strong> Chance to deal critical damage</li>
                    <li><strong>Range:</strong> Attack range of the Pokémon</li>
                    <li>
                      <strong>Target:</strong> How the Pokémon selects targets (First, Area,
                      Available, etc.)
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <!-- Pokémon Evolution -->
            <div class="wiki-section">
              <div class="wiki-section-header">
                <h2 class="wiki-section-title">
                  <span class="section-icon">✨</span>
                  Pokémon Evolution
                </h2>
              </div>
              <div class="wiki-section-content">
                <div class="wiki-card">
                  <h3 class="wiki-card-title">Evolution System</h3>
                  <p class="wiki-card-text">
                    Pokémon evolve at specific levels, gaining improved stats and sometimes new
                    abilities. Each evolutionary family shares the same category and can have up to
                    3 forms, with the highest level being level 100.
                  </p>
                </div>
                <div class="wiki-card">
                  <h3 class="wiki-card-title">Evolution Benefits</h3>
                  <ul class="wiki-list">
                    <li>Significantly increased Power</li>
                    <li>Improved Recharge times</li>
                    <li>Higher Critical hit rates</li>
                    <li>Extended Range</li>
                    <li>Enhanced or new abilities</li>
                  </ul>
                </div>
              </div>
            </div>

            <!-- Terrain Types -->
            <div class="wiki-section">
              <div class="wiki-section-header">
                <h2 class="wiki-section-title">
                  <span class="section-icon">🏞️</span>
                  Terrain Types
                </h2>
              </div>
              <div class="wiki-section-content">
                <div class="wiki-card">
                  <h3 class="wiki-card-title">Terrain Effects</h3>
                  <p class="wiki-card-text">
                    Different terrains affect Pokémon performance. Some Pokémon have
                    terrain-specific bonuses that can significantly impact their effectiveness.
                  </p>
                </div>
                <div class="terrain-grid">
                  <div class="terrain-item">
                    <div class="terrain-icon">🌾</div>
                    <div class="terrain-info">
                      <h4 class="terrain-name">Field</h4>
                      <p class="terrain-desc">Basic terrain, most Pokémon can be placed here</p>
                    </div>
                  </div>
                  <div class="terrain-item">
                    <div class="terrain-icon">🌿</div>
                    <div class="terrain-info">
                      <h4 class="terrain-name">Grass</h4>
                      <p class="terrain-desc">Some Pokémon gain power bonuses in tall grass</p>
                    </div>
                  </div>
                  <div class="terrain-item">
                    <div class="terrain-icon">💧</div>
                    <div class="terrain-info">
                      <h4 class="terrain-name">Water</h4>
                      <p class="terrain-desc">Water-type Pokémon may gain speed bonuses</p>
                    </div>
                  </div>
                  <div class="terrain-item">
                    <div class="terrain-icon">⛰️</div>
                    <div class="terrain-info">
                      <h4 class="terrain-name">Mountain</h4>
                      <p class="terrain-desc">Some Pokémon gain range or power bonuses</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Target Types -->
            <div class="wiki-section">
              <div class="wiki-section-header">
                <h2 class="wiki-section-title">
                  <span class="section-icon">🎯</span>
                  Target Types
                </h2>
              </div>
              <div class="wiki-section-content">
                <div class="target-grid">
                  <div class="target-item">
                    <div class="target-badge">First</div>
                    <p class="target-desc">Targets the first enemy in range</p>
                  </div>
                  <div class="target-item">
                    <div class="target-badge">Area</div>
                    <p class="target-desc">Attacks multiple enemies in an area</p>
                  </div>
                  <div class="target-item">
                    <div class="target-badge">Available</div>
                    <p class="target-desc">Can target multiple enemies simultaneously</p>
                  </div>
                  <div class="target-item">
                    <div class="target-badge">Invisible</div>
                    <p class="target-desc">Can hit invisible enemies</p>
                  </div>
                  <div class="target-item">
                    <div class="target-badge">Random</div>
                    <p class="target-desc">Randomly selects targets</p>
                  </div>
                  <div class="target-item">
                    <div class="target-badge">Aura</div>
                    <p class="target-desc">Provides buffs to nearby allies</p>
                  </div>
                </div>
              </div>
            </div>

            <!-- Strategy Tips -->
            <div class="wiki-section">
              <div class="wiki-section-header">
                <h2 class="wiki-section-title">
                  <span class="section-icon">💡</span>
                  Strategy Tips
                </h2>
              </div>
              <div class="wiki-section-content">
                <div class="wiki-card">
                  <h3 class="wiki-card-title">Team Building</h3>
                  <ul class="wiki-list">
                    <li>Balance your team with different target types (First, Area, Available)</li>
                    <li>Consider terrain bonuses when placing Pokémon</li>
                    <li>Use Aura Pokémon to buff your team</li>
                    <li>Include Pokémon that can hit invisible enemies when needed</li>
                  </ul>
                </div>
                <div class="wiki-card">
                  <h3 class="wiki-card-title">Route Planning</h3>
                  <ul class="wiki-list">
                    <li>Check terrain types before selecting your team</li>
                    <li>Use recommended types as a starting point</li>
                    <li>Consider wave count (each route has 100 waves)</li>
                    <li>Plan for different enemy types throughout the route</li>
                    <li>Study detailed route guides like <a href="/map-router/how-to-beat-route-1-1-articuno" class="inline-link">Route 1-1</a>, <a href="/map-router/how-to-beat-route-2-2-entei" class="inline-link">Route 2-2</a>, and <a href="/map-router/how-to-beat-route-3-3-registeel-wave-100-guide" class="inline-link">Route 3-3</a> for advanced strategies</li>
                  </ul>
                </div>
                <div class="wiki-card">
                  <h3 class="wiki-card-title">Optimization</h3>
                  <ul class="wiki-list">
                    <li>Focus on evolving key Pokémon to level 100</li>
                    <li>Use DPS Calculator to compare Pokémon effectiveness</li>
                    <li>Check All Pokemon for top-performing Pokémon</li>
                    <li>Experiment with different team compositions</li>
                    <li>Learn from route-specific guides such as <a href="/map-router/how-to-beat-route-1-2-zapdos-wave-100" class="inline-link">Route 1-2 (Zapdos)</a> for boss fight strategies</li>
                  </ul>
                </div>
              </div>
            </div>

            <!-- Abilities -->
            <div class="wiki-section">
              <div class="wiki-section-header">
                <h2 class="wiki-section-title">
                  <span class="section-icon">⚡</span>
                  Special Abilities
                </h2>
              </div>
              <div class="wiki-section-content">
                <div class="wiki-card">
                  <h3 class="wiki-card-title">Common Ability Types</h3>
                  <div class="ability-grid">
                    <div class="ability-item">
                      <div class="ability-icon">🔥</div>
                      <div class="ability-info">
                        <h4 class="ability-name">Burn</h4>
                        <p class="ability-desc">Deals damage over time</p>
                      </div>
                    </div>
                    <div class="ability-item">
                      <div class="ability-icon">💨</div>
                      <div class="ability-info">
                        <h4 class="ability-name">Slow</h4>
                        <p class="ability-desc">Reduces enemy movement speed</p>
                      </div>
                    </div>
                    <div class="ability-item">
                      <div class="ability-icon">💥</div>
                      <div class="ability-info">
                        <h4 class="ability-name">Critical Ricochet</h4>
                        <p class="ability-desc">Critical hits bounce between enemies</p>
                      </div>
                    </div>
                    <div class="ability-item">
                      <div class="ability-icon">💚</div>
                      <div class="ability-info">
                        <h4 class="ability-name">Heal</h4>
                        <p class="ability-desc">Chance to restore hearts</p>
                      </div>
                    </div>
                    <div class="ability-item">
                      <div class="ability-icon">💰</div>
                      <div class="ability-info">
                        <h4 class="ability-name">Gold</h4>
                        <p class="ability-desc">Grants gold on attack</p>
                      </div>
                    </div>
                    <div class="ability-item">
                      <div class="ability-icon">🛡️</div>
                      <div class="ability-info">
                        <h4 class="ability-name">Armor Break</h4>
                        <p class="ability-desc">Deals double damage to armor</p>
                      </div>
                    </div>
                  </div>
                </div>
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
import AppHeader from '../components/AppHeader.vue'
import AppFooter from '../components/AppFooter.vue'
</script>

<style scoped>
/* Page View and Content styles are now in main.css */

/* Page Section */
.page-section {
  padding: 40px 0;
  position: relative;
  z-index: 1;
}

/* Wiki Sections */
.wiki-sections {
  display: flex;
  flex-direction: column;
  gap: 32px;
  max-width: 1200px;
  margin: 0 auto;
}

.wiki-section {
  background: rgba(26, 35, 50, 0.7);
  border: 1px solid rgba(107, 163, 232, 0.2);
  border-radius: 16px;
  overflow: hidden;
  backdrop-filter: blur(10px);
}

.wiki-section-header {
  padding: 20px 24px;
  background: rgba(15, 20, 30, 0.5);
  border-bottom: 1px solid rgba(107, 163, 232, 0.2);
}

.wiki-section-title {
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 1.5rem;
  font-weight: 700;
  color: #f5f8f0;
  margin: 0;
}

.section-icon {
  font-size: 1.8rem;
}

.wiki-section-content {
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

/* Wiki Cards */
.wiki-card {
  background: rgba(15, 20, 30, 0.5);
  border: 1px solid rgba(107, 163, 232, 0.15);
  border-radius: 12px;
  padding: 20px;
  transition: all 0.2s ease;
}

.wiki-card:hover {
  border-color: rgba(107, 163, 232, 0.3);
  background: rgba(15, 20, 30, 0.6);
}

.wiki-card-title {
  font-size: 1.2rem;
  font-weight: 700;
  color: #6ba3e8;
  margin: 0 0 12px 0;
}

.wiki-card-text {
  color: rgba(245, 248, 240, 0.85);
  font-size: 0.95rem;
  line-height: 1.7;
  margin: 0;
}

.wiki-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.wiki-list li {
  color: rgba(245, 248, 240, 0.85);
  font-size: 0.95rem;
  line-height: 1.7;
  padding-left: 24px;
  position: relative;
}

.wiki-list li::before {
  content: '▸';
  position: absolute;
  left: 0;
  color: #6ba3e8;
  font-weight: 700;
}

.wiki-list li strong {
  color: #6ba3e8;
}

/* Terrain Grid */
.terrain-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 16px;
  margin-top: 16px;
}

.terrain-item {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  padding: 16px;
  background: rgba(15, 20, 30, 0.5);
  border: 1px solid rgba(107, 163, 232, 0.15);
  border-radius: 10px;
  transition: all 0.2s ease;
}

.terrain-item:hover {
  border-color: rgba(107, 163, 232, 0.3);
  background: rgba(15, 20, 30, 0.6);
}

.terrain-icon {
  font-size: 2rem;
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(107, 163, 232, 0.15);
  border-radius: 10px;
  flex-shrink: 0;
}

.terrain-info {
  flex: 1;
}

.terrain-name {
  font-size: 1rem;
  font-weight: 700;
  color: #f5f8f0;
  margin: 0 0 6px 0;
}

.terrain-desc {
  font-size: 0.85rem;
  color: rgba(245, 248, 240, 0.7);
  margin: 0;
  line-height: 1.5;
}

/* Target Grid */
.target-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 16px;
}

.target-item {
  padding: 16px;
  background: rgba(15, 20, 30, 0.5);
  border: 1px solid rgba(107, 163, 232, 0.15);
  border-radius: 10px;
  text-align: center;
  transition: all 0.2s ease;
}

.target-item:hover {
  border-color: rgba(107, 163, 232, 0.3);
  background: rgba(15, 20, 30, 0.6);
}

.target-badge {
  display: inline-block;
  padding: 6px 14px;
  background: rgba(107, 163, 232, 0.2);
  border: 1px solid rgba(107, 163, 232, 0.4);
  border-radius: 8px;
  font-size: 0.9rem;
  font-weight: 600;
  color: #6ba3e8;
  margin-bottom: 10px;
}

.target-desc {
  font-size: 0.85rem;
  color: rgba(245, 248, 240, 0.8);
  margin: 0;
  line-height: 1.5;
}

/* Ability Grid */
.ability-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 16px;
  margin-top: 16px;
}

.ability-item {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  padding: 16px;
  background: rgba(15, 20, 30, 0.5);
  border: 1px solid rgba(107, 163, 232, 0.15);
  border-radius: 10px;
  transition: all 0.2s ease;
}

.ability-item:hover {
  border-color: rgba(107, 163, 232, 0.3);
  background: rgba(15, 20, 30, 0.6);
}

.ability-icon {
  font-size: 2rem;
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(107, 163, 232, 0.15);
  border-radius: 10px;
  flex-shrink: 0;
}

.ability-info {
  flex: 1;
}

.ability-name {
  font-size: 1rem;
  font-weight: 700;
  color: #f5f8f0;
  margin: 0 0 6px 0;
}

  .ability-desc {
    font-size: 0.85rem;
    color: rgba(245, 248, 240, 0.7);
    margin: 0;
    line-height: 1.5;
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
  .wiki-sections { gap: 28px; }
  .wiki-section-header { padding: 18px 20px; }
  .wiki-section-title { font-size: 1.4rem; gap: 10px; }
  .section-icon { font-size: 1.6rem; }
  .wiki-section-content { padding: 20px; gap: 18px; }
  .wiki-card { padding: 18px; }
  .wiki-card-title { font-size: 1.15rem; margin-bottom: 10px; }
  .wiki-card-text { font-size: 0.9rem; }
  .wiki-list li { font-size: 0.9rem; padding-left: 20px; }
  .terrain-grid { grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap: 14px; margin-top: 14px; }
  .terrain-item { gap: 10px; padding: 14px; }
  .terrain-icon { font-size: 1.8rem; width: 42px; height: 42px; }
  .terrain-name { font-size: 0.95rem; margin-bottom: 5px; }
  .terrain-desc { font-size: 0.8rem; }
  .target-grid { grid-template-columns: repeat(auto-fit, minmax(160px, 1fr)); gap: 14px; }
  .target-item { padding: 14px; }
  .target-badge { padding: 5px 12px; font-size: 0.85rem; margin-bottom: 8px; }
  .target-desc { font-size: 0.8rem; }
  .ability-grid { grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap: 14px; margin-top: 14px; }
  .ability-item { gap: 10px; padding: 14px; }
  .ability-icon { font-size: 1.8rem; width: 42px; height: 42px; }
  .ability-name { font-size: 0.95rem; margin-bottom: 5px; }
  .ability-desc { font-size: 0.8rem; }
}

/* 768px 移动端响应式样式 */
@media (max-width: 768px) {
  .page-section { padding: 1.2rem 0; }
  .wiki-sections { gap: 1.2rem; }
  .wiki-section-header { padding: 1.2rem; }
  .wiki-section-title { font-size: 1.4rem; gap: 0.8rem; }
  .section-icon { font-size: 1.5rem; }
  .wiki-section-content { padding: 1.2rem; gap: 1.2rem; }
  .wiki-card { padding: 1.2rem; }
  .wiki-card-title { font-size: 1.2rem; margin-bottom: 0.8rem; }
  .wiki-card-text { font-size: 0.8rem; }
  .wiki-list { gap: 0.8rem; }
  .wiki-list li { font-size: 0.8rem; padding-left: 1.2rem; }
  .terrain-grid { grid-template-columns: 1fr; gap: 0.8rem; margin-top: 0.8rem; }
  .terrain-item { gap: 0.8rem; padding: 0.8rem; }
  .terrain-icon { font-size: 1.6rem; width: 36px; height: 36px; }
  .terrain-name { font-size: 1rem; margin-bottom: 0.4rem; }
  .terrain-desc { font-size: 0.8rem; }
  .target-grid { grid-template-columns: repeat(2, 1fr); gap: 0.8rem; }
  .target-item { padding: 0.8rem; }
  .target-badge { padding: 0.4rem 0.8rem; font-size: 0.8rem; margin-bottom: 0.6rem; }
  .target-desc { font-size: 0.8rem; }
  .ability-grid { grid-template-columns: 1fr; gap: 0.8rem; margin-top: 0.8rem; }
  .ability-item { gap: 0.8rem; padding: 0.8rem; }
  .ability-icon { font-size: 1.6rem; width: 36px; height: 36px; }
  .ability-name { font-size: 1rem; margin-bottom: 0.4rem; }
  .ability-desc { font-size: 0.8rem; }
}
</style>


