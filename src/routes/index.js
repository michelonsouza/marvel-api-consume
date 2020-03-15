import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';
import { AnimatedSwitch } from 'react-router-transition';
import PropTypes from 'prop-types';

import { Login, Characters, SingleCharacter } from '~/pages';

export default function Routes({ onThemeChange }) {
  const { signed } = useSelector(state => state.auth);
  const { theme } = useSelector(state => state.characters);

  useEffect(() => {
    onThemeChange(theme);
  }, [onThemeChange, theme]);

  return (
    <AnimatedSwitch
      atEnter={{ opacity: 0 }}
      atLeave={{ opacity: 0 }}
      atActive={{ opacity: 1 }}
      className="switch-wrapper"
    >
      {!signed ? (
        <Route path="/" exact component={Login} />
      ) : (
        <>
          <Route
            path="/"
            exact
            component={() => <Redirect to="/characters" />}
          />
          <Route path="/characters" exact component={Characters} />
          <Route path="/characters/:id" component={SingleCharacter} />
        </>
      )}
      <Route
        path="*"
        component={() => <Redirect to={signed ? '/characters' : '/'} />}
      />
    </AnimatedSwitch>
  );
}

Routes.propTypes = {
  onThemeChange: PropTypes.func.isRequired,
};
