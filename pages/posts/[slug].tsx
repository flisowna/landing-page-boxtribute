import { useRouter } from "next/router";
import ErrorPage from "next/error";
import NewsBody from "../../components/NewsBody";
import NewsHeader from "../../components/NewsHeader";
import Layout from "../../components/Layout";
import { getNewsBySlug, getAllNews } from "../../lib/api";
import Head from "next/head";
import type { INewsData } from "../../interfaces/global";

type Props = {
  slug: string;
  newsData: INewsData;
};

export default function Post({ slug, newsData }: Props) {
  const router = useRouter();
  console.log(newsData)

  if (!router.isFallback && !slug) {
    return <ErrorPage statusCode={404} />;
  }
  return (
    <Layout>
      {router.isFallback ? (
        <h1>Loading…</h1>
      ) : (
        <>
          <Head>
            {slug}
            <title>{newsData.title}</title>
          </Head>
          <article className="mb-32">
            <NewsHeader newsHeaderData={newsData} />
            <NewsBody blogText={newsData.blogText} />
          </article>
        </>
      )}
    </Layout>
  );
}

type Params = {
  params: {
    slug: string;
  };
};

export async function getStaticProps({ params }: Params) {
  const newsData = getNewsBySlug(params.slug, [
    "title",
    "slug",
    "headline",
    "text",
    "image",
    "image_description",
    "blogText"
  ]);


  return {
    props: {
      news: {
        ...newsData,
      },
    },
  };
}

export async function getStaticPaths() {
  const news = getAllNews(["slug"]);

  return {
    paths: news.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      };
    }),
    fallback: false,
  };
}
