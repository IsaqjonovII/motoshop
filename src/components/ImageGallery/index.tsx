import LazyImage from "components/LazyImage";
import { useRef, useEffect, PropsWithChildren } from "react";
import { Fancybox as NativeFancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";
import "@fancyapps/ui/dist/carousel/carousel.thumbs.css";
import type { OptionsType } from "@fancyapps/ui/types/Fancybox/options";

interface FancyProps {
  delegate?: string;
  options?: Partial<OptionsType>;
}

function FancyBox(props: PropsWithChildren<FancyProps>) {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;

    const delegate = props.delegate || "[data-fancybox]";
    const options = props.options || {};

    NativeFancybox.bind(container, delegate, options);

    return () => {
      NativeFancybox.unbind(container);
      NativeFancybox.close();
    };
  });

  return <div ref={containerRef}>{props.children}</div>;
}

interface IGalleryData {
  images: string[];
  title: string;
}
import StyledGallery from "./style";
import Carousel from "./Carousel";
import { SlSizeFullscreen } from "react-icons/sl";
function ImageGallery({ images, title }: IGalleryData) {
  return (
    <StyledGallery>
      <FancyBox
        options={{
          Carousel: {
            infinite: true,
            transition: "classic",
          },
        }}
      >
        <Carousel>
          {images.map((img_src, index) => (
            <div
              key={img_src + index}
              className="f-carousel__slide gallery__images"
              data-fancybox="gallery"
              data-src={img_src}
              data-thumb-src={img_src}
            >
              <LazyImage className="gallery__img" src={img_src} alt={title} />
              <SlSizeFullscreen className="icon fullscreen-icon" />
            </div>
          ))}
        </Carousel>
      </FancyBox>
    </StyledGallery>
  );
}
export default ImageGallery;
