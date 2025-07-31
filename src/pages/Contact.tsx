import { motion } from "framer-motion";

const Contact = (props) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.4 }}
  >
    {/* ...existing Contact content... */}
  </motion.div>
);

export default Contact;
