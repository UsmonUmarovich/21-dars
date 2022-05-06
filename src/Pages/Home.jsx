import React from 'react'
import { motion } from 'framer-motion'

export const Home = () => {
  return (
      <motion.div 
      initial={{opacity: 0, x:100 }} 
      animate={{opacity: 1, x:0}}
      exit={{opacity: 0, x: -100}}
      transition={{duration: 0.3}}
      class="hero min-h-screen bg-base-100">
        <div class="hero-content text-center">
          <div class="max-w-md">
            <h1 class="text-5xl font-bold">Hello there</h1>
            <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
            <button class="btn btn-primary">Get Started</button>
          </div>
        </div>
      </motion.div>
  )
}