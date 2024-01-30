import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { useEffect } from "react";

import { fetchMonsters } from "./features/monsters/monstersSlice";

import AppLayout from "./ui/AppLayout";
import EncounterPage from "./features/encounters/EncounterPage";
import LandingPage from "./features/party/LandingPage";

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
          <Route path="/encounters/:encounterId" element={<EncounterPage />} />
          <Route path="*" element={<Navigate to="home" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
