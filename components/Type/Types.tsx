const types = {
  none: { name: "None", color: "#BBBBBB", darkText: true },
  fire: { name: "Fire", color: "#F08030", darkText: true },
  grass: { name: "Grass", color: "#78C850", darkText: true },
  water: { name: "Water", color: "#1703ab", darkText: false },
  normal: { name: "Normal", color: "#A8A888", darkText: true },
  flying: { name: "Flying", color: "#A890F0", darkText: true },
  fighting: { name: "Fighting", color: "#991900", darkText: false },
  fairy: { name: "Fairy", color: "#ff6bd5", darkText: true },
  ground: { name: "Ground", color: "#784411", darkText: false },
  steel: { name: "Steel", color: "#ededed", darkText: true },
  dark: { name: "Dark", color: "#47321c", darkText: false },
  dragon: { name: "Dragon", color: "#7e00a1", darkText: false },
  electric: { name: "Electric", color: "#fffb00", darkText: true },
  ghost: { name: "Ghost", color: "#6200b8", darkText: false },
  bug: { name: "Bug", color: "#b8de40", darkText: true },
  psychic: { name: "Psychic", color: "#e300aa", darkText: true },
  rock: { name: "Rock", color: "#B8A038", darkText: true },
  ice: { name: "Ice", color: "#4de7ff", darkText: true },
  poison: { name: "Poison", color: "#9c0091", darkText: false },
};
type TypeName = keyof typeof types;
export { TypeName };
export default types;
