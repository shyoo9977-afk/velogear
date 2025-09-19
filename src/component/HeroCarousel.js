import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  superLargeDesktop: { breakpoint: { max: 4000, min: 3000 }, items: 5 },
  desktop: { breakpoint: { max: 3000, min: 1024 }, items: 3 },
  tablet: { breakpoint: { max: 1024, min: 464 }, items: 2 },
  mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
};

export default function HeroCarousel({ items = [] }) {
    console.log(items)
  if (!items.length) return null; // 데이터 없을 때는 렌더링 생략(혹은 플레이스홀더로 교체)

  return (
    <Carousel
      responsive={responsive}
      swipeable
      autoPlay
      autoPlaySpeed={2500}
      infinite
      className="hero-slide"
    >
      {items.map((it) => (
        <div key={it.id} className="hero-slide__item">
          <img
            src={it.imageUrl}
            alt={it.title}
            loading="lazy"
            draggable="false"
          />
        </div>
      ))}
    </Carousel>
  );
}