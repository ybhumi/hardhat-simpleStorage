//imports
c//onst { Contract } = require("ethers");
const {ether} = require("hardhat")


//async main
async function main(){
  const SimpleStoragefactory = await ethers.getContractFactory(
    "SimpleStorage"
  )
  console.log("Deploying Contract..........")
  const simpleStorage = await SimpleStoragefactory.deploy()
  await simpleStorage.deployed()
  console.log(`deployed contract:${simpleStorage.address}`)

//   if(network.config.chainId  === 11155111 && process.env.Api_Key){
//     await simpleStorage.deployTransaction.wait(6)
//     await verify(simpleStorage.address, [])
//   }


//   //it actually gives a adress without connecting it anywhere coz it automatlicayy connects it to hardhat fake ntwkr and gives a fake walllet

// // console.log(network.config)
// const currentValue = await simpleStorage.retrieve()
// console.log(`current Value is:${currentValue} `)

// //updating current value
// const transactionResponse = await simpleStorage.store(7)
// await transactionResponse.wait(1)
// const updatedValue = await simpleStorage.retrieve()
// console.log(`updated Value is:${updatedValue} `)



// }

// async function verify(contractAddress, args){
//   console.log("verifying contract........")
//   try{
//     await run("verify:verify", {
//       address: contractAddress,
//       constructorArguments: args,
//     })
//   }
//   catch(e) {
//     if(e.message.toLowerCase().includes("already verified")){
//       console.log(e)
//     }
//   }
 

// }
  }




// callmain
main().
then(() => process.exit(0))
.catch((error) => {
  console.error(error);
  process.exit(1);
});