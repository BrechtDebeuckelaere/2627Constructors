function BankRekening(rekeninghouder, initeelSaldo) {
  // private variable Saldo
  let saldo = initeelSaldo >= 0 ? initeelSaldo : 0;
  //   if (initeelSaldo >= 0) {
  //     saldo = initeelSaldo;
  //   } else {
  //     saldo = 0;
  //   }

  Object.defineProperty(this, "saldo", {
    get: function () {
      return saldo;
    },
    // set: function (nieuwSaldo) {
    //   if (nieuwSaldo < 0) {
    //     throw new Error("Nieuw saldo is onder nul");
    //   } else {
    //     saldo = nieuwSaldo;
    //   }
    // },
  });

  this.storten = function (bedrag) {
    // controle op bedrag dat gestort kan worden
    if (bedrag <= 0) {
      //   throw new Error("te storten bedrag is onder nul");
      console.error("Het bedrag is te laag om te storten");
      return;
    }
    saldo += bedrag;
    console.log(`Jouw nieuwe saldo is: ${saldo}`);
  };

  this.opnemen = function (bedrag) {
    // controle op bedrag dat afgenomen kan worden
    if (bedrag <= 0) {
      console.error("Het bedrag is te laag om op te nemen");
      return;
    }
    if (saldo - bedrag < 0) {
      console.error("Je hebt niet voldoende geld op je rekening");
      return;
    }
    saldo -= bedrag;
    console.log(`Jouw nieuwe saldo is: ${saldo}`);
  };
}

const mijnRekening = new BankRekening("Karel Kleintjes", 20);

console.log(mijnRekening.saldo);

mijnRekening.storten(40);
mijnRekening.opnemen(20);
