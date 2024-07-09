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
import { useGlobalContext } from "../context/store";
import { useEffect, useState } from "react";
import { handleUSDXGeneration } from "@/utils/helper-functions";
import { toast } from "react-toastify";
import Slider from "@mui/material/Slider";

export const USDXToken = ({
  setUsdxPriceChartData,
  usdxPriceChartData,
}: any) => {
  const {
    usdxAmount,
    setUsdxAmount,
    collatoralRatio,
    setArAmount,
    arTotalSupply,
    setArTotalSupply,
    setArxAmount,
    arxTotalSupply,
    setArxTotalSupply,
    usdxTotalSupply,
    setUsdxTotalSupply,
    userArBalance,
    userArxBalance,
    setUserArBalance,
    setUserArxBalance,
    arxPrice,
    setArxPrice,
    arPrice,
    setArPrice,
    setUsdxLabels,
    usdxLabels,
  } = useGlobalContext();
  const [_usdxAmount, _setUsdxAmount] = useState<number>(0); // [1]
  const [usdxPrice, setUsdxPrice] = useState<number>(1); // [2
  const handleValueChange = (e: any) => {
    _setUsdxAmount(e.target.value);
  };

  const handleOnClickMint = () => {
    setUsdxAmount(_usdxAmount);
    setUsdxTotalSupply(
      parseFloat(usdxTotalSupply.toString()) +
        parseFloat(_usdxAmount.toString())
    );

    // Calculate AR and ARX amounts
    const [_arAmount, _arxAmount] = handleUSDXGeneration(
      _usdxAmount,
      collatoralRatio,
      arPrice,
      arxPrice
    );
    setArTotalSupply(arTotalSupply + _arAmount);
    setArxTotalSupply(arxTotalSupply + _arxAmount);
    setUserArBalance(userArBalance - _arAmount);
    setUserArxBalance(userArxBalance - _arxAmount);
    toast.success(
      `Deposited ${_arAmount.toFixed(2)} AR & ${_arxAmount.toFixed(2)} ARX`
    );
    toast.success(
      _usdxAmount + " USDX minted successfully at CR " + collatoralRatio + "%"
    );
  };
  const handleOnClickRedeem = () => {
    setUsdxAmount(_usdxAmount);
    setUsdxTotalSupply(
      parseFloat(usdxTotalSupply.toString()) -
        parseFloat(_usdxAmount.toString())
    );

    // Calculate AR and ARX amounts
    const [_arAmount, _arxAmount] = handleUSDXGeneration(
      _usdxAmount,
      collatoralRatio,
      arPrice,
      arxPrice
    );
    setArTotalSupply(arTotalSupply - _arAmount);
    setArxTotalSupply(arxTotalSupply - _arxAmount);
    setUserArBalance(userArBalance + _arAmount);
    setUserArxBalance(userArxBalance + _arxAmount);
    toast.error(
      _usdxAmount + " USDX redeemed successfully at CR " + collatoralRatio + "%"
    );
    toast.error(
      `Received ${_arAmount.toFixed(2)} AR & ${_arxAmount.toFixed(2)} ARX`
    );
  };

  useEffect(() => {
    const [_arAmount, _arxAmount] = handleUSDXGeneration(
      usdxAmount,
      collatoralRatio,
      arPrice,
      arxPrice
    );
    setArAmount(_arAmount);
    setArxAmount(_arxAmount);
  }, [usdxAmount]);

  useEffect(() => {
    setUsdxPrice(
      (arTotalSupply * arPrice + arxTotalSupply * arxPrice) / usdxTotalSupply ||
        1
    );
  }, [arPrice, arxPrice, arTotalSupply, arxTotalSupply, usdxAmount]);

  useEffect(() => {
    setUsdxPriceChartData((prev: any[]) => [...prev, usdxPrice.toFixed(2)]);
    setUsdxLabels((prev) => [...prev, usdxPriceChartData?.length.toString()]);
  }, [usdxPrice]);

  return (
    <div className="bg-gray-800 flex flex-col w-full gap-10 rounded-xl p-4">
      <p className="text-center text-lg font-bold">USDX Token</p>
      <Line
        data={{
          labels: usdxLabels,
          datasets: [
            {
              label: "USDX Token",
              data: usdxPriceChartData,
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
        <p>USDX amount:</p>
        <div className="flex gap-2">
          <input
            type="number"
            value={_usdxAmount}
            onChange={handleValueChange}
            className="bg-transparent border border-gray-300 rounded-md p-1 w-20 text-center"
          />
          <button
            className="p-2 bg-blue-500 hover:bg-blue-600 rounded-md w-20"
            onClick={handleOnClickMint}
          >
            Mint
          </button>
          <button
            className="p-2 bg-red-500 hover:bg-red-600 rounded-md w-20"
            onClick={handleOnClickRedeem}
          >
            Redeem
          </button>
        </div>
      </div>
      <div className="flex gap-4">
        <p className="text-nowrap">USDX Price(${usdxPrice.toFixed(2) || 1})</p>
        <Slider
          size="small"
          value={parseFloat(usdxPrice.toFixed(2)) || 1}
          aria-label="Small"
          valueLabelDisplay="auto"
          min={0.5}
          max={1.5}
          disabled
        />
      </div>
    </div>
  );
};
