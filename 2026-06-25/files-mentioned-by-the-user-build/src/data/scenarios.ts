import type { Scenario } from "../types";

export const scenarios: Scenario[] = [
  {
    id: "heat-001",
    title: "Hot Practice Problem",
    setting: "Summer football practice",
    scenarioText:
      "A student has been running conditioning drills on a hot day. They stop suddenly, seem confused, and are not answering questions normally.",
    correctChoice: "red",
    explanation:
      "Confusion during intense activity in the heat can be a serious warning sign. This is not a situation where we wait to see if it passes.",
    whatATNotices:
      "The athletic trainer notices heat exposure, intense effort, sudden behavior change, and confusion all happening together.",
    whyItMatters:
      "Some heat illnesses can become life-threatening quickly. Athletic trainers are trained to recognize this and start emergency care.",
    coolFactor:
      "ATs prepare for high-pressure moments before practice even starts, including heat plans, cold tubs, and emergency routes.",
    difficulty: "beginner",
    category: "Heat illness",
  },
  {
    id: "concussion-001",
    title: "The Big Collision",
    setting: "Soccer match",
    scenarioText:
      "Two players collide while going for a header. One gets up slowly, says they feel fine, but keeps asking what the score is.",
    correctChoice: "yellow",
    explanation:
      "Repeated questions after a hit can be concerning. This person should not continue until an athletic trainer evaluates them.",
    whatATNotices:
      "The AT notices the hit, the slow recovery, and the memory-like clue of asking the same question again.",
    whyItMatters:
      "Returning too soon after a possible head injury can make things worse. The safer move is to pause and get checked.",
    coolFactor:
      "ATs are trained to spot subtle clues, even when an athlete really wants to stay in the game.",
    difficulty: "beginner",
    category: "Concussion concerns",
  },
  {
    id: "breathing-001",
    title: "Can't Catch Their Breath",
    setting: "Track practice",
    scenarioText:
      "A runner finishes a sprint and is wheezing. They are sitting upright, trying to breathe, and say their rescue inhaler is in their backpack.",
    correctChoice: "yellow",
    explanation:
      "Breathing problems deserve attention right away. An athletic trainer would want to evaluate and help the student follow their care plan.",
    whatATNotices:
      "The AT notices wheezing, posture, difficulty speaking comfortably, and whether the student has medication nearby.",
    whyItMatters:
      "Breathing can change quickly during activity. Getting help early can prevent a scary situation from becoming an emergency.",
    coolFactor:
      "ATs know the action plan and the environment, so they can connect fast care with practical sideline decisions.",
    difficulty: "beginner",
    category: "Breathing problems",
  },
  {
    id: "cardiac-001",
    title: "Chest Pain During Drills",
    setting: "Basketball open gym",
    scenarioText:
      "A student stops during full-court drills, grips their chest, and says they feel pressure and lightheaded.",
    correctChoice: "red",
    explanation:
      "Chest pressure with lightheadedness during exercise may require emergency action. Stop activity and get emergency help.",
    whatATNotices:
      "The AT notices chest symptoms, exercise timing, lightheadedness, and whether the student looks pale or faint.",
    whyItMatters:
      "Some heart-related emergencies are rare but serious. Athletic trainers practice emergency steps so no one loses time.",
    coolFactor:
      "ATs often help lead emergency action plans, including AED access and clear roles for the whole team.",
    difficulty: "beginner",
    category: "Cardiac red flags",
  },
  {
    id: "ankle-001",
    title: "Rolled Ankle",
    setting: "Volleyball practice",
    scenarioText:
      "A player lands on another foot and rolls their ankle. They limp to the bench and can put a little weight on it, but it is swelling fast.",
    correctChoice: "yellow",
    explanation:
      "Fast swelling and limping are good reasons to get the athletic trainer. The player should be checked before returning.",
    whatATNotices:
      "The AT notices how the injury happened, swelling speed, walking ability, pain location, and whether the joint seems stable.",
    whyItMatters:
      "Playing through an injury can turn a small problem into a bigger one. Evaluation helps guide safe next steps.",
    coolFactor:
      "ATs make return-to-play calls using observation, hands-on assessment, and the demands of the sport.",
    difficulty: "beginner",
    category: "Ankle and knee injuries",
  },
  {
    id: "knee-001",
    title: "The Knee Buckle",
    setting: "Girls flag football",
    scenarioText:
      "A player plants to change direction, their knee buckles, and they drop to the ground. They say they felt a pop and do not want to stand.",
    correctChoice: "yellow",
    explanation:
      "A pop, buckle, and not wanting to stand are concerning signs. An athletic trainer should evaluate before the athlete moves much.",
    whatATNotices:
      "The AT notices the non-contact change of direction, the pop, swelling, pain, and whether the knee can safely bear weight.",
    whyItMatters:
      "Knee injuries can affect walking, school, sports, and daily life. Early care protects the student and helps plan follow-up.",
    coolFactor:
      "ATs blend quick sideline decisions with longer recovery planning, from day one through return to activity.",
    difficulty: "intermediate",
    category: "Ankle and knee injuries",
  },
  {
    id: "shoulder-001",
    title: "Awkward Shoulder",
    setting: "Wrestling tournament",
    scenarioText:
      "A wrestler lands awkwardly. Their shoulder looks uneven, and they are holding their arm very still against their body.",
    correctChoice: "yellow",
    explanation:
      "An uneven-looking shoulder and guarding the arm need an athletic trainer evaluation. Do not try to pull or push it back.",
    whatATNotices:
      "The AT notices body position, shape compared with the other side, pain level, and signs that nerves or blood flow may be affected.",
    whyItMatters:
      "Moving the arm the wrong way can make an injury worse. A trained evaluation helps protect the athlete.",
    coolFactor:
      "ATs are calm problem-solvers when something looks dramatic and everyone nearby starts reacting.",
    difficulty: "intermediate",
    category: "Shoulder and wrist injuries",
  },
  {
    id: "wrist-001",
    title: "Skate Park Fall",
    setting: "Community skate event",
    scenarioText:
      "A student falls onto an outstretched hand. Their wrist hurts, and they say it feels weird when they try to move their fingers.",
    correctChoice: "yellow",
    explanation:
      "Pain plus a weird feeling in the fingers deserves evaluation. The person should pause activity and get checked.",
    whatATNotices:
      "The AT notices the fall mechanism, wrist position, finger movement, sensation, and circulation clues.",
    whyItMatters:
      "Hands and wrists are used for almost everything. Early care can protect function and comfort.",
    coolFactor:
      "ATs work anywhere active people are, including community events, clubs, camps, and clinics.",
    difficulty: "beginner",
    category: "Shoulder and wrist injuries",
  },
  {
    id: "skin-001",
    title: "The Mystery Rash",
    setting: "Wrestling room",
    scenarioText:
      "Before practice, a student shows a red, crusty spot on their arm. They say it has spread since yesterday but want to wrestle anyway.",
    correctChoice: "yellow",
    explanation:
      "A spreading skin problem should be checked before contact practice. This could be concerning for the athlete and teammates.",
    whatATNotices:
      "The AT notices location, spread, drainage or crusting, covering, and whether other athletes have similar spots.",
    whyItMatters:
      "Some skin conditions can spread through close contact. Checking first helps protect the whole team.",
    coolFactor:
      "ATs do public health work too: they help prevent small team problems from becoming big team problems.",
    difficulty: "beginner",
    category: "Skin concerns",
  },
  {
    id: "allergy-001",
    title: "Snack Table Surprise",
    setting: "Band competition",
    scenarioText:
      "A student eats a snack, then says their throat feels tight. Their lips look swollen and they seem scared.",
    correctChoice: "red",
    explanation:
      "Throat tightness and swelling after food may require emergency action. Get help immediately.",
    whatATNotices:
      "The AT notices timing after eating, swelling, breathing or throat symptoms, and whether emergency medication is available.",
    whyItMatters:
      "Allergic reactions can worsen quickly. Fast action can be lifesaving.",
    coolFactor:
      "ATs support more than sports. Performing arts and travel events need healthcare decision-makers too.",
    difficulty: "beginner",
    category: "Allergic reactions",
  },
  {
    id: "diabetes-001",
    title: "Shaky at Halftime",
    setting: "Basketball game",
    scenarioText:
      "At halftime, a player with diabetes looks sweaty and shaky. They are having trouble focusing on what the coach is saying.",
    correctChoice: "yellow",
    explanation:
      "Sweaty, shaky, and unfocused can be concerning, especially with diabetes. An athletic trainer would want to evaluate right away.",
    whatATNotices:
      "The AT notices behavior change, sweating, shakiness, timing with food and activity, and the student's diabetes plan.",
    whyItMatters:
      "Blood sugar issues can affect thinking, energy, and safety. The student should not just be sent back into play.",
    coolFactor:
      "ATs use medical plans and real-time observation to keep students active as safely as possible.",
    difficulty: "beginner",
    category: "Diabetes and blood sugar",
  },
  {
    id: "mental-001",
    title: "Not Acting Like Themself",
    setting: "Dance rehearsal",
    scenarioText:
      "A usually upbeat dancer is sitting alone, crying, and says, 'I can't do this anymore.' They do not want anyone to tell an adult.",
    correctChoice: "yellow",
    explanation:
      "Emotional distress matters. This person should be connected with a trusted adult and an athletic trainer or school support person.",
    whatATNotices:
      "The AT notices a change from normal behavior, isolation, what the student says, and whether there may be immediate safety concerns.",
    whyItMatters:
      "Healthcare includes mental and emotional health. Students deserve support before things feel impossible.",
    coolFactor:
      "ATs build trust with students over time, which can make them one of the first people to notice when something is off.",
    difficulty: "intermediate",
    category: "Mental health",
  },
  {
    id: "equipment-001",
    title: "Helmet Problem",
    setting: "Lacrosse practice",
    scenarioText:
      "A player says their helmet keeps sliding down over their eyes during drills. They want to tighten it later and keep practicing now.",
    correctChoice: "yellow",
    explanation:
      "Poorly fitting safety equipment should be fixed before continuing. An athletic trainer or equipment staff should help.",
    whatATNotices:
      "The AT notices blocked vision, fit, chin strap position, and whether the gear can protect the player the way it should.",
    whyItMatters:
      "Equipment only helps when it fits and works correctly. Visibility problems can also create new injury risks.",
    coolFactor:
      "ATs prevent injuries, not just respond after something happens.",
    difficulty: "beginner",
    category: "Equipment safety",
  },
  {
    id: "weather-001",
    title: "Lightning Delay",
    setting: "Softball field",
    scenarioText:
      "You hear thunder while teams are warming up. The sky still looks mostly clear, and some students say the storm is far away.",
    correctChoice: "red",
    explanation:
      "Thunder means lightning is close enough to be dangerous. Stop activity and move to a safe location.",
    whatATNotices:
      "The AT notices thunder, storm direction, shelter options, and whether everyone can clear the field quickly.",
    whyItMatters:
      "Weather safety decisions protect entire groups. Waiting until lightning is visible can be too late.",
    coolFactor:
      "ATs often help make the unpopular call that keeps everyone safe.",
    difficulty: "beginner",
    category: "Environmental safety",
  },
  {
    id: "jobsite-001",
    title: "Warehouse Dizzy Spell",
    setting: "Summer jobsite wellness visit",
    scenarioText:
      "A warehouse worker lifting boxes in a hot space becomes dizzy and sits down. They are alert and drinking water but still look wiped out.",
    correctChoice: "yellow",
    explanation:
      "Dizziness during hot physical work should be checked. This person should pause work and be evaluated before continuing.",
    whatATNotices:
      "The AT notices heat, workload, hydration, alertness, sweating, and whether symptoms improve with rest and cooling.",
    whyItMatters:
      "Athletic trainers can work in occupational settings where active jobs place real stress on the body.",
    coolFactor:
      "ATs are part of workplace safety teams, helping people stay healthy on the job.",
    difficulty: "beginner",
    category: "Workplace and tactical",
  },
  {
    id: "tactical-001",
    title: "Training Drill Collapse",
    setting: "Fire academy drill",
    scenarioText:
      "During a gear-heavy stair drill, a recruit stumbles, drops to one knee, and is slow to answer simple questions.",
    correctChoice: "red",
    explanation:
      "A change in responsiveness during intense training may require emergency action, especially with heat and heavy gear involved.",
    whatATNotices:
      "The AT notices exertion, gear load, environment, responsiveness, and how quickly the person changed.",
    whyItMatters:
      "Tactical settings can push bodies hard. Quick recognition and emergency planning can protect lives.",
    coolFactor:
      "ATs can support firefighters, police, military groups, and other tactical teams.",
    difficulty: "intermediate",
    category: "Workplace and tactical",
  },
  {
    id: "performing-001",
    title: "Backstage Lightheaded",
    setting: "Theater rehearsal",
    scenarioText:
      "A performer in a heavy costume says they feel lightheaded backstage. They sit down, sip water, and start feeling better.",
    correctChoice: "green",
    explanation:
      "This may not be an emergency if they improve quickly, but someone should still keep an eye on them and reduce risk factors.",
    whatATNotices:
      "The AT notices costume heat, hydration, food timing, stage temperature, and whether symptoms return.",
    whyItMatters:
      "Active people are not only athletes. Performers can face heat, fatigue, and injury risks too.",
    coolFactor:
      "ATs can help shows go on safely by planning for the demands performers face.",
    difficulty: "beginner",
    category: "Performing arts",
  },
  {
    id: "nosebleed-001",
    title: "Nosebleed on the Bench",
    setting: "Basketball game",
    scenarioText:
      "A player gets bumped and has a nosebleed. They are alert, breathing normally, and the bleeding is slowing with pressure.",
    correctChoice: "green",
    explanation:
      "This may be something to monitor if symptoms stay mild and bleeding is controlled, while still following blood cleanup rules.",
    whatATNotices:
      "The AT notices alertness, breathing, bleeding amount, whether there was a head hit, and safe cleanup.",
    whyItMatters:
      "Not every moment is an emergency, but even common issues need smart safety habits.",
    coolFactor:
      "ATs handle the big dramatic moments and the everyday details that keep events running safely.",
    difficulty: "beginner",
    category: "General safety",
  },
  {
    id: "cramps-001",
    title: "Calf Cramp",
    setting: "Cross-country meet",
    scenarioText:
      "Near the finish, a runner grabs their calf with a painful cramp. They are alert, talking normally, and the weather is mild.",
    correctChoice: "green",
    explanation:
      "A cramp can still hurt a lot, but with normal alertness and mild weather, the first step may be monitoring and basic support.",
    whatATNotices:
      "The AT notices the environment, hydration clues, pain pattern, walking ability, and whether symptoms spread or worsen.",
    whyItMatters:
      "Good healthcare means matching the response to the whole picture, not just reacting to one symptom.",
    coolFactor:
      "ATs make fast decisions without overreacting or underreacting.",
    difficulty: "beginner",
    category: "General safety",
  },
  {
    id: "neck-001",
    title: "Tingling After a Hit",
    setting: "Football game",
    scenarioText:
      "After a tackle, a player says their neck hurts and both hands feel tingly. They are lying still and look worried.",
    correctChoice: "red",
    explanation:
      "Neck pain with tingling in both hands may require emergency action. Keep the person still and get emergency help.",
    whatATNotices:
      "The AT notices neck symptoms, tingling, body position, alertness, and whether movement could increase risk.",
    whyItMatters:
      "Possible spine-related warning signs are handled carefully because movement decisions matter.",
    coolFactor:
      "ATs train with emergency teams so everyone knows their role before a serious injury happens.",
    difficulty: "intermediate",
    category: "Emergency action",
  },
  {
    id: "eye-001",
    title: "Hit Near the Eye",
    setting: "Baseball practice",
    scenarioText:
      "A student gets hit near the eye by a ball. They say their vision is blurry and light bothers them.",
    correctChoice: "yellow",
    explanation:
      "Vision changes after a hit should be checked. This person should stop activity and be evaluated.",
    whatATNotices:
      "The AT notices vision changes, eye movement, swelling, pain, and whether symptoms are getting worse.",
    whyItMatters:
      "Eyes are delicate, and vision changes are not something to play through.",
    coolFactor:
      "ATs know when a small-looking injury has a big safety reason to stop and check.",
    difficulty: "beginner",
    category: "General safety",
  },
  {
    id: "sickle-001",
    title: "Unusual Leg Pain",
    setting: "Conditioning test",
    scenarioText:
      "During repeated sprints, a student suddenly has heavy leg pain and says they cannot keep going. They are not acting like it is a normal cramp.",
    correctChoice: "yellow",
    explanation:
      "Unusual severe pain during intense conditioning should be taken seriously. An athletic trainer would want to evaluate immediately.",
    whatATNotices:
      "The AT notices sprint intensity, pain description, fatigue, breathing, temperature, and known health history if available.",
    whyItMatters:
      "Some conditions make intense exercise riskier. ATs use health history and observation to guide safer participation.",
    coolFactor:
      "ATs do preparation before the season so they can make better decisions in the moment.",
    difficulty: "intermediate",
    category: "Emergency action",
  },
  {
    id: "hydration-001",
    title: "Headache at Practice",
    setting: "Tennis practice",
    scenarioText:
      "A player has a mild headache and says they skipped lunch. They are alert, joking with teammates, and symptoms improve after rest and a snack.",
    correctChoice: "green",
    explanation:
      "This may be okay to monitor if symptoms improve and no major warning signs show up. They should still be watched.",
    whatATNotices:
      "The AT notices food timing, hydration, heat, alertness, symptom changes, and whether anything new appears.",
    whyItMatters:
      "Monitoring matters because mild symptoms can either resolve or reveal a bigger problem.",
    coolFactor:
      "ATs help students learn body awareness, not just injury rules.",
    difficulty: "beginner",
    category: "Heat illness",
  },
  {
    id: "equipment-002",
    title: "Wet Floor Warmup",
    setting: "Gym before practice",
    scenarioText:
      "A leak leaves a slick spot near the court. Players are trying to warm up around it because practice starts in two minutes.",
    correctChoice: "yellow",
    explanation:
      "A slick playing surface should be fixed before activity continues. Get the athletic trainer, coach, or facility staff involved.",
    whatATNotices:
      "The AT notices surface safety, traffic patterns, footwear, and how quickly the area can be blocked or cleaned.",
    whyItMatters:
      "Preventing injuries can be as important as treating them after they happen.",
    coolFactor:
      "ATs scan the environment like safety detectives, even before anyone gets hurt.",
    difficulty: "beginner",
    category: "Environmental safety",
  },
];

export const categories = Array.from(
  new Set(scenarios.map((scenario) => scenario.category)),
).sort();
