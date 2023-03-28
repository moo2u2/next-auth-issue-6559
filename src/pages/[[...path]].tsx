import { GetServerSideProps } from 'next';
import Layout from '../Layout';
import { SitecorePageProps } from '../lib/page-props';
import { sitecorePagePropsFactory } from '../lib/page-props-factory';
import { componentFactory } from '../temp/componentFactory';

const SitecorePage = ({layoutData} : SitecorePageProps): JSX.Element => {
    return (
        <Layout layoutData={layoutData} componentFactory={componentFactory} />
    );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
    const props = await sitecorePagePropsFactory.create(context);

    return {
        props,
        notFound: props.notFound, // Returns custom 404 page with a status code of 404 when true
    };
}

export default SitecorePage;