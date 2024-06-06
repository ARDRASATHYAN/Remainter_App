import React, { useEffect, useState} from 'react'
import './Remainter.css';


function RemainterApp() {
const [newReminter,setNewReminter]=useState("")
const [reminterArray,setReminterArray]=useState([])
const [editReminter,setEditReminter]=useState('')
const [editIndex, setEditIndex] = useState(null);
const date = new Date();

  const options = {
    weekday: 'long',
    // year: 'numeric',
    // month: 'long',
    // day: 'numeric',
  };
const handleInputChange=(e)=>{
  setNewReminter(e.target.value);
}
const addSubmit=()=>{
  if(newReminter.trim()) {// it remove the space 
    setReminterArray([...reminterArray,newReminter]);
    setNewReminter('')
  }
 
}
const handleDelete=(index)=>{
setReminterArray(reminterArray.filter((item,itemIndex)=>itemIndex != index))
console.log(index);
}
const handleEdit = (index) => {
  setEditIndex(index);
  setEditReminter(reminterArray[index]);
  console.log('edit2',editReminter);
  console.log('edit1',editIndex);
};


const handleSaveChanges = () => {
  if (editIndex !== null) {
    const updatedReminterArray = [...reminterArray];
    updatedReminterArray[editIndex] = editReminter;
    setReminterArray(updatedReminterArray);
    setEditIndex(null);
    setEditReminter('');
  }
};
  return (
    <>
    <div className='containar'>
      <div className='box-container'>
        <h1>Whoop, it's {(date.toLocaleString('en-IN', options))} 🌝 ☕ </h1>
        <span className='input-container'>
        <input class="form-control" value={newReminter} placeholder='Enter a reminder' onChange={handleInputChange}  />
        <button class="add-btn" onClick={addSubmit}>Addreminter</button>
        </span>
        {reminterArray.length>0?(
           <ul className='datastyle'>
           {reminterArray.map((item, index) => (
             <li key={index}>
              {item} 
            <div>
             <button onClick={()=>handleEdit(index)} className='delete-btn'data-bs-toggle="modal" data-bs-target="#exampleModal" >Edit</button>
             <button onClick={()=>handleDelete(index)} className='delete-btn' style={{ marginLeft: '10px' }}>Delete</button>
             </div>
             </li>
           ))}
         </ul>
        ):(<i>no reminder</i>)}
       
      </div>
   
    </div>
    {/* <!-- Modal --> */}
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
      <input
                className='form-control'
                value={editReminter}
                onChange={(e) => setEditReminter(e.target.value)}
              />
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary" onClick={handleSaveChanges} data-bs-dismiss="modal">Save changes</button>
      </div>
    </div>
  </div>
</div>
   
    </>
  )
}

export default RemainterApp
