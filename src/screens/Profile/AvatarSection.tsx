import React from 'react';

import { useProvider } from '../../contexts/provider';

function AvatarSection() {
    const provider = useProvider();
    return (
        <div className="mr-[12px]">
            {provider && (
                <img
                    src={`../images/${provider.provider?.avatarUrl}`}
                    alt={provider.provider?.name}
                    className="border border-neutral3 w-[289px] mr-[20px]"
                />
            )}
        </div>
    );
}

export default AvatarSection;
