import { motion } from "framer-motion"

const PageLoader = () => {
    return (
        <motion.div key="pageLoader"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/40 z-[9999] h-[100dvh] w-[100dvw] flex items-center justify-center"
        >
            <img src="/favicon.ico" className="w-48 h-auto" />
        </motion.div>
    )
}

export { PageLoader }