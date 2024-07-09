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
import Slider from "@mui/material/Slider";

export const ARXToken = () => {
  const { arxAmount, setArxAmount, arxPrice, setArxPrice } = useGlobalContext();
  const handleValueChange = (e: any) => {
    setArxAmount(e.target.value);
  };
  return (
    <div className="bg-gray-800 flex flex-col w-full gap-10 rounded-xl p-4">
      <p className="text-center text-lg font-bold">ARX Token</p>
      <Line
        data={{
          labels: ["January", "February", "March", "April", "May", "June"],
          datasets: [
            {
              label: "ARX Token",
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
        <p>ARX amount:</p>
        <div className="flex gap-2 items-center">
          <input
            type="number"
            value={arxAmount.toFixed(2)}
            onChange={handleValueChange}
            className="bg-transparent border border-gray-300 rounded-md p-1 w-20 text-center"
          />
        </div>
      </div>
      <div className="flex gap-4">
        <p className="text-nowrap">ARX Price(${arxPrice})</p>
        <Slider
          size="small"
          defaultValue={arxPrice}
          aria-label="Small"
          valueLabelDisplay="auto"
          onChange={(e, value) => {
            setArxPrice(value as number);
          }}
        />
      </div>
    </div>
  );
};
