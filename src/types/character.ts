import { type BaseStats } from "./baseStats";
import { type PerLevelGains } from "./perLevelGains";
import { type StatPerLevelGains } from "./statPerLevelGain";

export interface CharacterClass {
  name: string,
  baseStats: BaseStats,
  perLevelGain: PerLevelGains,
  statPerLevelGains: StatPerLevelGains
}
