/* Aufgaben-Generatoren für den Formel-Trainer (Elektrostatik, Physik 9/10)
   Jeder Generator liefert eine Aufgabe mit Zufallswerten:
   { text, gegeben, gesucht, formel, rechnung[], antwort, wert, einheit, dec, falsch[] }
   Bereiche: gewitter (Entfernung eines Gewitters) und umrechnen. Zahlen deutsch formatiert mit N(). */
(function () {
  function rnd(a, b, step) { step = step || 1; var n = Math.floor((b - a) / step + 1e-9) + 1; return +(a + Math.floor(Math.random() * n) * step).toFixed(6); }
  function pick(a) { return a[Math.floor(Math.random() * a.length)]; }
  function N(x, dec) { return window.App.num(x, dec); }
  function round(x, sig) { return +x.toPrecision(sig); }
  var WER = ['Mia', 'Jonas', 'Elif', 'Noah', 'Lea', 'Tim', 'Aylin', 'Ben'];   /* erfundene Namen */

  window.AUFGABEN = [
    { id: 'entf-km', r: 'gewitter', n: 'basis', titel: 'Entfernung mit der Faustregel', gen: function () {
        var t = pick([6, 12, 15, 18, 21, 24, 27, 33, 36, 45, 60]), s = t / 3;
        return { text: pick(WER) + ' zählt zwischen Blitz und Donner ' + N(t) + ' Sekunden. Wie weit ist das Gewitter etwa entfernt?',
          gegeben: 't = ' + N(t) + ' s; der Schall braucht etwa 3 s pro km', gesucht: 's in km', formel: 's = t : 3 s pro km',
          rechnung: ['s = ' + N(t) + ' s : 3 s pro km', 's = <b>' + N(s) + ' km</b>'],
          antwort: 'Das Gewitter ist etwa ' + N(s) + ' km entfernt.' + (t < 30 ? ' Weniger als 30 Sekunden: sofort Schutz suchen!' : ''),
          wert: s, einheit: 'km', dec: 1, falsch: [t * 3, t / 30] };
      } },
    { id: 'entf-zeit', r: 'gewitter', n: 'stern', titel: 'Zeit aus der Entfernung', gen: function () {
        var s = pick([1, 2, 3, 4, 5, 7, 8, 10, 12]), t = 3 * s;
        return { text: 'Ein Gewitter ist ' + N(s) + ' km entfernt. Wie viele Sekunden vergehen zwischen Blitz und Donner?',
          gegeben: 's = ' + N(s) + ' km; der Schall braucht etwa 3 s pro km', gesucht: 't in s', formel: 't = s · 3 s pro km',
          rechnung: ['t = ' + N(s) + ' km · 3 s pro km', 't = <b>' + N(t) + ' s</b>'],
          antwort: 'Zwischen Blitz und Donner vergehen etwa ' + N(t) + ' Sekunden.', wert: t, einheit: 's', dec: 0, falsch: [s / 3, s * 30] };
      } },
    { id: 'entf-genau', r: 'gewitter', n: 'stern', titel: 'Entfernung genauer mit 340 m/s', gen: function () {
        var t = rnd(2, 20), s = 340 * t;
        return { text: 'Zwischen Blitz und Donner vergehen ' + N(t) + ' Sekunden. Der Schall legt in 1 Sekunde etwa 340 m zurück. Berechne die Entfernung in Metern.',
          gegeben: 't = ' + N(t) + ' s; v = 340 m/s', gesucht: 's in m', formel: 's = v · t',
          rechnung: ['s = 340 m/s · ' + N(t) + ' s', 's = <b>' + N(s) + ' m</b> ≈ ' + N(round(s / 1000, 2)) + ' km'],
          antwort: 'Das Gewitter ist etwa ' + N(s) + ' m entfernt, also rund ' + N(round(s / 1000, 2)) + ' km.', wert: s, einheit: 'm', dec: 0, falsch: [340 / t, t / 3] };
      } },
    { id: 'u-km', r: 'umrechnen', n: 'basis', titel: 'm und km umrechnen', gen: function () {
        var c = pick([['m', 'km', pick([500, 1200, 2040, 3400, 4080, 6800, 750, 10200]), 1 / 1000], ['km', 'm', pick([0.5, 1.5, 2, 2.4, 3, 4.5, 8, 12]), 1000]]);
        var x = c[2], y = x * c[3], mal = c[3] > 1;
        return { text: 'Rechne ' + N(x) + ' ' + c[0] + ' in ' + c[1] + ' um.', gegeben: N(x) + ' ' + c[0], gesucht: 'Wert in ' + c[1], formel: '1 km = 1000 m',
          rechnung: [N(x) + ' ' + c[0] + (mal ? ' · 1000' : ' : 1000') + ' = <b>' + N(y) + ' ' + c[1] + '</b>'],
          antwort: N(x) + ' ' + c[0] + ' sind ' + N(y) + ' ' + c[1] + '.', wert: y, einheit: c[1], dec: 3, falsch: [mal ? x / 1000 : x * 1000, mal ? x * 100 : x / 100] };
      } },
    { id: 'u-min', r: 'umrechnen', n: 'basis', titel: 'Sekunden und Minuten', gen: function () {
        var c = pick([['min', 's', pick([0.5, 1, 1.5, 2, 3, 5]), 60], ['s', 'min', pick([30, 90, 120, 150, 180, 300]), 1 / 60]]);
        var x = c[2], y = x * c[3], mal = c[3] > 1;
        return { text: 'Rechne ' + N(x) + ' ' + c[0] + ' in ' + c[1] + ' um.', gegeben: N(x) + ' ' + c[0], gesucht: 'Wert in ' + c[1], formel: '1 min = 60 s',
          rechnung: [N(x) + ' ' + c[0] + (mal ? ' · 60' : ' : 60') + ' = <b>' + N(y) + ' ' + c[1] + '</b>'],
          antwort: N(x) + ' ' + c[0] + ' sind ' + N(y) + ' ' + c[1] + '.', wert: y, einheit: c[1], dec: 2, falsch: [mal ? x / 60 : x * 60, mal ? x * 100 : x / 100] };
      } }
  ];
})();
