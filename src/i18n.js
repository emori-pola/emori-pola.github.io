import { createI18n } from "vue-i18n";
import { caseStudyDataEn, caseStudyDataJa } from "@/case-study-data";

const messages = {
  en: {
    home: {
      title: "Hi, I'm Yuka, a web designer.",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    caseStudies: caseStudyDataEn,
  },
  ja: {
    home: {
      title: "こんにちは、私はウェブデザイナーのユカです。",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    caseStudies: caseStudyDataJa,
  },
};

const i18n = createI18n({
  locale: "en",
  messages,
});

export default i18n;
