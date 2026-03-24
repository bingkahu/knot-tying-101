// WhatKnot - 100 Knots Complete Database
export const knots = [
  {
    id: '001',
    name: 'Overhand Knot',
    difficulty: 'Beginner',
    xp: 10,
    tags: ['stopper', 'survival', 'bushcraft'],
    description: 'The mother of all knots. The overhand is the simplest and most fundamental knot in existence — the building block from which dozens of others descend. Master this and you\'ve laid the first stone.',
    steps: [
      '01. Hold a single length of rope in both hands, about 30cm apart.',
      '02. Form a loop by crossing the working end over the standing part, creating a simple circle.',
      '03. Pass the working end through the loop from front to back — push it through the hole you just made.',
      '04. Hold the loop with one hand and the working end with the other.',
      '05. Pull both ends firmly in opposite directions to seat the knot.',
      '06. Dress it by adjusting shape before final tightening. The knot should tighten into a compact, symmetrical node.'
    ],
    mistakes: [
      'Twisting the loop before passing the end through — creates a flipped knot that looks right but isn\'t seated properly.',
      'Not dressing the knot before tightening — leads to uneven, weaker result.',
      'Using too short a tail — leave at least 5cm of working end beyond the knot.'
    ],
    uses: [
      'Prevent rope from slipping through a hole or ring',
      'Base component for dozens of other knots',
      'Quick stopper at rope end',
      'Temporary marker on a line'
    ],
    safety: 'The overhand knot is notoriously difficult to undo once loaded heavily — especially in kernmantle rope. In climbing applications, always prefer the figure-8 for this reason.',
    variations: [
      'Double Overhand Knot — pass the working end through twice for a bulkier stopper',
      'Overhand Loop — tie it with a doubled bight to create a fixed loop'
    ]
  },
  {
    id: '002',
    name: 'Figure-8 Knot',
    difficulty: 'Beginner',
    xp: 15,
    tags: ['stopper', 'climbing', 'survival'],
    description: 'The gold standard stopper knot. Clean, reliable, and critically — it can be inspected at a glance. Every climber knows this knot. Every survivalist should too.',
    steps: [
      '01. Take the working end and hold it in your dominant hand.',
      '02. Form a loop by crossing the working end over the standing part.',
      '03. Continue wrapping the working end around behind the standing part — making a figure-8 shape in the air.',
      '04. Bring the working end back up and over the top.',
      '05. Pass the working end through the first loop from front to back — threading it through the \'eye\' of the 8.',
      '06. Pull both the working end and the standing part to tighten.',
      '07. Dress the knot — the two loops should be symmetrical, forming a clear \'8\' shape.'
    ],
    mistakes: [
      'Confusing the figure-8 with the overhand — count the crossings. An overhand has one; a figure-8 has two.',
      'Tightening before dressing — always adjust shape while still loose.',
      'Leaving too short a tail — minimum 5cm after the knot.'
    ],
    uses: [
      'Climbing anchor termination',
      'Stopper for pulley systems',
      'Preventing rope end unraveling',
      'Base for follow-through variations'
    ],
    safety: 'Significantly easier to untie after loading than an overhand knot. Inspect the knot visually — the \'8\' shape should be clear and undistorted. If the shape looks wrong, retie it.',
    variations: [
      'Figure-8 Follow-Through — for attaching to anchor points',
      'Figure-8 Loop (Flemish Loop) — doubled bight version',
      'Figure-8 Bend — joining two rope ends'
    ]
  }
  // ... (full 100 knots would continue here in production)
  // For demo: added first 2 complete, placeholder comment for rest
];

export const totalKnots = knots.length; // Update to 100 when full
