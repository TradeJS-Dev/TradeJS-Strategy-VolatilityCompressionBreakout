import { createCostIsolatedStrategyConfigParser } from "@tradejs/strategy-kit/config";
import type { ValidatedStrategyRegistryEntry } from "@tradejs/strategy-kit/config";
import {
  VolatilityCompressionBreakoutConfig,
  config as DEFAULT_CONFIG,
} from "./config";
import { createVolatilityCompressionBreakoutCore } from "./core";
import { volatilityCompressionBreakoutManifest } from "./manifest";

export const VolatilityCompressionBreakoutStrategyDefinition: ValidatedStrategyRegistryEntry<VolatilityCompressionBreakoutConfig> =
  {
    defaults: DEFAULT_CONFIG,
    parseConfig: createCostIsolatedStrategyConfigParser({
      strategyName: "VolatilityCompressionBreakout",
      defaults: DEFAULT_CONFIG,
    }),
    createCore: createVolatilityCompressionBreakoutCore,
    manifest: volatilityCompressionBreakoutManifest,
  };
