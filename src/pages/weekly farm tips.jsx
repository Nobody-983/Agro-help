import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Sprout, Calendar, Lightbulb } from "lucide-react";

export default function WeeklyFarmTips() {
  const { t, i18n } = useTranslation();

  const [week] = useState(1);
  const [loading, setLoading] = useState(false);
  const [aiTips, setAiTips] = useState([]);

  const getTips = async () => {
    try {
      setLoading(true);

      const res = await fetch("http://localhost:5000/ask-ai", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          question: "Give 5 short farming tips",
          language: i18n.language,
        }),
      });

      const data = await res.json();

      const tipsArray = data.answer
        .split("\n")
        .filter((t) => t.trim() !== "");

      setAiTips(tipsArray);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  // 🔥 ONLY ONCE
  useEffect(() => {
    getTips();
  }, []);

  return (
    <div className="min-h-screen bg-green-50 p-6">

      {/* HEADER */}
      <div className="text-center mb-8">
        <div className="flex justify-center items-center gap-2">
          <Sprout className="text-green-700" />
          <h1 className="text-3xl font-bold text-green-800">
            {t("weekly_farm_tips")}
          </h1>
        </div>

        <p className="text-gray-600 mt-2">
          {t("weekly_desc")}
        </p>
      </div>

      {/* WEEK */}
      <div className="bg-white max-w-xl mx-auto p-4 rounded-xl shadow flex justify-between mb-6">
        <div className="flex items-center gap-2">
          <Calendar className="text-green-600" />
          <p className="font-semibold">
            {t("week")} {week}
          </p>
        </div>

        <p className="text-sm text-gray-500">
          AI Powered Tips
        </p>
      </div>

      {/* BUTTON */}
      <div className="text-center mb-6">
        <button
          onClick={getTips}
          className="bg-green-600 text-white px-4 py-2 rounded"
        >
          Refresh Tips
        </button>
      </div>

      {/* TIPS */}
      <div className="grid gap-4 max-w-2xl mx-auto">

        {loading && (
          <p className="text-center text-gray-600">
            Generating AI tips...
          </p>
        )}

        {!loading &&
          aiTips.map((tip, i) => (
            <div
              key={i}
              className="bg-white p-4 rounded-xl shadow flex gap-2"
            >
              <Lightbulb className="text-yellow-500 mt-1" />
              <p>{tip}</p>
            </div>
          ))}
      </div>
    </div>
  );
}