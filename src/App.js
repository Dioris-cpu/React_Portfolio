import React from 'react';
import './App.css';
import {Layout, Header, Navigation, Drawer, Content, Footer, FooterSection, FooterLinkList} from 'react-mdl';
import Main from './components/main';

// link all of your routes 
import {Link} from "react-router-dom";


function App() {
  return (
    <div className="demo-big-content">
    <Layout>
        <Header className="header-color" title={<Link style={{textDecoration: 'none', color: 'white'}}to='/'>Dioris </Link>} scroll>
            <Navigation>
                <Link to="/aboutme">About Me</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/contact">Contact</Link>
            </Navigation>
        </Header>
        <Drawer title={<Link style={{textDecoration: 'none', color: 'Black'}}to='/'>Dioris </Link>} >
            <Navigation>
                <Link to="/aboutme">About Me</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/contact">Contact</Link>
            </Navigation>
        </Drawer>
        <Content>
            <div className="page-content" />
            <Main/>
        </Content>
        <Footer className='footer-color' size="mini">
    <FooterSection type="left" logo="Dioris Diaz">
        <FooterLinkList>
            <a>@2020</a>
        </FooterLinkList>
    </FooterSection>
</Footer>
    </Layout>
</div>

  );
}

export default App;
