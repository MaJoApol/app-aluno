import { Route, Routes } from "react-router";
import "./App.css";
import Login from "./pages/login";

import Dashboard from "./pages/dashboard";
import Profile from "./pages/perfil";
import TutorIA from "./pages/tutorIA";

import CompleteRegister from "./pages/completeRegister";
import ForgotPassword from "./pages/forgotPassword";
import NewPassword from "./pages/newPassword";
import Register from "./pages/register";
import Projects from "./pages/projects";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/registro" element={<Register />} />
      <Route path="/concluir-registro" element={<CompleteRegister />} />
      <Route path="/esqueceu-senha" element={<ForgotPassword />} />
      <Route path="/nova-senha" element={<NewPassword />} />

      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/dashboard/projetos" element={<Projects />} />
      <Route path="/dashboard/tutor-ia" element={<TutorIA />} />
      <Route path="/dashboard/perfil" element={<Profile />} />
    </Routes>
  );
}

export default App;
