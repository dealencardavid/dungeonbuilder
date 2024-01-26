import { useDispatch, useSelector } from "react-redux";
import AppLayout from "./ui/AppLayout";
import EncounterPage from "./features/encounters/EncounterPage";
import { useEffect } from "react";
import { fetchMonsters } from "./features/monsters/monstersSlice";

import LandingPage from "./features/party/LandingPage";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

// Possibilities
//import { GiCrossedSwords } from "react-icons/gi";
// import { GiDaemonSkull } from "react-icons/gi";
// import { GiDiceEightFacesEight } from "react-icons/gi";
// import { GiMightyForce } from "react-icons/gi";
// import { GiShears } from "react-icons/gi";
// import { GiSwordsPower } from "react-icons/gi";

function App() {
  const dispatch = useDispatch();
  const { status } = useSelector((state) => state.monsters);

  useEffect(
    function () {
      if (status === "idle") dispatch(fetchMonsters());
    },
    [status, dispatch]
  );

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route index element={<Navigate replace to="home" />} />
          <Route path="home" element={<LandingPage />} />
          <Route path="encounters/:encounterId" element={<EncounterPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
