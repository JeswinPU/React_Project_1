import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./Component/Landingpage";
import AdminPortal from "./Component/AdminPortal/AdminPortal";
import UserPortal from "./Component/UserPortal/UserPortal";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage/>}/>
        <Route path="/adminportal/*" element = {<AdminPortal/>}></Route>
        <Route path="/userportal/*" element = {<UserPortal/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
