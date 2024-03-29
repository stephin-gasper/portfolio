import { Fragment, useRef } from "react";
import PropTypes from "prop-types";
import { cx } from "@linaria/core";
import Link from "next/link";
import Image from "next/image";
import { HtmlDecoder } from "@headstartwp/core/react";

import { WORK_PLACEHOLDER_IMAGE_PATH } from "../Works.constants";
import {
  cardDescriptionStyles,
  cardImageStyles,
  cardContentStyles,
  cardWrapperStyles,
  cardTitleStyles,
  techStackHighlightStyles,
  teckStackHighlightItems,
  cardTitleLinkStyles,
  cardInnerStyles,
} from "./Card.style";

const Card = ({
  id,
  href,
  imgSrc,
  title,
  techStackHighlights,
  lazyLoadImage,
  children,
}) => {
  const linkRef = useRef();

  const onCardPress = (e) => {
    if (linkRef.current !== e.target) {
      linkRef.current.click();
    }
  };

  return (
    <li className={cardWrapperStyles}>
      {
        // eslint-disable-next-line jsx-a11y/no-static-element-interactions
        <div
          className={cardInnerStyles}
          onClick={onCardPress}
          onKeyDown={onCardPress}
        >
          <div className={cardContentStyles}>
            <h3 className={cardTitleStyles}>
              <Link href={href} className={cardTitleLinkStyles} ref={linkRef}>
                <HtmlDecoder html={title} />
              </Link>
            </h3>
            <p className={cardDescriptionStyles}>
              <HtmlDecoder html={children} />
            </p>
            {techStackHighlights.length ? (
              <p className={techStackHighlightStyles}>
                {techStackHighlights.map((item, index) => (
                  <Fragment key={`${id}-${item}`}>
                    <span className={teckStackHighlightItems}>{item}</span>
                    {(index + 1) % techStackHighlights.length !== 0 ? (
                      <span>&nbsp;•&nbsp;</span>
                    ) : null}
                  </Fragment>
                ))}
              </p>
            ) : null}
          </div>
          <div className="dyamic-image-wrapper">
            <Image
              src={imgSrc}
              alt="project featured image"
              fill
              sizes="100vw"
              className={cx(cardImageStyles, "dyamic-image")}
              {...(lazyLoadImage
                ? {
                    placeholder: "blur",
                    blurDataURL:
                      "data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==",
                  }
                : { priority: true })}
            />
          </div>
        </div>
      }
    </li>
  );
};

Card.propTypes = {
  id: PropTypes.number.isRequired,
  href: PropTypes.string.isRequired,
  imgSrc: PropTypes.string,
  title: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.func,
    PropTypes.elementType,
  ]).isRequired,
  techStackHighlights: PropTypes.arrayOf(PropTypes.string),
  lazyLoadImage: PropTypes.bool,
};

Card.defaultProps = {
  imgSrc: WORK_PLACEHOLDER_IMAGE_PATH,
  techStackHighlights: [],
  lazyLoadImage: true,
};

export default Card;
