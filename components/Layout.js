import { Container } from "@chakra-ui/react";
import styles from "../styles/Layout.module.css";
import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <div>
        <header>
            <Header />
        </header>

        <Container display="flex" flexDirection="column" justifyContent="center">
            {children}
        </Container>
    </div>
  )
}

export default Layout;
