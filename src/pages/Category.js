// src/pages/Category.js
import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { useEffect, useMemo, useState } from "react";
import ItemCard from "../component/ItemCard";

const GROUPS = [
  { key: "drive", label: "자전거·휠/부품", includes: ["bike", "wheel", "saddle"] },
  { key: "wear", label: "착용장비", includes: ["apparel", "shorts", "helmet", "gloves", "shoes", "glasses"] },
  { key: "elec", label: "전자장비", includes: ["computer", "sensor", "light"] },
  { key: "nutri", label: "보급·수분관리", includes: ["nutrition", "bottle"] },
  { key: "carry", label: "수납·거치·액세서리", includes: ["bag", "accessory"] },
  { key: "maint", label: "정비·공구·펌프", includes: ["maintenance", "pump"] },
  { key: "indoor", label: "인도어 트레이닝", includes: ["trainer"] },
  { key: "outdoor", label: "아웃도어·캠핑", includes: ["camp"] },
];

export default function CategoryTabs() {
  const [items, setItems] = useState([]);
  const [tab, setTab] = useState(GROUPS[0].key);

  useEffect(() => {
    fetch("./db.json")
      .then(r => r.json())
      .then(data => setItems(data.items || []))
      .catch(console.error);
  }, []);

  const cats = useMemo(() => new Set(GROUPS.find(g => g.key === tab)?.includes || []), [tab]);

  const view = useMemo(() => items.filter(it => cats.has(it.category)), [items, cats]);

  return (
    <section className="category-section">
      <h2 className="category-title">CATEGORY</h2>

      <div className="category-tabs" role="tablist" aria-label="카테고리 그룹">
        {GROUPS.map(g => (
          <button
            key={g.key}
            className={`category-tab ${tab === g.key ? "active" : ""}`}
            onClick={() => setTab(g.key)}
            role="tab"
            aria-selected={tab === g.key}
          >
            {g.label}
          </button>
        ))}
      </div>

      <div className="category-grid" aria-live="polite">
        {view.map(item => (
          <ItemCard key={item.id} item={item} />
        ))}
        {view.length === 0 && (
          <p className="empty-hint">해당 카테고리에 표시할 아이템이 없습니다.</p>
        )}
      </div>
    </section>
  );
}