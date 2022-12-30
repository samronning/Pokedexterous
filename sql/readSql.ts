import * as FileSystem from "expo-file-system";
import { Asset } from "expo-asset";

async function readSqlFile(
  sqlResource: string,
  filename: string
): Promise<string> {
  if (
    !(await FileSystem.getInfoAsync(FileSystem.documentDirectory + "SQL"))
      .exists
  ) {
    await FileSystem.makeDirectoryAsync(FileSystem.documentDirectory + "SQL");
  }
  await FileSystem.downloadAsync(
    Asset.fromModule(sqlResource).uri,
    FileSystem.documentDirectory + "SQL/" + filename
  );
  return FileSystem.readAsStringAsync(
    FileSystem.documentDirectory + "SQL/" + filename
  );
}

export default readSqlFile;
