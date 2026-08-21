# @tradejs/strategy-volatility-compression-breakout

TradeJS strategy plugin providing `VolatilityCompressionBreakout`.

## Strategy overview

`VolatilityCompressionBreakout` looks for low-volatility compression through
ATR and Bollinger-width ranks, then requires range expansion and a directional
level break. Volume, candle body, acceptance, MTF, and trade-flow filters can
qualify the release before ATR and structure-based risk is applied.

## Logic at a glance

![VolatilityCompressionBreakout strategy logic](https://raw.githubusercontent.com/TradeJS-Dev/TradeJS-Strategy-VolatilityCompressionBreakout/main/docs/strategy-logic.svg)

## Signal on an example chart

The envelope narrows as ATR and Bollinger-width ranks compress; range expansion through the rolling high releases the setup when quality filters agree.

![VolatilityCompressionBreakout signal on an illustrative ticker chart](https://raw.githubusercontent.com/TradeJS-Dev/TradeJS-Strategy-VolatilityCompressionBreakout/main/docs/signal-example.svg)

The illustration is schematic, not market data. Exact thresholds, confirmation
rules, and risk parameters come from the active TradeJS strategy config.

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
prerelease and moves the npm `beta` tag only after the repository checks pass
and the published tarball imports successfully in a clean npm consumer. The
current verified beta is promoted to one stable `latest`
release by the weekly automation; production never consumes prereleases.

Keywords: ai, claude, codex.

## Runtime host contract

All `@tradejs/*` runtime packages are peer dependencies. The consuming TradeJS Project owns their exact installed versions and package manifest, so this package never loads a hidden nested engine, types package, indicator package, or Strategy Kit. Repository builds use matching dev dependencies only.
