const colors = {
  primary: "#8f1c2e",
  light: "#fae8e0",
  dark: "#d8a7b1",
  secondary: "#b6e2d3",
  lightText: "#ffffff",
  darkText: "#000000",
  errorText: "#ff0000",
  white: "#ffffff",
  black: "#000011",
};

const alpha = (
  color: keyof typeof colors,
  choice: "thin" | "medium" | "thick" | undefined
) => {
  switch (choice) {
    case "thin":
      return colors[color] + "33";
    case "medium":
      return colors[color] + "88";
    case "thick":
      return colors[color] + "bb";
    default:
      return "#00000000";
  }
};
export default colors;
export { alpha };
