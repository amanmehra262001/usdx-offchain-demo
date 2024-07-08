import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  LinearScale,
  CategoryScale,
  PointElement,
  LineElement,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  LinearScale,
  CategoryScale,
  PointElement,
  LineElement
);
import { useGlobalContext } from "../../context/store";
import { useEffect } from "react";
import { handleUSDXGeneration } from "@/utils/helper-functions";

export const USDXToken = () => {
  const {
    usdxAmount,
    setUsdxAmount,
    collatoralRatio,
    setArAmount,
    setArxAmount,
  } = useGlobalContext();
  const handleValueChange = (e: any) => {
    setUsdxAmount(e.target.value);
  };

  useEffect(() => {
    const [_arAmount, _arxAmount] = handleUSDXGeneration(
      usdxAmount,
      collatoralRatio
    );
    setArAmount(_arAmount);
    setArxAmount(_arxAmount);
  }, [usdxAmount]);
  return (
    <div className="bg-gray-800 flex flex-col w-full gap-10 rounded-xl p-4">
      <p className="text-center text-lg font-bold">USDX Token</p>
      <Line
        data={{
          labels: ["January", "February", "March", "April", "May", "June"],
          datasets: [
            {
              label: "USDX Token",
              data: [65, 59, 80, 81, 56, 55],
              fill: false,
              backgroundColor: "rgb(255, 99, 132)",
              borderColor: "rgba(255, 99, 132, 0.2)",
            },
          ],
        }}
        height={400}
        width={600}
      />
      <div className="flex justify-between items-center gap-4">
        {/* <Slider
          size="small"
          defaultValue={70}
          aria-label="Small"
          valueLabelDisplay="auto"
        /> */}
        <p>USDX amount:</p>
        <input
          type="number"
          value={usdxAmount}
          onChange={handleValueChange}
          className="bg-transparent border border-gray-300 rounded-md p-1 w-20 text-center"
        />
      </div>
    </div>
  );
};
