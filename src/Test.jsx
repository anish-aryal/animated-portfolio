import { motion } from "framer-motion";

const Test = () => {

    const variants ={
        visible:{opacity:1},
        hidden: {opacity:0}

    }

  return (
    <div className="course">
      <motion.div
        className="box"
        variants={variants}

      ></motion.div>
    </div>
  );
};

export default Test;
