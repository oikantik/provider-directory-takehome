import React from 'react';
import { Link } from 'react-router-dom';

import Card from '../../components/Card';
import { useMenu } from '../../contexts/menu';
import { useProviders } from '../../contexts/providers';
import Pulse from './Pulse';

function ProfileList() {
    const { data, loading } = useProviders();
    const { state } = useMenu();
    let content;
    if (!loading && data && data?.length > 0 && state.locations) {
        const filteredProviders = () => {
            return data.filter((prov) => {
                return state.locations.some((loc) => prov?.location?.includes(loc.name));
            });
        };

        content = (
            <div className="container mx-auto max-w-screen-sm pt-[19px]">
                {filteredProviders().length > 0 ? (
                    <>
                        <p className="text-input2 text-neutral9 mb-[22px]">
                            <span className="font-medium text-neutral8">
                                {filteredProviders().length}
                            </span>{' '}
                            providers in
                            {state.locations.length > 1
                                ? ` ${state.locations.length} provinces`
                                : ` ${state.locations[0].name}`}
                        </p>
                        {filteredProviders().map((provider) => {
                            return (
                                <Link to={`/profile/${provider.id}`} key={provider.id}>
                                    <Card
                                        imageUrl={provider.avatarUrl}
                                        altText={provider.name}
                                        name={`${provider.name}, ${provider.title}`}
                                        title={provider.occupation}
                                        availability={provider.availabilty}
                                    >
                                        {provider.bio}
                                    </Card>
                                </Link>
                            );
                        })}
                    </>
                ) : (
                    <p className="text-input2 text-neutral9 mb-[22px]">No providers found</p>
                )}
            </div>
        );
    } else {
        content = <Pulse />;
    }
    return <div className="w-[100%]">{content}</div>;
}

export default ProfileList;
