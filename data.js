const knotsData = [
    {
        id: "k1", name: "Square Knot (Reef Knot)", difficulty: "Beginner", tags: ["bend", "sailing", "decorative"],
        description: "A simple, ancient binding knot used to secure a rope or line around an object.",
        steps: ["Take an end of a rope in each hand.", "Pass the right end over and under the left end.", "Pull both ends to create a half knot.", "Take the new right end, pass it over and under the left end.", "Ensure ends exit the knot together, parallel to standing parts.", "Pull all four ends evenly to tighten."],
        mistakes: "Tying two 'right-over-left' half knots creates a weak 'Granny Knot'.",
        uses: "Tying bandages, securing non-critical packages, shoelaces.",
        safety: "Never use for critical loads; it can slip or spill if ropes are different thicknesses.",
        variations: "Surgeon's Knot (adds an extra twist on the first half knot)."
    },
    {
        id: "k2", name: "Bowline", difficulty: "Intermediate", tags: ["loop", "sailing", "rescue", "climbing"],
        description: "An ancient and reliable knot used to form a fixed loop at the end of a rope.",
        steps: ["Make a small loop (the 'rabbit hole') in the standing part.", "Pass the working end (the 'rabbit') up through the loop.", "Pass the working end around behind the standing part (the 'tree').", "Pass the working end back down through the loop.", "Hold the working end and the side of the loop together.", "Pull the standing part to tighten the knot securely."],
        mistakes: "Making the initial loop backwards, causing the knot to fail completely.",
        uses: "Rescues, securing halyards, tying boats to rings.",
        safety: "Highly secure under load, but can shake loose if repeatedly tensioned and slackened.",
        variations: "Water Bowline, Yosemite Bowline."
    },
    {
        id: "k3", name: "Figure Eight", difficulty: "Beginner", tags: ["stopper", "climbing", "sailing"],
        description: "A standard stopper knot that prevents a rope from running out of a retaining device.",
        steps: ["Form a loop by crossing the working end over the standing part.", "Pass the working end behind the standing part.", "Bring the working end up and pass it down through the original loop.", "Dress the knot by ensuring the strands sit flat.", "Pull both ends tight to form the '8' shape.", "Ensure sufficient tail remains."],
        mistakes: "Failing to pass behind the standing part results in a simple overhand knot.",
        uses: "End of a halyard, climbing rope end safety, retaining lines.",
        safety: "Will not jam as tightly as an overhand knot, making it safer and easier to untie.",
        variations: "Figure Eight on a Bight, Figure Eight Follow-Through."
    },
    {
        id: "k4", name: "Clove Hitch", difficulty: "Beginner", tags: ["hitch", "sailing", "climbing"],
        description: "A simple binding knot used to secure a rope to a spar, post, or carabiner.",
        steps: ["Wrap the working end around the post.", "Cross the working end over the standing part to form an X.", "Wrap the working end around the post a second time.", "Tuck the working end under the X you just created.", "Pull both ends in opposite directions to tighten.", "Push the wraps close together for a secure hold."],
        mistakes: "Failing to tuck under the X makes it a series of loose wraps.",
        uses: "Securing fenders, starting lashings, temporary moorings.",
        safety: "Can slip if the post rotates or if tension is intermittent. Always back it up.",
        variations: "Slipped Clove Hitch."
    },
    {
        id: "k5", name: "Sheet Bend", difficulty: "Intermediate", tags: ["bend", "sailing"],
        description: "The primary knot for joining two ropes of different diameters.",
        steps: ["Form a bight (U-shape) in the thicker rope and hold it.", "Pass the working end of the thinner rope up through the bight.", "Wrap the thinner rope completely around both parts of the thick bight.", "Tuck the working end of the thinner rope under its own standing part.", "Ensure both short ends exit on the same side of the knot.", "Pull all parts tight to secure."],
        mistakes: "Ends exiting on opposite sides makes a 'Left-handed' Sheet Bend, which is weaker.",
        uses: "Joining disparate ropes, repairing broken lines, netting.",
        safety: "Prone to working loose when not under constant tension.",
        variations: "Double Sheet Bend (extra wrap for security)."
    },
    {
        id: "k6", name: "Two Half Hitches", difficulty: "Beginner", tags: ["hitch", "sailing", "decorative"],
        description: "An overhand knot tied around a post and its own standing part.",
        steps: ["Pass the working end around the post.", "Bring it over the standing part and through the loop formed (first half hitch).", "Pull tight.", "Take the working end around the standing part again in the same direction.", "Pass it through the new loop formed (second half hitch).", "Pull the working end to tighten against the post."],
        mistakes: "Tying the second hitch in the reverse direction creates a Cow Hitch, which slips.",
        uses: "Tying a boat to a ring, securing guy lines on tents.",
        safety: "Very secure under tension but can jam under extreme loads.",
        variations: "Round Turn and Two Half Hitches (adds extra wraps around the post)."
    },
    {
        id: "k7", name: "Taut-Line Hitch", difficulty: "Intermediate", tags: ["hitch", "climbing", "sailing"],
        description: "An adjustable loop knot for use on lines under tension.",
        steps: ["Pass the working end around an anchor and back alongside the standing part.", "Make two wraps inward around the standing part, inside the loop.", "Move the working end outside the loop, away from the anchor.", "Make a single wrap around the standing part outside the loop.", "Tuck the end through this new outer loop.", "Pull tight. Slide the knot to adjust tension."],
        mistakes: "Wrapping the outer turn in the wrong direction destroys the friction lock.",
        uses: "Tent guy lines, tying down loads on vehicles, adjustable moorings.",
        safety: "Can fail on modern, slippery synthetic ropes. Use a Midshipman's Hitch instead.",
        variations: "Midshipman's Hitch, Magnus Hitch."
    },
    {
        id: "k8", name: "Timber Hitch", difficulty: "Beginner", tags: ["hitch", "sailing"],
        description: "A temporary hitch used to attach a single rope to a cylindrical object.",
        steps: ["Pass the working end around the log or pole.", "Wrap the working end completely around the standing part.", "Bring the end back inside the loop formed around the log.", "Wrap the end around itself three or more times.", "Pull the standing part to tighten the wraps against the log.", "Ensure the wraps are gripping the wood firmly."],
        mistakes: "Too few wraps will cause the knot to slip entirely.",
        uses: "Towing logs, hoisting poles, starting diagonal lashings.",
        safety: "Only holds while tension is applied. Will fall apart if slackened.",
        variations: "Killick Hitch (Timber hitch plus an extra half hitch further down)."
    },
    {
        id: "k9", name: "Water Knot", difficulty: "Intermediate", tags: ["bend", "climbing", "rescue"],
        description: "A knot frequently used in climbing for joining two ends of tubular webbing.",
        steps: ["Tie a loose overhand knot in the end of one piece of webbing.", "Keep it flat and untwisted.", "Take the end of the second piece of webbing.", "Thread the second piece backwards through the first overhand knot.", "Follow the exact path of the first knot in reverse.", "Pull all four ends tightly, ensuring tails are at least 3 inches long."],
        mistakes: "Twisting the webbing while tracing weakens the knot significantly.",
        uses: "Creating slings from webbing, climbing anchors.",
        safety: "Must be checked before use, as it can slowly creep under cyclic loading.",
        variations: "Figure Eight Bend."
    },
    {
        id: "k10", name: "Alpine Butterfly Loop", difficulty: "Advanced", tags: ["loop", "climbing", "rescue"],
        description: "Forms a secure, fixed loop in the middle of a rope without access to the ends.",
        steps: ["Wrap the rope over your hand three times.", "Take the middle wrap and pull it slightly outward.", "Pull the middle wrap down, over the other two wraps.", "Push the middle wrap back up, under the other two wraps.", "Slide the knot off your hand.", "Pull the two standing ends and the loop in three different directions to tighten."],
        mistakes: "Pulling the wrong wrap creates an unstable, sliding slip knot.",
        uses: "Middle climber tie-in, isolating a damaged section of rope.",
        safety: "Extremely secure. Can be loaded in any direction (loop, or either standing end).",
        variations: "Alpine Butterfly Bend."
    },
    {
        id: "k11", name: "Prusik Knot", difficulty: "Intermediate", tags: ["hitch", "climbing", "rescue"],
        description: "A friction hitch used to attach a loop of cord around a thicker main rope.",
        steps: ["Take a loop of accessory cord.", "Pass the loop behind the main rope.", "Pass the knot-end of the loop through the other end.", "Wrap it around the main rope inside the loop a second time.", "Wrap a third time for extra friction.", "Dress the knot neatly so the wraps sit flush side-by-side, and pull tight."],
        mistakes: "Overlapping the wraps prevents the knot from biting into the main rope.",
        uses: "Ascending a rope, self-rescue, adjustable rigging.",
        safety: "Grips when loaded, slides when unloaded. Must use cord thinner than the main rope.",
        variations: "Klemheist Knot, Autoblock."
    },
    {
        id: "k12", name: "Cleat Hitch", difficulty: "Beginner", tags: ["hitch", "sailing"],
        description: "The standard method to secure a line to a deck cleat.",
        steps: ["Take the line to the base of the cleat on the side furthest from the load.", "Wrap the line once completely around the base.", "Bring the line over the top of the cleat diagonally.", "Bring it under the horn and diagonally back over the top, making a figure-8.", "Form a loop in the line, twist it so the working end is underneath.", "Hook the loop over the final horn and pull tight."],
        mistakes: "Adding too many figure-8s makes it prone to jamming. One lock is enough.",
        uses: "Docking boats, securing halyards to flagpoles.",
        safety: "Very fast to tie and untie, even under heavy tension.",
        variations: "Slipped Cleat Hitch."
    },
    {
        id: "k13", name: "Double Fisherman's", difficulty: "Advanced", tags: ["bend", "climbing", "rescue"],
        description: "A very strong knot used to join two ropes of equal diameter.",
        steps: ["Lay the two ropes parallel, pointing in opposite directions.", "Take the working end of rope A and wrap it twice around rope B.", "Thread the end of A back through the two wraps you just made.", "Pull tight to form a double overhand knot.", "Repeat the exact process with the working end of rope B around rope A.", "Pull the standing parts of both ropes to slide the two knots tightly together."],
        mistakes: "Wrapping in opposite directions prevents the knots from seating together flush.",
        uses: "Making Prusik loops, tying off the ends of climbing knots.",
        safety: "Extremely secure, but can jam so tightly it must be cut off after heavy loading.",
        variations: "Single Fisherman's Knot, Triple Fisherman's Knot."
    },
    {
        id: "k14", name: "Rolling Hitch", difficulty: "Intermediate", tags: ["hitch", "sailing", "rescue"],
        description: "A friction hitch used to pull lengthwise along another rope or pole.",
        steps: ["Pass the working end around the main rope or spar.", "Make a second wrap moving in the direction of the expected pull.", "Ensure the second wrap crosses over the standing part of the working line.", "Pass the working end around the spar a third time, outside the first two wraps.", "Tuck the working end under its own last wrap to form a half hitch.", "Pull tight and slide it to grip."],
        mistakes: "Wrapping in the wrong direction provides zero grip under load.",
        uses: "Taking tension off a jammed line, pulling a smooth rod.",
        safety: "Holds well in one direction, slips easily in the other.",
        variations: "Icicle Hitch (much more secure on smooth PVC/metal)."
    },
    {
        id: "k15", name: "Sheepshank", difficulty: "Intermediate", tags: ["loop", "sailing"],
        description: "Used to shorten a rope or bypass a damaged section.",
        steps: ["Gather the rope into three parallel lengths (an S-shape).", "At one end, form a half hitch in the standing part.", "Slip the half hitch over the adjacent bight (loop).", "Go to the other end and form another half hitch in the standing part.", "Slip that half hitch over the second bight.", "Pull both standing ends to carefully tighten and lock the bights."],
        mistakes: "Letting the rope go slack will cause the entire knot to fall apart instantly.",
        uses: "Temporarily shortening a line, removing tension from a frayed spot.",
        safety: "Requires constant tension. Dangerous if used in critical or variable-load situations.",
        variations: "Kamikaze Knot (cut center strand, highly dangerous)."
    },
    {
        id: "k16", name: "Overhand Knot", difficulty: "Beginner", tags: ["stopper", "decorative"],
        description: "The simplest and most fundamental of all knots.",
        steps: ["Form a simple loop by crossing the working end over the standing part.", "Pass the working end through the loop.", "Pull both ends to tighten.", "Ensure the knot is snug.", "Leave a short tail.", "Ready to use as a basic stopper."],
        mistakes: "Leaving too short of a tail allows the knot to untie itself.",
        uses: "Preventing unraveling, basic stoppers.",
        safety: "Jams extremely tightly under tension. Ruins rope strength significantly.",
        variations: "Double Overhand."
    },
    {
        id: "k17", name: "Slip Knot", difficulty: "Beginner", tags: ["loop", "decorative"],
        description: "A stopper knot that can be instantly untied by pulling the tail.",
        steps: ["Form a loop in the rope.", "Push a bight (a bent portion) of the standing part through the loop.", "Pull the bight to tighten the original loop around it.", "Do not pull the working end completely through.", "To release, pull the working tail sharply.", "The knot will spill and undo instantly."],
        mistakes: "Pushing the working end through instead of the standing part makes a noose.",
        uses: "Knitting, temporary holds, quick-release applications.",
        safety: "Will spill under load if the wrong end is pulled.",
        variations: "Slipped Buntline."
    },
    {
        id: "k18", name: "Constrictor Knot", difficulty: "Advanced", tags: ["hitch", "decorative"],
        description: "One of the most effective binding knots. Often impossible to untie.",
        steps: ["Wrap the working end around the object.", "Cross it over the standing part.", "Wrap it around the object a second time.", "Bring the working end over the standing part.", "Tuck it under the cross created in step 2.", "Pull both ends forcefully to lock."],
        mistakes: "Confusing it with a Clove Hitch (missing the final under-tuck).",
        uses: "Whipping rope ends, sealing bags, hose clamps.",
        safety: "Often has to be cut off. Do not tie around body parts.",
        variations: "Double Constrictor."
    },
    {
        id: "k19", name: "Buntline Hitch", difficulty: "Intermediate", tags: ["hitch", "sailing"],
        description: "A highly secure knot for attaching a rope to a ring or bar.",
        steps: ["Pass the working end through the ring.", "Bring it over the standing part.", "Pass it under the standing part.", "Bring it over the standing part again towards the ring.", "Tuck the end down through the loop just made.", "Pull tight, sliding the knot tight against the ring."],
        mistakes: "Tying the half hitches away from the ring makes it a Two Half Hitches instead.",
        uses: "Securing halyards to shackles.",
        safety: "Jams very badly under load. Very secure.",
        variations: "Slipped Buntline."
    },
    {
        id: "k20", name: "Carrick Bend", difficulty: "Advanced", tags: ["bend", "sailing", "decorative"],
        description: "Used to join two very heavy or stiff ropes.",
        steps: ["Form a loop in the first rope, with the tail under the standing part.", "Lay the second rope across the loop.", "Pass the second tail under the first standing part.", "Weave it over the first tail, under the first loop side.", "Over the second standing part, under the other first loop side.", "Pull slowly, allowing the knot to capsize into a symmetrical shape."],
        mistakes: "Pulling too fast prevents capsizing, creating an ugly, weak knot.",
        uses: "Towing hawsers, anchor warps.",
        safety: "Maintains strength well and never jams.",
        variations: "Diamond Knot."
    },
    {
        id: "k21", name: "Trucker's Hitch", difficulty: "Advanced", tags: ["hitch", "rescue"],
        description: "A mechanical advantage system for cinching down loads.",
        steps: ["Tie a fixed loop (like an Alpine Butterfly or Slip Knot) high on the standing part.", "Pass the working end down around the anchor point.", "Bring the working end up and pass it through the loop.", "Pull down hard on the working end to cinch the load tight (3:1 advantage).", "Pinch the base of the loop to hold tension.", "Secure with a slippery half hitch around the standing part."],
        mistakes: "Using a weak loop knot that jams under the intense 3:1 pressure.",
        uses: "Tying down cargo on trucks, tightening tarps.",
        safety: "Can generate enough force to snap cords or bend anchors.",
        variations: "Automatic Trucker's Hitch."
    },
    {
        id: "k22", name: "Anchor Bend", difficulty: "Intermediate", tags: ["hitch", "sailing"],
        description: "A very secure way to attach a rope to an anchor ring.",
        steps: ["Pass the working end through the anchor ring twice, leaving a round turn.", "Pass the working end behind the standing part.", "Tuck the end down through the round turn loops.", "Pull tight to secure the first hitch.", "Finish with a standard half hitch higher up the standing part.", "Seize (tie down) the tail to the standing part for permanence."],
        mistakes: "Omitting the final half hitch compromises security.",
        uses: "Securing anchors, mooring rings.",
        safety: "Extremely chafe-resistant due to the double loop on the ring.",
        variations: "Fisherman's Bend."
    },
    {
        id: "k23", name: "Perfection Loop", difficulty: "Advanced", tags: ["loop", "sailing"],
        description: "Also called the Angler's Loop, sits perfectly in line with the standing part.",
        steps: ["Make a loop in the rope.", "Wrap the working end around the base of the loop.", "Pass the working end behind the standing part.", "Tuck the working end through the new loop you just created.", "Adjust the size of the upper loop.", "Pull the upper loop and standing part to lock it tight."],
        mistakes: "Twisting the first loop makes the knot bulky and misaligned.",
        uses: "Bungee cords, fishing leaders.",
        safety: "Prone to jamming in standard rope, better in monofilament.",
        variations: "None."
    },
    {
        id: "k24", name: "Blood Knot", difficulty: "Advanced", tags: ["bend", "sailing"],
        description: "Used to join two lines of similar diameter, widely used in fishing.",
        steps: ["Overlap the two ends of the lines.", "Wrap line A around line B 5 times.", "Bring the end of A back and tuck it between the two lines at the center.", "Wrap line B around line A 5 times in the opposite direction.", "Tuck the end of B through the center hole in the opposite direction to A.", "Lubricate and pull both standing parts slowly to cinch tight."],
        mistakes: "Asymmetrical wraps cause the knot to fail under tension.",
        uses: "Fishing line leaders.",
        safety: "Weakens line strength if not lubricated before tightening.",
        variations: "Half Blood Knot."
    },
    {
        id: "k25", name: "Palomar Knot", difficulty: "Intermediate", tags: ["hitch", "sailing"],
        description: "An exceptionally strong and simple knot for terminal tackle.",
        steps: ["Double the line to form a long bight.", "Pass the bight through the eye of the hook.", "Tie a loose overhand knot with the doubled line.", "Pass the loop of the bight completely over the hook.", "Moisten the line.", "Pull both the standing line and the tag end to tighten."],
        mistakes: "Trapping the line on the hook shank rather than the eye.",
        uses: "Attaching fishing hooks and swivels.",
        safety: "Near 100% line strength retention.",
        variations: "Improved Palomar."
    },
    {
        id: "k26", name: "Improved Clinch Knot", difficulty: "Intermediate", tags: ["hitch", "sailing"],
        description: "A staple fishing knot for tying line to a hook.",
        steps: ["Pass the end of the line through the eye of the hook.", "Wrap the tag end around the standing part 5 to 7 times.", "Pass the tag end through the small loop near the hook eye.", "Pass the tag end back through the large loop you just created.", "Moisten the knot.", "Pull the tag end and standing part to slide the coils tight against the eye."],
        mistakes: "Too few wraps allows slipping; too many prevents tightening.",
        uses: "Fishing lures, hooks.",
        safety: "Can slip with braided synthetic lines.",
        variations: "Standard Clinch Knot."
    },
    {
        id: "k27", name: "Surgeon's Knot", difficulty: "Beginner", tags: ["bend", "rescue"],
        description: "A variation of the Square knot with an extra twist to prevent slipping.",
        steps: ["Lay the two ends together.", "Pass the right end over and under the left end.", "Pass the same end over and under a second time.", "Pull to tighten the base.", "Tie a standard half knot on top (right over left).", "Pull all four ends to tighten."],
        mistakes: "Tying the top half knot backward creates a slipping Granny variant.",
        uses: "Sutures, tying slippery twine.",
        safety: "Maintains tension while the second half of the knot is tied.",
        variations: "Surgeon's Loop."
    },
    {
        id: "k28", name: "Uni Knot", difficulty: "Intermediate", tags: ["hitch", "loop"],
        description: "A versatile knot that can act as a hitch, loop, or bend.",
        steps: ["Pass line through the eye and parallel to the standing part.", "Form a loop by folding the tag end back toward the eye.", "Wrap the tag end around the double lines inside the loop 5-6 times.", "Pull the tag end to snug the turns.", "Pull the standing line to slide the knot down to the eye.", "Trim the tag end."],
        mistakes: "Wrapping outside the loop ruins the mechanics.",
        uses: "Attaching hooks, joining lines (Double Uni).",
        safety: "Very reliable in all types of monofilament and braid.",
        variations: "Double Uni Knot."
    },
    {
        id: "k29", name: "Ashley Bend", difficulty: "Advanced", tags: ["bend"],
        description: "A very secure bend created by Clifford Ashley.",
        steps: ["Tie an overhand knot in one rope, leaving the loop open.", "Pass the second rope down through the loop.", "Wrap the second rope around the standing part of the first.", "Weave the second rope over its own standing part.", "Pass the end of the second rope down through the center hole.", "Dress carefully and pull tight."],
        mistakes: "Misrouting the second rope leads to complete knot failure.",
        uses: "Joining heavy ropes.",
        safety: "Excellent security, minimal profile.",
        variations: "None."
    },
    {
        id: "k30", name: "Zeppelin Bend", difficulty: "Advanced", tags: ["bend", "climbing"],
        description: "An incredibly secure, jam-resistant knot for joining two ropes.",
        steps: ["Form a '6' with rope A (tail over standing part).", "Form a '9' with rope B (tail under standing part).", "Place the '6' on top of the '9', aligning the loops.", "Pass the tail of A down through the center hole.", "Pass the tail of B up through the center hole.", "Pull all four ends to tighten."],
        mistakes: "Flipping the 6 or 9 creates a Hunter's or Ashley bend instead.",
        uses: "Mooring lines, heavy load bearing.",
        safety: "Never jams, easy to untie after massive loads.",
        variations: "Hunter's Bend."
    },
    {
        id: "k31", name: "Figure Eight on a Bight", difficulty: "Beginner", tags: ["loop", "climbing", "rescue"],
        description: "Forms a secure loop in the middle or end of a rope.",
        steps: ["Double the rope to form a bight.", "Hold the bight like a single rope.", "Wrap the bight over the doubled standing part.", "Wrap it behind the standing part.", "Tuck the bight down through the top loop.", "Pull tight to form a solid Figure 8 shape."],
        mistakes: "Leaving twisted strands inside the knot weakens it.",
        uses: "Clipping into a carabiner, making a handle.",
        safety: "The gold standard for climbing safety loops.",
        variations: "Directional Figure 8."
    },
    {
        id: "k32", name: "Figure Eight Follow-Through", difficulty: "Intermediate", tags: ["loop", "climbing"],
        description: "Used to tie a Figure Eight loop around a fixed object like a harness.",
        steps: ["Tie a loose, single Figure Eight knot 3 feet from the rope end.", "Thread the working end through the harness loop.", "Take the working end and re-enter the single Figure 8.", "Trace the exact path of the Figure 8 backwards.", "Pull both ends tight.", "Ensure tails are at least 6 inches long."],
        mistakes: "Failing to parallel the strands perfectly (crossing them).",
        uses: "Standard tie-in knot for rock climbing.",
        safety: "Easily inspected visually by partners.",
        variations: "Figure Eight with Yosemite Finish."
    },
    {
        id: "k33", name: "French Bowline", difficulty: "Advanced", tags: ["loop", "rescue"],
        description: "A double-loop bowline used as a makeshift sling or bosun's chair.",
        steps: ["Form a standard bowline loop, but make it very large.", "Before completing the knot, pass the rope through the 'rabbit hole' twice.", "Complete the bowline normally.", "Adjust the two large loops to desired sizes.", "One loop goes around the chest, the other under the legs.", "Tighten securely."],
        mistakes: "Incorrectly sizing the loops before locking the knot.",
        uses: "Emergency rescue harnesses.",
        safety: "Do not use in place of a manufactured harness if one is available.",
        variations: "Portuguese Bowline."
    },
    {
        id: "k34", name: "Yosemite Bowline", difficulty: "Advanced", tags: ["loop", "climbing"],
        description: "A standard Bowline with a follow-through finish to prevent slipping.",
        steps: ["Tie a standard Bowline.", "Take the tag end that exits inside the loop.", "Wrap it around the outside of the main loop.", "Follow the standing part back down into the main knot body.", "Pull tight, ensuring the knot seats properly.", "The tail should exit parallel to the standing part."],
        mistakes: "Misrouting the finish turns it into a slip knot.",
        uses: "Climbing tie-in (alternative to Figure 8).",
        safety: "Solves the Bowline's issue of shaking loose under cyclic loads.",
        variations: "Double Yosemite Bowline."
    },
    {
        id: "k35", name: "Bowline on a Bight", difficulty: "Intermediate", tags: ["loop", "rescue"],
        description: "Creates a pair of fixed-size loops in the middle of a rope.",
        steps: ["Double the rope to form a bight.", "Tie a standard overhand knot with the doubled bight, but keep it loose.", "Open the loop of the bight.", "Pass the entire overhand knot through this opened bight.", "Bring the bight all the way down and up around the standing parts.", "Pull the standing parts to tighten the two loops."],
        mistakes: "Failing to pull the bight completely over the knot before tightening.",
        uses: "Rescues, lifting uncooperative loads.",
        safety: "Provides two loops for added comfort/balance.",
        variations: "None."
    },
    {
        id: "k36", name: "Larks Head (Cow Hitch)", difficulty: "Beginner", tags: ["hitch", "decorative"],
        description: "A quick, simple hitch to attach a loop to a ring or pole.",
        steps: ["Pass a bight (loop) of rope around the pole.", "Bring the two ends of the rope through the bight.", "Pull the ends to cinch the loop tight against the pole.", "For a single line: Wrap around, cross over, wrap around the other way.", "Tuck the end under the cross.", "Pull tight."],
        mistakes: "Using on a smooth pole with unequal tension on ends causes slipping.",
        uses: "Luggage tags, attaching lanyards, macrame starting knot.",
        safety: "Insecure if only one end of the rope is loaded.",
        variations: "Pedigree Cow Hitch."
    },
    {
        id: "k37", name: "Mooring Hitch", difficulty: "Intermediate", tags: ["hitch", "sailing"],
        description: "A quick-release knot used to temporarily moor a small boat.",
        steps: ["Pass the working end around a post.", "Form a loop in the standing part.", "Pull a bight of the working end through the loop.", "Form a second loop in the remaining working end.", "Pass this second loop through the first working-end bight.", "Pull the standing part to lock. Pull the tail to release."],
        mistakes: "Pulling the working end instead of the standing part to tighten.",
        uses: "Tying up rowboats, temporary holds.",
        safety: "Can capsize if bumped heavily.",
        variations: "Tumble Hitch."
    },
    {
        id: "k38", name: "Marlinspike Hitch", difficulty: "Beginner", tags: ["hitch", "sailing"],
        description: "A temporary knot used to attach a handle (marlinspike) to a rope for better grip.",
        steps: ["Make an overhand loop in the rope.", "Fold the loop over the standing part.", "Push a bight of the standing part up through the loop.", "Insert a spike, stick, or tool into the new bight.", "Pull both ends of the rope to trap the spike tightly.", "Remove the spike, and the knot instantly unties itself."],
        mistakes: "Inserting the spike into the wrong side of the loop.",
        uses: "Pulling rope tight, making rope ladders.",
        safety: "Spike can fly out if tension is released abruptly.",
        variations: "None."
    },
    {
        id: "k39", name: "Girth Hitch", difficulty: "Beginner", tags: ["hitch", "climbing"],
        description: "The climbing term for a Lark's Head knot, used with sewn slings.",
        steps: ["Take a sewn loop of webbing or sling.", "Pass one end of the loop around a post or through a harness tie-in.", "Thread the other end of the loop through the first end.", "Pull the sling until it cinches tightly around the post.", "Ensure the webbing lays flat with no twists.", "Check for security."],
        mistakes: "Applying a Girth Hitch to a sharp edge can cut the webbing.",
        uses: "Attaching slings to harnesses, connecting to carabiners.",
        safety: "Reduces the strength of the sling by roughly 40%.",
        variations: "Double Girth Hitch."
    },
    {
        id: "k40", name: "Barrel Hitch", difficulty: "Advanced", tags: ["hitch", "sailing"],
        description: "Used to safely hoist cylindrical objects like barrels or buckets upright.",
        steps: ["Place the barrel on top of a rope.", "Bring both ends up over the top of the barrel.", "Tie a simple overhand knot over the center of the barrel.", "Open the overhand knot and spread its two halves down over the sides of the barrel.", "The rope should now encircle the barrel tightly.", "Tie the two ends together with a Bowline above the barrel to form a hoist loop."],
        mistakes: "Placing the rope too high on the barrel allows it to slip off the top.",
        uses: "Hoisting paint buckets, oil drums, cargo.",
        safety: "Only works well if the object has a lip or bulge to hold the ropes.",
        variations: "None."
    }
];
