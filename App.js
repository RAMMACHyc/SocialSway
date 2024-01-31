import * as React from 'react';
import MainContainer from './navigation/MainContainer';
import DrawerNavigator from './navigation/DrawerNavigator';
import MyDrawer from './navigation/MyDrawer';



function App() {
  return (
    <MainContainer>
    <MyDrawer />
        <DrawerNavigator />
    </MainContainer>
  );
}

export default App;