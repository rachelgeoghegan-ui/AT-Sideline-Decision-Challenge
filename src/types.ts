export type Choice = "green" | "yellow" | "red";

export type Difficulty = "beginner" | "intermediate";

export type Scenario = {
  id: string;
  title: string;
  setting: string;
  scenarioText: string;
  correctChoice: Choice;
  explanation: string;
  whatATNotices: string;
  whyItMatters: string;
  coolFactor: string;
  difficulty: Difficulty;
  category: string;
};

export type GameMode = "group" | "rapid" | "team";
