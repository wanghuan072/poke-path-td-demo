<template>
  <footer class="site-footer">
    <div class="container">
      <div class="footer-grid">
        <div class="footer-brand">
          <div class="footer-logo">
            <img src="/images/logo.webp" alt="PokéPath TD Logo" class="logo-image">
            <span class="logo-text">PokéPath TD</span>
          </div>
          <p class="footer-text">
            Comprehensive PokéPath TD game resources including guides, wiki, Pokémon database, tier lists, and strategy tools. A fan-created site by fans, for fans.
          </p>
        </div>
        <div class="link-column">
          <h2>Navigate</h2>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/wiki">Wiki</a></li>
            <li><a href="/all-pokemon">All Pokémon</a></li>
            <li><a href="/enemies">Enemy Database</a></li>
            <li><a href="/routes">Routes</a></li>
            <li><a href="/tools">Tools</a></li>
          </ul>
        </div>
        <div class="link-column">
          <h2>Legal</h2>
          <ul>
            <li><a href="/privacy-policy" rel="noopener noreferrer nofollow">Privacy Policy</a></li>
            <li><a href="/terms-of-service" rel="noopener noreferrer nofollow">Terms of Service</a></li>
            <li><a href="/copyright" rel="noopener noreferrer nofollow">Copyright</a></li>
            <li><a href="/about-us" rel="noopener noreferrer nofollow">About Us</a></li>
            <li><a href="/contact-us" rel="noopener noreferrer nofollow">Contact Us</a></li>
          </ul>
        </div>
      </div>
      <div class="footer-bottom">
        <p>© 2026 pokepathgame.org. All rights reserved.</p>
        <p>pokepathgame.org is not affiliated with, endorsed by, or connected to the original or its publishers. This is an independent fan site created for informational purposes only. All trademarks and copyrights belong to their respective owners.</p>
      </div>
    </div>
  </footer>
</template>

<script setup>
</script>

<style scoped>
.site-footer {
  padding: 40px 0 20px 0;
  background: rgba(15, 23, 42, 0.95);
  border-top: 1px solid rgba(107, 163, 232, 0.2);
}

.footer-grid {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  gap: 40px;
  margin-bottom: 30px;
}

.footer-logo {
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 16px;
}

.logo-image {
  width: 40px;
  height: 40px;
}

.logo-text {
  font-size: 1.4rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  /* 渐变颜色 - 蓝色到绿色，Pokémon主题 */
  background: linear-gradient(135deg, #6ba3e8 0%, #5cb85c 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.footer-text {
  color: rgba(245, 248, 240, 0.7);
  margin-bottom: 16px;
  line-height: 1.6;
}

.link-column h2 {
  color: #6ba3e8;
  font-size: 1.2rem;
  margin-bottom: 16px;
  font-weight: 600;
}

.link-column ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.link-column a {
  color: rgba(245, 248, 240, 0.7);
  text-decoration: none;
  transition: color 0.2s ease;
}

.link-column a:hover {
  color: #6ba3e8;
}

.footer-bottom {
  margin-top: 30px;
  border-top: 1px solid rgba(107, 163, 232, 0.15);
  padding-top: 20px;
  color: rgba(245, 248, 240, 0.6);
  font-size: 0.85rem;
  display: flex;
  flex-direction: column;
  gap: 8px;
  text-align: center;
}

/* 平板端 */
@media (max-width: 1024px) {
  .footer-grid {
    grid-template-columns: 1fr 1fr;
    gap: 30px;
  }
}

/* 移动端 */
@media (max-width: 768px) {
  .site-footer {
    padding: 30px 0 20px 0;
  }

  .footer-grid {
    grid-template-columns: 1fr;
    gap: 30px;
  }

  .footer-text {
    font-size: 0.9rem;
  }

  .link-column h2 {
    font-size: 1.1rem;
  }

  .footer-bottom {
    font-size: 0.8rem;
  }
}
</style>

