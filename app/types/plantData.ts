export type PlantData = {
  name: string;
  indoorStart: number | null;
  firstPlanting: number;
  lastPlanting: number;
  firstHarvest: number;
  lastHarvest: number | null;
  minimumTemp: number;
  rowSpacing: number;
  plantSpacing: number;
};

export type PlantCollection = PlantData[];
