import styles from "./MaintenanceItem.module.scss";
import React, { FC, useState } from "react";
import { Fleet } from "@formant/data-sdk";
import { Button } from "@alenjdev/ui-sdk";
interface IMaintenanceItemProps {
  name: string;
  lastServiceDate: string;
  nextServiceDate: string;
  serviceStatus: string;
  maintenanceType: string;
}

export const MaintenanceItem: FC<IMaintenanceItemProps> = ({
  name,
  lastServiceDate,
  nextServiceDate,
  serviceStatus,
  maintenanceType,
}) => {
  const [disable, setDisable] = useState(false);

  const performMaintenance = async () => {
    setDisable(true);
    const currentDevice = await Fleet.getCurrentDevice();
    await currentDevice.sendCommand("perform.maintenance", maintenanceType);
    await timeout(6000);
    setDisable(false);
  };

  const timeout = (ms: number) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
  };

  return (
    <div className={styles["item-container"]}>
      <div className={styles.top}>
        <span className={styles.time}>{lastServiceDate}</span>
        <span className={`${styles.time} ${styles[`time-${serviceStatus}`]}`}>
          {nextServiceDate}
        </span>
      </div>
      <div className={styles.bottom}>
        <span className={styles.item}>{name}</span>
        <Button
          disabled={disable}
          type="primary"
          size="small"
          onClick={performMaintenance}
          className={styles.btn}
        >
          Mark Complete
        </Button>
      </div>
    </div>
  );
};
