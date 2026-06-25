import { motion } from "framer-motion";

function Navbar() {
  return (
    <motion.nav
      className="navbar"
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <motion.div
        className="logo"
        whileHover={{ scale: 1.05 }}
      >
        BYTE Exchange
      </motion.div>

      <div className="nav-links">
        <motion.span whileHover={{ scale: 1.1 }}>
          Dashboard
        </motion.span>

        <motion.span whileHover={{ scale: 1.1 }}>
          Order Book
        </motion.span>

        <motion.span whileHover={{ scale: 1.1 }}>
          Trades
        </motion.span>
      </div>
    </motion.nav>
  );
}

export default Navbar;