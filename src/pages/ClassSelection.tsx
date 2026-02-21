import ClassesList from "../data/classes";
import type { CharacterClass } from "../types/character";

type ClassSelectionProps = {
  onSelectClass: (characterClass: CharacterClass) => void;
};

const ClassSelection = ({ onSelectClass }: ClassSelectionProps) => {
  return (
    <div>
      {Object.values(ClassesList).map((characterClass) => (
        <button
          key={characterClass.name}
          onClick={() => onSelectClass(characterClass)}
        >
          {characterClass.name}
        </button>
      ))}
    </div>
  );
};

export default ClassSelection;
