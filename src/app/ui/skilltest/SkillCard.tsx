"use client";

import React, { useState } from "react";
import Modal from "@/app/ui/skilltest/Modal";
import Image from "next/image";
import html from "../../../../public/html5-icon.png";

const SkillCard = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleModalOpen = () => setIsModalOpen(true);
    const handleModalClose = () => setIsModalOpen(false);

    return (
        <div className="flex justify-between items-center p-4 border rounded-md shadow-sm bg-white hover:shadow-md transition-shadow">
            <div className="flex items-center space-x-4">
                <Image
                    src={html}
                    alt="HTML5 Icon"
                    className="w-12 h-12 object-contain"
                />
                <div>
                    <h2 className="text-lg font-medium">Hyper Text Markup Language</h2>
                    <p className="text-sm text-gray-600">
                        Questions: 08 | Duration: 15 mins | Submitted on 5 June 2021
                    </p>
                </div>
            </div>
            <button
                onClick={handleModalOpen}
                className="bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-800 transition-colors"
            >
                Update
            </button>

            {isModalOpen && <Modal onClose={handleModalClose} />}
        </div>
    );
};

export default SkillCard;