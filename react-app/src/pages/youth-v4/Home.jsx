import React from "react";
import Header from "../../components/youth/Header";
import BannerGrid from "../../components/youth/BannerGrid";
import CategoryMenu from "../../components/youth/CategoryMenu";
import InfoCards from "../../components/youth/InfoCards";
import CustomSearch from "../../components/youth/CustomSearch";
import SupportInfo from "../../components/youth/SupportInfo";
import BannerAd from "../../components/youth/BannerAd";
import NoticeCarousel from "../../components/youth/NoticeCarousel";
import ApplicationList from "../../components/youth/ApplicationList";
import AgencyCards from "../../components/youth/AgencyCards";
import HashtagSection from "../../components/youth/HashtagSection";

export default function Home() {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* 헤더 */}
      <Header />

      {/* 맞춤형 정책검색 (최상단) */}
      <CustomSearch />

      <div className="container-main">
        {/* 배너 그리드 (메인 + 서브 배너들) */}
        <BannerGrid />

        {/* 카테고리 아이콘 메뉴 */}
        <CategoryMenu />

        {/* 맞춤형 정보 */}
        <InfoCards />

        {/* 청년지원정보 */}
        <SupportInfo />

        {/* 배너 광고 */}
        <BannerAd />

        {/* 공지사항 */}
        <NoticeCarousel />

        {/* 신청접수중인 정책 */}
        <ApplicationList />

        {/* 서울시청년기관 */}
        <AgencyCards />

        {/* 해시태그 섹션 */}
        <HashtagSection />
      </div>
    </div>
  );
}
