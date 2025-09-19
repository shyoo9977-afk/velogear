// DetailPlus.js
import React, { useEffect, useMemo, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import Toast from "./component/Toast";
import Modal from "./component/Modal";
import './shoes.css'

export default function DetailPlus() {
  const { id } = useParams();
  const { state } = useLocation();
  const [items, setItems] = useState([]);
  const [tab, setTab] = useState("detail"); // detail | review | qna
  const [cartCount, setCartCount] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [toast, setToast] = useState(null);

  const passed = state?.item;

  useEffect(() => {
    if (passed) return;
    fetch(`${process.env.PUBLIC_URL}/db.json`)
      .then((r) => r.json())
      .then((d) => setItems(d.items || []))
      .catch(console.error);
  }, [passed]);

  const item = useMemo(() => {
    if (passed) return passed;
    const found = items.find((it) => String(it.id) === String(id));
    return found || null;
  }, [passed, items, id]);

  const onAddCart = () => {
    setCartCount((c) => c + 1);
    setToast({ message: "장바구니에 담았습니다" });
  };

  const openImage = () => setIsModalOpen(true);
  const closeImage = () => setIsModalOpen(false);

  useEffect(() => {
    if (!toast) return;
    const t = setTimeout(() => setToast(null), 1800);
    return () => clearTimeout(t);
  }, [toast]);

  if (!item) return <section className="wrap">상품 정보를 불러오는 중…</section>;

  const title = item.title ?? "상품명";
  const price = Number(item.price ?? 0).toLocaleString();
  const desc = item.description ?? "";

  return (
    <section className="shoes-wrap">
      <header>
        <h1>구매 페이지</h1>
        <div className="cart">
          <p className="meta">장바구니: {cartCount}개</p>
        </div>
      </header>

      <div className="main">
        <figure>
          <img src={item.imageUrl} alt={title} />
        </figure>
        <div className="shoes-cont">
        <div className="shoes-info">
          <h2>{title}</h2>
          <p className="price">{price}원</p>
          <p className="desc">{desc}</p>
        </div>

        <div className="action">
          <button type="button" className="btn btnPrimary" onClick={onAddCart}>
            장바구니
          </button>
          <button type="button" className="btn" onClick={openImage}>
            이미지확대
          </button>
        </div>

        <div className="tabs" role="tablist" aria-label="상품 정보 탭">
          <button
            type="button"
            role="tab"
            aria-selected={tab === "detail"}
            className={`tab ${tab === "detail" ? "active" : ""}`}
            onClick={() => setTab("detail")}
          >
            상세
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={tab === "review"}
            className={`tab ${tab === "review" ? "active" : ""}`}
            onClick={() => setTab("review")}
          >
            리뷰
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={tab === "qna"}
            className={`tab ${tab === "qna" ? "active" : ""}`}
            onClick={() => setTab("qna")}
          >
            문의
          </button>
        </div>

        <div className="tab-panel">
          {tab === "detail" && (
            <ul className="bullets">
              <li>가벼운 쿠셔닝으로 장시간 러닝에 적합</li>
              <li>통기성 좋은 매쉬 소재</li>
              <li>초보 러너에게 추천</li>
            </ul>
          )}

          {tab === "review" && (
            <div>
              <p>⭐️⭐️⭐️⭐️☆ 4.3/5 (128개)</p>
              <p>“발볼 넓은데 편해요!”</p>
            </div>
          )}

          {tab === "qna" && (
            <div>
              <p>Q. 방수되나요?</p>
              <p>A. 생활방수 정도는 가능합니다.</p>
            </div>
          )}
        </div>
      </div>
      </div>

      {isModalOpen && (
        <Modal onClose={closeImage}>
          <img
            src={item.imageUrl}
            alt={title}
            style={{ maxWidth: "100%", height: "auto" }}
          />
          <h3 style={{ marginTop: 12 }}>{title}</h3>
          <p className="price" style={{ marginTop: 4 }}>
            {price}원
          </p>
        </Modal>
      )}

      {toast && <Toast>{toast.message}</Toast>}
    </section>
  );
}
