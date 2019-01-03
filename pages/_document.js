import Document, { Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {

  render() {
    return (
      <html>
        <Head>
          <title>미세미세</title>
          <style>{`
          
          
          html{font-size:62.5%} 
          
          body { margin: 0 }

          .info_window{
            display:flex;
            align-items:center;
            color:white;
            border-radius:4px;
            padding:1.5rem 1rem;
            width:26.8rem;
            justify-content:space-around;
          }
          .info_window img{
            width:3rem;
          }
          .info_window p, .info_window h3{
            margin:0 !important;
          }
          .info_window .first-wrapper{
            display: flex;
              align-items: center;
          }
          .info_window .first-text-wrapper{
            display:flex;
            flex-direction:column;
            margin-left:.6rem;
            text-align:center;
          }
          
          `}</style>
          <script type="text/javascript" src="https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=n4vss9n2ob&submodules=geocoder"></script>
        </Head>
        <body className="custom_class">
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
