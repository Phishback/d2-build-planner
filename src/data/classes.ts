import { type CharacterClass } from "../types/character";

const Sorceress: CharacterClass = {
  name: "Sorceress",
  baseStats: {
    str: 10,
    dex: 25,
    vit: 10,
    energy: 35,
    hp: 40,
    mana: 35,
    stam: 74,
  },
  perLevelGain: {
    lifePerLevel: 1,
    manaPerLevel: 2,
    stamPerLevel: 1,
  },
  statPerLevelGains: {
    lifePerVit: 2,
    stamPerVit: 1,
    manaPerEnergy: 2,
  },
};

const Barbarian: CharacterClass = {
  name: "Barbarian",
  baseStats: {
    str: 30,
    dex: 20,
    vit: 25,
    energy: 10,
    hp: 55,
    mana: 10,
    stam: 92,
  },
  perLevelGain: {
    lifePerLevel: 2,
    manaPerLevel: 1,
    stamPerLevel: 1,
  },
  statPerLevelGains: {
    lifePerVit: 4,
    stamPerVit: 1,
    manaPerEnergy: 1,
  },
};

const Warlock: CharacterClass = {
  name: "Warlock",
  baseStats: {
    str: 15,
    dex: 20,
    vit: 25,
    energy: 20,
    hp: 55,
    mana: 20,
    stam: 86,
  },
  perLevelGain: {
    lifePerLevel: 2,
    stamPerLevel: 1,
    manaPerLevel: 1.5,
  },
  statPerLevelGains: {
    lifePerVit: 3,
    stamPerVit: 1,
    manaPerEnergy: 2,
  },
};

const ClassesList = {
  Sorceress: Sorceress,
  Barbarian: Barbarian,
  Warlock: Warlock,
};

export default ClassesList;
