import { useRef, useEffect, PropsWithChildren } from "react";
import { Carousel as NativeCarousel } from "@fancyapps/ui";
import type { OptionsType } from "@fancyapps/ui/types/Carousel/options";
import { Thumbs } from "@fancyapps/ui/dist/carousel/carousel.thumbs.esm.js";
import "@fancyapps/ui/dist/carousel/carousel.css";
import "@fancyapps/ui/dist/carousel/carousel.thumbs.css";

interface Props {
  options?: Partial<OptionsType>;
}

const defaults: Partial<OptionsType> = {
  Dots: false,
  infinite: true,
  transition: "crossfade",
  Thumbs: {
    type: "modern",
    Carousel: {
      slidesPerPage: 1,
      center: true,
      dragFree: false
    },
  },
};

function Carousel(props: PropsWithChildren<Props>) {
  const containerRef = useRef(null);
  useEffect(() => {
    const container = containerRef.current;
    const instance = new NativeCarousel(container, defaults, { Thumbs });
    return () => instance.destroy();
  });
  return (
    <div className="f-carousel" ref={containerRef}>
      {props.children}
    </div>
  );
}

export default Carousel;
