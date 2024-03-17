import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Inicio from "./components/Inicio";
import Vehiculos from "./components/Vehiculos";
import Detail from "./components/Detail";
import ReactDOM from 'react-dom/client';

import { IntlProvider } from "react-intl";
import localeEsMessages from "./locales/es";
import localeEnMessages from "./locales/en";

function App() {
  const language = (navigator && navigator.language && navigator.language.split(/[-_]/)[0]) || "en";

  return (
    <div className="App">
      <IntlProvider locale={language} messages={language === "es" ? localeEsMessages : localeEnMessages}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/vehiculos" element={<Vehiculos/>} />
          <Route path="/vehiculos/:vehiculoId" element={<Detail />} />
        </Routes>
      </BrowserRouter>
      </IntlProvider>
    </div>
 );
}

export default App;