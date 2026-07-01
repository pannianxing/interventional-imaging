import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import Home from "@/pages/Home";
import Technology from "@/pages/Technology";
import TechnologyDetail from "@/pages/TechnologyDetail";
import Cases from "@/pages/Cases";
import CaseDetail from "@/pages/CaseDetail";
import Equipment from "@/pages/Equipment";
import EquipmentDetail from "@/pages/EquipmentDetail";
import Experts from "@/pages/Experts";
import ExpertArticleDetail from "@/pages/ExpertArticleDetail";
import Wechat from "@/pages/Wechat";
import WechatArticleDetail from "@/pages/WechatArticleDetail";
import Search from "@/pages/Search";

export default function App() {
  return (
    <Router basename="/interventional-imaging/">
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/technology" element={<Technology />} />
          <Route path="/technology/:id" element={<TechnologyDetail />} />
          <Route path="/cases" element={<Cases />} />
          <Route path="/cases/:id" element={<CaseDetail />} />
          <Route path="/equipment" element={<Equipment />} />
          <Route path="/equipment/brand/:brand" element={<Equipment />} />
          <Route path="/equipment/detail/:id" element={<EquipmentDetail />} />
          <Route path="/experts" element={<Experts />} />
          <Route path="/experts/:id" element={<Experts />} />
          <Route path="/experts/article/:id" element={<ExpertArticleDetail />} />
          <Route path="/wechat" element={<Wechat />} />
          <Route path="/wechat/:id" element={<WechatArticleDetail />} />
          <Route path="/search" element={<Search />} />
        </Route>
      </Routes>
    </Router>
  );
}
