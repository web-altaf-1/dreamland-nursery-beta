import "./globals.css";



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script src="https://kit.fontawesome.com/a3939c0da5.js" crossOrigin="anonymous"></script>
        <title>Dreamland Nursery</title>
        <link rel="shortcut icon" href="/images/fav.png" type="image/x-icon" />
      </head>
      <body

      >
        {children}
      </body>
    </html>
  );
}
