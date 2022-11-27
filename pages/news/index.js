import Link from "next/link";
import { useRouter } from "next/router";

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

const News = ({ news, stories }) => {

  console.log("stories", stories)
  return (
    <div>
      <h2>All News</h2>
      {stories?.results?.map((story, index) => (
        <div className={styles.single} key={index}>
          <Link href={`/news/${story?.title}?name=us`}>
            <h3>{story?.title}</h3>
          </Link>
          <p>{story?.abstract}</p>
        </div>
      ))}
    </div>
  );
};

export default News;
