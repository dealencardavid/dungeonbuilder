import Container from "./Container";
import GoalContainer from "./GoalContainer";
import InputNumber from "./InputNumber";

import { TfiClose } from "react-icons/tfi";
import { FiPlus } from "react-icons/fi";
import { GiDiceTwentyFacesTwenty } from "react-icons/gi";

import Btn from "./Btn";
import Table from "./Table";

function LandingPage() {
  return (
    <>
      <h1 className="text-black text-xl font-extrabold flex gap-1 items-center">
        <span className="">
          <GiDiceTwentyFacesTwenty />
        </span>
        Adventure Day
      </h1>
      <Container label="Party">
        <div className="flex justify-between gap-3 items-end">
          <InputNumber label="Players" />
          <span className="h-full flex">
            <TfiClose className="self-end mb-2" />
          </span>
          <InputNumber label="Level" />
          <Btn>
            <FiPlus />
          </Btn>
        </div>
      </Container>
      <GoalContainer />
      <Container label="Encounters">
        <Table />
      </Container>
    </>
  );
}

export default LandingPage;
