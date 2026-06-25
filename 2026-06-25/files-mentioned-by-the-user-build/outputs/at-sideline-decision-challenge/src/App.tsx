import { useEffect, useMemo, useState } from "react";
import { categories, scenarios as scenarioBank } from "./data/scenarios";
import type { Choice, GameMode, Scenario } from "./types";

const choiceMeta: Record<
  Choice,
  { label: string; meaning: string; icon: string; key: string }
> = {
  green: {
    label: "Keep an eye on it",
    meaning: "Monitor and watch for changes",
    icon: "●",
    key: "1",
  },
  yellow: {
    label: "Get the athletic trainer",
    meaning: "Needs an AT evaluation before continuing",
    icon: "▲",
    key: "2",
  },
  red: {
    label: "Emergency action",
    meaning: "Stop activity and activate emergency response",
    icon: "■",
    key: "3",
  },
};

const choiceOrder: Choice[] = ["green", "yellow", "red"];
const rapidSeconds = 18;

type Screen = "title" | "play" | "summary";
type ScenarioCount = 5 | 10 | 15 | "all";

type TeamScores = {
  home: number;
  away: number;
};

function shuffleList<T>(items: T[]) {
  return [...items].sort(() => Math.random() - 0.5);
}

function clampScenarioCount(count: ScenarioCount, available: number) {
  return count === "all" ? available : Math.min(count, available);
}

function App() {
  const [screen, setScreen] = useState<Screen>("title");
  const [mode, setMode] = useState<GameMode>("group");
  const [scenarioCount, setScenarioCount] = useState<ScenarioCount>(10);
  const [timerOn, setTimerOn] = useState(false);
  const [scoreOn, setScoreOn] = useState(true);
  const [shuffleOn, setShuffleOn] = useState(true);
  const [selectedCategories, setSelectedCategories] = useState<string[]>(categories);
  const [teamNames, setTeamNames] = useState({ home: "Team A", away: "Team B" });

  const [round, setRound] = useState<Scenario[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedChoice, setSelectedChoice] = useState<Choice | null>(null);
  const [showReveal, setShowReveal] = useState(false);
  const [correct, setCorrect] = useState(0);
  const [streak, setStreak] = useState(0);
  const [bestStreak, setBestStreak] = useState(0);
  const [timeLeft, setTimeLeft] = useState(rapidSeconds);
  const [teamScores, setTeamScores] = useState<TeamScores>({ home: 0, away: 0 });
  const [celebrating, setCelebrating] = useState(false);

  const filteredScenarios = useMemo(() => {
    return scenarioBank.filter((scenario) =>
      selectedCategories.includes(scenario.category),
    );
  }, [selectedCategories]);

  const currentScenario = round[currentIndex];
  const total = round.length;
  const activeTimer = timerOn || mode === "rapid";
  const answerIsCorrect =
    selectedChoice !== null && currentScenario?.correctChoice === selectedChoice;

  useEffect(() => {
    if (mode === "rapid") {
      setTimerOn(true);
      setScenarioCount((count) => (count === "all" ? 10 : count));
    }
  }, [mode]);

  useEffect(() => {
    if (!activeTimer || screen !== "play" || showReveal || !currentScenario) return;

    setTimeLeft(rapidSeconds);
    const timer = window.setInterval(() => {
      setTimeLeft((time) => {
        if (time <= 1) {
          window.clearInterval(timer);
          revealAnswer(null);
          return 0;
        }

        return time - 1;
      });
    }, 1000);

    return () => window.clearInterval(timer);
    // currentIndex intentionally resets the timer for each new scenario.
  }, [activeTimer, currentIndex, screen, showReveal, currentScenario]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (screen === "title" && event.key === "Enter") {
        startGame();
      }

      if (screen !== "play") return;

      if (!showReveal) {
        if (event.key === "1") revealAnswer("green");
        if (event.key === "2") revealAnswer("yellow");
        if (event.key === "3") revealAnswer("red");
      } else if (event.key === "Enter" || event.key.toLowerCase() === "n") {
        nextScenario();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  });

  function startGame() {
    const source = filteredScenarios.length ? filteredScenarios : scenarioBank;
    const ordered = shuffleOn ? shuffleList(source) : [...source];
    const count = clampScenarioCount(scenarioCount, ordered.length);
    setRound(ordered.slice(0, count));
    setCurrentIndex(0);
    setSelectedChoice(null);
    setShowReveal(false);
    setCorrect(0);
    setStreak(0);
    setBestStreak(0);
    setTeamScores({ home: 0, away: 0 });
    setTimeLeft(rapidSeconds);
    setScreen("play");
  }

  function resetToTitle() {
    setScreen("title");
    setCurrentIndex(0);
    setSelectedChoice(null);
    setShowReveal(false);
    setStreak(0);
    setBestStreak(0);
  }

  function revealAnswer(choice: Choice | null) {
    if (!currentScenario || showReveal) return;

    setSelectedChoice(choice);
    setShowReveal(true);

    if (choice === currentScenario.correctChoice) {
      setCorrect((value) => value + 1);
      setStreak((value) => {
        const next = value + 1;
        setBestStreak((best) => Math.max(best, next));
        return next;
      });
      setCelebrating(true);
      window.setTimeout(() => setCelebrating(false), 950);
    } else {
      setStreak(0);
    }
  }

  function nextScenario() {
    if (currentIndex + 1 >= total) {
      setScreen("summary");
      return;
    }

    setCurrentIndex((index) => index + 1);
    setSelectedChoice(null);
    setShowReveal(false);
    setTimeLeft(rapidSeconds);
  }

  function toggleCategory(category: string) {
    setSelectedCategories((selected) => {
      if (selected.includes(category)) {
        const next = selected.filter((item) => item !== category);
        return next.length ? next : selected;
      }

      return [...selected, category];
    });
  }

  function setAllCategories() {
    setSelectedCategories(categories);
  }

  function awardTeam(team: keyof TeamScores) {
    setTeamScores((scores) => ({ ...scores, [team]: scores[team] + 1 }));
  }

  function performanceMessage() {
    if (!total) return "Ready for the next round?";
    const percent = correct / total;

    if (percent >= 0.85) return "Sideline decision crew: locked in.";
    if (percent >= 0.65) return "Strong safety instincts under pressure.";
    if (percent >= 0.45) return "Good noticing. Keep building the pattern.";
    return "You started thinking like an AT: notice, pause, get help.";
  }

  return (
    <main className={`app mode-${mode}`}>
      <div className="background-grid" aria-hidden="true" />
      {screen === "title" && (
        <TitleScreen
          mode={mode}
          setMode={setMode}
          scenarioCount={scenarioCount}
          setScenarioCount={setScenarioCount}
          timerOn={timerOn}
          setTimerOn={setTimerOn}
          scoreOn={scoreOn}
          setScoreOn={setScoreOn}
          shuffleOn={shuffleOn}
          setShuffleOn={setShuffleOn}
          selectedCategories={selectedCategories}
          toggleCategory={toggleCategory}
          setAllCategories={setAllCategories}
          startGame={startGame}
          availableCount={filteredScenarios.length}
          teamNames={teamNames}
          setTeamNames={setTeamNames}
        />
      )}

      {screen === "play" && currentScenario && (
        <PlayScreen
          currentScenario={currentScenario}
          currentIndex={currentIndex}
          total={total}
          selectedChoice={selectedChoice}
          showReveal={showReveal}
          answerIsCorrect={answerIsCorrect}
          revealAnswer={revealAnswer}
          nextScenario={nextScenario}
          correct={correct}
          streak={streak}
          scoreOn={scoreOn}
          activeTimer={activeTimer}
          timeLeft={timeLeft}
          mode={mode}
          teamNames={teamNames}
          teamScores={teamScores}
          awardTeam={awardTeam}
          celebrating={celebrating}
          resetToTitle={resetToTitle}
        />
      )}

      {screen === "summary" && (
        <SummaryScreen
          correct={correct}
          total={total}
          bestStreak={bestStreak}
          scoreOn={scoreOn}
          performanceMessage={performanceMessage()}
          startGame={startGame}
          resetToTitle={resetToTitle}
          mode={mode}
          teamNames={teamNames}
          teamScores={teamScores}
        />
      )}

      <footer className="disclaimer">
        This game is for career exploration and education only. It does not
        provide medical advice or replace evaluation by a qualified healthcare
        professional.
      </footer>
    </main>
  );
}

type TitleProps = {
  mode: GameMode;
  setMode: (mode: GameMode) => void;
  scenarioCount: ScenarioCount;
  setScenarioCount: (count: ScenarioCount) => void;
  timerOn: boolean;
  setTimerOn: (value: boolean) => void;
  scoreOn: boolean;
  setScoreOn: (value: boolean) => void;
  shuffleOn: boolean;
  setShuffleOn: (value: boolean) => void;
  selectedCategories: string[];
  toggleCategory: (category: string) => void;
  setAllCategories: () => void;
  startGame: () => void;
  availableCount: number;
  teamNames: { home: string; away: string };
  setTeamNames: (names: { home: string; away: string }) => void;
};

function TitleScreen(props: TitleProps) {
  return (
    <section className="title-layout" aria-labelledby="app-title">
      <div className="hero-panel">
        <p className="kicker">High school outreach game</p>
        <h1 id="app-title">AT Sideline Decision Challenge</h1>
        <p className="subtitle">
          Can you think like an athletic trainer when the action is happening?
        </p>
        <div className="hero-actions">
          <button className="start-button" type="button" onClick={props.startGame}>
            Start game
          </button>
          <p className="availability">
            {props.availableCount} scenarios ready from selected categories
          </p>
        </div>
      </div>

      <aside className="settings-panel" aria-label="Presenter settings">
        <div className="settings-header">
          <h2>Presenter menu</h2>
          <button className="mini-button" type="button" onClick={props.startGame}>
            Start
          </button>
        </div>

        <fieldset>
          <legend>Game mode</legend>
          <div className="segmented">
            {([
              ["group", "Group"],
              ["rapid", "Rapid"],
              ["team", "Team"],
            ] as const).map(([value, label]) => (
              <button
                key={value}
                type="button"
                className={props.mode === value ? "active" : ""}
                onClick={() => props.setMode(value)}
              >
                {label}
              </button>
            ))}
          </div>
        </fieldset>

        {props.mode === "team" && (
          <div className="team-name-grid">
            <label>
              Team 1
              <input
                value={props.teamNames.home}
                onChange={(event) =>
                  props.setTeamNames({
                    ...props.teamNames,
                    home: event.target.value || "Team A",
                  })
                }
              />
            </label>
            <label>
              Team 2
              <input
                value={props.teamNames.away}
                onChange={(event) =>
                  props.setTeamNames({
                    ...props.teamNames,
                    away: event.target.value || "Team B",
                  })
                }
              />
            </label>
          </div>
        )}

        <fieldset>
          <legend>Number of scenarios</legend>
          <div className="segmented compact">
            {([5, 10, 15, "all"] as const).map((count) => (
              <button
                key={count}
                type="button"
                className={props.scenarioCount === count ? "active" : ""}
                onClick={() => props.setScenarioCount(count)}
              >
                {count === "all" ? "All" : count}
              </button>
            ))}
          </div>
        </fieldset>

        <div className="toggle-grid">
          <label className="toggle-row">
            <input
              type="checkbox"
              checked={props.timerOn}
              onChange={(event) => props.setTimerOn(event.target.checked)}
            />
            Timer
          </label>
          <label className="toggle-row">
            <input
              type="checkbox"
              checked={props.scoreOn}
              onChange={(event) => props.setScoreOn(event.target.checked)}
            />
            Score
          </label>
          <label className="toggle-row">
            <input
              type="checkbox"
              checked={props.shuffleOn}
              onChange={(event) => props.setShuffleOn(event.target.checked)}
            />
            Shuffle
          </label>
        </div>

        <fieldset>
          <legend>Categories</legend>
          <div className="category-actions">
            <button type="button" className="mini-button" onClick={props.setAllCategories}>
              Select all
            </button>
          </div>
          <div className="category-list">
            {categories.map((category) => (
              <label key={category} className="category-pill">
                <input
                  type="checkbox"
                  checked={props.selectedCategories.includes(category)}
                  onChange={() => props.toggleCategory(category)}
                />
                <span>{category}</span>
              </label>
            ))}
          </div>
        </fieldset>
      </aside>
    </section>
  );
}

type PlayProps = {
  currentScenario: Scenario;
  currentIndex: number;
  total: number;
  selectedChoice: Choice | null;
  showReveal: boolean;
  answerIsCorrect: boolean;
  revealAnswer: (choice: Choice) => void;
  nextScenario: () => void;
  correct: number;
  streak: number;
  scoreOn: boolean;
  activeTimer: boolean;
  timeLeft: number;
  mode: GameMode;
  teamNames: { home: string; away: string };
  teamScores: TeamScores;
  awardTeam: (team: keyof TeamScores) => void;
  celebrating: boolean;
  resetToTitle: () => void;
};

function PlayScreen(props: PlayProps) {
  const progressPercent = ((props.currentIndex + 1) / props.total) * 100;
  const correctChoice = props.currentScenario.correctChoice;

  useEffect(() => {
    if (!props.showReveal) return;

    const scrollTimer = window.setTimeout(() => {
      const panel = document.querySelector(".reveal-panel");
      if (!panel) return;

      const top = panel.getBoundingClientRect().top + window.scrollY - 16;
      window.scrollTo({ top: Math.max(top, 0), behavior: "auto" });
    }, 80);

    return () => window.clearTimeout(scrollTimer);
  }, [props.currentIndex, props.showReveal]);

  return (
    <section
      className={`play-layout ${props.showReveal ? "is-revealed" : ""}`}
      aria-labelledby="scenario-title"
    >
      {props.celebrating && <div className="celebration" aria-hidden="true" />}

      <header className="game-topbar">
        <div>
          <p className="kicker">Scenario {props.currentIndex + 1} of {props.total}</p>
          <div className="progress-shell" aria-hidden="true">
            <div className="progress-fill" style={{ width: `${progressPercent}%` }} />
          </div>
        </div>
        <div className="status-cluster">
          {props.activeTimer && (
            <div className={`timer ${props.timeLeft <= 5 ? "urgent" : ""}`}>
              {props.timeLeft}s
            </div>
          )}
          {props.scoreOn && (
            <div className="scorebox">
              <span>{props.correct}</span> correct
              <small>Streak {props.streak}</small>
            </div>
          )}
          <button className="mini-button ghost" type="button" onClick={props.resetToTitle}>
            Menu
          </button>
        </div>
      </header>

      {props.mode === "team" && (
        <div className="team-strip" aria-label="Team scores">
          <div>
            <strong>{props.teamNames.home}</strong>
            <span>{props.teamScores.home}</span>
          </div>
          <div>
            <strong>{props.teamNames.away}</strong>
            <span>{props.teamScores.away}</span>
          </div>
        </div>
      )}

      <article className="scenario-card">
        <div className="scenario-meta">
          <span>{props.currentScenario.setting}</span>
          <span>{props.currentScenario.category}</span>
          <span>{props.currentScenario.difficulty}</span>
        </div>
        <h2 id="scenario-title">{props.currentScenario.title}</h2>
        <p>{props.currentScenario.scenarioText}</p>
        <h3>What would you do next?</h3>
      </article>

      <div className="choice-grid" aria-label="Answer choices">
        {choiceOrder.map((choice) => {
          const meta = choiceMeta[choice];
          const isSelected = props.selectedChoice === choice;
          const isCorrect = props.showReveal && correctChoice === choice;
          const isWrongSelected = props.showReveal && isSelected && !isCorrect;

          return (
            <button
              key={choice}
              type="button"
              className={`choice-button ${choice} ${isSelected ? "selected" : ""} ${
                isCorrect ? "correct" : ""
              } ${isWrongSelected ? "wrong" : ""}`}
              disabled={props.showReveal}
              onClick={() => props.revealAnswer(choice)}
            >
              <span className="choice-key">{meta.key}</span>
              <span className="choice-icon">{meta.icon}</span>
              <span className="choice-text">
                <strong>{meta.label}</strong>
                <small>{meta.meaning}</small>
              </span>
            </button>
          );
        })}
      </div>

      {props.showReveal && (
        <section className="reveal-panel" aria-live="polite">
          <div className={`answer-banner ${props.answerIsCorrect ? "yes" : "no"}`}>
            <strong>
              {props.answerIsCorrect
                ? "Nice call."
                : props.selectedChoice
                  ? "Good discussion moment."
                  : "Time's up."}
            </strong>
            <span>
              Best answer: {choiceMeta[correctChoice].label}
            </span>
          </div>
          <div className="reveal-grid">
            <InfoBlock title="Why this choice" text={props.currentScenario.explanation} />
            <InfoBlock
              title="What the athletic trainer notices"
              text={props.currentScenario.whatATNotices}
            />
            <InfoBlock title="Why this matters" text={props.currentScenario.whyItMatters} />
            <InfoBlock title="AT cool factor" text={props.currentScenario.coolFactor} />
          </div>

          {props.mode === "team" && props.answerIsCorrect && (
            <div className="team-award">
              <span>Award the point:</span>
              <button type="button" onClick={() => props.awardTeam("home")}>
                {props.teamNames.home}
              </button>
              <button type="button" onClick={() => props.awardTeam("away")}>
                {props.teamNames.away}
              </button>
            </div>
          )}

          <button className="next-button" type="button" onClick={props.nextScenario}>
            {props.currentIndex + 1 >= props.total ? "See results" : "Next scenario"}
          </button>
        </section>
      )}
    </section>
  );
}

function InfoBlock({ title, text }: { title: string; text: string }) {
  return (
    <div className="info-block">
      <h4>{title}</h4>
      <p>{text}</p>
    </div>
  );
}

type SummaryProps = {
  correct: number;
  total: number;
  bestStreak: number;
  scoreOn: boolean;
  performanceMessage: string;
  startGame: () => void;
  resetToTitle: () => void;
  mode: GameMode;
  teamNames: { home: string; away: string };
  teamScores: TeamScores;
};

function SummaryScreen(props: SummaryProps) {
  return (
    <section className="summary-layout" aria-labelledby="summary-title">
      <div className="summary-card">
        <p className="kicker">Final score</p>
        <h2 id="summary-title">{props.performanceMessage}</h2>
        {props.scoreOn && (
          <div className="big-score">
            <span>{props.correct}</span>
            <small>out of {props.total} safety decisions</small>
          </div>
        )}
        <p>
          Athletic trainers notice warning signs, make fast safety decisions,
          respond to emergencies, prevent injuries, and help active people return
          safely.
        </p>
        <p className="closing-statement">
          Athletic trainers bring healthcare directly to active people: on the
          sideline, at practice, in the clinic, on the job site, and in tactical
          settings.
        </p>

        {props.mode === "team" && (
          <div className="final-teams">
            <div>
              <strong>{props.teamNames.home}</strong>
              <span>{props.teamScores.home}</span>
            </div>
            <div>
              <strong>{props.teamNames.away}</strong>
              <span>{props.teamScores.away}</span>
            </div>
          </div>
        )}

        <div className="summary-actions">
          <button className="start-button" type="button" onClick={props.startGame}>
            Play again
          </button>
          <button className="secondary-button" type="button" onClick={props.resetToTitle}>
            Presenter menu
          </button>
        </div>
        {props.scoreOn && <p className="streak-note">Best streak: {props.bestStreak}</p>}
      </div>
    </section>
  );
}

export default App;
