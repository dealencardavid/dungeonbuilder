import { GiDeathZone } from "react-icons/gi";
import { GiSwordsEmblem } from "react-icons/gi";
import Btn from "./Btn";
import { FiPlus } from "react-icons/fi";
import { Outlet, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addEncounter } from "../features/encounters/encountersSlice";

function AppLayout() {
  const encounters = useSelector((state) => state.encounters.encounters);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <div className=" h-dvh bg-mainBlue-500 flex">
      <div className="h-full bg-mainBege-500 rounded-r-3xl shadow-page flex flex-col gap-8 px-3 py-6 grow overflow-scroll">
        <Outlet />
      </div>
      <div className="min-w-12 h-full flex flex-col-reverse gap-2 items-center py-6">
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
