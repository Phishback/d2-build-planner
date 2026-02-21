import type { CharacterClass } from "../types/character";

type CharacterSheetProps = {
  selectedClass: CharacterClass
}

const CharacterSheet = ({ selectedClass }: CharacterSheetProps) => {
  return (
    <div>
      <p>Class: {selectedClass.name}</p>
      <p>Level 1</p>
      <ul>
        {Object.entries(selectedClass.baseStats).map(([stat, statValue]) =>
          <li key={stat}>{stat} : {statValue}</li>
        )}
      </ul>
    </div>
  )
}

export default CharacterSheet
