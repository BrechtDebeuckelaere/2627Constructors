function BankRekening(rekeninghouder, initieelSaldo) {
  let saldo = initieelSaldo;
  
  this.opnemen = function (bedrag) {
    saldo -= bedrag;
    console.log(`Jouw nieuwe saldo is: ${saldo}`);
  };

  this.storten = function (bedrag) {
    saldo += bedrag;
    console.log(`Jouw nieuwe saldo is: ${saldo}`);
  };

  Object.defineProperty(this, "saldo", {
    get: function () {
      return saldo;
    },
    set: function (value) {
      saldo = value;
    },
  });
}

const bankRekening = new BankRekening("karel", 500);
console.log(bankRekening.saldo);
bankRekening.storten(200);
bankRekening.opnemen(200);
