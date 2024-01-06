import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { defaultElement } from "@headstartwp/core/react";
import { isElement } from "@headstartwp/core";
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

const SkillsBlock = ({ domNode: node = defaultElement }) => {
  const [skills, setSkills] = useState([]);
  useEffect(() => {
    const isImageTag = (elem) => elem.firstChild?.name === "img";

    const getSkills = () =>
      node.children.reduce((accumulator, currentValue) => {
        if (isElement(currentValue) && isImageTag(currentValue)) {
          const { src, alt } = currentValue.firstChild.attribs;
          return [...accumulator, { src, alt }];
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
  domNode: PropTypes.shape({}),
};

export default SkillsBlock;
