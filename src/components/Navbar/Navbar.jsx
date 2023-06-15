import Link from 'next/link';
import { motion, useCycle, AnimatePresence } from 'framer-motion';
import MenuButton from './MenuButton';
import { navLinks } from '@/utils';
import logo from '../../../public/logo.svg';
import Logo from './Logo';

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
    <header className="fixed flex top-0 left-0 right-0 justify-between items-center px-4 py-2 bg-light-navy shadow-md z-10 md:px-10 lg:px-20 lg:py-6">
      <Logo />
      <div className="hidden lg:block">
        <nav>
          <ul className="flex justify-end gap-2">
            {navLinks.map(link => {
              return (
                <li key={link.key}>
                  <Link href={link.href}>{link.name}</Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
      <MenuButton isOpen={open} handleCycle={cycleOpen} />
      <AnimatePresence>
        {open && (
          <motion.aside
            className="fixed top-0 right-0 justify-center bg-light-navy"
            initial={{ width: 0 }}
            animate={{ width: 'min(65vw, 350px)', height: '100dvh' }}
            exit={{ width: 0, transition: { delay: 0.7, duration: 0.3 } }}
          >
            <motion.div
              className="mt-40"
              initial="closed"
              animate="open"
              exit="closed"
              variants={sideVariants}
            >
              <nav>
                <motion.ul className="text-center">
                  {navLinks.map(link => {
                    return (
                      <motion.li
                        className="px-8 pb-2"
                        key={link.key}
                        variants={itemVariants}
                        onClick={cycleOpen}
                      >
                        <Link href={link.href}>{link.name}</Link>
                      </motion.li>
                    );
                  })}
                  <motion.li className="mt-10">
                    <Link
                      href="resume.pdf"
                      className="cta-button text-lg p-4"
                      target="_blank"
                    >
                      resume
                    </Link>
                  </motion.li>
                </motion.ul>
              </nav>
            </motion.div>
          </motion.aside>
        )}
      </AnimatePresence>
    </header>
  );
}
