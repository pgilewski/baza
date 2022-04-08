/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateGroup = /* GraphQL */ `
  subscription OnCreateGroup {
    onCreateGroup {
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
export const onUpdateGroup = /* GraphQL */ `
  subscription OnUpdateGroup {
    onUpdateGroup {
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
export const onDeleteGroup = /* GraphQL */ `
  subscription OnDeleteGroup {
    onDeleteGroup {
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
export const onCreateEntry = /* GraphQL */ `
  subscription OnCreateEntry {
    onCreateEntry {
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
export const onUpdateEntry = /* GraphQL */ `
  subscription OnUpdateEntry {
    onUpdateEntry {
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
export const onDeleteEntry = /* GraphQL */ `
  subscription OnDeleteEntry {
    onDeleteEntry {
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
