var web3js;
window.onload = function() {
  if (typeof web3 !== 'undefined') {
    // Mist または MetaMask のプロバイダを使用して Web3 を初期化します。
    web3js = new Web3(web3.currentProvider);
    console.log(web3js.version.api);  // => 0.20.3

    // ポーリングし、使用しているネットワークをチェックします。
    window.lastNetwork = 3;
    setInterval(function () {
      web3js.version.getNetwork(checkNetwork)
    }, 500);

    function checkNetwork (err, currentNetwork) {
      if (currentNetwork != 3) {
        alert("Connect to Ropsten Test Network via MetaMask.");
        window.lastNetwork = currentNetwork;
      }
    }
  }
};
