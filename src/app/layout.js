import Navbar from "@/components/navbar/Navbar";
import "@/app/style/globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="wrapper">
          <Navbar />
          {children}
        </div>
      </body>
    </html>
  );
}
