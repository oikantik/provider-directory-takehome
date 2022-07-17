import React from "react";
import Breadcrumb from "../../components/Breadcrumb";
import { useProvider } from "../../contexts/provider";
import AvatarSection from "./AvatarSection";
import DetailsSection from "./DetailsSection";

function ProfileSection() {
  const provider = useProvider();

  return (
    <div className="min-h-screen w-[100%] bg-neutral2 flex-col">
      <div className="w-[100%]">
        <div className="container mx-auto max-w-screen-sm pt-[19px]">
          {provider && (
            <Breadcrumb
              from="Mental Wellness"
              link="/"
              to={`${provider.provider?.name}, ${provider.provider?.title}`}
            />
          )}

          <div className="flex">
            <AvatarSection />
            <DetailsSection />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileSection;
