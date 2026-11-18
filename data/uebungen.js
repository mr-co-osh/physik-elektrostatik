/* Übungen in den Themenbereichen – Elektrostatik (Physik 9/10). Alle Texte selbst erstellt, keine Aufgaben der Arbeitsblätter.
   Typen: zuordnen · sortieren · quiz · luecke · schaetzen
   n = 'basis' | 'stern' | 'beide' (Übung);  bei Fragen/Elementen: stern: true = nur „Basis + ★“, ein: true = auch im Einstieg
   Modell: Atomrumpf = rotes Plus, Elektron = blaues Minus. */
window.UEBUNGEN = [

  // ======================= Atom & Leiter =======================
  { id: 'atom', r: 'atom', typ: 'zuordnen', n: 'basis', ein: true, titel: 'Atom beschriften',
    zeile: true,   /* Felder gleichmäßig in einer Reihe (Layout Energie) */
    /* Teil 1: Bild wie Arbeitsblatt 01C, Kästen von oben nach unten */
    bild: { svg: '<svg viewBox="0 0 1000 620" aria-hidden="true"><circle cx="300" cy="310" r="270" fill="#EDF0F3" stroke="#8A96A3" stroke-width="7" stroke-dasharray="22 14"/><circle cx="300" cy="310" r="100" fill="#fff" stroke="#8A96A3" stroke-width="4"/><g stroke="#8A96A3" stroke-width="3"><circle cx="320" cy="262" r="25" fill="#C9D0D7"/><circle cx="262" cy="345" r="25" fill="#C9D0D7"/><circle cx="294" cy="306" r="25" fill="#C9D0D7"/></g><g fill="#D2412F"><circle cx="252" cy="282" r="25"/><circle cx="345" cy="326" r="25"/><circle cx="305" cy="365" r="25"/></g><g stroke="#fff" stroke-width="6" stroke-linecap="round"><path d="M240 282h24M252 270v24M333 326h24M345 314v24M293 365h24M305 353v24"/></g><g fill="#2B66CC"><circle cx="330" cy="72" r="22"/><circle cx="100" cy="230" r="22"/><circle cx="430" cy="525" r="22"/><circle cx="150" cy="475" r="22"/></g><g stroke="#fff" stroke-width="6" stroke-linecap="round"><path d="M319 72h22M89 230h22M419 525h22M139 475h22"/></g><g stroke="#333" stroke-width="3.5" fill="none"><path d="M330 72L610 62h30"/><path d="M470 180L610 186h30"/><path d="M320 262L610 310h30"/><path d="M345 326L610 434h30"/><path d="M371 381L610 558h30"/></g><g fill="#333"><circle cx="330" cy="72" r="6"/><circle cx="470" cy="180" r="6"/><circle cx="320" cy="262" r="6"/><circle cx="345" cy="326" r="6"/><circle cx="371" cy="381" r="6"/></g></svg>',
      felder: [{ t: 'Elektron', y: 10.0 }, { t: 'Atomhülle', y: 30.0 }, { t: 'Neutron', y: 50.0 }, { t: 'Proton', y: 70.0 }, { t: 'Atomkern', y: 90.0 }] },
    intro: 'Beschrifte zuerst das Atom. Ordne dann die Beschreibungen zu.',
    kategorien: ['Atomkern', 'Atomhülle', 'Proton', 'Neutron', 'Elektron'],
    elemente: [
      { t: 'winziger Teil in der Mitte des Atoms', k: 0, ein: true },
      { t: 'hier sitzen die Protonen und Neutronen', k: 0, ein: true },
      { t: 'Bereich außen um den Kern', k: 1, ein: true },
      { t: 'hier bewegen sich die Elektronen', k: 1, ein: true },
      { t: 'positiv geladenes Teilchen im Kern', k: 2, ein: true },
      { t: 'im Modell: rotes Plus', k: 2 },
      { t: 'ungeladenes Teilchen im Kern', k: 3, ein: true },
      { t: 'negativ geladenes Teilchen', k: 4, ein: true },
      { t: 'im Modell: blaues Minus', k: 4 },
      { t: 'kann beim Reiben auf einen anderen Körper wechseln', k: 4, e: 'Nur Elektronen wechseln den Körper. Protonen und Neutronen bleiben im Atomkern.' }
    ] },

  { id: 'leiter-isolator', r: 'atom', typ: 'zuordnen', n: 'basis', ein: true, titel: 'Leiter oder Isolator?',
    intro: 'Leitet der Gegenstand oder isoliert er? Ordne jede Karte zu.',
    kategorien: ['Leiter', 'Isolator'],
    elemente: [
      { t: 'Büroklammer aus Eisen', k: 0, ein: true },
      { t: 'Radiergummi', k: 1, ein: true },
      { t: 'Kupferdraht im Kabel', k: 0, ein: true },
      { t: 'Kunststoffhülle um das Kabel', k: 1, ein: true },
      { t: 'Alufolie', k: 0, ein: true },
      { t: 'Glasmurmel', k: 1, ein: true },
      { t: 'Holzlineal', k: 1 },
      { t: 'Schlüssel aus Messing', k: 0, e: 'Messing ist ein Metall (aus Kupfer und Zink). Metalle haben freie Elektronen.' },
      { t: 'Luftballon', k: 1 },
      { t: 'Löffel aus Edelstahl', k: 0 },
      { t: 'Wollschal', k: 1 },
      { t: 'Münze', k: 0 }
    ] },

  { id: 'freie-elektronen', r: 'atom', typ: 'luecke', n: 'basis', titel: 'Lückentext freie Elektronen',
    intro: 'Warum leiten Metalle? Wähle für jede Lücke das passende Wort aus dem Wortspeicher.',
    text: 'Ein Atom ist nach außen {neutral}, weil es gleich viele Protonen und Elektronen hat. In einem Metall lösen sich die äußeren {Elektronen} von ihren Atomen. Übrig bleiben die positiv geladenen {Atomrümpfe}. Sie sitzen fest an ihrem Platz. Die {freien Elektronen} können sich zwischen ihnen bewegen. Deshalb ist ein Metall ein {Leiter}. In einem {Isolator} sind alle Elektronen an ihre Atome gebunden.',
    extra: ['Protonen', 'Neutronen', 'positiv', 'Atomkerne'] },

  { id: 'modellgrenzen', r: 'atom', typ: 'quiz', n: 'stern', titel: 'Wo stößt das Modell an Grenzen?',
    intro: 'Unser Modell sagt: Metalle leiten, weil sie freie Elektronen haben. Stimmt das immer? Lies danach die Erklärung.',
    fragen: [
      { f: 'Die Mine eines Bleistifts ist aus Graphit, also aus Kohlenstoff. Kohlenstoff ist kein Metall. Leitet Graphit?', o: ['ja, Graphit leitet', 'nein, Graphit isoliert'], r: 0,
        e: 'Graphit leitet, obwohl es kein Metall ist. Es hat ebenfalls bewegliche Elektronen. Die Regel „nur Metalle leiten“ stimmt also nicht immer.' },
      { f: 'Reines Wasser leitet kaum. Was passiert, wenn man Kochsalz darin auflöst?', o: ['Das Salzwasser leitet.', 'Es leitet weiterhin kaum.'], r: 0,
        e: 'Salzwasser leitet. Beim Auflösen entstehen geladene Teilchen, die Ionen.' },
      { f: 'Wer trägt die Ladung im Salzwasser?', o: ['freie Elektronen wie im Metall', 'Ionen'], r: 1,
        e: 'Im Salzwasser bewegen sich Ionen. Unser Modell mit Atomrümpfen und freien Elektronen beschreibt das nicht. Hier kommt es an seine Grenze.' },
      { f: 'Was erklärt unser Modell (Atomrumpf und freie Elektronen) gut?', o: ['warum Metalle leiten', 'warum Salzwasser leitet'], r: 0,
        e: 'Das Modell erklärt gut, warum Metalle leiten. Für Salzwasser braucht man ein erweitertes Modell mit Ionen.' }
    ] },

  // ======================= Ladung durch Reibung =======================
  { id: 'ballon-schal', r: 'reibung', typ: 'quiz', n: 'basis', ein: true, titel: 'Vorher – nachher',
    intro: 'Ein Luftballon wird an einem Wollschal gerieben. Danach ist der Ballon negativ geladen. Beantworte die Fragen zum Modell.',
    fragen: [
      { f: 'Vor dem Reiben sind Ballon und Schal …', o: ['neutral', 'positiv', 'negativ'], r: 0, ein: true,
        e: 'Vorher hat jeder Körper gleich viele Elektronen wie Protonen. Er ist neutral.' },
      { f: 'Was wechselt beim Reiben vom Schal auf den Ballon?', o: ['Elektronen', 'Atomrümpfe', 'Protonen'], r: 0, ein: true,
        e: 'Nur Elektronen wechseln. Die Atomrümpfe bleiben, wo sie sind.' },
      { f: 'Der Ballon hat danach …', o: ['einen Elektronenüberschuss', 'einen Elektronenmangel'], r: 0, ein: true,
        e: 'Der Ballon hat Elektronen dazubekommen. Er hat einen Elektronenüberschuss und ist negativ.' },
      { f: 'Der Schal ist danach …', o: ['positiv', 'negativ', 'neutral'], r: 0, ein: true,
        e: 'Der Schal hat Elektronen abgegeben. Er hat einen Elektronenmangel und ist positiv.' },
      { f: 'Wie viele Pluszeichen zeichnest du nach dem Reiben in den Schal, verglichen mit vorher?', o: ['gleich viele', 'mehr', 'weniger'], r: 0,
        e: 'Die Pluszeichen (Atomrümpfe) ändern sich nie. Nur die Minuszeichen (Elektronen) werden anders verteilt.' },
      { f: '„Beim Reiben entsteht neue Ladung.“ Stimmt das?', o: ['ja', 'nein'], r: 1,
        e: 'Ladung entsteht nicht neu. Sie wird nur getrennt: Was der Ballon mehr hat, fehlt dem Schal.' }
    ] },

  { id: 'anziehen-abstossen', r: 'reibung', typ: 'zuordnen', n: 'basis', ein: true, titel: 'Anziehen oder abstoßen?',
    intro: 'Zwei geladene Körper kommen sich nahe. Ziehen sie sich an oder stoßen sie sich ab?',
    kategorien: ['ziehen sich an', 'stoßen sich ab'],
    elemente: [
      { t: 'positiv und negativ', k: 0, ein: true },
      { t: 'negativ und negativ', k: 1, ein: true },
      { t: 'positiv und positiv', k: 1, ein: true },
      { t: 'negativ und positiv', k: 0, ein: true },
      { t: 'zwei Ballons, beide am selben Schal gerieben', k: 1, e: 'Beide Ballons haben Elektronen aufgenommen. Sie sind beide negativ und stoßen sich ab.' },
      { t: 'ein geriebener Ballon und der Schal, an dem er gerieben wurde', k: 0 },
      { t: 'zwei Körper mit Elektronenüberschuss', k: 1 },
      { t: 'ein Körper mit Elektronenüberschuss und einer mit Elektronenmangel', k: 0 }
    ] },

  { id: 'spannungsreihe', r: 'reibung', typ: 'quiz', n: 'stern', titel: 'Wer wird negativ?',
    intro: 'Spannungsreihe von oben nach unten: Leder · Fell · Glas · Haare · Wolle · Seide · Papier · Baumwolle · Hartgummi · Polyester · PVC. Werden zwei Stoffe aneinander gerieben, nimmt der Stoff weiter unten Elektronen auf und wird negativ.',
    fragen: [
      { f: 'Ein Glasstab wird mit einem Seidentuch gerieben. Welcher Stoff wird negativ?', o: ['Glas', 'Seide'], r: 1,
        e: 'Seide steht weiter unten. Sie nimmt Elektronen auf und wird negativ, das Glas wird positiv.' },
      { f: 'Ein Pulli aus Polyester reibt an einem T-Shirt aus Baumwolle. Welcher Stoff wird negativ?', o: ['Polyester', 'Baumwolle'], r: 0,
        e: 'Polyester steht weiter unten. Der Pulli nimmt Elektronen auf und wird negativ.' },
      { f: 'Ein PVC-Rohr wird mit einem Wolltuch gerieben. Wie wird die Wolle geladen?', o: ['positiv', 'negativ'], r: 0,
        e: 'PVC steht ganz unten und nimmt Elektronen auf. Die Wolle gibt Elektronen ab und wird positiv.' },
      { f: 'Jetzt wird die Wolle an Leder gerieben. Wie wird die Wolle geladen?', o: ['positiv', 'negativ'], r: 1,
        e: 'Leder steht über der Wolle. Diesmal nimmt die Wolle Elektronen auf und wird negativ. Es kommt also auf den Partner an.' },
      { f: 'Welches Paar lädt sich beim Reiben am stärksten auf?', o: ['Leder und PVC', 'Wolle und Fell', 'Papier und Baumwolle'], r: 0,
        e: 'Je weiter zwei Stoffe in der Reihe auseinanderstehen, desto stärker laden sie sich auf. Leder und PVC stehen ganz oben und ganz unten.' }
    ] },

  // ======================= Ladungen nachweisen =======================
  { id: 'glimmlampe', r: 'nachweis', typ: 'quiz', n: 'basis', ein: true, titel: 'Glimmlampe: Wo leuchtet es?',
    intro: 'Merke: Die Glimmlampe leuchtet an der Elektrode, die mit dem negativ geladenen Körper verbunden ist. Du hältst eine Elektrode in der Hand, die andere hältst du an einen geladenen Körper.',
    fragen: [
      { f: 'Die Elektrode am Körper leuchtet. Wie ist der Körper geladen?', o: ['negativ', 'positiv'], r: 0, ein: true,
        e: 'Die Elektrode am Körper leuchtet, also ist der Körper negativ geladen.' },
      { f: 'Die Elektrode an deiner Hand leuchtet. Wie ist der Körper geladen?', o: ['negativ', 'positiv'], r: 1, ein: true,
        e: 'Die Seite an der Hand leuchtet. Der Körper selbst ist also positiv geladen.' },
      { f: 'Ein Ballon mit Elektronenüberschuss wird untersucht. Welche Elektrode leuchtet?', o: ['die am Ballon', 'die an der Hand'], r: 0, ein: true,
        e: 'Elektronenüberschuss heißt negativ. Es leuchtet die Elektrode am Ballon.' },
      { f: 'Die Glimmlampe leuchtet nur kurz auf. Warum?', o: ['Die Ladungen gleichen sich aus, dann ist der Körper neutral.', 'Die Lampe ist kaputt.', 'Die Lampe wird zu heiß.'], r: 0,
        e: 'Beim Leuchten fließen Elektronen: Es findet ein Ladungsausgleich statt. Danach ist keine Ladung mehr da.' }
    ] },

  { id: 'elektroskop', r: 'nachweis', typ: 'sortieren', n: 'basis', titel: 'Elektroskope sortieren',
    intro: 'Der Ausschlag des Elektroskops zeigt die Ladungsmenge. Bringe die Karten in die richtige Reihenfolge.',
    ketten: [
      { titel: 'Von wenig zu viel Ladung', schritte: [
        'Der Zeiger hängt senkrecht: Das Elektroskop ist nicht geladen.',
        'Der Zeiger schlägt ein kleines Stück aus: wenig Ladung.',
        'Der Zeiger schlägt weiter aus: mehr Ladung.',
        'Der Zeiger steht fast waagerecht: sehr viel Ladung.'] },
      { titel: 'Aufladen und entladen', schritte: [
        'Ein Kunststoffstab wird mit einem Tuch gerieben.',
        'Der geladene Stab wird an der Metallkugel des Elektroskops abgestreift.',
        'Elektronen wechseln auf das Elektroskop, der Zeiger schlägt aus.',
        'Du berührst die Metallkugel mit dem Finger.',
        'Die Elektronen fließen über deinen Körper ab, der Zeiger geht zurück.'] }
    ] },

  { id: 'tuerklinke', r: 'nachweis', typ: 'luecke', n: 'basis', ein: true, titel: 'Lückentext Türklinke',
    intro: 'Lena läuft mit Turnschuhen über einen Teppich und fasst dann an die Türklinke. Es knistert. Wähle für jede Lücke das passende Wort.',
    text: 'Beim Laufen reiben die Schuhsohlen am Teppich. Dabei werden {Elektronen} getrennt, und Lena lädt sich auf. Sie hat jetzt einen {Elektronenüberschuss}. Zwischen Lena und der Türklinke besteht ein {Ladungsunterschied}. Kurz vor der Berührung springen Elektronen über: Es kommt zum {Ladungsausgleich}. Dabei sieht man manchmal einen kleinen {Funken}. Danach ist Lena wieder {neutral}.',
    extra: ['Atomrümpfe', 'Protonen', 'positiv', 'Isolator'] },

  { id: 'arbeit', r: 'nachweis', typ: 'quiz', n: 'stern', titel: 'Arbeit beim Ladungstrennen',
    intro: 'Getrennte Ladungen können etwas bewirken, zum Beispiel einen Funken. Woher kommt die Energie dafür?',
    fragen: [
      { f: 'Ein geriebener Ballon und der Schal ziehen sich an. Was musst du tun, um sie auseinanderzuziehen?', o: ['Kraft aufwenden', 'nichts, sie trennen sich von selbst'], r: 0,
        e: 'Plus und Minus ziehen sich an. Um sie zu trennen, musst du gegen diese Anziehung Kraft aufwenden.' },
      { f: 'Kraft entlang eines Weges aufwenden nennt man in der Physik …', o: ['Arbeit verrichten', 'Strom', 'Reibung'], r: 0,
        e: 'Wer eine Kraft entlang eines Weges aufwendet, verrichtet Arbeit.' },
      { f: 'Wo steckt die Energie nach dem Trennen?', o: ['in den getrennten Ladungen als elektrische Energie', 'sie ist verschwunden'], r: 0,
        e: 'Die Arbeit steckt danach als elektrische Energie in den getrennten Ladungen.' },
      { f: 'Beim Ladungsausgleich entsteht ein Funke. Wozu wird die elektrische Energie?', o: ['zu Licht und thermischer Energie', 'zu Lageenergie'], r: 0,
        e: 'Der Funke leuchtet und erwärmt die Luft: Licht und thermische Energie.' }
    ] },

  // ======================= Influenz & Polarisation =======================
  { id: 'influenz-polarisation', r: 'verschieben', typ: 'zuordnen', n: 'beide', ein: true, titel: 'Influenz oder Polarisation?',
    intro: 'Ein geladener Stab wird genähert, ohne zu berühren. Ist der Körper ein Leiter (Influenz) oder ein Isolator (Polarisation)?',
    kategorien: ['Influenz (Leiter)', 'Polarisation (Isolator)'],
    elemente: [
      { t: 'eine leere Getränkedose aus Aluminium rollt zum Stab', k: 0, ein: true },
      { t: 'Papierschnipsel springen zum Stab', k: 1, ein: true },
      { t: 'eine Kugel aus Alufolie am Faden schwingt zum Stab', k: 0, ein: true },
      { t: 'ein Tischtennisball aus Kunststoff rollt zum Stab', k: 1, ein: true },
      { t: 'freie Elektronen wandern durch den ganzen Körper', k: 0 },
      { t: 'Elektronen verschieben sich nur ein kleines Stück in ihren Atomen', k: 1 },
      { t: 'ein Löffel aus Metall, der an einem Faden hängt', k: 0 },
      { t: 'ein geriebener Ballon bleibt an der Zimmerdecke hängen', k: 1, stern: true, e: 'Die Decke ist ein Isolator. In ihr werden die Ladungen nur ein kleines Stück verschoben (Polarisation). Das reicht, damit der Ballon hält.' }
    ] },

  { id: 'dose', r: 'verschieben', typ: 'sortieren', n: 'basis', titel: 'Die rollende Dose',
    intro: 'Ein negativ geladener Stab wird neben eine leere Getränkedose gehalten. Bringe die Schritte in die richtige Reihenfolge.',
    ketten: [
      { titel: 'Negativer Stab', schritte: [
        'Der negativ geladene Stab kommt in die Nähe der Dose.',
        'Die freien Elektronen in der Dose werden vom Stab abgestoßen.',
        'Sie wandern auf die Seite der Dose, die vom Stab weg zeigt.',
        'Auf der Seite am Stab bleibt ein Elektronenmangel: Sie ist positiv.',
        'Plus am Stab und Minus am Stab ziehen sich an: Die Dose rollt zum Stab.'] },
      { titel: '★ Positiver Stab', stern: true, schritte: [
        'Ein positiv geladener Stab kommt in die Nähe der Dose.',
        'Die freien Elektronen in der Dose werden vom Stab angezogen.',
        'Sie sammeln sich auf der Seite am Stab: Diese Seite ist negativ.',
        'Die Dose rollt auch zu diesem Stab.'] }
    ] },

  { id: 'phaenomene', r: 'verschieben', typ: 'quiz', n: 'beide', titel: 'Phänomen-Quiz',
    intro: 'Vier Versuche mit einem geladenen Stab. Was passiert, und warum?',
    fragen: [
      { f: 'Ein ungeladener Tischtennisball liegt auf dem Tisch. Ein geladener Stab wird genähert. Was passiert?', o: ['Der Ball rollt zum Stab.', 'Der Ball rollt weg.', 'Nichts.'], r: 0,
        e: 'Im Ball werden die Ladungen verschoben. Die Seite am Stab wird entgegengesetzt geladen, deshalb wird der Ball angezogen.' },
      { f: 'Spielt es eine Rolle, ob der Stab positiv oder negativ ist?', o: ['Nein, der Körper wird in beiden Fällen angezogen.', 'Ja, nur der negative Stab zieht an.'], r: 0,
        e: 'Die Ladung im Körper verschiebt sich immer so, dass die Seite am Stab entgegengesetzt geladen ist. Deshalb zieht jeder geladene Stab an.' },
      { f: 'Warum wird ein ungeladener Körper überhaupt angezogen, obwohl er neutral ist?', o: ['Die entgegengesetzte Ladung ist näher am Stab als die gleiche.', 'Er wird beim Nähern aufgeladen.'], r: 0,
        e: 'Die Anziehung auf die nahe Seite ist stärker als die Abstoßung auf die ferne Seite. Insgesamt wird der Körper angezogen.' },
      { f: 'Eine Alufolienkugel berührt den Stab und springt danach weg. Warum?', o: ['Sie hat beim Berühren Ladung vom Stab bekommen und ist jetzt gleich geladen.', 'Sie ist zu leicht.'], r: 0, stern: true,
        e: 'Beim Berühren wechseln Elektronen. Danach sind Kugel und Stab gleichartig geladen und stoßen sich ab.' },
      { f: '★ Worin unterscheiden sich Influenz und Polarisation?', o: ['Bei Influenz wandern Elektronen durch den ganzen Körper, bei Polarisation nur ein kleines Stück im Atom.', 'Bei Polarisation wandern die Atomrümpfe.'], r: 0, stern: true,
        e: 'Influenz gibt es in Leitern mit freien Elektronen. In Isolatoren bleiben die Elektronen an ihre Atome gebunden und verschieben sich nur ein wenig.' }
    ] },

  // ======================= Gewitter & Schutz =======================
  { id: 'blitz', r: 'gewitter', typ: 'sortieren', n: 'basis', ein: true, titel: 'Wie entsteht ein Blitz?',
    intro: 'Bringe die Schritte in die richtige Reihenfolge.',
    ketten: [
      { titel: 'Vom Aufwind zum Donner', schritte: [
        'Die Sonne erwärmt feuchte Luft. Sie steigt schnell nach oben.',
        'In der Gewitterwolke stoßen Eiskristalle und Graupel zusammen.',
        'Dabei werden Ladungen getrennt: Unten in der Wolke sammelt sich negative Ladung.',
        'Der Boden darunter wird positiv. Zwischen Wolke und Boden entsteht eine große Spannung.',
        'Die Ladungen gleichen sich als Blitz aus: Es fließt ein großer Strom.',
        'Die Luft im Blitzkanal wird sehr heiß und dehnt sich aus: Es donnert.'] }
    ] },

  { id: 'sicher-gefaehrlich', r: 'gewitter', typ: 'zuordnen', n: 'basis', ein: true, titel: 'Sicher oder gefährlich?',
    intro: 'Ein Gewitter zieht auf. Ist das Verhalten sicher oder gefährlich?',
    kategorien: ['sicher', 'gefährlich'],
    elemente: [
      { t: 'im Haus bleiben', k: 0, ein: true },
      { t: 'im Auto mit Metalldach sitzen', k: 0, ein: true, e: 'Die Metallhülle leitet die Ladung außen herum in den Boden.' },
      { t: 'unter einem einzelnen Baum Schutz suchen', k: 1, ein: true },
      { t: 'im See schwimmen', k: 1, ein: true },
      { t: 'in einer Turnhalle warten', k: 0 },
      { t: 'auf dem Sportplatz neben dem Flutlichtmast stehen', k: 1 },
      { t: 'auf einen Hügel steigen, um das Gewitter zu sehen', k: 1 },
      { t: 'in einem Bus warten', k: 0 },
      { t: 'mit dem Fahrrad weiterfahren', k: 1, e: 'Auf dem Fahrrad ist man ungeschützt und oft der höchste Punkt in der Umgebung.' }
    ] },

  { id: 'mythen', r: 'gewitter', typ: 'quiz', n: 'basis', ein: true, titel: 'Mythen-Check',
    intro: 'Stimmt das oder ist es ein Mythos? Lies danach die Erklärung.',
    fragen: [
      { f: '„Im Auto schützen mich die Gummireifen.“', o: ['stimmt', 'Mythos'], r: 1, ein: true,
        e: 'Mythos. Ein Blitz springt leicht über die paar Zentimeter Gummi. Es schützt die Metallhülle, über die die Ladung außen in den Boden fließt.' },
      { f: '„Ein Blitz schlägt nie zweimal an derselben Stelle ein.“', o: ['stimmt', 'Mythos'], r: 1, ein: true,
        e: 'Mythos. Hohe Türme und Masten werden oft getroffen, manche mehrmals im Jahr.' },
      { f: '„Den Donner hört man später, als man den Blitz sieht.“', o: ['stimmt', 'Mythos'], r: 0, ein: true,
        e: 'Stimmt. Licht ist viel schneller als Schall. Der Schall braucht für 1 km etwa 3 Sekunden.' },
      { f: '„Unter einem einzelnen Baum bin ich sicher.“', o: ['stimmt', 'Mythos'], r: 1, ein: true,
        e: 'Mythos. Einzelne Bäume werden besonders oft getroffen. Abstand halten!' },
      { f: '„Ein Blitz ist ein Ladungsausgleich zwischen Wolke und Boden.“', o: ['stimmt', 'Mythos'], r: 0,
        e: 'Stimmt. Die getrennten Ladungen gleichen sich aus, dabei fließt ein großer Strom.' },
      { f: '„Wenn ich den Blitz nicht sehe, kann mir nichts passieren.“', o: ['stimmt', 'Mythos'], r: 1,
        e: 'Mythos. Blitze können noch über 10 km vom Gewitter entfernt einschlagen. Wer donnern hört, sollte Schutz suchen.' }
    ] }
];
