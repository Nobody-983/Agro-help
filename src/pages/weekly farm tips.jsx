import { useState } from "react";
import { Sprout, Calendar, Lightbulb } from "lucide-react";

export default function WeeklyFarmTips() {
  const [week] = useState(1);

  const tips = [
    {
      title: "Soil Preparation",
      tip: "Always clear weeds and loosen soil before planting to improve root growth.",
    },
    {
      title: "Rainy Season Farming",
      tip: "Plant crops like maize and yam at the beginning of the rainy season for better yield.",
    },
    {
      title: "Pest Control",
      tip: "Use organic neem spray or ash to reduce insect damage without harming crops.",
    },
    {
      title: "Water Management",
      tip: "Avoid overwatering; ensure proper drainage to prevent root rot.",
    },
    {
      title: "Crop Rotation",
      tip: "Rotate crops each season to maintain soil fertility and reduce pests.",
    },
  ];

  return (
    <div className="min-h-screen bg-green-50 p-6">
      {/* Header */}
      <div className="text-center mb-8">
        <div className="flex justify-center items-center gap-2">
          <Sprout className="text-green-700" />
          <h1 className="text-3xl font-bold text-green-800">Weekly Farm Tips</h1>
        </div>
        <p className="text-gray-600 mt-2">
          Simple farming advice to improve your harvest every week
        </p>
      </div>

      {/* Week Indicator */}
      <div className="bg-white max-w-xl mx-auto p-4 rounded-xl shadow flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <Calendar className="text-green-600" />
          <p className="font-semibold">Week {week}</p>
        </div>
        <p className="text-sm text-gray-500">SDG Farming Support</p>
      </div>

      {/* Tips List */}
      <div className="grid gap-4 max-w-2xl mx-auto">
        {tips.map((item, i) => (
          <div key={i} className="bg-white p-4 rounded-xl shadow">
            <div className="flex items-center gap-2 mb-2">
              <Lightbulb className="text-yellow-500" />
              <h2 className="font-bold text-green-800">{item.title}</h2>
            </div>
            <p className="text-gray-700">{item.tip}</p>
          </div>
        ))}
      </div>
    </div>
  );
}