import PropTypes from "prop-types";

const Layout = ({ children }) => {
  return <main id="main-content">{children}</main>;
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
