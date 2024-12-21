import './globals.css'

export const metadata = {
	title:'Quiz app',
	description:'A quiz app for me'
}

export default function RootLayout({children}){
	return (
		<html lang='fr'>
			<body className='bg-zinc-100'>{children}</body>
		</html>
	)
}