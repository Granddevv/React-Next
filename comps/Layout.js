import Header from './Header';

const layoutStyle = {
    margin: '20px',
    padding: '10px',
    border: '1px solid red'
}

const Layout = (props) => (
    <div style={layoutStyle}>
        <Header />
        {props.children}
    </div>
)

export default Layout;

