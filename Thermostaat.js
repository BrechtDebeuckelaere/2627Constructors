function Thermostaat(initieletemperatuur) {
  let temperatuurCelsius = initieletemperatuur;

  Object.defineProperty(this, "temperatuurCelsius", {
    get: function () {
      const temperatuurFahrenheit = temperatuurCelsius * 1.8 + 32;
      return temperatuurFahrenheit;
    },
    set: function (value) {
      if (value > -50 && value < 100) {
        temperatuurCelsius = (value - 32) / 1.8;
      } else {
        console.log("Temperatuur buiten bereik (-50 tot 100 °F)!");
      }
    },
  });
}

const thermostaat = new Thermostaat(20);
thermostaat.temperatuurFahrenheit = 50;
console.log(thermostaat.temeratuurCelsius);
