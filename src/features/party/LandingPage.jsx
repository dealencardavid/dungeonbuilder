import { useDispatch, useSelector } from "react-redux";
import { addParty, updateParty, updateLevel, deleteParty } from "./partySlice";

import { TfiClose } from "react-icons/tfi";
import { FiPlus, FiX } from "react-icons/fi";
import { GiDiceTwentyFacesTwenty } from "react-icons/gi";

import Container from "../../ui/Container";
import InputNumber from "../../ui/InputNumber";
import Btn from "../../ui/Btn";
import Table from "../../ui/Table";
import InfoContainer from "../../ui/InfoContainer";

function LandingPage() {
  const dispatch = useDispatch();
  const { party, xpThreshold } = useSelector((state) => state.party);
  const encounters = useSelector((state) => state.encounters.encounters);

  const allXpAdjusted = encounters.reduce(
    (sum, encounter) => sum + encounter.xpAdjusted,
    0
  );

  const allXp = encounters.reduce((sum, encounter) => sum + encounter.xpSum, 0);

  function onPartyChange(e, index) {
    e.preventDefault();
    const newParty = e.target.value;
    dispatch(updateParty({ index, newParty }));
  }

  function onLevelChange(e, index) {
    e.preventDefault();
    const newLevel = e.target.value;
    dispatch(updateLevel({ index, newLevel }));
  }

  return (
    <>
      <h1 className="text-black text-xl font-extrabold flex gap-1 items-center sm:col-span-2">
        <span className="">
          <GiDiceTwentyFacesTwenty />
        </span>
        Adventure Day
      </h1>

      <div className="flex flex-col gap-8">
        <Container label="Party">
          {party.map((party, index) => {
            return (
              <div className="flex justify-between gap-3 items-end" key={index}>
                <InputNumber
                  index={index}
                  label="Players"
                  value={party.players}
                  callback={onPartyChange}
                />
                <span className="h-full flex">
                  <TfiClose className="self-end mb-2" />
                </span>
                <InputNumber
                  index={index}
                  label="Level"
                  value={party.level}
                  callback={onLevelChange}
                />
                {index === 0 ? (
                  <Btn callback={() => dispatch(addParty())}>
                    <FiPlus />
                  </Btn>
                ) : (
                  <Btn
                    color="delete"
                    callback={() => dispatch(deleteParty({ index }))}
                  >
                    <FiX />
                  </Btn>
                )}
              </div>
            );
          })}
        </Container>

        <InfoContainer
          title="Daily XP Goal"
          values={[
            { label: "Daily Budget", value: xpThreshold.daily },
            { label: "Encounters XP Sum", value: allXp },
            { label: "Adjusted Encounters XP", value: allXpAdjusted },
          ]}
        />
      </div>

      <div className="">
        <Container label="Encounters">
          <Table encounters={encounters} />
        </Container>
      </div>
    </>
  );
}

export default LandingPage;
