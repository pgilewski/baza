import React, { useState, useContext, useEffect, KeyboardEvent } from 'react'
import { useLocation } from 'react-router-dom'
import { getGroup } from '../graphql/queries'
import { API } from 'aws-amplify'
import { updateGroup } from '../graphql/mutations'
import NotyfContext from '../utils/context/NotyfContext'
import { getRandomEntryFromGroup } from './reusable/handlers'
import { Group } from '../API'
import { default as Dice } from '../public/icons/dice.svg'
import Button from './reusable/Button'

const SingleGroup: React.FC = () => {
  const topicId = useLocation()
  const notyf = useContext(NotyfContext)
  const getCurrentGroup = async () => {
    const response = await API.graphql({
      query: getGroup,
      variables: {
        id: topicId.pathname.split('/')[3]
      },
      authMode: 'AMAZON_COGNITO_USER_POOLS'
    })

    return response
  }
  const [group, setGroup] = useState<any>(null)
  const [fetching, setFetching] = useState<boolean>(true)

  useEffect(() => {
    getCurrentGroup().then((d: any) => {
      setGroup(d.data.getGroup)
      setFetching(false)
    })
  }, [])
  const handleDeleteEntry = async (entry: string) => {
    const newEntriesArray = group.entries
    group.entries.forEach((item: any, i: number) => {
      if (item === entry) {
        newEntriesArray.splice(i, 1)
      }
    })

    const newGroup = group
    newGroup.entries = newEntriesArray
    setFetching(true)
    setGroup(newGroup)
    setFetching(false)

    const response = await API.graphql({
      query: updateGroup,
      variables: {
        input: newGroup
      },
      authMode: 'AMAZON_COGNITO_USER_POOLS'
    })
    if (response) {
      notyf.success('Removed an entry.')
      getCurrentGroup().then((d: any) => {
        setGroup(d.data.getGroup)
        setFetching(false)
      })
    } else {
      notyf.error('Connection problem.')
    }
  }
  const [newEntry, setNewEntry] = useState('')
  const handleAddEntry = async () => {
    let newEntriesArray = group.entries
    if (newEntriesArray == null) {
      newEntriesArray = [newEntry]
    } else {
      newEntriesArray.push(newEntry)
    }
    const newGroup = group
    newGroup.entries = newEntriesArray
    setFetching(true)
    setGroup(newGroup)
    setFetching(false)
    const response = await API.graphql({
      query: updateGroup,
      variables: {
        input: newGroup
      },
      authMode: 'AMAZON_COGNITO_USER_POOLS'
    })

    if (response) {
      notyf.success('Successfully added an entry.')
      getCurrentGroup()
        .then((d: any) => {
          setGroup(d.data.getGroup)
          setFetching(false)
          console.log(newEntriesArray, newEntry)
        })
        .finally(() => {
          setNewEntry('')
        })
    } else {
      notyf.error('Connection problem.')
    }
  }
  const [rolledEntry, setRolledEntry] = useState<string | null>(null)

  const handleRollClick = (group: Group) => {
    const res = getRandomEntryFromGroup(group)
    setRolledEntry(res)
  }

  const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    // do stuff
    if (e.key === 'Enter') {
      handleAddEntry()
    }
  }

  return (
    <div className="">
      {group && !fetching ? (
        <div className="py-8">
          <div className="mb-6 w-full text-center text-4xl font-extrabold tracking-wider text-gray-100">
            {group.name}
          </div>

          <div className="flex flex-col">
            <div className="flex flex-row justify-center sm:justify-end">
              <input
                onKeyPress={handleKeyPress}
                type="text"
                value={newEntry}
                onChange={(e) => setNewEntry(e.target.value)}
                className="py-1 px-4  text-lg  font-light text-black "
              />
              <div
                onClick={handleAddEntry}
                className="cursor-pointer bg-gradient-to-tr from-cyan-500 to-indigo-600 py-1 px-6 text-xl font-light text-black "
              >
                Add
              </div>
            </div>
            <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="inline-block min-w-full py-4 sm:px-6 lg:px-8">
                <div className="overflow-hidden">
                  <table className="min-w-full text-center">
                    <thead className="border-b bg-gray-800">
                      <tr>
                        <th
                          scope="col"
                          className="px-6 py-4 text-sm font-medium text-white"
                        >
                          #
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-4 text-sm font-medium text-white"
                        >
                          Name
                        </th>

                        <th
                          scope="col"
                          className="px-6 py-4 text-sm font-medium text-white"
                        >
                          Action
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {group.entries && group.entries.length !== 0 ? (
                        group.entries.map((entry: any, i: number) => {
                          return (
                            <tr className="border-b bg-white">
                              <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-900">
                                {i + 1}
                              </td>
                              <td className="whitespace-nowrap px-6 py-4 text-sm font-light text-gray-900">
                                {entry}
                              </td>

                              <td className="whitespace-nowrap py-4 text-sm font-light text-gray-900">
                                <input
                                  type="button"
                                  value="Edit"
                                  className="cursor-pointer px-2 text-black transition-colors hover:text-blue-600"
                                />
                                <input
                                  onClick={() => handleDeleteEntry(entry)}
                                  type="button"
                                  value="Delete"
                                  className="cursor-pointer px-2 text-black transition-colors hover:text-red-600"
                                />
                              </td>
                            </tr>
                          )
                        })
                      ) : (
                        <tr className="border-b bg-white">
                          <td colSpan={3} className="py-3 text-gray-900">
                            No entries.
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          <Button
            color="green2"
            onClick={() => handleRollClick(group)}
            icon={<Dice className="my-auto mr-2 h-6 w-6 " />}
            text="Roll"
          />
          {rolledEntry ? (
            <div className="pt-6">
              You have rolled entry{' '}
              <span className="font-bold text-indigo-800">{rolledEntry}</span>.
            </div>
          ) : null}
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  )
}
export default SingleGroup
