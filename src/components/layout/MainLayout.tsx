import { Layout, Menu } from "antd"; 
import { MenuProps} from "antd/es/menu"; 
import { UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';
import { createElement } from "react";
const {Header, Content, Footer, Sider} =  Layout

const items: MenuProps ['items'] = [UserOutlined, VideoCameraOutlined, UploadOutlined, UserOutlined].map(
    (icon, index) => ({
      key: String(index + 1),
      icon: createElement(icon),
      label: `nav ${index + 1}`,
    }),
  );

 

const MainLayout = () => {
    return (
        <Layout style={{height: '100vh'}}>
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={(broken: any) => {
          console.log(broken);
        }}
        onCollapse={(collapsed: any, type: any) => {
          console.log(collapsed, type);
        }}
      >
        <div>
            <p style={{color: "white", fontSize: '17px', fontWeight: 'bold', marginTop: '10px', marginBottom: '10px' }}>Jahangirnagar University</p>
        </div>


        <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']} items={items} />
      </Sider>
      <Layout>
        <Header style={{ padding: 0}} />
        <Content style={{ margin: '24px 16px 0' }}>
          <div
            style={{
              padding: 24,
              minHeight: 360, 
            }}
          >
            <p>this is the main content area</p>
          </div>
        </Content>
        <Footer className="" style={{ textAlign: 'center' }}>
          <span className="">Ena Ema Technoglogies</span> ©{new Date().getFullYear()} Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
    );
};

export default MainLayout;