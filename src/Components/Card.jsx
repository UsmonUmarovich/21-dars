import React from 'react'
import { motion } from 'framer-motion'

export const Card = () => {
    return (
        <motion.div
        initial={{
            opacity: 0,
            y: -100,
        }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{once: true, amount: 1 }}
        transition={{duration: 1, bounce: 0.5, type: "spring"}}
        class="card card-compact w-96 bg-base-100 shadow-xl">
            <figure><img src="https://api.lorem.space/image/shoes?w=400&h=225" alt="Shoes" /></figure>
            <div class="card-body">
                <h2 class="card-title">Shoes!</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div class="card-actions justify-end">
                    <button class="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </motion.div>
    )
}
