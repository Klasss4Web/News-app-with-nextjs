const API_KEY = "FUI6V3X9uGfMR6h5OTT2DtlZUjV0ZYsR";

export const getStaticPaths = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();

  const paths = data?.map((feed) => {
    return {
      params: { id: feed.id.toString() },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${id}`
  );
  const data = await response.json();

  return {
    props: { news: data },
  };
};

const DetailsPage = ({ news }) => {
  return (
    <div>
      <h1>{news?.name}</h1>
      <p>{news?.email}</p>
      <p>{news?.website}</p>
      <p>{news?.address.city}</p>
    </div>
  );
};

export default DetailsPage;
