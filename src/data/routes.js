// Route/Stage Data for PokéPath TD
// 每个地图有100关，每关有不同的小怪（不需要全写上）
// 这里只展示地图的基本信息

// 关卡数据结构：每个地图是一个大关卡，包含100个波次
export const stages = [
  {
    id: 'how-to-beat-route-1-1-articuno',
    routeNumber: '1-1',
    name: 'PokePath TD Route 1-1 Guide: Best Team to Beat Articuno',
    mapImage: '/images/map-route/1-1.png',
    stars: 13,
    difficulty: 'Easy',
    difficultyLevel: 1,
    terrain: ['Field', 'Grass', 'Water'],
    description: 'Route 1-1 is the first major hurdle in PokePath TD. While the early waves are easy, many players get stuck on Wave 100 when the legendary bird Articuno appears. Articuno has massive HP and can freeze your towers. To beat it, you need to master the map\'s unique terrain: a huge Water Zone in the center and a U-shaped Land Path at the bottom.',
    totalWaves: 100,
    recommendedTypes: ['Water', 'Ice', 'Dark', 'Normal', 'Grass', 'Ground'],
    recommendedPokemon: ['Omastar', 'Corsola', 'Samurott', 'Feraligatr', 'Lapras', 'Octillery', 'Weavile', 'Farfetch\'d', 'Sunflora', 'Excadrill', 'Honchkrow'],
    strategies: ['Water Trap', 'Control & AOE', 'Kill Zone'],
    playstyle: 'Hybrid Water/Land',
    tips: [
      'Place Water units in central lake - they can attack both top and bottom paths',
      'Corsola is MVP - its 300-range slow covers almost the entire map',
      'Place Weavile on bottom grass path with Farfetch\'d and Sunflora for buffs',
      'Honchkrow MUST be on the single mountain tile for anti-invisible coverage',
      'Water units in lake effectively double their DPS by covering both paths',
      'Use Lapras for Paralyze chance to stop Articuno'
    ],
    teamComposition: {
      early: ['Omastar', 'Corsola'],
      mid: ['Omastar', 'Corsola', 'Lapras', 'Octillery', 'Weavile'],
      late: ['Omastar', 'Corsola', 'Samurott', 'Feraligatr', 'Lapras', 'Octillery', 'Weavile', 'Farfetch\'d', 'Sunflora', 'Excadrill', 'Honchkrow']
    },
    seo: {
      title: 'PokePath TD Route 1-1 Guide: Best Team to Beat Articuno',
      description: 'Stuck on Route 1-1? Here is the ultimate guide to beating Wave 100 and Articuno. Learn the best water/land team placement and how to counter invisible enemies.',
      keywords: 'pokepathtd route 1-1, beat articuno pokepathtd, route 1-1 best team, pokepathtd water strategy'
    },
    terrainAnalysis: {
      roads: [
        { description: 'U-shaped Land Path at the bottom - the Kill Zone', length: 'Long', chokepoints: 2 },
        { description: 'Top path around the central lake', length: 'Medium', chokepoints: 1 },
        { description: 'Main path winding around the central lake', length: 'Long', chokepoints: 2 }
      ],
      water: [
        { description: 'Huge Water Zone in the center - Water Trap', type: 'Deep Water', strategicValue: 'Very High', benefits: ['Water-type Pokémon gain 2x power bonus', 'Units here can attack both top and bottom paths', 'Effectively doubles DPS'] },
        { description: 'Small water patches near paths', type: 'Shallow Water', strategicValue: 'Medium', benefits: ['Water-type Pokémon gain power bonus'] }
      ],
      mountains: [
        { description: 'Single crucial mountain tile on the right side', height: 'High', strategicValue: 'Very High', benefits: ['+30% range bonus', 'Only spot for high-ground vision', 'Must place Honchkrow here'] }
      ],
      grass: [
        { description: 'Bottom U-shaped path - Kill Zone for land units', coverage: 'High', benefits: ['Grass-type Pokémon gain power bonus', 'Perfect for Weavile, Farfetch\'d, Sunflora'] },
        { description: 'Grass fields surrounding the lake', coverage: 'High', benefits: ['Grass-type Pokémon gain power bonus'] }
      ],
      chokepoints: [
        { location: 'Central Lake (Water Zone)', description: 'Huge water zone where Water units can attack both paths', priority: 'Very High' },
        { location: 'Bottom U-shaped Path (Kill Zone)', description: 'Where heavy hitters finish off weakened enemies', priority: 'Very High' },
        { location: 'Mountain Tile (Right Side)', description: 'Only spot for high-ground vision - must place Honchkrow', priority: 'Very High' }
      ]
    },
    detailsHtml: `
      <div class="route-guide">
        <p>Route 1-1 is the first major hurdle in PokePath TD. While the early waves are easy, many players get stuck on Wave 100 when the legendary bird Articuno appears.</p>
        <p>Articuno has massive HP and can freeze your towers. To beat it, you need to master the map's unique terrain: a huge Water Zone in the center and a U-shaped Land Path at the bottom.</p>
        <p>In this guide, we will show you the exact 10-unit team composition you need to dominate Route 1-1, utilizing both water and land units for maximum efficiency.</p>
        
        <h3>🗺️ Map Analysis: The "Water Trap"</h3>
        <p>The key to Route 1-1 is the central lake.</p>
        <ul>
          <li><strong>Water Units (Blue Zone):</strong> Units placed here can attack enemies on the top path AND the bottom path. This effectively doubles their DPS.</li>
          <li><strong>Land Units (Green Zone):</strong> The bottom path is your "Kill Zone." This is where you should place your heavy hitters to finish off weakened enemies.</li>
          <li><strong>Mountain (Red Zone):</strong> There is a crucial mountain tile on the right side. This is the only spot for high-ground vision.</li>
        </ul>
        
        <h3>🏆 The Best Team for Route 1-1 (10-Unit Setup)</h3>
        <p>This lineup is optimized for Level 100 accounts, but it works perfectly fine at lower levels too.</p>
        
        <h4>1. The Water Squad (Control & AOE)</h4>
        <p>Place these 5 units in the central lake (from left to right):</p>
        <ul>
          <li><strong>Omastar (Left):</strong> With its Swift Swim ability, its attack speed doubles in water. It acts as a machine gun for early waves.</li>
          <li><strong>Corsola (Center-Left):</strong> The MVP. Its Ring-shaped attack has a massive range (300 at Lv 100). It applies a Slow effect to almost the entire map.</li>
          <li><strong>Samurott / Feraligatr (Center):</strong> Your water-based Boss killer.</li>
          <li><strong>Lapras (Center-Right):</strong> Adds a Paralyze (Stun) chance. This is crucial for stopping Articuno if it gets past your slows.</li>
          <li><strong>Octillery (Right):</strong> The Sniper. With a range of 480, it can hit enemies the moment they spawn.</li>
        </ul>
        
        <h4>2. The Land Squad (The "Kill Zone")</h4>
        <p>Place these units on the bottom grass path:</p>
        <ul>
          <li><strong>6. Weavile (Center):</strong> Your main DPS. At Lv 100, it has a 65% Crit Rate and deals Double Damage on crits.</li>
          <li><strong>7. Farfetch'd (Left of Weavile):</strong> Essential Buffer. It boosts Weavile's Critical Damage by 33%.</li>
          <li><strong>8. Sunflora (Right of Weavile):</strong> Essential Buffer. It provides a +20% Damage Aura to Weavile and nearby water units.</li>
          <li><strong>9. Excadrill (Corner):</strong> Shreds enemy armor.</li>
        </ul>
        
        <h4>3. The Anti-Invisible Defense</h4>
        <ul>
          <li><strong>Honchkrow (Mountain Tile):</strong> You MUST place Honchkrow on the single mountain tile on the right.</li>
          <li><strong>Why?</strong> Route 1-1 has invisible enemies (like Kecleon) in later waves. Honchkrow is the best unit to reveal them before they leak.</li>
        </ul>
        
        <h3>⚔️ Boss Strategy: How to Defeat Articuno (Wave 100)</h3>
        <p>Articuno is a tanky Flying/Ice type.</p>
        <ul>
          <li><strong>Weakness:</strong> It relies on movement. If you can stop it, you can kill it.</li>
        </ul>
        <p><strong>The Strategy:</strong></p>
        <ul>
          <li><strong>Slow it Down:</strong> As soon as Articuno enters, Corsola will slow its movement speed.</li>
          <li><strong>Stun Lock:</strong> Lapras and Ampharos (if you bring one) will attempt to Paralyze it.</li>
          <li><strong>The Nuke:</strong> Once it reaches the bottom path, it enters Weavile's range. With the buffs from Sunflora and Farfetch'd, Weavile can tear through Articuno's health bar in seconds.</li>
        </ul>
        <p><strong>Pro Tip:</strong> If you are farming gold, you can use Ditto in the water to copy Persian and hit Articuno for extra cash before killing it!</p>
        
        <img src="/images/map-route/1-1-01.png" alt="Route 1-1 Map" class="route-map">

        <h3>🗺️ Terrain Analysis</h3>
        <p>Route 1-1 features a unique "Water Trap" layout with a huge central lake and a U-shaped land path, creating strategic opportunities for both water and land units.</p>
        
        <h4>Roads & Paths</h4>
        <ul>
          <li><strong>U-shaped Land Path:</strong> U-shaped Land Path at the bottom - the Kill Zone (Long, 2 chokepoints)</li>
          <li><strong>Top Path:</strong> Top path around the central lake (Medium, 1 chokepoint)</li>
          <li><strong>Main Path:</strong> Main path winding around the central lake (Long, 2 chokepoints)</li>
        </ul>
        
        <h4>Water Areas</h4>
        <ul>
          <li><strong>Huge Water Zone:</strong> Huge Water Zone in the center - Water Trap (Very High strategic value) - Water-type Pokémon gain 2x power bonus, Units here can attack both top and bottom paths, Effectively doubles DPS</li>
          <li><strong>Small Water Patches:</strong> Small water patches near paths (Medium strategic value) - Water-type Pokémon gain power bonus</li>
        </ul>
        
        <h4>Mountains & High Ground</h4>
        <ul>
          <li><strong>Single Mountain Tile:</strong> Single crucial mountain tile on the right side (Very High strategic value) - +30% range bonus, Only spot for high-ground vision, Must place Honchkrow here</li>
        </ul>
        
        <h4>Grass & Vegetation</h4>
        <ul>
          <li><strong>Bottom U-shaped Path:</strong> Bottom U-shaped path - Kill Zone for land units (High coverage) - Grass-type Pokémon gain power bonus, Perfect for Weavile, Farfetch'd, Sunflora</li>
          <li><strong>Grass Fields:</strong> Grass fields surrounding the lake (High coverage) - Grass-type Pokémon gain power bonus</li>
        </ul>
        
        <h4>Strategic Chokepoints</h4>
        <ul>
          <li><strong>Central Lake (Water Zone):</strong> Huge water zone where Water units can attack both paths (Very High priority)</li>
          <li><strong>Bottom U-shaped Path (Kill Zone):</strong> Where heavy hitters finish off weakened enemies (Very High priority)</li>
          <li><strong>Mountain Tile (Right Side):</strong> Only spot for high-ground vision - must place Honchkrow (Very High priority)</li>
        </ul>
        
        <h3>⚔️ Team Composition</h3>
        <h4>Early Game (Waves 1-50)</h4>
        <p>Start with Omastar and Corsola in the central lake. Omastar's Swift Swim doubles attack speed in water, making it a machine gun for early waves.</p>
        
        <h4>Mid Game (Waves 51-99)</h4>
        <p>Add Lapras and Octillery to the water squad. Deploy Weavile on the bottom path. Build up your control and DPS capabilities.</p>
        
        <h4>Late Game (Wave 100)</h4>
        <p>Deploy the complete 10-unit team: Water Squad (Omastar, Corsola, Samurott/Feraligatr, Lapras, Octillery) in central lake, Land Squad (Weavile, Farfetch'd, Sunflora, Excadrill) on bottom path, and Honchkrow on the mountain tile for anti-invisible coverage.</p>
      </div>
    `,
    
  },
  
  {
    id: 'how-to-beat-route-1-2-zapdos-wave-100',
    routeNumber: '1-2',
    name: 'PokePath TD Route 1-2 Guide: Beating Zapdos (Wave 100 Strategy)',
    mapImage: '/images/map-route/1-2.png',
    stars: 2,
    difficulty: 'Easy',
    difficultyLevel: 1,
    terrain: ['Field', 'Grass'],
    description: 'Route 1-2 is notorious for its split paths and lack of water, but the real challenge is Wave 100: Zapdos. This Legendary Bird is fast, tanky, and immune to many crowd control effects. If your standard AOE team can clear Waves 1-99 but fails at the Boss, use the tactical "Clawitzer Swap" strategy.',
    totalWaves: 100,
    recommendedTypes: ['Water', 'Ice', 'Normal', 'Grass'],
    recommendedPokemon: ['Clawitzer', 'Farfetch\'d', 'Sunflora', 'Weavile', 'Ditto', 'Corsola', 'Maractus'],
    strategies: ['Clawitzer Nuke', 'Spawn Camping', 'Tactical Swap'],
    playstyle: 'Boss Swap Strategy',
    tips: [
      'Use Infinite Retry mechanic - if you fail Wave 100, you can retry instantly',
      'Retire Maractus at Wave 100 and deploy Clawitzer at spawn point',
      'Place Farfetch\'d and Sunflora next to Clawitzer for maximum buffs',
      'Bosses are never invisible - you can retire Honchkrow for extra DPS',
      'Set Clawitzer targeting to "Strong" or "First" for optimal damage',
      'Use Weavile + Ditto in center field as safety net'
    ],
    teamComposition: {
      early: ['Maractus', 'Honchkrow'],
      mid: ['Maractus', 'Aggron', 'Corsola', 'Weavile'],
      late: ['Clawitzer', 'Farfetch\'d', 'Sunflora', 'Weavile', 'Ditto', 'Corsola']
    },
    terrainAnalysis: {
      roads: [
        { description: 'Split paths with center convergence', length: 'Long', chokepoints: 2 },
        { description: 'Straight main path through the center', length: 'Long', chokepoints: 1 },
        { description: 'Curved path on the left side', length: 'Medium', chokepoints: 0 }
      ],
      water: [],
      mountains: [
        { description: 'Mountain areas for long-range units', height: 'Medium', strategicValue: 'High', benefits: ['+20% range bonus', 'Good for Honchkrow or Aerodactyl'] }
      ],
      grass: [
        { description: 'Extensive grass fields covering most of the map', coverage: 'Very High', benefits: ['Grass-type Pokémon gain 2x power bonus'] },
        { description: 'Crop fields providing additional grass terrain', coverage: 'Medium', benefits: ['Grass-type Pokémon gain power bonus'] },
        { description: 'Bottom left spawn area', coverage: 'Low', benefits: ['Perfect for Clawitzer placement'] }
      ],
      chokepoints: [
        { location: 'Bottom Left Spawn Point', description: 'Where Zapdos spawns - perfect for spawn camping', priority: 'Very High' },
        { location: 'Center Split', description: 'Where paths converge - safety net zone', priority: 'Very High' },
        { location: 'Center path narrowing', description: 'Main path narrows in the middle', priority: 'High' }
      ]
    },
    seo: {
      title: 'PokePath TD Route 1-2 Guide: Beating Zapdos (Wave 100 Strategy)',
      description: 'Stuck on Zapdos? Learn the "Clawitzer Swap" strategy to beat Route 1-2. We explain the infinite retry mechanic and the best team to melt the Wave 100 Boss.',
      keywords: 'pokepathtd route 1-2, beat zapdos pokepathtd, wave 100 retry mechanic, clawitzer boss killer, pokepathtd guide'
    },
    detailsHtml: `
      <div class="route-guide">
        <p>Route 1-2 is notorious for its split paths and lack of water, but the real challenge is Wave 100: Zapdos. This Legendary Bird is fast, tanky, and immune to many crowd control effects.</p>
        <p>If your standard AOE team (Maractus/Aggron) can clear Waves 1-99 but fails at the Boss, don't worry. You don't need to restart the whole run.</p>
        <p>In this guide, we will use the game's "Infinite Retry" mechanic and a tactical "Clawitzer Swap" to obliterate Zapdos.</p>
        
        <h3>⚙️ Key Game Mechanics You Must Know</h3>
        <p>Before we discuss the team, you need to understand two crucial mechanics about PokePath TD:</p>
        
        <h4>1. The "Infinite Boss" Mechanic</h4>
        <ul>
          <li>If you lose to the Wave 100 Boss, the game does NOT end your run. It simply restarts Wave 100.</li>
          <li><strong>What this means:</strong> You can try to beat Zapdos as many times as you want. If you fail, just adjust your team, move your units, and try again instantly. There is no penalty!</li>
        </ul>

        <img src="/images/map-route/1-2-02.png" alt="Route 1-2 Map" class="route-map">
        
        <h4>2. The "Retire" Mechanic</h4>
        <ul>
          <li>When you swap a unit (Retire), you do NOT get Gold back.</li>
          <li><strong>Strategy:</strong> By Wave 100, you should have plenty of gold banked. Don't be afraid to retire your Wave-Clearing units (like Maractus) to make space for Boss-Killing units (like Clawitzer). You are swapping for power, not money.</li>
        </ul>
        
        <h4>3. Bosses are NEVER Invisible</h4>
        <ul>
          <li>Zapdos (and all Wave 100 Bosses) do not have the "Invisible" trait.</li>
          <li><strong>Optimization:</strong> You can safely retire your Honchkrow (Anti-Invisible) for the final wave and replace it with another high-DPS unit like Aerodactyl or Flygon for extra damage.</li>
        </ul>
        
        <h3>⚔️ The Strategy: The "Clawitzer Nuke"</h3>
        <p>Zapdos is fast. We need to deal massive damage immediately. Our strategy focuses on a "Spawn Camping" setup at the bottom left.</p>
        
        <h4>Step 1: The Setup (Bottom Left Corner)</h4>
        <p>This is where Zapdos spawns. We want to hit him hard before he even moves.</p>
        <ul>
          <li><strong>The Swap:</strong> Retire your Maractus (AOE) and deploy Clawitzer (Lv 100).</li>
          <li><strong>Why?</strong> Clawitzer has 1,950 Power and deals Double Damage on Crits. It is the strongest single-target burst in the game.</li>
          <li><strong>The Buffs:</strong> Place Farfetch'd (+33% Crit Dmg) and Sunflora (+20% Dmg) right next to Clawitzer.</li>
          <li><strong>Result:</strong> Zapdos takes massive critical rockets the moment he spawns, losing 30-50% HP instantly.</li>
        </ul>
        
        <h4>Step 2: The Safety Net (Center Field)</h4>
        <p>If Zapdos survives the initial nuke, he will move to the center split.</p>
        <ul>
          <li><strong>Weavile:</strong> Place your Weavile here to cover both top and bottom paths.</li>
          <li><strong>Ditto:</strong> Copy Weavile and place it nearby. Two Weaviles are better than one.</li>
          <li><strong>Corsola:</strong> Provides a 300-range Slow. Even though Zapdos is fast, this gives your Weaviles more time to land hits.</li>
        </ul>
        
        <h4>Step 3: Optimization (If You Fail)</h4>
        <p>If you still can't beat him:</p>
        <ul>
          <li>Let the wave restart (Auto-Retry).</li>
          <li><strong>Retire Honchkrow:</strong> Since Zapdos isn't invisible, swap Honchkrow for another high-DPS unit on the mountain.</li>
          <li><strong>Check Targeting:</strong> Ensure Clawitzer is set to "Strong" or "First".</li>
        </ul>
        
        <h3>📝 Summary: The Winning Play</h3>
        <ol>
          <li>Clear Waves 1-99 with your standard AOE team.</li>
          <li>Pause at Wave 100.</li>
          <li>Retire Maractus/Honchkrow.</li>
          <li>Deploy Clawitzer + Buffs at the Spawn Point.</li>
          <li>Deploy Weavile + Ditto in the Center.</li>
          <li>Unpause and Win.</li>
        </ol>
        <p>This strategy leverages Level 100 stats. Want to see the full potential of these units? Check out our <a href="/wiki">Wiki Database</a>.</p>
        
        <img src="/images/map-route/1-2-01.png" alt="Route 1-2 Map" class="route-map">

        <h3>🗺️ Terrain Analysis</h3>
        <p>Route 1-2 features split paths and extensive grass fields, with no water areas. The key strategic points are the spawn point and center convergence.</p>
        
        <h4>Roads & Paths</h4>
        <ul>
          <li><strong>Split Paths:</strong> Split paths with center convergence (Long, 2 chokepoints)</li>
          <li><strong>Main Path:</strong> Straight main path through the center (Long, 1 chokepoint)</li>
          <li><strong>Left Path:</strong> Curved path on the left side (Medium, 0 chokepoints)</li>
        </ul>
        
        <h4>Mountains & High Ground</h4>
        <ul>
          <li><strong>Mountain Areas:</strong> Mountain areas for long-range units (High strategic value) - +20% range bonus, Good for Honchkrow or Aerodactyl</li>
        </ul>
        
        <h4>Grass & Vegetation</h4>
        <ul>
          <li><strong>Extensive Grass Fields:</strong> Extensive grass fields covering most of the map (Very High coverage) - Grass-type Pokémon gain 2x power bonus</li>
          <li><strong>Crop Fields:</strong> Crop fields providing additional grass terrain (Medium coverage) - Grass-type Pokémon gain power bonus</li>
          <li><strong>Bottom Left Spawn Area:</strong> Bottom left spawn area (Low coverage) - Perfect for Clawitzer placement</li>
        </ul>
        
        <h4>Strategic Chokepoints</h4>
        <ul>
          <li><strong>Bottom Left Spawn Point:</strong> Where Zapdos spawns - perfect for spawn camping (Very High priority)</li>
          <li><strong>Center Split:</strong> Where paths converge - safety net zone (Very High priority)</li>
          <li><strong>Center Path Narrowing:</strong> Main path narrows in the middle (High priority)</li>
        </ul>
        
        <h3>⚔️ Team Composition</h3>
        <h4>Early Game (Waves 1-50)</h4>
        <p>Use Maractus for AOE wave clearing and Honchkrow for anti-invisible coverage.</p>
        
        <h4>Mid Game (Waves 51-99)</h4>
        <p>Continue with Maractus and Aggron for AOE damage. Add Corsola and Weavile for control and DPS.</p>
        
        <h4>Late Game (Wave 100)</h4>
        <p>Perform the "Clawitzer Swap": Retire Maractus and deploy Clawitzer + Farfetch'd + Sunflora at spawn point. Keep Weavile + Ditto + Corsola in center field as safety net.</p>
      </div>
    `,
  },
  
  {
    id: 'how-to-beat-route-1-3-moltres',
    routeNumber: '1-3',
    name: 'PokePath TD Route 1-3 Guide: Best Team to Defeat Moltres',
    mapImage: '/images/map-route/1-3.png',
    stars: 300,
    starsSecondary: 0,
    difficulty: 'Medium',
    difficultyLevel: 2,
    terrain: ['Field', 'Mountain', 'Water', 'Grass'],
    description: 'Route 1-3 is the final stage of the first region, featuring a mix of water, grass, and mountain terrain. The ultimate challenge is Wave 100: Moltres, the Legendary Fire Bird. While Water-types seem like the obvious choice, the true secret to beating this map lies in a specialized Hybrid Control Team.',
    totalWaves: 100,
    recommendedTypes: ['Dark', 'Ice', 'Electric', 'Steel', 'Grass'],
    recommendedPokemon: ['Absol', 'Ditto', 'Weavile', 'Corsola', 'Ferrothorn', 'Ampharos', 'Sunflora', 'Noivern', 'Honchkrow'],
    strategies: ['Double Absol Lock-On', 'Control & Burst', 'Three-Layer Defense'],
    playstyle: 'Hybrid Control',
    tips: [
      'Place Absol and Ditto on Top Left Mountain for early lock-on and scaling damage',
      'Use Corsola and Ferrothorn in the middle junction for global slow',
      'Deploy Weavile and Sunflora in Bottom Right for the kill zone',
      'Set Absol and Ditto to "Strong" targeting to lock onto Moltres immediately',
      'The Double Absol setup melts Moltres before it reaches the middle'
    ],
    teamComposition: {
      early: ['Noivern', 'Corsola'],
      mid: ['Absol', 'Ditto', 'Ferrothorn', 'Ampharos'],
      late: ['Absol', 'Ditto', 'Corsola', 'Ferrothorn', 'Ampharos', 'Weavile', 'Sunflora', 'Noivern', 'Honchkrow']
    },
    terrainAnalysis: {
      roads: [
        { description: 'Paths converging through middle junction', length: 'Long', chokepoints: 2 },
        { description: 'Path from spawn to kill zone', length: 'Medium', chokepoints: 1 }
      ],
      water: [
        { description: 'Water areas providing terrain bonuses', type: 'Water', strategicValue: 'Medium', benefits: ['Water-type Pokémon gain power bonus'] }
      ],
      mountains: [
        { description: 'Mountain (Top Left) - Perfect for long-range snipers and anti-invisible units', height: 'Very High', strategicValue: 'Very High', benefits: ['+40% range bonus', 'Perfect for Absol and Noivern', 'Can lock onto enemies early'] },
        { description: 'Rocky cliffs along paths', height: 'Medium', strategicValue: 'High', benefits: ['+15% range bonus'] }
      ],
      grass: [
        { description: 'Grass patches including Bottom Right kill zone', coverage: 'Medium', benefits: ['Grass-type Pokémon gain power bonus', 'Perfect for Sunflora placement'] },
        { description: 'Scattered vegetation patches', coverage: 'Low', benefits: ['Grass-type Pokémon gain power bonus'] }
      ],
      chokepoints: [
        { location: 'Choke Point (Middle)', description: 'Where paths converge, ideal for slowing enemies', priority: 'Very High' },
        { location: 'Mountain (Top Left)', description: 'Perfect for long-range snipers', priority: 'Very High' },
        { location: 'Kill Zone (Bottom Right)', description: 'The final stretch where heavy hitters finish off the Boss', priority: 'Very High' }
      ]
    },
    seo: {
      title: 'PokePath TD Route 1-3 Guide: Best Team to Defeat Moltres',
      description: 'Stuck on Route 1-3? Use our Level 100 Best Team guide to beat Moltres. Learn the "Double Absol Lock-On" strategy and how to use global slows to win.',
      keywords: 'pokepathtd route 1-3, beat moltres pokepathtd, pokepathtd best team, absol level 100, corsola slow build'
    },
    detailsHtml: `
      <div class="route-guide">
        <p>Route 1-3 is the final stage of the first region, featuring a mix of water, grass, and mountain terrain. The ultimate challenge is Wave 100: Moltres, the Legendary Fire Bird.</p>
        <p>While Water-types seem like the obvious choice, the true secret to beating this map lies in a specialized Hybrid Control Team.</p>
        <p>In this guide, we reveal the Level 100 "Double Absol Lock-On" Strategy that crushes Moltres using damage scaling and global crowd control.</p>
        
        <h3>🗺️ Map Strategy: Controlling the Flow</h3>
        <p>Route 1-3 has three distinct zones you must utilize:</p>
        <ul>
          <li><strong>Mountain (Top Left):</strong> Perfect for long-range snipers and anti-invisible units.</li>
          <li><strong>Choke Point (Middle):</strong> Where paths converge, ideal for slowing enemies.</li>
          <li><strong>Kill Zone (Bottom Right):</strong> The final stretch where your heavy hitters finish off the Boss.</li>
        </ul>

         <img src="/images/map-route/1-3-01.png" alt="Route 1-3 Map" class="route-map">
        
        <h3>🏆 The Best Team Composition (10-Unit Setup)</h3>
        <p>We have crafted the perfect team to counter Moltres' high speed and health.</p>
        
        <h4>1. The High-Ground Snipers (Top Left Mountain)</h4>
        <ul>
          <li><strong>Absol (Level 100):</strong>
            <ul>
              <li><strong>Role:</strong> Damage Scaling.</li>
              <li><strong>Passive:</strong> Deals more damage with each consecutive hit on the same target.</li>
              <li><strong>Why?</strong> Placed on the mountain, Absol locks onto Moltres early, stacking infinite damage.</li>
            </ul>
          </li>
          <li><strong>Ditto (Copying Absol):</strong>
            <ul>
              <li><strong>Role:</strong> The Multiplier.</li>
              <li><strong>Why?</strong> By copying Absol, you have TWO units stacking damage on Moltres simultaneously. This melts the Boss HP bar before it even reaches the middle.</li>
            </ul>
          </li>
          <li><strong>Noivern / Honchkrow:</strong>
            <ul>
              <li><strong>Role:</strong> Anti-Invisible / AOE.</li>
              <li><strong>Why?</strong> Essential for clearing invisible mobs in earlier waves and providing long-range AOE support.</li>
            </ul>
          </li>
        </ul>
        
        <h4>2. The Mid-Lane Control (Global Slow)</h4>
        <ul>
          <li><strong>Corsola:</strong>
            <ul>
              <li><strong>Role:</strong> Global Slow.</li>
              <li><strong>Passive:</strong> At Level 100, its 300-Range Ring Attack slows almost the entire map.</li>
              <li><strong>Why?</strong> Moltres is fast. Corsola forces it to crawl.</li>
            </ul>
          </li>
          <li><strong>Ferrothorn:</strong>
            <ul>
              <li><strong>Role:</strong> Secondary Slow.</li>
              <li><strong>Passive:</strong> Attacks apply a slow effect.</li>
              <li><strong>Why?</strong> Stacks with Corsola to ensure enemies are permanently hindered.</li>
            </ul>
          </li>
          <li><strong>Ampharos:</strong>
            <ul>
              <li><strong>Role:</strong> Hard Stun.</li>
              <li><strong>Passive:</strong> 30% chance to Paralyze.</li>
              <li><strong>Why?</strong> A clutch stun can stop Moltres right in the kill zone.</li>
            </ul>
          </li>
        </ul>
        
        <h4>3. The "Kill Zone" (Bottom Right)</h4>
        <ul>
          <li><strong>Weavile:</strong>
            <ul>
              <li><strong>Role:</strong> The Finisher.</li>
              <li><strong>Passive:</strong> 65% Crit Rate + Double Crit Damage.</li>
              <li><strong>Why?</strong> Any Boss that survives the Absol barrage gets one-shot by Weavile's crits.</li>
            </ul>
          </li>
          <li><strong>Sunflora:</strong>
            <ul>
              <li><strong>Role:</strong> Damage Buffer.</li>
              <li><strong>Passive:</strong> +20% Damage Aura.</li>
              <li><strong>Why?</strong> Boosts Weavile and nearby units for maximum burst.</li>
            </ul>
          </li>
        </ul>
        
        <h3>⚔️ The Core Secret: Why This Team Wins</h3>
        <p>The secret to beating Route 1-3 isn't just spamming Water types. It's the "Three-Layer Defense":</p>
        <ul>
          <li><strong>Layer 1 (The Lock-On):</strong> The Double Absol setup starts damaging Moltres the second it spawns. Because Absol's damage scales with every hit, by the time Moltres reaches the middle, it is taking massive damage per second.</li>
          <li><strong>Layer 2 (The Quick-Sand):</strong> Corsola and Ferrothorn turn the map into quicksand. Moltres spends twice as long walking through the Absol's range because it is permanently slowed.</li>
          <li><strong>Layer 3 (The Execution):</strong> If Moltres somehow survives with 10% HP, it walks into the range of a Buffed Weavile, which delivers the final critical blow.</li>
        </ul>
        
        <h3>📝 Step-by-Step Execution Guide</h3>
        <h4>Deployment:</h4>
        <ul>
          <li>Place Absol and Ditto on the Top Left Mountain.</li>
          <li>Place Corsola and Ferrothorn near the middle junction.</li>
          <li>Place Weavile and Sunflora in the Bottom Right grass patch.</li>
        </ul>
        
        <h4>Targeting:</h4>
        <ul>
          <li>Set Absol and Ditto to "Strong" to ensure they lock onto Moltres immediately.</li>
        </ul>
        
        <h4>The Boss Wave (100):</h4>
        <ul>
          <li>Watch as Moltres gets slowed to a crawl.</li>
          <li>The combined scaling damage from two Absols will likely kill it before it even reaches Weavile.</li>
          <li>If it survives, Weavile will clean up.</li>
        </ul>

        <img src="/images/map-route/1-3-02.png" alt="Route 1-3 Map" class="route-map">
        
        <h3>🗺️ Terrain Analysis</h3>
        <p>Route 1-3 features a mix of water, grass, and mountain terrain, creating three distinct strategic zones.</p>
        
        <h4>Roads & Paths</h4>
        <ul>
          <li><strong>Converging Paths:</strong> Paths converging through middle junction (Long, 2 chokepoints)</li>
          <li><strong>Main Path:</strong> Path from spawn to kill zone (Medium, 1 chokepoint)</li>
        </ul>
        
        <h4>Water Areas</h4>
        <ul>
          <li><strong>Water Areas:</strong> Water areas providing terrain bonuses (Medium strategic value) - Water-type Pokémon gain power bonus</li>
        </ul>
        
        <h4>Mountains & High Ground</h4>
        <ul>
          <li><strong>Mountain (Top Left):</strong> Perfect for long-range snipers and anti-invisible units (Very High strategic value) - +40% range bonus, Perfect for Absol and Noivern, Can lock onto enemies early</li>
          <li><strong>Rocky Cliffs:</strong> Rocky cliffs along paths (High strategic value) - +15% range bonus</li>
        </ul>
        
        <h4>Grass & Vegetation</h4>
        <ul>
          <li><strong>Grass Patches:</strong> Grass patches including Bottom Right kill zone (Medium coverage) - Grass-type Pokémon gain power bonus, Perfect for Sunflora placement</li>
          <li><strong>Scattered Vegetation:</strong> Scattered vegetation patches (Low coverage) - Grass-type Pokémon gain power bonus</li>
        </ul>
        
        <h4>Strategic Chokepoints</h4>
        <ul>
          <li><strong>Choke Point (Middle):</strong> Where paths converge, ideal for slowing enemies (Very High priority)</li>
          <li><strong>Mountain (Top Left):</strong> Perfect for long-range snipers (Very High priority)</li>
          <li><strong>Kill Zone (Bottom Right):</strong> The final stretch where heavy hitters finish off the Boss (Very High priority)</li>
        </ul>
        
        <h3>⚔️ Team Composition</h3>
        <h4>Early Game (Waves 1-50)</h4>
        <p>Start with Noivern and Corsola for AOE damage and early control.</p>
        
        <h4>Mid Game (Waves 51-99)</h4>
        <p>Build up your Boss Killers: Deploy Absol, Ditto, Ferrothorn, and Ampharos. Set up your control zone in the middle.</p>
        
        <h4>Late Game (Wave 100)</h4>
        <p>Deploy the complete "Double Absol Lock-On" team: Absol & Ditto (mountain snipers), Corsola & Ferrothorn & Ampharos (mid-lane control), Weavile & Sunflora (kill zone), Noivern & Honchkrow (support).</p>
      </div>
    `,
  },
  
  {
    id: 'how-to-beat-route-2-1-raikou-wave-100',
    routeNumber: '2-1',
    name: 'PokePath TD Route 2-1 Guide: Ultimate Strategy to Beat Raikou',
    mapImage: '/images/map-route/2-1.png',
    stars: 50,
    starsSecondary: 0,
    difficulty: 'Medium',
    difficultyLevel: 2,
    terrain: ['Field', 'Mountain'],
    description: 'Route 2-1 marks the beginning of the second region. The map features a tricky Crossroads Layout where enemies can take multiple paths, and it culminates in a battle against Raikou, one of the Legendary Beasts. Raikou is notorious for his incredible movement speed, often sprinting past defenses before they can deal lethal damage.',
    totalWaves: 100,
    recommendedTypes: ['Dark', 'Ice', 'Electric', 'Steel'],
    recommendedPokemon: ['Absol', 'Ditto', 'Weavile', 'Corsola', 'Ferrothorn', 'Ampharos', 'Noivern', 'Honchkrow'],
    strategies: ['Control & Burst', 'Slow & Stun', 'High Ground Sniping'],
    playstyle: 'Control/Burst Hybrid',
    tips: [
      'Place Absol on top left mountain for early lock-on and scaling damage',
      'Use Ditto to copy Absol for double scaling damage output',
      'Corsola provides global slow to counter Raikou\'s high speed',
      'Stack Ferrothorn\'s slow with Corsola for maximum control',
      'Ampharos can stun Raikou, giving free hits to your DPS units',
      'Weavile delivers the final burst damage with high crit rate'
    ],
    teamComposition: {
      early: ['Noivern', 'Corsola'],
      mid: ['Absol', 'Ditto', 'Weavile', 'Honchkrow'],
      late: ['Absol', 'Ditto', 'Corsola', 'Ferrothorn', 'Ampharos', 'Weavile', 'Noivern', 'Honchkrow']
    },
    terrainAnalysis: {
      roads: [
        { description: 'Crossroads layout with multiple branching paths', length: 'Very Long', chokepoints: 3 },
        { description: 'Path from spawn to central intersection', length: 'Medium', chokepoints: 1 },
        { description: 'Converging paths to exit', length: 'Medium', chokepoints: 1 }
      ],
      water: [],
      mountains: [
        { description: 'High Ground (Top Left) - Large mountain area perfect for long-range snipers', height: 'Very High', strategicValue: 'Very High', benefits: ['+40% range bonus', 'Can cover spawn point and crossroads', 'Perfect for Absol and Noivern'] },
        { description: 'Rocky outcrops along paths', height: 'Medium', strategicValue: 'High', benefits: ['+20% range bonus'] }
      ],
      grass: [
        { description: 'Grassy fields around crossroads', coverage: 'Medium', benefits: ['Grass-type Pokémon gain power bonus'] }
      ],
      chokepoints: [
        { location: 'The Crossroads (Center)', description: 'Central intersection where enemies split - most critical area', priority: 'Very High' },
        { location: 'Spawn Point (Top Center)', description: 'Where enemies spawn and move down', priority: 'Very High' },
        { location: 'The Exit (Bottom Right)', description: 'All paths converge here - Last Stand zone', priority: 'High' },
        { location: 'High Ground (Top Left)', description: 'Mountain area for long-range units', priority: 'Very High' }
      ]
    },
    seo: {
      title: 'PokePath TD Route 2-1 Guide: Ultimate Strategy to Beat Raikou',
      description: "Can't beat Raikou on Route 2-1? Our comprehensive guide breaks down the map layout, the best Level 100 team composition, and the exact placement to stop the speedy Electric boss.",
      keywords: 'pokepathtd route 2-1, beat raikou pokepathtd, route 2-1 guide, pokepathtd raikou boss, best team route 2-1'
    },
    detailsHtml: `
      <div class="route-guide">
        <p>Route 2-1 marks the beginning of the second region in PokePath TD. While the grassy aesthetics might remind you of Route 1, the difficulty ramps up significantly.</p>
        <p>The map features a tricky Crossroads Layout where enemies can take multiple paths, and it culminates in a battle against Raikou, one of the Legendary Beasts. Raikou is notorious for his incredible movement speed, often sprinting past defenses before they can deal lethal damage.</p>
        <p>In this guide, we will analyze the map, break down Raikou's weaknesses, and provide the exact 10-unit team composition you need to secure victory.</p>
        
        <h3>🗺️ Map Analysis: The Crossroads Trap</h3>
        <p>Understanding the terrain of Route 2-1 is half the battle.</p>
        <ul>
          <li><strong>Spawn Point (Top Center):</strong> Enemies spawn from the top and move down into the central intersection.</li>
          <li><strong>The Crossroads (Center):</strong> This is the most critical area. Enemies will split and weave through this zone. Your towers MUST cover this intersection to be effective.</li>
          <li><strong>The High Ground (Top Left):</strong> There is a large mountain area on the left. This is the perfect spot for long-range units (like Absol or Noivern) to snipe enemies as they spawn.</li>
          <li><strong>The Exit (Bottom Right):</strong> All paths eventually converge here. This is your "Last Stand" zone.</li>
        </ul>

        <img src="/images/map-route/2-1-01.png" alt="Route 2-1 Map" class="route-map">
        
        <h3>⚡ Boss Profile: Raikou (Wave 100)</h3>
        <ul>
          <li><strong>Name:</strong> Raikou</li>
          <li><strong>Type:</strong> Electric</li>
          <li><strong>Stats:</strong> High HP, Very High Speed (1.2).</li>
          <li><strong>Ability:</strong> Unlike some bosses, Raikou isn't just tanky; he is fast. If you don't have Slow or Stun effects, he will run through your map in seconds.</li>
          <li><strong>Weakness:</strong> He is susceptible to physical burst damage and crowd control.</li>
        </ul>

        <img src="/images/map-route/2-1-03.png" alt="Route 2-1 Map" class="route-map">
        
        <h3>🏆 The Best Team Composition (Level 100 Meta)</h3>
        <p>We recommend a "Control & Burst" hybrid team. Since Raikou is fast, we need to slow him down (Control) and then hit him with critical strikes (Burst).</p>
        
        <h4>1. The Mountain Snipers (Left Flank)</h4>
        <ul>
          <li><strong>Absol (Level 100):</strong>
            <ul>
              <li><strong>Placement:</strong> Top Left Mountain.</li>
              <li><strong>Why?</strong> Absol's passive deals increasing damage for every consecutive hit. By placing him on the high ground near the spawn, he can lock onto Raikou early and start stacking damage immediately.</li>
            </ul>
          </li>
          <li><strong>Ditto (Copying Absol):</strong>
            <ul>
              <li><strong>Placement:</strong> Next to Absol.</li>
              <li><strong>Why?</strong> Two Absols are better than one. This doubles your scaling damage output.</li>
            </ul>
          </li>
          <li><strong>Shuckle / Honchkrow:</strong>
            <ul>
              <li><strong>Placement:</strong> Left side.</li>
              <li><strong>Why?</strong> Honchkrow provides Anti-Invisible vision for earlier waves, ensuring no ghost types leak.</li>
            </ul>
          </li>
        </ul>
        
        <h4>2. The "Quicksand" Zone (Center)</h4>
        <p>This is where the magic happens. You need to turn the fast-paced Crossroads into a slow-motion nightmare for Raikou.</p>
        <ul>
          <li><strong>Corsola:</strong>
            <ul>
              <li><strong>Placement:</strong> Center Field.</li>
              <li><strong>Why?</strong> At Level 100, Corsola has a massive 300 Range. Its ring attack applies a global slow, countering Raikou's high speed stat.</li>
            </ul>
          </li>
          <li><strong>Ferrothorn:</strong>
            <ul>
              <li><strong>Placement:</strong> Near the path intersection.</li>
              <li><strong>Why?</strong> Ferrothorn's attacks apply a secondary slow effect. Stacking this with Corsola makes Raikou crawl.</li>
            </ul>
          </li>
          <li><strong>Ampharos:</strong>
            <ul>
              <li><strong>Placement:</strong> Bottom Left / Center.</li>
              <li><strong>Why?</strong> Hard Stun. Ampharos has a chance to Paralyze the target. A lucky stun in the middle of the map allows your Absol and Weavile to get free hits.</li>
            </ul>
          </li>
        </ul>
        
        <h4>3. The Execution Squad (Right Flank)</h4>
        <p>If Raikou survives the slow zone, he enters the kill zone on the right.</p>
        <ul>
          <li><strong>Weavile:</strong>
            <ul>
              <li><strong>Placement:</strong> Center Right.</li>
              <li><strong>Why?</strong> Weavile is the DPS King. With a 65% Crit Rate and Double Crit Damage, it can delete Raikou's remaining HP bar in seconds.</li>
            </ul>
          </li>
          <li><strong>Noivern:</strong>
            <ul>
              <li><strong>Placement:</strong> Right side.</li>
              <li><strong>Why?</strong> Good AOE coverage for cleaning up any minions that accompany the boss.</li>
            </ul>
          </li>
        </ul>

        <img src="/images/map-route/2-1-02.png" alt="Route 2-1 Map" class="route-map">
        
        <h3>📝 Step-by-Step Victory Guide</h3>
        <h4>Phase 1: Early Game (Waves 1-50)</h4>
        <p>Focus on placing Noivern and Corsola first. Their AOE damage will clear the swarms of weak enemies easily.</p>
        <p>Place Honchkrow before Wave 40 to counter invisible enemies.</p>
        
        <h4>Phase 2: Mid Game (Waves 51-99)</h4>
        <p>Build up your Boss Killers. Deploy Absol, Ditto, and Weavile.</p>
        <p>Upgrade them as much as possible. Level 100 is ideal, but Level 50+ works too.</p>
        
        <h4>Phase 3: The Boss Fight (Wave 100)</h4>
        <ul>
          <li><strong>Raikou Spawns:</strong> He will move fast. Don't panic.</li>
          <li><strong>The Lock-On:</strong> Your Absol duo on the mountain will start hitting him. Watch his HP bar turn red.</li>
          <li><strong>The Slow:</strong> As he hits the center, Corsola and Ferrothorn will slow him down.</li>
          <li><strong>The Kill:</strong> Even if he passes the center, Weavile is waiting on the right to deliver the final blow.</li>
        </ul>
        
        <h3>❓ FAQ</h3>
        <p><strong>Q: Can I use Ground types against Raikou?</strong></p>
        <p>A: Yes! Excadrill or Flygon are excellent choices because Ground is super effective against Electric. However, our Absol/Weavile strategy relies on raw Neutral DPS, which is often more consistent if you have high levels.</p>
        
        <p><strong>Q: What if I don't have a Level 100 Ditto?</strong></p>
        <p>A: You can simply place another high-DPS unit like Tyranitar or Garchomp (if available) or another Absol. Ditto is just the most efficient way to duplicate your strongest unit.</p>
        
        <h3>🗺️ Terrain Analysis</h3>
        <p>Route 2-1 features a tricky Crossroads Layout where enemies can take multiple paths, creating strategic challenges and opportunities.</p>
        
        <h4>Roads & Paths</h4>
        <ul>
          <li><strong>Crossroads Layout:</strong> Crossroads layout with multiple branching paths (Very Long, 3 chokepoints)</li>
          <li><strong>Spawn Path:</strong> Path from spawn to central intersection (Medium, 1 chokepoint)</li>
          <li><strong>Exit Path:</strong> Converging paths to exit (Medium, 1 chokepoint)</li>
        </ul>
        
        <h4>Mountains & High Ground</h4>
        <ul>
          <li><strong>High Ground (Top Left):</strong> Large mountain area perfect for long-range snipers (Very High strategic value) - +40% range bonus, Can cover spawn point and crossroads, Perfect for Absol and Noivern</li>
          <li><strong>Rocky Outcrops:</strong> Rocky outcrops along paths (High strategic value) - +20% range bonus</li>
        </ul>
        
        <h4>Grass & Vegetation</h4>
        <ul>
          <li><strong>Grassy Fields:</strong> Grassy fields around crossroads (Medium coverage) - Grass-type Pokémon gain power bonus</li>
        </ul>
        
        <h4>Strategic Chokepoints</h4>
        <ul>
          <li><strong>The Crossroads (Center):</strong> Central intersection where enemies split - most critical area (Very High priority)</li>
          <li><strong>Spawn Point (Top Center):</strong> Where enemies spawn and move down (Very High priority)</li>
          <li><strong>The Exit (Bottom Right):</strong> All paths converge here - Last Stand zone (High priority)</li>
          <li><strong>High Ground (Top Left):</strong> Mountain area for long-range units (Very High priority)</li>
        </ul>
        
        <h3>⚔️ Team Composition</h3>
        <h4>Early Game (Waves 1-50)</h4>
        <p>Focus on placing Noivern and Corsola first for AOE damage. Place Honchkrow before Wave 40 to counter invisible enemies.</p>
        
        <h4>Mid Game (Waves 51-99)</h4>
        <p>Build up your Boss Killers: Deploy Absol, Ditto, and Weavile. Upgrade them as much as possible (Level 100 is ideal).</p>
        
        <h4>Late Game (Wave 100)</h4>
        <p>Deploy the complete "Control & Burst" team: Absol & Ditto (mountain snipers), Corsola & Ferrothorn & Ampharos (control zone), Weavile & Noivern (execution squad), Honchkrow (anti-invisible).</p>
      </div>
    `,
    
  },
  
  {
    id: 'how-to-beat-route-2-2-entei',
    routeNumber: '2-2',
    name: ' PokePath TD Route 2-2 Guide: How to Beat Entei (Armor Break Strategy)',
    mapImage: '/images/map-route/2-2.png',
    stars: 100,
    starsSecondary: 0,
    difficulty: 'Medium',
    difficultyLevel: 2,
    terrain: ['Field', 'Water', 'Grass'],
    description: 'Route 2-2 introduces one of the most punishing mechanics in the game: Extreme Armor. The final boss, Entei, arrives at Wave 100 with a staggering 23,500 Armor. This route features a central body of water surrounded by a U-shaped path, perfect for scaling damage strategies.',
    totalWaves: 100,
    recommendedTypes: ['Water', 'Grass'],
    recommendedPokemon: ['Samurott', 'Corsola', 'Sunflora', 'Whiscash', 'Lapras'],
    strategies: ['Scaling Damage', 'Armor Breaking', 'Terrain Synergy'],
    playstyle: 'Scaling/Ramping',
    tips: [
      'Samurott\'s passive scales damage with consecutive hits - perfect for high-armor bosses',
      'Place Water units in the Central Lake for maximum uptime',
      'Corsola provides global slow to keep Entei in range',
      'Sunflora\'s damage buff is crucial for breaking armor thresholds',
      'Entei moves slowly (0.8 Speed), giving you time to stack damage'
    ],
    teamComposition: {
      early: ['Maractus', 'Honchkrow'],
      mid: ['Whiscash', 'Lapras', 'Corsola'],
      late: ['Samurott', 'Corsola', 'Sunflora', 'Whiscash', 'Lapras']
    },
    terrainAnalysis: {
      roads: [
        { description: 'U-shaped path surrounding central lake', length: 'Very Long', chokepoints: 3 },
        { description: 'Path around water body', length: 'Long', chokepoints: 2 }
      ],
      water: [
        { description: 'Central Lake - most valuable real estate', type: 'Lake', strategicValue: 'Very High', benefits: ['Water-type Pokémon gain 2x power bonus', 'Nearly 100% uptime on enemies'] },
        { description: 'Water surrounding the path', type: 'Lake', strategicValue: 'High', benefits: ['Water-type Pokémon gain power bonus'] }
      ],
      mountains: [
        { description: 'Mountain peaks overlooking the lake', type: 'Peak', strategicValue: 'High', benefits: ['+30% range bonus', 'Can cover entire lake area'] }
      ],
      grass: [
        { description: 'Grass areas around the lake', coverage: 'Medium', benefits: ['Grass-type Pokémon gain power bonus'] }
      ],
      chokepoints: [
        { location: 'Central Lake Loop', description: 'U-shaped path around central lake - perfect for scaling damage', priority: 'Very High' },
        { location: 'Lake Entrance', description: 'Where enemies enter the lake area', priority: 'High' },
        { location: 'Path Convergence', description: 'Multiple paths meet near lake', priority: 'High' }
      ]
    },
    seo: {
      title: 'PokePath TD Route 2-2 Guide: How to Beat Entei (Armor Break Strategy)',
      description: 'Stuck on Entei? Learn the "Armor Break" strategy to beat Route 2-2. We explain the mechanics of the Armor mechanic and show you exactly how to build a team to defeat Entei.',
      keywords: 'pokepathtd route 2-2, beat entei pokepathtd, route 2-2 guide, pokepathtd entei boss, best team route 2-2'
    },
    detailsHtml: `
      <div class="route-guide">
        <p>Route 2-2 introduces one of the most punishing mechanics in the game: Extreme Armor. The final boss, Entei, arrives at Wave 100 with a staggering 23,500 Armor.</p>
        <p>For many players, this is a wall. You might see your powerful towers dealing "1 damage" or "0 damage" per hit. This guide will explain the Armor mechanic and show you exactly how to build a team to defeat Entei.</p>
        
        <h3>🛡️ Understanding the Mechanics: Armor vs. Power</h3>
        <p>To beat Entei, you must understand how damage is calculated.</p>
        <ul>
          <li><strong>The Rule:</strong> If Unit Power < Enemy Armor, damage is reduced significantly (often to 1).</li>
          <li><strong>The Problem:</strong> Most rapid-fire towers (like basic Weavile or Maractus) rely on Speed, not raw Power per hit. They will tickle Entei.</li>
          <li><strong>The Solution:</strong> You need towers with High Single-Shot Power or Scaling Damage mechanisms.</li>
        </ul>

        <img src="/images/map-route/2-2-03.png" alt="Route 2-2 Map" class="route-map">
        
        <h3>🗺️ Map Strategy: The "Death Loop"</h3>
        <p>Route 2-2 features a central body of water surrounded by a U-shaped path.</p>
        <ul>
          <li><strong>The Center Lake:</strong> This is the most valuable real estate. Units placed here have nearly 100% uptime on enemies.</li>
          <li><strong>Strategic Advantage:</strong> Because Entei is slow (0.8 Speed), he spends a long time walking around this lake. This is the perfect setup for Ramping Damage strategies.</li>
        </ul>
        
        <h3>🏆 The Best Team: "The Scaling Water Squad"</h3>
        <p>We utilize the map's water terrain to boost our Water-types, who are naturally good at dealing high damage.</p>

        <img src="/images/map-route/2-2-02.png" alt="Route 2-2 Map" class="route-map">
        
        <h4>1. The Boss Killer: Samurott (Level 100)</h4>
        <ul>
          <li><strong>Role:</strong> Main DPS / Armor Breaker.</li>
          <li><strong>The Secret:</strong> Samurott's passive ability increases damage for every consecutive hit on the same target.</li>
          <li><strong>Why it works:</strong> Entei has high HP and Armor. He survives long enough for Samurott to stack this passive 10, 20, or 30 times. Eventually, Samurott's damage scales higher than 23,500, ignoring the armor completely.</li>
        </ul>
        
        <h4>2. The Controller: Corsola</h4>
        <ul>
          <li><strong>Role:</strong> Global Slow.</li>
          <li><strong>Why it works:</strong> Corsola doesn't need to do damage. Its job is to keep Entei in Samurott's range. A Level 100 Corsola covers the entire lake loop, ensuring Entei is permanently slowed.</li>
        </ul>
        
        <h4>3. The Buffer: Sunflora</h4>
        <ul>
          <li><strong>Role:</strong> Damage Amplifier.</li>
          <li><strong>Why it works:</strong> Sunflora adds +20% Damage to nearby units. When you are trying to break a specific Armor Threshold (23,500), that extra 20% is mathematically massive. It can be the difference between doing 0 damage and 5,000 damage.</li>
        </ul>
        
        <h4>4. Alternative Options (If you don't have Samurott)</h4>
        <ul>
          <li><strong>Clawitzer:</strong> Has the highest base Power in the game (1950+). Critical hits double this damage, allowing it to punch through armor naturally.</li>
          <li><strong>Excadrill:</strong> Its passive deals Double Damage to Armor. This effectively halves Entei's defensive stats against Excadrill.</li>
          <li><strong>Poison/Burn:</strong> Status effects like Poison (Weezing) deal percentage HP damage and ignore armor entirely.</li>
        </ul>
        
        <h3>📝 Step-by-Step Victory</h3>
        <ol>
          <li><strong>Deployment:</strong> Fill the Central Lake with your strongest Water units (Samurott, Whiscash, Lapras).</li>
          <li><strong>Buffing:</strong> Place Sunflora on the shore closest to your Samurott to provide the damage aura.</li>
          <li><strong>The Fight:</strong>
            <ul>
              <li>Entei spawns. Your Honchkrow (on the mountain) and Maractus clear the minions.</li>
              <li>Entei enters the loop. Corsola slows him.</li>
              <li>Samurott begins attacking. The first few hits might do low damage, but watch the red numbers grow larger as the passive stacks up.</li>
              <li>By the time Entei completes the loop, he should be defeated.</li>
            </ul>
          </li>
        </ol>
        
        <h3>🗺️ Terrain Analysis</h3>
        <p>Route 2-2 features a central body of water surrounded by a U-shaped path, creating the perfect "Death Loop" for scaling damage strategies.</p>
        
        <h4>Roads & Paths</h4>
        <ul>
          <li><strong>U-shaped Path:</strong> U-shaped path surrounding central lake (Very Long, 3 chokepoints)</li>
          <li><strong>Lake Path:</strong> Path around water body (Long, 2 chokepoints)</li>
        </ul>
        
        <h4>Water Areas</h4>
        <ul>
          <li><strong>Central Lake:</strong> Most valuable real estate (Very High strategic value) - Water-type Pokémon gain 2x power bonus, Nearly 100% uptime on enemies</li>
          <li><strong>Surrounding Water:</strong> Water surrounding the path (High strategic value) - Water-type Pokémon gain power bonus</li>
        </ul>
        
        <h4>Mountains & High Ground</h4>
        <ul>
          <li><strong>Mountain Peaks:</strong> Mountain peaks overlooking the lake (High strategic value) - +30% range bonus, Can cover entire lake area</li>
        </ul>
        
        <h4>Grass & Vegetation</h4>
        <ul>
          <li><strong>Grass Areas:</strong> Grass areas around the lake (Medium coverage) - Grass-type Pokémon gain power bonus</li>
        </ul>
        
        <h4>Strategic Chokepoints</h4>
        <ul>
          <li><strong>Central Lake Loop:</strong> U-shaped path around central lake - perfect for scaling damage (Very High priority)</li>
          <li><strong>Lake Entrance:</strong> Where enemies enter the lake area (High priority)</li>
          <li><strong>Path Convergence:</strong> Multiple paths meet near lake (High priority)</li>
        </ul>
        
        <h3>⚔️ Team Composition</h3>
        <h4>Early Game (Waves 1-40)</h4>
        <p>Deploy Maractus for wave clearing and Honchkrow on mountains for anti-invisible coverage.</p>
        
        <h4>Mid Game (Waves 41-99)</h4>
        <p>Transition to Water-type units: Whiscash, Lapras, and Corsola. Begin setting up your scaling damage core.</p>
        
        <h4>Late Game (Wave 100)</h4>
        <p>Deploy the "Scaling Water Squad": Samurott (boss killer), Corsola (controller), Sunflora (buffer), Whiscash & Lapras (support DPS). Place all Water units in the Central Lake for maximum uptime.</p>
      </div>
    `,
  },
  
  {
    id: 'how-to-beat-route-2-3-suicune-wave-100',
    routeNumber: '2-3',
    name: 'PokePath TD Route 2-3 Ultimate Guide: Beating Suicune with Absol',
    mapImage: '/images/map-route/2-3.png',
    stars: 500,
    starsSecondary: 0,
    difficulty: 'Hard',
    difficultyLevel: 3,
    terrain: ['Field', 'Mountain'],
    description: 'Challenging mountain route with complex paths. The final boss Suicune requires a unique Absol scaling strategy due to extreme speed.',
    totalWaves: 100,
    recommendedTypes: ['Dark', 'Grass', 'Flying', 'Electric'],
    recommendedPokemon: ['Absol', 'Ditto', 'Corsola', 'Maractus', 'Sunflora', 'Staraptor', 'Hawlucha', 'Honchkrow'],
    strategies: ['Absol Swap', 'Scaling Damage', 'Speed Control'],
    playstyle: 'Tactical',
    tips: [
      'Use Swap Strategy: AOE team for waves 1-99, then switch to Absol team for Suicune',
      'Absol is essential for Wave 100 - consecutive hits increase damage exponentially',
      'Place Absol in the most central position to maximize uptime on Suicune',
      'Use Ditto to copy Absol for double scaling damage',
      'Corsola provides crucial slow (300 range) to reduce Suicune\'s 1.5 speed to 0.8',
      'Pause at Wave 100 to perform the swap - sell Sunflora, buy Absol, configure Ditto'
    ],
    teamComposition: {
      early: ['Maractus', 'Honchkrow'],
      mid: ['Maractus', 'Sunflora', 'Staraptor', 'Hawlucha', 'Corsola', 'Ditto'],
      late: ['Absol', 'Ditto', 'Corsola']
    },
    terrainAnalysis: {
      roads: [
        { description: 'Complex mountain path with multiple branches', length: 'Very Long', chokepoints: 5 },
        { description: 'Underground tunnel path', length: 'Medium', chokepoints: 1 }
      ],
      water: [],
      mountains: [
        { description: 'Towering peaks with multiple elevation levels', height: 'Very High', strategicValue: 'Very High', benefits: ['+50% range bonus', 'Can cover entire path sections'] },
        { description: 'Rocky cliffs and ridges', height: 'High', strategicValue: 'High', benefits: ['+30% range bonus'] },
        { description: 'Mountain plateaus', height: 'Medium', strategicValue: 'Medium', benefits: ['+15% range bonus'] }
      ],
      grass: [],
      chokepoints: [
        { location: 'Mountain peak', description: 'Highest point with panoramic view', priority: 'Very High' },
        { location: 'Path intersection', description: 'Multiple paths converge', priority: 'Very High' },
        { location: 'Z-Turn choke point', description: 'Turn between middle and bottom path where Suicune is most vulnerable', priority: 'Very High' },
        { location: 'Tunnel entrance', description: 'Narrow tunnel entrance', priority: 'High' },
        { location: 'Cliff edge turn', description: 'Sharp turn along cliff', priority: 'High' }
      ]
    },
    seo: {
      title: 'PokePath TD Route 2-3 Ultimate Guide: Beating Suicune with Absol',
      description: 'Route 2-3 features the fastest boss in the game: Suicune. Learn the detailed Level 100 strategy, the "Absol Swap" tactic, and how to control the Z-turn layout.',
      keywords: 'pokepathtd route 2-3, beat suicune pokepathtd, absol strategy, route 2-3 guide, best team route 2-3'
    },
    detailsHtml: `
      <div class="route-guide">
        <p>Welcome to the final challenge of Region 2. Route 2-3 is a deceptive map. It looks like a simple winding path, but the final boss, Suicune, is a speed demon that has ended countless runs.</p>
        <p>In this guide, we will break down the map's unique geography, analyze Suicune's stats, and provide a step-by-step walkthrough of the "Absol Swap Strategy" that guarantees victory.</p>
        
        <h3>📊 Boss Profile: Suicune (Wave 100)</h3>
        <p>Before we build our team, we must understand our enemy.</p>
        <ul>
          <li><strong>Name:</strong> Suicune (The Aurora Pokémon)</li>
          <li><strong>Type:</strong> Water</li>
          <li><strong>Speed:</strong> 1.5 (Extremely Fast). This is the highest speed stat you will face so far.</li>
          <li><strong>Health:</strong> 69,000 HP.</li>
          <li><strong>Armor:</strong> 0.</li>
          <li><strong>The Threat:</strong> Suicune moves so fast that most "high damage, slow fire rate" towers (like Rampardos) will miss him entirely or only get one shot off.</li>
        </ul>

        <img src="/images/map-route/2-3-03.png" alt="Route 2-3 Map" class="route-map">
        
        <h3>🗺️ Map Strategy: The "Z-Turn" Trap</h3>
        <p>Route 2-3 features a Z-shaped path that winds through rocky terrain.</p>
        <ul>
          <li><strong>The High Ground (Perimeter):</strong> The map is surrounded by mountain tiles. This is excellent for Flying-types like Honchkrow, Noivern, and Xatu. They can provide global vision and damage.</li>
          <li><strong>The Central Platform (Grass):</strong> This is the heart of your defense. Units placed in the center grass patch can hit enemies on the top path (Wave 1-50), the middle turn, and the bottom path (Wave 51-100).</li>
          <li><strong>The Choke Point:</strong> The turn between the middle and bottom path is where Suicune is most vulnerable.</li>
        </ul>
        
        <h3>🏆 The Best Team: "The Absol Swap"</h3>
        <p>Our strategy involves using a standard AOE team for waves 1-99, and then making a tactical swap for Wave 100.</p>
        
        <h4>Phase 1: Wave Clearing Team (Waves 1-99)</h4>
        <p>For the majority of the level, you need Area of Effect (AOE) damage to clear swarms.</p>
        <ul>
          <li><strong>Sunflora (Center):</strong> Provides +20% Damage Aura to everyone in the middle.</li>
          <li><strong>Maractus (Center Grass):</strong> Your main wave clear. Its Grass-type attacks are super effective against the many Water types on this route.</li>
          <li><strong>Staraptor / Hawlucha:</strong> Good physical damage dealers to clean up leaks.</li>
        </ul>
        
        <h4>Phase 2: The Boss Killer Team (Wave 100)</h4>
        <p>When Suicune appears, AOE damage is useless. We need focused, scaling single-target damage.</p>
        
        <h4>Absol (Level 100)</h4>
        <ul>
          <li><strong>The Mechanic:</strong> Absol's passive ability is "Consecutive hits on the same target increase damage."</li>
          <li><strong>Why it counters Suicune:</strong> Suicune has 0 Armor. This means Absol's damage isn't mitigated. As Absol keeps hitting Suicune, the damage ramps up from 200 -> 400 -> 800 -> 1600. It becomes an exponential damage curve.</li>
        </ul>
        
        <h4>Ditto (Copying Absol)</h4>
        <ul>
          <li><strong>Strategy:</strong> Place Ditto next to Absol. Now you have TWO units ramping up damage. This melts Suicune twice as fast.</li>
        </ul>
        
        <h4>Phase 3: Speed Control</h4>
        <p>Damage means nothing if the target runs away.</p>
        <ul>
          <li><strong>Corsola (Level 100):</strong>
            <ul>
              <li><strong>Why?</strong> With a 300 Range, Corsola's Slow Aura covers the entire Z-Turn. It reduces Suicune's 1.5 Speed to roughly 0.8, effectively doubling the time your Absols have to attack.</li>
            </ul>
          </li>
        </ul>

        <img src="/images/map-route/2-3-02.png" alt="Route 2-3 Map" class="route-map">
        
        <h3>📝 Detailed Walkthrough</h3>
        
        <h4>Early Game (Waves 1-40)</h4>
        <ul>
          <li>Deploy Maractus in the center grass.</li>
          <li>Deploy Honchkrow on the top left mountain to catch invisible units.</li>
          <li>Start building your Corsola for slow support.</li>
        </ul>
        
        <h4>Mid Game (Waves 41-99)</h4>
        <ul>
          <li>Add Sunflora to buff your Maractus.</li>
          <li>Add Staraptor or Hawlucha for extra DPS.</li>
          <li>Ensure your Ditto is leveled up and ready.</li>
        </ul>
        
        <h4>The Boss Fight (Wave 100)</h4>
        <ol>
          <li><strong>PAUSE</strong> the game as soon as the Wave 100 warning appears.</li>
          <li><strong>SELL</strong> Sunflora. You need the slot and the money.</li>
          <li><strong>BUY</strong> Absol. Place it in the most central position possible.</li>
          <li><strong>CONFIGURE</strong> Ditto. Make sure Ditto is transformed into Absol.</li>
          <li><strong>UNPAUSE.</strong></li>
          <li>Watch as Suicune enters the map.</li>
          <li>Corsola applies the slow immediately.</li>
          <li>Double Absols lock on. The first few hits will be small, but watch the red damage numbers grow huge as Suicune rounds the first corner.</li>
          <li><strong>Victory!</strong></li>
        </ol>

        <img src="/images/map-route/2-3-01.png" alt="Route 2-3 Map" class="route-map">
        
        <h3>❓ Alternative Strategies</h3>
        <p><strong>"I don't have Absol yet. What can I use?"</strong></p>
        <p>If you lack Absol, you can try:</p>
        <ul>
          <li><strong>Electric Types:</strong> Use Manectric or Ampharos. Electric is super effective against Water (Suicune). A Level 100 Manectric deals massive damage.</li>
          <li><strong>Grass Burst:</strong> Keep Sunflora and stack multiple Maractus or Sceptile. Grass is also super effective.</li>
          <li><strong>Stun Lock:</strong> Use Ampharos and Lapras to try and permanently stun Suicune so he can't move.</li>
        </ul>
        
        <h3>🗺️ Terrain Analysis</h3>
        <p>Route 2-3 features a Z-shaped path winding through rocky terrain with strategic high ground positions.</p>
        
        <h4>Roads & Paths</h4>
        <ul>
          <li><strong>Main Path:</strong> Complex mountain path with multiple branches (Very Long, 5 chokepoints)</li>
          <li><strong>Underground Path:</strong> Underground tunnel path (Medium, 1 chokepoint)</li>
        </ul>
        
        <h4>Mountains & High Ground</h4>
        <ul>
          <li><strong>Towering Peaks:</strong> Towering peaks with multiple elevation levels (Very High strategic value) - +50% range bonus, can cover entire path sections</li>
          <li><strong>Rocky Cliffs:</strong> Rocky cliffs and ridges (High strategic value) - +30% range bonus</li>
          <li><strong>Mountain Plateaus:</strong> Mountain plateaus (Medium strategic value) - +15% range bonus</li>
        </ul>
        
        <h4>Strategic Chokepoints</h4>
        <ul>
          <li><strong>Mountain Peak:</strong> Highest point with panoramic view (Very High priority)</li>
          <li><strong>Path Intersection:</strong> Multiple paths converge (Very High priority)</li>
          <li><strong>Z-Turn Choke Point:</strong> Turn between middle and bottom path where Suicune is most vulnerable (Very High priority)</li>
          <li><strong>Tunnel Entrance:</strong> Narrow tunnel entrance (High priority)</li>
          <li><strong>Cliff Edge Turn:</strong> Sharp turn along cliff (High priority)</li>
        </ul>
        
        <h3>⚔️ Team Composition</h3>
        <h4>Early Game (Waves 1-40)</h4>
        <p>Deploy Maractus in center grass and Honchkrow on mountains for anti-invisible coverage.</p>
        
        <h4>Mid Game (Waves 41-99)</h4>
        <p>Add Sunflora for damage buff, Staraptor/Hawlucha for DPS, and build Corsola and Ditto for boss fight preparation.</p>
        
        <h4>Late Game (Wave 100)</h4>
        <p>Swap to Absol team: Absol (core scaling damage), Ditto (copy Absol), and Corsola (speed control). Sell Sunflora to make room.</p>
      </div>
    `,
  },
  
  {
    id: 'how-to-beat-route-3-1-regirock-wave-100-guide',
    routeNumber: '3-1',
    name: 'PokePath TD Route 3-1 Guide: How to Beat Regirock (1 Million Armor)',
    mapImage: '/images/map-route/3-1.png',
    stars: 200,
    starsSecondary: 0,
    difficulty: 'Hard',
    difficultyLevel: 3,
    terrain: ['Field', 'Grass'],
    description: 'Advanced route with dense vegetation. The final boss Regirock requires a unique Poison strategy due to nearly 1 million armor.',
    totalWaves: 100,
    recommendedTypes: ['Poison', 'Fire', 'Flying', 'Grass'],
    recommendedPokemon: ['Weezing', 'Arbok', 'Swalot', 'Ariados', 'Ditto', 'Maractus', 'Hawlucha', 'Staraptor', 'Honchkrow'],
    strategies: ['Toxic Swap', 'Poison Build', 'Swap Strategy'],
    playstyle: 'Tactical',
    tips: [
      'Use Swap Strategy: Standard team for waves 1-99, then switch to Poison team for Regirock',
      'Poison damage ignores armor - essential for defeating Regirock\'s 985,714 armor',
      'Weezing is the best poison applicator - place in center to maximize uptime',
      'Use Ditto to copy Weezing for double poison clouds',
      'Keep Honchkrow for anti-invisible on mountains during wave clear',
      'Pause at Wave 100 to perform the Toxic Swap - sell physical dealers, buy Poison units'
    ],
    teamComposition: {
      early: ['Maractus', 'Hawlucha', 'Staraptor'],
      mid: ['Maractus', 'Hawlucha', 'Staraptor', 'Honchkrow'],
      late: ['Weezing', 'Arbok', 'Swalot', 'Ariados', 'Ditto', 'Honchkrow']
    },
    terrainAnalysis: {
      roads: [
        { description: 'Path through dense forest', length: 'Long', chokepoints: 3 },
        { description: 'Clearing path with better visibility', length: 'Medium', chokepoints: 1 }
      ],
      water: [],
      mountains: [],
      grass: [
        { description: 'Dense forest covering entire map', coverage: 'Very High', benefits: ['Grass-type Pokémon gain 2x power bonus', 'Enemies move slower in dense vegetation'] },
        { description: 'Thick undergrowth along paths', coverage: 'High', benefits: ['Grass-type Pokémon gain power bonus'] }
      ],
      chokepoints: [
        { location: 'Forest clearing', description: 'Open area in dense forest', priority: 'Very High' },
        { location: 'Path narrowing', description: 'Path narrows between trees', priority: 'High' }
      ]
    },
    seo: {
      title: 'PokePath TD Route 3-1 Guide: How to Beat Regirock (1 Million Armor)',
      description: 'Regirock is immune to physical damage. Learn the "Poison Swap Strategy" to defeat the Route 3-1 Boss using Weezing and Arbok.',
      keywords: 'pokepathtd route 3-1, beat regirock pokepathtd, route 3-1 guide, pokepathtd regirock boss, best team route 3-1'
    },
    detailsHtml: `
      <div class="route-guide">
        <p>Route 3-1 introduces the hardest "Stat Check" in the game so far. The final boss, Regirock, is a walking fortress.</p>
        <p>With nearly 1,000,000 Armor, Regirock is mathematically impossible to kill with standard physical towers like Weavile or Absol. Their attacks simply bounce off.</p>
        <p>To win, you must understand the Status Effect System and perform a complete team swap at Wave 100.</p>
        
        <h3>📊 Boss Profile: Regirock</h3>
        <ul>
          <li><strong>Name:</strong> Regirock (The Rock Peak Pokémon)</li>
          <li><strong>Type:</strong> Rock</li>
          <li><strong>Armor:</strong> 985,714. (This is not a typo).</li>
          <li><strong>Weakness:</strong> True Damage (Poison / Burn).</li>
          <li><strong>Immunity:</strong> Highly resistant to Stun and Slow. Do not rely on Corsola here.</li>
        </ul>

        <img src="/images/map-route/3-1-03.png" alt="Route 3-1 Map" class="route-map">
        
        <h3>🏆 The Strategy: The "Toxic" Swap</h3>
        <p>This strategy requires you to play two different games.</p>
        <ul>
          <li><strong>The Clear:</strong> A standard team to beat Waves 1-99.</li>
          <li><strong>The Kill:</strong> A specialized team just for Wave 100.</li>
        </ul>
        
        <h4>Phase 1: Waves 1-99 (AOE Clear)</h4>
        <p>For the first 99 waves, use your standard high-level carry units.</p>
        <ul>
          <li><strong>Maractus (Center):</strong> Clears Grass/Water types easily.</li>
          <li><strong>Hawlucha / Staraptor:</strong> Good physical damage for cleanup.</li>
          <li><strong>Honchkrow:</strong> Essential for anti-invisible on the mountains.</li>
        </ul>
        
        <h4>Phase 2: Wave 100 (The Poison Swap)</h4>
        <p>As soon as Wave 100 starts, <strong>PAUSE the game</strong>. Regirock's armor makes your current team useless.</p>
        <ol>
          <li><strong>SELL</strong> your physical damage dealers (Maractus, Hawlucha, Absol, etc.).</li>
          <li><strong>KEEP</strong> your Honchkrow (for safety) and Ditto.</li>
          <li><strong>BUY</strong> every Poison-type unit you have.</li>
        </ol>
        
        <h4>The Poison Dream Team</h4>
        <p>Place these units in the center to maximize their uptime on Regirock:</p>
        <ul>
          <li><strong>Weezing:</strong> The best poison applicator. Spreads poison clouds.</li>
          <li><strong>Arbok:</strong> Fast attacks to stack poison quickly.</li>
          <li><strong>Swalot:</strong> Tanky and applies consistent DOT (Damage Over Time).</li>
          <li><strong>Ariados:</strong> Adds another layer of poison.</li>
          <li><strong>Ditto:</strong> Copy Weezing to double the poison clouds.</li>
        </ul>

        <img src="/images/map-route/3-1-02.png" alt="Route 3-1 Map" class="route-map">
        
        <h3>🧪 Why This Works: The Math of Poison</h3>
        <ul>
          <li>In PokePath TD, Poison deals damage equal to <strong>0.1% of the Enemy's Max HP per tick</strong>.</li>
          <li><strong>Crucially:</strong> Poison damage <strong>IGNORES ARMOR</strong>.</li>
          <li><strong>Scaling:</strong> The more poison stacks you apply, the higher the damage per second.</li>
          <li><strong>Result:</strong> Regirock's 1 Million Armor is bypassed entirely. His massive HP pool actually works against him, as % damage hits harder on high HP targets.</li>
        </ul>
        
        <h3>📝 Step-by-Step Walkthrough</h3>
        <ol>
          <li><strong>Build Economy:</strong> Use Persian/Meowth in early waves to farm gold if needed, though Level 100 players won't need to.</li>
          <li><strong>Survive:</strong> Clear to Wave 99.</li>
          <li><strong>Swap:</strong> Perform the "Toxic Swap" at Wave 100.</li>
          <li><strong>Watch:</strong> You will see purple damage numbers. At first, they are small. But within seconds, Regirock's HP will start draining rapidly.</li>
          <li><strong>Victory:</strong> He will crumble before reaching the end of the Z-turn.</li>
        </ol>
        
        <h3>🗺️ Terrain Analysis</h3>
        <p>Route 3-1 features dense vegetation covering the entire map, making Grass-type Pokémon highly effective for wave clearing.</p>
        
        <h4>Roads & Paths</h4>
        <ul>
          <li><strong>Main Path:</strong> Path through dense forest (Long, 3 chokepoints)</li>
          <li><strong>Clearing Path:</strong> Clearing path with better visibility (Medium, 1 chokepoint)</li>
        </ul>
        
        <h4>Grass & Vegetation</h4>
        <ul>
          <li><strong>Dense Forest:</strong> Covering entire map (Very High coverage) - Grass-type Pokémon gain 2x power bonus, enemies move slower in dense vegetation</li>
          <li><strong>Thick Undergrowth:</strong> Along paths (High coverage) - Grass-type Pokémon gain power bonus</li>
        </ul>
        
        <h4>Strategic Chokepoints</h4>
        <ul>
          <li><strong>Forest Clearing:</strong> Open area in dense forest (Very High priority)</li>
          <li><strong>Path Narrowing:</strong> Path narrows between trees (High priority)</li>
        </ul>
        
        <h3>⚔️ Team Composition</h3>
        <h4>Early & Mid Game (Waves 1-99)</h4>
        <p>Use Maractus (center), Hawlucha/Staraptor (physical damage), and Honchkrow (anti-invisible) to clear waves efficiently.</p>

        <img src="/images/map-route/3-1-01.png" alt="Route 3-1 Map" class="route-map">
        
        <h4>Late Game (Wave 100)</h4>
        <p>Swap to the Poison Dream Team: Weezing (core), Arbok, Swalot, Ariados, Ditto (copy Weezing), and keep Honchkrow for safety.</p>
      </div>
    `
  },
  
  {
    id: 'how-to-beat-route-3-2-regice-dewgong-strategy',
    routeNumber: '3-2',
    name: 'PokePath TD Route 3-2 Guide: The Dewgong Stun-Lock Strategy',
    mapImage: '/images/map-route/3-2.png',
    stars: 400,
    starsSecondary: 0,
    difficulty: 'Hard',
    difficultyLevel: 3,
    terrain: ['Field', 'Grass', 'Mountain'],
    description: 'Mixed terrain route with strategic chokepoints. The final boss Regice requires a unique Dewgong control strategy.',
    totalWaves: 100,
    recommendedTypes: ['Ice', 'Water', 'Ground', 'Grass'],
    recommendedPokemon: ['Dewgong', 'Ditto', 'Cryogonal', 'Weavile', 'Whiscash', 'Corsola', 'Maractus', 'Sceptile', 'Tangrowth'],
    strategies: ['Dewgong Solo-Control', 'Ice Breaker', 'Swap Strategy'],
    playstyle: 'Tactical',
    tips: [
      'Use Swap Strategy: Grass team for waves 1-99, then switch to Ice Breaker team for Regice',
      'Dewgong is essential for Wave 100 - 30% chance to Paralyze Regice for 2 seconds',
      'Place Dewgong in the most central position for maximum coverage',
      'Use Ditto to transform into Dewgong for double stun chance (Perma-Stun)',
      'Cryogonal and Weavile provide the raw DPS needed to break Regice\'s 190,400 armor',
      'Corsola provides global slow to keep Regice moving slowly even when not stunned'
    ],
    teamComposition: {
      early: ['Maractus', 'Sceptile', 'Tangrowth'],
      mid: ['Maractus', 'Sceptile', 'Tangrowth'],
      late: ['Dewgong', 'Ditto', 'Cryogonal', 'Weavile', 'Whiscash', 'Corsola']
    },
    terrainAnalysis: {
      roads: [
        { description: 'Path through varied terrain', length: 'Very Long', chokepoints: 4 },
        { description: 'Mountain pass with grass fields', length: 'Long', chokepoints: 2 }
      ],
      water: [],
      mountains: [
        { description: 'Strategic mountain peaks overlooking paths', height: 'High', strategicValue: 'Very High', benefits: ['+35% range bonus', 'Can control multiple path sections'] },
        { description: 'Rocky hills along paths', height: 'Medium', strategicValue: 'High', benefits: ['+20% range bonus'] }
      ],
      grass: [
        { description: 'Grass fields in valleys between mountains', coverage: 'High', benefits: ['Grass-type Pokémon gain 2x power bonus'] },
        { description: 'Meadow areas', coverage: 'Medium', benefits: ['Grass-type Pokémon gain power bonus'] }
      ],
      chokepoints: [
        { location: 'Mountain pass', description: 'Narrow passage between peaks', priority: 'Very High' },
        { location: 'Valley entrance', description: 'Path enters grass valley', priority: 'High' },
        { location: 'Path convergence', description: 'Multiple paths meet', priority: 'High' }
      ]
    },
    seo: {
      title: 'PokePath TD Route 3-2 Guide: The Dewgong Stun-Lock Strategy',
      description: "Can't beat Regice? The secret isn't damage, it's Dewgong. Learn how to use the Level 100 Dewgong Perma-Stun strategy to freeze the Route 3-2 Boss in place.",
      keywords: 'pokepathtd route 3-2, beat regice pokepathtd, route 3-2 guide, pokepathtd regice boss, best team route 3-2'
    },
    detailsHtml: `
      <div class="route-guide">
        <p>Route 3-2 features the formidable Ice Golem, Regice. With an armor stat of 190,400, this boss is a wall that stops most standard teams in their tracks.</p>
        <p>Common strategies rely on stacking multiple stun units like Lapras and Ampharos. However, if you have reached Level 100, you can use a much more efficient strategy.</p>
        <p>This guide details the "Dewgong Solo-Control" build, which maximizes damage by relying on a single, powerful controller.</p>
        
        <h3>🛡️ Boss Analysis: Why Regice is Hard</h3>
        <ul>
          <li><strong>Armor (190,400):</strong> This is the main mechanic. Any unit with Attack Power lower than this number will effectively deal zero damage. You need high-stat units.</li>
          <li><strong>Immunity:</strong> Regice is resistant to many status effects, but he is <strong>NOT immune to Dewgong's Paralysis</strong>.</li>
        </ul>

        <img src="/images/map-route/3-2-03.png" alt="Route 3-2 Map" class="route-map">
        
        <h3>🏆 The Best Team: The "Ice Breaker" Squad</h3>
        <p>We dropped Lapras from this lineup to make room for higher DPS units like Cryogonal. Here is why this works:</p>
        
        <h4>1. The Core: Dewgong (Level 100)</h4>
        <ul>
          <li><strong>Role:</strong> Solo Crowd Control.</li>
          <li><strong>The Mechanic:</strong> Dewgong's attacks have a 30% chance to Paralyze the target for 2 seconds.</li>
          <li><strong>Why No Lapras?</strong> At Level 100, Dewgong's stats allow it to attack and survive efficiently. The 2-second duration is long enough that you don't need a secondary stunner. If you copy Dewgong with Ditto, you can theoretically keep Regice stunned permanently (Perma-Stun).</li>
        </ul>
        
        <h4>2. The Heavy Hitters: Cryogonal & Weavile</h4>
        <p>Since we freed up a slot by removing Lapras, we add raw power.</p>
        <ul>
          <li><strong>Cryogonal (Level 100):</strong>
            <ul>
              <li><strong>Placement:</strong> Center Field/Water edge.</li>
              <li><strong>Why?</strong> Cryogonal has massive base stats at Level 100. Its high Power allows it to chip away at Regice's armor naturally.</li>
            </ul>
          </li>
          <li><strong>Weavile:</strong>
            <ul>
              <li><strong>Role:</strong> Armor Piercing.</li>
              <li><strong>Why?</strong> Critical hits deal double damage. Weavile is still the king of single-target DPS. When Regice is stunned by Dewgong, Weavile gets free hits to land those criticals.</li>
            </ul>
          </li>
        </ul>
        
        <h4>3. The Utility: Whiscash & Corsola</h4>
        <ul>
          <li><strong>Whiscash:</strong> Provides Ground/Water coverage and acts as a solid anchor in the lakes.</li>
          <li><strong>Corsola:</strong> Provides the Global Slow (300 Range). Even when Regice isn't stunned, he is moving in slow motion thanks to Corsola.</li>
        </ul>

        <img src="/images/map-route/3-2-01.png" alt="Route 3-2 Map" class="route-map">
        
        <h3>📝 Detailed Strategy: The Wave 100 Swap</h3>
        
        <h4>Phase 1: The Grass Clear (Waves 1-99)</h4>
        <p>Route 3-2 is filled with Water and Ground enemies.</p>
        <ul>
          <li>Use <strong>Maractus, Sceptile, and Tangrowth</strong>.</li>
          <li>These Grass types will shred the waves much faster than your Boss team can.</li>
        </ul>
        
        <h4>Phase 2: The Boss Setup (Wave 100)</h4>
        <ol>
          <li><strong>Sell:</strong> Remove your Grass units. They cannot scratch Regice's armor.</li>
          <li><strong>Deploy Dewgong:</strong> Place it in the most central position available (or in the water if you want the terrain bonus, though Center Field offers better coverage of the loop).</li>
          <li><strong>Deploy DPS:</strong> Place Cryogonal and Weavile near Dewgong.</li>
          <li><strong>Victory:</strong> Regice will walk into the range, get Paralyzed by Dewgong, and then get dismantled by your high-power units.</li>
        </ol>
        
        <h3>💡 Pro Tip: The Ditto Factor</h3>
        <p>If you feel your RNG (Random Number Generation) is bad and Dewgong isn't stunning enough:</p>
        <ul>
          <li>Transform Ditto into Dewgong.</li>
          <li>Two Dewgongs attacking the same target increases the probability of a stun significantly. This is the safest way to ensure Regice never moves.</li>
        </ul>

        <img src="/images/map-route/3-2-02.png" alt="Route 3-2 Map" class="route-map">
        
        <h3>🗺️ Terrain Analysis</h3>
        <p>Route 3-2 features mixed terrain with strategic chokepoints, making positioning crucial for success.</p>
        
        <h4>Roads & Paths</h4>
        <ul>
          <li><strong>Main Path:</strong> Path through varied terrain (Very Long, 4 chokepoints)</li>
          <li><strong>Mountain Pass:</strong> Mountain pass with grass fields (Long, 2 chokepoints)</li>
        </ul>
        
        <h4>Mountains & High Ground</h4>
        <ul>
          <li><strong>Strategic Peaks:</strong> Strategic mountain peaks overlooking paths (Very High strategic value) - +35% range bonus, can control multiple path sections</li>
          <li><strong>Rocky Hills:</strong> Rocky hills along paths (High strategic value) - +20% range bonus</li>
        </ul>
        
        <h4>Grass & Vegetation</h4>
        <ul>
          <li><strong>Grass Fields:</strong> Grass fields in valleys between mountains (High coverage) - Grass-type Pokémon gain 2x power bonus</li>
          <li><strong>Meadow Areas:</strong> Meadow areas (Medium coverage) - Grass-type Pokémon gain power bonus</li>
        </ul>
        
        <h4>Strategic Chokepoints</h4>
        <ul>
          <li><strong>Mountain Pass:</strong> Narrow passage between peaks (Very High priority)</li>
          <li><strong>Valley Entrance:</strong> Path enters grass valley (High priority)</li>
          <li><strong>Path Convergence:</strong> Multiple paths meet (High priority)</li>
        </ul>
        
        <h3>⚔️ Team Composition</h3>
        <h4>Early & Mid Game (Waves 1-99)</h4>
        <p>Use Grass-type Pokémon (Maractus, Sceptile, Tangrowth) to clear waves efficiently. These units excel against Water and Ground enemies.</p>
        
        <h4>Late Game (Wave 100)</h4>
        <p>Swap to the Ice Breaker Squad: Dewgong (core controller), Ditto (backup stunner), Cryogonal and Weavile (DPS), Whiscash and Corsola (utility support).</p>
      </div>
    `,
  },
  
  {
    id: 'how-to-beat-route-3-3-registeel-wave-100-guide',
    routeNumber: '3-3',
    name: 'PokePath TD Route 3-3 Guide: Beating Registeel (Poison Immune)',
    mapImage: '/images/map-route/3-3.png',
    stars: 600,
    starsSecondary: 0,
    difficulty: 'Very Hard',
    difficultyLevel: 4,
    terrain: ['Field', 'Grass', 'Mountain', 'Water'],
    description: 'Ultimate challenge route with all terrain types. The final boss Registeel requires a unique Curse strategy due to Poison immunity.',
    totalWaves: 100,
    recommendedTypes: ['Ghost', 'Ground', 'Grass', 'Fire'],
    recommendedPokemon: ['Gengar', 'Ditto', 'Maractus', 'Sceptile', 'Sunflora', 'Excadrill', 'Dewgong', 'Corsola'],
    strategies: ['Swap Strategy', 'Curse Build', 'Boss Counter'],
    playstyle: 'Tactical',
    tips: [
      'Use Swap Strategy: Grass team for waves 1-99, then switch to Curse team for Registeel',
      'Gengar is essential for Wave 100 - Nightmare damage ignores Registeel\'s 238,000 armor',
      'Place Gengar on high ground (Top Right Mountain) for maximum coverage',
      'Use Ditto to transform into Gengar for double Nightmare stacks',
      'Dewgong and Corsola provide crucial stun/slow to give Gengar time to ramp up damage',
      'Keep Excadrill for both teams - breaks armor on elites and supports boss fight'
    ],
    teamComposition: {
      early: ['Maractus', 'Sceptile', 'Sunflora'],
      mid: ['Maractus', 'Sceptile', 'Sunflora', 'Excadrill'],
      late: ['Gengar', 'Ditto', 'Dewgong', 'Corsola', 'Excadrill']
    },
    terrainAnalysis: {
      roads: [
        { description: 'Complex path system through all terrain types', length: 'Very Long', chokepoints: 6 },
        { description: 'Multiple branching paths', length: 'Long', chokepoints: 4 },
        { description: 'Secret path through difficult terrain', length: 'Medium', chokepoints: 2 }
      ],
      water: [
        { description: 'Large central lake', type: 'Deep Water', strategicValue: 'Very High', benefits: ['Water-type Pokémon gain 2x power bonus'] },
        { description: 'Rivers flowing through map', type: 'River', strategicValue: 'High', benefits: ['Water-type Pokémon gain power bonus'] },
        { description: 'Waterfalls and pools', type: 'Waterfall', strategicValue: 'Medium', benefits: ['Water-type Pokémon gain power bonus'] }
      ],
      mountains: [
        { description: 'Towering peaks with maximum elevation', height: 'Very High', strategicValue: 'Very High', benefits: ['+60% range bonus', 'Can cover entire map sections'] },
        { description: 'Multiple mountain ranges', height: 'High', strategicValue: 'Very High', benefits: ['+40% range bonus'] },
        { description: 'Rocky cliffs and ridges', height: 'Medium', strategicValue: 'High', benefits: ['+25% range bonus'] }
      ],
      grass: [
        { description: 'Dense forests covering large areas', coverage: 'Very High', benefits: ['Grass-type Pokémon gain 2x power bonus'] },
        { description: 'Grasslands and meadows', coverage: 'High', benefits: ['Grass-type Pokémon gain power bonus'] }
      ],
      chokepoints: [
        { location: 'Central mountain peak', description: 'Highest point with view of entire map', priority: 'Very High' },
        { location: 'Lake bridge', description: 'Main bridge crossing central lake', priority: 'Very High' },
        { location: 'Mountain pass', description: 'Narrow pass between peaks', priority: 'Very High' },
        { location: 'Forest clearing', description: 'Open area in dense forest', priority: 'High' },
        { location: 'River crossing', description: 'Path crosses river', priority: 'High' },
        { location: 'Path intersection', description: 'Multiple paths converge', priority: 'High' }
      ]
    },
    seo: {
      title: 'PokePath TD Route 3-3 Guide: Beating Registeel (Poison Immune)',
      description: 'Registeel has 238k Armor and is immune to Poison. Learn the "Gengar Curse Strategy" to defeat the Route 3-3 Boss using infinite scaling damage.',
      keywords: 'pokepathtd route 3-3, beat registeel pokepathtd, route 3-3 guide, pokepathtd registeel boss, best team route 3-3'
    },
    detailsHtml: `
      <div class="route-guide">
        <p>Route 3-3 is the climax of the third region. The map itself is long and winding, but the real test is the final boss, Registeel.</p>
        <p>Players who relied on the "Poison Strategy" for Regirock will hit a wall here. Registeel is a Steel-type, meaning he is <strong>100% Immune to Poison</strong>.</p>
        <p>With 238,000 Armor and Poison immunity, how do you damage him? The answer lies in the Ghost-type status effect: <strong>Curse (Nightmare)</strong>.</p>
        
        <h3>🛡️ Boss Analysis: Registeel</h3>
        <ul>
          <li><strong>Armor:</strong> 238,000. (Physical attacks deal ~1 damage).</li>
          <li><strong>Immunities:</strong> Poison. Do not use Weezing or Arbok.</li>
          <li><strong>Weaknesses:</strong>
            <ul>
              <li>Ground: (Excadrill / Flygon).</li>
              <li>Fire: (Charizard / Typhlosion).</li>
              <li>Curse: (Gengar / Cofagrigus / Banette).</li>
            </ul>
          </li>
        </ul>

        <img src="/images/map-route/3-3-03.png" alt="Route 3-3 Map" class="route-map">
        
        <h3>🏆 The Two-Team Strategy</h3>
        <p>Because the regular waves require AOE and the Boss requires specific counters, we use a "Swap Strategy".</p>
        
        <h4>Team 1: The Wave Clear (Waves 1-99)</h4>
        <p>Route 3-3 is populated by Rock, Ground, and Steel types.</p>
        <ul>
          <li><strong>Core: Grass Types.</strong></li>
          <li><strong>Maractus & Sceptile:</strong> Placed in the center grass patch. They shred through the heavy Rock/Ground waves.</li>
          <li><strong>Sunflora:</strong> Essential damage buff.</li>
          <li><strong>Excadrill:</strong> Placed near the spawn to break armor on elite mobs.</li>
        </ul>
        
        <h4>Team 2: The Boss Killers (Wave 100)</h4>
        <p>When Registeel spawns, <strong>PAUSE the game</strong>. Sell your Grass units (except Sunflora if you have space) and deploy the Curse Squad.</p>
        
        <h4>1. The MVP: Gengar (Level 100)</h4>
        <ul>
          <li><strong>Role:</strong> Infinite Scaling Damage.</li>
          <li><strong>Passive:</strong> Nightmare. Applies stacks that deal damage over time.</li>
          <li><strong>Why it wins:</strong> Nightmare damage ignores armor. Unlike physical attacks, it ramps up the longer the fight goes on. Since Registeel is tanky, Gengar has plenty of time to stack this damage to lethal levels.</li>
          <li><strong>Placement:</strong> Top Right Mountain (or any high ground covering the path).</li>
        </ul>
        
        <h4>2. The Clone: Ditto</h4>
        <ul>
          <li><strong>Role:</strong> Second Gengar.</li>
          <li><strong>Strategy:</strong> Transform Ditto into Gengar. Two Gengars mean double the Nightmare stacks. This cuts the kill time in half.</li>
        </ul>
        
        <h4>3. The Stallers: Dewgong & Corsola</h4>
        <ul>
          <li><strong>Role:</strong> Time Buying.</li>
          <li><strong>Strategy:</strong> Gengar needs time to ramp up damage.
            <ul>
              <li><strong>Corsola:</strong> Slows Registeel down.</li>
              <li><strong>Dewgong:</strong> Stuns Registeel in place.</li>
            </ul>
          </li>
          <li>While Registeel is stunned, the Nightmare damage continues to tick.</li>
        </ul>
        
        <h4>4. The Armor Breaker: Excadrill</h4>
        <ul>
          <li><strong>Role:</strong> Support DPS.</li>
          <li><strong>Strategy:</strong> Keep Excadrill. Its Ground-type attacks are super effective against Steel, and its passive deals double damage to armor. While it won't out-damage Gengar, it contributes significant chip damage.</li>
        </ul>

        <img src="/images/map-route/3-3-02.png" alt="Route 3-3 Map" class="route-map">
        
        <h3>📝 Step-by-Step Walkthrough</h3>
        <ol>
          <li><strong>Waves 1-99:</strong> Play normally with your Grass/Ground team.</li>
          <li><strong>Wave 100:</strong> Pause.</li>
          <li><strong>Sell:</strong> Remove Maractus, Sceptile, and other physical units that aren't Ground-type.</li>
          <li><strong>Buy:</strong> Deploy Gengar and Ditto.</li>
          <li><strong>Support:</strong> Ensure Dewgong and Corsola are in range of the boss path.</li>
          <li><strong>Win:</strong> Watch Registeel's health melt away as the purple Nightmare numbers grow larger and larger.</li>
        </ol>
        
        <h3>🗺️ Terrain Analysis</h3>
        <p>Route 3-3 features a complex path system through all terrain types, making it the ultimate challenge route.</p>
        
        <h4>Roads & Paths</h4>
        <ul>
          <li><strong>Main Path:</strong> Complex path system through all terrain types (Very Long, 6 chokepoints)</li>
          <li><strong>Branching Paths:</strong> Multiple branching paths (Long, 4 chokepoints)</li>
          <li><strong>Secret Path:</strong> Secret path through difficult terrain (Medium, 2 chokepoints)</li>
        </ul>
        
        <h4>Water Areas</h4>
        <ul>
          <li><strong>Central Lake:</strong> Large central lake (Very High strategic value) - Water-type Pokémon gain 2x power bonus</li>
          <li><strong>Rivers:</strong> Rivers flowing through map (High strategic value) - Water-type Pokémon gain power bonus</li>
          <li><strong>Waterfalls:</strong> Waterfalls and pools (Medium strategic value) - Water-type Pokémon gain power bonus</li>
        </ul>
        
        <h4>Mountains & High Ground</h4>
        <ul>
          <li><strong>Towering Peaks:</strong> Maximum elevation (Very High strategic value) - +60% range bonus, can cover entire map sections</li>
          <li><strong>Mountain Ranges:</strong> Multiple mountain ranges (Very High strategic value) - +40% range bonus</li>
          <li><strong>Rocky Cliffs:</strong> Rocky cliffs and ridges (High strategic value) - +25% range bonus</li>
        </ul>
        
        <h4>Grass & Vegetation</h4>
        <ul>
          <li><strong>Dense Forests:</strong> Covering large areas (Very High coverage) - Grass-type Pokémon gain 2x power bonus</li>
          <li><strong>Grasslands:</strong> Grasslands and meadows (High coverage) - Grass-type Pokémon gain power bonus</li>
        </ul>
        
        <h4>Strategic Chokepoints</h4>
        <ul>
          <li><strong>Central Mountain Peak:</strong> Highest point with view of entire map (Very High priority)</li>
          <li><strong>Lake Bridge:</strong> Main bridge crossing central lake (Very High priority)</li>
          <li><strong>Mountain Pass:</strong> Narrow pass between peaks (Very High priority)</li>
          <li><strong>Forest Clearing:</strong> Open area in dense forest (High priority)</li>
          <li><strong>River Crossing:</strong> Path crosses river (High priority)</li>
          <li><strong>Path Intersection:</strong> Multiple paths converge (High priority)</li>
        </ul>

        <img src="/images/map-route/3-3-01.png" alt="Route 3-3 Map" class="route-map">
        
        <h3>⚔️ Team Composition</h3>
        <h4>Early Game (Levels 1-15)</h4>
        <p>Start with any Level 1-50 Pokémon. Focus on building economy and clearing early waves.</p>
        
        <h4>Mid Game (Levels 16-35)</h4>
        <p>Transition to Level 50-80 Pokémon. Begin setting up your Grass-type core for wave clearing.</p>
        
        <h4>Late Game (Levels 36-100)</h4>
        <p>Deploy Level 100 Meta Pokémon. For waves 1-99, use Grass types (Maractus, Sceptile, Sunflora) and Excadrill. For Wave 100, swap to Gengar, Ditto, Dewgong, and Corsola.</p>
      </div>
    `,
    seo: {
      title: '',
      description: '',
      keywords: ''
    }
  }
]

// 按路线分组
export const routesByGroup = {
  'Route 1': stages.filter(s => s.routeNumber.startsWith('1-')),
  'Route 2': stages.filter(s => s.routeNumber.startsWith('2-')),
  'Route 3': stages.filter(s => s.routeNumber.startsWith('3-'))
}

// 导出所有关卡
export const routes = stages

// Difficulty colors mapping
export const difficultyColors = {
  'Easy': '#5cb85c',
  'Medium': '#f0ad4e',
  'Hard': '#d9534f',
  'Very Hard': '#8b0000',
  'Extreme': '#4a148c'
}
