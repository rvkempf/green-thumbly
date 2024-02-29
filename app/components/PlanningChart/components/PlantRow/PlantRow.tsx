import { PlantData } from '~/types/plantData';

interface PlantRowProps {
  plant: PlantData;
}

export const PlantRow: React.FC<PlantRowProps> = ({ plant }) => {
  return <div>{plant.name}</div>;
};
