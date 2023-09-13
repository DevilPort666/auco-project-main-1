import './globals.css'
import Header from './components/Header';

const AppLayout = ({children}) => {
    return(
        <html>
            <body>
                <Header/>
                <main>{children}</main>
            </body>
        </html>
    )
}

export default AppLayout;