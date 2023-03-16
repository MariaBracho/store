import type { AppProps } from "next/app";
import ReactQueryContainer from "../container/ReactQueryContainer";
import Layout from "../components/layout";
import "../styles/index.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main>
      <ReactQueryContainer dehydratedState={pageProps.dehydratedState}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ReactQueryContainer>
    </main>
  );
}
