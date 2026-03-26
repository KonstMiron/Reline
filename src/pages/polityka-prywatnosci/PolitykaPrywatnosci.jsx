import "./PolitykaPrywatnosci.scss";
import HeaderSwitcher from "@/widgets/header-switcher";
import Footer from "@/widgets/footer";

export const PolitykaPrywatnosci = () => {
  return (
    <>
      <HeaderSwitcher variant="inner" />
      <main className="legal-page">
        <div className="container legal-page__container">
          <h1>Polityka prywatności</h1>

          <section className="legal-section">
            <h2>1. Informacje ogólne</h2>
            <ol className="legal-list">
              <li>
                Niniejsza polityka dotyczy Serwisu www oraz świadczonych usług
              </li>
              <li>
                Operatorem serwisu oraz Administratorem danych osobowych jest
                Studio świadczące usługi z zakresu medycyny estetycznej,
                ul. Diamentowa 27A/U2, 20-471 Lublin
              </li>
              <li>
                Adres kontaktowy poczty elektronicznej operatora:{" "}
                <strong>kontakt@re-line.pl</strong>
              </li>
              <li>
                Operator jest Administratorem Twoich danych osobowych w odniesieniu
                do danych podanych dobrowolnie w Serwisie.
              </li>
              <li>
                Serwis wykorzystuje dane osobowe w następujących celach:
                <ul className="bullet-list">
                  <li>Prezentacja profilu użytkownika innym użytkownikom</li>
                  <li>Realizacja zamówionych usług</li>
                  <li>Obsługa zapytań przez formularz</li>
                  <li>Prezentacja oferty lub informacji</li>
                </ul>
              </li>
              <li>
                Serwis realizuje funkcje pozyskiwania informacji o użytkownikach i ich
                zachowaniu w następujący sposób:
                <ol className="inner-list">
                  <li>
                    Poprzez dobrowolnie wprowadzone w formularzach dane, które zostają
                    wprowadzone do systemów Operatora.
                  </li>
                  <li>
                    Poprzez zapisywanie w urządzeniach końcowych plików cookie (tzw.
                    „ciasteczka").
                  </li>
                </ol>
              </li>
            </ol>
          </section>

          <section className="legal-section">
            <h2>2. Wybrane metody ochrony danych stosowane przez Operatora</h2>
            <ol className="legal-list">
              <li>
                Miejsca logowania i wprowadzania danych osobowych są chronione w
                warstwie transmisji (certyfikat SSL). Dzięki temu dane osobowe i dane
                logowania, wprowadzone na stronie, zostają zaszyfrowane w komputerze
                użytkownika i mogą być odczytane jedynie na docelowym serwerze.
              </li>
              <li>
                Dane osobowe przechowywane w bazie danych są zaszyfrowane w taki
                sposób, że jedynie posiadający Operator klucz może je odczytać.
              </li>
              <li>
                Hasła użytkowników są przechowywane w postaci hashowanej. Funkcja
                hashująca działa jednokierunkowo.
              </li>
              <li>Operator okresowo zmienia swoje hasła administracyjne.</li>
              <li>
                W celu ochrony danych Operator regularnie wykonuje kopie bezpieczeństwa.
              </li>
              <li>
                Operator regularnie aktualizuje oprogramowanie wykorzystywane do
                przetwarzania danych osobowych.
              </li>
            </ol>
          </section>

          <section className="legal-section">
            <h2>3. Hosting</h2>
            <ol className="legal-list">
              <li>Serwis jest hostowany na serwerach operatora: zenbox.pl</li>
            </ol>
          </section>

          <section className="legal-section">
            <h2>4. Twoje prawa i dodatkowe informacje o sposobie wykorzystania danych</h2>
            <ol className="legal-list">
              <li>
                W niektórych sytuacjach Administrator ma prawo przekazywać Twoje dane
                osobowe innym odbiorcom, jeśli będzie to niezbędne do wykonania umowy
                lub realizacji obowiązków Administratora. Dotyczy to takich grup
                odbiorców:
                <ul className="bullet-list">
                  <li>
                    upoważnieni pracownicy i współpracownicy, którzy korzystają z
                    danych w celu realizacji celu działania strony
                  </li>
                  <li>firmy świadczące usługi marketingu na rzecz Administratora</li>
                </ul>
              </li>
              <li>
                Twoje dane osobowe przetwarzane są nie dłużej, niż jest to konieczne
                do wykonania związanych z nimi czynności.
              </li>
              <li>
                Przysługuje Ci prawo żądania od Administratora:
                <ul className="bullet-list">
                  <li>dostępu do danych osobowych Ciebie dotyczących</li>
                  <li>ich sprostowania</li>
                  <li>usunięcia</li>
                  <li>ograniczenia przetwarzania</li>
                  <li>przenoszenia danych</li>
                </ul>
              </li>
              <li>
                Przysługuje Ci prawo do złożenia sprzeciwu wobec przetwarzania danych
                osobowych w celu wykonania prawnie uzasadnionych interesów
                realizowanych przez Administratora.
              </li>
              <li>
                Na działania Administratora przysługuje skarga do Prezesa Urzędu
                Ochrony Danych Osobowych, ul. Stawki 2, 00-193 Warszawa.
              </li>
              <li>
                Podanie danych osobowych jest dobrowolne, lecz niezbędne do obsługi
                Serwisu.
              </li>
              <li>
                Dane osobowe nie są przekazywane do krajów trzecich poza teren Unii
                Europejskiej.
              </li>
            </ol>
          </section>

          <section className="legal-section">
            <h2>5. Informacje w formularzach</h2>
            <ol className="legal-list">
              <li>
                Serwis zbiera informacje podane dobrowolnie przez użytkownika, w tym
                dane osobowe, o ile zostaną one podane.
              </li>
              <li>
                Serwis może zapisać informacje o parametrach połączenia (oznaczenie
                czasu, adres IP).
              </li>
              <li>
                Dane podane w formularzu są przetwarzane w celu wynikającym z funkcji
                konkretnego formularza.
              </li>
            </ol>
          </section>

          <section className="legal-section">
            <h2>6. Logi Administratora</h2>
            <ol className="legal-list">
              <li>
                Informacje o zachowaniu użytkowników w serwisie mogą podlegać
                logowaniu. Dane te są wykorzystywane w celu administrowania serwisem.
              </li>
            </ol>
          </section>

          <section className="legal-section">
            <h2>7. Istotne techniki marketingowe</h2>
            <ol className="legal-list">
              <li>
                Operator stosuje analizę statystyczną ruchu na stronie poprzez Google
                Analytics. Operator nie przekazuje danych osobowych, a jedynie
                zanonimizowane informacje.
              </li>
              <li>
                Operator może stosować techniki remarketingowe oraz piksel Facebooka,
                bazujące na plikach cookies.
              </li>
              <li>
                Operator może stosować narzędzia map ciepła i nagrywania zachowania na
                stronie. Informacje są anonimizowane.
              </li>
            </ol>
          </section>

          <section className="legal-section">
            <h2>8. Informacja o plikach cookies</h2>
            <ol className="legal-list">
              <li>Serwis korzysta z plików cookies.</li>
              <li>
                Pliki cookies to dane informatyczne, w szczególności pliki tekstowe,
                które przechowywane są w urządzeniu końcowym Użytkownika.
              </li>
              <li>
                Pliki cookies wykorzystywane są w następujących celach:
                <ul className="bullet-list">
                  <li>
                    utrzymanie sesji użytkownika Serwisu (po zalogowaniu), dzięki
                    której użytkownik nie musi na każdej podstronie wpisywać loginu i
                    hasła
                  </li>
                  <li>realizacja celów marketingowych i statystycznych</li>
                </ul>
              </li>
              <li>
                Użytkownik może dokonać zmiany ustawień cookies w swojej przeglądarce.
              </li>
            </ol>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default PolitykaPrywatnosci;
