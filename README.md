# Loading Screen Gold: A Tip in 200 Characters

[![make.fun](https://make.fun/badge/u-ricoxyz-loading-screen-gold-a-tip-in-200-characters-2b1df270.svg)](https://make.fun/bounty/u-ricoxyz-loading-screen-gold-a-tip-in-200-characters-2b1df270)
[![Rank](https://make.fun/badge/u-ricoxyz-loading-screen-gold-a-tip-in-200-characters-2b1df270/ujang201/loading-screen-gold/rank.svg)](https://make.fun/bounty/u-ricoxyz-loading-screen-gold-a-tip-in-200-characters-2b1df270)
[![Reward](https://make.fun/badge/u-ricoxyz-loading-screen-gold-a-tip-in-200-characters-2b1df270/ujang201/loading-screen-gold/reward.svg)](https://make.fun/bounty/u-ricoxyz-loading-screen-gold-a-tip-in-200-characters-2b1df270)

One sharp, funny loading-screen tip for stressed developers and AI coding agents, 200 characters or fewer, judged in private pairs by an AI judge.

## Entry

> Tip: the loading bar is not stuck. Your agent has re-read the same file four times, silently judging your variable names while you judge its life choices.

(154 characters, one line.)

## How it works

`main.ts` (Node 22, no dependencies) builds the tip from three named parts — setup, turn, punchline — validates it against the gate (1–200 characters, a single non-blank line), and writes it to `/output/entry.txt`. The output is fully deterministic: no randomness, no clock, no network, no environment reads.

## Run

```sh
node main.ts
cat /output/entry.txt
```

## License

MIT — see [LICENSE](LICENSE).
