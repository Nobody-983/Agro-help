import { useState } from "react";
import { Sprout, Users, MapPin, Clock, PlusCircle } from "lucide-react";

export default function FarmHelpHub() {
  const [activeTab, setActiveTab] = useState("jobs");

  const [jobInput, setJobInput] = useState("");

  const [farmJobs, setFarmJobs] = useState([
    {
      title: "Cassava Planting Crew Needed",
      location: "Ilorin North",
      workers: 10,
      pay: "₦5,000/day",
      time: "Starts in 2 days",
    },
    {
      title: "Maize Harvest Assistance",
      location: "Ogbomosho Road",
      workers: 6,
      pay: "₦6,500/day",
      time: "Next week",
    },
  ]);

  const workers = [
    {
      name: "Adewale Farm Team",
      skill: "General Farm Labour",
      experience: "3 years",
      availability: "Available now",
    },
    {
      name: "Bola Agro Helpers",
      skill: "Harvesting Specialist",
      experience: "5 years",
      availability: "Weekend only",
    },
  ];

  const handlePostJob = () => {
    if (!jobInput.trim()) return;

    const newJob = {
      title: jobInput,
      location: "Pending location",
      workers: 0,
      pay: "Not set",
      time: "Just posted",
    };

    setFarmJobs([newJob, ...farmJobs]);
    setJobInput("");
  };

  return (
    <div className="min-h-screen bg-green-50 p-6">
      {/* Header */}
      <div className="text-center mb-8">
        <div className="flex justify-center items-center gap-2">
          <Sprout className="text-green-600" />
          <h1 className="text-3xl font-bold text-green-800">Farm Help Hub</h1>
        </div>
        <p className="text-gray-600 mt-2">
          Connect farmers with reliable farm workers instantly
        </p>
      </div>

     
      {/* Tabs */}
      <div className="flex gap-4 mb-6 justify-center">
        <button
          onClick={() => setActiveTab("jobs")}
          className={`px-4 hover:bg-green-600 py-2 rounded-full ${
            activeTab === "jobs"
              ? "bg-green-600 text-white"
              : "bg-white text-green-700"
          }`}
        >
          Farm Jobs
        </button>

        <button
          onClick={() => setActiveTab("workers")}
          className={`px-4 hover:bg-green-600 py-2 rounded-full ${
            activeTab === "workers"
              ? "bg-green-600 text-white"
              : "bg-white text-green-700"
          }`}
        >
          Workers
        </button>
      </div>

      {/* Content */}
      {activeTab === "jobs" && (
        <div className="grid gap-4 md:grid-cols-2">
          {farmJobs.map((job, i) => (
            <div key={i} className="bg-white p-4 rounded-xl shadow">
              <h3 className="font-bold text-lg text-green-800">
                {job.title}
              </h3>
              <p className="flex items-center gap-2 text-gray-600">
                <MapPin size={14} /> {job.location}
              </p>
              <p className="flex items-center gap-2 text-gray-600">
                <Users size={14} /> {job.workers} workers needed
              </p>
              <p className="text-green-700 font-semibold">{job.pay}</p>
              <p className="flex items-center gap-2 text-gray-500 text-sm">
                <Clock size={14} /> {job.time}
              </p>
            </div>
          ))}
        </div>
      )}

      {activeTab === "workers" && (
        <div className="grid gap-4 md:grid-cols-2">
          {workers.map((worker, i) => (
            <div key={i} className="bg-white p-4 rounded-xl shadow">
              <h3 className="font-bold text-lg text-green-800">
                {worker.name}
              </h3>
              <p className="text-gray-600">Skill: {worker.skill}</p>
              <p className="text-gray-600">Experience: {worker.experience}</p>
              <p className="text-green-700 font-semibold">
                {worker.availability}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}