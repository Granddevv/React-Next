import Link from 'next/link';
import Header from '../comps/Header';
import Layout from '../comps/Layout';

const PostLink = (props) => (
    <li>
        <Link href={`/post?title=${props.title}`}>
            <a> {props.title} </a>
        </Link>
    </li>
)


const Index = () => (
    <Layout>
        <p> Hello My blog</p>
        <ul>
            <PostLink title='Home Home.js' />
            <PostLink title='About About.js' />
            <PostLink title='Next Next.js' />
            <PostLink title='The Next JS' />
        </ul>
    </Layout>
)

export default Index;