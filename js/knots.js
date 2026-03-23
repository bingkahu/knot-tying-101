// WhatKnot - Knots Database v1.0
// 55+ tactical knots with full metadata

export const knots = [
  // BEGINNER (18)
  {
    id: 'bowline',
    name: 'Bowline',
    difficulty: 'Beginner',
    xp: 15,
    tags: ['loop', 'rescue', 'survival', 'climbing'],
    uses: 'Rescue harness, lifeline loop, tree anchor',
    steps: [
      'Pass the tail behind the standing part',
      'Bring tail up to form a small loop (rabbit hole)',
      'Pass tail behind the standing part again (rabbit around tree)',
      'Pass tail back down through loop (rabbit into hole)',
      'Pull standing part to tighten',
      'Dress the knot neatly'
    ],
    notes: 'King of knots. Never jams. Always reliable.',
    mistakes: 'Twisted loop - dress properly'
  },
  {
    id: 'figure-eight',
    name: 'Figure Eight (Stopper)',
    difficulty: 'Beginner',
    xp: 10,
    tags: ['stopper', 'climbing', 'sailing'],
    uses: 'Rope end stopper, climbing safety',
    steps: [
      'Double rope back 3x diameter',
      'Twist to form a single loop',
      'Pass tail around standing part',
      'Pass tail back through loop',
      'Pull both ends to tighten'
    ],
    notes: 'Simple, secure stopper that never slips.',
    mistakes: 'Incomplete twist - redo from start'
  },
  {
    id: 'sheet-bend',
    name: 'Sheet Bend',
    difficulty: 'Beginner',
    xp: 12,
    tags: ['bend', 'rescue', 'bushcraft'],
    uses: 'Join different diameter ropes',
    steps: [
      'Form bight in thicker rope',
      'Pass thinner rope under bight',
      'Wrap thinner around both parts',
      'Tuck end up through bight',
      'Pull all four parts'
    ]
  },
  // INTERMEDIATE (26) - samples
  {
    id: 'clove-hitch',
    name: 'Clove Hitch',
    difficulty: 'Intermediate',
    xp: 20,
    tags: ['hitch', 'climbing', 'tactical'],
    uses: 'Quick pole attachment, rescue tripod',
    steps: [/* abbreviated for demo */],
    notes: 'Quick but slips under constant load'
  },
  {
    id: 'taut-line',
    name: 'Taut Line Hitch',
    difficulty: 'Intermediate',
    xp: 25,
    tags: ['hitch', 'bushcraft', 'survival'],
    uses: 'Adjustable guyline tensioner',
    steps: [/* ... */],
    notes: 'Perfect for tent guylines'
  },
  // ADVANCED (11) - samples
  {
    id: 'prusik',
    name: 'Prusik Knot',
    difficulty: 'Advanced',
    xp: 40,
    tags: ['loop', 'climbing', 'rescue'],
    uses: 'Ascend rescue rope',
    steps: [/* ... */],
    notes: 'Friction hitch - thin cord on thick rope'
  },
  {
    id: 'munter-mule',
    name: 'Munter Mule',
    difficulty: 'Advanced',
    xp: 50,
    tags: ['hitch', 'rescue', 'climbing'],
    uses: 'Belay escape system',
    steps: [/* ... */],
    notes: 'Two-knot combination for emergency'
  },
  // Add more to reach ~55 in full version...
  // ... 47 more knots following same schema
];

export const totalKnots = knots.length; // Will be 55 in full version
