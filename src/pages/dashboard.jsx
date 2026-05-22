import { useTranslation } from "react-i18next";
import {
  Bot,
  Sun,
  Sprout,
  Users,
  ArrowRight,
} from "lucide-react";

const Dashboard = () => {
  const { t } = useTranslation();

  const features = [
    {
      id: "ai",
      titleKey: "ai_advisor_title",
      descKey: "ai_advisor_desc",
      icon: <Bot size={28} />,
    },
    {
      id: "solar",
      titleKey: "solar_calculator_title",
      descKey: "solar_calculator_desc",
      icon: <Sun size={28} />,
    },
    {
      id: "tips",
      titleKey: "farming_tips_title",
      descKey: "farming_tips_desc",
      icon: <Sprout size={28} />,
    },
    {
      id: "help",
      titleKey: "farm_help_title",
      descKey: "farm_help_desc",
      icon: <Users size={28} />,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100">

      {/* HERO SECTION */}
      <section className="px-6 pt-10">

        <div className="bg-gradient-to-r from-green-700 to-green-500 rounded-3xl p-8 text-white">

          <h1 className="text-4xl font-bold leading-tight">
            {t("hero_title_line1")}
            <br />
            {t("hero_title_line2")} 🌱
          </h1>

          <p className="mt-4 text-green-100 max-w-xl">
            {t("hero_desc")}
          </p>

          <div className="flex gap-3 mt-6 flex-wrap">

            <button className="bg-white text-green-700 px-5 py-3 rounded-xl font-semibold hover:scale-105 transition">
              {t("ask_ai")}
            </button>

            <button className="bg-green-800 px-5 py-3 rounded-xl flex items-center gap-2 hover:bg-green-900 transition">
              {t("explore_tools")}
              <ArrowRight size={18} />
            </button>

          </div>

        </div>
      </section>

      {/* FEATURES */}
      <section className="px-6 mt-10 pb-10">

        <h2 className="font-bold text-xl text-gray-800">
          {t("key_features")}
        </h2>

        <div className="grid md:grid-cols-2 gap-5 mt-6">

          {features.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl p-5 shadow-sm hover:shadow-lg transition cursor-pointer"
            >

              <div className="w-14 h-14 rounded-full bg-green-100 flex items-center justify-center text-green-700">
                {item.icon}
              </div>

              <h3 className="font-bold mt-4 text-gray-900">
                {t(item.titleKey)}
              </h3>

              <p className="text-gray-500 mt-2">
                {t(item.descKey)}
              </p>

            </div>
          ))}

        </div>

      </section>

    </div>
  );
};

export default Dashboard;