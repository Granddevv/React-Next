import Layout from '../comps/Layout';

export default (props) => (
    <Layout>
        <h1> {props.url.query.title} </h1>
        <p> Here is post Page </p>
    </Layout>
)
