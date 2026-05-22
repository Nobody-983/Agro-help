import { useState } from "react";
import { Bot, Sprout, Loader } from "lucide-react";

export default function AIFarmAdvisor() {
  const [question, setQuestion] = useState("");
  const [loading, setLoading] = useState(false);
  const [answer, setAnswer] = useState("");

  const handleAsk = () => {
    if (!question.trim()) return;

    setLoading(true);
    setAnswer("");

    // Simulated AI response (you can later connect real API)
    setTimeout(() => {
      const mockResponses = [
        "You should plant maize at the start of the rainy season for best yield.",
        "Cassava grows well in well-drained soil with moderate rainfall.",
        "For pest control, use organic neem spray every 7 days.",
        "Farm workers are most available early mornings in your region.",
      ];

      const random = Math.floor(Math.random() * mockResponses.length);

      setAnswer(mockResponses[random]);
      setLoading(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-green-50 p-6">
      {/* Header */}
      <div className="text-center mb-8">
        <div className="flex justify-center items-center gap-2">
          <Bot className="text-green-700" />
          <h1 className="text-3xl font-bold text-green-800">
            AI Farm Advisor
          </h1>
        </div>
        <p className="text-gray-600 mt-2">
          Get smart farming advice powered by AI
        </p>
      </div>

      {/* Question Box */}
      <div className="bg-white p-4 rounded-xl shadow max-w-xl mx-auto">
        <textarea
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          placeholder="Ask anything about farming... e.g. When should I plant maize?"
          className="w-full border p-3 rounded h-28 resize-none"
        />

        <button
          onClick={handleAsk}
          className="mt-3 bg-green-600 text-white px-4 py-2 rounded w-full flex items-center justify-center gap-2"
        >
          {loading ? (
            <>
              <Loader className="animate-spin" size={18} /> Thinking...
            </>
          ) : (
            <>
              <Sprout size={18} /> Ask Advisor
            </>
          )}
        </button>
      </div>

      {/* Answer Section */}
      {answer && (
        <div className="bg-white p-4 rounded-xl shadow max-w-xl mx-auto mt-6">
          <h2 className="font-bold text-green-800 mb-2">AI Advice</h2>
          <p className="text-gray-700">{answer}</p>
        </div>
      )}
    </div>
  );
}