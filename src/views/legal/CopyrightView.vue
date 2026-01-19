<template>
  <div class="legal-page page-container">
    <section class="legal-header">
      <div class="container">
        <h1 class="page-title">Copyright</h1>
        <p class="page-date">Last Updated: January 5, 2026</p>
      </div>
    </section>

    <section class="legal-content">
      <div class="container">
        <div class="content-wrapper">
          <div class="legal-text">
            <h2>Copyright Notice</h2>
            <p>
              © 2026 PokéPath TD Community. All rights reserved. This website and its content are protected by copyright laws.
            </p>

            <h2>Ownership</h2>
            <p>
              All content on this website, including but not limited to text, graphics, logos, images, and software, is the property of PokéPath TD Community or its content suppliers and is protected by international copyright laws.
            </p>

            <h2>Trademark Notice</h2>
            <p>
              Pokémon is a trademark of Nintendo, Game Freak, and The Pokémon Company. PokéPath TD is developed by Khydra98. This website is not affiliated with or endorsed by Nintendo, Game Freak, The Pokémon Company, or Khydra98. All references to Pokémon, PokéPath TD and related trademarks are used for informational purposes only.
            </p>

            <h2>Fair Use</h2>
            <p>
              This website contains information about PokéPath TD game for educational and informational purposes. We believe our use of game-related content falls under fair use as we provide commentary, analysis, and community resources.
            </p>

            <h2>User-Generated Content</h2>
            <p>
              Users who submit content to our website retain ownership of their original content but grant PokéPath TD Community a license to use, display, and distribute that content on our website.
            </p>

            <h2>DMCA Policy</h2>
            <p>
              If you believe that any content on our website infringes your copyright, please contact us at <a href="mailto:wyong@pokepathgame.org">wyong@pokepathgame.org</a> with the following information:
            </p>
            <ul>
              <li>Your contact information</li>
              <li>A description of the copyrighted work you claim has been infringed</li>
              <li>The location of the allegedly infringing material on our website</li>
              <li>A statement that you have a good faith belief that the use is not authorized</li>
              <li>A statement that the information in your notice is accurate</li>
            </ul>

            <h2>Contact Us</h2>
            <p>
              For copyright-related inquiries, please contact us at <a href="mailto:wyong@pokepathgame.org">wyong@pokepathgame.org</a>.
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
// SEO handled globally by useAutoSEO and router meta
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
</style>