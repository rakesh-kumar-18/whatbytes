'use client';

import {
    ChartBarIcon,
    TrophyIcon,
    DocumentIcon,
} from '@heroicons/react/24/outline';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

interface NavLinksProps {
    handleTabClick?: () => void;
}

const links = [
    { name: 'Dashboard', href: '/dashboard', icon: ChartBarIcon },
    { name: 'Skill Test', href: '/', icon: TrophyIcon },
    { name: 'Internship', href: '/internship', icon: DocumentIcon },
];

export default function NavLinks({ handleTabClick }: NavLinksProps) {
    const pathname = usePathname();

    return (
        <>
            {links.map((link) => {
                const LinkIcon = link.icon;
                return (
                    <Link
                        key={link.name}
                        href={link.href}
                        className={clsx(
                            "flex h-[48px] grow items-center justify-center gap-2 rounded-md p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3",
                            {
                                'bg-sky-100 text-blue-600': link.href === pathname,
                            }
                        )}
                        onClick={handleTabClick}
                    >
                        <LinkIcon className="w-6" />
                        <p className="md:block">{link.name}</p>
                    </Link>
                );
            })}
        </>
    );
}
