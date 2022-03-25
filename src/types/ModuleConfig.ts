import { MaintenanceStats } from "./MaintenanceStats";

export type maintenanceType =
  | "Blade sharpening"
  | "Oil change"
  | "Oil filter change"
  | "Air filter"
  | "Cleaning / Powerwash";

export const moduleConfig: MaintenanceStats = {
  "Blade sharpening": {
    streamName: "blade.sharpening",
    window: 5,
  },
  "Oil change": {
    streamName: "oil.change",
    window: 5,
  },
  "Oil filter change": {
    streamName: "oil.filter.change",
    window: 5,
  },
  "Air filter": {
    streamName: "air.filter",
    window: 5,
  },
  "Cleaning / Powerwash": {
    streamName: "cleaning.powerwash",
    window: 5,
  },
};

export const fifteenDays = 1296000000;
