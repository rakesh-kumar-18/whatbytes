import React, { useState } from "react";
import html from "../../../../public/html5-icon.png";
import Image from "next/image";

interface ModalProps {
    currentRank: number;
    currentPercentile: number;
    currentCorrectScore: number;
    onClose: () => void;
    onSubmit: (rank: number, percentile: number, score: number) => void;
}

const Modal: React.FC<ModalProps> = ({
    currentRank,
    currentPercentile,
    currentCorrectScore,
    onClose,
    onSubmit,
}) => {
    const [rank, setRank] = useState(currentRank);
    const [percentile, setPercentile] = useState(currentPercentile);
    const [score, setScore] = useState(currentCorrectScore);

    const handleSave = () => {
        onSubmit(rank, percentile, score);
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
            <div className="bg-white rounded-2xl w-full max-w-xl mx-4">
                <div className="p-8">
                    {/* Header with HTML5 logo */}
                    <div className="flex items-start justify-between mb-12">
                        <h2 className="text-2xl font-bold">Update scores</h2>
                        <Image
                            src={html}
                            alt="HTML5 logo"
                            className="w-8 h-8"
                        />
                    </div>

                    {/* Form fields */}
                    <div className="space-y-8">
                        <div className="flex items-start">
                            <div className="flex gap-4 w-full">
                                <span className="flex items-center justify-center bg-[#1a237e] text-white rounded-full w-8 h-8 text-base font-medium flex-shrink-0">
                                    1
                                </span>
                                <div className="flex-grow">
                                    <label className="block text-base mb-2">
                                        Update your <span className="font-bold">Rank</span>
                                    </label>
                                    <input
                                        type="text"
                                        value={rank}
                                        onChange={(e) => setRank(Number(e.target.value))}
                                        className="w-full px-4 py-2.5 border border-blue-200 rounded-lg focus:outline-none focus:border-blue-500"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="flex items-start">
                            <div className="flex gap-4 w-full">
                                <span className="flex items-center justify-center bg-[#1a237e] text-white rounded-full w-8 h-8 text-base font-medium flex-shrink-0">
                                    2
                                </span>
                                <div className="flex-grow">
                                    <label className="block text-base mb-2">
                                        Update your <span className="font-bold">Percentile</span>
                                    </label>
                                    <input
                                        type="text"
                                        value={percentile}
                                        onChange={(e) => setPercentile(Number(e.target.value))}
                                        className="w-full px-4 py-2.5 border border-blue-200 rounded-lg focus:outline-none focus:border-blue-500"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="flex items-start">
                            <div className="flex gap-4 w-full">
                                <span className="flex items-center justify-center bg-[#1a237e] text-white rounded-full w-8 h-8 text-base font-medium flex-shrink-0">
                                    3
                                </span>
                                <div className="flex-grow">
                                    <label className="block text-base mb-2">
                                        Update your <span className="font-bold">Current Score</span> (out of 15)
                                    </label>
                                    <input
                                        type="text"
                                        value={score}
                                        onChange={(e) => setScore(Number(e.target.value))}
                                        className="w-full px-4 py-2.5 border border-blue-200 rounded-lg focus:outline-none focus:border-blue-500"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Action buttons */}
                    <div className="flex justify-end items-center gap-4 mt-12">
                        <button
                            onClick={onClose}
                            className="px-6 py-2.5 border border-gray-200 rounded-lg text-base font-medium text-gray-600 hover:bg-gray-50"
                        >
                            cancel
                        </button>
                        <button
                            onClick={handleSave}
                            className="bg-[#1a237e] text-white px-6 py-2.5 rounded-lg text-base font-medium hover:bg-[#151b60] transition-colors flex items-center gap-2"
                        >
                            save
                            <svg
                                className="w-5 h-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                                />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Modal;
