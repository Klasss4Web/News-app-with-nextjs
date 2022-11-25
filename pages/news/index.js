import Link from "next/link";

import styles from "../../styles/News.module.css"

export const getStaticProps = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();

  return {
    props: { news: data },
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
