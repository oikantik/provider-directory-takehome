import React, { useState } from "react";
import { useSpring, animated } from "react-spring";
import {
  EducationIcon,
  GlobeIcon,
  MapIcon,
  TopChevronIcon,
} from "../../components/Icons";
import { useProvider } from "../../contexts/provider";

function DetailsSection() {
  const provider = useProvider();
  const [readMore, setReadMore] = useState(false);
  const handleReadMore = () => {
    setReadMore(!readMore);
  };
  const clampStyles = useSpring({
    loop: false,
    to: [
      { marginTop: readMore ? "30px" : "-5px" },
      { marginTop: readMore ? "0px" : "0px" },
    ],
    from: { marginTop: readMore ? "50px" : "-50px" },
  });

  const styles = useSpring({
    transform: readMore ? "rotate(0deg)" : "rotate(180deg)",
  });

  let content;
  if (provider && provider.provider) {
    const { name, title, occupation, bio, location, languages, education } =
      provider.provider;
    content = (
      <>
        <div className="container mx-auto max-w-screen-sm bg-white px-[32px] py-[24px] flex-col border-b border-neutral3 overflow-hidden">
          <div className="flex-col">
            <div className="flex items-center mb-[10px]">
              <div>
                <h2 className="text-sub1 text-neutral9 font-medium mb-[6px]">
                  {name}, {title}
                </h2>
                <p className="text-label3 text-neutral7 font-medium text-subTitle">
                  {occupation}
                </p>
              </div>
            </div>
            <animated.p
              className={`text-body3 text-neutral7 mb-[16px] text-subTitle ${
                readMore ? "" : "line-clamp-2"
              }`}
              style={clampStyles}
            >
              {bio}
            </animated.p>

            <button
              className="text-link3 text-secondary5 font-medium flex items-center"
              onClick={handleReadMore}
            >
              <span className="mr-[6px] transition-all duration-150">
                Read {readMore ? "less" : "more"}
              </span>{" "}
              <span>
                <TopChevronIcon
                  styles={styles as unknown as React.CSSProperties}
                />
              </span>
            </button>
          </div>
        </div>

        <div className="container mx-auto max-w-screen-sm mb-[6px] bg-white px-[32px] py-[24px] flex-col">
          <div className="flex-col">
            <div className="flex items-center mb-[16px]">
              <div className="mr-[12px] w-[48px] h-[48px] bg-neutral1 flex items-center justify-center rounded-[3px]">
                <MapIcon />
              </div>
              <div>
                <h2 className="text-input1 text-neutral7 mb-[6px]">Location</h2>
                <p className="text-label3 text-neutral8 font-medium text-subTitle">
                  {location}
                </p>
              </div>
            </div>

            <div className="flex items-center mb-[16px]">
              <div className="mr-[12px] w-[48px] h-[48px] bg-neutral1 flex items-center justify-center rounded-[3px]">
                <EducationIcon />
              </div>
              <div>
                <h2 className="text-input1 text-neutral7 mb-[6px]">
                  Education
                </h2>
                <p className="text-label3 text-neutral8 font-medium text-subTitle">
                  {education}
                </p>
              </div>
            </div>

            <div className="flex items-center mb-[16px]">
              <div className="mr-[12px] w-[48px] h-[48px] bg-neutral1 flex items-center justify-center rounded-[3px]">
                <GlobeIcon />
              </div>
              <div>
                <h2 className="text-input1 text-neutral7 mb-[6px]">Language</h2>
                <p className="text-label3 text-neutral8 font-medium text-subTitle">
                  {languages?.join(", ")}
                </p>
              </div>
            </div>

            <button className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-primary5 duration-300 text-button4 text-white font-medium rounded-full bg-primary5 py-[18px] w-[100%]">
              Book with us
            </button>
          </div>
        </div>
      </>
    );
  } else {
    content = <></>;
  }
  return <div>{content}</div>;
}

export default DetailsSection;
