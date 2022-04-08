import React, {useState, useContext} from 'react'
import NotyfContext from '../context/NotyfContext'
// TODO: dodawanie i wyciaganie przez graphqla, rollowanie, potwierdzanie usuniecia, otwarcie grupy

const Groups: React.FC = () => {
 

  const [groups, setGroups] = useState('')
  const [groupName, setGroupName] = useState('')
  const [groupSelected, setGroupSelected] = useState(null)

  const [entryName, setEntryName] = useState('')

  const notyf = useContext(NotyfContext)

  const createGroupHandle = () => {
    if(groupName != '' && groupName!=null && groupName!=undefined) {
      //graphql call
      let response = true
      if (response) {
        notyf.success("Successfully created a group.")
        setGroupName('')
      } else {
        notyf.error("Couldn't create a group, check your internet connection.")
      }
    }
  } 
  const handleGroupChange = (e:any) => {
    setGroupName(e.target.value)
  }

  // set entry name in jsx

  const addEntryHandle = (e:any) => {
    //dodawanie entry do grupy
    // API.addEntry(entryName, belongsTo: grupa 3)
    let response = true;
    if(entryName != '' && entryName!=null && entryName!=undefined) {
      notyf.success("Successfully added an entry.")
      setEntryName('')
  
    }
  }
  const deleteGroup = (e:any) => {
    console.log(e.target.name) // id usuwanej grupy
  }
  
  return (
    <div className="mediumShadow text-white text-center shadow-strong m-auto justify-center items-center center md:max-w-screen-lg w-full bg-navyDark mt-6 font-mono text-md p-8">
      <div className="text-4xl w-full text-center mb-6">
        Hi, user.
      </div>
      {/* <img className="md:w-80 w-full m-auto" src={me} alt="my picture :)" /> */}
      <div className="py-4 ">
       <input type="text" placeholder="Group name" onChange={handleGroupChange} value={groupName} className="cursor-pointer py-2 text-black pl-2 mr-2 focus:outline focus:outline-2 focus:outline-skyish"/>
       
        <input onClick={createGroupHandle} type="button" className="px-3 py-2 transition-colors bg-white text-black hover:text-white hover:bg-blue-900 cursor-pointer" value="Click to create group"/>
      </div>
      <div className="py-4">
       
       <input type="text" placeholder="name" onChange={(e) =>setEntryName(e.target.value)} value={entryName} className="cursor-pointer py-2  text-black pl-2 "/>
       <input type="button" onClick={addEntryHandle} value="Add to group" className='py-2 ml-2 px-2 cursor-pointer  transition-colors bg-white text-black hover:text-white hover:bg-green-900' />
     </div>
     <div className="py-4">
       <div>
       <div className='grid grid-cols-4 pb-2 border-b'><div>ID</div><div>Group name</div><div>Group size</div><div>Action</div></div>
        
       
         </div>
     </div>
    </div>
  )
}

export default Groups
