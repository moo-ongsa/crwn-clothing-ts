import {
  CATEGORIES_ACTIONS_TYPES,
  Category,
} from "./categories.types";

import {
  createAction,
  Action,
  ActionWithPayload,
  withMather,
} from "../../utils/reducer/reducer.utils";

export type FetchCategoriesStart =
  Action<CATEGORIES_ACTIONS_TYPES.FETCH_CATEGORIES_START>;

export type FetchCategoriesSuccess = ActionWithPayload<
  CATEGORIES_ACTIONS_TYPES.FETCH_CATEGORIES_SUCCESS,
  Category[]
>;

export type FetchCategiresFailed = ActionWithPayload<
  CATEGORIES_ACTIONS_TYPES.FETCH_CATEGORIES_FAILED,
  Error
>;

export type CategoryAction =
  | FetchCategoriesStart
  | FetchCategoriesSuccess
  | FetchCategiresFailed;

export const fetchCategoriesStart = withMather(
  (): FetchCategoriesStart =>
    createAction(CATEGORIES_ACTIONS_TYPES.FETCH_CATEGORIES_START)
);

export const fetchCategoriesSuccess = withMather(
  (categoriesArray: Category[]): FetchCategoriesSuccess =>
    createAction(
      CATEGORIES_ACTIONS_TYPES.FETCH_CATEGORIES_SUCCESS,
      categoriesArray
    )
);

export const fetchCategoriesFailed = withMather(
  (error: Error): FetchCategiresFailed =>
    createAction(CATEGORIES_ACTIONS_TYPES.FETCH_CATEGORIES_FAILED, error)
);
