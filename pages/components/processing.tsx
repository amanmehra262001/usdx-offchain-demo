import { useGlobalContext } from "@/context/store";

export const Processing = () => {
  const { collatoralRatio, setCollatoralRatio } = useGlobalContext();
  const handleValueChange = (e: any) => {
    setCollatoralRatio(e.target.value);
  };
  return (
    <div>
      <div className="flex gap-2">
        <p>Collateral Ratio:</p>
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
    </div>
  );
};
