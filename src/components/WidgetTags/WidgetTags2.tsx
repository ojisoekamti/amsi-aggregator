import React, { FC } from "react";
import Tag from "components/Tag/Tag";
import WidgetHeading1 from "components/WidgetHeading1/WidgetHeading1";
import { TaxonomyType } from "data/types";

export interface WidgetTags2Props {
  className?: string;
  tags: TaxonomyType[];
}

const WidgetTags2: FC<WidgetTags2Props> = ({ className = "bg-neutral-100 dark:bg-neutral-800", tags }) => {
  // console.log(tags);
  return (
    <div className={`nc-WidgetTags rounded-3xl overflow-hidden ${className}`} data-nc-id="WidgetTags">
      <WidgetHeading1 title="Tag Populer" viewAll={{ label: "View all", href: "/#" }} />
      <div className="flex flex-wrap p-4 xl:p-5">
        {tags.map((tag) => (
          <Tag className="mr-2 mb-2" key={tag.id} tag={tag} />
        ))}
      </div>
    </div>
  );
};

export default WidgetTags2;
