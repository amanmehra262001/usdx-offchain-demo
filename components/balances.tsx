import { useGlobalContext } from "@/context/store";

export const Balances = () => {
  const { userArBalance, userArxBalance, usdxTotalSupply } = useGlobalContext();
  return (
    <div className="flex flex-col w-1/2 gap-4 mt-[20px]">
      <p className="text-xl font-bold text-left">User Balances</p>
      <div className="grid grid-cols-2 gap-4 max-h-min w-full">
        <p>AR Balance:</p>
        <p>{userArBalance} AR</p>
        <p>HRS Balance:</p>
        <p>{userArxBalance} HRS</p>
        <p>USDX Balance:</p>
        <p>{usdxTotalSupply} USDX</p>
      </div>
    </div>
  );
};
