'use client';

import React, { useEffect, useRef, useState } from 'react';
import {
    Chart,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Tooltip,
    Title,
    LineController,
} from 'chart.js';

Chart.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    LineController,
    Tooltip,
    Title
);

interface ComparisonGraphProps {
    userPercentile: number;
    averagePercentile: number;
}

const ComparisonGraph: React.FC<ComparisonGraphProps> = ({
    userPercentile,
    averagePercentile,
}) => {
    const chartRef = useRef<HTMLCanvasElement>(null);
    const [chartInstance, setChartInstance] = useState<Chart | null>(null);

    const dataPoints = [5, 10, 20, 40, 90, 70, 50, 30, 10, 5];
    const labels = [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

    useEffect(() => {
        const ctx = chartRef.current?.getContext('2d');
        if (!ctx) return;

        if (chartInstance) {
            chartInstance.destroy();
        }

        const newChartInstance = new Chart(ctx, {
            type: 'line',
            data: {
                labels,
                datasets: [
                    {
                        label: 'Distribution of Percentile',
                        data: dataPoints,
                        borderColor: '#6366F1',
                        backgroundColor: 'rgba(99, 102, 241, 0.2)',
                        tension: 0.4,
                        pointRadius: 3,
                    },
                ],
            },
            options: {
                responsive: true,
                plugins: {
                    tooltip: {
                        callbacks: {
                            label: (context) => `Number of Students: ${dataPoints[context.dataIndex]}`,
                        },
                    },
                },
                scales: {
                    x: {
                        ticks: { maxTicksLimit: 10 },
                    },
                    y: {
                        beginAtZero: true,
                    },
                },
                elements: {
                    point: {
                        radius: 0,
                    },
                },
            },
        });

        setChartInstance(newChartInstance);
    }, [userPercentile]);

    return (
        <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-3xl mx-auto">
            <h2 className="text-lg font-bold mb-4">Comparison Graph</h2>
            <p className="text-sm text-gray-600 mb-4">
                You scored <span className="font-semibold">{userPercentile}%</span> percentile which is{' '}
                {userPercentile < averagePercentile ? 'lower' : 'higher'} than the average percentile{' '}
                <span className="font-semibold">{averagePercentile}%</span> of all the engineers who took
                this assessment.
            </p>
            <div className="relative">
                <canvas ref={chartRef}></canvas>
                <div
                    className="absolute text-sm text-purple-600 font-semibold"
                    style={{
                        bottom: `${userPercentile}%`,
                        left: `${userPercentile}%`,
                    }}
                >
                    Your Percentile
                </div>
            </div>
        </div>
    );
};

export default ComparisonGraph;
