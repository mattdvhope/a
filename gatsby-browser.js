import React from "react";
import Layout from "./src/components/layout";
import MessengerChat from "./src/components/MessengerChat";

export const wrapPageElement = ({ element }) => (
  <>
    {element}
    <MessengerChat />
  </>
);

/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/browser-apis/
 */

// You can delete this file if you're not using it
