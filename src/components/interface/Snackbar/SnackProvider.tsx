import React, {
  createContext,
  useState,
  useEffect,
  PropsWithChildren,
} from "react";
import type { layoutType } from "./Layouts";
import type { positionType } from "./Positions";
import { Snack } from "./Snack";

// Type for Snack
export type SnackBarProps = {
  layout: layoutType;
  message: string;
  icon?: JSX.Element;
  actionText?: string;
  action?: Function;
  snackPosition?: positionType;
};
// Type for Context
export type ContextType = {
  isOpen: boolean;
  snackBarArray?: SnackBarProps[];
  addSnackBar: (snackbar: SnackBarProps) => void;
  providerPosition: positionType;
};
// Type for SnackProvider
export type SnackProviderProps = {
  durationms?: number;
  maxSnack?: number;
  position?: positionType;
};

// Create context
export const SnackContext = createContext<ContextType>(undefined);

export const SnackProvider: React.FC<PropsWithChildren<SnackProviderProps>> = ({
  children,
  durationms,
  maxSnack,
  position,
}) => {
  // Set default values
  durationms = durationms || 4000;
  maxSnack = maxSnack || 3;
  position = position || "top-right";
  // Set state
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [snackBarArray, setSnackBarArray] = useState<SnackBarProps[]>([]);
  const [queue, setQueue] = useState<SnackBarProps[]>([]);
  const [providerPosition, setProviderPosition] = useState<positionType>();
  // Add snackbar to Snackbar array or queue
  const addSnackBar = (snackbar: SnackBarProps) => {
    setIsOpen(true);
    if (snackBarArray.length >= maxSnack) {
      setQueue((prev) => [...prev, snackbar]);
    } else {
      setSnackBarArray((prev) => [...prev, snackbar]);
    }
  };
  // Set provider position - from props to state
  useEffect(() => {
    setProviderPosition(position);
  }, [position]);

  // Remove snackbar from snackBarArray after the durationms time and add new snackbar from queue if queue is not empty
  useEffect(() => {
    if (snackBarArray.length > 0) {
      const timer = setTimeout(() => {
        if (queue.length > 0 && snackBarArray.length <= maxSnack) {
          setSnackBarArray((prev) => [...prev, queue[0]]);
          queue.shift();
        } else {
          // remove first element from snackBarArray
          setSnackBarArray((prev) => prev.slice(1));
        }
      }, durationms);
      return () => clearTimeout(timer);
    }
  }, [snackBarArray]);

  return (
    <SnackContext.Provider
      value={{
        isOpen,
        snackBarArray,
        addSnackBar,
        providerPosition,
      }}
    >
      {children}
      <Snack />
    </SnackContext.Provider>
  );
};
