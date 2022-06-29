import { NavBar } from "../NavBar/navBar"

export const DefaultLayout = () => {
    return(
      <div style={{flex:1,flexDirection:'row',display:'flex',height:'100vh'}}>
         <NavBar />
         <div style={{backgroundColor:'#46403B',flex:3}}/>
      </div>
    )
} 