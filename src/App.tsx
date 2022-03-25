import "./App.css";
import { Fleet, Device, Authentication } from "@formant/data-sdk";
import { Maintenance } from "./components/Maintenance";
import { useEffect, useState } from "react";

const App = () => {
  const [device, setDevice] = useState<Device | undefined>();
  useEffect(() => {
    getCurrentDevice();
  }, []);

  const getCurrentDevice = async () => {
    if (await Authentication.waitTilAuthenticated()) {
      const currentDevice = await Fleet.getCurrentDevice();
      setDevice(currentDevice);
    }
  };

  return (
    <div className="App">
      <Maintenance device={device} />
    </div>
  );
};

export default App;
