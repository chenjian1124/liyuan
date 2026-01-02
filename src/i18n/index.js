import { createI18n } from "vue-i18n";
import zh from "./locales/zh";
import en from "./locales/en";
import es from "./locales/es";

const STORAGE_KEY = "app_locale";

/**
 * 获取初始语言：
 * 1) localStorage 优先
 * 2) 浏览器语言（navigator.language）
 * 3) 默认中文
 */
function getInitialLocale() {
  const saved = localStorage.getItem(STORAGE_KEY);
  if (saved === "zh" || saved === "en" || saved === "es") return saved;

  const nav = (navigator.language || "").toLowerCase();
  if (nav.startsWith("zh")) return "zh";
  if (nav.startsWith("es")) return "es";
  return "en";
}

export const i18n = createI18n({
  legacy: false,
  globalInjection: true,
  locale: getInitialLocale(),
  fallbackLocale: "zh",
  messages: {
    zh,
    en,
    es,
  },
});

export const LOCALE_STORAGE_KEY = STORAGE_KEY;



