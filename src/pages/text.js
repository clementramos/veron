// first we will need to add an import for the Animate Presence component alongside the motion component
import { motion, AnimatePresence } from "framer-motion";
// For this example we will create a cube and use the useState hook to toggle its visibility while adding the exit animation to it
import { useState } from "react";
export default function App() {
// State to toggle visibility
  const [show, setShow] = useState(true);
<div classname="h-screen" key="a box"
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "20px",
        alignItems: "center",
      }}
    >
      <h1 style={{ position: "relative", marginTop: "200px" }}>
        Example exit animation with a Box
      </h1>
      <AnimatePresence>
        {show && (
          <motion.div
        //Note that the AnimatePresence component requires a key prop to identify the choice element in the React component tree
            key= "a box"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 100 }}
        //Specified Exit animation
            exit={{ opacity: 0, x: -150 }}
            style={{
              height: "140px",
              width: "140px",
              background: "blue",
              position: "relative",
            }}
          ></motion.div>
        )}
      </AnimatePresence>
      <button onClick={() => setShow(!show)} style={{padding:"15px 24px", fontSize:"22px"}} >{show? "Remove Cube": "Add Cube"}</button>
    </div>
}