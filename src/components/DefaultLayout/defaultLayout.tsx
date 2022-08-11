import { NavBar } from "../NavBar/navBar"

const DefaultLayout = ({ children } :any) => {
  return (
    <div style={{flex:1,flexDirection:'row',display:'flex',height:'100vh'}}>
        <NavBar />
        <div style={{backgroundColor:'#46403B',flex:3}}> 
          {children}
        </div>
      </div>
  );
};

export default DefaultLayout;