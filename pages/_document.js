import Document, { Head, Main, NextScript } from 'next/document';
import getConfig from 'next/config';
const { publicRuntimeConfig } = getConfig();
export default class MyDocument extends Document {
  static async getInitialProps (ctx) {
    return await Document.getInitialProps(ctx)
  }
  render() {
    return (
      <html>
        <Head>
          <title>미세미세</title>
          <style>{`
          
          
          html{font-size:62.5%} 
          
          body { margin: 0 }
          .overlay{
            position:absolute;
            left:0;
            top:0;
            width:21.4rem;
            height:5.6rem;
            background-color:#D84315;
            border-radius:2px;
            color:white;
            display: flex;
            align-items: center;
            padding: 0 1.4rem;
            box-sizing: border-box;
            font-size:1.6rem;
          }
          
          `}</style>
          <script
            type="text/javascript"
            src={`https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${publicRuntimeConfig.naverClientId}`}
          />
        </Head>
        <body className="custom_class">
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
