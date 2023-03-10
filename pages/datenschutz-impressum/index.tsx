import Head from 'next/head';
import { Scrollbar } from 'react-scrollbars-custom';

import styles from '../../styles/datenschutz-impressum/index.module.scss';

export default function DatenschutzImpressumPage() {
    return (
        <>
            <Head>
                <title>Datenschutz & Impressum</title>
            </Head>

            <div className={styles.container}>
                <div className={styles.impressum}>
                    <div className={styles.content}>
                        <h3>IMPRESSUM</h3>
                        Nicole & Jette Hölting <br />
                        Starenweg 10 <br />
                        33034 Brakel <br />
                        <br />
                        FON: 0152 53484096 <br />
                        <br />
                        lecker@loeffelweise-glueck.de <br />
                        www.loeffelweise-glueck.de <br />
                        <br />
                        Webgestaltung:{' '}
                        <a
                            href="https://github.com/moritz-hoelting"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Moritz Hölting
                        </a>
                    </div>
                </div>
                <div className={styles.links}>
                    <Scrollbar>
                        <div className={styles.content}>
                            <h3>Haftung für Links</h3>
                            Unser Angebot enthält Links zu externen Webseiten
                            Dritter, auf deren Inhalte wir keinen Einfluss
                            haben. <br />
                            Deshalb können wir für diese fremden Inhalte auch
                            keine Gewähr oder Haftung übernehmen. <br />
                            Für die Inhalte der verlinkten Seiten ist stets der
                            jeweilige Anbieter oder Betreiber der Seiten
                            verantwortlich. <br />
                            Die verlinkten Seiten wurden zum Zeitpunkt der
                            Verlinkung auf mögliche Rechtsverstöße überprüft.{' '}
                            <br />
                            Rechtswidrige Inhalte waren zum Zeitpunkt der
                            Verlinkung nicht erkennbar. <br />
                            Eine permanente inhaltliche Kontrolle der verlinkten
                            Seiten ist jedoch ohne konkrete Anhaltspunkte einer
                            Rechtsverletzung nicht zumutbar. Bei Bekanntwerden
                            von Rechtsverletzungen werden wir derartige Links
                            umgehend entfernen.
                        </div>
                    </Scrollbar>
                </div>
                <div className={styles.datenschutz}>
                    <Scrollbar>
                        <div className={styles.content}>
                            <h3>HAFTUNG FÜR INHALTE</h3> <br />
                            <br />
                            Die Inhalte der Seiten von LÖFFELWEISE GLÜCK wurden
                            mit größter Sorgfalt erstellt. Für die Richtigkeit,
                            Vollständigkeit und Aktualität der Inhalte können
                            wir jedoch keine Gewähr übernehmen. Als
                            Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für
                            eigene Inhalte auf diesen Seiten nach den
                            allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis
                            10 TMG sind wir als Diensteanbieter jedoch nicht
                            verpflichtet, übermittelte oder gespeicherte fremde
                            Informationen zu überwachen oder nach Umständen zu
                            forschen, die auf eine rechtswidrige Tätigkeit
                            hinweisen. Verpflichtungen zur Entfernung oder
                            Sperrung der Nutzung von Informationen nach den
                            allgemeinen Gesetzen bleiben hiervon unberührt. Eine
                            diesbezügliche Haftung ist jedoch erst ab dem
                            Zeitpunkt der Kenntnis einer konkreten
                            Rechtsverletzung möglich. Bei Bekanntwerden von
                            entsprechenden Rechtsverletzungen werden wir diese
                            Inhalte umgehend entfernen <br />
                            <br />
                            <br />
                            <h3>URHEBERRECHT</h3> <br />
                            <br />
                            Die durch LÖFFELWEISE GLÜCK erstellten Inhalte und
                            Werke auf diesen Seiten unterliegen dem deutschen
                            Urheberrecht. Beiträge Dritter sind als solche
                            gekennzeichnet. Die Vervielfältigung, Bearbeitung,
                            Verbreitung und jede Art der Verwertung außerhalb
                            der Grenzen des Urheberrechtes bedürfen der
                            schriftlichen Zustimmung des jeweiligen Autors bzw.
                            Erstellers. Downloads und Kopien dieser Seite sind
                            nur für den privaten, nicht kommerziellen Gebrauch
                            gestattet. Der Betreiber der Seiten ist bemüht,
                            stets die Urheberrechte anderer zu beachten bzw. auf
                            selbst erstellte sowie lizenzfreie Werke
                            zurückzugreifen. <br />
                            <br />
                            <br />
                            <h3>DATENSCHUTZ</h3> <br />
                            <br />
                            Soweit auf unseren Seiten personenbezogene Daten
                            (beispielsweise Name, Anschrift oder
                            E-Mail-Adressen) erhoben werden, erfolgt dies,
                            soweit möglich, stets auf freiwilliger Basis. Die
                            Nutzung der Angebote und Dienste ist, soweit
                            möglich, stets ohne Angabe personenbezogener Daten
                            möglich. <br />
                            <br />
                            Wir weisen darauf hin, dass die Datenübertragung im
                            Internet (z.B. bei der Kommunikation per E-Mail)
                            Sicherheitslücken aufweisen kann. Ein lückenloser
                            Schutz der Daten vor dem Zugriff durch Dritte ist
                            nicht möglich. <br />
                            <br />
                            Der Nutzung von im Rahmen der Impressumspflicht
                            veröffentlichten Kontaktdaten durch Dritte zur
                            Übersendung von nicht ausdrücklich angeforderter
                            Werbung und Informationsmaterialien wird hiermit
                            ausdrücklich widersprochen. Die Betreiber der Seiten
                            behalten sich ausdrücklich rechtliche Schritte im
                            Falle der unverlangten Zusendung von
                            Werbeinformationen, etwa durch Spam-Mails, vor.{' '}
                            <br />
                            <br />
                            <h3>DATENSCHUTZRICHTLINIE</h3> <br />
                            <br />
                            Wir freuen uns sehr über dein Interesse an unserem
                            Internetseite. Datenschutz hat für uns einen
                            besonders hohen Stellenwert. Eine Nutzung der
                            Internetseiten von LÖFFELWEISE GLÜCK ist
                            grundsätzlich ohne jede Angabe personenbezogener
                            Daten möglich. Sofern eine betroffene Person
                            besondere Services über unsere Internetseite in
                            Anspruch nehmen möchte, könnte jedoch eine
                            Verarbeitung personenbezogener Daten erforderlich
                            werden. Ist die Verarbeitung personenbezogener Daten
                            erforderlich und besteht für eine solche
                            Verarbeitung keine gesetzliche Grundlage, holen wir
                            generell eine Einwilligung der betroffenen Person
                            ein. <br />
                            <br />
                            Die Verarbeitung personenbezogener Daten,
                            beispielsweise des Namens, der Anschrift,
                            E-Mail-Adresse oder Telefonnummer einer betroffenen
                            Person, erfolgt stets im Einklang mit der
                            Datenschutz-Grundverordnung und in Übereinstimmung
                            mit dem deutschen Datenschutzrecht. Verantwortlich
                            im Sinne der Datenschutz-Grundverordnung, sonstiger
                            in den Mitgliedstaaten der Europäischen Union
                            geltenden Datenschutzgesetze und anderer mit
                            datenschutzrechtlichem Charakter ist Nicole Hölting,
                            Starenweg 10, 33034 Brakel. Als für die Verarbeitung
                            Verantwortliche hat sie zahlreiche technische und
                            organisatorische Maßnahmen umgesetzt, um einen
                            möglichst lückenlosen Schutz der über diese
                            Internetseite verarbeiteten personenbezogenen Daten
                            sicherzustellen. Dennoch können internetbasierte
                            Datenübertragungen grundsätzlich Sicherheitslücken
                            aufweisen, sodass ein absoluter Schutz nicht
                            gewährleistet werden kann. Aus diesem Grund steht es
                            jeder betroffenen Person frei, personenbezogene
                            Daten auch auf alternativen Wegen, beispielsweise
                            telefonisch, an uns zu übermitteln. <br />
                            <br />
                            1. Begriffsbestimmungen <br />
                            Diese Datenschutzerklärung beruht auf den
                            Begrifflichkeiten, die durch den Europäischen
                            Richtlinien- und Verordnungsgeber beim Erlass der
                            Datenschutzgrundverordnung (DS-GVO) verwendet
                            wurden. <br />
                            <br />
                            2. Erfassung von allgemeinen Daten und Informationen{' '}
                            <br />
                            Unsere Internetseite erfasst mit jedem Aufruf der
                            Internetseite durch eine betroffene Person oder ein
                            automatisiertes System eine Reihe von allgemeinen
                            Daten und Informationen. Diese allgemeinen Daten und
                            Informationen werden in den Logfiles des Servers
                            gespeichert. Erfasst werden können die (1)
                            verwendeten Browsertypen und Versionen, (2) das vom
                            zugreifenden System verwendete Betriebssystem, (3)
                            die Internetseite, von welcher ein zugreifendes
                            System auf unsere Internetseite gelangt (sogenannte
                            Referrer), (4) die Unterwebseiten, welche über ein
                            zugreifendes System auf unserer Internetseite
                            angesteuert werden, (5) das Datum und die Uhrzeit
                            eines Zugriffs auf die Internetseite, (6) eine
                            Internet-Protokoll-Adresse (IP-Adresse), (7) der
                            Internet-Service-Provider des zugreifenden Systems
                            und (8) sonstige ähnliche Daten und Informationen,
                            die der Gefahrenabwehr im Falle von Angriffen auf
                            unsere informationstechnologischen Systeme dienen.
                            Bei der Nutzung dieser allgemeinen Daten und
                            Informationen ziehen wir keine Rückschlüsse auf die
                            betroffene Person. Diese Informationen werden
                            vielmehr benötigt, um (1) die Inhalte unserer
                            Internetseite korrekt auszuliefern, (2) die Inhalte
                            unserer Internetseite sowie die Werbung für diese zu
                            optimieren, (3) die dauerhafte Funktionsfähigkeit
                            unserer informationstechnologischen Systeme und der
                            Technik unserer Internetseite zu gewährleisten sowie
                            (4) um Strafverfolgungsbehörden im Falle eines
                            Cyberangriffes die zur Strafverfolgung notwendigen
                            Informationen bereitzustellen. Diese anonym
                            erhobenen Daten und Informationen werden durch uns
                            daher einerseits statistisch und ferner mit dem Ziel
                            ausgewertet, den Datenschutz und die Datensicherheit
                            auf unserer Internetseite zu erhöhen, um letztlich
                            ein optimales Schutzniveau für die von uns
                            verarbeiteten personenbezogenen Daten
                            sicherzustellen. Die anonymen Daten der
                            Server-Logfiles werden getrennt von allen durch eine
                            betroffene Person angegebenen personenbezogenen
                            Daten gespeichert. <br />
                            <br />
                            3. Kontaktmöglichkeit über die Internetseite <br />
                            Diese Internetseite enthält aufgrund von
                            gesetzlichen Vorschriften Angaben, die eine schnelle
                            elektronische Kontaktaufnahme zu uns sowie eine
                            unmittelbare Kommunikation mit uns zu ermöglichen,
                            was ebenfalls eine allgemeine Adresse der
                            sogenannten elektronischen Post (E-Mail-Adresse)
                            umfasst. Sofern eine betroffene Person per E-Mail
                            den Kontakt mit dem für die Verarbeitung
                            Verantwortlichen aufnimmt, werden die von der
                            betroffenen Person übermittelten personenbezogenen
                            Daten automatisch gespeichert. Solche auf
                            freiwilliger Basis von einer betroffenen Person an
                            den für die Verarbeitung Verantwortlichen
                            übermittelten personenbezogenen Daten werden für
                            Zwecke der Bearbeitung oder der Kontaktaufnahme zur
                            betroffenen Person gespeichert. Es erfolgt keine
                            Weitergabe dieser personenbezogenen Daten an Dritte.{' '}
                            <br />
                            <br />
                            4. Routinemäßige Löschung und Sperrung von
                            personenbezogenen Daten <br />
                            Wir verarbeiten und speichern personenbezogene Daten
                            der betroffenen Person nur für den Zeitraum, der zur
                            Erreichung des Speicherungszwecks erforderlich ist
                            oder sofern dies durch den Europäischen Richtlinien-
                            und Verordnungsgeber oder einen anderen Gesetzgeber
                            in Gesetzen oder Vorschriften, welchen der für die
                            Verarbeitung Verantwortliche unterliegt, vorgesehen
                            wurde. Entfällt der Speicherungszweck oder läuft
                            eine vom Europäischen Richtlinien- und
                            Verordnungsgeber oder einem anderen zuständigen
                            Gesetzgeber vorgeschriebene Speicherfrist ab, werden
                            die personenbezogenen Daten routinemäßig und
                            entsprechend den gesetzlichen Vorschriften gesperrt
                            oder gelöscht. <br />
                            <br />
                            5. Rechtsgrundlage der Verarbeitung <br />
                            Art. 6 I lit. a DS-GVO dient uns als Rechtsgrundlage
                            für Verarbeitungsvorgänge, bei denen wir eine
                            Einwilligung für einen bestimmten Verarbeitungszweck
                            einholen. Ist die Verarbeitung personenbezogener
                            Daten zur Erfüllung eines Vertrags, dessen
                            Vertragspartei die betroffene Person ist,
                            erforderlich, wie dies beispielsweise bei
                            Verarbeitungsvorgängen der Fall ist, die für eine
                            Lieferung von Waren oder die Erbringung einer
                            sonstigen Leistung oder Gegenleistung notwendig
                            sind, so beruht die Verarbeitung auf Art. 6 I lit. b
                            DS-GVO. Gleiches gilt für solche
                            Verarbeitungsvorgänge die zur Durchführung
                            vorvertraglicher Maßnahmen erforderlich sind, etwa
                            in Fällen von Anfragen zur unseren Produkten oder
                            Leistungen. Unterliegt unsere Unternehmung einer
                            rechtlichen Verpflichtung, durch welche eine
                            Verarbeitung von personenbezogenen Daten
                            erforderlich ist, wie beispielsweise zur Erfüllung
                            steuerlicher Pflichten, so basiert die Verarbeitung
                            auf Art. 6 I lit. c DS-GVO. In seltenen Fällen
                            könnte die Verarbeitung von personenbezogenen Daten
                            erforderlich werden, um lebenswichtige Interessen
                            der betroffenen Person oder einer anderen
                            natürlichen Person zu schützen. Dies wäre
                            beispielsweise der Fall, wenn ein Besucher in
                            unseren Räumlichkeiten verletzt werden würde und
                            daraufhin sein Name, sein Alter, seine
                            Krankenkassendaten oder sonstige lebenswichtige
                            Informationen an einen Arzt, ein Krankenhaus oder
                            sonstige Dritte weitergegeben werden müssten. Dann
                            würde die Verarbeitung auf Art. 6 I lit. d DS-GVO
                            beruhen. Letztlich könnten Verarbeitungsvorgänge auf
                            Art. 6 I lit. f DS-GVO beruhen. Auf dieser
                            Rechtsgrundlage basieren Verarbeitungsvorgänge, die
                            von keiner der vorgenannten Rechtsgrundlagen erfasst
                            werden, wenn die Verarbeitung zur Wahrung eines
                            berechtigten Interesses unsererseits oder eines
                            Dritten erforderlich ist, sofern die Interessen,
                            Grundrechte und Grundfreiheiten des Betroffenen
                            nicht überwiegen. Solche Verarbeitungsvorgänge sind
                            uns insbesondere deshalb gestattet, weil sie durch
                            den Europäischen Gesetzgeber besonders erwähnt
                            wurden. Er vertrat insoweit die Auffassung, dass ein
                            berechtigtes Interesse anzunehmen sein könnte, wenn
                            die betroffene Person ein Kunde des Verantwortlichen
                            ist (Erwägungsgrund 47 Satz 2 DS-GVO). <br />
                            <br />
                            6. Berechtigte Interessen an der Verarbeitung, die
                            von dem Verantwortlichen oder einem Dritten verfolgt
                            werden <br />
                            Basiert die Verarbeitung personenbezogener Daten auf
                            Artikel 6 I lit. f DS-GVO ist unser berechtigtes
                            Interesse die Durchführung unserer
                            Geschäftstätigkeit auf Blog und Internetseite.{' '}
                            <br />
                            <br />
                            7. Dauer, für die die personenbezogenen Daten
                            gespeichert werden <br />
                            Das Kriterium für die Dauer der Speicherung von
                            personenbezogenen Daten ist die jeweilige
                            gesetzliche Aufbewahrungsfrist. Nach Ablauf der
                            Frist werden die entsprechenden Daten routinemäßig
                            gelöscht, sofern sie nicht mehr zur
                            Vertragserfüllung oder Vertragsanbahnung
                            erforderlich sind. <br />
                            <br />
                            8. Gesetzliche oder vertragliche Vorschriften zur
                            Bereitstellung der personenbezogenen Daten;
                            Erforderlichkeit für den Vertragsabschluss;
                            Verpflichtung der betroffenen Person, die
                            personenbezogenen Daten bereitzustellen; mögliche
                            Folgen der Nichtbereitstellung <br />
                            Wir klären darüber auf, dass die Bereitstellung
                            personenbezogener Daten zum Teil gesetzlich
                            vorgeschrieben ist (z.B. Steuervorschriften) oder
                            sich auch aus vertraglichen Regelungen (z.B. Angaben
                            zum Vertragspartner) ergeben kann. Mitunter kann es
                            zu einem Vertragsschluss erforderlich sein, dass
                            eine betroffene Person uns personenbezogene Daten
                            zur Verfügung stellt, die in der Folge durch uns
                            verarbeitet werden müssen. Die betroffene Person ist
                            beispielsweise verpflichtet, uns personenbezogene
                            Daten bereitzustellen, wenn wir mit ihr einen
                            Vertrag abschließen. Eine Nichtbereitstellung der
                            personenbezogenen Daten hätte zur Folge, dass der
                            Vertrag mit dem Betroffenen nicht geschlossen werden
                            könnte. Vor einer Bereitstellung personenbezogener
                            Daten durch den Betroffenen muss sich der Betroffene
                            an uns wenden. Wir klären den Betroffenen
                            einzelfallbezogen darüber auf, ob die Bereitstellung
                            der personenbezogenen Daten gesetzlich oder
                            vertraglich vorgeschrieben oder für den
                            Vertragsabschluss erforderlich ist, ob eine
                            Verpflichtung besteht, die personenbezogenen Daten
                            bereitzustellen, und welche Folgen die
                            Nichtbereitstellung der personenbezogenen Daten
                            hätte. <br />
                            <br />
                            9. Bestehen einer automatisierten
                            Entscheidungsfindung <br />
                            Als Verantwortungsbewusste verzichten wir auf eine
                            automatische Entscheidungsfindung oder ein
                            Profiling. <br />
                            <br />
                            10. Auskunftsrecht <br />
                            Du hast das jederzeitige Recht, dich unentgeltlich
                            und unverzüglich über die zu deiner Person erhobenen
                            Daten zu erkundigen. Du hast das jederzeitige Recht,
                            deine Zustimmung zur Verwendung deiner angegeben
                            persönlichen Daten mit Wirkung für die Zukunft zu
                            widerrufen. Zur Auskunftserteilung wende dich bitte
                            an den Anbieter unter den Kontaktdaten im Impressum.{' '}
                            <br />
                        </div>
                    </Scrollbar>
                </div>
            </div>
        </>
    );
}
