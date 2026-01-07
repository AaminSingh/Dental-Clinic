import { useState } from "react";
import { MoveHorizontal } from "lucide-react";

interface BeforeAfterProps {
    beforeImage: string;
    afterImage: string;
    label?: string;
}

export const BeforeAfter = ({ beforeImage, afterImage, label }: BeforeAfterProps) => {
    const [sliderPosition, setSliderPosition] = useState(50);

    const handleMove = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSliderPosition(Number(e.target.value));
    };

    return (
        <div className="relative w-full max-w-3xl mx-auto overflow-hidden rounded-2xl shadow-xl aspect-video group select-none">
            {/* After Image (Background) */}
            <img
                src={afterImage}
                alt="After"
                className="absolute inset-0 w-full h-full object-cover"
            />

            {/* Label for After */}
            <div className="absolute top-4 right-4 bg-black/50 text-white px-3 py-1 rounded-full text-xs font-bold backdrop-blur-md z-10 pointer-events-none">
                AFTER
            </div>

            {/* Before Image (Clipped) */}
            <div
                className="absolute inset-0 w-full h-full overflow-hidden"
                style={{ width: `${sliderPosition}%` }}
            >
                <img
                    src={beforeImage}
                    alt="Before"
                    className="absolute top-0 left-0 h-full max-w-none"
                    style={{ width: "100vw", maxWidth: "48rem" }} // adjust based on container max-width (3xl is 48rem)
                />
                {/* Fix for scaling: we need the inner image to match the container width exactly to align. 
            A better approach is using percentages if the container is responsive.
            Let's keep it simple: object-cover works best if both images are identical dimensions. 
        */}
            </div>

            {/* Label for Before */}
            <div className="absolute top-4 left-4 bg-black/50 text-white px-3 py-1 rounded-full text-xs font-bold backdrop-blur-md z-10 pointer-events-none">
                BEFORE
            </div>

            {/* Slider Handle */}
            <div
                className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize z-20"
                style={{ left: `${sliderPosition}%` }}
            >
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center">
                    <MoveHorizontal className="w-4 h-4 text-primary" />
                </div>
            </div>

            {/* Invisible Range Input for Interaction */}
            <input
                type="range"
                min="0"
                max="100"
                value={sliderPosition}
                onChange={handleMove}
                className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-30"
            />

            {label && (
                <div className="absolute bottom-4 left-0 right-0 text-center pointer-events-none z-10">
                    <span className="bg-black/60 text-white px-4 py-2 rounded-full text-sm font-medium backdrop-blur-md">
                        {label}
                    </span>
                </div>
            )}
        </div>
    );
};
