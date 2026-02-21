import ClassSelection from "./pages/ClassSelection";
import type { CharacterClass } from "./types/character";
import { useState } from "react";


function App() {
  const [selectedClass, setSelectedClass] = useState<CharacterClass | null>(null)

  console.log("Selected:", selectedClass)
  return <ClassSelection onSelectClass={setSelectedClass} />;
}

export default App;
