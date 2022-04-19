import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const editionDrop = sdk.getEditionDrop(
  "0x66DAE35f82A518AfA99afA8D06Aa2461Ca1c89e1"
);

(async () => {
  try {
    await editionDrop.createBatch([
      {
        name: "Nature Beginning",
        description: "This NFT will give you access to GreenDAO!",
        image: readFileSync("scripts/assets/greenDao.jpg"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})();
