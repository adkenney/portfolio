import { motion, Transition, SVGMotionProps } from 'framer-motion';
export default function MenuButton({ isOpen }) {
  return (
    <div className="flex justify-end items-center">
      <motion.svg viewBox="0 0 12 12" height={24} width={24} overflow="visible">
        <motion.line x1="0" x2="4" y1="0" y2="0" stroke="white"></motion.line>
        <motion.line x1="0" x2="4" y1="2" y2="2" stroke="white"></motion.line>
        <motion.line x1="0" x2="4" y1="4" y2="4" stroke="white"></motion.line>
      </motion.svg>
    </div>
  );
}
