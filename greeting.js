{
    const greeting = document.querySelector(".greeting");
    const motion = matchMedia("(prefers-reduced-motion: no-preference)");
    const otherGreetings = ["Bonjour !", "¡Hola!", "Ciao!", "Hallo!", "こんにちは！", "你好！"];
    let words = [], timer, index, length, deleting;

    function tick() {
        const word = words[index];
        length += deleting ? -1 : 1;
        greeting.textContent = word.slice(0, length).join("");

        if (!deleting && length === word.length) {
            deleting = true;
            timer = setTimeout(tick, 1400);
        } else if (deleting && length === 0) {
            index = (index + 1) % words.length;
            deleting = false;
            timer = setTimeout(tick, 250);
        } else {
            timer = setTimeout(tick, deleting ? 55 : 110);
        }
    }

    function updateMotion() {
        if (!words.length) return;
        clearTimeout(timer);
        index = 0;
        length = 0;
        deleting = false;
        greeting.textContent = motion.matches ? "" : words[index].join("");
        greeting.classList.toggle("typing", motion.matches);
        if (motion.matches) timer = setTimeout(tick, 110);
    }

    motion.addEventListener("change", updateMotion);
    document.addEventListener("site-language-change", ({ detail }) => {
        words = [...detail, ...otherGreetings].map(word => [...word]);
        updateMotion();
    });
}
