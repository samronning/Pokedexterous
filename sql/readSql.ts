import * as FileSystem from "expo-file-system";
import { Asset } from "expo-asset";

const resources = {
  selectPokedex: {
    resource: require("./selectPokedex.sql"),
    fileName: "selectPokedex.sql",
  },
  generations: {
    resource: require("./generations.sql"),
    fileName: "selectPokedex.sql",
  },
  typeEfficacyByTypeName: {
    resource: require("./typeEfficacyByTypeName.sql"),
    fileName: "./typeEfficacyByTypeName.sql",
  },
  natures: {
    resource: require("./natures.sql"),
    fileName: "natures.sql",
  },
  abilities: {
    resource: require("./abilities.sql"),
    fileName: "abilities.sql",
  },
  items: {
    resource: require("./items.sql"),
    fileName: "items.sql",
  },
};

async function readSqlFile(
  selectedResource: keyof typeof resources
): Promise<string> {
  const { resource, fileName } = resources[selectedResource];
  if (
    !(await FileSystem.getInfoAsync(FileSystem.documentDirectory + "SQL"))
      .exists
  ) {
    await FileSystem.makeDirectoryAsync(FileSystem.documentDirectory + "SQL");
  }
  await FileSystem.downloadAsync(
    Asset.fromModule(resource).uri,
    FileSystem.documentDirectory + "SQL/" + fileName
  );
  return FileSystem.readAsStringAsync(
    FileSystem.documentDirectory + "SQL/" + fileName
  );
}

export { resources };

export default readSqlFile;
