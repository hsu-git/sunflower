const apiKey = document.querySelector("#prompt-key");
const promptInput = document.querySelector("#prompt-input");

const form = document.querySelector("#prompt-form");
form.addEventListener("submit", async (event) => {
  event.preventDefault();
  alert(
    `프롬프트 전송! API 키: ${apiKey.value}, 프롬프트: ${promptInput.value}`
  );
});
