import { AppProps } from "next/app";
import Layout from "../components/Layout";
import "../styles/index.css";
import { getDataBySlug } from "../lib/api";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

