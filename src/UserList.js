
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import {Card , Container, ListGroup} from 'react-bootstrap'
import { GrUserSettings } from 'react-icons/gr';
import {RiFolderUserLine} from 'react-icons/ri'
import {MdEmail} from 'react-icons/md'
import {FiMapPin} from 'react-icons/fi'
import {MdPhoneAndroid} from 'react-icons/md'
import {SiBlazor} from 'react-icons/si'
function UserList() {
    const [user,setUser]=useState([]);
    useEffect(()=>{
        axios
        .get('https://jsonplaceholder.typicode.com/users')
        .then(res=>{
           
            setUser(res.data)
        })
        .catch(err=>{
            console.log(err)
        })
    },[])


    return (
        <div>
            <Container>
     <h1 style={{textAlign:'center',color:'white',padding:'20px 0'}}>Clients</h1>
      <ul>
     {  user.map(use=>(
      <li key={Math.random()} >
  <Card className='yow' style={{ width: '20rem' }}>
  <Card.Header className='list'><GrUserSettings/> {use.name}</Card.Header>
  <ListGroup variant="dark">
    <ListGroup.Item><RiFolderUserLine style={{color:'blue'}} /> {use.username}</ListGroup.Item>
    <ListGroup.Item> <MdEmail style={{color:'red'}}/> {use.email}</ListGroup.Item>
    <ListGroup.Item><FiMapPin style={{color:'orange'}}/> {use.address.city}</ListGroup.Item>
    <ListGroup.Item><MdPhoneAndroid style={{color:'purple'}}/> {use.phone}</ListGroup.Item>
    <ListGroup.Item><SiBlazor style={{color:'dark-blue'}}/> {use.website}</ListGroup.Item>
  </ListGroup>
</Card>
  </li>
       ))
       }
                                         
   </ul>

   </Container>
     </div>
    
    )
}

export default UserList
