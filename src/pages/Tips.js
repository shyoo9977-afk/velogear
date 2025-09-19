// src/pages/Tips.js
import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import "./Tips.css";

// 아이콘
import { FiNavigation, FiSettings, FiTrendingUp } from "react-icons/fi";

const Tips = () => {
  return (
    <div className="contents tips-wrap">
      <h2 className="tips-title">TIPS</h2>

      <Tabs selectedTabClassName="is-selected" focusTabOnClick>
        <TabList className="tips-tabs" aria-label="TIPS 하위 탭">
          <Tab className="tab" selectedClassName="active">
            <FiNavigation className="tab-ico" aria-hidden /> 라이딩 꿀팁
          </Tab>
          <Tab className="tab" selectedClassName="active">
            <FiSettings className="tab-ico" aria-hidden /> 기어 유지·관리
          </Tab>
          <Tab className="tab" selectedClassName="active">
            <FiTrendingUp className="tab-ico" aria-hidden /> 라이딩 최적화 전략
          </Tab>
        </TabList>

        {/* Panel 1 */}
        <TabPanel className="react-tabs__tab-panel" selectedClassName="react-tabs__tab-panel--selected">
          <section className="tips-section anim">
            <h3>안전과 매너</h3>
            <ul>
              <li>차로 주행 원칙, 손신호, 시선 처리(좌·우·후방 확인) 습관화</li>
              <li>그룹 주행 시 앞차와 간격 유지, 풀/싱글 파일 전환 타이밍 익히기</li>
              <li>야간: 전조등 고정 모드, 후미등 점멸, 반사 디테일 착용</li>
            </ul>

            <h3>업힐·다운힐</h3>
            <ul>
              <li>업힐: 케이던스 75–90 유지, 기어는 한 칸 먼저 예비 변속</li>
              <li>다운힐: 코너 전 감속·후 가속, 팔/무릎 살짝 굽혀 충격 흡수</li>
            </ul>

            <h3>출발 전 체크리스트</h3>
            <ul>
              <li>타이어 공기압(로드 85–95psi 기준, 체중/폭에 맞게 조정)</li>
              <li>브레이크, 체인 윤활, 퀵릴리스/쓰루액슬 체결 상태</li>
            </ul>
          </section>
        </TabPanel>

        {/* Panel 2 */}
        <TabPanel className="react-tabs__tab-panel" selectedClassName="react-tabs__tab-panel--selected">
          <section className="tips-section anim">
            <h3>자전거</h3>
            <ul>
              <li>체인: 150–250km마다 청소·윤활(건식/습식 환경에 맞춰 선택)</li>
              <li>빗길 후: 물세척 → 물기 제거 → 윤활 → 프레임 방청 스프레이</li>
              <li>브레이크: 패드 마모선 수시 점검, 유압은 에어 유입 시 블리딩</li>
            </ul>

            <h3>의류·장비</h3>
            <ul>
              <li>빕숏/저지: 세탁망, 중성세제, 찬물·약탈수, 그늘 건조</li>
              <li>헬멧/아이웨어: 염분 제거, 렌즈는 마이크로화이버로 건식 닦기</li>
              <li>배터리 장비: 40–60% 잔량으로 보관, 극온·직사광선 피하기</li>
            </ul>
          </section>
        </TabPanel>

        {/* Panel 3 */}
        <TabPanel className="react-tabs__tab-panel" selectedClassName="react-tabs__tab-panel--selected">
          <section className="tips-section anim">
            <h3>데이터 활용</h3>
            <ul>
              <li>심박: Z2로 지구력, Z3–4 인터벌로 페이스·변속 감각 향상</li>
              <li>파워/케이던스: 장거리는 케이던스 85±5로 근피로 분산</li>
              <li>GPS 컴퓨터/센서: 오토랩·세그먼트로 루틴화된 페이스 관리</li>
            </ul>

            <h3>영양/보급</h3>
            <ul>
              <li>탄수 60–90g/시간, 전해질 300–600mg/시간(기온·발한량 고려)</li>
              <li>2시간 이상: 젤+바 혼합, 카페인은 후반부 집중력 유지용</li>
            </ul>

            <h3>환경 대응</h3>
            <ul>
              <li>기온·바람·강수에 따라 레이어링/타이어 압/경량화 조정</li>
              <li>바람 강한 날: 복귀 시 추풍 받는 동선으로 설계</li>
            </ul>
          </section>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Tips;
