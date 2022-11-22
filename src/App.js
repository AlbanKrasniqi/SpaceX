import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "./components";
import {Capsules, Cores, Crew, Dragons, Error, Launches, Launchpads, Payloads, Roadster, Ships, SingleCrew, SingleDragon, SingleLaunch, SingleLaunchPad, SingleShip, Starlink} from "./pages/index"
import{Homepage} from "./pages/index"
import Landpands from "./pages/Landpands";
import SingleLandpands from "./pages/SingleLandpands";
function App() {
  return (
    <BrowserRouter>
    <Header />
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/capsules" element={<Capsules />}></Route>
        <Route path="/cores" element={<Cores />}></Route>
        <Route path="/crew" element={<Crew />}></Route>
        <Route path="/crew/:id" element={<SingleCrew />}></Route>
        <Route path="/dragons" element={<Dragons />}></Route>
        <Route path="/dragons/:id" element={<SingleDragon />}></Route>
        <Route path="/landpads" element={<Landpands />}></Route>
        <Route path="/landpads/:id" element={<SingleLandpands />}></Route>
        <Route path="/launches" element={<Launches />}></Route>
        <Route path="/launches/:id" element={<SingleLaunch />}></Route>
        <Route path="/launchpads" element={<Launchpads />}></Route>
        <Route path="/launchpads/:id" element={<SingleLaunchPad />}></Route>
        <Route path="/payloads" element={<Payloads />}></Route>
        <Route path="/roadster" element={<Roadster />}></Route>
        <Route path="/ships" element={<Ships />}></Route>
        <Route path="/ships/:id" element={<SingleShip />}></Route>
        <Route path="/starlink" element={<Starlink />}></Route>
        <Route path="*" element={<Error />}></Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
