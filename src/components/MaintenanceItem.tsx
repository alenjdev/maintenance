import styles from "./MaintenanceItem.module.scss";
import { FC } from "react";

interface IMaintenanceItemProps {
  name: string;
  lastServiceDate: string;
  nextServiceDate: string;
  serviceStatus: string;
}

export const MaintenanceItem: FC<IMaintenanceItemProps> = ({
  name,
  lastServiceDate,
  nextServiceDate,
  serviceStatus,
}) => {
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
        <button className={styles.btn}>Mark Complete</button>
      </div>
    </div>
  );
};
