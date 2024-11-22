"use client";

import React from "react";
import Image from "next/image";
import html from "../../../../public/html5-icon.png";

interface SkillCardProps {
    onUpdate: () => void;
}

const SkillCard: React.FC<SkillCardProps> = ({ onUpdate }) => {
    return (
        <div className="w-full bg-white rounded-lg shadow hover:shadow-md transition-shadow duration-200">
            <div className="flex justify-between items-center p-4 sm:p-5">
                <div className="flex items-center gap-4">
                    <div className="flex-shrink-0">
                        <Image
                            src={html}
                            alt="HTML5 Icon"
                            className="w-10 h-10 sm:w-12 sm:h-12 object-contain"
                            priority
                        />
                    </div>
                    <div className="min-w-0">
                        <h2 className="text-base sm:text-lg font-medium text-gray-900 mb-0.5">
                            Hyper Text Markup Language
                        </h2>
                        <p className="text-xs sm:text-sm text-gray-600 whitespace-normal">
                            Questions: 08 | Duration: 15 mins | Submitted on 5 June 2021
                        </p>
                    </div>
                </div>
                <button
                    onClick={onUpdate}
                    className="ml-4 px-4 py-2 bg-[#1a237e] text-white text-sm font-medium rounded hover:bg-[#151b60] transition-colors duration-200 flex-shrink-0"
                >
                    Update
                </button>
            </div>
        </div>
    );
};

export default SkillCard;
