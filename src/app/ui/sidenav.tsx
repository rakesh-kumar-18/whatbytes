'use client';

import React from 'react';
import NavLinks from '@/app/ui/nav-links';
import { XMarkIcon } from '@heroicons/react/24/solid';
import WhatbytesLogo from '@/app/ui/whatbytes-logo';

interface SidebarProps {
    isSidebarOpen: boolean;
    setIsSidebarOpen: (isOpen: boolean) => void;
}

export default function Sidebar({
    isSidebarOpen,
    setIsSidebarOpen,
}: SidebarProps) {
    const handleTabClick = () => {
        setIsSidebarOpen(false);
    };

    return (
        <>
            {isSidebarOpen && (
                <div
                    className="fixed inset-0 z-40 md:hidden"
                    onClick={() => setIsSidebarOpen(false)}
                ></div>
            )}

            <div
                className={`fixed top-0 left-0 z-50 h-full w-4/5 max-w-xs transform transition-transform duration-300 ease-in-out ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
                    } md:translate-x-0 md:static md:w-72 border-r border-gray-200`}
            >
                <div className="flex flex-col overflow-y-auto px-3 py-4 h-full bg-white">
                    <div className="mb-8">
                        <div className="flex items-center justify-between mb-6 md:hidden">
                            <div className="flex space-x-1 items-center">
                                <WhatbytesLogo />
                            </div>
                            <XMarkIcon onClick={() => setIsSidebarOpen(false)} className='h-6 w-6' />
                        </div>

                        <nav className="space-y-3">
                            <NavLinks handleTabClick={handleTabClick} />
                        </nav>
                    </div>
                </div>
            </div>
        </>
    );
}
