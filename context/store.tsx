"use client";

import {
  createContext,
  useContext,
  Dispatch,
  SetStateAction,
  useState,
} from "react";

interface Props {
  arAmount: number;
  setArAmount: Dispatch<SetStateAction<number>>;
  arLabels: string[];
  setArLabels: Dispatch<SetStateAction<string[]>>;
  arTotalSupply: number;
  setArTotalSupply: Dispatch<SetStateAction<number>>;
  arData: number[];
  setArData: Dispatch<SetStateAction<number[]>>;
  arxAmount: number;
  setArxAmount: Dispatch<SetStateAction<number>>;
  arxLabels: string[];
  setArxLabels: Dispatch<SetStateAction<string[]>>;
  arxTotalSupply: number;
  setArxTotalSupply: Dispatch<SetStateAction<number>>;
  arxData: number[];
  setArxData: Dispatch<SetStateAction<number[]>>;
  usdxAmount: number;
  setUsdxAmount: Dispatch<SetStateAction<number>>;
  usdxLabels: string[];
  setUsdxLabels: Dispatch<SetStateAction<string[]>>;
  usdxTotalSupply: number;
  setUsdxTotalSupply: Dispatch<SetStateAction<number>>;
  usdxData: number[];
  setUsdxData: Dispatch<SetStateAction<number[]>>;
  collatoralRatio: number;
  setCollatoralRatio: Dispatch<SetStateAction<number>>;

  // user
  userArBalance: number;
  setUserArBalance: Dispatch<SetStateAction<number>>;
  userArxBalance: number;
  setUserArxBalance: Dispatch<SetStateAction<number>>;

  // prices
  arPrice: number;
  setArPrice: Dispatch<SetStateAction<number>>;
  arxPrice: number;
  setArxPrice: Dispatch<SetStateAction<number>>;
}

const GlobalContext = createContext<Props | undefined>({
  arAmount: 0,
  setArAmount: () => { },
  arLabels: [],
  setArLabels: () => { },
  arTotalSupply: 0,
  setArTotalSupply: () => { },
  arData: [],
  setArData: () => { },
  arxAmount: 0,
  setArxAmount: () => { },
  arxLabels: [],
  setArxLabels: () => { },
  arxTotalSupply: 0,
  setArxTotalSupply: () => { },
  arxData: [],
  setArxData: () => { },
  usdxAmount: 0,
  setUsdxAmount: () => { },
  usdxLabels: [],
  setUsdxLabels: () => { },
  usdxTotalSupply: 0,
  setUsdxTotalSupply: () => { },
  usdxData: [],
  setUsdxData: () => { },
  collatoralRatio: 0,
  setCollatoralRatio: () => { },

  // user
  userArBalance: 0,
  setUserArBalance: () => { },
  userArxBalance: 0,
  setUserArxBalance: () => { },

  // prices
  arPrice: 0,
  setArPrice: () => { },
  arxPrice: 0,
  setArxPrice: () => { },
});

export const GlobalContextProvider = ({ children }: any) => {
  const [arAmount, setArAmount] = useState<number>(0);
  const [arLabels, setArLabels] = useState<string[]>(["0"]);
  const [arTotalSupply, setArTotalSupply] = useState<number>(0);
  const [arData, setArData] = useState<number[]>([]);
  const [arxAmount, setArxAmount] = useState<number>(0);
  const [arxLabels, setArxLabels] = useState<string[]>(["0"]);
  const [arxTotalSupply, setArxTotalSupply] = useState<number>(0);
  const [arxData, setArxData] = useState<number[]>([]);
  const [usdxAmount, setUsdxAmount] = useState<number>(0);
  const [usdxLabels, setUsdxLabels] = useState<string[]>(["0"]);
  const [usdxTotalSupply, setUsdxTotalSupply] = useState<number>(0);
  const [usdxData, setUsdxData] = useState<number[]>([]);
  const [collatoralRatio, setCollatoralRatio] = useState<number>(85);

  // user
  const [userArBalance, setUserArBalance] = useState<number>(1000000);
  const [userArxBalance, setUserArxBalance] = useState<number>(1000000);

  // prices
  const [arPrice, setArPrice] = useState<number>(22);
  const [arxPrice, setArxPrice] = useState<number>(3);

  return (
    <GlobalContext.Provider
      value={{
        arAmount,
        setArAmount,
        arLabels,
        setArLabels,
        arTotalSupply,
        setArTotalSupply,
        arData,
        setArData,
        arxAmount,
        setArxAmount,
        arxLabels,
        setArxLabels,
        arxTotalSupply,
        setArxTotalSupply,
        arxData,
        setArxData,
        usdxAmount,
        setUsdxAmount,
        usdxLabels,
        setUsdxLabels,
        usdxTotalSupply,
        setUsdxTotalSupply,
        usdxData,
        setUsdxData,
        collatoralRatio,
        setCollatoralRatio,

        // user
        userArBalance,
        setUserArBalance,
        userArxBalance,
        setUserArxBalance,

        // prices
        arPrice,
        setArPrice,
        arxPrice,
        setArxPrice,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => {
  const context = useContext(GlobalContext);
  if (context === undefined) {
    throw new Error(
      "useGlobalContext must be used within a GlobalContextProvider"
    );
  }
  return context;
};
