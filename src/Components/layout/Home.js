
import Image from "next/image";
import News from "./News";

const Home = () => {
    return (
        <section className='container mx-auto pt-10'>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-3">
                <div className="p-5">
                    <h1 className='text-3xl font-bold text-black hover:text-red-900'>With over half the seats counted, Imrans supporters lead in Pakistan polls</h1>
                    <h1 className='pt-3 text-sm text-gray-700'>Of the 136 seats counted, independent candidates backed by Imrans party PTI won 49,<br/>
                     ex-PM Nawaz Sharifs PML-N won 42, while the PPP of Bilawal Bhutto Zardari,<br/> the son of assassinated premier</h1>
                     <Image
                        className="pt-2 "
                        src="/assets/images/imran.jpg"
                        width={500}
                        height={500}
                        alt="Picture of the author"
                    />
                </div>
                <div>
                    <News/>
                </div>
            </div>
        </section>
    );
};

export default Home;