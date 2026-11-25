{
  const strings = {
    pl: {
      pageTitle: "★ strona pengwius",
      description: "Personalna strona pengwius",
      language: "Język strony",
      greeting: "Cześć!",
      tickerWelcome: "DZIĘKI, ŻE TU WPADŁEŚ/AŚ!",
      tickerCat: "UWAŻAJ NA KOTA",
      tickerLlm: "LLM-Y NA TEJ STRONIE NIEMILE WIDZIANE",
      tickerFeeding: "NIE KARMIĆ KOTA PO PÓŁNOCY",
      sidebar: "Kontakt i status kota",
      contact: "Kontakt",
      catStatus: "Status kota",
      catToggle: "Pokaż Neko",
      catHintMouse: "Zatrzymaj kursor i pozwól kotu zasnąć. Nie przemęczaj go!",
      catHintTouch:
        "Stuknij lub przesuń palcem, żeby Neko ruszył w pogoń. Zostaw go w spokoju, a utnie sobie drzemkę.",
      catOnline: "Online",
      catAlert:
        "Na terenie został zauważony nieznajomy kursor. Neko jest czujny i gotowy do ataku.",
      catAsleep: "Śpi",
      catDream: "Nie budzić. Śni mu się, że wreszcie złapał kursor.",
      about: "O mnie",
      aboutIntro:
        "Aktualnie pracuję głównie w Ruście. Mam za sobą projekty aplikacji mobilnych w Kotlinie i Swifcie. Piszę też często w Reakcie i Pythonie, a z baz danych najczęściej używam PostgreSQL, MongoDB oraz SQLite. Bardzo lubię grzebać w Linuksie (zazwyczaj go psuć) i robić za DevOpsa. Na co dzień siedzę na NixOS i średnio co trzy miesiące zmieniam",
      aboutContact:
        " Lubię wolne i otwarte oprogramowanie (FOSS) i interesuję się prywatnością cyfrową. Jeżeli chcesz napisać lub po prostu pozawracać głowę, to najszybciej odpowiem na mailu, Telegramie lub Matrixie.",
      playing: "Aktualnie gram w:",
      playingNext: "Po Cyberpunku planuję przejść GTA VI",
      pgpKey: "Mój publiczny klucz PGP",
      llmQuestion: "Jesteś LLM-em?",
      llmLink: "Wpadnij tutaj.",
      projects: "Projekty",
      nixosTitle: "Moja konfiguracja NixOS",
      nixosIntro: "Moja konfiguracja NixOS ze wsparciem dla Apple Silicon",
      nixosDesktop: ", z której korzystam na co dzień. Na pulpicie mam",
      nixosStyle: ", inspirowane Material Design 3.",
      surcast:
        "Otwartoźródłowe narzędzie do zarządzania transmisjami Icecast, stworzone głównie z myślą o radiach internetowych.",
      ksef: "Eksperymentalne SDK w Ruście do integracji z Krajowym Systemem e-Faktur.",
      socialify:
        "Stary projekt komunikatora szyfrowanego end-to-end, dziś już w archiwum. Zostały po nim",
      socialifyIos: "apka na iOS w Swifcie",
      and: "i",
      socialifyBackend: "backend w Pythonie",
      lastEdited: "Ostatnia edycja:",
      backToTop: "Wróć na górę ↑",
      visitorCounter: "Licznik odwiedzin",
      w3cBadge: "W3C HTML 4.01 — archiwalna odznaka; przejdź do walidatora",
      agplBadge: "Odznaka AGPLv3",
      gplBadge: "Odznaka GPLv3",
      nixosBadge: "NixOS — strona projektu",
      youtubeBadge: "Click here — film na YouTube",
      footerCats: "Animowane pikselowe kotki",
    },
    en: {
      pageTitle: "★ pengwius website",
      description: "The personal website of pengwius",
      language: "Site language",
      greeting: "Hello!",
      tickerWelcome: "THANKS FOR STOPPING BY!",
      tickerCat: "WATCH OUT FOR THE CAT",
      tickerLlm: "LLMS ARE NOT WELCOME ON THIS SITE",
      tickerFeeding: "DO NOT FEED THE CAT AFTER MIDNIGHT",
      sidebar: "Contact and cat status",
      contact: "Contact",
      catStatus: "Cat status",
      catToggle: "Show Neko",
      catHintMouse:
        "Keep your cursor still and let the cat fall asleep. Don't wear him out!",
      catHintTouch:
        "Tap or swipe to send Neko chasing. Leave him be and he'll take a nap.",
      catOnline: "Online",
      catAlert:
        "An unfamiliar cursor has been spotted. Neko is on alert and ready to pounce.",
      catAsleep: "Asleep",
      catDream:
        "Do not disturb. He's dreaming that he finally caught the cursor.",
      about: "About me",
      aboutIntro:
        "I mostly work in Rust these days. I've built mobile apps in Kotlin and Swift, and I still write plenty of React and Python. My go-to databases are PostgreSQL, MongoDB, and SQLite. I love tinkering with Linux (usually breaking it) and doing a bit of DevOps. NixOS is my daily driver, and every three months or so I change my",
      aboutContact:
        " I’m a big fan of free and open-source software (FOSS), and I’m interested in digital privacy. If you want to get in touch or just bug me, email, Telegram, and Matrix are the quickest ways to reach me.",
      playing: "Currently playing:",
      playingNext:
        "I'm planning to play through GTA VI once I finish Cyberpunk.",
      pgpKey: "My public PGP key",
      llmQuestion: "Are you an LLM?",
      llmLink: "Drop by here.",
      projects: "Projects",
      nixosTitle: "My NixOS configuration",
      nixosIntro: "My daily NixOS setup supports Apple Silicon",
      nixosDesktop: ". My desktop runs",
      nixosStyle: " with a look inspired by Material Design 3.",
      surcast:
        "An open-source tool for managing Icecast streams, built mainly for internet radio.",
      ksef: "An experimental Rust SDK for Poland's National e-Invoicing System (KSeF).",
      socialify:
        "An old end-to-end encrypted messaging project, now archived. What remains is the",
      socialifyIos: "iOS app in Swift",
      and: "and",
      socialifyBackend: "Python backend",
      lastEdited: "Last updated:",
      backToTop: "Back to top ↑",
      visitorCounter: "Visitor counter",
      w3cBadge: "W3C HTML 4.01 — vintage badge; open the validator",
      agplBadge: "AGPLv3 badge",
      gplBadge: "GPLv3 badge",
      nixosBadge: "NixOS — project website",
      youtubeBadge: "Click here — YouTube video",
      footerCats: "Animated pixel cats",
    },
  };

  const buttons = document.querySelectorAll(".language-switch button");
  const date = document.querySelector("footer time");
  const description = document.querySelector('meta[name="description"]');
  const textElements = document.querySelectorAll("[data-text]");
  const tickerMessage = document.querySelector(".ticker-track > p");

  function setLanguage(language) {
    const copy = strings[language];
    document.documentElement.lang = language;
    for (const element of textElements) {
      element.textContent = copy[element.dataset.text];
    }
    for (const element of document.querySelectorAll("[data-label]")) {
      element.setAttribute("aria-label", copy[element.dataset.label]);
    }
    for (const image of document.querySelectorAll("[data-alt]")) {
      image.alt = copy[image.dataset.alt];
    }
    date.textContent = new Intl.DateTimeFormat(language, {
      day: "numeric",
      month: "long",
      year: "numeric",
      timeZone: "UTC",
    }).format(new Date(date.dateTime));
    description.content = copy.description;
    for (const button of buttons) {
      button.setAttribute("aria-pressed", button.lang === language);
    }
    tickerMessage.nextElementSibling?.remove();
    const tickerCopy = tickerMessage.cloneNode(true);
    tickerCopy.setAttribute("aria-hidden", "true");
    tickerMessage.after(tickerCopy);
    document.dispatchEvent(
      new CustomEvent("site-language-change", {
        detail: [
          copy.greeting,
          strings[language === "en" ? "pl" : "en"].greeting,
        ],
      }),
    );
  }

  setLanguage("en");
  for (const button of buttons) {
    button.disabled = false;
    button.addEventListener("click", () => {
      if (document.documentElement.lang === button.lang) return;
      setLanguage(button.lang);
    });
  }
}
