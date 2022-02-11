const emojiContainer = document.querySelector(".emojiContainer");
const pushBtn = document.querySelector(".push-btn");
const unshiftBtn = document.querySelector(".unshift-btn");
const popBtn = document.querySelector(".pop-btn");
const shiftBtn = document.querySelector(".shift-btn");
const input = document.querySelector(".emoji-input");
const myEmojis = [];

function renderEmojis() {
  // move this here - DRY - clear out emojis before rendering
  emojiContainer.textContent = "";
  for (let i = 0; i < myEmojis.length; i++) {
    const emoji = document.createElement("span");
    emoji.textContent = myEmojis[i];
    emojiContainer.append(emoji);
  }
}

pushBtn.addEventListener("click", () => {
  if (input.value) {
    myEmojis.push(input.value);
    input.value = "";
    renderEmojis();
  }
});

unshiftBtn.addEventListener("click", () => {
  if (input.value) {
    myEmojis.unshift(input.value);
    input.value = "";
    renderEmojis();
  }
});

popBtn.addEventListener("click", () => {
  myEmojis.pop();
  renderEmojis();
});

shiftBtn.addEventListener("click", () => {
  myEmojis.shift();
  renderEmojis();
});
