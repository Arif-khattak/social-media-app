import Header from './components/Header'
import Footer from './components/Footer'
import SideBar from './components/SideBar'
import CreatePost from './components/CreatePost'
import PostList from './components/PostList'
import PostListProvider  from  "./store/post-list-store"
import './App.css'
import { useState } from 'react'

function App() {

  const [selectedTab,setSelectedTab]=useState('Create Post')
  return (  <PostListProvider>
    <div className="app-container">
    <SideBar selectedTab={selectedTab}  setSelectedTab={setSelectedTab}></SideBar>
    <div className="content">
    <Header></Header>
    {selectedTab==='Home'  ? (
    <PostList></PostList>
    ):(
      <CreatePost></CreatePost>

    )}
    <Footer></Footer>
    </div>
    </div>
    </PostListProvider>
  )
}

export default App
