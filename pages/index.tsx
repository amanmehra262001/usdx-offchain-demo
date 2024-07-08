import Image from "next/image";
import { Inter } from "next/font/google";
import { ARToken } from "./components/ar-token";
import { ARXToken } from "./components/arx";
import { USDXToken } from "./components/usdx-token";
import { Processing } from "./components/processing";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={`flex flex-col gap-4 p-4 ${inter.className}`}>
      <section id="mainframe" className="grid grid-cols-3 gap-4">
        <USDXToken />
        <ARToken />
        <ARXToken />
      </section>
      <Processing />
    </main>
  );
}
