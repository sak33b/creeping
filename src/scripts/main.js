const TRANSITION_MS = 800;

const transitionOverlay = document.querySelector("[data-transition-overlay]");
const journalContainer = document.querySelector("[data-journal-container]");

const navigateTo = (next) => {
  if (!next) {
    return;
  }

  if (transitionOverlay) {
    transitionOverlay.classList.add("fade-out");
  }

  if (journalContainer) {
    journalContainer.classList.add("fade-out-text");
  }

  document.querySelectorAll("button").forEach((button) => {
    button.disabled = true;
    button.setAttribute("aria-disabled", "true");
  });

  window.setTimeout(() => {
    window.location.href = next;
  }, TRANSITION_MS);
};

document.querySelectorAll("[data-next]").forEach((button) => {
  button.addEventListener("click", () => navigateTo(button.dataset.next));
});

document.querySelectorAll("[data-glitch-delay]").forEach((element) => {
  element.style.setProperty("--delay", element.dataset.glitchDelay);
});

const stage2Body = document.querySelector("body.stage-2");
if (stage2Body) {
  const glitchButton = document.querySelector(".choice-button--glitch");
  if (glitchButton) {
    glitchButton.addEventListener("mouseenter", () => {
      stage2Body.classList.add("stage-2-shudder");
    });

    glitchButton.addEventListener("mouseleave", () => {
      stage2Body.classList.remove("stage-2-shudder");
    });
  }
}

document.querySelectorAll('[data-action="blackout"]').forEach((button) => {
  button.addEventListener("click", () => {
    document.body.innerHTML = "";
    document.body.style.backgroundColor = "#000";
    document.body.style.backgroundImage = "none";
    document.body.className = "";

    const blackout = document.createElement("div");
    blackout.style.minHeight = "100vh";
    blackout.style.display = "flex";
    blackout.style.flexDirection = "column";
    blackout.style.alignItems = "center";
    blackout.style.justifyContent = "center";
    blackout.style.gap = "24px";
    blackout.style.color = "#f8f6f6";
    blackout.style.fontFamily = '"EB Garamond", serif';

    const title = document.createElement("p");
    title.textContent = "The wallpaper closes in.";
    title.style.letterSpacing = "0.08em";
    title.style.textTransform = "uppercase";

    const restart = document.createElement("button");
    restart.type = "button";
    restart.textContent = "Start over";
    restart.style.border = "1px solid #f8f6f6";
    restart.style.padding = "12px 24px";
    restart.style.background = "transparent";
    restart.style.color = "#f8f6f6";
    restart.style.textTransform = "uppercase";
    restart.style.letterSpacing = "0.1em";
    restart.addEventListener("click", () => {
      window.location.href = "/";
    });

    blackout.append(title, restart);
    document.body.appendChild(blackout);
  });
});
