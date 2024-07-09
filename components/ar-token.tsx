import * as React from "react";
import Slider from "@mui/material/Slider";
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
import { useGlobalContext } from "../context/store";

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  LinearScale,
  CategoryScale,
  PointElement,
  LineElement
);

export const ARToken = () => {
  const { arAmount, setArAmount, arPrice, setArPrice } = useGlobalContext();

  const handleValueChange = (e: any) => {
    setArAmount(e.target.value);
  };
  return (
    <div className="bg-gray-800 flex flex-col w-full gap-10 rounded-xl p-4">
      <p className="text-center text-lg font-bold">AR Token</p>
      <Line
        data={{
          labels: ["January", "February", "March", "April", "May", "June"],
          datasets: [
            {
              label: "AR Token",
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
        <p>AR amount:</p>
        <div className="flex gap-2 items-center">
          <input
            type="number"
            value={arAmount.toFixed(2)}
            onChange={handleValueChange}
            className="bg-transparent border border-gray-300 rounded-md p-1 w-20 text-center"
          />
        </div>
      </div>
      <div className="flex gap-4">
        <p className="text-nowrap">AR Price(${arPrice})</p>
        <Slider
          size="small"
          defaultValue={arPrice}
          aria-label="Small"
          valueLabelDisplay="auto"
          onChange={(e, value) => {
            setArPrice(value as number);
          }}
        />
      </div>
    </div>
  );
};
