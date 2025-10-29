import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* ✅ Google Site Verification */}
        <meta
          name="google-site-verification"
          content="uVZ6D0yOLx63jExAFBdN7ygYiCB_W_q7egrqpXBNdPE"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
