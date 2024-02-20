import { Bars3Icon } from '@heroicons/react/24/solid'
import Link from 'next/link';
import { useState } from 'react'
import { Menu } from './Menu';
import { AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const [openMenu, setOpenMenu] = useState(false);

    return (
        <>
            <AnimatePresence>
                {openMenu && <Menu setOpenMenu={setOpenMenu} />}
            </AnimatePresence>


            <nav className="fixed top-0 left-0 w-full mx-auto right-0 z-[998] h-[70px] px-4 bg-white">
                <button onClick={() => setOpenMenu(true)} className="flex items-center justify-center h-full">
                    <Bars3Icon className="w-10 h-10" />
                </button>
            </nav>
        </>
    )
}

export { Navbar }