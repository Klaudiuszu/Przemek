"use client";
import React from "react";

const CookiesPolicyComponent = () => {

    return (
        <section className="lg:pb-16 lg:pt-40 pt-30 max-w-screen-xl md:p-20 px-8 py-28  mx-auto flex flex-col gap-8" id="privacyPolicy">
            <h1 className="flex justify-center">POLITYKA COOKIES</h1>
            <p>
                Serwis <a href="www.jofistudio.pl" className="cursor-pointer"><u>jofistudio.pl</u></a> nie zbiera w sposób automatyczny żadnych informacji, z wyjątkiem  informacji zawartych w plikach cookies.
            </p>
            <p>
                Pliki cookies (tzw. „ciasteczka”) stanowią dane informatyczne, w szczególności pliki tekstowe, które  przechowywane są w urządzeniu końcowym Użytkownika Serwisu i przeznaczone są do korzystania ze  stron internetowych Serwisu. Cookies zazwyczaj zawierają nazwę strony internetowej, z której  pochodzą, czas przechowywania ich na urządzeniu końcowym oraz unikalny numer.
            </p>
            <p>
                Podmiotem zamieszczającym na urządzeniu końcowym Użytkownika Serwisu pliki cookies oraz  uzyskującym do nich dostęp jest operator Serwisu <a href="www.jofistudio.pl" className="cursor-pointer"><u>jofistudio.pl</u></a>
            </p>
            <p><strong>JOFI STUDIO Mikołaj Gadomski</strong> z siedzibą pod adresem: ul. Paryska 29/13, 03-945 Warszawa.</p>

            <div className="flex gap-2 flex-col">
                <ul className="flex gap-2 flex-col">
                    <li>
                        Pliki cookies wykorzystywane są w celu:
                    </li>

                </ul>
                <ul className="pl-6 flex gap-2 flex-col list-outside list-decimal">
                    <li>dostosowania zawartości stron internetowych Serwisu do preferencji Użytkownika oraz  optymalizacji korzystania ze stron internetowych; w szczególności pliki te pozwalają rozpoznać  urządzenie Użytkownika Serwisu i odpowiednio wyświetlić stronę internetową, dostosowaną  do jego indywidualnych potrzeb;</li>
                    <li>tworzenia statystyk, które pomagają zrozumieć, w jaki sposób Użytkownicy Serwisu  korzystają ze stron internetowych, co umożliwia ulepszanie ich struktury i zawartości;</li>
                </ul>
            </div>

            <p>W ramach Serwisu stosowane są dwa zasadnicze rodzaje plików cookies: „sesyjne” (session cookies)  oraz „stałe” (persistent cookies). Cookies „sesyjne” są plikami tymczasowymi, które przechowywane  są w urządzeniu końcowym Użytkownika do czasu wylogowania, opuszczenia strony internetowej lub
                wyłączenia oprogramowania (przeglądarki internetowej). „Stałe” pliki cookies przechowywane są w  urządzeniu końcowym Użytkownika przez czas określony w parametrach plików cookies lub do czasu  ich usunięcia przez Użytkownika.
            </p>

            <div className="flex gap-2 flex-col">
                <ul className="flex gap-2 flex-col">
                    <li>
                        W ramach Serwisu stosowane są następujące rodzaje plików cookies:
                    </li>

                </ul>
                <ul className="pl-6 flex gap-2 flex-col list-outside list-decimal">
                    <li>„niezbędne” pliki cookies, umożliwiające korzystanie z usług dostępnych w ramach  Serwisu, np. uwierzytelniające pliki cookies wykorzystywane do usług wymagających  uwierzytelniania w ramach Serwisu;</li>
                    <li>pliki cookies służące do zapewnienia bezpieczeństwa, np. wykorzystywane do wykrywania  nadużyć w zakresie uwierzytelniania w ramach Serwisu; </li>
                    <li>„wydajnościowe” pliki cookies, umożliwiające zbieranie informacji o sposobie korzystania  ze stron internetowych Serwisu;</li>
                    <li> „funkcjonalne” pliki cookies, umożliwiające „zapamiętanie” wybranych przez Użytkownika  ustawień i personalizację interfejsu Użytkownika, np. w zakresie wybranego języka lub  regionu, z którego pochodzi Użytkownik, rozmiaru czcionki, wyglądu strony internetowej itp.;</li>
                    <li>„reklamowe” pliki cookies, umożliwiające dostarczanie Użytkownikom treści reklamowych  bardziej dostosowanych do ich zainteresowań.</li>
                </ul>
            </div>
            <p>W wielu przypadkach oprogramowanie służące do przeglądania stron internetowych (przeglądarka  internetowa) domyślnie dopuszcza przechowywanie plików cookies w urządzeniu końcowym  Użytkownika. Użytkownicy Serwisu mogą dokonać w każdym czasie zmiany ustawień dotyczących  plików cookies. Ustawienia te mogą zostać zmienione w szczególności w taki sposób, aby blokować  automatyczną obsługę plików cookies w ustawieniach przeglądarki internetowej bądź informować o  ich każdorazowym zamieszczeniu w urządzeniu Użytkownika Serwisu. Szczegółowe informacje o  możliwości i sposobach obsługi plików cookies dostępne są w ustawieniach oprogramowania  (przeglądarki internetowej).</p>
            <p>Operator Serwisu informuje, że ograniczenia stosowania plików cookies mogą wpłynąć na niektóre  funkcjonalności dostępne na stronach internetowych Serwisu. </p>
            <p>Pliki cookies zamieszczane w urządzeniu końcowym Użytkownika Serwisu i wykorzystywane mogą być  również przez współpracujących z operatorem Serwisu reklamodawców oraz partnerów. Dane  osobowe Użytkowników w związku z przechowywaniem plików cookies są profilowane (na podst. Art.  4 pkt. 4 RODO).</p>
        </section>
    );
};

export default CookiesPolicyComponent;
