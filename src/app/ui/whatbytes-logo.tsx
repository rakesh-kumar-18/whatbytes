import { MapIcon } from '@heroicons/react/24/solid';

export default function WhatbytesLogo() {
    return (
        <div
            className={`flex flex-row items-center leading-none`}
        >
            <MapIcon className="h-8 w-8" />
            <p className="text-[30px] font-bold">WhatBytes</p>
        </div>
    );
}
