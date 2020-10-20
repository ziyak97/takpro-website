import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
	static async getInitialProps(ctx) {
		const initialProps = await Document.getInitialProps(ctx)
		return { ...initialProps }
	}

	render() {
		return (
			<Html>
				<Head>
					<meta name='application-name' content='TaskPro Services' />
					<meta name='apple-mobile-web-app-capable' content='yes' />
					<meta
						name='apple-mobile-web-app-status-bar-style'
						content='default'
					/>
					<meta name='apple-mobile-web-app-title' content='TaskPro Services' />
					<meta
						name='description'
						content='TaskPro Services provides quality customer support.'
					/>
					<meta name='format-detection' content='telephone=no' />
					<meta name='mobile-web-app-capable' content='yes' />
					<meta
						name='msapplication-config'
						content='/static/icons/browserconfig.xml'
					/>
					<meta name='msapplication-TileColor' content='#2B5797' />
					<meta name='msapplication-tap-highlight' content='no' />
					<meta name='theme-color' content='#000000' />

					<link
						rel='apple-touch-icon'
						sizes='180x180'
						href='/apple-touch-icon.png'
					/>
					<link rel='icon' href='/favicon.ico' />

					<link rel='manifest' href='/manifest.json' />
					<link rel='shortcut icon' href='/favicon.ico' />
					<link
						rel='stylesheet'
						href='https://fonts.googleapis.com/css?family=Roboto:300,400,500'
					/>

					<meta name='twitter:card' content='summary' />
					<meta name='twitter:url' content='https://taskproservices.com' />
					<meta name='twitter:title' content='TaskPro Services' />
					<meta
						name='twitter:description'
						content='TaskPro Services provides quality customer support.'
					/>
					<meta name='twitter:image' content='/icon-192x192.png' />
					<meta name='twitter:creator' content='@ziyak97' />
					<meta property='og:type' content='website' />
					<meta property='og:title' content='TaskPro Services' />
					<meta
						property='og:description'
						content='TaskPro Services provides quality customer support.'
					/>
					<meta property='og:site_name' content='TaskPro Services' />
					<meta property='og:url' content='https://taskproservices.com' />
					<meta property='og:image' content='/apple-touch-icon.png' />
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		)
	}
}

export default MyDocument
