import Head from "next/head";

const title = "Focaccia, Inc.";
const description =
  "株式会社フォカッチャの公式サイトです。株式会社フォカッチャは、音楽などのエンタメ分野におけるWebアプリケーションの開発を得意としています。";

export default function Home() {
  return (
    <div className="text-gray-700">
      <Head>
        <title>Focaccia, Inc.</title>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <meta name="description" content={description} />
        <meta name="title" content={title} />
        <meta name="keywords" content="Focaccia, Inc.,フォカッチャ" />
        <meta property="og:type" content="website" />
        <meta property="og:description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:url" content="https://focaccia.co.jp/" />
        <meta
          property="og:image"
          content="https://focaccia.co.jp/og_image.png"
        />
        <meta property="og:site_name" content={title} />
        <meta property="og:locale" content="ja_JP" />
        <meta name="twitter:card" content="summary_large_image" />
        {/* <meta name="twitter:site" content="@yohei_haribou" /> */}
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <section
        className="h-screen bg-cover bg-center flex justify-center items-center flex-col"
        style={{ backgroundImage: "url('eye_catch_bg.jpg')" }}
      >
        <div className=" pb-32">
          <h1 className="text-4xl font-bold">Focaccia, Inc.</h1>
        </div>
      </section>
      <main></main>

      <footer className="p-8 text-center">
        {new Date().getFullYear()} Focaccia, Inc.
      </footer>
    </div>
  );
}
