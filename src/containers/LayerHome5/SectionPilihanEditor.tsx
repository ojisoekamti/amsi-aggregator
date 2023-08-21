import React, { FC } from "react";
import Heading3 from "components/Heading/Heading3";
import { PostDataType } from "data/types";
import Card15 from "components/Card15/Card15";
import { DEMO_POSTS } from "data/posts";

export interface SectionPilihanEditorProps {
  relatedPosts?: PostDataType[];
  moreFromAuthorPosts?: PostDataType[];
  heading: string;
}

// DEMO DATA
const demoRelated: PostDataType[] = DEMO_POSTS.filter((_: any, i: number) => i >= 6 && i < 10);

const SectionPilihanEditor: FC<SectionPilihanEditorProps> = ({ relatedPosts = demoRelated, heading }) => {
  return (
    <div className="">
      <Heading3 isCenter>{heading}</Heading3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
        {relatedPosts.map((post) => (
          <Card15 key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default SectionPilihanEditor;
