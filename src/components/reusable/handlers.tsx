import { Group } from '../../API'
export const getRandomEntryFromGroup = (group: Group) => {
  const entriesLength = group.entries?.length

  // generate random number
  let rand = Math.random()

  // multiply with difference
  rand = Math.floor(rand * entriesLength)

  const roll = group.entries[rand]

  return roll
}
export function getRandomEntryFromAllGroups(groups: [Group] | []) {
  let entriesLength = 0
  let entriesArray: any[]
  if (groups.length > 0) {
    entriesArray = []
    if (groups.length > 0) {
      groups.forEach((group) => {
        entriesLength += group.entries?.length
        entriesArray = [...entriesArray, ...group.entries]
      })

      if (entriesArray.length > 0) {
        // generate random number
        let rand = Math.random()

        // multiply with difference
        rand = Math.floor(rand * entriesLength)

        const roll = entriesArray[rand]
        return roll
      } else {
        return 'null'
      }
    } else {
      return null
    }
  } else {
    return null
  }
}
