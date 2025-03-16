import React from 'react';
import Product from '@/app/components/Product';
import PageHeader from '@/app/layout/PageHeader';
import PageFooter from '@/app/layout/PageFooter';

const Page = (async ({ params }: { params: Promise<{ id: string }> }) => {
    const { id } = await params;

    return (
        <div className='detail-page'>
            <PageHeader />
            <Product id={id} />
            <PageFooter />
        </div>
    );
});

export default Page;