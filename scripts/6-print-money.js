import sdk from "./1-initialize-sdk.js";

// This is the address of our ERC-20 contract printed out in the step before.
const token = sdk.getToken("0xd0E89b709c86D1f41175f986d312Be34cE790E6b");

(async () => {
  try {
    // What's the max supply you want to set? 1,000,000 is a nice number!
    const amount = 1000000;
    // Interact with your deployed ERC-20 contract and mint the tokens!
    await token.mint(amount);
    const totalSupply = await token.totalSupply();

    // Print out how many of our token's are out there now!
    console.log(
      "✅ There is now",
      totalSupply.displayValue,
      "$GREEN in circulation"
    );
  } catch (error) {
    console.error("Failed to print money", error);
  }
})();
