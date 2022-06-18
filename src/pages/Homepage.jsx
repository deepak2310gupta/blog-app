import { Header } from "../header/Header"
import { Posts } from "../posts/Posts";
import { Sidebar } from "../sidebar/Sidebar"
import './homepage.css';

export const Homepage=()=>{
    return(
        <>
            <Header/>
            <div className="home">
            <Posts/>
            <Sidebar/>
            </div>
        </>
    )
}