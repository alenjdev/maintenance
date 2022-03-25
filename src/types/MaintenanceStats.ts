export interface MaintenanceStats {
  "Blade sharpening": maintenanceItem;
  "Oil change": maintenanceItem;
  "Oil filter change": maintenanceItem;
  "Air filter": maintenanceItem;
  "Cleaning / Powerwash": maintenanceItem;
}

export interface maintenanceItem {
  streamName: string;
  window: number;
}
