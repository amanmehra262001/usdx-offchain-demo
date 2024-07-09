import { useGlobalContext } from "@/context/store";

export const Balances = () => {
  const { userArBalance, userArxBalance, usdxAmount } = useGlobalContext();
  return (
    <div className="flex flex-col w-1/2 gap-4">
      <p className="text-xl font-bold text-left">User Balances</p>
      <div className="grid grid-cols-2 gap-4 max-h-min w-full">
        <p>AR Balance:</p>
        <p>{userArBalance} AR</p>
        <p>ARX Balance:</p>
        <p>{userArxBalance} ARX</p>
        <p>USDX Balance:</p>
        <p>{usdxAmount} USDX</p>
      </div>
    </div>
  );
};
