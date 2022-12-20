import Document, { Html, Head, Main, NextScript } from "next/document";

declare global {
  interface Window {
    Html5QrcodeScanner: any;
    Html5Qrcode: any;
  }
}

const MyDocument = () => {
  return (
    <Html lang="EN-en">
      <Head/>
      <body>
        <Main />
        <div id="modals" />
        <NextScript />
      </body>
    </Html>
  );
};

MyDocument.getInitialProps = Document.getInitialProps;

MyDocument.renderDocument = Document.renderDocument;

export default MyDocument;
