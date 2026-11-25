// oneko.js: https://github.com/adryd325/oneko.js/tree/7ef010b451c5bafe86a379b9b4c5df6f9ddffa62

(function oneko() {
  const motion = matchMedia("(prefers-reduced-motion: reduce)");
  const catStatus = document.querySelector("#neko-status");
  const catPanel = document.querySelector(".cat-panel");
  const catSwitch = document.querySelector(".cat-switch");
  const nekoEl = document.createElement("div");

  let nekoPosX = 32;
  let nekoPosY = 32;

  let targetX, targetY;
  let caughtAt = null;

  let frameCount = 0;
  let idleTime = 0;
  let idleAnimation = null;
  let idleAnimationFrame = 0;

  const nekoSpeed = 10;
  const frameInterval = 100;
  const catchDistance = 48;
  const sleepDelay = 5000;
  const yawnDelay = sleepDelay - 700;
  const scratchDelay = yawnDelay - 700;
  const spriteSets = {
    idle: [[-3, -3]],
    alert: [[-7, -3]],
    scratchSelf: [
      [-5, 0],
      [-6, 0],
      [-7, 0],
    ],
    scratchWallN: [
      [0, 0],
      [0, -1],
    ],
    scratchWallS: [
      [-7, -1],
      [-6, -2],
    ],
    scratchWallE: [
      [-2, -2],
      [-2, -3],
    ],
    scratchWallW: [
      [-4, 0],
      [-4, -1],
    ],
    tired: [[-3, -2]],
    sleeping: [
      [-2, 0],
      [-2, -1],
    ],
    N: [
      [-1, -2],
      [-1, -3],
    ],
    NE: [
      [0, -2],
      [0, -3],
    ],
    E: [
      [-3, 0],
      [-3, -1],
    ],
    SE: [
      [-5, -1],
      [-5, -2],
    ],
    S: [
      [-6, -3],
      [-7, -2],
    ],
    SW: [
      [-5, -3],
      [-6, -1],
    ],
    W: [
      [-4, -2],
      [-4, -3],
    ],
    NW: [
      [-1, 0],
      [-1, -1],
    ],
  };

  function init() {
    nekoEl.id = "oneko";
    nekoEl.ariaHidden = true;
    nekoEl.style.width = "32px";
    nekoEl.style.height = "32px";
    nekoEl.style.position = "fixed";
    nekoEl.style.pointerEvents = "none";
    nekoEl.style.imageRendering = "pixelated";
    updatePosition();
    nekoEl.style.zIndex = 2147483647;

    nekoEl.style.backgroundImage = 'url("vendor/oneko/oneko.gif")';
    setSprite("idle", 0);

    document.body.appendChild(nekoEl);

    let tapMarker;
    function resetChase() {
      targetX = targetY = undefined;
      caughtAt = null;
      idleTime = 0;
      resetIdleAnimation();
      setSprite("idle", 0);
      tapMarker?.remove();
    }

    function updateVisibility() {
      nekoEl.hidden = motion.matches || !catSwitch.checked;
      catPanel.hidden = motion.matches;
      catStatus.hidden = nekoEl.hidden;
      if (nekoEl.hidden) resetChase();
    }
    window.addEventListener("resize", () => {
      resetChase();
      updatePosition();
    });
    motion.addEventListener("change", updateVisibility);
    catSwitch.checked = true;
    catSwitch.addEventListener("change", updateVisibility);
    updateVisibility();

    function setTarget(event) {
      caughtAt = null;
      targetX = event.clientX;
      targetY = event.clientY;
    }

    document.addEventListener("pointermove", (event) => {
      if (event.pointerType === "mouse" && !nekoEl.hidden &&
          (event.clientX !== targetX || event.clientY !== targetY)) setTarget(event);
    });
    // Native scrolling cancels pointer events, but passive touch events can still follow the finger.
    document.addEventListener("touchmove", (event) => {
      if (!nekoEl.hidden && event.touches.length === 1) setTarget(event.touches[0]);
    }, { passive: true });
    document.addEventListener("touchstart", (event) => {
      if (nekoEl.hidden || event.touches.length !== 1) return;

      setTarget(event.touches[0]);
      tapMarker?.remove();
      tapMarker = document.createElement("span");
      tapMarker.className = "neko-tap";
      tapMarker.ariaHidden = true;
      tapMarker.style.left = `${targetX}px`;
      tapMarker.style.top = `${targetY}px`;
      tapMarker.addEventListener("animationend", (event) => event.currentTarget.remove(), { once: true });
      document.body.appendChild(tapMarker);
    }, { passive: true });

    const interval = setInterval(() => {
      // Stops execution if the neko element is removed from DOM
      if (!nekoEl.isConnected) {
        clearInterval(interval);
        return;
      }
      if (!nekoEl.hidden && targetX !== undefined) frame();
    }, frameInterval);
  }

  function updatePosition() {
    nekoPosX = Math.max(16, Math.min(nekoPosX, window.innerWidth - 16));
    nekoPosY = Math.max(16, Math.min(nekoPosY, window.innerHeight - 16));
    nekoEl.style.left = `${nekoPosX - 16}px`;
    nekoEl.style.top = `${nekoPosY - 16}px`;
  }

  function setSprite(name, frame) {
    const sprite = spriteSets[name][frame % spriteSets[name].length];
    nekoEl.style.backgroundPosition = `${sprite[0] * 32}px ${sprite[1] * 32}px`;
    catStatus?.toggleAttribute("data-asleep", name === "sleeping");
  }

  function resetIdleAnimation() {
    idleAnimation = null;
    idleAnimationFrame = 0;
  }

  function idle() {
    idleTime += 1;

    // every ~ 20 seconds
    if (
      idleTime > 10 &&
      Math.floor(Math.random() * 200) == 0 &&
      idleAnimation == null
    ) {
      const availableIdleAnimations = ["scratchSelf"];
      if (nekoPosX < 32) {
        availableIdleAnimations.push("scratchWallW");
      }
      if (nekoPosY < 32) {
        availableIdleAnimations.push("scratchWallN");
      }
      if (nekoPosX > window.innerWidth - 32) {
        availableIdleAnimations.push("scratchWallE");
      }
      if (nekoPosY > window.innerHeight - 32) {
        availableIdleAnimations.push("scratchWallS");
      }
      idleAnimation =
        availableIdleAnimations[
          Math.floor(Math.random() * availableIdleAnimations.length)
        ];
    }

    if (!idleAnimation) {
      setSprite("idle", 0);
      return;
    }
    setSprite(idleAnimation, idleAnimationFrame);
    idleAnimationFrame += 1;
    if (idleAnimationFrame >= 10) resetIdleAnimation();
  }

  function frame() {
    frameCount += 1;
    const now = performance.now();
    const diffX = nekoPosX - targetX;
    const diffY = nekoPosY - targetY;
    const distance = Math.sqrt(diffX ** 2 + diffY ** 2);

    if (distance < catchDistance) {
      caughtAt ??= now;
      const stillFor = now - caughtAt;
      if (stillFor >= sleepDelay) {
        setSprite("sleeping", Math.floor(frameCount / 4));
      } else if (stillFor >= yawnDelay) {
        setSprite("tired", 0);
      } else if (stillFor >= scratchDelay) {
        setSprite("scratchSelf", Math.floor((stillFor - scratchDelay) / frameInterval));
      } else {
        idle();
      }
      return;
    }

    caughtAt = null;
    resetIdleAnimation();

    if (idleTime > 1) {
      setSprite("alert", 0);
      // count down after being alerted before moving
      idleTime = Math.min(idleTime, 7);
      idleTime -= 1;
      return;
    }

    let direction;
    direction = diffY / distance > 0.5 ? "N" : "";
    direction += diffY / distance < -0.5 ? "S" : "";
    direction += diffX / distance > 0.5 ? "W" : "";
    direction += diffX / distance < -0.5 ? "E" : "";
    setSprite(direction, frameCount);

    nekoPosX -= (diffX / distance) * nekoSpeed;
    nekoPosY -= (diffY / distance) * nekoSpeed;

    updatePosition();
  }

  init();
})();
