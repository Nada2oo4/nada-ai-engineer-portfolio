"use client";
import { motion } from "framer-motion";
import type { ReactNode } from "react";
export function Reveal({children,className="",delay=0}:{children:ReactNode;className?:string;delay?:number}) {
  return <motion.div initial={{opacity:0,y:24}} whileInView={{opacity:1,y:0}} viewport={{once:true,amount:.15}} transition={{duration:.65,delay,ease:[.22,1,.36,1]}} className={className}>{children}</motion.div>;
}
