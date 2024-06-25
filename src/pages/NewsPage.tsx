import { useEffect, useState } from "react";
import News from "../components/News";
import Pagination from "../components/Pagination";
import authors from "../constants/authors.json";
import news from "../constants/news.json";

function NewsPage() {
  const [allNews, setAllNews] = useState<any[]>([]);
  const [allAuthors, setAllAuthors] = useState<any[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [newsPerPage] = useState(1);

  useEffect(() => {
    setAllNews(news);
    setAllAuthors(authors);
  }, []);

  //Get Current News
  const indexOfLastNews = currentPage * newsPerPage;
  const indexofFirstNews = indexOfLastNews - newsPerPage;
  const currentNews = allNews.slice(indexofFirstNews, indexOfLastNews);

  //Change Page
  const paginate = (pageNumber: any) => setCurrentPage(pageNumber);

  return (
    <div>
      <News news={currentNews} authors={allAuthors} />
      <Pagination
        newsPerPage={newsPerPage}
        totalNews={news.length}
        paginate={paginate}
      />
    </div>
  );
}

export default NewsPage;
