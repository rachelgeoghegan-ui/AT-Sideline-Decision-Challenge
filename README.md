[README.md](https://github.com/user-attachments/files/29353705/README.md)
# AT Sideline Decision Challenge

A self-contained, projector-friendly browser app for high school outreach events introducing students to athletic training.

Students respond to short sideline, practice, workplace, tactical, and performing arts scenarios by choosing:

- Green: Keep an eye on it
- Yellow: Get the athletic trainer
- Red: Emergency action

The game is about noticing warning signs and making safety decisions, not diagnosing injuries.

## Run Locally

1. Install dependencies:

   ```bash
   pnpm install
   ```

2. Start the app:

   ```bash
   pnpm dev
   ```

3. Open the local URL shown in the terminal, usually:

   ```text
   http://127.0.0.1:5173
   ```

## Build

```bash
pnpm build
```

The static production files will be created in `dist/`.

## Presenter Tips

- Use Group Mode for a full room discussion with no pressure.
- Use Rapid Round for a faster, timed version.
- Choose 5 or 10 scenarios for a short classroom visit.
- Use category filters to match the audience, such as sport, performing arts, or jobsite examples.
- Turn scoring off if you want the activity to feel more like conversation than competition.

## Edit Scenarios

Scenario content lives in `src/data/scenarios.ts`. Each scenario includes the title, setting, prompt, best answer, reveal explanation, and category metadata.

## Educational Note

This game is for career exploration and education only. It does not provide medical advice or replace evaluation by a qualified healthcare professional.
