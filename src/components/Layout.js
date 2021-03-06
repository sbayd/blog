import React, { useContext } from 'react';
import { Link } from 'gatsby';
import {
  FiTerminal, FiSun, FiMoon, FiGithub, FiTwitter, FiLinkedin, FiFileText,
} from 'react-icons/fi';
import { keyframes } from '@emotion/react';

import ThemeContext from './ThemeContext';
import Button from './Button';
import { rhythm } from '../utils/typography';
import { BACKGROUND_TRANSITION_TIME, EASE_IN_OUT_TRANSITION, getTheme } from '../utils/theme';

const Layout = ({ location, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`;
  let header;
  const { theme, toggleTheme } = useContext(ThemeContext);
  const { color, background, secondary } = getTheme(theme);
  const darkTheme = getTheme('dark');

  const terminalAnimation = keyframes({
    from: {
      stroke: color,
    },
    to: {
      stroke: background,
    },
  });

  const terminalStyles = {
    marginRight: 8,
    line: {
      animation: `${terminalAnimation} 0.5s ease-in-out infinite`,
      animationDirection: 'alternate',
    },
  };

  if (true || location.pathname !== rootPath) {
    header = (
      <h2
        style={{
          marginTop: 0,
        }}
      >
        <Link
          style={{
            boxShadow: 'none',
            textDecoration: 'none',
            color: 'inherit',
            display: 'inline-flex',
            alignItems: 'flex-end',
          }}
          to="/"
        >
          <FiTerminal css={terminalStyles} />
          S. Berkay Aydin&apos;s Blog
        </Link>
      </h2>
    );
  }
  return (
    <div
      css={{
        marginLeft: 'auto',
        marginRight: 'auto',
        maxWidth: rhythm(24),
        padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
        a: {
          color: 'inherit',
          textDecoration: 'none',
          transition: `border-color ${EASE_IN_OUT_TRANSITION}`,
          borderBottom: '1px dashed transparent',
          '&:hover, &:focus': {
            borderBottomColor: color,
          },
        },
        blockquote: {
          color: secondary,
          borderColor: secondary,
        },
      }}
    >
      <header
        css={{
          display: 'flex',
          flexDirection: false && location.pathname === rootPath ? 'row-reverse' : 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        {header}
        <Button
          aria-label="Light and dark mode switch"
          circular
          onClick={toggleTheme}
          className="container"
          css={{
            background,
            transitionDuration: '0s',
            // delay background-color transition for nicer animation
            transitionDelay: theme === 'dark' ? '0s' : BACKGROUND_TRANSITION_TIME,
            transitionProperty: 'background-color, color',
          }}
        >
          {theme === 'light' ? <FiSun /> : <FiMoon />}
          <div
            className={theme}
            css={{
              position: 'absolute',
              pointerEvents: 'none',
              background: darkTheme.background,
              borderRadius: '50%',
              width: 32,
              height: 32,
              zIndex: -1,
              transition: `transform ${BACKGROUND_TRANSITION_TIME} ease`,
              '&.dark': {
                transform: 'scale(150)',
              },
            }}
          />
        </Button>
      </header>
      <div style={{
        marginBottom: rhythm(2),
        marginTop: -20,
        maxWidth: 500,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        alignContent: 'center',
      }}
      >
        <a
          href="https://twitter.com/sbayd"
          target="_blank"
          rel="noreferrer"
          style={{
            display: 'flex', alignItems: 'center', paddingLeft: 15, paddingRight: 15,
          }}
        >
          <FiTwitter style={{ marginRight: 5 }} />
          Twitter
        </a>
        <a
          href="https://github.com/sbayd"
          target="_blank"
          rel="noreferrer"
          style={{
            display: 'flex', alignItems: 'center', paddingLeft: 15, paddingRight: 15,
          }}
        >
          <FiGithub style={{ marginRight: 5 }} />
          GitHub
        </a>
        <a
          href="https://linkedin.com/in/sbaydin"
          target="_blank"
          rel="noreferrer"
          style={{
            display: 'flex', alignItems: 'center', paddingLeft: 15, paddingRight: 15,
          }}
        >
          <FiLinkedin style={{ marginRight: 5 }} />
          LinkedIn
        </a>
        <a
          href="https://cv.sbaydin.com"
          target="_blank"
          rel="noreferrer"
          style={{
            display: 'flex', alignItems: 'center', paddingLeft: 15, paddingRight: 15,
          }}
        >
          <FiFileText style={{ marginRight: 5 }} />
          Resume
        </a>
      </div>
      {/* {location.pathname === rootPath && (
      <div
        css={{
          display: 'flex',
          marginBottom: rhythm(0.5),
        }}
      >
        <Link to="/about">About</Link>
      </div>
      )} */}
      <main>{children}</main>
    </div>
  );
};

export default Layout;
