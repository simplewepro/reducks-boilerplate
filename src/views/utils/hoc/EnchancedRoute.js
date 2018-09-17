import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Route } from "react-router-dom";
import NotFound from "@components/NotFound";

const EnchancedRoute = ({
  component: Component,
  allowed,
  userRole,
  title,
  ...rest
}) => {
  document.title = `${title ? title + " | " : ""}Digital Village`;
  return (
    <Route
      {...rest}
      render={props =>
        !allowed || allowed.some(role => role === userRole) ? (
          <Component {...props} />
        ) : (
          <NotFound />
        )
      }
    />
  );
};

EnchancedRoute.propTypes = {
  allowed: PropTypes.arrayOf(PropTypes.string),
  title: PropTypes.string
};

const mapStateToProps = state => {
  return {
    userRole: state.user.role
  };
};

export default connect(mapStateToProps)(EnchancedRoute);
