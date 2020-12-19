import React from 'react';
import Layout from './Layout';
import ThemeProvider from './ThemeProvider';

const LayoutWrapper = React.forwardRef(({ children, ...props }, ref) => (
  <ThemeProvider>
    <Layout
      ref={ref}
      {...props}
    >
      {children}
    </Layout>
  </ThemeProvider>
));
export default LayoutWrapper;
