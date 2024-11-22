import Image from "next/image";
import React from "react";
import trophy from "../../../../public/trophy-icon.png";
import clipboard from "../../../../public/clipboard-icon.png";
import checkmark from "../../../../public/checkmark-icon.png";

interface QuickStatisticsProps {
    rank: number;
    percentile: number;
    score: string;
}

const QuickStatistics: React.FC<QuickStatisticsProps> = ({
    rank,
    percentile,
    score,
}) => {
    return (
        <div className="bg-white rounded-lg p-6 shadow w-full hover:shadow-md transition-shadow duration-200">
            <h2 className="text-base font-bold mb-4 text-gray-900">Quick Statistics</h2>
            <div className="grid grid-cols-3 divide-x divide-gray-200">
                {/* Rank */}
                <div className="flex items-center gap-3 px-4 first:pl-0">
                    <div className="bg-yellow-100 rounded-full p-2 flex items-center justify-center">
                        <Image
                            src={trophy}
                            alt="Rank Icon"
                            className="w-7 h-7 object-contain"
                        />
                    </div>
                    <div>
                        <p className="text-xl font-semibold text-gray-900 mb-0.5">{rank}</p>
                        <p className="text-xs text-gray-500 uppercase tracking-wide">YOUR RANK</p>
                    </div>
                </div>

                {/* Percentile */}
                <div className="flex items-center gap-3 px-4">
                    <div className="bg-blue-100 rounded-full p-2 flex items-center justify-center">
                        <Image
                            src={clipboard}
                            alt="Percentile Icon"
                            className="w-7 h-7 object-contain"
                        />
                    </div>
                    <div>
                        <p className="text-xl font-semibold text-gray-900 mb-0.5">{percentile}%</p>
                        <p className="text-xs text-gray-500 uppercase tracking-wide">PERCENTILE</p>
                    </div>
                </div>

                {/* Correct Answers */}
                <div className="flex items-center gap-3 px-4">
                    <div className="bg-green-100 rounded-full p-2 flex items-center justify-center">
                        <Image
                            src={checkmark}
                            alt="Score Icon"
                            className="w-7 h-7 object-contain"
                        />
                    </div>
                    <div>
                        <p className="text-xl font-semibold text-gray-900 mb-0.5">{score}</p>
                        <p className="text-xs text-gray-500 uppercase tracking-wide">CORRECT ANSWERS</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default QuickStatistics;
