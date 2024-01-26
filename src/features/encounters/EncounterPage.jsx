import Btn from "../../ui/Btn";
import Container from "../../ui/Container";
import GoalContainer from "../../ui/GoalContainer";
import { useState } from "react";
import MonstersModal from "../../ui/MonstersModal";

import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import EncounterMonster from "./EncounterMonster";
// import { FiMinus } from "react-icons/fi";

function EncounterPage() {
  // Retrieve the current encounterId
  const { encounterId } = useParams();

  // Use Id to get information about current encounter
  const { id, monsters, xpSum, xpAdjusted } = useSelector((state) =>
    state.encounters.encounters.find(
      (encounter) => encounter.id === parseInt(encounterId)
    )
  );

  // AddMonstersModal
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <MonstersModal isOpen={isOpen} setIsOpen={setIsOpen} />
      <h1 className="text-black text-xl font-extrabold flex gap-1 items-center">
        <span>#{id}</span>
        Encounter
      </h1>
      <GoalContainer xpSum={xpSum} xpAdjusted={xpAdjusted} />
      <Btn size="small" color="light" callback={() => setIsOpen(true)}>
        Add monster
      </Btn>
      <Container label="Encounter">
        {monsters.map((monster) => (
          <EncounterMonster key={monster.index} monster={monster} />
        ))}
      </Container>
    </>
  );
}

export default EncounterPage;
