import Head from 'next/head';
import Navbar from '../components/Navbar';

function About() {
  return (
    <>
      <Head>
        <title>About</title>
      </Head>

      <Navbar />

      <section className="hero">
        <div className="container">
          <div className="text-wrapper w-full">
            <h1 data-test-id="pageTitle" className="title">
              About
            </h1>
            <p className="description">
              I'm Lars, a software product manager who's learning to code. The
              last ~5 years I spent in South-East Asia and drove product
              development at various companies. Now I'm in Vienna and upleveling
              my tech skills.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
