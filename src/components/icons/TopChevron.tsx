import * as React from 'react';
import { animated } from 'react-spring';

interface TopChevronProps {
    className?: string;
    styles?: React.CSSProperties;
}
const TopChevron = ({ className, styles }: TopChevronProps) => (
    <animated.svg
        style={styles}
        width={12}
        height={7}
        fill=""
        xmlns="http://www.w3.org/2000/svg"
        className={className}
    >
        <path
            d="m6.787.554 4.89 4.641c.43.408.43 1.08 0 1.487a1.157 1.157 0 0 1-1.566 0L6.003 2.797 1.896 6.694a1.157 1.157 0 0 1-1.567 0A1.039 1.039 0 0 1 0 5.951c0-.276.114-.54.329-.743L5.219.567c.43-.42 1.138-.42 1.568-.013Z"
            fill="#6277F0"
        />
    </animated.svg>
);

export default TopChevron;
