import { CATEGORIES_ACTIONS_TYPES } from "./categories.types";
import { createAction } from "../../utils/reducer/reducer.utils";

export const fetchCategoriesStart = () =>
    createAction(CATEGORIES_ACTIONS_TYPES.FETCH_CATEGORIES_START)

export const fetchCategoriesSuccess = (categoriesArray) =>
    createAction(CATEGORIES_ACTIONS_TYPES.FETCH_CATEGORIES_SUCCESS, categoriesArray)

export const fetchCategoriesFailed = () =>
    createAction(CATEGORIES_ACTIONS_TYPES.FETCH_CATEGORIES_FAILED)

