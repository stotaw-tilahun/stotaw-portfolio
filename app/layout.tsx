import type { Metadata } from "next";
// import "./globals.css";

export const metadata: Metadata = {
  title: "Stotaw Tilahun | CS Student & Developer",
  description:
    "Portfolio of Stotaw Tilahun — 3rd Year Computer Science student at Woldia University. Passionate about AI, Web  Development.",
  keywords: ["Stotaw Tilahun", "Computer Science", "Portfolio", "Woldia University", "AI", "Web Development"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
