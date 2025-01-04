import { useState } from "react";

const LETTER_SPACING = 30
const R_INITIAL_DISTANCE = LETTER_SPACING + 10
const R_SLIDE_DURATION = 0.5
const R_SLIDE_DISTANCE = LETTER_SPACING * 5 + LETTER_SPACING
const OTHER_LETTERS_DURATION = 0.5

const FIRST_NAME_CHARS = ["A", "R", "A", "H"]
const LAST_NAME_CHARS = ["I", "A", "Z", "A", "T", "I"]

export const Logo = () => {
    const [isHovered, setIsHovered] = useState(false);

    const viewBoxWidth = R_SLIDE_DISTANCE + LETTER_SPACING * (LAST_NAME_CHARS.length + 1);
    const viewBoxHeight = 40;


    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox={`0 0 ${viewBoxWidth} ${viewBoxHeight}`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="w-full h-auto"
        >
            {/* S */}
            <text
                x="0"
                y="38"
                className="fill-black font-bold text-4xl"
                style={{
                    transition: `transform ${R_SLIDE_DURATION}s ease`,
                }}
            >
                S
            </text>

            {/* R */}
            <text
                x={isHovered ? R_SLIDE_DISTANCE : R_INITIAL_DISTANCE}
                y="38"
                className="fill-black font-bold text-4xl"
                style={{
                    transition: `transform ${R_SLIDE_DURATION}s ease`,
                }}
            >
                R
            </text>

            {/* ARAH */}
            {FIRST_NAME_CHARS.map((char, index) => (
                <text
                    key={index}
                    x={LETTER_SPACING + index * LETTER_SPACING}
                    y="38"
                    opacity={isHovered ? 1 : 0}
                    className="fill-black font-bold text-4xl"
                    style={{
                        transition: `opacity ${OTHER_LETTERS_DURATION}s ease ${index * 0.1}s`,
                    }}
                >
                    {char}
                </text>
            ))}

            {/* IAZATI */}
            {

                LAST_NAME_CHARS.map((char, index) => {

                    // kern everything after the first I
                    if (index > 0) {
                        return (
                            <text
                                key={index}
                                x={R_SLIDE_DISTANCE - 10 + LETTER_SPACING + index * LETTER_SPACING}
                                y="38"
                                opacity={isHovered ? 1 : 0}
                                className="fill-black font-bold text-4xl"
                                style={{
                                    transition: `opacity ${OTHER_LETTERS_DURATION}s ease ${index * 0.1}s`,
                                }}
                            >
                                {char}
                            </text>
                        )
                    }

                    return (
                        <text
                            key={index}
                            x={R_SLIDE_DISTANCE + LETTER_SPACING + index * LETTER_SPACING + 3}
                            y="38"
                            opacity={isHovered ? 1 : 0}
                            className="fill-black font-bold text-4xl"
                            style={{
                                transition: `opacity ${OTHER_LETTERS_DURATION}s ease ${index * 0.1}s`,
                            }}
                        >
                            {char}
                        </text>
                    )
                })}
        </svg>
    );
};

