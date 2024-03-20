/**
 * @type {import('@headstartwp/core').PostParams}
 */
export const singleParams = { postType: ["page", "post"] };

/**
 * @type {import('@headstartwp/core').PostParams}
 */
export const pageParams = {
  postType: "page",
  _fields: ["content"],
};

/**
 * @type {import('@headstartwp/core').PostParams}
 */
export const aboutPageParams = {
  postType: "page",
  slug: "about",
  _fields: ["title", "content"],
};

/**
 * @type {import('@headstartwp/core').PostParams}
 */
export const workParams = {
  postType: "work",
};

/**
 * @type {import('@headstartwp/core').PostsArchiveParams}
 */
export const worksParams = {
  postType: "work",
  _fields: [
    "id",
    "title",
    "slug",
    "meta_box",
    "excerpt",
    "_links.wp:term",
    "_links.wp:featuredmedia",
  ],
};

/**
 * @type {import('@headstartwp/core').TaxonomyArchiveParams}
 */
export const techStackTaxonomyParams = {
  taxonomy: "tech-stack",
  _fields: ["id", "name", "slug", "is_filterable"],
  hide_empty: true,
  per_page: 35,
};
