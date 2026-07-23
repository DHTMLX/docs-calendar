import React from 'react';
import Layout from '@theme-original/Layout';
import ProductNotice from '@site/src/components/ProductNotice';

// MKS-3075: Layout wraps every page type — docs, generated category indexes,
// /search and /404 — so the notice renders site-wide from a single place.
// It sits outside <article>, which keeps it out of the local search index.
export default function LayoutWrapper(props) {
  const { children, ...rest } = props;
  return (
    <Layout {...rest}>
      <ProductNotice />
      {children}
    </Layout>
  );
}
