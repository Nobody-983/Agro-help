import { useState } from "react";
import { useTranslation } from "react-i18next";
import {
  Sprout,
  Users,
  MapPin,
  Clock,
  Phone,
  MessageCircle,
  MessageSquare,
} from "lucide-react";

export default function FarmHelpHub() {
  const [activeTab, setActiveTab] = useState("jobs");
  const { t } = useTranslation();

  const phone = "2348140182558";

  const farmJobs = [
    {
      title: t("cassava_job"),
      location: t("ilorin_north"),
      workers: 10,
      pay: "₦5,000/day",
      time: t("starts_2_days"),
    },
    {
      title: t("maize_job"),
      location: t("ogbomosho_road"),
      workers: 6,
      pay: "₦6,500/day",
      time: t("next_week"),
    },
  ];

  const workers = [
    {
      name: "Adewale Farm Team",
      skill: t("general_labour"),
      experience: "3 years",
      availability: t("available_now"),
    },
    {
      name: "Bola Agro Helpers",
      skill: t("harvest_specialist"),
      experience: "5 years",
      availability: t("weekend_only"),
    },
  ];

  return (
    <div className="min-h-screen bg-green-50 p-6">

      {/* Header */}

      <div className="text-center mb-8">
        <div className="flex justify-center items-center gap-2">
          <Sprout className="text-green-600" />
          <h1 className="text-3xl font-bold text-green-800">
            {t("farm_help_title")}
          </h1>
        </div>

        <p className="text-gray-600 mt-2">
          {t("farm_help_desc")}
        </p>
      </div>

      {/* Tabs */}

      <div className="flex gap-4 mb-6 justify-center">

        <button
          onClick={() => setActiveTab("jobs")}
          className={`px-4 py-2 rounded-full ${
            activeTab === "jobs"
              ? "bg-green-600 text-white"
              : "bg-white text-green-700"
          }`}
        >
          {t("farm_jobs")}
        </button>

        <button
          onClick={() => setActiveTab("workers")}
          className={`px-4 py-2 rounded-full ${
            activeTab === "workers"
              ? "bg-green-600 text-white"
              : "bg-white text-green-700"
          }`}
        >
          {t("workers")}
        </button>

      </div>

      {/* Jobs */}

      {activeTab === "jobs" && (
        <div className="grid gap-4 md:grid-cols-2">

          {farmJobs.map((job, i) => (
            <div
              key={i}
              className="bg-white p-4 rounded-xl shadow"
            >
              <h3 className="font-bold text-lg text-green-800">
                {job.title}
              </h3>

              <p className="flex items-center gap-2 text-gray-600">
                <MapPin size={14} />
                {job.location}
              </p>

              <p className="flex items-center gap-2 text-gray-600">
                <Users size={14} />
                {job.workers} {t("workers_needed")}
              </p>

              <p className="text-green-700 font-semibold">
                {job.pay}
              </p>

              <p className="flex items-center gap-2 text-gray-500">
                <Clock size={14} />
                {job.time}
              </p>

              <div className="flex gap-2 mt-4">

                <a
                  href={`https://wa.me/${phone}`}
                  target="_blank"
                  rel="noreferrer"
                  className="bg-green-500 text-white px-3 py-2 rounded-lg flex items-center gap-1"
                >
                  <MessageCircle size={16}/>
                  {t("whatsapp")}
                </a>

                <a
                  href={`tel:${phone}`}
                  className="bg-blue-500 text-white px-3 py-2 rounded-lg flex items-center gap-1"
                >
                  <Phone size={16}/>
                  {t("call")}
                </a>

                <a
                  href={`sms:${phone}`}
                  className="bg-orange-500 text-white px-3 py-2 rounded-lg flex items-center gap-1"
                >
                  <MessageSquare size={16}/>
                  {t("message")}
                </a>

              </div>
            </div>
          ))}

        </div>
      )}

      {/* Workers */}

      {activeTab === "workers" && (
        <div className="grid gap-4 md:grid-cols-2">

          {workers.map((worker, i) => (
            <div
              key={i}
              className="bg-white p-4 rounded-xl shadow"
            >
              <h3 className="font-bold text-lg text-green-800">
                {worker.name}
              </h3>

              <p>
                {t("skill")}: {worker.skill}
              </p>

              <p>
                {t("experience")}: {worker.experience}
              </p>

              <p className="text-green-700 font-semibold">
                {worker.availability}
              </p>

              <div className="flex gap-2 mt-4">

                <a
                  href={`https://wa.me/${phone}`}
                  target="_blank"
                  rel="noreferrer"
                  className="bg-green-500 text-white px-3 py-2 rounded-lg"
                >
                  {t("whatsapp")}
                </a>

                <a
                  href={`tel:${phone}`}
                  className="bg-blue-500 text-white px-3 py-2 rounded-lg"
                >
                  {t("call")}
                </a>

                <a
                  href={`sms:${phone}`}
                  className="bg-orange-500 text-white px-3 py-2 rounded-lg"
                >
                  {t("message")}
                </a>

              </div>

            </div>
          ))}

        </div>
      )}
    </div>
  );
}