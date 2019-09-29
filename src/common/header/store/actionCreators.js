import * as constants from './constants';
import axios from 'axios';
import { fromJS } from 'immutable';


const changeList = (data) => ({
  type: constants.CHANGE_LIST,
  data: fromJS(data),
  totalPage: Math.ceil(data.length / 10)
})

export const searchFocus = () => ({
  type: constants.SEARCH_FOCUS
})

export const searchBlur = () => ({
  type: constants.SEARCH_BLUR
})

export const mouseIn = () => ({
  type: constants.MOUSE_IN
})
export const mouseOut = () => ({
  type: constants.MOUSE_OUT
})

export const changePage = (page) => ({
  type: constants.CHANGE_PAGE,
  page:fromJS(page)
})

export const getList = () => {
  return (dispatch) => {
    axios.get('/api/headerList.json').then(res => {
      console.log(res)
      const data = res.data
      dispatch(changeList(data.data))
    })
  }

}