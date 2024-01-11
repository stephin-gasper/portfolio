import dynamic from "next/dynamic";

/**
 * Critical: prevents "TypeError: url.replace is not a function" error
 */
const Resume = dynamic(() => import("@/modules/resume/Resume/index"), {
  ssr: false,
});

const ResumePage = () => <Resume />;

export default ResumePage;
