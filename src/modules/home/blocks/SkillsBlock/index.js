import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { defaultElement } from "@headstartwp/core/react";
import { isElement, isBlock, isAnchorTag, isImageTag } from "@headstartwp/core";
import { css } from "@linaria/core";

import { media } from "@/styles/breakpoints";

import Skill from "./Skill";

const skillsStyles = css`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem 0.625rem;
  padding-top: 1.375rem;
  ${media.sm} {
    column-gap: 0.75rem;
  }
`;

const SkillsBlock = ({ domNode: node }) => {
  const [skills, setSkills] = useState([]);
  useEffect(() => {
    const getSkills = () =>
      node.children.reduce((accumulator, currentValue) => {
        if (
          isElement(currentValue) &&
          isAnchorTag(currentValue?.firstChild) &&
          currentValue.firstChild.childNodes.length &&
          isImageTag(currentValue.firstChild.childNodes[0])
        ) {
          const { href } = currentValue.firstChild.attribs;
          const { src, alt } = currentValue.firstChild.childNodes[0].attribs;
          return [...accumulator, { src, alt, href }];
        }
        return accumulator;
      }, []);

    setSkills(getSkills());
  }, [node]);

  return (
    <section className={skillsStyles}>
      {skills.map((skill) => (
        <Skill key={skill.alt} {...skill} />
      ))}
    </section>
  );
};

SkillsBlock.propTypes = {
  domNode: PropTypes.shape({
    children: PropTypes.array,
  }),
  test: PropTypes.func,
};

SkillsBlock.defaultProps = {
  domNode: defaultElement,
  test: (node) =>
    isBlock(node, { tagName: "section", className: "skills-container" }),
};

export default SkillsBlock;
