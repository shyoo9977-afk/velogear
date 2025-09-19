import React, { useEffect, useState } from "react";
import "../App.css";
import RecomCard from "../component/RecomCard";
import HeroCarousel from "../component/HeroCarousel";

const Home = () => {
  const [heroItems, setHeroItems] = useState([]);  // HeroCarousel용: 전체
  const [recs, setRecs] = useState([]);            // RecomCard용: 추천만

  useEffect(() => {
    fetch("/db.json")
      .then((r) => r.json())
      .then((data) => {
        const items = Array.isArray(data.items) ? data.items : [];

        // HeroCarousel → 전체 항목
        setHeroItems(items);

        // RecomCard → recommended: true 항목만
        const onlyRecommended = items.filter((m) => m.recommended );
        //console.log("추천만: ", onlyRecommended)

        const firstFour = onlyRecommended.slice(0, 4);
        //console.log("앞4개: ", firstFour)

        setRecs(firstFour);
      })
      .catch((err) => console.error("db.json 로드 실패:", err));
  }, []);

  return (
    <div className="content">
      {/* 1) HeroCarousel: 전체 항목 */}
      <HeroCarousel items={heroItems} />

      {/* 2) 소개 영역 */}
      <div className="intro-text">
        <h2 className="home-title">
          <span>"라이딩을 더 스마트하게,</span><br />
          <span>기어 선택은 더 쉽게"</span>
        </h2>
        <div className="text-area">
          <p>
            VeloGear Finder는 사이클링과 아웃도어를 사랑하는 라이더를 위한 맞춤형
            기어 탐색 플랫폼입니다.
            <br />
            최신 장비 트렌드, 전문가 추천 아이템, 그리고 태그 기반 필터로 원하는
            장비를 한눈에 확인하세요.
            <br />
            당신의 라이딩이 더 즐겁고 편안해지도록 최적의 기어를 찾아드립니다.
          </p>
        </div>
      </div>

      {/* 3) RecomCard: 추천 항목만 */}
      <div className="recommendArea">
        <h2 className="home-title">오늘의 PICK</h2>
        <div className="recom-card">
          {recs.map((item) => (
            <RecomCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
