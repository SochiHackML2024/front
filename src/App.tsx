import "./App.css";
import arrowDown from "./assets/down-arrow.svg";
import { Sphere1, Sphere2 } from "./components";
import { Header } from "./widgets";
import {Dashboard} from "./pages/Dashboard.tsx";

function App() {
  return (
    <div
      className={
        "snap-y snap-mandatory h-screen w-screen overflow-scroll overflow-x-hidden"
      }
    >
      <div className={"snap-center h-screen relative"}>
        <div className={"container mx-auto"}>
          <Header />
          <div className={"container relative"}>
            <Sphere1
              className={
                "absolute drop-shadow-md -right-[400px] top-[100px] -z-10"
              }
              width={700}
              height={800}
            />
            <Sphere2
              className={
                "absolute drop-shadow-md -left-[400px] top-[400px] -z-10"
              }
              width={500}
              height={600}
            />
          </div>
        </div>
        <div className={"absolute bottom-0 left-1/2"}>
          <img
            src={arrowDown}
            alt=""
            width={80}
            className={"transform -translate-x-1/2 p-2"}
          />
        </div>
      </div>
      <div className={"snap-center h-screen"} id={"dashboard"}>
        <Dashboard/>
      </div>
    </div>
  );
}

export default App;
