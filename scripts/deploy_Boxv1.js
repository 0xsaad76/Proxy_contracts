const { ethers, upgrades } = require("hardhat");

async function main() {
  const Box = await ethers.getContractFactory("Box");
  const proxyContract = await upgrades.deployProxy(Box, [76], {
    initializer: "setValue(uint256)"
  });
  await proxyContract.waitForDeployment();

  const proxyContractAddress = await proxyContract.getAddress();
  const implementationAddress = await upgrades.erc1967.getImplementationAddress(
    proxyContractAddress
  );
  const adminAddress = await upgrades.erc1967.getAdminAddress(
    proxyContractAddress
  );
  console.log("Proxy deployed to:", proxyContractAddress);
  console.log("Implementation deployed to:", implementationAddress);
  console.log("Admin deployed to:", adminAddress);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});

// deployment command
// npx hardhat run --network sepolia ./scripts/deploy_Boxv1.js

// proxy address : 0x3D22E9b3893f0bbCEEb0780a7098b7A3bDcD091B
// implementation address : 0xF4e03EC7e50bE0ee88A0A0D8D71923B84afD2Fa2

