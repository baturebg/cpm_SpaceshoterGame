var web3;

const account  = document.getElementById('account_')
const connector_  = document.getElementById('Connect')


// metamask connection

// async function Connect(){

//     await window.web3.currentProvider.enable();
//     web3= new web3(window.web3.currentProvider);
//  }


  async function Connect(){  
  await window.web3.currentProvider.enable();
  web3= new web3(window.web3.currentProvider);
  getBalance();
}
  
  
  
  const provider =
    "https://bsc-dataseed.binance.org"
  
  const Web3Client = new Web3(new Web3.providers.HttpProvider(provider));
  
  // The minimum ABI required to get the ERC20 Token balance
  const minABI = [
    // balanceOf
    {
      constant: true,
      inputs: [{ name: "_owner", type: "address" }],
      name: "balanceOf",
      outputs: [{ name: "balance", type: "uint256" }],
      type: "function",
    },
  ];
  const tokenAddress = "0x2ac2abd3ae104bb4a67c0faf009e9b9452d6af2b";
  
  const contract = new Web3Client.eth.Contract(minABI, tokenAddress);
  
  async function getBalance() {
  
  var walletAddress = web3.currentProvider.selectedAddress;  
    const result = await contract.methods.balanceOf(walletAddress).call(); // 29803630997051883414242659
      
  
    document.getElementById("account_").innerHTML = walletAddress;
    const format = Web3Client.utils.fromWei(result); // 29803630.997051883414242659
  
    document.getElementById("balance_").innerHTML =format;
    
    document.getElementById("Connect").innerHTML = "Connected";
  }
   
   getBalance();
  
