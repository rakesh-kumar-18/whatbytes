'use client';

import React, { useState } from 'react';
import SkillCard from "@/app/ui/skilltest/SkillCard";
import QuickStatistics from "@/app/ui/skilltest/QuickStatistics";
import SyllabusWiseAnalysis from "@/app/ui/skilltest/SyllabusWiseAnalysis";
import ComparisonGraph from "@/app/ui/skilltest/ComparisonGraph";
import QuestionAnalysis from "@/app/ui/skilltest/QuestionAnalysis";
import Modal from "@/app/ui/skilltest/Modal";

export default function Home() {
  const [rank, setRank] = useState(1);
  const [percentile, setPercentile] = useState(30);
  const [currentScore, setCurrentScore] = useState(10);
  const totalQuestions = 15;
  const averagePercentile = 72; // Fixed value
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleUpdate = (newRank: number, newPercentile: number, newScore: number) => {
    setRank(newRank);
    setPercentile(newPercentile);
    setCurrentScore(newScore);
    setIsModalOpen(false);
  };

  return (
    <>
      <div className="p-6 bg-gray-50">
        <h1 className="text-2xl font-bold mb-6">Skill Test</h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Left Section */}
          <div className="space-y-6">
            <SkillCard onUpdate={() => setIsModalOpen(true)} />
            <QuickStatistics rank={rank} percentile={percentile} score={`${currentScore} / ${totalQuestions}`} />
            <ComparisonGraph userPercentile={percentile} averagePercentile={averagePercentile} />
          </div>

          {/* Right Section */}
          <div className="space-y-6">
            <SyllabusWiseAnalysis />
            <QuestionAnalysis totalQuestions={totalQuestions} correctAnswers={currentScore} />
          </div>
        </div>

        {/* Update Button */}
        <div className="mt-8 flex justify-center">
          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-blue-500 text-white px-4 py-2 rounded-md"
          >
            Update Values
          </button>
        </div>

        {/* Modal for Updates */}
        {isModalOpen && (
          <Modal
            currentRank={rank}
            currentPercentile={percentile}
            currentCorrectScore={currentScore}
            onClose={() => setIsModalOpen(false)}
            onSubmit={handleUpdate}
          />
        )}
      </div>
    </>
  );
}
