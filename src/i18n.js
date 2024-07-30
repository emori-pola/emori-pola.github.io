import { createI18n } from "vue-i18n";
import { caseStudyData } from "@/case-study-data";

const messages = {
  en: {
    message: {
      hello: "This is an English text.",
      caseStudies: caseStudyData.en,
    },
  },
  ja: {
    message: {
      hello: "これは日本語のテキストです。",
      caseStudies: caseStudyData.ja,
    },
  },
};

const i18n = createI18n({
  locale: "en", // 初期設定の言語
  fallbackLocale: "en", // フォールバック言語の設定
  messages,
});

export default i18n;
