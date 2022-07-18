import React from 'react';
import Breadcrumb from '../../components/Breadcrumb';
import { useProvider } from '../../contexts/provider';
import AvatarSection from './AvatarSection';
import DetailsSection from './DetailsSection';
import Pulse from './Pulse';

function ProfileSection() {
  const { provider, loading } = useProvider();

  let content;

  if (!loading && provider) {
    content = (
      <div className="container mx-auto max-w-screen-sm pt-[19px]">
        {provider && (
          <Breadcrumb
            from="Mental Wellness"
            link="/"
            to={`${provider?.name}, ${provider?.title}`}
          />
        )}

        <div className="flex">
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
