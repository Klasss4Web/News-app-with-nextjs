import Head from "next/head";
import Link from "next/link";
import styles from "../../styles/Categories.module.css";

const Categories = () => {
  return (
    <div>
      <Head>
        <title>News Updates | Categories</title>
        <meta name="description" content="Your one stop news site" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.container}>
        <Link className={styles.card} href={`/categories/arts`}>
          <h2>Arts</h2>
        </Link>

        <Link className={styles.card} href={`/categories/science`}>
          <h2>Science</h2>
        </Link>
      </div>
      <div className={styles.container}>
        <Link className={styles.card} href={`/categories/lists`}>
          <h2>Articles</h2>
        </Link>
        <Link className={styles.card} href={`/categories/world`}>
          <h2>World Events</h2>
        </Link>
      </div>
      <div className={styles.container}>
        <Link className={styles.card} href="">
          <h2>Movies</h2>
        </Link>
        <Link className={styles.card} href={`/categories/us`}>
          <h2>Latest</h2>
        </Link>
      </div>
      <div className={styles.container}>
        <Link className={styles.card} href={`/categories/home`}>
          <h2>Home</h2>
        </Link>
      </div>
    </div>
  );
};

export default Categories;
