import React, { use, useEffect, useState } from 'react';
import { AuthContext } from './AuthProvidor';
import MyPlant from './MyPlant';

const MyPlants = () => {
    const {user}=use(AuthContext);
    const {email} = user;
    const [plantsData, setPlantsData] = useState([]);
    useEffect(()=>{
        if(email){
            fetch(`http://localhost:5000/plants/${email}`)
        .then(res=>res.json())
        .then(data=>{
            setPlantsData(data);
        })
        }
    },[email])
    return (
        <div>
            {
                plantsData.map(plant => <MyPlant key={plant._id} plant={plant}/>)
            }
        </div>
    );
};

export default MyPlants;