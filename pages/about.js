import Head from "next/head";

const About = () => {
  return (
    <div>
      <Head>
        <title>News Updates | About Us</title>
        <meta name="description" content="Your one stop news site" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>About Us</h1>
      <p>
        At news update we believe that everyone should have access to latest
        news irrespective of where they find themselves provided there is an
        internet connection available in that area.
      </p>
      <p>
        We are connecting with some of the most reputable media houses in the world and bringing to your doorsteps news updates from different sources without you switching from one media outlet to another.
      </p>
    </div>
  );
};

export default About;
