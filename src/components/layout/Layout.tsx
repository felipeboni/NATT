import { useState, useEffect, ReactNode } from "react";
import router, { useRouter } from "next/router";

import { signOut, useSession } from "next-auth/react";
import { AnimatePresence } from "framer-motion";

import { PageLoader } from "@/components/loaders";

import { Navbar } from "@/components/layout";
import toast from "react-hot-toast";
import axios from "axios";

type Props = {
  children: string | JSX.Element | JSX.Element[] | ReactNode
}

const Layout = ({ children }: Props) => {
  const { status, update: sessionUpdate } = useSession();
  const [loading, setLoading] = useState(true);

  const checkUserInfo = () => {
    // Do something on page change

    setTimeout(() => setLoading(false), 1000);
  }

  useEffect(() => {
    checkUserInfo();

    setTimeout(() => {
      setLoading(false);
    }, 1250);

    router.events.on("routeChangeStart", () => setLoading(true));
    router.events.on("routeChangeComplete", () => checkUserInfo());

    return () => {
      router.events.off("routeChangeStart", () => setLoading(true));
    };
  }, []);

  return (
    <>
      <AnimatePresence>{loading && <PageLoader />}</AnimatePresence>

      <div className={`flex justify-center flex-col`}>
        <Navbar />

        <main className="w-full mx-auto">
          {children}
        </main>
      </div>
    </>
  );
};

export { Layout };
