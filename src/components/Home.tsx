import React, { KeyboardEvent, useState, useContext, useEffect } from 'react'
import NotyfContext from '../utils/context/NotyfContext'
import { useAuth } from '../utils/context/AuthContext'
import { API, Auth } from 'aws-amplify'
import { createGroup, deleteGroup } from '../graphql/mutations'
import { groupsByDate } from '../graphql/queries'
import { Link, useNavigate } from 'react-router-dom'
import { Group } from '../API'
import Greeting from './reusable/Greeting'
import { updateGroup } from '../graphql/mutations'
import { confirmAlert } from 'react-confirm-alert' // Import
import 'react-confirm-alert/src/react-confirm-alert.css' // Import css
import { ReactComponent as Dice } from '../public/icons/dice.svg'
import Button from './reusable/Button'

import {
  getRandomEntryFromGroup,
  getRandomEntryFromAllGroups
} from './reusable/handlers'
// TODO: dodawanie i wyciaganie przez graphqla, rollowanie, potwierdzanie usuniecia, otwarcie grupy

const Home: React.FC = () => {
  const getGroupsList = async () => {
    const response = await API.graphql({
      query: groupsByDate,
      variables: {
        type: 'PrivGroup',
        input: {
          type: 'PrivGroup'
        }
      },
      authMode: 'AMAZON_COGNITO_USER_POOLS'
    })
    return response
  }

  const navigate = useNavigate()

  const { user, setUser } = useAuth()
  useEffect(() => {
    if (!user) {
      Auth.currentAuthenticatedUser()
        .then((userInfo: any) => {
          if (userInfo.username) {
            setUser({
              username: userInfo.username,
              email: userInfo.attributes.email
            })
          } else {
            navigate(`/`)
          }
        })
        .catch((e) => {
          navigate(`/`)
        })
    }
  })
  const [groups, setGroups] = useState<[Group] | []>([])

  useEffect(() => {
    getGroupsList().then((d: any) => {
      setGroups(d.data.groupsByDate.items)
      if (d.data.groupsByDate.items[0]) {
        setGroupSelected(d.data.groupsByDate.items[0].id)
      }
    })
  }, [groups.length])

  const [groupName, setGroupName] = useState('')
  const [groupSelected, setGroupSelected] = useState('')

  const [entryName, setEntryName] = useState('')

  const notyf = useContext(NotyfContext)

  const createGroupHandle = async () => {
    if (groupName !== '' && groupName !== null && groupName !== undefined) {
      //graphql call
      try {
        const response = await API.graphql({
          query: createGroup,
          variables: {
            input: {
              name: groupName,
              type: 'PrivGroup',
              entries: []
            }
          },
          authMode: 'AMAZON_COGNITO_USER_POOLS'
        })

        if (response) {
          notyf.success('Successfully created a group.')
          setGroupName('')
          getGroupsList().then((d: any) => {
            setGroups(d.data.groupsByDate.items)
          })
        } else {
          notyf.error(
            "Couldn't create a group, check your internet connection."
          )
        }
      } catch (e) {
        notyf.error("Couldn't create a group, check your internet connection.")
      }
    }
  }

  const handleGroupChange = (e: any) => {
    setGroupName(e.target.value)
  }

  // set entry name in jsx

  const addEntryHandle = async () => {
    const x = groups.find((obj) => {
      return obj.id == groupSelected
    })
    console.log(x)

    if (entryName !== '' && entryName !== null && entryName !== undefined) {
      if (x) {
        if (x.entries.length > 0) {
          x.entries = [entryName, ...x.entries]
          const response = await API.graphql({
            query: updateGroup,
            variables: {
              input: x
            },
            authMode: 'AMAZON_COGNITO_USER_POOLS'
          })
          if (response) {
            notyf.success('Successfully added an entry.')
          } else {
            notyf.error('Connection problem.')
          }
          setEntryName('')
        } else {
          x.entries.push(entryName)
          const response = await API.graphql({
            query: updateGroup,
            variables: {
              input: x
            },
            authMode: 'AMAZON_COGNITO_USER_POOLS'
          })
          if (response) {
            notyf.success('Successfully added an entry.')
          } else {
            notyf.error('Connection problem.')
          }
          setEntryName('')
        }
      } else {
      }
    } else {
      notyf.error('Unable to add empty entry.')
    }
  }

  const deleteGroupHandle = async (id: string) => {
    const response = await API.graphql({
      query: deleteGroup,
      variables: {
        input: { id }
      },
      authMode: 'AMAZON_COGNITO_USER_POOLS'
    })

    if (response) {
      notyf.success('You successfully deleted a group.')
      setGroupName('')
      getGroupsList().then((d: any) => {
        setGroups(d.data.groupsByDate.items)
      })
    } else {
      notyf.error("Couldn't delete group. Check your internet connection.")
    }
  }

  const options = {
    title: '',
    message: '',
    buttons: [
      {
        label: 'Yes',
        onClick: () => {}
      },
      {
        label: 'No',
        onClick: () => {}
      }
    ],
    childrenElement: () => <div />,
    closeOnEscape: true,
    closeOnClickOutside: true,
    keyCodeForClose: [8, 32],
    willUnmount: () => {},
    afterClose: () => {},
    onClickOutside: () => {},
    onKeypressEscape: () => {},
    overlayClassName: 'overlay-custom-class-name'
  }

  const setupAlert = (name: string, id: string) => {
    const newOptions = JSON.parse(JSON.stringify(options))
    newOptions.title = 'Are you sure you want to delete ' + name + '?'
    newOptions.buttons = [
      {
        label: 'Yes',
        onClick: () => deleteGroupHandle(id),
        className: '!bg-red-600'
      },
      {
        label: 'No',
        onClick: () => {}
      }
    ]
    return newOptions
  }
  const [rolledEntry, setRolledEntry] = useState<null | string>(null)
  const handleRollClick = (group: Group) => {
    const res = getRandomEntryFromGroup(group)
    setRolledEntry(res)
  }
  const handleRollAllClick = (groups: [Group] | []) => {
    if (groups.length > 0) {
      const res = getRandomEntryFromAllGroups(groups)
      setRolledEntry(res)
    }
  }

  const handleKeyPressGroup = (e: KeyboardEvent<HTMLInputElement>) => {
    // do stuff
    if (e.key === 'Enter') {
      createGroupHandle()
    }
  }
  const handleKeyPressEntry = (e: KeyboardEvent<HTMLInputElement>) => {
    // do stuff
    if (e.key === 'Enter') {
      addEntryHandle()
    }
  }
  return (
    <div>
      <Greeting user={user ? user.username : null} />
      {/* <img className="md:w-80 w-full m-auto" src={me} alt="my picture :)" /> */}
      <div className="flex flex-col justify-center sm:h-10 sm:flex-row">
        <input
          type="text"
          placeholder="Group name"
          onChange={handleGroupChange}
          onKeyPress={handleKeyPressGroup}
          value={groupName}
          className="focus:outline-skyish h-10 cursor-pointer border-r border-gray-900 pl-2 text-black focus:outline focus:outline-2"
        />
        <Button
          onClick={createGroupHandle}
          text="Click to create group"
          color="hoverBlue"
        />
      </div>
      <div className="my-4 flex justify-center sm:h-10 sm:flex-row">
        <div className="flex flex-col sm:flex-row">
          <div>
            <select
              name="group select"
              onChange={(e) => setGroupSelected(e.target.value)}
              className="h-10 border-r border-gray-900 px-2 text-black"
              defaultValue={groups[0] ? groups[0].id : undefined}
            >
              {groups.map((group) => {
                return (
                  <option value={group.id} key={group.id}>
                    {group.name}
                  </option>
                )
              })}
            </select>
            <input
              onKeyPress={handleKeyPressEntry}
              type="text"
              placeholder="name"
              onChange={(e) => setEntryName(e.target.value)}
              value={entryName}
              className="h-10 cursor-pointer border-r border-gray-900 py-2  pl-2 text-black"
            />
          </div>

          <Button
            onClick={addEntryHandle}
            text="Add to group"
            color="hoverGreen"
          />
        </div>
      </div>
      <div className="flex flex-col justify-center sm:h-10 sm:flex-row">
        <Button
          color="green"
          onClick={() => handleRollAllClick(groups)}
          icon={<Dice className="my-auto mr-2 h-6 w-6 " />}
          text="Roll from all groups"
        />
      </div>
      <div className="py-4">
        <div>
          <div className="grid grid-cols-4 border-b pb-2">
            <div>#</div>
            <div>Group name</div>
            <div>Group size</div>
            <div>Action</div>
          </div>

          {groups.map((group, i) => {
            return (
              <div key={group.id} className="grid grid-cols-4 border-b py-2">
                <div>{i + 1}</div>
                <div>{group.name}</div>
                <div>
                  {group.entries.length > 0 ? group.entries.length : 'Empty'}
                </div>
                <div>
                  <input
                    type="button"
                    onClick={() => handleRollClick(group)}
                    value="Roll"
                    className=" ml-2 cursor-pointer pl-2 text-white transition-colors hover:text-green-900"
                  />
                  <Link
                    to={`/app/groups/${group.id}`}
                    onClick={() => {}}
                    className="ml-2 cursor-pointer pl-2 text-white transition-colors hover:text-blue-900"
                  >
                    Open
                  </Link>
                  <input
                    onClick={() =>
                      confirmAlert(setupAlert(group.name, group.id))
                    }
                    name={group.id}
                    type="button"
                    value="Delete"
                    className=" ml-2 cursor-pointer pl-2 text-white transition-colors hover:text-red-800"
                  />
                </div>
              </div>
            )
          })}
          {rolledEntry ? (
            <div className="pt-6">
              You have rolled entry{' '}
              <span className="font-bold text-indigo-800">{rolledEntry}</span>.
            </div>
          ) : null}
        </div>
      </div>
    </div>
  )
}

export default Home
