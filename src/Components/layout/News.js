"use client"
import NewsRec from "../UI/NewsRec";


const News = () => {
    const newsRec=[
        {
            img:"/public/assets/images/news1.jpg",
            title:"In shock result, allies of jailed ex-leader Khan win most seats in Pakistan election",
            description:"Islamabad CNN—Independent candidates affiliated with jailed Pakistani political leader Imran Khans party won the most National Assembly seats in Pakistan’s "
        },
        {
            img:"/public/assets/images/news1.jpg",
            title:"Add expenses on the go",
            description:"Islamabad CNN—Independent candidates affiliated with jailed Pakistani political leader Imran Khans party won the most National Assembly seats in Pakistan’s "
        },
        {
            img:"/public/assets/images/news1.jpg",
            title:"Add expenses on the go",
            description:"Adding new entries in TravelSpend is quick and easy. It works offline and foreign currencies are automatically converted."
        },
        {
            img:"/public/assets/images/news1.jpg",
            title:"Add expenses on the go",
            description:"Adding new entries in TravelSpend is quick and easy. It works offline and foreign currencies are automatically converted."
        },
        {
            img:"/public/assets/images/news1.jpg",
            title:"Add expenses on the go",
            description:"Adding new entries in TravelSpend is quick and easy. It works offline and foreign currencies are automatically converted."
        },
        {
            img:"/public/assets/images/news1.jpg",
            title:"Add expenses on the go",
            description:"Adding new entries in TravelSpend is quick and easy. It works offline and foreign currencies are automatically converted."
        },
        {
            img:"/public/assets/images/news1.jpg",
            title:"Add expenses on the go",
            description:"Adding new entries in TravelSpend is quick and easy. It works offline and foreign currencies are automatically converted."
        },
        {
            img:"/public/assets/images/news1.jpg",
            title:"Add expenses on the go",
            description:"Adding new entries in TravelSpend is quick and easy. It works offline and foreign currencies are automatically converted."
        },
        
    ]
    return (
        
        <section className="newsRec-section">
            <div className="container mx-auto p-4">
                <div className="text-center text-5xl font-bold mb-16 text-black">Latest News</div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-3">
                    {newsRec.map((newsRec, index) => (
                        <NewsRec
                            key={`newsRec-${index}`}
                            img={newsRec.img}
                            title={newsRec.title}
                            description={newsRec.description}
                        />
                    ))}
                </div>
            </div>
            </section>
    );
};

export default News;