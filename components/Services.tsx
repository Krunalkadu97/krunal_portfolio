"use client";

import { services } from "@/components/helper/constants";

export const Services = () => {
   
    return(
        <section className="text-white py-20 ">
            <div className="container mx-auto flex flex-col md:flex-row">
                <div className="md:w-1/4 pr-8 mb-12 md:mb-0">
                    <h2 className="text-6xl text-purple-300 font-extrabold sticky top-20">SERVICES</h2>
                </div>
                <div className="md:w-3/4">
                    {services.map((service) => (
                        <div key={service.id} className="mb-16 flex items-start">
                            <div className="text-gray-300 font-bold text-5xl mr-6">
                                {service.id}
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
                                <p >{service.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}