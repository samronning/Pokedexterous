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
  warningLight: "#ffb74d",
  warningDark: "#f57c00",
  warningMain: "#ffa726",
  infoLight: "#4fc3f7",
  infoDark: "#0288d1",
  infoMain: "#29b6f6",
};
type Color = keyof typeof colors;

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
export { alpha, alphaRaw, Color };
