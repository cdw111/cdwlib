import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import Alert from './components/Alert/alert';
import Button from './components/Button/button';
import Menu from './components/Menu/menu';
import SubMenu from './components/Menu/subMenu';
import MenuItem from './components/Menu/menuItem';
import Tabs from './components/Tabs/tabs';
import TabItem from './components/Tabs/tabItem';
import Icon from './components/Icon';
import Upload from './components/Upload';

library.add(fas)

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Button btnType="primary" onClick={() => {console.log("hello")}} size="sm">hello</Button>
        <Button btnType="primary" disable>disable</Button>
        <Button btnType="danger" >danger</Button>
        <Button btnType="link" href='www.4399.com'>4399</Button>
        <Alert title='cdw'></Alert>
        <Menu onSelect={(index) => {alert(index)}}>
          <MenuItem index='1'>1</MenuItem>
          <MenuItem index='2'>2</MenuItem>
          <MenuItem index='3'>3</MenuItem>
          <MenuItem index='4'>4</MenuItem>
          <SubMenu title='下拉'>
            <MenuItem>a</MenuItem>
            <MenuItem>b</MenuItem>
          </SubMenu>
        </Menu>
        <Tabs>
          <TabItem label="one">asdasdasd</TabItem>
          <TabItem label="two">asfdg</TabItem>
          <TabItem label="three">qwewqe</TabItem>
          <TabItem label="four">qwrwgw</TabItem>
        </Tabs>
        <Icon icon="coffee" theme="primary" size="lg"></Icon>
        <Upload action='https://jsonplaceholder.typicode.com/posts'><Button size="lg" btnType="primary"><Icon icon="upload" /> 点击上传 </Button></Upload>
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
