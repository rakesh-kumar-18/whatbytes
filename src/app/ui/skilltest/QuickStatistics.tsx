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
        <div className="bg-white shadow-md rounded-lg p-4 w-full max-w-4xl mx-auto">
            <h2 className="text-lg font-bold mb-4">Quick Statistics</h2>
            <div className="flex flex-wrap items-center justify-between gap-4 md:gap-8">
                {/* Rank */}
                <div className="flex items-center space-x-4">
                    <div className="bg-yellow-100 rounded-full p-3 flex items-center justify-center">
                        <Image
                            src={trophy}
                            alt="Rank Icon"
                            className="w-8 h-8 object-contain"
                        />
                    </div>
                    <div className="text-center">
                        <p className="text-2xl font-semibold">{rank}</p>
                        <p className="text-gray-500 text-sm uppercase">Your Rank</p>
                    </div>
                </div>

                {/* Percentile */}
                <div className="flex items-center space-x-4">
                    <div className="bg-blue-100 rounded-full p-3 flex items-center justify-center">
                        <Image
                            src={clipboard}
                            alt="Percentile Icon"
                            className="w-8 h-8 object-contain"
                        />
                    </div>
                    <div className="text-center">
                        <p className="text-2xl font-semibold">{percentile}%</p>
                        <p className="text-gray-500 text-sm uppercase">Percentile</p>
                    </div>
                </div>

                {/* Score */}
                <div className="flex items-center space-x-4">
                    <div className="bg-green-100 rounded-full p-3 flex items-center justify-center">
                        <Image
                            src={checkmark}
                            alt="Score Icon"
                            className="w-8 h-8 object-contain"
                        />
                    </div>
                    <div className="text-center">
                        <p className="text-2xl font-semibold">{score}</p>
                        <p className="text-gray-500 text-sm uppercase">Correct Answers</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default QuickStatistics;
