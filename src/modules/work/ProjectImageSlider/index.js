import { useRef, useState } from "react";
import PropTypes from "prop-types";

import Pagination from "@/components/Pagination";
import { WORK_PLACEHOLDER_IMAGE_PATH } from "@/modules/works/Works.constants";

import ProjectImage from "./ProjectImage";
import {
  projectImageSlidesBtnContainerStyles,
  projectImageSlidesContainerStyles,
} from "./ProjectImageSlider.style";
import {
  PROJECT_IMAGE_SLIDER_PAGE_SIZE,
  PROJECT_IMAGE_SLIDER_PAGINATION_CONTEXT_NAME,
} from "./ProjectImageSlider.constants";

const ProjectImageSlider = ({ imgSrcs }) => {
  const [currentSliderNumber, setCurrentSliderNumber] = useState(1);
  const sliderRef = useRef(null);

  const onPageChange = (slideNumber) => {
    setCurrentSliderNumber(slideNumber);
    const container = sliderRef.current;
    container.scrollLeft = container.offsetWidth * (slideNumber - 1);
  };

  return (
    <section aria-labelledby="sliderheading">
      <h3 id="sliderheading" className="visually-hidden">
        Portfolio item images
      </h3>
      <ul className={projectImageSlidesContainerStyles} ref={sliderRef}>
        {imgSrcs.length > 1 ? (
          imgSrcs.map(({ src, id }, index) => (
            <ProjectImage
              key={id}
              src={src}
              containerAccessibility={{
                ...(index + 1 === currentSliderNumber
                  ? {}
                  : { "aria-hidden": "true" }),
              }}
            />
          ))
        ) : (
          <ProjectImage
            src={imgSrcs?.[0]?.src || WORK_PLACEHOLDER_IMAGE_PATH}
          />
        )}
      </ul>
      {imgSrcs.length > 1 ? (
        <div className={projectImageSlidesBtnContainerStyles}>
          <Pagination
            currentPage={currentSliderNumber}
            totalCount={imgSrcs.length}
            pageSize={PROJECT_IMAGE_SLIDER_PAGE_SIZE}
            onPageChange={onPageChange}
            paginationContextName={PROJECT_IMAGE_SLIDER_PAGINATION_CONTEXT_NAME}
          />
        </div>
      ) : null}
    </section>
  );
};

ProjectImageSlider.propTypes = {
  imgSrcs: PropTypes.arrayOf(
    PropTypes.shape({ id: PropTypes.string, src: PropTypes.string }),
  ).isRequired,
};

export default ProjectImageSlider;
