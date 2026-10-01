# JavaScript Oefeningen: Constructors, Private Variabelen, Getters & Setters

Deze oefenreeks helpt je bij het toepassen van constructor functions/classes, encapsulation met private variabelen (gebruikmakend van private fields `#` of closures), en het beheren van eigenschappen via getters en setters.

---

## Oefening 1: Bankrekening (`BankRekening`)

Maak een constructor function of class `BankRekening` met een private variabele `#saldo`.

### Vereisten:
1. De constructor accepteert de parameters `rekeninghouder` en `initieelSaldo`.
2. Maak `#saldo` private, zodat dit niet van buitenaf rechtstreeks aangepast kan worden.
3. Voeg een **getter** toe voor `saldo` om het huidige saldo te bekijken.
4. Voeg een **setter** toe voor `saldo` die controleert of het nieuwe saldo niet negatief is. Als het negatief is, geef een foutmelding in de console en pas het saldo niet aan.
5. Voeg twee methoden toe: `storten(bedrag)` en `opnemen(bedrag)`.

---

## Oefening 2: Thermostaat (`Thermostaat`)

Maak een constructor function of class `Thermostaat` om temperaturen te beheren in Celsius en Fahrenheit.

### Vereisten:
1. De constructor accepteert een initiële temperatuur in Celsius en slaat deze op in een private variabele `#temperatuurCelsius`.
2. Maak een **getter** en **setter** voor `temperatuurCelsius`:
   - De setter accepteert alleen temperaturen tussen `-50°C` en `100°C`.
3. Maak een **getter** en **setter** voor `temperatuurFahrenheit`:
   - De getter berekent de temperatuur in Fahrenheit ($F = C \times 1.8 + 32$).
   - De setter zet Fahrenheit om naar Celsius en update de private variabele.

---

## Oefening 3: Werknemer & Salaris (`Werknemer`)

Maak een constructor function en/of class `Werknemer` waarin gevoelige gegevens zoals het salaris afgeschermd zijn.

### Vereisten:
1. De constructor accepteert `naam`, `functie` en `maandsalaris`.
2. Sla `maandsalaris` private op.
3. Maak een **getter** voor `jaarsalaris` (berekend als `maandsalaris * 12 + vakantiegeld (8%)`).
4. Maak een **getter** en **setter** voor `maandsalaris`:
   - De setter mag een salarisverhoging accepteren, maar het nieuwe salaris mag nooit lager zijn dan het huidige salaris (verlaging is niet toegestaan).

---

## Oefening 4: Gebruikersprofiel met Wachtwoord (`Gebruiker`)

Maak een constructor function of class `Gebruiker` waarin het wachtwoord beveiligd opgeslagen wordt.

### Vereisten:
1. De constructor accepteert `gebruikersnaam` en `wachtwoord`.
2. Sla het `wachtwoord` private op.
3. Maak een **getter** voor `wachtwoord` die altijd een gemaskerde string teruggeeft (bijv. `"******"`).
4. Maak een **setter** voor `wachtwoord`:
   - Het nieuwe wachtwoord moet minstens 8 tekens lang zijn en minstens 1 cijfer bevatten. Als het niet aan de eisen voldoet, geef een melding en pas het niet aan.
5. Voeg een methode `valideerWachtwoord(invoer)` toe die `true` of `false` teruggeeft door de invoer te vergelijken met het private wachtwoord.
