import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/dashboard";
import SolarCalc from "./pages/calculator";
import FarmHelpHub from "./pages/farm help";
import Nav from "./components/nav";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import AIFarmAdvisor from "./pages/ai advisor";
import WeeklyFarmTips from "./pages/weekly farm tips";
function App() {

   const [open, setOpen] = useState(false);
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setOpen(false);
  };

  const linkStyle = ({ isActive }) =>
    isActive
      ? "text-green-600 font-semibold"
      : "text-gray-700 hover:text-green-600 transition";

  return (
    <BrowserRouter>
      <Nav
        linkStyle={linkStyle}
        setOpen={setOpen}
        changeLanguage={changeLanguage}
        open={open}
        i18n={i18n}
        t={t}
        
      />

      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/AI" element={<AIFarmAdvisor />} />
        <Route path="/tips" element={<WeeklyFarmTips />} />

        <Route path="/calculator" element={<SolarCalc />} />
        <Route path="hire" element={<FarmHelpHub />} />
   
      </Routes>
    </BrowserRouter>
  );
}

export default App;