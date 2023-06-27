import fs from "fs/promises";
import path from "path";
import { getCuurentPath } from "../main.js";

// const saveLocation = path.join(getCuurentPath, "database", "test.txt");

const saveData = async (data) => {
  const saveLocation = path.join(getCuurentPath, "database");
  console.log(saveLocation);
  await fs.writeFile(saveLocation, JSON.stringify(data));
};

export default saveData;
