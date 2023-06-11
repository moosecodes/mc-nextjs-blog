import 'bootstrap/dist/css/bootstrap.min.css';
import styles from '../styles/Home.module.scss';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import HomeStack from '../components/HomeStack'
import axios from 'axios'
import { useEffect, useState } from "react";

export default function Home(props) {
  const [weather, setWeather] = useState({});

  // Make a request for data to an API
  useEffect(() => {
    axios.get('http://104.237.155.152/api/weather/60031')
      .then(function (response) {
        setWeather(response.data)
        console.log(weather)
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  return (
    <Container>
      <main>

        <h1>Moose Codes</h1>

        <p><code>Under construction</code></p>

        <p>{ weather.temp_f }</p>

        <Image src="https://placehold.co/600x400" />

        <HomeStack></HomeStack>
      </main>

      <footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by Next.js / {' '}
          <img src="/vercel.svg" alt="Next.js" className={styles.logo} />
        </a>
      </footer>

      <style jsx>{`
        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        footer img {
          margin-left: 0.5rem;
        }
        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
          text-decoration: none;
          color: inherit;
        }
        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }
        * {
          box-sizing: border-box;
        }
      `}</style>
    </Container>
  )
}
