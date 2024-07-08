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
  arData: number[];
  setArData: Dispatch<SetStateAction<number[]>>;
  arxAmount: number;
  setArxAmount: Dispatch<SetStateAction<number>>;
  arxLabels: string[];
  setArxLabels: Dispatch<SetStateAction<string[]>>;
  arxData: number[];
  setArxData: Dispatch<SetStateAction<number[]>>;
  usdxAmount: number;
  setUsdxAmount: Dispatch<SetStateAction<number>>;
  usdxLabels: string[];
  setUsdxLabels: Dispatch<SetStateAction<string[]>>;
  usdxData: number[];
  setUsdxData: Dispatch<SetStateAction<number[]>>;
  collatoralRatio: number;
  setCollatoralRatio: Dispatch<SetStateAction<number>>;
}

const GlobalContext = createContext<Props | undefined>({
  arAmount: 0,
  setArAmount: () => {},
  arLabels: [],
  setArLabels: () => {},
  arData: [],
  setArData: () => {},
  arxAmount: 0,
  setArxAmount: () => {},
  arxLabels: [],
  setArxLabels: () => {},
  arxData: [],
  setArxData: () => {},
  usdxAmount: 0,
  setUsdxAmount: () => {},
  usdxLabels: [],
  setUsdxLabels: () => {},
  usdxData: [],
  setUsdxData: () => {},
  collatoralRatio: 0,
  setCollatoralRatio: () => {},
});

export const GlobalContextProvider = ({ children }: any) => {
  const [arAmount, setArAmount] = useState<number>(0);
  const [arLabels, setArLabels] = useState<string[]>([]);
  const [arData, setArData] = useState<number[]>([]);
  const [arxAmount, setArxAmount] = useState<number>(0);
  const [arxLabels, setArxLabels] = useState<string[]>([]);
  const [arxData, setArxData] = useState<number[]>([]);
  const [usdxAmount, setUsdxAmount] = useState<number>(0);
  const [usdxLabels, setUsdxLabels] = useState<string[]>([]);
  const [usdxData, setUsdxData] = useState<number[]>([]);
  const [collatoralRatio, setCollatoralRatio] = useState<number>(0);

  return (
    <GlobalContext.Provider
      value={{
        arAmount,
        setArAmount,
        arLabels,
        setArLabels,
        arData,
        setArData,
        arxAmount,
        setArxAmount,
        arxLabels,
        setArxLabels,
        arxData,
        setArxData,
        usdxAmount,
        setUsdxAmount,
        usdxLabels,
        setUsdxLabels,
        usdxData,
        setUsdxData,
        collatoralRatio,
        setCollatoralRatio,
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
