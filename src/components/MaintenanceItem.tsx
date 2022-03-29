import styles from "./MaintenanceItem.module.scss";
import { FC } from "react";
import { Fleet } from "@formant/data-sdk";

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
  const performMaintenance = async () => {
    const currentDevice = await Fleet.getCurrentDevice();
    await currentDevice.sendCommand("perform.maintenance", maintenanceType);
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
        <button onClick={performMaintenance} className={styles.btn}>
          Mark Complete
        </button>
      </div>
    </div>
  );
};
