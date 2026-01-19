// Pokémon Categories Data - Categorized by tactical usage
export default [
  {
    id: 'status-effects',
    name: 'Status Effects',
    icon: '🛡️',
    description: 'Control & DoT',
    tacticalUse: 'Weaken Boss HP, immobilize fast-moving enemies.',
    subCategories: [
      {
        id: 'burn',
        name: 'Burn',
        description: 'Continuous HP loss',
        pokemon: [
          {
            name: 'CHARIZARD',
            power: 485,
            recharge: 0.74,
            range: 165,
            shape: 'Circle',
            ability: 'The attacks burn the target for 10 seconds, causing them to lose 0.5% of their life per second.',
            abilityDesc: 'Causes burn damage (continuous HP loss)'
          },
          {
            name: 'INFERNAPE',
            power: 360,
            recharge: 0.50,
            range: 120,
            shape: 'Circle',
            ability: 'The attacks burn the target for 10 seconds, causing them to lose 0.5% of their life per second.',
            abilityDesc: 'Causes burn damage (continuous HP loss)'
          },
          {
            name: 'TORKOAL',
            power: 607,
            recharge: 3.00,
            range: 160,
            shape: 'Circle',
            ability: 'Attacks have a 50% chance to burn the target for 10 seconds, causing it to lose 0.5% HP per second.',
            abilityDesc: '50% chance to cause burn'
          }
        ]
      },
      {
        id: 'poison',
        name: 'Poison',
        description: 'Percentage HP loss',
        pokemon: [
          {
            name: 'WEEZING',
            power: 860,
            recharge: 1.82,
            range: 140,
            shape: 'Circle',
            ability: 'Shoots projectiles at up to 2 enemies at once and applies 1 stack of poison. The target loses 0.1% health per second per stack.',
            abilityDesc: 'Attacks 2 enemies + applies poison'
          },
          {
            name: 'ARBOK',
            power: 670,
            recharge: 1.50,
            range: 120,
            shape: 'Circle',
            ability: 'The attacks apply 1 charge of poison. The target loses 0.1% of life per second for each charge.',
            abilityDesc: 'Applies poison (HP loss per stack)'
          },
          {
            name: 'ARIADOS',
            power: 283,
            recharge: 0.75,
            range: 110,
            shape: 'Circle',
            ability: 'The attacks apply 1 charge of poison. The target loses 0.1% of life per second for each charge.',
            abilityDesc: 'Applies poison (HP loss per stack)'
          },
          {
            name: 'SWALOT',
            power: 120,
            recharge: 1.20,
            range: 140,
            shape: 'Circle',
            ability: 'The attacks apply 1 charge of poison. The target loses 0.1% of life per second for each charge.',
            abilityDesc: 'Applies poison (HP loss per stack)'
          }
        ]
      },
      {
        id: 'paralyze',
        name: 'Paralyze',
        description: 'Immobilize',
        pokemon: [
          {
            name: 'CRYOGONAL',
            power: 1208,
            recharge: 1.90,
            range: 348,
            shape: 'X Shape',
            ability: 'The attacks have a 30% chance of paralyzing the target for 2 seconds.',
            abilityDesc: '30% chance to paralyze (high damage + control)'
          },
          {
            name: 'DEWGONG',
            power: 810,
            recharge: 1.15,
            range: 400,
            shape: 'Cross',
            ability: 'The attacks have a 30% chance of paralyzing the target for 2 seconds.',
            abilityDesc: '30% chance to paralyze'
          },
          {
            name: 'LAPRAS',
            power: 670,
            recharge: 5.72,
            range: 200,
            shape: 'Circle',
            ability: 'The attacks have a 30% chance of paralyzing the target for 1.5 seconds.',
            abilityDesc: '30% chance to paralyze'
          },
          {
            name: 'AMPHAROS',
            power: 395,
            recharge: 3.40,
            range: 185,
            shape: 'Circle',
            ability: 'The attacks have a 30% chance of paralyzing the target for 1.5 seconds.',
            abilityDesc: '30% chance to paralyze'
          },
          {
            name: 'ELECTRODE',
            power: 140,
            recharge: 0.35,
            range: 115,
            shape: 'Circle',
            ability: 'The attacks have a 5% chance of paralyzing the target for 1.5 seconds.',
            abilityDesc: '5% chance to paralyze (ultra-fast attack speed)'
          }
        ]
      },
      {
        id: 'slow',
        name: 'Slow',
        description: 'Movement speed reduction',
        pokemon: [
          {
            name: 'TANGROWTH',
            power: 1010,
            recharge: 1.55,
            range: 150,
            shape: 'Circle',
            ability: 'The attacks slow the target for 2 seconds.',
            abilityDesc: 'Attacks cause slow (high base damage)'
          },
          {
            name: 'WHISCASH',
            power: 553,
            recharge: 2.40,
            range: 280,
            shape: 'Circle',
            ability: 'Projectiles explode in an area, dealing half damage to nearby enemies and slowing them for 2 seconds.',
            abilityDesc: 'Area explosion + slow'
          },
          {
            name: 'FERROTHORN',
            power: 312,
            recharge: 2.17,
            range: 130,
            shape: 'Circle',
            ability: 'The attacks slow the target for 2 seconds.',
            abilityDesc: 'Attacks cause slow'
          },
          {
            name: 'SHUCKLE',
            power: 150,
            recharge: 2.00,
            range: 140,
            shape: 'Circle',
            ability: 'The attacks slow the target for 2 seconds.',
            abilityDesc: 'Attacks cause slow'
          }
        ]
      },
      {
        id: 'curse',
        name: 'Curse/Nightmare',
        description: 'Special DoT',
        pokemon: [
          {
            name: 'GENGAR',
            power: 700,
            recharge: 1.40,
            range: 130,
            shape: 'Circle',
            ability: 'Attacks apply 1 nightmare stack. Each stack deals damage equal to 20% of this Pokémon\'s power per second.',
            abilityDesc: 'Nightmare stacking damage (for tanky enemies)'
          },
          {
            name: 'COFAGRIGUS',
            power: 440,
            recharge: 1.90,
            range: 250,
            shape: 'Cross',
            ability: 'Curse an enemy and deal damage to all cursed enemies.',
            abilityDesc: 'Curses enemies and deals chain damage'
          },
          {
            name: 'SABLEYE',
            power: 165,
            recharge: 0.75,
            range: 130,
            shape: 'Circle',
            ability: 'Curse an enemy and deal damage to all cursed enemies.',
            abilityDesc: 'Curses enemies and deals chain damage'
          },
          {
            name: 'GIRAFARIG',
            power: 103,
            recharge: 2.00,
            range: 135,
            shape: 'Circle',
            ability: 'Shoots projectiles at up to 2 enemies at once and curses them. Deals damage to all cursed enemies.',
            abilityDesc: 'Attacks 2 enemies + curse chain damage'
          }
        ]
      }
    ]
  },
  {
    id: 'aoe',
    name: 'Area Attack',
    icon: '💣',
    description: 'Crowd Control Expert',
    tacticalUse: 'Deal with large groups of low-HP enemies.',
    subCategories: [
      {
        id: 'ricochet',
        name: 'Ricochet',
        description: '',
        pokemon: [
          {
            name: 'MAROWAK',
            power: 630,
            recharge: 1.60,
            range: 350,
            shape: 'Cross',
            ability: 'The attacks ricochet between enemies with reduced damage. (4 Ricochets)',
            abilityDesc: 'Ricochet attack (4 times) - strongest physical ricochet'
          },
          {
            name: 'ARMALDO',
            power: 420,
            recharge: 0.90,
            range: 115,
            shape: 'Circle',
            ability: 'Critical projectiles ricochet between enemies and keep ricocheting as long as they remain critical.',
            abilityDesc: 'Infinite ricochet on critical hits (high crit rate)'
          },
          {
            name: 'GRENINJA',
            power: 165,
            recharge: 0.30,
            range: 130,
            shape: 'Circle',
            ability: 'The attacks ricochet between enemies with reduced damage. (5 Ricochets)',
            abilityDesc: 'Ricochet attack (5 times) - extremely fast attack speed'
          }
        ]
      },
      {
        id: 'explode',
        name: 'Explode/Splash',
        description: '',
        pokemon: [
          {
            name: 'GARDEVOIR',
            power: 900,
            recharge: 1.60,
            range: 120,
            shape: 'Circle',
            ability: 'Projectiles explode in an area, dealing half damage to nearby enemies and spreading the main target\'s prejudices.',
            abilityDesc: 'Area explosion + spreads prejudice'
          },
          {
            name: 'DRUDDIGON',
            power: 902,
            recharge: 2.00,
            range: 230,
            shape: 'Circle',
            ability: 'The projectiles explode in an area, causing half damage to nearby enemies.',
            abilityDesc: 'Area explosion damage'
          },
          {
            name: 'OCTILLERY',
            power: 860,
            recharge: 2.50,
            range: 480,
            shape: 'Ring',
            ability: 'The projectiles explode in an area, causing half damage to nearby enemies.',
            abilityDesc: 'Area explosion damage (huge range)'
          },
          {
            name: 'DUNSPARCE',
            power: 715,
            recharge: 1.70,
            range: 500,
            shape: 'Cross',
            ability: 'Projectiles explode in an area, dealing half damage to nearby enemies and slowing them for 2 seconds.',
            abilityDesc: 'Area explosion + slow'
          },
          {
            name: 'CORSOLA',
            power: 460,
            recharge: 1.30,
            range: 300,
            shape: 'Ring',
            ability: 'Projectiles explode in an area, dealing half damage to nearby enemies and slowing them for 2 seconds.',
            abilityDesc: 'Area explosion + slow'
          },
          {
            name: 'LUCARIO',
            power: 400,
            recharge: 0.70,
            range: 160,
            shape: 'Circle',
            ability: 'The projectiles explode in an area, causing half damage to nearby enemies.',
            abilityDesc: 'Area explosion damage'
          }
        ]
      },
      {
        id: 'multi-target',
        name: 'Multi-Target',
        description: '',
        pokemon: [
          {
            name: 'LILLIGANT',
            power: 655,
            recharge: 1.70,
            range: 250,
            shape: 'Ring',
            ability: 'Fires projectiles at up to 3 enemies at once.',
            abilityDesc: 'Attacks 3 enemies simultaneously'
          },
          {
            name: 'SANDSLASH',
            power: 600,
            recharge: 0.95,
            range: 145,
            shape: 'Circle',
            ability: 'Fires projectiles at up to 2 enemies at once.',
            abilityDesc: 'Attacks 2 enemies simultaneously'
          },
          {
            name: 'BARBARACLE',
            power: 460,
            recharge: 1.73,
            range: 140,
            shape: 'Circle',
            ability: 'Fires projectiles at up to 4 enemies at once.',
            abilityDesc: 'Attacks 4 enemies simultaneously'
          },
          {
            name: 'KABUTOPS',
            power: 455,
            recharge: 0.72,
            range: 100,
            shape: 'Circle',
            ability: 'Fires projectiles at up to 2 enemies at once.',
            abilityDesc: 'Attacks 2 enemies simultaneously'
          },
          {
            name: 'CRADILY',
            power: 410,
            recharge: 1.92,
            range: 160,
            shape: 'Circle',
            ability: 'Shoots one projectile for each Fossil Pokémon on the team. Attacks slow the target for 2 seconds.',
            abilityDesc: 'Fires projectiles based on number of Fossil teammates'
          },
          {
            name: 'STARAPTOR',
            power: 250,
            recharge: 0.70,
            range: 280,
            shape: 'Circle',
            ability: 'Fires projectiles at up to 2 enemies at once.',
            abilityDesc: 'Attacks 2 enemies simultaneously'
          }
        ]
      }
    ]
  },
  {
    id: 'burst',
    name: 'Burst Damage',
    icon: '⚔️',
    description: 'Boss Killer',
    tacticalUse: 'Instantly kill high-HP, high-armor Bosses or elite enemies.',
    subCategories: [
      {
        id: 'pure-damage',
        name: 'Pure Damage/Critical',
        description: '',
        pokemon: [
          {
            name: 'CLAWITZER',
            power: 5100,
            recharge: 6.00,
            range: 300,
            shape: 'Cross',
            ability: 'Criticals do twice the damage.',
            abilityDesc: 'Criticals deal double damage - highest single-shot damage'
          },
          {
            name: 'RAMPARDOS',
            power: 1150,
            recharge: 1.90,
            range: 110,
            shape: 'Circle',
            ability: 'Increases damage by 5% for each missing heart.',
            abilityDesc: 'More damage the more HP lost'
          },
          {
            name: 'WEAVILE',
            power: 425,
            recharge: 0.40,
            range: 115,
            shape: 'Circle',
            ability: 'Criticals do twice the damage.',
            abilityDesc: 'Criticals deal double damage (ultra-high crit rate)'
          },
          {
            name: 'CLEFABLE',
            power: 455,
            recharge: 0.90,
            range: 140,
            shape: 'Circle',
            ability: 'Attacks deal 1 additional damage for each star.',
            abilityDesc: 'Star count increases damage'
          }
        ]
      },
      {
        id: 'anti-armor',
        name: 'Anti-Armor',
        description: 'Armor breaker',
        pokemon: [
          {
            name: 'MACHAMP',
            power: 1520,
            recharge: 1.50,
            range: 125,
            shape: 'Circle',
            ability: 'Causes double damage to armor.',
            abilityDesc: 'Deals double damage to armor - strongest armor breaker'
          },
          {
            name: 'PRIMEAPE',
            power: 705,
            recharge: 0.85,
            range: 100,
            shape: 'Circle',
            ability: 'Causes double damage to armor.',
            abilityDesc: 'Deals double damage to armor'
          },
          {
            name: 'HAWLUCHA',
            power: 642,
            recharge: 0.83,
            range: 235,
            shape: 'Circle',
            ability: 'Causes double damage to armor.',
            abilityDesc: 'Deals double damage to armor'
          },
          {
            name: 'EXCADRILL',
            power: 180,
            recharge: 0.50,
            range: 130,
            shape: 'Circle',
            ability: 'Causes double damage to armor.',
            abilityDesc: 'Deals double damage to armor'
          }
        ]
      },
      {
        id: 'stacking',
        name: 'Stacking',
        description: '',
        pokemon: [
          {
            name: 'NOIVERN',
            power: 1210,
            recharge: 1.42,
            range: 400,
            shape: 'Ring',
            ability: 'Each attack on the same target causes additional damage.',
            abilityDesc: 'Consecutive attacks on same target increase damage'
          },
          {
            name: 'SAMUROTT',
            power: 530,
            recharge: 0.54,
            range: 140,
            shape: 'Circle',
            ability: 'Each attack on the same target causes additional damage.',
            abilityDesc: 'Consecutive attacks on same target increase damage'
          },
          {
            name: 'ALAKAZAM',
            power: 430,
            recharge: 0.70,
            range: 110,
            shape: 'Circle',
            ability: 'Teleports periodically whenever possible. Each teleport grants 100% stackable damage to the next attack.',
            abilityDesc: 'Teleports and greatly increases next attack damage'
          },
          {
            name: 'ABSOL',
            power: 335,
            recharge: 0.37,
            range: 130,
            shape: 'Circle',
            ability: 'Each attack on the same target causes additional damage.',
            abilityDesc: 'Consecutive attacks on same target increase damage'
          }
        ]
      }
    ]
  },
  {
    id: 'terrain',
    name: 'Terrain Adaptation',
    icon: '🏔️',
    description: 'Terrain Specialist',
    tacticalUse: 'Choose based on map type to enjoy massive bonuses.',
    subCategories: [
      {
        id: 'mountain',
        name: 'Mountain (Range x2)',
        description: '',
        pokemon: [
          {
            name: 'FLYGON',
            power: 755,
            recharge: 1.00,
            range: 150,
            shape: 'Circle',
            ability: 'It doubles its range if it is in the mountains.',
            abilityDesc: 'Mountain range doubled (300 Range)'
          },
          {
            name: 'PIDGEOT',
            power: 440,
            recharge: 0.70,
            range: 180,
            shape: 'Circle',
            ability: 'It doubles its range if it is in the mountains.',
            abilityDesc: 'Mountain range doubled (360 Range)'
          },
          {
            name: 'AGGRON',
            power: 365,
            recharge: 2.25,
            range: 145,
            shape: 'Circle',
            ability: 'It doubles its range if it is in the mountains.',
            abilityDesc: 'Mountain range doubled (290 Range)'
          }
        ]
      },
      {
        id: 'water',
        name: 'Water (Speed x2)',
        description: '',
        pokemon: [
          {
            name: 'OMASTAR',
            power: 890,
            recharge: 3.00,
            range: 155,
            shape: 'Circle',
            ability: 'It doubles its speed if it is in water.',
            abilityDesc: 'Water speed doubled (1.50s interval)'
          },
          {
            name: 'GOLDUCK',
            power: 402,
            recharge: 0.85,
            range: 155,
            shape: 'Circle',
            ability: 'It doubles its speed if it is in water.',
            abilityDesc: 'Water speed doubled (0.42s interval)'
          },
          {
            name: 'STARMIE',
            power: 355,
            recharge: 0.50,
            range: 240,
            shape: 'X Shape',
            ability: 'It doubles its speed if it is in water.',
            abilityDesc: 'Water speed doubled (0.25s interval)'
          },
          {
            name: 'MASQUERAIN',
            power: 190,
            recharge: 0.37,
            range: 130,
            shape: 'Circle',
            ability: 'It doubles its speed if it is in water.',
            abilityDesc: 'Water speed doubled (0.18s interval)'
          }
        ]
      },
      {
        id: 'grass',
        name: 'Grass (Power x2)',
        description: '',
        pokemon: [
          {
            name: 'SCEPTILE',
            power: 540,
            recharge: 0.85,
            range: 145,
            shape: 'Circle',
            ability: 'It doubles its power if it is in tall grass.',
            abilityDesc: 'Grass power doubled (1080 Power)'
          },
          {
            name: 'MARACTUS',
            power: 306,
            recharge: 1.15,
            range: 170,
            shape: 'Circle',
            ability: 'It doubles its power if it is in tall grass.',
            abilityDesc: 'Grass power doubled (612 Power)'
          },
          {
            name: 'JUMPLUFF',
            power: 230,
            recharge: 0.50,
            range: 170,
            shape: 'Circle',
            ability: 'It doubles its power if it is in tall grass.',
            abilityDesc: 'Grass power doubled (460 Power)'
          }
        ]
      },
      {
        id: 'all-terrain',
        name: 'All Terrain',
        description: '',
        pokemon: [
          {
            name: 'CASTFORM',
            power: 501,
            recharge: 0.90,
            range: 150,
            shape: 'Circle',
            ability: 'Multiplies its damage by 2 in tall grass, its speed by 2 in water, and its range by 2 in mountains.',
            abilityDesc: 'Grass/Water/Mountain each have bonuses'
          }
        ]
      }
    ]
  },
  {
    id: 'support',
    name: 'Support & Utility',
    icon: '💊',
    description: '',
    tacticalUse: 'Provides healing, anti-invisible, economic support, or team buffs.',
    subCategories: [
      {
        id: 'heal',
        name: 'Healing',
        description: '',
        pokemon: [
          {
            name: 'MEGANIUM',
            power: 920,
            recharge: 1.70,
            range: 130,
            shape: 'Circle',
            ability: 'Attacks have a small chance of restoring 1 heart.',
            abilityDesc: 'Attacks have chance to restore HP (1 heart)'
          },
          {
            name: 'BRELOOM',
            power: 825,
            recharge: 1.55,
            range: 110,
            shape: 'Circle',
            ability: 'Attacks have a small chance of restoring 1 heart.',
            abilityDesc: 'Attacks have chance to restore HP (1 heart)'
          },
          {
            name: 'WHIMSICOTT',
            power: 225,
            recharge: 0.59,
            range: 140,
            shape: 'Circle',
            ability: 'Attacks have a small chance of restoring 1 heart.',
            abilityDesc: 'Attacks have chance to restore HP (1 heart)'
          }
        ]
      },
      {
        id: 'anti-invisible',
        name: 'Anti-Invisible',
        description: '',
        pokemon: [
          {
            name: 'GRUMPIG',
            power: 690,
            recharge: 1.10,
            range: 140,
            shape: 'Circle',
            ability: 'Can hit invisible enemies.',
            abilityDesc: 'Can attack invisible units'
          },
          {
            name: 'XATU',
            power: 435,
            recharge: 0.80,
            range: 210,
            shape: 'Circle',
            ability: 'Can hit invisible enemies.',
            abilityDesc: 'Can attack invisible units'
          },
          {
            name: 'HONCHKROW',
            power: 365,
            recharge: 0.69,
            range: 190,
            shape: 'Circle',
            ability: 'Can hit invisible enemies.',
            abilityDesc: 'Can attack invisible units'
          }
        ]
      },
      {
        id: 'buff',
        name: 'Aura/Buff',
        description: '',
        pokemon: [
          {
            name: 'FARFETCH\'D',
            power: 207,
            recharge: 1.00,
            range: 130,
            shape: 'Circle',
            ability: 'Increases the critical damage of Pokémon within range by 33%.',
            abilityDesc: 'Aura: Increases critical damage of allies within range'
          },
          {
            name: 'SUNFLORA',
            power: 0,
            recharge: 0.00,
            range: 170,
            shape: 'Circle',
            ability: 'Increases damage dealt by Pokémon within range by 20%.',
            abilityDesc: 'Aura: Increases damage of nearby allies'
          },
          {
            name: 'BASTIODON',
            power: 1400,
            recharge: 6.50,
            range: 140,
            shape: 'Circle',
            ability: 'Reduces recharge time by 0.5s for each Fossil Pokémon on the team.',
            abilityDesc: 'Reduces cooldown time of Fossil teammates'
          }
        ]
      },
      {
        id: 'special',
        name: 'Special/Economy',
        description: '',
        pokemon: [
          {
            name: 'PERSIAN',
            power: 305,
            recharge: 0.60,
            range: 130,
            shape: 'Circle',
            ability: 'Attacks grant $ equal to 10% of the target\'s gold.',
            abilityDesc: 'Attacks grant gold'
          },
          {
            name: 'DITTO',
            power: 0,
            recharge: 0.00,
            range: 100,
            shape: 'Circle',
            ability: 'Transforms into the first Pokémon in the party, copying its stats and ability adjusted to Ditto\'s level.',
            abilityDesc: 'Transforms into first Pokémon in party'
          },
          {
            name: 'SPINDA',
            power: 101,
            recharge: 0.20,
            range: 400,
            shape: 'Circle',
            ability: 'Has trouble focusing.',
            abilityDesc: 'Random attacks (trouble focusing)'
          }
        ]
      }
    ]
  }
]

