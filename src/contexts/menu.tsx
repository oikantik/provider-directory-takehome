import React, {
    createContext,
    useCallback,
    useContext,
    useEffect,
    useReducer,
    useState,
} from 'react';

import { LocationsList, fetchLocations } from '../api';

interface MenuContextProps {
    locations: LocationsList[];
    state: State;
    dispatch: React.Dispatch<Action>;
}

interface MenuProps {
    children: React.ReactNode;
}

type State = {
    status: boolean;
    locations: LocationsList[];
};

type Action = {
    type: Actions;
    payload?: LocationsList;
};

export enum Actions {
    TRUE = 'TRUE',
    FALSE = 'FALSE',
    UPDATE_LOCATIONS = 'UPDATE_LOCATIONS',
    REMOVE_LOCATIONS = 'REMOVE_LOCATIONS',
}

const DEFAULT_PROVINCE = {
    name: 'Ontario',
    abbr: 'ON',
};

const MenuContext = createContext<MenuContextProps>({
    locations: [],
    state: { status: false, locations: [] },
    dispatch: () => {},
});

function menuReducer(state: State, action: Action) {
    switch (action.type) {
        case Actions.TRUE: {
            return { ...state, status: true };
        }
        case Actions.FALSE: {
            return { ...state, status: false };
        }
        case Actions.UPDATE_LOCATIONS: {
            if (action?.payload) {
                const newLocations = [...state.locations, action.payload];
                return { ...state, locations: newLocations };
            }
            return state;
        }
        case Actions.REMOVE_LOCATIONS: {
            if (action?.payload) {
                const newLocations = [...state.locations];
                const idx = newLocations.findIndex((loc) => action?.payload?.abbr === loc.abbr);

                if (idx > -1) {
                    newLocations.splice(idx, 1);
                }

                return { ...state, locations: newLocations };
            }
            return state;
        }
        default: {
            return state;
        }
    }
}

const MenuProvider: React.FC<MenuProps> = ({ children }) => {
    const [locations, setLocations] = useState<LocationsList[]>([]);
    const fetchLocationsList = useCallback(async () => {
        const data = await fetchLocations();
        setLocations(data);
    }, []);

    useEffect(() => {
        fetchLocationsList();
    }, [fetchLocationsList]);

    const [state, dispatch] = useReducer(menuReducer, {
        status: false,
        locations: [DEFAULT_PROVINCE],
    });
    return (
        <MenuContext.Provider value={{ locations, state, dispatch }}>
            {children}
        </MenuContext.Provider>
    );
};

export default MenuProvider;

export const useMenu = () => useContext(MenuContext);
