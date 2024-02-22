import { Route, Routes } from 'react-router-dom'
import SignInPage from './component/page/authentication/SignInPage'
import Homepage from './component/page/home/Homepage'
import SignUpPage from './component/page/authentication/SignUpPage'
import PostPage from './component/page/post/PostPage'
import PostCommentPage from './component/page/postComment/PostCommentPage'
import CategoryList from './component/admin/category/CategoryList'
import { RequireAuth } from './component/security/RequireAuth'

function App() {
  return (
    <>
      <Routes>
          <Route path="/signin" element={<SignInPage/>}></Route>
          <Route path="/home" element={<RequireAuth><Homepage/> </RequireAuth>}></Route>
          <Route path="/" element={<RequireAuth><Homepage/></RequireAuth>}></Route>
          <Route path="/signup" element={<SignUpPage/>}></Route>
          <Route path="/postpage" element={<PostPage/>}></Route>
          <Route path="/comment/:id?" element={<PostCommentPage/>}></Route>
          <Route path="/category" element={<CategoryList/>}></Route>
      </Routes>
    </>
  )
}

export default App
