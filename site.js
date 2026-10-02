(() => {
  const storageKey = "aiglassaware-language";
  const root = document.documentElement;
  const toggle = document.querySelector("[data-language-toggle]");
  const preferred = localStorage.getItem(storageKey);
  const browserLanguage = navigator.language.toLowerCase().startsWith("zh") ? "zh-CN" : "en";

  function setLanguage(language) {
    const isChinese = language.startsWith("zh");
    root.lang = isChinese ? "zh-CN" : "en";
    localStorage.setItem(storageKey, root.lang);

    if (toggle) {
      toggle.textContent = isChinese ? "EN" : "中文";
      toggle.setAttribute("aria-label", isChinese ? "Switch to English" : "切换为中文");
    }

    document.querySelectorAll(".localized-image").forEach((image) => {
      image.src = isChinese ? image.dataset.srcZh : image.dataset.srcEn;
    });
  }

  setLanguage(preferred || browserLanguage);
  toggle?.addEventListener("click", () => setLanguage(root.lang.startsWith("zh") ? "en" : "zh-CN"));
})();
