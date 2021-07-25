async function main() {
 
    const [deployer] = await ethers.getSigners();
 
    console.log(
      "Deploying contracts with the account:",
      deployer.address
    );
 
    console.log("Account balance:", (await deployer.getBalance()).toString());
 
    const ERC20 = await ethers.getContractFactory("ERC20Basic");
    const deployedContract = await ERC20.deploy(1000000);
    console.log("Deployed ERC20 contract address:", deployedContract.address);

    const transfer = await deployedContract.transfer('', 500000);
  }
 
  main()
    .then(() => process.exit(0))
    .catch(error => {
      console.error(error);
      process.exit(1);
    });
