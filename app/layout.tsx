export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const header = (
    <header>
      <div>
        <h1>Bhumika's Blog</h1>
        <p>Welcome to my Blog</p>
      </div>
    </header>
  );

  const footer = (
    <footer>
      <div>
        <p>Created by Bhumika</p>
      </div>
    </footer>
  );
  return (
    <html>
      <head />
      <body>
        {header}
        {children}
        {footer}
      </body>
    </html>
  );
}
