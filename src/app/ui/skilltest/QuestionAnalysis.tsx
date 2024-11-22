'use client';

import React, { useRef, useEffect, useState } from 'react';
import {
    Chart,
    ArcElement,
    Tooltip,
    Legend,
    DoughnutController,
} from 'chart.js';
import Image from 'next/image';
import target from '../../../../public/target-icon.jpg';

Chart.register(
    ArcElement,
    Tooltip,
    Legend,
    DoughnutController
);

interface QuestionAnalysisProps {
    totalQuestions: number;
    correctAnswers: number;
}

const QuestionAnalysis: React.FC<QuestionAnalysisProps> = ({
    totalQuestions,
    correctAnswers,
}) => {
    const chartRef = useRef<HTMLCanvasElement>(null);
    const [chartInstance, setChartInstance] = useState<Chart<'doughnut'> | null>(null);

    useEffect(() => {
        const ctx = chartRef.current?.getContext('2d');
        if (!ctx) return;

        if (chartInstance) {
            chartInstance.destroy();
        }

        const newChartInstance = new Chart<'doughnut'>(ctx, {
            type: 'doughnut',
            data: {
                labels: ['Correct', 'Incorrect'],
                datasets: [
                    {
                        data: [correctAnswers, totalQuestions - correctAnswers],
                        backgroundColor: ['#3b82f6', '#e5e7eb'],
                        hoverBackgroundColor: ['#2563eb', '#d1d5db'],
                        borderWidth: 0,
                    },
                ],
            },
            options: {
                responsive: true,
                cutout: '70%',
                plugins: {
                    legend: {
                        display: false,
                    },
                    tooltip: {
                        callbacks: {
                            label: (context) => `${context.label}: ${context.raw}`,
                        },
                    },
                },
            },
        });

        setChartInstance(newChartInstance);
    }, [correctAnswers, totalQuestions]);

    return (
        <div className="bg-white rounded-lg p-6 w-full max-w-3xl mx-auto shadow hover:shadow-md transition-shadow duration-200">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-bold">Question Analysis</h2>
                <p className="text-blue-600 text-lg font-bold">
                    {correctAnswers}/{totalQuestions}
                </p>
            </div>
            <p className="text-sm text-gray-600 mb-6">
                You scored <span className="font-semibold">{correctAnswers} question</span>{' '}
                correct out of {totalQuestions}. However, it still needs some improvements.
            </p>
            <div className="relative w-48 h-48 mx-auto">
                <canvas ref={chartRef}></canvas>
                <div className="absolute inset-0 flex items-center justify-center">
                    <Image
                        src={target}
                        alt="Target Icon"
                        className="w-12 h-12 object-contain"
                    />
                </div>
            </div>
        </div>
    );
};

export default QuestionAnalysis;
