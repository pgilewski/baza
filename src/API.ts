/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateGroupInput = {
  id?: string | null,
  name: string,
};

export type ModelGroupConditionInput = {
  name?: ModelStringInput | null,
  and?: Array< ModelGroupConditionInput | null > | null,
  or?: Array< ModelGroupConditionInput | null > | null,
  not?: ModelGroupConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type Group = {
  __typename: "Group",
  id: string,
  name: string,
  entries?: ModelEntryConnection | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelEntryConnection = {
  __typename: "ModelEntryConnection",
  items:  Array<Entry | null >,
  nextToken?: string | null,
};

export type Entry = {
  __typename: "Entry",
  id: string,
  name: string,
  blog?: Group | null,
  createdAt: string,
  updatedAt: string,
  groupEntriesId?: string | null,
};

export type UpdateGroupInput = {
  id: string,
  name?: string | null,
};

export type DeleteGroupInput = {
  id: string,
};

export type CreateEntryInput = {
  id?: string | null,
  name: string,
  groupEntriesId?: string | null,
};

export type ModelEntryConditionInput = {
  name?: ModelStringInput | null,
  and?: Array< ModelEntryConditionInput | null > | null,
  or?: Array< ModelEntryConditionInput | null > | null,
  not?: ModelEntryConditionInput | null,
  groupEntriesId?: ModelIDInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type UpdateEntryInput = {
  id: string,
  name?: string | null,
  groupEntriesId?: string | null,
};

export type DeleteEntryInput = {
  id: string,
};

export type ModelGroupFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  and?: Array< ModelGroupFilterInput | null > | null,
  or?: Array< ModelGroupFilterInput | null > | null,
  not?: ModelGroupFilterInput | null,
};

export type ModelGroupConnection = {
  __typename: "ModelGroupConnection",
  items:  Array<Group | null >,
  nextToken?: string | null,
};

export type ModelEntryFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  and?: Array< ModelEntryFilterInput | null > | null,
  or?: Array< ModelEntryFilterInput | null > | null,
  not?: ModelEntryFilterInput | null,
  groupEntriesId?: ModelIDInput | null,
};

export type CreateGroupMutationVariables = {
  input: CreateGroupInput,
  condition?: ModelGroupConditionInput | null,
};

export type CreateGroupMutation = {
  createGroup?:  {
    __typename: "Group",
    id: string,
    name: string,
    entries?:  {
      __typename: "ModelEntryConnection",
      items:  Array< {
        __typename: "Entry",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
        groupEntriesId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateGroupMutationVariables = {
  input: UpdateGroupInput,
  condition?: ModelGroupConditionInput | null,
};

export type UpdateGroupMutation = {
  updateGroup?:  {
    __typename: "Group",
    id: string,
    name: string,
    entries?:  {
      __typename: "ModelEntryConnection",
      items:  Array< {
        __typename: "Entry",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
        groupEntriesId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteGroupMutationVariables = {
  input: DeleteGroupInput,
  condition?: ModelGroupConditionInput | null,
};

export type DeleteGroupMutation = {
  deleteGroup?:  {
    __typename: "Group",
    id: string,
    name: string,
    entries?:  {
      __typename: "ModelEntryConnection",
      items:  Array< {
        __typename: "Entry",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
        groupEntriesId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateEntryMutationVariables = {
  input: CreateEntryInput,
  condition?: ModelEntryConditionInput | null,
};

export type CreateEntryMutation = {
  createEntry?:  {
    __typename: "Entry",
    id: string,
    name: string,
    blog?:  {
      __typename: "Group",
      id: string,
      name: string,
      entries?:  {
        __typename: "ModelEntryConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    groupEntriesId?: string | null,
  } | null,
};

export type UpdateEntryMutationVariables = {
  input: UpdateEntryInput,
  condition?: ModelEntryConditionInput | null,
};

export type UpdateEntryMutation = {
  updateEntry?:  {
    __typename: "Entry",
    id: string,
    name: string,
    blog?:  {
      __typename: "Group",
      id: string,
      name: string,
      entries?:  {
        __typename: "ModelEntryConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    groupEntriesId?: string | null,
  } | null,
};

export type DeleteEntryMutationVariables = {
  input: DeleteEntryInput,
  condition?: ModelEntryConditionInput | null,
};

export type DeleteEntryMutation = {
  deleteEntry?:  {
    __typename: "Entry",
    id: string,
    name: string,
    blog?:  {
      __typename: "Group",
      id: string,
      name: string,
      entries?:  {
        __typename: "ModelEntryConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    groupEntriesId?: string | null,
  } | null,
};

export type GetGroupQueryVariables = {
  id: string,
};

export type GetGroupQuery = {
  getGroup?:  {
    __typename: "Group",
    id: string,
    name: string,
    entries?:  {
      __typename: "ModelEntryConnection",
      items:  Array< {
        __typename: "Entry",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
        groupEntriesId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListGroupsQueryVariables = {
  filter?: ModelGroupFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListGroupsQuery = {
  listGroups?:  {
    __typename: "ModelGroupConnection",
    items:  Array< {
      __typename: "Group",
      id: string,
      name: string,
      entries?:  {
        __typename: "ModelEntryConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetEntryQueryVariables = {
  id: string,
};

export type GetEntryQuery = {
  getEntry?:  {
    __typename: "Entry",
    id: string,
    name: string,
    blog?:  {
      __typename: "Group",
      id: string,
      name: string,
      entries?:  {
        __typename: "ModelEntryConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    groupEntriesId?: string | null,
  } | null,
};

export type ListEntriesQueryVariables = {
  filter?: ModelEntryFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListEntriesQuery = {
  listEntries?:  {
    __typename: "ModelEntryConnection",
    items:  Array< {
      __typename: "Entry",
      id: string,
      name: string,
      blog?:  {
        __typename: "Group",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
      groupEntriesId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateGroupSubscription = {
  onCreateGroup?:  {
    __typename: "Group",
    id: string,
    name: string,
    entries?:  {
      __typename: "ModelEntryConnection",
      items:  Array< {
        __typename: "Entry",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
        groupEntriesId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateGroupSubscription = {
  onUpdateGroup?:  {
    __typename: "Group",
    id: string,
    name: string,
    entries?:  {
      __typename: "ModelEntryConnection",
      items:  Array< {
        __typename: "Entry",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
        groupEntriesId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteGroupSubscription = {
  onDeleteGroup?:  {
    __typename: "Group",
    id: string,
    name: string,
    entries?:  {
      __typename: "ModelEntryConnection",
      items:  Array< {
        __typename: "Entry",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
        groupEntriesId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateEntrySubscription = {
  onCreateEntry?:  {
    __typename: "Entry",
    id: string,
    name: string,
    blog?:  {
      __typename: "Group",
      id: string,
      name: string,
      entries?:  {
        __typename: "ModelEntryConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    groupEntriesId?: string | null,
  } | null,
};

export type OnUpdateEntrySubscription = {
  onUpdateEntry?:  {
    __typename: "Entry",
    id: string,
    name: string,
    blog?:  {
      __typename: "Group",
      id: string,
      name: string,
      entries?:  {
        __typename: "ModelEntryConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    groupEntriesId?: string | null,
  } | null,
};

export type OnDeleteEntrySubscription = {
  onDeleteEntry?:  {
    __typename: "Entry",
    id: string,
    name: string,
    blog?:  {
      __typename: "Group",
      id: string,
      name: string,
      entries?:  {
        __typename: "ModelEntryConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    groupEntriesId?: string | null,
  } | null,
};
