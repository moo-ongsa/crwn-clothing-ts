import { takeLatest, all, call, put } from 'redux-saga/effects'

import { getCategoriesAndDocument } from '../../utils/firebase/firebase.utils'

import { fetchCategoriesSuccess, fetchCategoriesFailed } from './categories.action'

import { CATEGORIES_ACTIONS_TYPES } from './categories.types'


export function* fetchCategoriesAsync() {
    try {
        const categoriesArray = yield call(getCategoriesAndDocument, 'categories')
        yield put(fetchCategoriesSuccess(categoriesArray))
    } catch (error) {
        yield put(fetchCategoriesFailed(error))
    }
}

export function* onFetchCategories() {
    yield takeLatest(CATEGORIES_ACTIONS_TYPES.FETCH_CATEGORIES_START, fetchCategoriesAsync)
}

export function* categoriesSaga() {
    yield all([call(onFetchCategories)])
}