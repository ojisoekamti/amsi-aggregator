import __taxonomies from "./jsons/__taxonomies.json";
import { TaxonomyType } from "./types";

import axios from "axios";

async function callAPIDataCategory() {
  const response = await axios.get(import.meta.env.VITE_API_URL + "/taxonomies?limit=100");
  return response.data.data;
}

let dataCategory = await callAPIDataCategory();

const DEMO_CATEGORIES: TaxonomyType[] = dataCategory
  .filter((item: any) => item.taxonomy == "category")
  .map((item: any) => ({
    ...item,
  }));
console.log(DEMO_CATEGORIES);

const DEMO_TAGS: TaxonomyType[] = dataCategory
  .filter((item: any) => item.taxonomy == "tag")
  .map((item: any) => ({
    ...item,
  }));

export { DEMO_CATEGORIES, DEMO_TAGS };
