import type { CharacterClass } from "../types/character";

type CharacterSheetProps = {
  selectedClass: CharacterClass;
  onBack: () => void;
}

const CharacterSheet = ({ selectedClass, onBack }: CharacterSheetProps) => {
  return (
    <div>
      <p>Class: {selectedClass.name}</p>
      <p>Level 1</p>
      <ul>
        {Object.entries(selectedClass.baseStats).map(([stat, statValue]) =>
          <li key={stat}>{stat} : {statValue}</li>
        )}
      </ul>
      <button onClick={onBack}>Back</button>
    </div>
  )
}

export default CharacterSheet
