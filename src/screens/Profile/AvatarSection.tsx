import React from 'react';

import { useProvider } from '../../contexts/provider';

function AvatarSection() {
    const provider = useProvider();
    return (
        <div className="mr-0 sm:mr-[12px]">
            {provider && (
                <img
                    src={`../images/${provider.data?.avatarUrl}`}
                    alt={provider.data?.name}
                    className="border border-neutral3 w-full sm:w-[289px] sm:mr-[20px]"
                />
            )}
        </div>
    );
}

export default AvatarSection;
