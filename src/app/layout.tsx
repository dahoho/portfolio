import "@/styles/globals.scss";

import { Noto_Sans_JP } from "next/font/google";

const notojp = Noto_Sans_JP({
  display: "swap",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="ja">
      <body className={notojp.className}>{children}</body>
    </html>
  );
};

export default RootLayout;
