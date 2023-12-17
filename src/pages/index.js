import {
  usePost,
  fetchHookData,
  useAppSettings,
  addHookData,
  handleError,
} from "@headstartwp/next";

import { resolveBatch } from "@/utils/promises";
import { indexParams } from "@/params";

import FeaturedImage from "@/components/FeaturedImage";
import Intro from "@/modules/home/Intro";

const Homepage = () => {
  return (
    <>
      <FeaturedImage src="/space.webp" alt="RaccoonSpaceGif" />
      <Intro />
    </>
  );
};

export default Homepage;

export async function getStaticProps(context) {
  let appSettings;
  let slug;
  try {
    appSettings = await fetchHookData(useAppSettings.fetcher(), context);
    /**
     * The static front-page can be set in the WP admin. The default one will be 'front-page'
     */
    slug = appSettings.data.result?.home?.slug ?? "front-page";
  } catch (e) {
    if (e.name === "EndpointError") {
      slug = "front-page";
    }
  }

  try {
    const hookData = await resolveBatch([
      {
        func: fetchHookData(usePost.fetcher(), context, {
          params: {
            ...indexParams,
            slug,
          },
        }),
      },
    ]);

    return addHookData([...hookData, appSettings], {
      props: { homePageSlug: slug },
      revalidate: 5 * 60,
    });
  } catch (e) {
    return handleError(e, context);
  }
}
