# @tradejs/strategy-volatility-compression-breakout

TradeJS strategy plugin providing `VolatilityCompressionBreakout`.

## Strategy overview

`VolatilityCompressionBreakout` looks for low-volatility compression through
ATR and Bollinger-width ranks, then requires range expansion and a directional
level break. Volume, candle body, acceptance, MTF, and trade-flow filters can
qualify the release before ATR and structure-based risk is applied.

## Logic at a glance

![VolatilityCompressionBreakout strategy logic](https://raw.githubusercontent.com/TradeJS-Dev/TradeJS-Strategy-VolatilityCompressionBreakout/main/docs/strategy-logic.svg)

## Install

```bash
yarn add @tradejs/strategy-volatility-compression-breakout
```

Register the package in `tradejs.config.ts`:

```ts
import { defineConfig } from "@tradejs/core/config";

export default defineConfig({
  strategies: ["@tradejs/strategy-volatility-compression-breakout"],
});
```

The package exports `strategyEntries` for the TradeJS plugin loader together
with its strategy definitions, manifests, default configs, and public AI/ML
adapters. Strategy implementation changes are released from this repository,
independently of the TradeJS engine.

## Development

```bash
yarn install --immutable
yarn checks
```

Publishing is beta-first and delegated to the pinned
`TradeJS-Workflows@v1` reusable workflow. A relevant push publishes a unique
prerelease and moves the npm `beta` tag only after the production-like Project
image passes. The current verified beta is promoted to one stable `latest`
release by the weekly automation; production never consumes prereleases.

Keywords: ai, claude, codex.
