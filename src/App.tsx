import { Route, Routes } from "react-router";
import "./App.css";
import Login from "./pages/login";

import Dashboard from "./pages/dashboard";
import Disciplinas from "./pages/disciplinas";

function App() {
  return (
    <Routes>
      {/* <Route path="/" element={<InputField />} /> */}
      <Route path="/" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/dashboard/disciplinas" element={<Disciplinas />} />
      <Route path="/dashboard/tutor-ia" element={<Dashboard />} />
      <Route path="/dashboard/perfil" element={<Dashboard />} />
    </Routes>
  );
}

export default App;
