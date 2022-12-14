import Head from "next/head";

const title = "Focaccia, Inc.";
const description =
  "株式会社フォカッチャの公式サイトです。株式会社フォカッチャは、音楽などのエンタメ分野におけるWebアプリケーションの開発を得意としています。";

export default function Home() {
  return (
    <div className="text-gray-700">
      <Head>
        <title>株式会社フォカッチャ</title>
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
        <div className=" pb-32" style={{ maxWidth: "70%" }}>
          <h1 className="text-center font-bold">
            <img src="focaccia_logo.svg" style={{ width: "400px" }} />
          </h1>
        </div>
      </section>
      <main>
        <section className="px-8 py-16 text-center space-y-6">
          <h2 className="font-bold text-xl">事業内容</h2>
          <div className="text-gray-500">
            <div>各種Webアプリケーションの企画・開発・運用</div>
          </div>
        </section>
        <section className="px-8 py-16 text-center space-y-6 bg-gray-50">
          <h2 className="font-bold text-xl">代表</h2>
          <div className="text-gray-500">
            <div className="text-xl">渡邊 陽平</div>
            <div className="mt-4">
              2015年、TuneCore
              Japan（Wano株式会社）に入社。Webエンジニアとして開発やエンジニアマネジメントを経験。
              <br />
              2020年、フリーランスのWebエンジニアとして独立。複数の音楽系・エンタメ系プロダクトの開発・運用に携わる。
              <br />
              2022年、株式会社フォカッチャを設立。
              <br />
              <br />
              専門領域はWebフロントエンドで、TypeScriptやNext.jsをメインに開発しています。
              <br />
              また、NestJSやMySQL、Redisなどを用いたバックエンド側の実装や、AWSやVercel等を用いたインフラ構築も可能です。
            </div>
          </div>
        </section>
        <section className="px-8 py-16 text-center space-y-6 ">
          <h2 className="font-bold text-xl">会社概要</h2>
          <div className="space-y-6 ">
            <div>
              <h3 className="font-bold">名称</h3>
              <p className="text-gray-500">
                株式会社フォカッチャ
                <br />
                (Focaccia, Inc.)
              </p>
            </div>
            <div>
              <h3 className="font-bold">所在地</h3>
              <p className="text-gray-500">
                〒160-0022 東京都新宿区新宿 1-36-2
                <br />
                新宿第七葉山ビル 3F
              </p>
            </div>
            <div>
              <h3 className="font-bold">代表者</h3>
              <p className="text-gray-500">渡邊 陽平</p>
            </div>
            <div>
              <h3 className="font-bold">設立日</h3>
              <p className="text-gray-500">2022年11月30日</p>
            </div>
            <div>
              <h3 className="font-bold">資本金</h3>
              <p className="text-gray-500">1,500,000 円</p>
            </div>
          </div>
        </section>
        <section className="px-8 py-16 text-center space-y-6 bg-gray-50">
          <h2 className="font-bold text-xl">お問い合わせ</h2>
          <div className="text-gray-500">
            <div className="mt-4">
              <a href="mailto:contact@focaccia.co.jp" className="underline">
                メール
              </a>{" "}
              にてお問い合わせください。
            </div>
          </div>
        </section>
      </main>

      <footer className="p-8 text-center text-gray-400 text-sm">
        {new Date().getFullYear()} 株式会社フォカッチャ
      </footer>
    </div>
  );
}
