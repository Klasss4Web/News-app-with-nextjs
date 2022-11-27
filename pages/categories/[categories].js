import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import styles from "../../styles/Categories.module.css";

const API_KEY = "FUI6V3X9uGfMR6h5OTT2DtlZUjV0ZYsR";


const DetailsPage = ({ stories }) => {

  const [data, setData] = useState([])
  
  const router = useRouter();
  const { categories } = router.query;

  useEffect(() => {
    const fetchData = async () => {
      try {
         const topStories = await fetch(
         `https://api.nytimes.com/svc/topstories/v2/${categories}.json?api-key=${API_KEY}`
       );

       const stories = await topStories.json();
       setData(stories)
      } catch (err) {
        console.log("Error", err.response)
      }
    }

    fetchData();
  },[])

  const storyToDisplay = stories?.results?.find((story) => story?.title === id);

  // console.log("categories, data", data);

  return (
    <div>
      <h2>{categories?.toUpperCase()}</h2>
      {data?.results?.map((story, index) => (
        <div className={styles.single} key={index}>
          <Link href={`/news/${story?.title}?name=${categories}`}>
            <h3>{story?.title}</h3>
          </Link>
          <p>{story?.abstract}</p>
        </div>
      ))}
    </div>
  );
};

export default DetailsPage;
