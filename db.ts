import * as FileSystem from "expo-file-system";
import * as SQLite from "expo-sqlite";
import { Asset } from "expo-asset";

async function openDatabase(): Promise<SQLite.WebSQLDatabase> {
  if (
    !(await FileSystem.getInfoAsync(FileSystem.documentDirectory + "SQLite"))
      .exists
  ) {
    await FileSystem.makeDirectoryAsync(
      FileSystem.documentDirectory + "SQLite"
    );
  }
  if (
    !(
      await FileSystem.getInfoAsync(
        FileSystem.documentDirectory + "SQLite/myDatabaseName.db"
      )
    ).exists
  ) {
    await FileSystem.downloadAsync(
      Asset.fromModule(require("./assets/pokemon.db")).uri,
      FileSystem.documentDirectory + "SQLite/myDatabaseName.db"
    );
  }

  return SQLite.openDatabase("myDatabaseName.db");
}

export default openDatabase;
