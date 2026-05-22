import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        home: "Home",
        calculator: "Calculator",
        dashboard: "Dashboard",
        about: "About",

        hero_title_line1: "Smarter Farming.",
        hero_title_line2: "Better Future",
        hero_desc:
          "AI-powered guidance, labour support and smart tools for Nigerian farmers.",
        ask_ai: "Ask AI Advisor",
        explore_tools: "Explore Tools",
        key_features: "Key Features",

        ai_advisor_title: "AI Farm Advisor",
        ai_advisor_desc: "Ask questions about crops, pests and irrigation",

        solar_calculator_title: "Solar ROI Calculator",
        solar_calculator_desc:
          "Calculate solar pump size and payback period",

        farming_tips_title: "Weekly Farming Tips",
        farming_tips_desc: "Location-based farming guidance",

        farm_help_title: "Farm Help Hub",
        farm_help_desc: "Find trusted farm labourers nearby",

        solar_title: "Solar ROI Calculator",
        solar_subtitle: "Estimate pump size and returns",

        farm_size: "Farm Size (hectares)",
        farm_size_placeholder: "Enter farm size",
        crop_type: "Crop Type",
        select_crop: "Select crop",

        maize: "Maize",
        rice: "Rice",
        tomato: "Tomato",

        calculate_roi: "Calculate ROI",

        results: "Results",
        pump_wattage: "Recommended Pump Wattage",
        payback_period: "Estimated Payback Period",
        estimated_savings: "Estimated Savings",
        months: "Months",
      },
    },

    ha: {
      translation: {
        home: "Gida",
        calculator: "Kalkuleta",
        dashboard: "Allon Sarrafawa",
        about: "Game da mu",

        hero_title_line1: "Noma mai wayo.",
        hero_title_line2: "Makomar da ta fi kyau",
        hero_desc:
          "Shawarwarin AI da kayan aikin zamani ga manoma a Najeriya.",
        ask_ai: "Tambayi AI",
        explore_tools: "Duba Kayan Aiki",
        key_features: "Muhimman Fasali",

        ai_advisor_title: "Mai ba da shawarar Noma na AI",
        ai_advisor_desc: "Tambayi game da amfanin gona da shayarwa",

        solar_calculator_title: "Kalkuleta na Solar ROI",
        solar_calculator_desc:
          "Lissafa girman famfo da lokacin dawowa",

        farming_tips_title: "Shawarwarin Noma na Mako-mako",
        farming_tips_desc: "Shawarwarin noma na yankin",

        farm_help_title: "Cibiyar Taimakon Noma",
        farm_help_desc: "Nemo ma’aikatan gona amintattu kusa da kai",

        solar_title: "Kalkuleta na Solar ROI",
        solar_subtitle: "Kimanta girman famfo da ribar dawowa",

        farm_size: "Girman gona (hektar)",
        farm_size_placeholder: "Shigar da girman gona",
        crop_type: "Nau'in amfanin gona",
        select_crop: "Zaɓi amfanin gona",

        maize: "Masara",
        rice: "Shinkafa",
        tomato: "Tumatir",

        calculate_roi: "Lissafa ROI",

        results: "Sakamako",
        pump_wattage: "Ƙarfin famfo da aka ba da shawara",
        payback_period: "Lokacin dawowa da aka kiyasta",
        estimated_savings: "Adadin kuɗin da za a adana",
        months: "Watanni",
      },
    },

    yo: {
      translation: {
        home: "Ile-Ibile",
        calculator: "Isiro Agbara Oorun",
        dashboard: "Dasibodu",
        about: "Nipa wa",

        hero_title_line1: "Ise-ogbin to gbọn.",
        hero_title_line2: "Aye to dara ju",
        hero_desc:
          "Imọran AI ati irinṣẹ fun awọn agbẹ Naijiria.",
        ask_ai: "Beere AI",
        explore_tools: "Ṣawari irinṣẹ",
        key_features: "Awọn ẹya pataki",

        ai_advisor_title: "Olùrànlọwọ AI oko",
        ai_advisor_desc: "Beere nipa irugbin ati irigeson",

        solar_calculator_title: "Isiro Agbara Oorun ROI",
        solar_calculator_desc:
          "Ṣe iṣiro iwọn fifa ati akoko ìsanpadà",

        farming_tips_title: "Imọran ọsẹ",
        farming_tips_desc: "Itọsọna agbẹ agbegbe",

        farm_help_title: "Iranlọwọ agbẹ",
        farm_help_desc: "Wa awọn oṣiṣẹ oko to gbẹkẹle",

        solar_title: "Isiro Agbara Oorun ROI",
        solar_subtitle: "Ṣe iṣiro iwọn fifa ati èrè",

        farm_size: "Iwọn oko (hektari)",
        farm_size_placeholder: "Tẹ iwọn oko sii",
        crop_type: "Iru irugbin",
        select_crop: "Yan irugbin",

        maize: "Agbado",
        rice: "Iresi",
        tomato: "Tomati",

        calculate_roi: "Ṣe iṣiro ROI",

        results: "Abajade",
        pump_wattage: "Agbara fifa to yẹ",
        payback_period: "Akoko ìsanpadà",
        estimated_savings: "Iye owo ìfipamọ",
        months: "Oṣù",
      },
    },
  },

  lng: "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;