import Link from "next/link";

import styles from "../../styles/News.module.css"

const API_KEY = "FUI6V3X9uGfMR6h5OTT2DtlZUjV0ZYsR";

export const getStaticProps = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();

  const topStories = await fetch(
    `https://api.nytimes.com/svc/topstories/v2/us.json?api-key=${API_KEY}`
  );

  const stories = await topStories.json()

  return {
    props: { news: data, stories },
  };
};

const News = ({ news }) => {
  return (
    <div>
      <h2>All News</h2>
      {news?.map((feed) => (
        <div key={feed?.id}>
          <Link className={styles.single} href={`/news/${feed.id}`}>
            <h3>{feed?.name}</h3>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default News;
