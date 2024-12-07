const { ethers, upgrades } = require("hardhat");
const proxyAddress = "0x3D22E9b3893f0bbCEEb0780a7098b7A3bDcD091B";

async function main() {
    const BoxV2 = await ethers.getContractFactory("BoxV2");
    console.log("Upgrading BoxV2...");
    const boxV2 = await upgrades.upgradeProxy(proxyAddress, BoxV2);
    await boxV2.waitForDeployment();
    console.log('BoxV2 upgraded to:', await boxV2.getAddress());
}

main().catch((err) => {
    console.error(err);
    process.exit(1);
});
  