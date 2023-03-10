import Link from "next/link";
import { useRouter } from "next/router";
import styles from "../../styles/Categories.module.css";
import useSWR from "swr";
import { Loading } from "../../components/Loading";
import Head from "next/head";

const API_KEY = "FUI6V3X9uGfMR6h5OTT2DtlZUjV0ZYsR";

const DetailsPage = ({ stories }) => {
  const fetcher = (...args) => fetch(...args).then((res) => res.json());

  const router = useRouter();
  const { categories } = router.query;

  const { data, error } = useSWR(
    `https://api.nytimes.com/svc/topstories/v2/${categories}.json?api-key=${API_KEY}`,
    fetcher
  );

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //        const topStories = await fetch(
  //        `https://api.nytimes.com/svc/topstories/v2/${categories}.json?api-key=${API_KEY}`
  //      );

  //      const stories = await topStories.json();
  //      setData(stories)
  //     } catch (err) {
  //       console.log("Error", err.response)
  //     }
  //   }

  //   fetchData();
  // },[])

  // const storyToDisplay = stories?.results?.find((story) => story?.title === id);

  // console.log("categories, data", data);
  if (error) return <h2>OOOOOPS Something wen wrong</h2>;
  if (!data) return <Loading />;

  return (
    <div>
      <Head>
        <title>News Updates | Category: {categories?.toUpperCase()}</title>
        <meta name="description" content="Your one stop news site" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
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
