import { useDispatch, useSelector } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";
import { addEncounter } from "../features/encounters/encountersSlice";

import { GiDeathZone } from "react-icons/gi";
import { GiSwordsEmblem } from "react-icons/gi";
import { FiPlus } from "react-icons/fi";

import Btn from "./Btn";

function AppLayout() {
  const encounters = useSelector((state) => state.encounters.encounters);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <div className=" h-dvh bg-mainBlue-500 flex sm:flex-col-reverse ">
      <div className="h-full bg-mainBege-500 rounded-r-3xl shadow-page px-3 py-6 grow overflow-auto sm:rounded-t-3xl sm:rounded-br-none sm:py-9 sm:px-6 md:px-9 lg:px-12 grid ">
        <div className="max-w-5xl w-full mx-auto flex flex-col gap-8 sm:grid sm:grid-cols-2 sm:grid-rows-[80px_1fr] ">
          <Outlet />
        </div>
      </div>
      <div className="min-w-12 h-full flex flex-col-reverse gap-2 items-center py-6 sm:flex-row sm:py-0 sm:w-full sm:h-14 sm:px-6 md:px-9 lg:px-12 overflow-auto">
        <Btn callback={() => navigate("/home")}>
          <GiSwordsEmblem />
        </Btn>
        {encounters.map((encounter) => (
          <Btn
            key={encounter.id}
            callback={() => navigate(`/encounters/${encounter.id}`)}
          >
            <GiDeathZone />
          </Btn>
        ))}

        <Btn callback={() => dispatch(addEncounter())}>
          <FiPlus />
        </Btn>
      </div>
    </div>
  );
}

export default AppLayout;
