import React from "react";

import { LocationIcon } from "../../components/Icons";
import { Actions, useMenu } from "../../contexts/menu";

function LocationButton() {
  const { state, dispatch } = useMenu();
  return (
    <button
      className="flex items-center justify-center rounded-full bg-white border w-min-[69px] h-[37px] px-[16px]"
      onClick={() => dispatch({ type: Actions.TRUE })}
      disabled={state.status}
    >
      <span className="mr-[3px]">
        <LocationIcon />
      </span>{" "}
      <span className="text-label3 text-neutral8">
        {state?.locations.length > 1
          ? `${state?.locations.length} Provinces Selected`
          : state?.locations?.at(0)?.abbr}
      </span>
    </button>
  );
}

export default LocationButton;
