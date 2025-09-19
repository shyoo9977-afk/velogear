//./component/RecomCard.js
import React from 'react'
import { useNavigate } from 'react-router-dom';


const RecomCard = ({ item }) => {
  const navigate = useNavigate();
  return (
    <div className="card" onClick={()=>navigate(`/category/${item.id}`)}>
      <div id="BEST_SELLER">
        <span class="badge-label">최다 판매</span>
      </div>
      <img src={item.imageUrl} alt={item.title} />
      <div className="recom-text">
        <h3>{item.title}</h3>
        <div className="info">
          <span className="price">{item.price.toLocaleString()}원</span><br />
        <div className="tags">
        {item.tags.map((tag, idx) => (
            <span key={idx} className="tag">
            <i class= "fi fi-sr-tags" ></i> {tag}
            </span>
        ))}
        </div>
        </div>
        <p className="text">{item.description}</p>
      </div>
    </div>
  );
};

export default RecomCard

