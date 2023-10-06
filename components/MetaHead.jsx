import React from 'react';
import Head from 'next/head'
const MetaHead = ({title, name, description}) => {
    return (
        <Head>
            <title>{title}</title>
            <meta name={name} content={description} />
            <link rel="icon" href="/favicon.ico" />
        </Head>
    );
};

export default MetaHead;
