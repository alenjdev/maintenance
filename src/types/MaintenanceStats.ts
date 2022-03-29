// Define the set of string values in an array so they can actually be used later programatically
const maintenanceTypes = [
  "Blade sharpening",
  "Oil change",
  "Oil filter change",
  "Air filter",
  "Cleaning / Powerwash",
];
// define a type as one of the elements of this array
export type MaintenanceType = typeof maintenanceTypes[number];
export interface MaintenanceItem {
  // Types should always be UpperCase
  streamName: string;
  window: number;
}
// Mainstats is a dictionary where the key has to be one of these types, and the value is an item
export type MaintenanceStats = { [t in MaintenanceType]: MaintenanceItem };
