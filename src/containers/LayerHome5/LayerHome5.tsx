import React from "react";
import SectionLatestPosts from "./SectionLatestPosts";
import SectionSliderPosts from "../PageHome/SectionSliderPosts";
import SectionMagazine1 from "../PageHome/SectionMagazine1";
import SectionVideos from "../PageHome/SectionVideos";
import SectionLargeSlider from "../PageHome/SectionLargeSlider";
import { Helmet } from "react-helmet";
import BackgroundSection from "components/BackgroundSection/BackgroundSection";
import SectionSubscribe2 from "components/SectionSubscribe2/SectionSubscribe2";
import SectionGridAuthorBox from "components/SectionGridAuthorBox/SectionGridAuthorBox";
import { PostDataType } from "data/types";
import { DEMO_POSTS, DEMO_POSTS_AUDIO, DEMO_POSTS_GALLERY, DEMO_POSTS_VIDEO } from "data/posts";
import { DEMO_CATEGORIES } from "data/taxonomies";
import { DEMO_AUTHORS } from "data/authors";
import SectionBecomeAnAuthor from "components/SectionBecomeAnAuthor/SectionBecomeAnAuthor";
import SectionSliderNewCategories from "components/SectionSliderNewCategories/SectionSliderNewCategories";
import SectionSliderNewAuthors from "components/SectionSliderNewAthors/SectionSliderNewAuthors";
import SectionMagazine4 from "../PageHome/SectionMagazine4";
import SectionAds from "../PageHome/SectionAds";
import SectionGridPosts from "../PageHome/SectionGridPosts";
import SectionMagazine7 from "../PageHome/SectionMagazine7";
import SectionMagazine8 from "../PageHome/SectionMagazine8";
import SectionMagazine9 from "../PageHome/SectionMagazine9";
import BgGlassmorphism from "components/BgGlassmorphism/BgGlassmorphism";
import SectionPilihanEditor from "./SectionPilihanEditor";
import SectionMagazine10 from "./SectionMagazine10";
import SectionHero3 from "./SectionHero3";
import SectionMagazine2 from "./SectionMagazine2";

//
const POSTS: PostDataType[] = DEMO_POSTS;
//
const MAGAZINE1_TABS = ["all", "Garden", "Fitness", "Design"];
const MAGAZINE1_POSTS = DEMO_POSTS.filter((_, i) => i >= 8 && i < 16);
const MAGAZINE2_POSTS = DEMO_POSTS.filter((_, i) => i >= 0 && i < 7);
//

const LayerHome5: React.FC = () => {
  return (
    <div className="nc-PageHome relative">
      <Helmet>
        <title>Home</title>
      </Helmet>

      {/* ======== ALL SECTIONS ======== */}
      <div className="relative overflow-hidden">
        {/* ======== BG GLASS ======== */}
        <BgGlassmorphism />

        {/* ======= START CONTAINER ============= */}
        <div className="container relative">
          {/* === SECTION 4 === */}
          <SectionMagazine2 className="pt-5 lg:pt-5" heading="Latest Articles" posts={MAGAZINE2_POSTS} tabs={MAGAZINE1_TABS} />

          {/* Pilihan Editor */}
          <div className="pt-10 pb-16 md:py-16 lg:pb-28 lg:pt-24 ">
            <SectionPilihanEditor heading="Pilihan Editor" />
          </div>

          {/* === Ads === */}
          <div className="pb-16">
            <SectionAds />
          </div>
        </div>

        <div className="container ">
          {/* === SECTION 17 === */}
          <SectionLatestPosts
            className="pb-16 lg:pb-28"
            posts={DEMO_POSTS.filter((_, i) => i > 8 && i < 16)}
            widgetPosts={DEMO_POSTS.filter((_, i) => i > 2 && i < 7)}
            categories={DEMO_CATEGORIES.filter((_, i) => i > 2 && i < 8)}
            tags={DEMO_CATEGORIES.filter((_, i) => i > 2 && i < 8)}
          />
          {/* === Ads === */}
          <div className="pb-16">
            <SectionAds />
          </div>

          {/* === Infografis === */}
          <div className="relative py-16">
            <SectionSliderPosts
              postCardName="card9"
              heading="Infografis"
              subHeading=""
              sliderStype="style2"
              posts={DEMO_POSTS_AUDIO.filter((_, i) => i > 3 && i < 10)}
              uniqueSliderClass="pageHome-section6"
            />
          </div>
        </div>
        {/* ======= END CONTAINER ============= */}
      </div>
    </div>
  );
};

export default LayerHome5;
