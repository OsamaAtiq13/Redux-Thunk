import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {userAction} from "./Redux/Actions/userAction"
import User from "./User";
function App() {
  const dispatch =useDispatch();
  const userList=useSelector((state)=>state.userlist);
  const {loading,users,error}=userList

  useEffect(() => {
    dispatch(userAction())
  },[dispatch])
  return<>

  <div className="App">
 <h1>Redux Thunk Tutorial</h1>
 {loading ? <h2>loading....</h2>: error? <h2>{error}</h2>: <User users={users}/>}

 
  </div>
  
  </>
}

export default App;
