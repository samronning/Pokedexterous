import { CategoryList } from "./Categories";
const pokedexCategories: CategoryList = [
  {
    column: "dex_number",
    displayText: "Dex Number",
    iconName: { materialName: "pound-box-outline" },
  },
  { column: "hp", displayText: "Hp", iconName: "heart" },
  {
    column: "attack",
    displayText: "Attack",
    iconName: { materialName: "sword" },
  },
  {
    column: "defense",
    displayText: "Defense",
    iconName: { materialName: "wall" },
  },
  {
    column: "specialattack",
    displayText: "Special Attack",
    iconName: { materialName: "fire" },
  },
  {
    column: "specialdefense",
    displayText: "Special Defense",
    iconName: { materialName: "shield-sun" },
  },
  { column: "speed", displayText: "Speed", iconName: "bolt" },
  {
    column: "base_stats_total",
    displayText: "Stat Total",
    iconName: { materialName: "sigma" },
  },
];

export default pokedexCategories;
