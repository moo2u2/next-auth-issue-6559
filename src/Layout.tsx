import React from 'react';
import Head from 'next/head';
import { Placeholder, LayoutServiceData, ComponentFactory } from '@sitecore-jss/sitecore-jss-nextjs';
// import { LayoutServiceData } from './lib/sitecore-types';

interface LayoutProps {
  layoutData: LayoutServiceData;
  componentFactory: ComponentFactory;
}

const Layout = ({ layoutData, componentFactory }: LayoutProps): JSX.Element => {
  const { route } = layoutData.sitecore;

  return (
    <>
      <Head>
        <title>{route?.fields?.pageTitle?.value || 'Page'}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        {route && <Placeholder name="jss-main" rendering={route} componentFactory={componentFactory} />}
      </main>
    </>
  );
};

export default Layout;
