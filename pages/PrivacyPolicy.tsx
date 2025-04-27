import React from "react";
import Head from "next/head";

const PrivacyPolicy = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12 text-textDark">
      <Head>
        <title>Polityka Prywatności | Arch-Geo</title>
        <meta name="description" content="Polityka przetwarzania danych osobowych Pracowni Geologicznej Arch-Geo" />
      </Head>

      <h1 className="text-3xl font-bold text-primary mb-8 font-serif">Polityka Prywatności</h1>
      
      <div className="space-y-6">
        <section>
          <h2 className="text-xl font-semibold mb-3">1. Informacje podstawowe</h2>
          <p>
            Administratorem danych osobowych jest:<br />
            <strong>Arch-Geo Aleksandra Bielecka</strong><br />
            ul. Jana Pawła II 7, 05-600 Grójec<br />
            NIP: 9223000527<br />
            REGON: 525285737
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3">2. Zakres przetwarzanych danych</h2>
          <p>
            Przetwarzamy dane przekazane nam dobrowolnie poprzez:
          </p>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li>Formularz kontaktowy na stronie (imię, nazwisko, email, telefon, treść wiadomości)</li>
            <li>Korespondencję mailową</li>
            <li>Rozmowy telefoniczne</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3">3. Cel przetwarzania danych</h2>
          <p>Dane są przetwarzane w celu:</p>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li>Realizacji usług geologicznych i geotechnicznych</li>
            <li>Odpowiedzi na zapytania ofertowe</li>
            <li>Wystawiania dokumentacji i faktur</li>
            <li>Wypełnienia obowiązków prawnych (np. podatkowych)</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3">4. Podstawa prawna</h2>
          <p>
            Przetwarzanie odbywa się na podstawie:
          </p>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li>Art. 6 ust. 1 lit. b) RODO (wykonanie umowy)</li>
            <li>Art. 6 ust. 1 lit. c) RODO (obowiązki prawne)</li>
            <li>Art. 6 ust. 1 lit. a) RODO (zgoda, np. na newsletter)</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3">5. Okres przechowywania danych</h2>
          <p>
            Dane przechowujemy przez okres:
          </p>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li>5 lat - dla dokumentacji księgowej (ustawa o rachunkowości)</li>
            <li>Do czasu realizacji usługi + 1 rok</li>
            <li>Do odwołania zgody (jeśli przetwarzanie odbywa się na jej podstawie)</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3">6. Prawa użytkowników</h2>
          <p>
            Przysługuje Państwu prawo do:
          </p>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li>Dostępu do swoich danych</li>
            <li>Sprostowania danych</li>
            <li>Usunięcia danych (tzw. "prawo do bycia zapomnianym")</li>
            <li>Ograniczenia przetwarzania</li>
            <li>Wniesienia sprzeciwu</li>
            <li>Przenoszenia danych</li>
            <li>Wniesienia skargi do PUODO</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3">7. Pliki cookies</h2>
          <p>
            Strona używa niezbędnych plików cookies w celu:
          </p>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li>Prawidłowego działania formularzy</li>
            <li>Analizy ruchu na stronie (anonimowe dane w Google Analytics)</li>
          </ul>
          <p className="mt-2">
            Cookies możesz zarządzać w ustawieniach przeglądarki.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3">8. Kontakt</h2>
          <p>
            W sprawach ochrony danych prosimy o kontakt:<br />
            Email: <a href="mailto:arch.geo2@gmail.com" className="text-accent hover:underline">arch.geo2@gmail.com</a><br />
            Telefon: <a href="tel:+48733437507" className="text-accent hover:underline">+48 733 437 507</a>
          </p>
        </section>

        <section>
          <p className="text-sm text-stone-500 mt-8">
            Ostatnia aktualizacja: {new Date().toLocaleDateString('pl-PL')}
          </p>
        </section>
      </div>
    </div>
  );
};

export default PrivacyPolicy;