import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Bot, Send } from "lucide-react";

export default function AiFarmAdvisor() {
  const { t, i18n } = useTranslation();

  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [loading, setLoading] = useState(false);

  async function askAI() {
    if (!question.trim()) return;

    setLoading(true);
    setAnswer("");

    try {
      const res = await fetch("http://localhost:5000/ask-ai", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          question,
          language: i18n.language, // 🌍 IMPORTANT: multilingual support
        }),
      });

      const data = await res.json();

      setAnswer(data.answer || t("unable_response"));
    } catch (error) {
      console.log(error);
      setAnswer(t("unable_response"));
    }

    setLoading(false);
  }

  return (
    <div className="min-h-screen p-6 bg-green-50">
      <div className="max-w-3xl mx-auto bg-white rounded-xl p-6 shadow">

        {/* HEADER */}
        <div className="flex items-center gap-2 mb-6">
          <Bot className="text-green-600" />
          <h1 className="text-2xl font-bold text-green-800">
            {t("ai_advisor_title_ui")}
          </h1>
        </div>

        {/* INPUT */}
        <textarea
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          placeholder={t("ai_placeholder")}
          className="w-full border p-3 rounded-lg h-32"
        />

        {/* BUTTON */}
        <button
          onClick={askAI}
          disabled={loading}
          className="mt-4 px-4 py-2 rounded-lg bg-green-600 text-white flex items-center gap-2"
        >
          <Send size={18} />
          {loading ? t("thinking") : t("ask_ai_btn")}
        </button>

        {/* RESPONSE */}
        {answer && (
          <div className="mt-6 border rounded-lg p-4 bg-gray-50">
            <h2 className="font-bold mb-2 text-green-800">
              {t("ai_response")}
            </h2>

            <p className="text-gray-700 whitespace-pre-line">
              {answer}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}