import React from "react";

interface Topic {
    label: string;
    score: number;
    color: string;
}

const SyllabusWiseAnalysis = () => {
    const topics: Topic[] = [
        { label: "HTML Tools, Forms, History", score: 80, color: "bg-blue-500" },
        { label: "Tags & References in HTML", score: 60, color: "bg-orange-500" },
        { label: "Tables & References in HTML", score: 24, color: "bg-red-500" },
        { label: "Tables & CSS Basics", score: 96, color: "bg-green-500" },
    ];

    return (
        <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-2xl mx-auto">
            <h2 className="text-lg font-bold mb-4">Syllabus Wise Analysis</h2>
            <div className="space-y-4">
                {topics.map((topic) => (
                    <div key={topic.label}>
                        <div className="flex justify-between items-center mb-1">
                            <p className="text-sm text-gray-700">{topic.label}</p>
                            <p
                                className="text-sm font-semibold"
                                style={{ color: `${topic.color.replace("bg-", "")}` }}
                            >
                                {topic.score}%
                            </p>
                        </div>
                        <div className="relative w-full h-2 bg-gray-200 rounded-full">
                            <div
                                className={`${topic.color} h-2 rounded-full`}
                                style={{ width: `${topic.score}%` }}
                            ></div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SyllabusWiseAnalysis;
