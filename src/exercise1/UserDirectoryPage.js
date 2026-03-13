import { useState, useEffect } from 'react';
import Controls from './Controls';
import sampleUsers from './sampleUsers';
import UserList from './UserList';


function UserDirectoryPage() {
  // TODO: add users, sortBy, and viewMode state in this component.
  // TODO: fetch the initial users with useEffect.

  let [users, setUsers] = useState([]);
  let [sortBy, setSortBy] = useState("id");
  let [viewMode, setViewMode] = useState("grid");
  let [loading, setLoading] = useState(false);


  function handleDeleteClick(userId) {
    console.log('TODO: delete the user with id', userId);
    let temp = users.filter((users) => userId != users.id);
    setUsers(temp);
  }  
    

  function handleSortByGroupClick() {
    console.log('TODO: sort users by user_group');
    setSortBy("group");
    let temp = users.sort((a,b) => a.user_group - b.user_group);
    setUsers(temp);
    
  }

  function handleSortByIdClick() {
    console.log('TODO: sort users by id');
    let temp = users.sort((a,b) => a.id - b.id);
    setUsers(temp);
    setSortBy("id");
  }

  function handleViewToggleClick() {
    console.log('TODO: switch between grid and list layouts');
    if (viewMode == "grid"){
      setViewMode("list");
      // console.log(viewMode);
    }else{
      setViewMode("grid");
      // console.log(viewMode);
    }
  }

  useEffect(() => {
    try{
      fetch('https://69a1e4d32e82ee536fa281d9.mockapi.io/user_api')
      .then(response => response.json())
      .then(data => setUsers(data));
    } catch (error){
      console.log(error);
    }
    
  }, []);

  return (
    <>
      <section className="panel">
        <h1>User Directory</h1>
      </section>

      <section className="panel">
        <h2>Controls</h2>
        <Controls 
        onDeleteClick={handleDeleteClick} 
        onSortByGroupClick={handleSortByGroupClick}
        onSortByIdClick={handleSortByIdClick}
        onViewToggleClick={handleViewToggleClick}/>
      </section>

      <section className="panel">
        <h2>All Users</h2>
        <UserList users={users} viewMode={viewMode} />
      </section>
    </>
  );
}

export default UserDirectoryPage;