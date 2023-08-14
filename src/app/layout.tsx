import "./globals.css";

export const metadata = {
  title: "Javaria Brascom - Portfolio",
  description: "Generated by Javaria",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
