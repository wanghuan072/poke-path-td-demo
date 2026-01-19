<template>
  <header class="header">
    <div class="container">
      <nav class="nav">
        <div class="nav-brand">
          <a href="/" class="logo">
            <img src="/images/logo.webp" alt="logo">
            <span class="logo-text">PokéPath TD</span>
          </a>
        </div>
        <ul class="nav-menu" :class="{ active: mobileMenuOpen }">
          <li><a href="/" class="nav-link" @click="closeMobileMenu">Home</a></li>
          <li><a href="/all-pokemon" class="nav-link" @click="closeMobileMenu">All Pokemon</a></li>
          <li><a href="/tier-list" class="nav-link" @click="closeMobileMenu">Tier List</a></li>
          <li><a href="/enemies" class="nav-link" @click="closeMobileMenu">Enemy Database</a></li>
          <li><a href="/map-router" class="nav-link" @click="closeMobileMenu">Map Router</a></li>
          <li><a href="/tools" class="nav-link" @click="closeMobileMenu">Tools</a></li>
          <li><a href="/wiki" class="nav-link" @click="closeMobileMenu">Wiki</a></li>
        </ul>
        <button class="nav-toggle" @click="toggleMobileMenu" aria-label="Toggle menu">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </nav>
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue'

const mobileMenuOpen = ref(false)

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value
}

const closeMobileMenu = () => {
  mobileMenuOpen.value = false
}
</script>

<style scoped>
.header {
  background: rgba(26, 35, 50, 0.85);
  border-bottom: 1px solid rgba(107, 163, 232, 0.3);
  position: relative;
  top: 0;
  z-index: 100;
  backdrop-filter: blur(10px);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
}

.container {
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 1rem;
}

@media (min-width: 640px) {
  .container {
    padding: 0 1.5rem;
  }
}

@media (min-width: 1024px) {
  .container {
    padding: 0 2rem;
  }
}

.nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 0;
  gap: 1.5rem;
}

.nav-brand {
  flex-shrink: 0;
}

.logo {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-size: 1.25rem;
  font-weight: 700;
  color: #f5f8f0;
  text-decoration: none;
  transition: all 0.2s ease;
}

.logo img {
  height: 40px;
  width: 40px;
}

.logo-text {
  white-space: nowrap;
  background: linear-gradient(135deg, #f5f8f0 0%, #6ba3e8 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.nav-menu {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  list-style: none;
  flex: 1;
  justify-content: flex-end;
}

.nav-link {
  color: rgba(245, 248, 240, 0.85);
  font-weight: 500;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  transition: all 0.2s ease;
  text-decoration: none;
  white-space: nowrap;
  font-size: 0.95rem;
}

.nav-link:hover {
  background: rgba(107, 163, 232, 0.15);
  color: #6ba3e8;
}

.nav-link.active {
  background: linear-gradient(135deg, rgba(107, 163, 232, 0.2), rgba(92, 184, 92, 0.2));
  color: #6ba3e8;
  border: 1px solid rgba(107, 163, 232, 0.3);
}

.nav-toggle {
  display: none;
  flex-direction: column;
  gap: 4px;
  background: transparent;
  border: 1px solid rgba(107, 163, 232, 0.3);
  border-radius: 6px;
  cursor: pointer;
  padding: 0.5rem;
}

.nav-toggle span {
  width: 24px;
  height: 2px;
  background: #6ba3e8;
  border-radius: 9999px;
  transition: all 0.2s ease;
}

@media (max-width: 768px) {
  .nav-toggle {
    display: flex;
  }
  
  .nav-menu {
    display: none;
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background: rgba(26, 35, 50, 0.95);
    border-top: 1px solid rgba(107, 163, 232, 0.3);
    flex-direction: column;
    padding: 1rem;
    backdrop-filter: blur(10px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  }
  
  .nav-menu.active {
    display: flex;
  }
  
  .nav-link {
    width: 100%;
    padding: 0.75rem 1rem;
  }
  
  .logo-text {
    font-size: 1rem;
  }
}
</style>

