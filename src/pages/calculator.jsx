import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Sun } from "lucide-react";

const SolarCalc = () => {
  const { t } = useTranslation();

  const [farmSize, setFarmSize] = useState("");
  const [crop, setCrop] = useState("");
  const [result, setResult] = useState(null);

  const calculateSolar = () => {
    if (!farmSize || !crop) return;

    const size = Number(farmSize);

    let wattage = 0;
    let months = 0;
    let savings = 0;

    switch (crop) {
      case "maize":
        wattage = size * 450;
        months = 12;
        savings = size * 45000;
        break;

      case "rice":
        wattage = size * 650;
        months = 10;
        savings = size * 60000;
        break;

      case "tomato":
        wattage = size * 550;
        months = 8;
        savings = size * 55000;
        break;

      default:
        wattage = size * 500;
        months = 11;
        savings = size * 50000;
    }

    setResult({ wattage, months, savings });
  };

  return (
    <div className="min-h-screen bg-gray-100 px-5 py-8">

      <div className="max-w-lg mx-auto">

        {/* CARD */}
        <div className="bg-white rounded-3xl shadow-lg p-6">

          {/* HEADER */}
          <div className="flex items-center gap-3 mb-6">

            <div className="bg-yellow-100 p-3 rounded-full">
              <Sun className="text-yellow-500" />
            </div>

            <div>
              <h1 className="text-2xl font-bold">
                {t("solar_title")}
              </h1>

              <p className="text-gray-500 text-sm">
                {t("solar_subtitle")}
              </p>
            </div>

          </div>

          {/* FARM SIZE */}
          <div className="mb-5">

            <label className="block mb-2 font-medium">
              {t("farm_size")}
            </label>

            <input
              type="number"
              value={farmSize}
              onChange={(e) => setFarmSize(e.target.value)}
              placeholder={t("farm_size_placeholder")}
              className="w-full border rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-green-600"
            />
          </div>

          {/* CROP */}
          <div className="mb-5">

            <label className="block mb-2 font-medium">
              {t("crop_type")}
            </label>

            <select
              value={crop}
              onChange={(e) => setCrop(e.target.value)}
              className="w-full border rounded-xl p-3"
            >
              <option value="">
                {t("select_crop")}
              </option>

              <option value="maize">{t("maize")}</option>
              <option value="rice">{t("rice")}</option>
              <option value="tomato">{t("tomato")}</option>
            </select>
          </div>

          {/* BUTTON */}
          <button
            onClick={calculateSolar}
            className="w-full bg-green-700 text-white rounded-xl py-3 font-semibold hover:bg-green-800"
          >
            {t("calculate_roi")}
          </button>

        </div>

        {/* RESULTS */}
        {result && (
          <div className="bg-white mt-6 rounded-3xl shadow-lg p-6">

            <h2 className="font-bold text-xl mb-4">
              {t("results")}
            </h2>

            <div className="space-y-4">

              <div className="bg-green-50 p-4 rounded-xl">
                <p className="text-gray-500">
                  {t("pump_wattage")}
                </p>
                <h1 className="font-bold text-2xl text-green-700">
                  {result.wattage}W
                </h1>
              </div>

              <div className="bg-blue-50 p-4 rounded-xl">
                <p className="text-gray-500">
                  {t("payback_period")}
                </p>
                <h1 className="font-bold text-2xl text-blue-700">
                  {result.months} {t("months")}
                </h1>
              </div>

              <div className="bg-yellow-50 p-4 rounded-xl">
                <p className="text-gray-500">
                  {t("estimated_savings")}
                </p>
                <h1 className="font-bold text-2xl text-yellow-600">
                  ₦{result.savings.toLocaleString()}
                </h1>
              </div>

            </div>

          </div>
        )}

      </div>

    </div>
  );
};

export default SolarCalc;