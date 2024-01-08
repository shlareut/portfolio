import Head from 'next/head';
import Navbar from '../components/Navbar';

function Contact() {
  return (
    <>
      <Head>
        <title>Contact</title>
      </Head>

      <Navbar />

      <section className="hero">
        <div className="container">
          <div className="text-wrapper w-full">
            <h1 data-test-id="pageTitle" className="title">
              Contact
            </h1>
            <p className="description">
              Keen to learn more about me? Feel free to contact me at:
            </p>
            <ul className="contact-links">
              <li className="contact-item">Email: lars@email.com</li>
              <li className="contact-item">Phone: +43123456789</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
