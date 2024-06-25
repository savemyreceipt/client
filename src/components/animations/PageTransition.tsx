import { motion } from "framer-motion";

export const PageTransition = ({ key, children }: { key: string; children: React.ReactNode }) => {
    return (
        <motion.main
            key={key}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
        >
            {children}
        </motion.main>
    );
};
