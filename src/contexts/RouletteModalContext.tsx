import React, {
  createContext,
  Dispatch,
  SetStateAction,
  useState
} from 'react';
import { useHistory } from 'react-router-dom';
import DiscoverAPI from '../api/DiscoverAPI';

interface RouletteModalContextProviderProps {
  // eslint-disable-next-line react/no-unused-prop-types
  isOpen?: boolean;
  // eslint-disable-next-line react/no-unused-prop-types
  setIsOpen?: Dispatch<SetStateAction<boolean>>;
  // eslint-disable-next-line react/no-unused-prop-types
  getRandomMovie?: () => any;
  children?: any;
}

export const RouletteModalContext = createContext<
  RouletteModalContextProviderProps
>({});

const RouletteModalContextProvider = (
  props: RouletteModalContextProviderProps
) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const getRandomMovie = () => {
    // Get random integer in range [1, max]
    const getRandomInt = (max: number) =>
      Math.floor(Math.random() * Math.floor(max)) + 1;

    const MAX_PAGES = 500;
    const RESULTS_PER_PAGE = 20;

    return DiscoverAPI.index(getRandomInt(MAX_PAGES)).then(
      r => r.data.results[getRandomInt(RESULTS_PER_PAGE)].id
    );
  };

  return (
    <RouletteModalContext.Provider
      value={{
        isOpen,
        setIsOpen,
        getRandomMovie
      }}>
      {props.children}
    </RouletteModalContext.Provider>
  );
};

export default RouletteModalContextProvider;
