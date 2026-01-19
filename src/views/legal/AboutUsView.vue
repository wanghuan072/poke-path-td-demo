<template>
  <div class="legal-page page-container">
    <section class="legal-header">
      <div class="container">
        <h1 class="page-title">About Us</h1>
        <p class="page-date">Last Updated: January 5, 2026</p>
      </div>
    </section>

    <section class="legal-content">
      <div class="container">
        <div class="content-wrapper">
          <div class="legal-text">
            <h2>Welcome to PokéPath TD Community</h2>
            <p>
              PokéPath TD Community is an unofficial community resource dedicated to PokéPath TD game. We are passionate fans who have created this website to help fellow players master the game.
            </p>

            <h2>Our Mission</h2>
            <p>
              Our mission is to provide comprehensive, accurate, and up-to-date information about PokéPath TD game. We archive game mechanics, Pokémon information, tier lists, DPS calculators, and strategy guides so players can improve their gaming experience and achieve their goals.
            </p>

            <h2>What We Offer</h2>
            <p>
              We provide a wide range of resources including:
            </p>
            <ul>
              <li>Comprehensive game guides and strategies</li>
              <li>Detailed wiki with game mechanics and features</li>
              <li>Complete database of Pokémon, enemies, and routes</li>
              <li>DPS calculator and team optimization tools</li>
              <li>Tier lists and meta analysis</li>
              <li>Latest news and updates</li>
              <li>Community-driven content and updates</li>
            </ul>

            <h2>Our Commitment</h2>
            <p>
              We are committed to maintaining the accuracy and quality of our content. Our team regularly updates information based on game updates, community feedback, and verified gameplay data.
            </p>

            <h2>Disclaimer</h2>
            <p>
              PokéPath TD Community is an independent, fan-operated website. We are not affiliated with, endorsed by, or connected to Khydra98, the game developer, or any official entities. All game-related content is used for informational purposes only.
            </p>

            <h2>Contact Us</h2>
            <p>
              If you have questions, suggestions, or feedback, please feel free to contact us at <a href="mailto:wyong@pokepathgame.org">wyong@pokepathgame.org</a>. We appreciate your support and contributions to the PokéPath TD community.
            </p>

            <h2>Thank You</h2>
            <p>
              Thank you for visiting PokéPath TD Community. We hope our resources help you master the game and achieve greatness in PokéPath TD!
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
</script>

<style scoped>
.legal-page {
  min-height: 100vh;
}

.legal-header {
  padding: 60px 0 40px;
  background: linear-gradient(180deg, rgba(15, 23, 42, 0.4), transparent);
}

.page-title {
  font-size: 3rem;
  margin: 0 0 16px;
  color: #f5f8f0;
  font-weight: 700;
  text-align: center;
}

.page-date {
  text-align: center;
  color: rgba(245, 248, 240, 0.7);
  font-size: 0.9rem;
  margin: 0;
}

.legal-content {
  padding: 40px 0 80px;
}

.content-wrapper {
  max-width: 900px;
  margin: 0 auto;
}

.legal-text {
  color: rgba(245, 248, 240, 0.8);
  line-height: 1.8;
}

.legal-text h2 {
  font-size: 1.8rem;
  color: #f5f8f0;
  margin: 40px 0 16px;
  font-weight: 600;
}

.legal-text h2:first-child {
  margin-top: 0;
}

.legal-text p {
  font-size: 1rem;
  margin-bottom: 20px;
  word-wrap: break-word;
  overflow-wrap: break-word;
}

.legal-text ul {
  margin: 20px 0;
  padding-left: 30px;
  list-style: disc;
}

.legal-text li {
  font-size: 1rem;
  margin-bottom: 10px;
  word-wrap: break-word;
  overflow-wrap: break-word;
}

.legal-text a {
  color: #6ba3e8;
  text-decoration: none;
}

.legal-text a:hover {
  text-decoration: underline;
}

/* 1024px 响应式样式 */
@media (max-width: 1024px) {
  .legal-header { padding: 50px 0 32px; }
  .page-title { font-size: 2.5rem; margin-bottom: 14px; }
  .page-date { font-size: 0.85rem; }
  .legal-content { padding: 32px 0 60px; }
  .legal-text h2 { font-size: 1.6rem; margin: 32px 0 14px; }
  .legal-text p { font-size: 0.95rem; margin-bottom: 18px; }
  .legal-text ul { margin: 18px 0; padding-left: 25px; }
  .legal-text li { font-size: 0.95rem; margin-bottom: 8px; }
}

/* 768px 移动端响应式样式 */
@media (max-width: 768px) {
  .legal-header { padding: 30px 0 24px; }
  .page-title { font-size: 1.6rem; margin-bottom: 0.8rem; }
  .page-date { font-size: 0.8rem; }
  .legal-content { padding: 1.2rem 0 40px; }
  .legal-text h2 { font-size: 1.4rem; margin: 1.2rem 0 0.8rem; }
  .legal-text h2:first-child { margin-top: 0; }
  .legal-text p { font-size: 0.8rem; margin-bottom: 1.2rem; }
  .legal-text ul { margin: 1.2rem 0; padding-left: 1.2rem; }
  .legal-text li { font-size: 0.8rem; margin-bottom: 0.6rem; }
}
</style>
