import "./globals.css";
export const metadata = {
  title: "SiZiF",
  description: "My Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          href="/icon?<generated>"
          type="image/<generated>"
          sizes="<generated>"
        />
      </head>
      <body className={`antialiased`}>{children}</body>
    </html>
  );
}
