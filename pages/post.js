import Layout from '../comps/Layout';

export default (props) => (
    <Layout>
        <p> {props.url.query.title} </p>
        <p> Here is Post page</p>
    </Layout>

)