export type PlantData = {
  name: string;
  indoor_start: number | null;
  first_planting: number;
  last_planting: number;
  first_harvest: number;
  last_harvest: number | null;
  minimum_temp: number;
  row_spacing: number;
  plant_spacing: number;
};

export type PlantCollection = PlantData[];
