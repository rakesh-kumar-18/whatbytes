import React, { useState } from "react";

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
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white rounded-lg max-w-lg w-full p-6">
                <div className="flex items-start justify-between mb-4">
                    <h3 className="text-xl font-bold">Update Scores</h3>
                    <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
                        &times;
                    </button>
                </div>
                <div className="space-y-6">
                    <div className="space-y-2">
                        <label className="block text-sm font-medium text-gray-700">
                            <span className="font-semibold">1. </span>Update your Rank
                        </label>
                        <input
                            type="number"
                            className="w-full border rounded-md p-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                            value={rank}
                            onChange={(e) => setRank(Number(e.target.value))}
                        />
                    </div>
                    <div className="space-y-2">
                        <label className="block text-sm font-medium text-gray-700">
                            <span className="font-semibold">2. </span>Update your Percentile
                        </label>
                        <input
                            type="number"
                            className="w-full border rounded-md p-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                            value={percentile}
                            onChange={(e) => setPercentile(Number(e.target.value))}
                        />
                    </div>
                    <div className="space-y-2">
                        <label className="block text-sm font-medium text-gray-700">
                            <span className="font-semibold">3. </span>Update your Current Score (out of 15)
                        </label>
                        <input
                            type="number"
                            className="w-full border rounded-md p-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                            value={score}
                            onChange={(e) => setScore(Number(e.target.value))}
                        />
                    </div>
                </div>
                <div className="mt-6 flex justify-end space-x-4">
                    <button
                        onClick={onClose}
                        className="text-gray-500 hover:text-gray-700 text-sm"
                    >
                        Cancel
                    </button>
                    <button
                        onClick={handleSave}
                        className="bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-800 transition-colors"
                    >
                        Save
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Modal;
