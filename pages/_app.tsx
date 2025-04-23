import '../styles/globals.css';
import '../src/components/styles/all.scss';

export default function App({ Component, pageProps }) {
  return (
    <Component {...pageProps} />
  )
}