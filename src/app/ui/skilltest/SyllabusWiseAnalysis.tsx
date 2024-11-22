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

    const getBarColor = (color: string) => {
        switch (color) {
            case "bg-blue-500":
                return "rgb(59, 130, 246)";
            case "bg-orange-500":
                return "rgb(249, 115, 22)";
            case "bg-red-500":
                return "rgb(239, 68, 68)";
            case "bg-green-500":
                return "rgb(34, 197, 94)";
            default:
                return color;
        }
    };

    return (
        <div className="bg-white p-8 w-full max-w-xl rounded-lg border border-gray-100 shadow hover:shadow-md transition-shadow duration-200">
            <h2 className="text-xl font-bold mb-8">Syllabus Wise Analysis</h2>
            <div className="space-y-8">
                {topics.map((topic) => (
                    <div key={topic.label} className="relative">
                        <p className="text-[15px] text-gray-700 font-medium mb-3">{topic.label}</p>
                        <div className="relative w-full">
                            <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                                <div
                                    className="h-full rounded-full transition-all duration-300 ease-in-out"
                                    style={{
                                        width: `${topic.score}%`,
                                        backgroundColor: getBarColor(topic.color)
                                    }}
                                ></div>
                            </div>
                            <span
                                className="absolute right-0 -top-6 text-sm font-medium"
                                style={{ color: getBarColor(topic.color) }}
                            >
                                {topic.score}%
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SyllabusWiseAnalysis;
