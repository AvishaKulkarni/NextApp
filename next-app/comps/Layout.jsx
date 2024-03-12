
import Footer from "./Footer";
import Navbar from "./Navbar";

//anything inside layout Component {...pageProps} is in this children property
const Layout = ({ children }) => {
    return (  
        <div className="content">
            <Navbar />
            { children }
            <Footer />
        </div>
    );
}
 
export default Layout;