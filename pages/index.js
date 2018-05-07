import Link from 'next/link';
import Header from '../comps/Header';
import Layout from '../comps/Layout';

const PostLink = (props) => (
    <li>
        <Link as={`/p/${props.id}`} href={`/post?title=${props.title}`}>
            <a> {props.title} </a>
        </Link>
    </li>
)


const Index = () => (
    <Layout>
        <p> Hello My blog</p>
        <ul>
            <PostLink id="home" title='Home Home.js' />
            <PostLink id="about" title='About About.js' />
            <PostLink id="next" title='Next Next.js' />
            <PostLink id="thenext" title='The Next JS' />
        </ul>
    </Layout>
)

export default Index;