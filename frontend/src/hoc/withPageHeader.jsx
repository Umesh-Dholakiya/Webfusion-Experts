import React from 'react';
import PageHeader from '../components/PageHeader';

/**
 * Higher-Order Component (HOC): withPageHeader
 * 
 * Automatically wraps any Page component with the unified, stunning PageHeader design.
 * Ensures consistent, high-impact aesthetic across all sub-pages.
 * 
 * Usage:
 * export default withPageHeader(AboutPage, {
 *   badge: "ABOUT WEBFUSION EXPERTS",
 *   breadcrumb: "About Us",
 *   title: <>We Build <span style={{ color: '#f57c00' }}>Digital</span> Experiences</>,
 *   subtitle: "...",
 *   highlights: [...]
 * });
 */
export const withPageHeader = (WrappedComponent, headerConfig = {}) => {
  const ComponentWithPageHeader = (props) => {
    // Merge base headerConfig with any pageHeaderProps passed at runtime
    const finalConfig = {
      ...headerConfig,
      ...(props.pageHeaderProps || {})
    };

    return (
      <>
        <PageHeader {...finalConfig} />
        <WrappedComponent {...props} />
      </>
    );
  };

  ComponentWithPageHeader.displayName = `withPageHeader(${WrappedComponent.displayName || WrappedComponent.name || 'Component'})`;

  return ComponentWithPageHeader;
};

export default withPageHeader;
