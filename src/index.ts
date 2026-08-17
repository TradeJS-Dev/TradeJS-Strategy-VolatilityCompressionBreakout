import { defineStrategyPlugin } from "@tradejs/core/config";
import type { StrategyConfig, StrategyRegistryEntry } from "@tradejs/types";
import { config as volatilityCompressionBreakoutDefaultConfig } from "./VolatilityCompressionBreakout/config";
import { VolatilityCompressionBreakoutStrategyDefinition } from "./VolatilityCompressionBreakout/strategy";

export const strategyEntries: StrategyRegistryEntry[] = [
  VolatilityCompressionBreakoutStrategyDefinition,
];

const defaultConfigs: Record<string, StrategyConfig> = {
  VolatilityCompressionBreakout: volatilityCompressionBreakoutDefaultConfig,
};

export const getBuiltInStrategyDefaultConfig = (
  strategyName: string,
): StrategyConfig | undefined => defaultConfigs[strategyName];

export { VolatilityCompressionBreakoutStrategyDefinition } from "./VolatilityCompressionBreakout/strategy";
export { volatilityCompressionBreakoutDefaultConfig };
export { volatilityCompressionBreakoutManifest } from "./VolatilityCompressionBreakout/manifest";
export { volatilityCompressionBreakoutAiAdapter } from "./VolatilityCompressionBreakout/adapters/ai";

export default defineStrategyPlugin({ strategyEntries });
