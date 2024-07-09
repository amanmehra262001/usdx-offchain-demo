import Image from "next/image";
import { Inter } from "next/font/google";
import { ARToken } from "../components/ar-token";
import { ARXToken } from "../components/arx";
import { USDXToken } from "../components/usdx-token";
import { Processing } from "../components/processing";
import { Balances } from "../components/balances";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [usdxPriceChartData, setUsdxPriceChartData] = useState<any[]>([]);
  const [arPriceChartData, setArPriceChartData] = useState<any[]>([]);
  const [axPriceChartData, setAxPriceChartData] = useState<any[]>([]);

  return (
    <main className={`flex flex-col gap-4 p-4 ${inter.className}`}>
      <section id="mainframe" className="grid grid-cols-3 gap-4">
        <USDXToken
          setUsdxPriceChartData={setUsdxPriceChartData}
          usdxPriceChartData={usdxPriceChartData}
        />
        <ARToken
          arPriceChartData={arPriceChartData}
          setArPriceChartData={setArPriceChartData}
        />
        <ARXToken
          axPriceChartData={axPriceChartData}
          setAxPriceChartData={setAxPriceChartData}
        />
      </section>
      <section className="flex">
        <Processing />
        <Balances />
      </section>
    </main>
  );
}
