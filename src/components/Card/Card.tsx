import React from 'react';

interface CardProps {
    imageUrl: string;
    altText: string;
    name: string;
    title: string;
    availability: string;
    children: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ imageUrl, altText, name, title, availability, children }) => {
    return (
        <div className="container mx-auto max-w-screen-sm mb-[6px] bg-white pl-[16px] pt-[10px] pb-[14px] pr-[16px]">
            <div className="flex items-center mb-[10px]">
                <div className="w-[56px] border rounded-full mr-[12px]">
                    <img
                        src={`../images/${imageUrl}`}
                        alt={altText}
                        className="rounded-full px-[4px] py-[4px]"
                    />
                </div>
                <div>
                    <h2 className="text-label5 text-neutral9 font-medium mb-[6px]">{name}</h2>
                    <p className="text-input1 text-neutral7 text-subTitle">{title}</p>
                </div>
            </div>
            <p className="text-body3 text-neutral7 mb-[12px] text-subTitle line-clamp-2">
                {children}
            </p>
            <button className="text-input1 text-neutral8 font-medium rounded-full bg-secondary2 h-[25px] py-[6px] px-[12px]">
                Available {availability}
            </button>
        </div>
    );
};

export default Card;
