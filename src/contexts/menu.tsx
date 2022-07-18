import React, { createContext, useContext, useReducer } from 'react';

import { LocationsList } from '../api';

interface MenuContextProps {
    data: LocationsList[] | undefined;
    error: string;
    loading: boolean;
    state: State;
    dispatch: React.Dispatch<Action>;
}

interface MenuProps {
    data: LocationsList[] | undefined;
    error: string;
    loading: boolean;
    children: React.ReactNode;
}

export type State = {
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
    data: [],
    error: '',
    loading: true,
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

const MenuProvider: React.FC<MenuProps> = ({ data, error, loading, children }) => {
    const [state, dispatch] = useReducer(menuReducer, {
        status: false,
        locations: [DEFAULT_PROVINCE],
    });
    return (
        <MenuContext.Provider value={{ data, error, loading, state, dispatch }}>
            {children}
        </MenuContext.Provider>
    );
};

export default MenuProvider;

export const useMenu = () => useContext(MenuContext);
