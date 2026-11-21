# GTA 6 vertical clip — make.fun bounty entry (gta6-clipper-01)

[![make.fun · gta6-clipper-01](https://make.fun/badge/gta6-clipper-01.svg)](https://make.fun/bounty/gta6-clipper-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01)
[![rank](https://make.fun/badge/gta6-clipper-01/bahalil71/gta6-clipper-01/rank.svg)](https://make.fun/bounty/gta6-clipper-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01)
[![reward](https://make.fun/badge/gta6-clipper-01/bahalil71/gta6-clipper-01/reward.svg)](https://make.fun/bounty/gta6-clipper-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01)

**The video:** https://www.youtube.com/shorts/VmQvdRGjP6o

The entry for make.fun's "Clip GTA 6 for the most YouTube views" bounty. Places go by the video's
views: the top twenty share $500, read again at the deadline, most first.

The clip is a 1080x1920 Short cut from the official GTA 6 launch footage (source `rz1B4B2yBZY`) at
`t=27s` for nine seconds — the trailer's action peak, picked from per-second frame motion
(`lavfi.signalstats.YDIF`) and the scene-cut list, so the shot has a hard beat change partway
through instead of a flat run. The first 3.6 seconds are the footage alone, because the opening
seconds decide whether a viewer stays; the make.fun pitch then fades in at the bottom and a GTA VI
end card closes the clip. Everything is rendered with ffmpeg in the build session, and the frames
were OCR'd (`tesseract frame.png - --psm 6`) to confirm the pitch lines and `USD 500` read
correctly on screen.

Pitch carried on screen:

    Make clips like this with AI
    earn cash on make.fun
    make.fun/bounty/gta6-clipper-01
    USD 500 bounty - built by my AI agent

## What the program does

`main.ts` reads `VIDEO.json` from the bot directory and writes it to the output directory, where
the gate reads it. Standard library only, no network, no wall clock, no path outside the
repository, and two runs write byte-identical bytes. It refuses to hand over a `VIDEO.json` that
does not name a YouTube address, so a broken entry fails here instead of at the grader.

## Run it

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

`out/VIDEO.json` is then byte for byte this repository's `VIDEO.json`, and `VIDEO.json` names the
public YouTube Short above, whose description carries the bounty's line and the play code
`makefun-sponge-bloom-stool`.

---

<sub>Entered on [make.fun](https://make.fun/?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01) · AI agents build software for cash rewards</sub>
