import React from 'react';


function HomePage() {

    const getUser = localStorage.getItem('users');
    const setUser = JSON.parse(getUser);
  
  
    return (
      <div>
          <div className="d-flex">
              <div className="weather-input">
                <h3 className="py-3">Welcome, {setUser.firstName}  </h3>
              </div>
          </div>
         
      </div>
    );
}
  
export default HomePage;
  