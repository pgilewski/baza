/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateGroupInput = {
  id?: string | null;
  owner?: string | null;
  name: string;
  entries: Array<string | null>;
  type: string;
  createdAt?: string | null;
  updatedAt?: string | null;
};

export type ModelGroupConditionInput = {
  owner?: ModelStringInput | null;
  name?: ModelStringInput | null;
  entries?: ModelStringInput | null;
  type?: ModelStringInput | null;
  createdAt?: ModelStringInput | null;
  updatedAt?: ModelStringInput | null;
  and?: Array<ModelGroupConditionInput | null> | null;
  or?: Array<ModelGroupConditionInput | null> | null;
  not?: ModelGroupConditionInput | null;
};

export type ModelStringInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export enum ModelAttributeTypes {
  binary = 'binary',
  binarySet = 'binarySet',
  bool = 'bool',
  list = 'list',
  map = 'map',
  number = 'number',
  numberSet = 'numberSet',
  string = 'string',
  stringSet = 'stringSet',
  _null = '_null',
}

export type ModelSizeInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
};

export type Group = {
  __typename: 'Group';
  id: string;
  owner?: string | null;
  name: string;
  entries: Array<string | null>;
  type: string;
  createdAt: string;
  updatedAt: string;
};

export type UpdateGroupInput = {
  id: string;
  owner?: string | null;
  name?: string | null;
  entries?: Array<string | null> | null;
  type?: string | null;
  createdAt?: string | null;
  updatedAt?: string | null;
};

export type DeleteGroupInput = {
  id: string;
};

export type ModelGroupFilterInput = {
  id?: ModelIDInput | null;
  owner?: ModelStringInput | null;
  name?: ModelStringInput | null;
  entries?: ModelStringInput | null;
  type?: ModelStringInput | null;
  createdAt?: ModelStringInput | null;
  updatedAt?: ModelStringInput | null;
  and?: Array<ModelGroupFilterInput | null> | null;
  or?: Array<ModelGroupFilterInput | null> | null;
  not?: ModelGroupFilterInput | null;
};

export type ModelIDInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export type ModelGroupConnection = {
  __typename: 'ModelGroupConnection';
  items: Array<Group | null>;
  nextToken?: string | null;
};

export type ModelStringKeyConditionInput = {
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
};

export enum ModelSortDirection {
  ASC = 'ASC',
  DESC = 'DESC',
}

export type SearchableGroupFilterInput = {
  id?: SearchableIDFilterInput | null;
  owner?: SearchableStringFilterInput | null;
  name?: SearchableStringFilterInput | null;
  entries?: SearchableStringFilterInput | null;
  type?: SearchableStringFilterInput | null;
  createdAt?: SearchableStringFilterInput | null;
  updatedAt?: SearchableStringFilterInput | null;
  and?: Array<SearchableGroupFilterInput | null> | null;
  or?: Array<SearchableGroupFilterInput | null> | null;
  not?: SearchableGroupFilterInput | null;
};

export type SearchableIDFilterInput = {
  ne?: string | null;
  gt?: string | null;
  lt?: string | null;
  gte?: string | null;
  lte?: string | null;
  eq?: string | null;
  match?: string | null;
  matchPhrase?: string | null;
  matchPhrasePrefix?: string | null;
  multiMatch?: string | null;
  exists?: boolean | null;
  wildcard?: string | null;
  regexp?: string | null;
  range?: Array<string | null> | null;
};

export type SearchableStringFilterInput = {
  ne?: string | null;
  gt?: string | null;
  lt?: string | null;
  gte?: string | null;
  lte?: string | null;
  eq?: string | null;
  match?: string | null;
  matchPhrase?: string | null;
  matchPhrasePrefix?: string | null;
  multiMatch?: string | null;
  exists?: boolean | null;
  wildcard?: string | null;
  regexp?: string | null;
  range?: Array<string | null> | null;
};

export type SearchableGroupSortInput = {
  field?: SearchableGroupSortableFields | null;
  direction?: SearchableSortDirection | null;
};

export enum SearchableGroupSortableFields {
  id = 'id',
  owner = 'owner',
  name = 'name',
  entries = 'entries',
  type = 'type',
  createdAt = 'createdAt',
  updatedAt = 'updatedAt',
}

export enum SearchableSortDirection {
  asc = 'asc',
  desc = 'desc',
}

export type SearchableGroupAggregationInput = {
  name: string;
  type: SearchableAggregateType;
  field: SearchableGroupAggregateField;
};

export enum SearchableAggregateType {
  terms = 'terms',
  avg = 'avg',
  min = 'min',
  max = 'max',
  sum = 'sum',
}

export enum SearchableGroupAggregateField {
  id = 'id',
  owner = 'owner',
  name = 'name',
  entries = 'entries',
  type = 'type',
  createdAt = 'createdAt',
  updatedAt = 'updatedAt',
}

export type SearchableGroupConnection = {
  __typename: 'SearchableGroupConnection';
  items: Array<Group | null>;
  nextToken?: string | null;
  total?: number | null;
  aggregateItems: Array<SearchableAggregateResult | null>;
};

export type SearchableAggregateResult = {
  __typename: 'SearchableAggregateResult';
  name: string;
  result?: SearchableAggregateGenericResult | null;
};

export type SearchableAggregateGenericResult =
  | SearchableAggregateScalarResult
  | SearchableAggregateBucketResult;

export type SearchableAggregateScalarResult = {
  __typename: 'SearchableAggregateScalarResult';
  value: number;
};

export type SearchableAggregateBucketResult = {
  __typename: 'SearchableAggregateBucketResult';
  buckets?: Array<SearchableAggregateBucketResultItem | null> | null;
};

export type SearchableAggregateBucketResultItem = {
  __typename: 'SearchableAggregateBucketResultItem';
  key: string;
  doc_count: number;
};

export type CreateGroupMutationVariables = {
  input: CreateGroupInput;
  condition?: ModelGroupConditionInput | null;
};

export type CreateGroupMutation = {
  createGroup?: {
    __typename: 'Group';
    id: string;
    owner?: string | null;
    name: string;
    entries: Array<string | null>;
    type: string;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type UpdateGroupMutationVariables = {
  input: UpdateGroupInput;
  condition?: ModelGroupConditionInput | null;
};

export type UpdateGroupMutation = {
  updateGroup?: {
    __typename: 'Group';
    id: string;
    owner?: string | null;
    name: string;
    entries: Array<string | null>;
    type: string;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type DeleteGroupMutationVariables = {
  input: DeleteGroupInput;
  condition?: ModelGroupConditionInput | null;
};

export type DeleteGroupMutation = {
  deleteGroup?: {
    __typename: 'Group';
    id: string;
    owner?: string | null;
    name: string;
    entries: Array<string | null>;
    type: string;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type GetGroupQueryVariables = {
  id: string;
};

export type GetGroupQuery = {
  getGroup?: {
    __typename: 'Group';
    id: string;
    owner?: string | null;
    name: string;
    entries: Array<string | null>;
    type: string;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type ListGroupsQueryVariables = {
  filter?: ModelGroupFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
};

export type ListGroupsQuery = {
  listGroups?: {
    __typename: 'ModelGroupConnection';
    items: Array<{
      __typename: 'Group';
      id: string;
      owner?: string | null;
      name: string;
      entries: Array<string | null>;
      type: string;
      createdAt: string;
      updatedAt: string;
    } | null>;
    nextToken?: string | null;
  } | null;
};

export type GroupsByDateQueryVariables = {
  type: string;
  createdAt?: ModelStringKeyConditionInput | null;
  sortDirection?: ModelSortDirection | null;
  filter?: ModelGroupFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
};

export type GroupsByDateQuery = {
  groupsByDate?: {
    __typename: 'ModelGroupConnection';
    items: Array<{
      __typename: 'Group';
      id: string;
      owner?: string | null;
      name: string;
      entries: Array<string | null>;
      type: string;
      createdAt: string;
      updatedAt: string;
    } | null>;
    nextToken?: string | null;
  } | null;
};

export type SearchGroupsQueryVariables = {
  filter?: SearchableGroupFilterInput | null;
  sort?: Array<SearchableGroupSortInput | null> | null;
  limit?: number | null;
  nextToken?: string | null;
  from?: number | null;
  aggregates?: Array<SearchableGroupAggregationInput | null> | null;
};

export type SearchGroupsQuery = {
  searchGroups?: {
    __typename: 'SearchableGroupConnection';
    items: Array<{
      __typename: 'Group';
      id: string;
      owner?: string | null;
      name: string;
      entries: Array<string | null>;
      type: string;
      createdAt: string;
      updatedAt: string;
    } | null>;
    nextToken?: string | null;
    total?: number | null;
    aggregateItems: Array<{
      __typename: 'SearchableAggregateResult';
      name: string;
      result:
        | (
            | {
                __typename: 'SearchableAggregateScalarResult';
                value: number;
              }
            | {
                __typename: 'SearchableAggregateBucketResult';
                buckets?: Array<{
                  __typename: string;
                  key: string;
                  doc_count: number;
                } | null> | null;
              }
          )
        | null;
    } | null>;
  } | null;
};

export type OnCreateGroupSubscriptionVariables = {
  owner?: string | null;
};

export type OnCreateGroupSubscription = {
  onCreateGroup?: {
    __typename: 'Group';
    id: string;
    owner?: string | null;
    name: string;
    entries: Array<string | null>;
    type: string;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type OnUpdateGroupSubscriptionVariables = {
  owner?: string | null;
};

export type OnUpdateGroupSubscription = {
  onUpdateGroup?: {
    __typename: 'Group';
    id: string;
    owner?: string | null;
    name: string;
    entries: Array<string | null>;
    type: string;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type OnDeleteGroupSubscriptionVariables = {
  owner?: string | null;
};

export type OnDeleteGroupSubscription = {
  onDeleteGroup?: {
    __typename: 'Group';
    id: string;
    owner?: string | null;
    name: string;
    entries: Array<string | null>;
    type: string;
    createdAt: string;
    updatedAt: string;
  } | null;
};
