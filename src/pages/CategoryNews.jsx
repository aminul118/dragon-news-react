import { useLoaderData } from "react-router-dom";
import NewsCard from "../components/layout-components/NewsCard";



const CategoryNews = () => {
 const {data: news} = useLoaderData()
//  console.log(news);

    return (
        <div className="space-y-4">
          <h2 className="text-xl font-bold">Dragon News Home</h2>
          <p>({news.length}) News found in this category</p>
          <div className="space-y-4 ">
            {
                news.map(singleNews => <NewsCard key={singleNews._id} news ={singleNews}/>)
            }
          </div>

            
        </div>
    );
};

export default CategoryNews;