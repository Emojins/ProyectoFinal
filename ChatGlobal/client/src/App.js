import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Page1 from "./pages/page1"
import Page2 from "./pages/page2"
import Page3 from "./pages/page3"
//npm i socket.io-client (versión para react)
//Conexión para escuchar y enviar eventos


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/chatAntonio" element={<Page1 />} />
        <Route path="/chatPablo" element={<Page2 />} />
        <Route path="/chatValentina" element={<Page3 />} />
      </Routes>
    </BrowserRouter>

  );
}
export default App;
