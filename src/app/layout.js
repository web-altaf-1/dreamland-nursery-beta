import "./globals.css";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script src="https://kit.fontawesome.com/a3939c0da5.js" crossorigin="anonymous"></script>
      </head>
      <body

      >
        {children}
      </body>
    </html>
  );
}
