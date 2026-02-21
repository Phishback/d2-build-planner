import ClassesList from "../data/classes";

const ClassSelection = () => {
  return (
    <div>
      {Object.values(ClassesList).map((characterClass) => (
        <button
          key={characterClass.name}
          onClick={() => console.log(characterClass)}
        >
          {characterClass.name}
        </button>
      ))}
    </div>
  );
};

export default ClassSelection;
