import { useGlobalContext } from "@/context/store";
import {
  handleCollatoralRatio,
  handleUSDXGeneration,
} from "@/utils/helper-functions";
import { useEffect } from "react";
import { isNull } from "util";

export const Processing = () => {
  const {
    collatoralRatio,
    setCollatoralRatio,
    usdxAmount,
    arAmount,
    setArAmount,
    arxAmount,
    setArxAmount,
    usdxTotalSupply,
    arxTotalSupply,
    arTotalSupply,
    arPrice,
    arxPrice,
  } = useGlobalContext();
  const handleValueChange = (e: any) => {
    if (e.target.value <= 100) {

      setCollatoralRatio(e.target.value);
    }
  };

  useEffect(() => {
    // When collateral ratio changes recalculate AR and ARX amounts
    const [_arAmount, _arxAmount] = handleUSDXGeneration(
      usdxAmount,
      collatoralRatio,
      arPrice,
      arxPrice
    );
    if (arAmount !== _arAmount) setArAmount(_arAmount);
    if (arxAmount !== _arxAmount) setArxAmount(_arxAmount);

    console.log("Collateral Ratio: ", collatoralRatio);
  }, [collatoralRatio]);

  useEffect(() => {
    const collatoralChange = handleCollatoralRatio(
      arPrice,
      arTotalSupply,
      arxPrice,
      arxTotalSupply,
      usdxTotalSupply
    );
    console.log("Collatoral Change: ", collatoralChange);
    if (!isNaN(collatoralChange + collatoralRatio))
      setCollatoralRatio(collatoralRatio + collatoralChange);
  }, [arPrice, arTotalSupply, arxPrice, arxTotalSupply, usdxTotalSupply]);

  return (
    <div className="grid grid-cols-2 gap-4 w-1/2">
      <p>Collateral Ratio:</p>
      <div className="flex gap-2">
        <input
          type="number"
          name="collatoral-ratio"
          id="collatoral-ratio"
          value={collatoralRatio}
          onChange={handleValueChange}
          className="w-20 bg-transparent border border-gray-300 rounded-md text-center"
        />
        <p>%</p>
      </div>
      <p>USDX In Supply:</p>
      <p>{usdxTotalSupply.toFixed(2)} USDX</p>
      <p>AR Backing:</p>
      <p>{arTotalSupply.toFixed(2)} AR</p>
      <p>HRS Locked:</p>
      <p>{arxTotalSupply.toFixed(2)} ARX</p>
    </div>
  );
};
