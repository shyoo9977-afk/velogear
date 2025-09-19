import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

const MealsDetail = () => {
    const {id} = useParams();
    const [item, setItem] = useState(null);

    useEffect(() => {
        fetch(`${process.env.PUBLIC_URL}/db.json`)
          .then(r => r.json()) //json 형식으로 데이터 변환
          .then((data) => {
            const found = data.items.find((m) => m.id === parseInt(id));
            setItem(found)
          })
          .catch(console.error);
      }, [id]); //id가 바뀔 때마다 실행

      if (!item) return <p>데이터를 불러오는 중...</p> 

  return (

    <section>
        <div className="card">
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
    </section>
  )
}

export default MealsDetail