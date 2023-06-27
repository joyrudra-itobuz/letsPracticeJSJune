import fs from "fs/promises";
import path from "path";
import { getCuurentPath } from "../main.js";

const readData = async () => {
  console.log("Called!");

  const readLocation = path.join(
    getCuurentPath,
    "database",
    "frontEndUsers.txt"
  );

  try {
    const data = JSON.parse(
      await fs.readFile(readLocation, { encoding: "utf8" })
    );
    // console.log(data);
    return data;
  } catch (err) {
    console.log(err);
  }
};

export default readData;
