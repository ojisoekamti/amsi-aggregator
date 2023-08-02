import Card20Small from "components/Card20Small/Card20Small";
import WidgetHeading1 from "components/WidgetHeading1/WidgetHeading1";
import { PostDataType } from "data/types";
import React, { FC } from "react";

export interface WidgetPosts2Props {
  className?: string;
  posts: PostDataType[];
}

const WidgetPosts2: FC<WidgetPosts2Props> = ({ className = "bg-neutral-100 dark:bg-neutral-800", posts }) => {
  return (
    <div className={`nc-WidgetPosts rounded-3xl overflow-hidden ${className}`} data-nc-id="WidgetPosts">
      <WidgetHeading1 title="Terpopuler" viewAll={{ label: "View all", href: "/#" }} />
      <div className="flex flex-col divide-y divide-neutral-200 dark:divide-neutral-700">
        {posts.map((post) => (
          <Card20Small className="p-4 xl:px-5 xl:py-6 hover:bg-neutral-200 dark:hover:bg-neutral-700" key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default WidgetPosts2;
