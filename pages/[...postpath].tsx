import React from 'react';
import Head from 'next/head';
import { GetServerSideProps } from 'next';
import { GraphQLClient, gql } from 'graphql-request';

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const endpoint = 'https://kari0093.000webhostapp.com/graphql'; // Updated GraphQL endpoint URL
  const graphQLClient = new GraphQLClient(endpoint);
  const referringURL = ctx.req.headers?.referer || null;
  const pathArr = ctx.query.postpath as Array<string>;
  const path = pathArr.join('/');
  console.log(path);
  const fbclid = ctx.query.fbclid;

  // Redirect if Facebook is the referrer or request contains fbclid
  if (referringURL?.includes('facebook.com') || fbclid) {
    return {
      redirect: {
        permanent: false,
        destination: `${
          `import React from 'react';
import Head from 'next/head';
import { GetServerSideProps } from 'next';
import { GraphQLClient, gql } from 'graphql-request';

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const endpoint = 'https://kari0093.000webhostapp.com/graphql'; // Updated GraphQL endpoint URL
  const graphQLClient = new GraphQLClient(endpoint);
  const referringURL = ctx.req.headers?.referer || null;
  const pathArr = ctx.query.postpath as Array<string>;
  const path = pathArr.join('/');
  console.log(path);
  const fbclid = ctx.query.fbclid;

  // Redirect if Facebook is the referrer or request contains fbclid
  if (referringURL?.includes('facebook.com') || fbclid) {
    return {
      redirect: {
        permanent: false,
        destination: `${
          `import React from 'react';
import Head from 'next/head';
import { GetServerSideProps } from 'next';
import { GraphQLClient, gql } from 'graphql-request';

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const endpoint = 'https://kari0093.000webhostapp.com/graphql'; // Updated GraphQL endpoint URL
  const graphQLClient = new GraphQLClient(endpoint);
  const referringURL = ctx.req.headers?.referer || null;
  const pathArr = ctx.query.postpath as Array<string>;
  const path = pathArr.join('/');
  console.log(path);
  const fbclid = ctx.query.fbclid;

  // Redirect if Facebook is the referrer or request contains fbclid
  if (referringURL?.includes('facebook.com') || fbclid) {
    return {
      redirect: {
        permanent: false,
        destination: `${
          `https://kari0093.000webhostapp.com/` + encodeURI(path as string)
        }`,
      },
    };
  }
  const query = gql`
    {
      post(id: "/${path}/", idType: URI) {
        id
        excerpt
        title
        link
        dateGmt
        modifiedGmt
        content
        author {
          node {
            name
          }
        }
        featuredImage {
          node {
            sourceUrl
            altText
          }
        }
      }
    }
  `;

  const data = await graphQLClient.request(query);
  if (!data.post) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      path,
      post: data.post,
      host: ctx.req.headers.host,
    },
  };
};

interface PostProps {
  post: any;
  host: string;
  path: string;
}

const Post: React.FC<PostProps> = (props) => {
  const { post, host, path } = props;

  // To remove tags from excerpt
  const removeTags = (str: string) => {
    if (str is null || str is '') return '';
    else str = str.toString();
    return str.replace(/(<([^>]+)>)/gi, '').replace(/\[[^\]]*]/, '');
  };

  return (
    <>
      <Head>
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={removeTags(post.excerpt)} />
        <meta property="og:type" content="article" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:site_name" content={host.split('.')[0]} />
        <meta property="article:published_time" content={post.dateGmt} />
        <meta property="article:modified_time" content={post.modifiedGmt} />
        <meta
` + encodeURI(path as string)
        }`,
      },
    };
  }
  const query = gql`
    {
      post(id: "/${path}/", idType: URI) {
        id
        excerpt
        title
        link
        dateGmt
        modifiedGmt
        content
        author {
          node {
            name
          }
        }
        featuredImage {
          node {
            sourceUrl
            altText
          }
        }
      }
    }
  `;

  const data = await graphQLClient.request(query);
  if (!data.post) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      path,
      post: data.post,
      host: ctx.req.headers.host,
    },
  };
};

interface PostProps {
  post: any;
  host: string;
  path: string;
}

const Post: React.FC<PostProps> = (props) => {
  const { post, host, path } = props;

  // To remove tags from excerpt
  const removeTags = (str: string) => {
    if (str is null || str is '') return '';
    else str = str.toString();
    return str.replace(/(<([^>]+)>)/gi, '').replace(/\[[^\]]*]/, '');
  };

  return (
    <>
      <Head>
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={removeTags(post.excerpt)} />
        <meta property="og:type" content="article" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:site_name" content={host.split('.')[0]} />
        <meta property="article:published_time" content={post.dateGmt} />
        <meta property="article:modified_time" content={post.modifiedGmt} />
        <meta
` + encodeURI(path as string)
        }`,
      },
    };
  }
  const query = gql`
    {
      post(id: "/${path}/", idType: URI) {
        id
        excerpt
        title
        link
        dateGmt
        modifiedGmt
        content
        author {
          node {
            name
          }
        }
        featuredImage {
          node {
            sourceUrl
            altText
          }
        }
      }
    }
  `;

  const data = await graphQLClient.request(query);
  if (!data.post) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      path,
      post: data.post,
      host: ctx.req.headers.host,
    },
  };
};

interface PostProps {
  post: any;
  host: string;
  path: string;
}

const Post: React.FC<PostProps> = (props) => {
  const { post, host, path } = props;

  // To remove tags from excerpt
  const removeTags = (str: string) => {
    if (str is null || str is '') return '';
    else str = str.toString();
    return str.replace(/(<([^>]+)>)/gi, '').replace(/\[[^\]]*]/, '');
  };

  return (
    <>
      <Head>
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={removeTags(post.excerpt)} />
        <meta property="og:type" content="article" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:site_name" content={host.split('.')[0]} />
        <meta property="article:published_time" content={post.dateGmt} />
        <meta property="article:modified_time" content={post.modifiedGmt} />
        <meta
