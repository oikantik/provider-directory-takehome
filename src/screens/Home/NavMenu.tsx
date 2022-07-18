import { animated, useSpring } from 'react-spring';

import { LocationsList } from '../../api';
import { CloseIcon } from '../../components/Icons';
import { Actions, useMenu } from '../../contexts/menu';

function NavMenu() {
    const { locations, state, dispatch } = useMenu();

    let content;

    const styles = useSpring({
        display: state.status ? 'block' : 'none',
        opacity: state.status ? 1 : 0,
    });

    const isMenuChecked = (locations: LocationsList[], toFind: string) => {
        return locations.find((loc) => loc.abbr.toLowerCase() === toFind.toLowerCase())
            ? true
            : false;
    };

    if (locations) {
        content = (
            <ul
                className="p-3 space-y-1 text-sm text-gray-700 dark:text-gray-200 h-[150px] overflow-y-scroll"
                aria-labelledby="dropdownBgHoverButton"
            >
                {locations?.map((loc) => {
                    const isChecked = isMenuChecked(state.locations, loc.abbr);
                    return (
                        <li key={loc.abbr}>
                            <div
                                className="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600"
                                aria-disabled={true}
                            >
                                <input
                                    type="checkbox"
                                    defaultChecked={isChecked}
                                    onChange={() => {
                                        if (isChecked) {
                                            state.locations.length > 1 &&
                                                dispatch({
                                                    type: Actions.REMOVE_LOCATIONS,
                                                    payload: loc,
                                                });
                                        } else {
                                            dispatch({
                                                type: Actions.UPDATE_LOCATIONS,
                                                payload: loc,
                                            });
                                        }
                                    }}
                                    disabled={state.locations.length === 1 && isChecked}
                                    className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                                />
                                <label
                                    htmlFor="checkbox-item-4"
                                    className="ml-2 w-full text-label3 text-neutral8 rounded dark:text-gray-300"
                                >
                                    {loc.name}, {loc.abbr}
                                </label>
                            </div>
                        </li>
                    );
                })}
            </ul>
        );
    } else {
        content = <></>;
    }
    return (
        <animated.div
            className={`absolute z-10 w-48 bg-white rounded shadow dark:bg-gray-700`}
            style={styles}
        >
            {content}
            <button
                className="flex ml-2 w-full text-right pr-[20px] pt-[10px] pb-[10px] justify-end"
                onClick={() => {
                    dispatch({ type: Actions.FALSE });
                }}
            >
                <CloseIcon />
            </button>
        </animated.div>
    );
}

export default NavMenu;
