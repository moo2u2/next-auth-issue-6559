import { LayoutServiceData } from '@sitecore-jss/sitecore-jss-nextjs';
import { Redirect } from 'next';

// import {
//   DictionaryPhrases,
//   ComponentPropsCollection,
//   LayoutServiceData,
// } from '@sitecore-jss/sitecore-jss-nextjs';

export declare type ComponentPropsCollection = {
  [componentUid: string]: unknown;
};

export type SitecorePageProps = {
    locale: string;
    // dictionary: DictionaryPhrases;
    componentProps: ComponentPropsCollection;
    notFound: boolean;
    layoutData: LayoutServiceData;
    redirect?: Redirect;
  };