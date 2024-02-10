import Link from "next/link";
import NewsCard from "../UI/NewsCard";

async function getData() {
  let res = await fetch(' https://newsdata.io/api/1/news?apikey=pub_37259a50dd3f00fec30ca5593f675634892aa&language=en&category=technology');
  return res.json();
}

const NewsList = async () => {
    let newsListData = await getData();

    let newsItems = newsListData.results;

  return (
    <div>
      <section>
            <div className="container mx-auto">
                <div className="text-center text-3xl font-bold pt-10 text-black">
                    News Category
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {
                        newsItems.map((NewsList,index)=>(
                            <NewsCard
                                key={`NewsList-${index}`}
                                Category={NewsList.category}
                                title={NewsList.title}
                                link={NewsList.link}
                                description={NewsList.description}
                            />  
                        ))}
                </div>

                <div className="flex justify-center mt-8 mb-5 text-2xl font-bold">
                    <Link href="/">Show All</Link> 
                </div>
            </div>
        </section>
    </div>
  );
};

export default NewsList;
