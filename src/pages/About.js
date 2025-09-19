// src/pages/About.js
import React from "react";
import "./About.css";
import aboutMovie from "../assets/cycling.mp4"


const About = () => {
  return (
    <main className="about-wrap container" role="main" aria-labelledby="aboutTitle">
      <h1 id="aboutTitle" className="about-title">About VeloGear Finder</h1>
      <div className="about-wrap">
        <video src={aboutMovie} autoPlay loop muted preload='auto' playsInline></video>
      </div>

      <section className="about-section">
        <h2 className="about-h2">소개</h2>
        <p className="about-p">
          VeloGear Finder는 라이더가 자신에게 딱 맞는 장비를 손쉽게 찾을 수 있도록 도와주는 탐색 서비스입니다.
          간결한 탐색 경험과 카테고리별 추천을 통해, 성능과 가성비를 균형 있게 고려한 선택을 지원합니다.
        </p>
      </section>

      <section className="about-section">
        <h2 className="about-h2">우리의 목표</h2>
        <ul className="about-list">
          <li>모든 라이더가 <strong>최적의 장비</strong>를 발견하도록 정보와 경험을 연결합니다.</li>
          <li><strong>성능, 가격, 사용자 후기</strong>를 한눈에 비교할 수 있게 하여 합리적인 결정을 돕습니다.</li>
          <li>사이클링 커뮤니티와 함께 성장하는 <strong>지식 공유 플랫폼</strong>을 지향합니다.</li>
        </ul>
      </section>

      <section className="about-section">
        <h2 className="about-h2">제공 서비스</h2>
        <ul className="about-grid">
          <li>
            <h3 className="about-h3">카테고리별 추천</h3>
            <p className="about-p">프레임, 휠셋, 컴포넌트, 의류 등 목적에 맞춘 탐색</p>
          </li>
          <li>
            <h3 className="about-h3">가격·리뷰 비교</h3>
            <p className="about-p">가성비와 성능을 동시에 고려한 정보 정리</p>
          </li>
          <li>
            <h3 className="about-h3">트렌드 & 팁</h3>
            <p className="about-p">신제품 소식과 정비·피팅 등 실용 팁 제공</p>
          </li>
        </ul>
      </section>

      <section className="about-section">
        <h2 className="about-h2">연락처</h2>
        <p className="about-p">
          제안이나 문의는 언제든 환영합니다.
          <br />
          이메일: <a className="about-link" href="mailto:support@velogearfinder.com">support@velogearfinder.com</a>
          <br />
          인스타그램: <a className="about-link" href="https://instagram.com/velogearfinder" target="_blank" rel="noreferrer">@velogearfinder</a>
        </p>
      </section>
    </main>
  );
};

export default About;
