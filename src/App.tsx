import ClassSelection from "./pages/ClassSelection";
import CharacterSheet from "./pages/CharacterSheet";
import type { CharacterClass } from "./types/character";
import { useState } from "react";


function App() {
  const [selectedClass, setSelectedClass] = useState<CharacterClass | null>(null)

  return (
    selectedClass ?
      <CharacterSheet selectedClass={selectedClass} onBack={() => setSelectedClass(null)} />
      :
      <ClassSelection onSelectClass={setSelectedClass} />
  );
}

export default App;
