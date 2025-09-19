// ./pages/DetailPage.jsx
import { useEffect, useMemo, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import DetailPlus from "./DetailPlus";

export default function DetailPage() {
  const { id } = useParams();
  const { state } = useLocation();
  const [items, setItems] = useState([]);
  const passed = state?.item;

  // state가 없을 때를 대비해 db.json에서 보충
  useEffect(() => {
    if (passed) return;
    fetch(`${process.env.PUBLIC_URL}/db.json`)
      .then(r => r.json())
      .then(d => setItems(d.items || []))
      .catch(console.error);
  }, [passed]);

  const item = useMemo(() => {
    if (passed) return passed;
    const found = items.find(it => String(it.id) === String(id));
    return found || null;
  }, [passed, items, id]);

  const onAddCart = () => alert("장바구니에 담았습니다.");
  const openImage = () => alert("이미지 확대(모달) 예시");

  return (
    <section className="detail-page wrap">


      {/* 하단: 기존 DetailPlus 컴포넌트 렌더 */}
      <DetailPlus onAddCart={onAddCart} openImage={openImage} />
    </section>
  );
}
