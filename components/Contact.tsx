"use client";

import {motion} from "framer-motion";
import EmailSection from "@/components/EmailSection"

export const Contact = () => {
    return( 
        <section id="contact" 
            className="overflow-x-clip py-32 text-white mx-auto px-0 md:px-4 lg:px-6 relative">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="grid lg:grid-cols-2 gap-16"
            >
                <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
                <div className="space-y-12">
                    <motion.h2
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-5xl sm:text-7xl font-bold text-gray-300">
                            Get in <span className="text-purple-300">touch</span>
                    </motion.h2>
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="p-8 rounded-2xl space-y-8 mx-2 md:mx-0"
                    >
                        <div className="space-y-2">
                            <p className="text-lg text-gray-300">Phone</p>
                            <a
                                href="tel:+918308082945"
                                className="text-2xl lg:text:4xl font-semibold hover:text-purple-300 transition duration-300 flex items-center gap-2"
                            >
                                +91 8308082945
                                <span className="text-gray-500">➚</span>
                            </a>
                        </div>
                        <div className="space-y-2">
                            <p className="text-lg text-gray-300">Phone</p>
                            <a
                                href="mailto:krunalkadu97@gmail.com"
                                className="text-xl lg:text:4xl font-semibold hover:text-purple-300 transition duration-300 flex items-center gap-2"
                            >
                                krunalkadu97@gmail.com
                                <span className="text-gray-500">➚</span>
                            </a>
                        </div>
                        <div className="space-y-2">
                            <p className="text-lg text-gray-300">Address</p>
                            <address
                                className="text-xl not-italic leading-relaxed"
                            >
                              plot no 4,  Old Sangvi <br/>
                                Pune, Maharashtra <br/>
                                India - 411027
                            </address>
                        </div>

                        
                    </motion.div>
                </div>
                <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.6 }}
                            className="w-full h-full min-h-[400px] glass space-y-8 p-4 rounded-2xl overflow-hidden relative mx-2 md:mx-0">
                             <EmailSection />
                        </motion.div>
            </motion.div>
        </section>
    )
}