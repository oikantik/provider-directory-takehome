import React from 'react';
import { useSpring } from 'react-spring';

import { LocationIcon, TopChevronIcon } from '../../components/Icons';
import { Actions, useMenu } from '../../contexts/menu';

function LocationButton() {
    const { state, dispatch } = useMenu();
    const styles = useSpring({
        transform: state.status ? 'rotate(0deg)' : 'rotate(180deg)',
    });

    return (
        <button
            className="flex items-center justify-center rounded-full bg-white border w-min-[69px] h-[37px] px-[16px] mb-[12px]"
            onClick={() => dispatch({ type: Actions.TRUE })}
            disabled={state.status}
        >
            <span className="mr-[3px]">
                <LocationIcon />
            </span>{' '}
            <span className="text-label3 text-neutral8 mr-[10px]">
                {state?.locations.length > 1
                    ? `${state?.locations.length} Provinces Selected`
                    : state?.locations?.at(0)?.abbr}
            </span>
            <TopChevronIcon styles={styles as unknown as React.CSSProperties} />
        </button>
    );
}

export default LocationButton;
