import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import Home from "./pages/Home"
import Epilepsia from "./pages/Epilepsia"
import Prototipo from "./pages/Prototipo"
import ComoUsar from "./pages/ComoUsar"
import Pecas from "./pages/Pecas"
import Integrantes from "./pages/Integrantes"

import { theme } from "./styles/theme.js";
import { GlobalStytle } from "./styles/global.js";

export default function App() {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <GlobalStytle />
        <BrowserRouter>
          <Routes>
            <Route path="/" element= {< Home />} />
            <Route path="/epilepsia" element= {< Epilepsia />} />
            <Route path="/prototipo" element= {< Prototipo />} />
            <Route path="/comousar" element= {< ComoUsar />} />
            <Route path="/pecas" element= {< Pecas />} />
            <Route path="/integrantes" element= {< Integrantes />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </div>
  )
}
