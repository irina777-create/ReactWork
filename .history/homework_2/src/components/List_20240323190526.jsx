import React from 'react'
import './style.css'

export default function List({list=[]}) {
  
  return list.length ? <ul style={{color}}>
    {list.map((item, index) => <li key={index}>{item}</li>)}
  </ul> : null;
}