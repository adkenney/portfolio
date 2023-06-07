import { useState } from 'react';
import { motion, useCycle, AnimatePresence } from 'framer-motion';
import MenuButton from './MenuButton';

export default function Navbar() {
  const [open, cycleOpen] = useCycle(false, true);
  const sideVariants = {
    closed: {
      transition: {
        staggerChildren: 0.2,
        staggerDirection: -1,
      },
    },
    open: {
      transition: {
        staggerChildren: 0.2,
        staggerDirection: 1,
      },
    },
  };
  const itemVariants = {
    closed: {
      opacity: 0,
    },
    open: { opacity: 1 },
  };
  return (
    <header>
      <nav className="flex justify-end">
        <div className="hidden lg:block">
          <ul className="flex justify-end gap-2">
            <li>Home</li>
            <li>About</li>
            <li>Projects</li>
            <li>Contact</li>
          </ul>
        </div>
        <MenuButton isOpen={open} handleCycle={cycleOpen} />
        <AnimatePresence>
          {open && (
            <motion.aside
              initial={{ width: 0 }}
              animate={{ width: '50%', height: '100vh' }}
              exit={{ width: 0, transition: { delay: 0.7, duration: 0.3 } }}
              className="absolute top-0 bg-light-navy right-0 z-10 sm:hidden"
            >
              <motion.div
                initial="closed"
                animate="open"
                exit="closed"
                variants={sideVariants}
              >
                <motion.ul className="flex flex-col mt-20">
                  <motion.li variants={itemVariants}>Home</motion.li>
                  <motion.li variants={itemVariants}>About</motion.li>
                  <motion.li variants={itemVariants}>Projects</motion.li>
                  <motion.li variants={itemVariants}>Contact</motion.li>
                </motion.ul>
              </motion.div>
            </motion.aside>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
