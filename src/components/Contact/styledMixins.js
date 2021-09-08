import { css } from "styled-components";
import "./styleguide.css";

// Add styleguide.css var's to this!!!!!!!!!!!!!!!!!!!  It's not working now w/o the var's!!!!!!!!

export const NotosansBoldMidnight14px = css`
  color: var(--midnight);
  font-family: var(--font-family-noto_sans);
  font-size: var(--font-size-l2);
  font-weight: 700;
  font-style: normal;
`;

export const NotosansNormalMidnight12px = css`
  color: var(--midnight);
  font-family: var(--font-family-noto_sans);
  font-size: var(--font-size-m2);
  font-weight: 400;
  font-style: normal;
`;

export const NotosansNormalWhite12px = css`
  color: var(--white);
  font-family: var(--font-family-noto_sans);
  font-size: var(--font-size-m2);
  font-weight: 400;
  font-style: normal;
`;

export const NotosansBoldWhite26px = css`
  color: var(--white);
  font-family: var(--font-family-noto_sans);
  font-size: var(--font-size-xl);
  font-weight: 700;
  font-style: normal;
`;
