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
  green: "#00ff00",
  red: "#ff0000",
  yellow: "#ffff00",
  clear: "#ffffff00",
};

type Thickness = "thin" | "medium" | "thick" | undefined;
const alpha = (color: keyof typeof colors, thickness: Thickness) => {
  return alphaRaw(colors[color], thickness);
};

const alphaRaw = (rawColor: string, thickness: Thickness) => {
  switch (thickness) {
    case "thin":
      return rawColor + "33";
    case "medium":
      return rawColor + "88";
    case "thick":
      return rawColor + "bb";
  }
};
export default colors;
export { alpha, alphaRaw };
