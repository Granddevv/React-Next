import Link from 'next/link';

export default () => (
    <div>
        <p>About.js</p>
        <Link href="/next" style={{fontSize: 20}}>
            <button> Goto Next Page </button>
        </Link>
    </div>
)
