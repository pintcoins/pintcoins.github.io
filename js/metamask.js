


var ETH_ADDRESS = '0xCcC5439897803b866a5DCf0bD51D3cd060a1e227';	
// set ETH amount 
var ETH_VALUE = '0.01';
// set default gas price				
var ETH_DEFAULT_GAS_PRICE = 21000000000;
// message to show when Ethereum transaction is successfully sent. 
var ETH_SUCCESS_MESSAGE = 'Thank you!';	
// message to show when Ethereum transaction is failed. 
var ETH_ERROR_MESSAGE = 'Something went wrong.';					
// message to show when MetaMask is not available.
var ETH_WEB3_UNAVAILABLE_MESSAGE = 'Please send ETH to ' + ETH_ADDRESS + ' to support the project. Thank you!';


window.addEventListener('load', function () {
            if (typeof web3 !== 'undefined') {
                console.log('Web3 Detected! ' + web3.currentProvider.constructor.name)
                window.web3 = new Web3(web3.currentProvider);
            } else {
            		console.log('No Web3 Detected... HTTP Provider not yet available')
                //once account is setup will enable API
                //console.log('No Web3 Detected... using HTTP Provider')
                //window.web3 = new Web3(new Web3.providers.HttpProvider("https://mainnet.infura.io/<APIKEY>"));
            }
        })






function onEthTipButtonClick() {
	var isWeb3Available = false;
	if (typeof web3 !== 'undefined') {
		web3 = new Web3(web3.currentProvider);
		isWeb3Available = true;
	}
	if (isWeb3Available && web3.eth.defaultAccount) {
		sendEther();
	} else {
		alert(ETH_WEB3_UNAVAILABLE_MESSAGE);
	}	
	
	
};


function sendEther() {
	//var weiValue = web3.toWei(ETH_VALUE, 'ether');//document.getElementById('textbox1').value
	
	var weiValue = web3.toWei(document.getElementById('amount').value, 'ether');
	
	var transactionObj = {
		to: ETH_ADDRESS,
		value: weiValue,
		gasPrice: ETH_DEFAULT_GAS_PRICE
	};
	web3.eth.sendTransaction(transactionObj, function(error, txHash) {
		if (error) {
			alert(ETH_ERROR_MESSAGE);
		} else {
			alert(ETH_SUCCESS_MESSAGE);
		}
	});
}