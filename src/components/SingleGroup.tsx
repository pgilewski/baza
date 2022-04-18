import React, { useState, useContext, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { getGroup } from '../graphql/queries';
import { API } from 'aws-amplify';
import { updateGroup } from '../graphql/mutations';
import NotyfContext from '../context/NotyfContext';
import { getRandomEntryFromGroup } from './reusable/handlers';
import { Group } from '../API';
import { ReactComponent as Dice } from '../assets/icons/dice.svg';
import Button from './reusable/Button';

const SingleGroup: React.FC = () => {
  let topicId = useLocation();
  const notyf = useContext(NotyfContext);
  const getCurrentGroup = async () => {
    const response = await API.graphql({
      query: getGroup,
      variables: {
        id: topicId.pathname.split('/')[3],
      },
      authMode: 'AMAZON_COGNITO_USER_POOLS',
    });

    return response;
  };
  const [group, setGroup] = useState<any>(null);
  const [fetching, setFetching] = useState<boolean>(true);

  useEffect(() => {
    getCurrentGroup().then((d: any) => {
      setGroup(d.data.getGroup);
      setFetching(false);
    });
  }, []);
  const handleDeleteEntry = async (entry: string) => {
    let newEntriesArray = group.entries;
    group.entries.forEach((item: any, i: number) => {
      if (item === entry) {
        newEntriesArray.splice(i, 1);
      }
    });

    let newGroup = group;
    newGroup.entries = newEntriesArray;
    setFetching(true);
    setGroup(newGroup);
    setFetching(false);

    const response = await API.graphql({
      query: updateGroup,
      variables: {
        input: newGroup,
      },
      authMode: 'AMAZON_COGNITO_USER_POOLS',
    });
    if (response) {
      notyf.success('Removed an entry.');
      getCurrentGroup().then((d: any) => {
        setGroup(d.data.getGroup);
        setFetching(false);
      });
    } else {
      notyf.error('Connection problem.');
    }
  };
  const [newEntry, setNewEntry] = useState('');
  const handleAddEntry = async () => {
    let newEntriesArray = group.entries;
    if (newEntriesArray == null) {
      newEntriesArray = [newEntry];
    } else {
      newEntriesArray.push(newEntry);
    }
    let newGroup = group;
    newGroup.entries = newEntriesArray;
    setFetching(true);
    setGroup(newGroup);
    setFetching(false);
    const response = await API.graphql({
      query: updateGroup,
      variables: {
        input: newGroup,
      },
      authMode: 'AMAZON_COGNITO_USER_POOLS',
    });

    if (response) {
      notyf.success('Successfully added an entry.');
      getCurrentGroup()
        .then((d: any) => {
          setGroup(d.data.getGroup);
          setFetching(false);
          console.log(newEntriesArray, newEntry);
        })
        .finally(() => {
          setNewEntry('');
        });
    } else {
      notyf.error('Connection problem.');
    }
  };
  const [rolledEntry, setRolledEntry] = useState<string | null>(null);

  const handleRollClick = (group: Group) => {
    const res = getRandomEntryFromGroup(group);
    setRolledEntry(res);
  };
  return (
    <div className="">
      {group && !fetching ? (
        <div className="py-8">
          <div className="text-4xl w-full text-center font-extrabold text-gray-100 mb-6 tracking-wider">
            {group.name}
          </div>

          <div className="flex flex-col">
            <div className="flex flex-row justify-center sm:justify-end">
              <input
                type="text"
                value={newEntry}
                onChange={(e) => setNewEntry(e.target.value)}
                className="py-1 px-4  text-black  text-lg font-light "
              />
              <div
                onClick={handleAddEntry}
                className="py-1 px-6 bg-gradient-to-tr text-black from-cyan-500 to-indigo-600 cursor-pointer text-xl font-light "
              >
                Add
              </div>
            </div>
            <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="py-4 inline-block min-w-full sm:px-6 lg:px-8">
                <div className="overflow-hidden">
                  <table className="min-w-full text-center">
                    <thead className="border-b bg-gray-800">
                      <tr>
                        <th
                          scope="col"
                          className="text-sm font-medium text-white px-6 py-4"
                        >
                          #
                        </th>
                        <th
                          scope="col"
                          className="text-sm font-medium text-white px-6 py-4"
                        >
                          Name
                        </th>

                        <th
                          scope="col"
                          className="text-sm font-medium text-white px-6 py-4"
                        >
                          Action
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {group.entries && group.entries.length !== 0 ? (
                        group.entries.map((entry: any, i: number) => {
                          return (
                            <tr className="bg-white border-b">
                              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                {i + 1}
                              </td>
                              <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                {entry}
                              </td>

                              <td className="text-sm text-gray-900 font-light py-4 whitespace-nowrap">
                                <input
                                  type="button"
                                  value="Edit"
                                  className="cursor-pointer transition-colors text-black hover:text-blue-600 px-2"
                                />
                                <input
                                  onClick={() =>
                                    handleDeleteEntry(entry)
                                  }
                                  type="button"
                                  value="Delete"
                                  className="cursor-pointer transition-colors text-black hover:text-red-600 px-2"
                                />
                              </td>
                            </tr>
                          );
                        })
                      ) : (
                        <tr className="bg-white border-b">
                          <td
                            colSpan={3}
                            className="py-3 text-gray-900"
                          >
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
            icon={<Dice className="w-6 h-6 my-auto mr-2 " />}
            text="Roll"
          />
          {rolledEntry ? (
            <div className="pt-6">
              You have rolled entry{' '}
              <span className="text-indigo-800 font-bold">
                {rolledEntry}
              </span>
              .
            </div>
          ) : null}
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};
export default SingleGroup;
