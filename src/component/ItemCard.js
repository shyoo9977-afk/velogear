// ./component/ItemCard.js
import React from 'react'
import { useNavigate } from 'react-router-dom'

const ItemCard = ({ item }) => {
  const navigate = useNavigate();
  const goDetail = () => {
    navigate(`/detail/${item.id}`, { state: { item } }); // 선택 아이템 전달
  };

  return (
    <div className="card" onClick={goDetail} style={{cursor:'pointer'}}>
      <img src={item.imageUrl} alt={item.title} />
      <div className="item-text">
        <h3>{item.title}</h3>
        <div className="info">
          <span className="price">{Number(item.price).toLocaleString()}원</span>
        </div>
      </div>
    </div>
  );
};

export default ItemCard
