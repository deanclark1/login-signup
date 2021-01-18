import React from 'react';


function HomePage() {

    const getUser = localStorage.getItem('users');
    const setUser = JSON.parse(getUser);
  
  
    return (
        <div className="homePage">
            <div className="text-center pt-5">
                <h1 className="py-3">Welcome, {setUser.firstName} </h1>
            </div>
        </div>
       
    );
}
  
export default HomePage;
  