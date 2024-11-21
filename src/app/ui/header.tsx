'use client';

import React from 'react';
import Link from 'next/link';
import WhatbytesLogo from '@/app/ui/whatbytes-logo';
import { Bars3Icon } from '@heroicons/react/24/outline';
import { UserIcon } from '@heroicons/react/24/outline';

interface NavbarProps {
    setIsSidebarOpen: (isOpen: boolean) => void;
}

export default function Navbar({ setIsSidebarOpen }: NavbarProps) {
    return (
        <nav className="border-b border-gray-200 w-screen">
            <div className="max-w-8xl mx-auto px-3 py-4">
                <div className="flex justify-between items-center">
                    <div className="flex items-center">
                        <button
                            onClick={() => setIsSidebarOpen(true)}
                            className="sm:hidden p-2 rounded-md"
                            type="button"
                            aria-label="Open menu"
                        >
                            <Bars3Icon />
                        </button>
                        <Link href="/" className="flex-shrink-0 flex items-center">
                            <WhatbytesLogo />
                        </Link>
                    </div>
                    <div className="flex items-center space-x-3 md:space-x-4">
                        <UserIcon />
                    </div>
                </div>
            </div>
        </nav>
    );
}
