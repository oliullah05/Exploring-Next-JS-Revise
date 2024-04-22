"use client"

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const CustomLink = ({path,children,prefetch=true}) => {
    const pathname = usePathname()
    const activeLink = pathname===path;
    return (
    <Link prefetch={prefetch} className={activeLink?"text-blue-500":""} href={path}>{children}</Link>
    );
};

export default CustomLink;