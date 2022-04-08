/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createGroup = /* GraphQL */ `
  mutation CreateGroup(
    $input: CreateGroupInput!
    $condition: ModelGroupConditionInput
  ) {
    createGroup(input: $input, condition: $condition) {
      id
      name
      entries {
        items {
          id
          name
          createdAt
          updatedAt
          groupEntriesId
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateGroup = /* GraphQL */ `
  mutation UpdateGroup(
    $input: UpdateGroupInput!
    $condition: ModelGroupConditionInput
  ) {
    updateGroup(input: $input, condition: $condition) {
      id
      name
      entries {
        items {
          id
          name
          createdAt
          updatedAt
          groupEntriesId
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteGroup = /* GraphQL */ `
  mutation DeleteGroup(
    $input: DeleteGroupInput!
    $condition: ModelGroupConditionInput
  ) {
    deleteGroup(input: $input, condition: $condition) {
      id
      name
      entries {
        items {
          id
          name
          createdAt
          updatedAt
          groupEntriesId
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const createEntry = /* GraphQL */ `
  mutation CreateEntry(
    $input: CreateEntryInput!
    $condition: ModelEntryConditionInput
  ) {
    createEntry(input: $input, condition: $condition) {
      id
      name
      blog {
        id
        name
        entries {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
      groupEntriesId
    }
  }
`;
export const updateEntry = /* GraphQL */ `
  mutation UpdateEntry(
    $input: UpdateEntryInput!
    $condition: ModelEntryConditionInput
  ) {
    updateEntry(input: $input, condition: $condition) {
      id
      name
      blog {
        id
        name
        entries {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
      groupEntriesId
    }
  }
`;
export const deleteEntry = /* GraphQL */ `
  mutation DeleteEntry(
    $input: DeleteEntryInput!
    $condition: ModelEntryConditionInput
  ) {
    deleteEntry(input: $input, condition: $condition) {
      id
      name
      blog {
        id
        name
        entries {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
      groupEntriesId
    }
  }
`;
