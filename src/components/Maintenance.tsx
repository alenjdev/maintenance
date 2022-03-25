import { FC, useState, useEffect } from "react";
import { Device } from "@formant/data-sdk";
import { moduleConfig } from "../types/ModuleConfig";
import { getLastServiceDate } from "../utils/getLastServiceDate";
import { getNextServiceDate } from "../utils/getNextServiceDate";
import { MaintenanceItem } from "./MaintenanceItem";

interface IMaintenanceProps {
  device: Device | undefined;
}

export const Maintenance: FC<IMaintenanceProps> = ({ device }) => {
  const [latestStats, setLatestStats] = useState();
  const [streams, setStreams] = useState<string[]>([]);

  useEffect(() => {
    getLatestStreams();
  }, [device]);

  const getLatestStreams = async () => {
    if (!!device) {
      const latest = await device.getLatestTelemetry();
      const maintenanceStats = latest.filter(
        (_: any) => _.currentValue === "Maintenance performed"
      );

      const maintenanceStreams = maintenanceStats.map((_: any) => _.streamName);

      setLatestStats(maintenanceStats);
      setStreams(maintenanceStreams);
    }
  };

  return (
    <div>
      {!!latestStats &&
        Object.keys(moduleConfig).map((_: string, idx: number) => {
          if (streams?.length > 0) {
            const currentStat = streams!.indexOf(
              (moduleConfig as any)[_].streamName
            );
            if (currentStat >= 0) {
              const lastService = new Date(
                (latestStats as any)[currentStat].currentValueTime
              );
              const nextService = getNextServiceDate(
                lastService,
                (moduleConfig as any)[_].window
              );
              return (
                <MaintenanceItem
                  key={idx}
                  name={_}
                  lastServiceDate={getLastServiceDate(lastService) || "--:--"}
                  nextServiceDate={nextService[0] || "--:--"}
                  serviceStatus={nextService[1]}
                />
              );
            }
          }
          return (
            <MaintenanceItem
              key={idx}
              name={_}
              lastServiceDate={"Last service: More than 20 days ago"}
              nextServiceDate={"Next Service: Overdue for more than 15 days"}
              serviceStatus={"overdue"}
            />
          );
        })}
    </div>
  );
};
