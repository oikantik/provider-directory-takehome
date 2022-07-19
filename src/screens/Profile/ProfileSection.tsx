import React from 'react';

import Breadcrumb from '../../components/Breadcrumb';
import { useProvider } from '../../contexts/provider';
import AvatarSection from './AvatarSection';
import DetailsSection from './DetailsSection';
import Pulse from './Pulse';

function ProfileSection() {
    const { data, loading } = useProvider();

    let content;

    if (!loading && data) {
        content = (
            <div className="container mx-auto max-w-screen-sm pt-[19px]">
                {data && (
                    <Breadcrumb
                        from="Mental Wellness"
                        link="/"
                        to={`${data?.name}, ${data?.title}`}
                    />
                )}

                <div className="flex flex-col sm:flex sm:flex-row">
                    <AvatarSection />
                    <DetailsSection />
                </div>
            </div>
        );
    } else {
        content = <Pulse />;
    }
    return (
        <div className="min-h-screen w-[100%] bg-neutral2 flex-col">
            <div className="w-[100%]">{content}</div>
        </div>
    );
}

export default ProfileSection;
