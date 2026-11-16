/* Formelsammlung Elektrostatik (Physik 9/10)
   In der Elektrostatik wird nur die Entfernung eines Gewitters berechnet (07A, 07D; Checkliste 07E Nr. 13).
   Beispielrechnungen: gegeben – gesucht – Formel – Rechnung – Antwort (Reihenstandard). Zahlen selbst gewählt. */
window.FORMELN = [
  { id: 'faustregel', r: 'gewitter', n: 'basis', ds: '7', titel: 'Entfernung mit der Faustregel',
    formel: 's = t : 3 s pro km',
    legende: [['Entfernung des Gewitters', 's', 'km'], ['Zeit zwischen Blitz und Donner', 't', 's (Sekunden)'], ['Der Schall braucht für 1 km etwa', '', '3 s']],
    umstellen: [{ f: 't = s · 3 s pro km', n: 'stern' }],
    beispiel: { aufgabe: 'Zwischen Blitz und Donner zählst du 18 Sekunden. Wie weit ist das Gewitter entfernt?',
      gegeben: 't = 18 s; Schall: 3 s pro km', gesucht: 's in km',
      rechnung: ['s = t : 3 s pro km', 's = 18 s : 3 s pro km', 's = 6 km'],
      antwort: 'Das Gewitter ist etwa 6 km entfernt. Das sind weniger als 30 Sekunden: Schutz suchen!' },
    hinweis: 'Den Blitz siehst du sofort, der Donner braucht länger. Zähle die Sekunden ab dem Blitz. Weniger als 30 Sekunden zwischen Blitz und Donner bedeutet Gefahr.' },

  { id: 'schallgeschwindigkeit', r: 'gewitter', n: 'stern', ds: '7', titel: 'Entfernung mit der Schallgeschwindigkeit',
    formel: 's = v · t',
    legende: [['Entfernung des Gewitters', 's', 'm'], ['Schallgeschwindigkeit in Luft', 'v', 'etwa 340 m/s'], ['Zeit zwischen Blitz und Donner', 't', 's']],
    umstellen: [{ f: 't = s : v', n: 'stern' }],
    beispiel: { aufgabe: 'Zwischen Blitz und Donner vergehen 7 Sekunden. Berechne die Entfernung genauer.',
      gegeben: 't = 7 s; v = 340 m/s', gesucht: 's in m',
      rechnung: ['s = v · t', 's = 340 m/s · 7 s', 's = 2380 m ≈ 2,4 km'],
      antwort: 'Das Gewitter ist etwa 2,4 km entfernt.' },
    hinweis: 'Die Faustregel (3 s pro km) rundet: Genau braucht der Schall für 1 km etwa 2,9 s. Ergebnis in m durch 1000 teilen, dann hast du km.' }
];

window.UMRECHNUNGEN = [
  ['1 km', '1000 m'], ['1 m', '0,001 km'], ['1 min', '60 s'], ['30 s', '0,5 min'],
  ['340 m/s', 'etwa 1 km in 3 s'], ['1 m/s', '3,6 km/h']
];
