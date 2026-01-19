<template>
  <div class="page-view">
    <AppHeader />
    
    <div class="page-content">
    <!-- Page Header -->
    <section class="page-header">
        <div class="page-header-content">
          <div class="page-header-badge">
            <span class="badge-icon">🛠️</span>
            <span class="badge-text">Utility Tools</span>
          </div>
          <h1 class="page-title">PokéPath TD Tools - DPS Calculator & Strategy Guides</h1>
          <p class="page-subtitle">
            Access essential PokéPath TD tools including the DPS calculator, team builders, and strategy guides to optimize your gameplay and build winning teams.
          </p>
      </div>
    </section>

      <div class="container">
        <!-- Tools List -->
        <section class="tools-section">
        <div class="tools-grid">
            <a v-for="tool in tools" :key="tool.id" :href="tool.path" class="tool-card">
              <div class="tool-header">
              <div class="tool-icon">{{ tool.icon }}</div>
                <h3 class="tool-title">{{ tool.title }}</h3>
            </div>
            <p class="tool-description">{{ tool.description }}</p>
            <div class="tool-features">
              <span v-for="feature in tool.features" :key="feature" class="tool-feature-tag">
                {{ feature }}
              </span>
            </div>
            </a>
        </div>
        </section>
      </div>
    </div>

    <!-- Introduction Section -->
    <section class="intro-section">
      <div class="container">
        <div class="intro-card">
          <h2 class="intro-title">📖 How to Use PokéPath TD Tools</h2>
          <div class="intro-content">
            <p>
              The Tools section provides essential utilities to enhance your PokéPath TD gameplay.
              From damage calculations to strategic planning, these tools help you make informed decisions and optimize your team performance.
            </p>
            <div class="intro-steps">
              <div class="intro-step">
                <span class="step-number">1</span>
                <div class="step-content">
                  <h4>Choose Your Tool</h4>
                  <p>Select from available tools like DPS Calculator, Pokémon Categories, Enemy Counter, and Route Strategy guides based on your needs.</p>
                </div>
              </div>
              <div class="intro-step">
                <span class="step-number">2</span>
                <div class="step-content">
                  <h4>Input Your Data</h4>
                  <p>Enter relevant information such as Pokémon stats, enemy types, or route details to get accurate calculations and recommendations.</p>
                </div>
              </div>
              <div class="intro-step">
                <span class="step-number">3</span>
                <div class="step-content">
                  <h4>Analyze Results</h4>
                  <p>Review detailed analysis, comparisons, and strategic insights to understand optimal choices for your gameplay style.</p>
                </div>
              </div>
              <div class="intro-step">
                <span class="step-number">4</span>
                <div class="step-content">
                  <h4>Apply in Game</h4>
                  <p>Use the insights gained from tools to build better teams, counter specific threats, and develop winning strategies.</p>
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
              <h3 class="faq-question">What is the DPS Calculator used for?</h3>
              <p class="faq-answer">
                The DPS Calculator helps you compare Pokémon damage output by calculating base DPS, expected DPS with critical hits, and recharge times. Use it to identify the most efficient damage dealers for your team.
              </p>
            </div>
            <div class="faq-item">
              <h3 class="faq-question">How do Pokémon Categories help with team building?</h3>
              <p class="faq-answer">
                Pokémon Categories organize Pokémon by their tactical roles (AOE, Burst, Support, etc.). This helps you build balanced teams with proper coverage for different situations and enemy types.
              </p>
            </div>
            <div class="faq-item">
              <h3 class="faq-question">What information does the Enemy Counter provide?</h3>
              <p class="faq-answer">
                The Enemy Counter shows which Pokémon are most effective against specific enemy types. It includes type advantages, recommended counters, and strategic notes for dealing with tough enemies.
              </p>
            </div>
            <div class="faq-item">
              <h3 class="faq-question">How accurate are the tool calculations?</h3>
              <p class="faq-answer">
                Tools use game mechanics and community-tested data for calculations. While highly accurate, results may vary slightly based on game updates, level differences, and specific battle conditions.
              </p>
            </div>
            <div class="faq-item">
              <h3 class="faq-question">Can I use these tools on mobile devices?</h3>
              <p class="faq-answer">
                Yes! All tools are fully responsive and work on mobile devices, tablets, and desktop computers. The interface adapts to different screen sizes for optimal usability.
              </p>
            </div>
            <div class="faq-item">
              <h3 class="faq-question">How often are the tools updated?</h3>
              <p class="faq-answer">
                Tools are regularly updated with new Pokémon data, balance changes, and improved calculations. Major game updates may introduce new features or refine existing tool accuracy.
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
import AppHeader from '../../components/AppHeader.vue'
import AppFooter from '../../components/AppFooter.vue'

const tools = [
  {
    id: 1,
    icon: '⚡',
    title: 'DPS Calculator',
    description:
      'Calculate and compare Pokémon damage per second. Analyze power, recharge time, and critical hit rate to find the best damage dealers.',
    path: '/tools/dps-calculator',
    features: ['Base DPS', 'Expected DPS', 'Compare Pokémon', 'Critical Analysis'],
  },
  {
    id: 2,
    icon: '📋',
    title: 'Pokémon Categories',
    description:
      'Browse Pokémon by tactical categories. Find specialized Pokémon for status effects, AOE attacks, burst damage, and support roles.',
    path: '/tools/pokemon-categories',
    features: ['Status Effects', 'AOE', 'Burst Damage', 'Terrain', 'Support'],
  },
  {
    id: 3,
    icon: '⚔️',
    title: 'Enemy Counter',
    description:
      'Find the best Pokémon to counter specific enemies. Analyze resistances and get personalized recommendations based on DPS calculations.',
    path: '/tools/enemy-counter',
    features: ['Enemy Search', 'Resistance Analysis', 'Counter Recommendations', 'DPS Based'],
  },
  {
    id: 4,
    icon: '🗺️',
    title: 'Route Strategy',
    description:
      'Optimize your team composition for each map route. Get recommended Pokémon types, terrain advantages, and strategic tips.',
    path: '/tools/route-strategy',
    features: ['Route Selection', 'Team Composition', 'Terrain Analysis', 'Strategic Tips'],
  },
]
</script>

<style scoped>
/* Page View and Content styles are now in main.css */

/* Page Header styles are now in main.css */

/* Tools Section */
.tools-section {
  padding: 2rem 0;
  position: relative;
  z-index: 1;
}

.tools-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.25rem;
  max-width: 1400px;
  margin: 0 auto;
}

.tool-card {
  background: rgba(20, 28, 42, 0.8);
  border-radius: 12px;
  padding: 1.5rem;
  text-decoration: none;
  color: inherit;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  transition: all 0.2s ease;
  border: 1px solid rgba(107, 163, 232, 0.2);
  position: relative;
  overflow: hidden;
  backdrop-filter: blur(10px);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
}

.tool-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: linear-gradient(90deg, #6ba3e8, #5cb85c);
  transform: scaleX(0);
  transition: transform 0.2s ease;
}

.tool-card:hover::before {
  transform: scaleX(1);
}

.tool-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 16px rgba(107, 163, 232, 0.3);
  border-color: rgba(107, 163, 232, 0.4);
  background: rgba(20, 28, 42, 0.9);
}

.tool-header {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 0.25rem;
}

.tool-icon {
  font-size: 2rem;
  flex-shrink: 0;
  filter: drop-shadow(0 2px 4px rgba(107, 163, 232, 0.3));
}

.tool-title {
  font-size: 1.25rem;
  color: #f5f8f0;
  font-weight: 700;
  margin: 0;
  line-height: 1.2;
}

.tool-description {
  color: rgba(245, 248, 240, 0.75);
  line-height: 1.5;
  font-size: 0.85rem;
  flex: 1;
  margin: 0;
}

.tool-features {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 0.5rem;
}

.tool-feature-tag {
  display: inline-block;
  padding: 0.3rem 0.6rem;
  background: rgba(26, 35, 50, 0.6);
  border: 1px solid rgba(107, 163, 232, 0.2);
  border-radius: 6px;
  color: rgba(245, 248, 240, 0.9);
  font-size: 0.7rem;
  font-weight: 500;
  transition: all 0.2s ease;
}

.tool-card:hover .tool-feature-tag {
  background: rgba(107, 163, 232, 0.15);
  border-color: rgba(107, 163, 232, 0.3);
  color: #6ba3e8;
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
  .tools-section { padding: 1.8rem 0; }
  .tools-grid { grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 1.1rem; }
  .tool-card { padding: 1.3rem; gap: 0.9rem; }
  .tool-header { gap: 0.65rem; margin-bottom: 0.2rem; }
  .tool-icon { font-size: 1.8rem; }
  .tool-title { font-size: 1.15rem; }
  .tool-description { font-size: 0.8rem; }
  .tool-features { gap: 0.4rem; margin-top: 0.4rem; }
  .tool-feature-tag { padding: 0.25rem 0.5rem; font-size: 0.65rem; }
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
  .tools-section { padding: 1.2rem 0; }
  .tools-grid { grid-template-columns: 1fr; gap: 1.2rem; }
  .tool-card { padding: 1.2rem; gap: 0.8rem; }
  .tool-header { gap: 0.6rem; margin-bottom: 0.2rem; }
  .tool-icon { font-size: 1.6rem; }
  .tool-title { font-size: 1.2rem; }
  .tool-description { font-size: 0.8rem; }
  .tool-features { gap: 0.3rem; margin-top: 0.3rem; }
  .tool-feature-tag { padding: 0.2rem 0.4rem; font-size: 0.6rem; }
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

