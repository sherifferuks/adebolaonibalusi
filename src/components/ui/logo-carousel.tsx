"use client";

import { useEffect, useState } from "react";
import {
    Carousel,
    CarouselApi,
    CarouselContent,
    CarouselItem,
} from "@/components/ui/Carousel";
import { TextRoll } from "./text-roll";

interface AnimatedCarouselProps {
    title?: string;
    logoCount?: number;
    autoPlay?: boolean;
    autoPlayInterval?: number;
    logos?: string[] | null;
    containerClassName?: string;
    titleClassName?: string;
    carouselClassName?: string;
    logoClassName?: string;
    itemsPerViewMobile?: number;
    itemsPerViewDesktop?: number;
    spacing?: string;
    padding?: string;
    logoContainerWidth?: string;
    logoContainerHeight?: string;
    logoImageWidth?: string;
    logoImageHeight?: string;
    logoMaxWidth?: string;
    logoMaxHeight?: string;
}

export const AnimatedCarousel: React.FC<AnimatedCarouselProps> = ({
    title = "Trusted by leading institutions",
    logoCount = 15,
    autoPlay = true,
    autoPlayInterval = 3000,
    logos = null,
    containerClassName = "",
    titleClassName = "",
    carouselClassName = "",
    logoClassName = "",
    itemsPerViewMobile = 3,
    itemsPerViewDesktop = 5,
    spacing = "gap-12",
    padding = "py-12",
    logoContainerWidth = "w-40",
    logoContainerHeight = "h-20",
    logoImageWidth = "w-auto",
    logoImageHeight = "h-8",
    logoMaxWidth = "",
    logoMaxHeight = "",
}) => {
    const [api, setApi] = useState<CarouselApi>();
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        if (!api || !autoPlay) {
            return;
        }

        const timer = setInterval(() => {
            if (api.selectedScrollSnap() + 1 === api.scrollSnapList().length) {
                setCurrent(0);
                api.scrollTo(0);
            } else {
                api.scrollNext();
                setCurrent(current + 1);
            }
        }, autoPlayInterval);

        return () => clearInterval(timer);
    }, [api, current, autoPlay, autoPlayInterval]);

    const logoItems = logos || Array.from({ length: logoCount }, (_, i) => `https://placehold.co/100x40/png?text=Logo+${i + 1}`);

    // Combine logo image size classes
    const logoImageSizeClasses = `${logoImageWidth} ${logoImageHeight} ${logoMaxWidth} ${logoMaxHeight}`.trim();

    return (
        <div className={`w-full ${padding} ${containerClassName}`}>
            <div className="w-full">
                <div className={`flex flex-col ${spacing}`}>
                    <h2 className={`text-xs font-light uppercase tracking-[0.2em] text-white/50 mb-4 ${titleClassName}`}>
                        <TextRoll>{title}</TextRoll>
                    </h2>

                    <div className="relative overflow-hidden">
                        <Carousel
                            setApi={setApi}
                            className={`w-full ${carouselClassName}`}
                            opts={{
                                loop: true,
                                align: "start"
                            }}
                        >
                            <CarouselContent>
                                {logoItems.map((logo, index) => (
                                    <CarouselItem className={`basis-1/${itemsPerViewMobile} lg:basis-1/${itemsPerViewDesktop}`} key={index}>
                                        <div className={`flex items-center justify-center p-2 opacity-50 hover:opacity-100 transition-opacity duration-500 ${logoContainerWidth} ${logoContainerHeight} ${logoClassName}`}>
                                            <img
                                                src={logo}
                                                alt={`Logo ${index + 1}`}
                                                className={`${logoImageSizeClasses} object-contain brightness-0 invert`}
                                            />
                                        </div>
                                    </CarouselItem>
                                ))}
                            </CarouselContent>
                        </Carousel>

                        {/* Fades */}
                        <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-black/0 to-transparent pointer-events-none" />
                        <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-black/20 to-transparent pointer-events-none" />
                    </div>
                </div>
            </div>
        </div>
    );
};
