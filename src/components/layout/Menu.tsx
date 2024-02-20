import { ArrowLeftOnRectangleIcon, XMarkIcon } from "@heroicons/react/24/solid";
import Link from "next/link"
import { useRouter } from "next/router";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { Portal } from "react-portal"

import { motion } from "framer-motion";
import { signOut, useSession } from "next-auth/react"


interface MenuProps {
    setOpenMenu: Dispatch<SetStateAction<boolean>>
}

const Menu = ({ setOpenMenu }: MenuProps) => {
    const { status } = useSession();
    const router = useRouter();

    const isRouteActive = (route: string) => {
        return router.pathname == `${route}`;
    }

    const routes = {
        unauth: [
            {
                href: "/",
                name: "#"
            },
        ],
        auth: [
            {
                href: "/",
                name: "#"
            },
        ]
    }

    return (
        <Portal>
            <motion.div
                key="menu"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed flex flex-col leading-none gap-5 text-4xl text-primary-500 font-bold items-center justify-between inset-0 z-[99998] h-[100dvh] w-[100dvw] bg-white py-20">
                <button onClick={() => setOpenMenu(false)}>
                    <XMarkIcon className="w-12 h-12" />
                </button>

                <div className="flex flex-col items-center justify-center gap-5">
                    {routes[status == "authenticated" ? "auth" : "unauth"].map((route, i) => (
                        <Link
                            key={i}
                            onClick={() => setOpenMenu(isRouteActive(route.href) ? true : false)}
                            className="transition-all"
                            href={route.href}
                            style={{
                                opacity: isRouteActive(route.href) ? 1 : 0.5,
                                transform: isRouteActive(route.href) ? "scale(1.1)" : "scale(1)"
                            }}
                        >
                            {route.name}
                        </Link>
                    ))}
                </div>

                <div className="flex items-center justify-center gap-3" style={{ opacity: status == "authenticated" ? 1 : 0 }}>
                    <ArrowLeftOnRectangleIcon className="w-8 h-8 mt-px" />

                    <button
                        onClick={() => {
                            setOpenMenu(false);
                            signOut();
                        }}
                        className="leading-none transition-all"
                    >
                        Sair
                    </button>
                </div>

            </motion.div>
        </Portal>
    )
}

export { Menu }