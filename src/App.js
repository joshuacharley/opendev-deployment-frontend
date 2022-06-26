import React, { useState, useEffect } from 'react';
import './table.css';
 
function App() {
    const [data, getData] = useState([])
    const URL = 'http://localhost:3000/mark';

 
    useEffect(() => {
        fetchData()
    }, [])
 
 
    const fetchData = () => {
        fetch(URL)
            .then((res) =>
                res.json())
                
 
            .then((response) => {
                console.log(response);
                getData(response);
            })
 
    }
 
    return (
      
        <>
            <h1>Display of student marks and total</h1>
            <tbody>
                <tr>
                    <th>Name</th>
                    <th>Physics</th>
                    <th>Maths</th>
                    <th>English</th>
                    <th>Total</th>
                </tr>
                {data.map((item, i) => (
                  item.total = item.physics + item.maths + item.english,
                    <tr key={i}>
                        <td>{item.name}</td>
                        <td>{item.physics}</td>
                        <td>{item.maths}</td>
                        <td>{item.english}</td>
                        <td>{item.total}</td>
                    </tr>
                ))}
            </tbody>
 
        </>
    );
}
 
export default App;