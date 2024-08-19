import type { Metadata } from "next";
import { Inter } from "next/font/google";
import homeApi from "./api/home/index.json";
import "./globals.css";
import homeIcon from "/public/media/images/home-w.png";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="wrapHeader">
          <div className="header">
            <a className="headerButton" href="/">
              <img className="homeIcon" src={homeIcon.src} />
            </a>
            <div className="headerItems">
              {homeApi.headerItems.map((row, index) => {
                if (row == "Projects") {
                  return (
                    <a key={index} href="/projects" className="headerButton">
                      {row}
                    </a>
                  );
                }
                if (row == "CV") {
                  return (
                    <a
                      key={index}
                      href="/media/docs/Currículo Diogo Cerutti.pdf"
                      className="headerButton"
                    >
                      {row}
                    </a>
                  );
                }
              })}
            </div>
          </div>
          <div className="secret">
            <span className="secret-msg">Hire me &#10084;</span>
          </div>
        </div>
        {children}
        <div className="footer">
          <hr style={{ width: "65%" }} />
        </div>
      </body>
    </html>
  );
}
