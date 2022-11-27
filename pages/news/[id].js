import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import useSWR from "swr";

const API_KEY = "FUI6V3X9uGfMR6h5OTT2DtlZUjV0ZYsR";

// export const getStaticPaths = async () => {

//   const topStories = await fetch(
//     `https://api.nytimes.com/svc/topstories/v2/us.json?api-key=${API_KEY}`
//   );

//   const stories = await topStories.json();

//   const paths = stories?.results?.map((story) => {
//     return {
//       params: { id: story?.title, category: story?.section },
//     };
//   });

//   return {
//     paths,
//     fallback: false,
//   };
// };

// export const getStaticProps = async (context) => {

//   const id = context.params.id;
//   const topStories = await fetch(
//     `https://api.nytimes.com/svc/topstories/v2/us.json?api-key=${API_KEY}`
//   );

//   const stories = await topStories.json();

//   return {
//     props: { stories },
//   };
// };

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const DetailsPage = ({ stories }) => {
  const router = useRouter();
  const { id, name } = router.query;

  const { data, error } = useSWR(
    `https://api.nytimes.com/svc/topstories/v2/${name}.json?api-key=${API_KEY}`,
    fetcher
  );

  const storyToDisplay = data?.results?.find((story) => story?.title === id);
  // const urls = window.location.href;
  // const pathname = new URL(urls)?.pathname;
  // console.log(data, "data", pathname, "idss", id, "name", name);

  if(error) return <h2>OOOOOPS Something wen wrong</h2>
  if(!data) return <h2>Loading...</h2>

  return (
    <div>
      <h1>{storyToDisplay?.title}</h1>
      <img
        className="hero-img"
        width={"100%"}
        height={300}
        src={storyToDisplay?.multimedia?.[0]?.url}
        alt="display"
      />
      <p>{storyToDisplay?.abstract}</p>
      <p>{storyToDisplay?.byline}</p>
      <Link href={storyToDisplay?.url}>Read full story</Link>
    </div>
  );
};

export default DetailsPage;
