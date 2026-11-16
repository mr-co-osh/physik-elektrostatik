/* Inhalte der Hauptseite: Reihe Elektrostatik (Physik 9/10)
   Typen: zuordnen · rechnen · quiz · schaetzen · sim · extern
   n: 'basis' | 'stern' | 'beide';  ein: true = auch im Modus „Einstieg“;  href leer = in Arbeit */
window.SITE = {
  prefix: 'phy-est',
  fach: 'Physik 9/10', rahmen: 'Rahmenthema 1', titel: 'Elektrostatik',
  leitfrage: 'Woher kommt der Schlag an der Türklinke – und was hat er mit einem Blitz zu tun?',
  phasen: [
    { n: 1, name: 'Vom Atom zum Leiter', ds: 'DS 1', anzahl: 1 },
    { n: 2, name: 'Ladungen trennen und nachweisen', ds: 'DS 2–4', anzahl: 3 },
    { n: 3, name: 'Ladungen verschieben', ds: 'DS 4–6', anzahl: 3 },
    { n: 4, name: 'Gewitter und Abschluss', ds: 'DS 6–8', anzahl: 3 }
  ],
  werkzeuge: [
    { id: 'glossar', titel: 'Glossar', text: 'Alle Fachwörter mit Erklärung und Beispielsatz', href: 'glossar.html' },
    { id: 'formeln', titel: 'Formelsammlung', text: 'Entfernung eines Gewitters und Umrechnen', href: 'formeln.html' },
    { id: 'formeltrainer', titel: 'Formel-Trainer', text: 'Rechnen mit Zufallswerten und Lösungsweg', href: 'formel-trainer.html' },
    { id: 'fachwort', titel: 'Fachwort-Trainer', text: 'Vokabelkasten mit fünf Fächern', href: 'fachwort-trainer.html' },
    { id: 'checkliste', titel: 'Checkliste', text: 'Bin ich fit für Test und Klassenarbeit?', href: 'checkliste.html' },
    { id: 'test', titel: 'Test-Training', text: 'Beispielaufgaben für Test und Klassenarbeit', href: 'test-training/kurztest.html' }
  ],
  bereiche: [
    { id: 'atom', phase: 1, ds: 'DS 1', titel: 'Atom & Leiter',
      text: 'Kern-Hülle-Modell, Atomrumpf und freie Elektronen, Leiter und Isolatoren',
      items: [
        { typ: 'zuordnen', titel: 'Atom beschriften', kurz: 'Kern, Hülle, Proton, Elektron', n: 'basis', ein: true, href: 'uebung.html#atom' },
        { typ: 'zuordnen', titel: 'Leiter oder Isolator?', kurz: 'Gegenstände sortieren', n: 'basis', ein: true, href: 'uebung.html#leiter-isolator' },
        { typ: 'quiz', titel: 'Lückentext freie Elektronen', kurz: 'mit Wortspeicher', n: 'basis', href: 'uebung.html#freie-elektronen' },
        { typ: 'quiz', titel: 'Wo stößt das Modell an Grenzen?', kurz: 'Graphit und Salzwasser', n: 'stern', href: 'uebung.html#modellgrenzen' }
      ] },
    { id: 'reibung', phase: 2, ds: 'DS 2–3', titel: 'Ladung durch Reibung',
      text: 'Ladungstrennung beim Reiben, Elektronenüberschuss und Elektronenmangel, Anziehung und Abstoßung',
      items: [
        { typ: 'quiz', titel: 'Vorher – nachher', kurz: 'Ballon und Schal im Modell', n: 'basis', ein: true, href: 'uebung.html#ballon-schal' },
        { typ: 'zuordnen', titel: 'Anziehen oder abstoßen?', kurz: 'Ladungspaare zuordnen', n: 'basis', ein: true, href: 'uebung.html#anziehen-abstossen' },
        { typ: 'quiz', titel: 'Wer wird negativ?', kurz: 'Spannungsreihe', n: 'stern', href: 'uebung.html#spannungsreihe' }
      ] },
    { id: 'nachweis', phase: 2, ds: 'DS 3–4', titel: 'Ladungen nachweisen',
      text: 'Glimmlampe und Elektroskop, Ladungsausgleich, Ladungstrennung als Arbeit',
      items: [
        { typ: 'quiz', titel: 'Glimmlampe: Wo leuchtet es?', kurz: 'Plus oder Minus erkennen', n: 'basis', ein: true, href: 'uebung.html#glimmlampe' },
        { typ: 'zuordnen', titel: 'Elektroskope sortieren', kurz: 'nach der Ladungsmenge', n: 'basis', href: 'uebung.html#elektroskop' },
        { typ: 'quiz', titel: 'Lückentext Türklinke', kurz: 'Ladungsausgleich, mit Wortspeicher', n: 'basis', ein: true, href: 'uebung.html#tuerklinke' },
        { typ: 'quiz', titel: 'Arbeit beim Ladungstrennen', kurz: 'Woher kommt die Energie?', n: 'stern', href: 'uebung.html#arbeit' }
      ] },
    { id: 'verschieben', phase: 3, ds: 'DS 4–6', titel: 'Influenz & Polarisation',
      text: 'Ladungsverschiebung im Leiter (Influenz) und im Isolator (Polarisation)',
      items: [
        { typ: 'zuordnen', titel: 'Influenz oder Polarisation?', kurz: 'Beispiele zuordnen', n: 'beide', ein: true, href: 'uebung.html#influenz-polarisation' },
        { typ: 'zuordnen', titel: 'Die rollende Dose', kurz: 'Schritte sortieren', n: 'basis', href: 'uebung.html#dose' },
        { typ: 'quiz', titel: 'Phänomen-Quiz', kurz: 'Ballon, Schnipsel, Tischtennisball', n: 'beide', href: 'uebung.html#phaenomene' },
        { typ: 'sim', titel: 'Getränkedose & Influenz', kurz: 'Code aus 04D', n: 'basis', lock: true, href: 'sim/dose.html' },
        { typ: 'sim', titel: 'Papierschiff & Polarisation', kurz: 'Code aus 04D', n: 'basis', lock: true, href: 'sim/papierschiff.html' },
        { typ: 'sim', titel: 'Wasserstrahl & geladener Stab', kurz: 'Code aus 04D', n: 'beide', lock: true, href: 'sim/wasserstrahl.html' },
        { typ: 'sim', titel: 'Polarisation im Modell', kurz: 'Vertiefung, Code aus 04D (Papierschiff)', n: 'beide', lock: true, href: 'sim/polarisation.html' }
      ] },
    { id: 'gewitter', phase: 4, ds: 'DS 6–7', titel: 'Gewitter & Schutz',
      text: 'Entstehung eines Blitzes, Spannung und Strom, Verhalten bei Gewitter, Entfernung berechnen',
      items: [
        { typ: 'zuordnen', titel: 'Wie entsteht ein Blitz?', kurz: 'Schritte sortieren', n: 'basis', ein: true, href: 'uebung.html#blitz' },
        { typ: 'zuordnen', titel: 'Sicher oder gefährlich?', kurz: 'Verhalten bei Gewitter', n: 'basis', ein: true, href: 'uebung.html#sicher-gefaehrlich' },
        { typ: 'quiz', titel: 'Mythen-Check', kurz: 'Stimmt das?', n: 'basis', ein: true, href: 'uebung.html#mythen' },
        { typ: 'rechnen', titel: 'Rechentrainer Entfernung', kurz: 'Zeit zwischen Blitz und Donner', n: 'beide', href: 'formel-trainer.html#gewitter' },
        { typ: 'sim', titel: 'Blitz-Labor', kurz: 'Code aus 07A', n: 'beide', lock: true, href: 'sim/blitz-labor.html' }
      ] }
  ]
};
