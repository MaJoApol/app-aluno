import { Route, Routes } from "react-router";
import "./App.css";
import Login from "./pages/login";

import Dashboard from "./pages/dashboard";
import Disciplinas from "./pages/disciplinas";
import TutorIA from "./pages/tutorIA";
import Profile from "./pages/perfil";

import Register from "./pages/register";
import CompleteRegister from "./pages/completeRegister";
import ForgotPassword from "./pages/forgotPassword";
import NewPassword from "./pages/newPassword";

function App() {
  return (
    <Routes>
      {/* <Route path="/" element={<InputField />} /> */}
      <Route path="/" element={<Login />} />
      <Route path="/registro" element={<Register />} />
      <Route path="/concluir-registro" element={<CompleteRegister />} />
      <Route path="/esqueceu-senha" element={<ForgotPassword />} />
      <Route path="/nova-senha" element={<NewPassword />} />

      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/dashboard/disciplinas" element={<Disciplinas />} />
      <Route path="/dashboard/tutor-ia" element={<TutorIA />} />
      <Route path="/dashboard/perfil" element={<Profile />} />

    </Routes>
  );
}

export default App;
