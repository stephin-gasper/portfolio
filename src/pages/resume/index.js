import {
  addHookData,
  fetchHookData,
  handleError,
  useAppSettings,
} from "@headstartwp/next";
import dynamic from "next/dynamic";

import { resolveBatch } from "@/utils/promises";

import Loader from "@/components/Loader";
import PageSEO from "@/components/PageSEO";
import FeaturedImage from "@/components/FeaturedImage";
import { RACCOON_IN_SPACE } from "@/constants/featureImage";

/**
 * Critical: prevents "TypeError: url.replace is not a function" error
 */
const Resume = dynamic(() => import("@/modules/resume/Resume/index"), {
  ssr: false,
  loading: Loader,
});

const ResumePage = () => (
  <>
    <PageSEO title="Resume" />
    <FeaturedImage
      src={RACCOON_IN_SPACE.path}
      staticImageSrc={RACCOON_IN_SPACE.staticPath}
      alt={RACCOON_IN_SPACE.alt}
    />
    <h1>Resume</h1>
    <Resume />
  </>
);

export async function getStaticProps(context) {
  try {
    // fetch batch of promises and throws errors selectively
    // passing `throw:false` will prevent errors from being thrown for that promise
    const settledPromises = await resolveBatch([
      { func: fetchHookData(useAppSettings.fetcher(), context), throw: false },
    ]);

    return addHookData(settledPromises, { revalidate: 60 });
  } catch (e) {
    return handleError(e, context);
  }
}

export default ResumePage;
