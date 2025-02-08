"use client";

const services = [
    {
        id: '01',
        title: 'Mobile App Development',
        desc: 'We build mobile applications that help businesses for better operational efficiency and engagement.'
    },
    {
        id: '02',
        title: 'Web Development',
        desc: 'We build websites that serve as powerful marketing tools and bring memorable brand experiences.'
    },
    {
        id: '03',
        title: 'SEO Optimization',
        desc: 'Enhance your business online presence by optimizing your website following best SEO practices.'
    },
    {
        id: '04',
        title: 'UI/UX Design',
        desc: 'Create a digital experience that matches expectations and empowers your business.'
    },
    {
        id: '05',
        title: 'Digital Marketing',
        desc: 'We provide a range of marketing services from social media to content marketing and email marketing.'
    },
    {
        id: '06',
        title: 'Social Media Marketing',
        desc: 'We create and manage top-performing social media campaigns for businesses.'
    },
    {
        id: '07',
        title: 'Content Creation',
        desc: 'Our team of content creators create engaging content that resonates with your target audience.'
    },
]
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