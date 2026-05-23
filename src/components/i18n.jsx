import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        // ================= NAV / GENERAL =================
        home: "Home",
        calculator: "Calculator",
        dashboard: "Dashboard",
        about: "About",
        hire: "Hire",
        weekly_tips: "Weekly Tips",
        ai_advisor: "AI Advisor",
        language: "Language",

        // ================= HERO =================
        hero_title_line1: "Smarter Farming.",
        hero_title_line2: "Better Future",
        hero_desc:
          "AI-powered guidance, labour support and smart tools for Nigerian farmers.",
        ask_ai: "Ask AI Advisor",
        explore_tools: "Explore Tools",
        key_features: "Key Features",

        // ================= AI =================
        ai_advisor_title: "AI Farm Advisor",
        ai_advisor_desc: "Ask questions about crops, pests and irrigation",

        ai_advisor_title_ui: "Smart AI Farm Advisor",
        ai_placeholder: "Ask about crops, pests, irrigation...",
        ask_ai_btn: "Ask AI",
        thinking: "Thinking...",
        ai_response: "AI Response",
        unable_response: "Unable to get response",

        // ================= SOLAR =================
        solar_calculator_title: "Solar ROI Calculator",
        solar_calculator_desc:
          "Calculate solar pump size and payback period",
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

        // ================= FARM HELP =================
        farm_help_title: "Farm Help Hub",
        farm_help_desc: "Find trusted farm labourers nearby",

        farm_jobs: "Farm Jobs",
        workers: "Workers",
        workers_needed: "workers needed",
        skill: "Skill",
        experience: "Experience",

        whatsapp: "WhatsApp",
        call: "Call",
        message: "Message",

        cassava_job: "Cassava Planting Crew Needed",
        maize_job: "Maize Harvest Assistance",
        ilorin_north: "Ilorin North",
        ogbomosho_road: "Ogbomosho Road",
        starts_2_days: "Starts in 2 days",
        next_week: "Next week",
        general_labour: "General Farm Labour",
        harvest_specialist: "Harvest Specialist",
        available_now: "Available now",
        weekend_only: "Weekend only",

        // ================= WEEKLY TIPS =================
        weekly_farm_tips: "Weekly Farm Tips",
        weekly_desc: "Simple AI-powered farming advice to improve your harvest",
        week: "Week",
        refresh_tips: "Refresh Tips",
        generating_tips: "Generating AI tips...",
      },
    },

    ha: {
      translation: {
        // NAV / GENERAL
        home: "Gida",
        calculator: "Kalkuleta",
        dashboard: "Allon Sarrafawa",
        about: "Game da mu",
        hire: "Hayar Ma'aikata",
        weekly_tips: "Shawarwarin Mako",
        ai_advisor: "Mai ba da shawarar AI",
        language: "Harshe",

        // HERO
        hero_title_line1: "Noma mai wayo.",
        hero_title_line2: "Makomar da ta fi kyau",
        hero_desc:
          "Shawarwarin AI da kayan aikin zamani ga manoma a Najeriya.",
        ask_ai: "Tambayi AI",
        explore_tools: "Duba Kayan Aiki",
        key_features: "Muhimman Fasali",

        // AI
        ai_advisor_title: "Mai ba da shawarar Noma na AI",
        ai_advisor_desc: "Tambayi game da amfanin gona da shayarwa",

        ai_advisor_title_ui: "Mai ba da shawarar Noma na AI",
        ai_placeholder: "Tambayi game da amfanin gona, kwari, shayarwa...",
        ask_ai_btn: "Tambayi AI",
        thinking: "Yana tunani...",
        ai_response: "Amsar AI",
        unable_response: "Ba a samu amsa ba",

        // SOLAR
        solar_calculator_title: "Kalkuleta na Solar ROI",
        solar_calculator_desc:
          "Lissafa girman famfo da lokacin dawowa",
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

        // FARM HELP
        farm_help_title: "Cibiyar Taimakon Noma",
        farm_help_desc: "Nemo ma’aikatan gona amintattu kusa da kai",

        farm_jobs: "Ayyukan Gona",
        workers: "Ma'aikata",
        workers_needed: "ana bukatar ma'aikata",
        skill: "Kwarewa",
        experience: "Shekarun aiki",

        whatsapp: "WhatsApp",
        call: "Kira",
        message: "Sako",

        cassava_job: "Ana Bukatar Masu Shuka Rogo",
        maize_job: "Taimakon Girbin Masara",
        ilorin_north: "Arewacin Ilorin",
        ogbomosho_road: "Titin Ogbomosho",
        starts_2_days: "Za a fara cikin kwanaki 2",
        next_week: "Mako mai zuwa",
        general_labour: "Aikin gona na gaba ɗaya",
        harvest_specialist: "Kwararren girbi",
        available_now: "Akwai yanzu",
        weekend_only: "Karshen mako kawai",

        // WEEKLY TIPS
        weekly_farm_tips: "Shawarwarin Noma na Mako",
        weekly_desc: "Shawarwarin AI don inganta amfanin gonarka",
        week: "Mako",
        refresh_tips: "Sabunta Shawarwari",
        generating_tips: "AI na samar da shawara...",
      },
    },

    yo: {
      translation: {
        // NAV / GENERAL
        home: "Ile-Ibile",
        calculator: "Isiro Agbara Oorun",
        dashboard: "Dasibodu",
        about: "Nipa wa",
        hire: "Gba Osise",
        weekly_tips: "Imọran Ọsẹ",
        ai_advisor: "Olùrànlọwọ AI",
        language: "Ede",

        // HERO
        hero_title_line1: "Ise-ogbin to gbọn.",
        hero_title_line2: "Aye to dara ju",
        hero_desc:
          "Imọran AI ati irinṣẹ fun awọn agbẹ Naijiria.",
        ask_ai: "Beere AI",
        explore_tools: "Ṣawari irinṣẹ",
        key_features: "Awọn ẹya pataki",

        // AI
        ai_advisor_title: "Olùrànlọwọ AI oko",
        ai_advisor_desc: "Beere nipa irugbin ati irigeson",

        ai_advisor_title_ui: "Olùrànlọwọ AI Oko",
        ai_placeholder: "Beere nipa irugbin, ajenirun, irigeson...",
        ask_ai_btn: "Beere AI",
        thinking: "N ronú...",
        ai_response: "Idahun AI",
        unable_response: "Ko le gba idahun",

        // SOLAR
        solar_calculator_title: "Isiro Agbara Oorun ROI",
        solar_calculator_desc:
          "Ṣe iṣiro iwọn fifa ati akoko ìsanpadà",
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

        // FARM HELP
        farm_help_title: "Iranlọwọ agbẹ",
        farm_help_desc: "Wa awọn oṣiṣẹ oko to gbẹkẹle",

        farm_jobs: "Awọn Iṣẹ Oko",
        workers: "Awọn Osise",
        workers_needed: "osise nilo",
        skill: "Ogbon",
        experience: "Iriri",

        whatsapp: "WhatsApp",
        call: "Pe",
        message: "Ifiranṣẹ",

        cassava_job: "A nilo ẹgbẹ dida gbaguda",
        maize_job: "Iranlọwọ ikore agbado",
        ilorin_north: "Ariwa Ilorin",
        ogbomosho_road: "Opopona Ogbomosho",
        starts_2_days: "Yoo bẹrẹ ni ọjọ meji",
        next_week: "Ọsẹ to n bọ",
        general_labour: "Osise oko gbogbogbo",
        harvest_specialist: "Amọja ikore",
        available_now: "Wa lọwọlọwọ",
        weekend_only: "Ipẹ̀yà ọsẹ nikan",

        // WEEKLY TIPS
        weekly_farm_tips: "Imọran Oko Ọsẹ",
        weekly_desc: "Imọran AI lati mu eso rẹ pọ si",
        week: "Ọsẹ",
        refresh_tips: "Tun Imọran ṣe",
        generating_tips: "AI n ṣe awọn imọran...",
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