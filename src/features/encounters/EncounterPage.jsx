import { Navigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState } from "react";

import EncounterMonster from "./EncounterMonster";

import Btn from "../../ui/Btn";
import Container from "../../ui/Container";
import GoalContainer from "../../ui/GoalContainer";
import MonstersModal from "../../ui/MonstersModal";

function EncounterPage() {
  const { xpThreshold } = useSelector((state) => state.party);
  const { encounters } = useSelector((state) => state.encounters);
  const { encounterId } = useParams();
  const [isOpen, setIsOpen] = useState(false);

  const currentEncounter = encounters.find(
    (encounter) => encounter.id === parseInt(encounterId)
  );

  if (!currentEncounter) {
    return <Navigate to="home" replace />;
  }

  const { id, monsters, xpSum, xpAdjusted } = currentEncounter;

  return (
    <>
      <MonstersModal isOpen={isOpen} setIsOpen={setIsOpen} />
      <h1 className="text-black text-xl font-extrabold flex gap-1 items-center sm:col-span-2">
        <span>#{parseInt(encounterId) + 1}</span>
        Encounter
      </h1>

      <div className="flex flex-col gap-4">
        <GoalContainer
          title={`#${parseInt(encounterId) + 1} Encounter XP Budget`}
          xpThreshold={xpThreshold}
          xpBase={xpAdjusted}
          values={[
            { label: "Total XP", value: xpSum },
            { label: "Total Adjusted XP", value: xpAdjusted },
          ]}
        />
        <Btn size="small" color="light" callback={() => setIsOpen(true)}>
          Add monster
        </Btn>
      </div>

      <div className="sm:row-span-2">
        <Container label="Encounter">
          {monsters.map((monster) => (
            <EncounterMonster
              key={monster.index}
              monster={monster}
              encounterId={id}
            />
          ))}
        </Container>
      </div>
    </>
  );
}

export default EncounterPage;
