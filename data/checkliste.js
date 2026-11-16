/* Checkliste „Bin ich fit?“ Elektrostatik – entspricht PHY-EST-07E_CHECKLISTE (13 Punkte)
   Reiter Test (DS 7, Influenz, Polarisation, Gewitter) und Klassenarbeit (DS 8, ganze Reihe)
   ab = Arbeitsblätter zum Wiederholen; links = Übungen auf dieser Seite */
window.CHECKLISTEN = {};
window.CHECKLISTEN.kurztest = {
  tab: 'Test (DS 7)', training: 'test-training/kurztest.html',
  titel: 'Bin ich fit für den Test Elektrostatik?',
  info: 'Der Test prüft Influenz (Getränkedose), Polarisation (Papierschiff) und das Gewitter (etwa 30 Minuten). Tippe ehrlich an, wie sicher du bist, und übe mit den Links.',
  gruppen: [
    { titel: 'Basis', punkte: 10, n: 'basis', items: [
      { id: 't1', t: 'geladene Körper zeichnen und mit Elektronenüberschuss und Elektronenmangel erklären', ab: '02B', links: [['Vorher – nachher', 'uebung.html#ballon-schal'], ['Glossar', 'glossar.html']] },
      { id: 't2', t: 'Influenz im Modell erklären (Getränkedose)', ab: '04D', links: [['Die rollende Dose', 'uebung.html#dose'], ['Influenz oder Polarisation?', 'uebung.html#influenz-polarisation']] },
      { id: 't3', t: 'Polarisation erklären und von Influenz unterscheiden (Papierschiff)', ab: '04D, 06A', links: [['Influenz oder Polarisation?', 'uebung.html#influenz-polarisation'], ['Phänomen-Quiz', 'uebung.html#phaenomene']] },
      { id: 't4', t: 'erklären, wie ein Blitz entsteht, und dabei die Begriffe Spannung und Strom verwenden', ab: '06B, 07A', links: [['Wie entsteht ein Blitz?', 'uebung.html#blitz']] },
      { id: 't5', t: 'Regeln für das Verhalten bei Gewitter nennen und begründen', ab: '06B, 07A', links: [['Sicher oder gefährlich?', 'uebung.html#sicher-gefaehrlich'], ['Mythen-Check', 'uebung.html#mythen']] }
    ] },
    { titel: '★ Erweitertes Niveau', punkte: 2, n: 'stern', items: [
      { id: 'ts1', t: 'die Entfernung eines Gewitters aus der Zeit zwischen Blitz und Donner berechnen', ab: '07A, 07D', links: [['Formel-Trainer', 'formel-trainer.html#gewitter'], ['Formel', 'formeln.html#faustregel']] }
    ] }
  ],
  tipps: [
    'Zeichne die Getränkedose und das Papierschiff im Modell aus dem Gedächtnis und vergleiche mit 04D.',
    'Erkläre jemandem den Unterschied zwischen Influenz und Polarisation in zwei Sätzen.',
    'Bearbeite die Beispielaufgaben im Test-Training und vergleiche mit den Lösungen.'
  ]
};
window.CHECKLISTEN.klassenarbeit = {
  tab: 'Klassenarbeit (DS 8)', training: 'test-training/index.html',
  titel: 'Bin ich fit für die Klassenarbeit Elektrostatik?',
  info: 'Die Klassenarbeit findet in DS 8 statt (45 Minuten). Sie prüft die ganze Reihe. Tippe ehrlich an, wie sicher du bist. Wo du „fast“ oder „noch nicht“ wählst, übst du mit den Links.',
  gruppen: [
    { titel: 'Basis', punkte: 22, n: 'basis', items: [
      { id: 'k1', t: 'Versuche zur Reibungselektrizität beschreiben (Luftballon, Wollschal, Stäbe)', ab: '02A, 03A', links: [['Vorher – nachher', 'uebung.html#ballon-schal']] },
      { id: 'k2', t: 'das Kern-Hülle-Modell beschreiben und erklären, wann ein Atom neutral ist', ab: '01C', links: [['Atom beschriften', 'uebung.html#atom'], ['Glossar', 'glossar.html']] },
      { id: 'k3', t: 'mit Atomrümpfen und freien Elektronen erklären, warum Metalle leiten und Isolatoren nicht', ab: '01A, 01D', links: [['Lückentext freie Elektronen', 'uebung.html#freie-elektronen'], ['Leiter oder Isolator?', 'uebung.html#leiter-isolator']] },
      { id: 'k4', t: 'geladene Körper zeichnen und mit Elektronenüberschuss und Elektronenmangel erklären', ab: '02B', links: [['Vorher – nachher', 'uebung.html#ballon-schal']] },
      { id: 'k5', t: 'erklären, warum sich gleichartig geladene Körper abstoßen und ungleichartig geladene anziehen', ab: '02A, 03A', links: [['Anziehen oder abstoßen?', 'uebung.html#anziehen-abstossen']] },
      { id: 'k6', t: 'mit Glimmlampe und Elektroskop Ladungen nachweisen', ab: '03B, 04A', links: [['Glimmlampe', 'uebung.html#glimmlampe'], ['Elektroskope sortieren', 'uebung.html#elektroskop']] },
      { id: 'k7', t: 'den Ladungsausgleich beschreiben (Türklinke, Entladen des Elektroskops)', ab: '03B, 04C', links: [['Lückentext Türklinke', 'uebung.html#tuerklinke']] },
      { id: 'k8', t: 'Influenz im Modell erklären (Getränkedose)', ab: '04D', links: [['Die rollende Dose', 'uebung.html#dose']] },
      { id: 'k9', t: 'Polarisation erklären und von Influenz unterscheiden (Papierschiff)', ab: '04D, 06A', links: [['Influenz oder Polarisation?', 'uebung.html#influenz-polarisation']] },
      { id: 'k10', t: 'erklären, wie ein Blitz entsteht, und dabei die Begriffe Spannung und Strom verwenden', ab: '06B, 07A', links: [['Wie entsteht ein Blitz?', 'uebung.html#blitz']] },
      { id: 'k11', t: 'Regeln für das Verhalten bei Gewitter nennen und begründen', ab: '06B, 07A', links: [['Sicher oder gefährlich?', 'uebung.html#sicher-gefaehrlich']] }
    ] },
    { titel: '★ Erweitertes Niveau', punkte: 4, n: 'stern', items: [
      { id: 's1', t: 'erklären, warum beim Trennen von Ladungen Arbeit verrichtet wird, die zu elektrischer Energie führt', ab: '04B', links: [['Arbeit beim Ladungstrennen', 'uebung.html#arbeit']] },
      { id: 's2', t: 'die Entfernung eines Gewitters aus der Zeit zwischen Blitz und Donner berechnen', ab: '07A, 07D', links: [['Formel-Trainer', 'formel-trainer.html#gewitter'], ['Formel', 'formeln.html#faustregel']] }
    ] }
  ],
  tipps: [
    'Lies die Merkkästen deiner Arbeitsblätter noch einmal und erkläre die Begriffe aus der Mindmap 07C.',
    'Zeichne Atom, Leiter, geladenen Ballon und Getränkedose im Modell aus dem Gedächtnis.',
    'Bearbeite das Übungsblatt 07D und die Beispielaufgaben im Test-Training.'
  ]
};
