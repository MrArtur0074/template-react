import {createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'
import {userActions} from '@/entities/auth/viewer'
import {USER_LOCALSTORAGE_KEY} from '@/shared/const/localstorage.js'
import {loginActions} from '../slice/loginSlice'
import apiConfig from '@/app/config/api/apiConfig.js'

export const registerByUsername = createAsyncThunk('register/registerByUsername', async (registerData, thunkAPI) => {
  try {
    const config = apiConfig.register
    // thunkAPI.dispatch(loginActions.setLoading(true))
    const response = await axios({
      ...config,
      data: registerData
    })

    if (!response.data) {
      throw new Error()
    }

    // localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(response.data))
    // thunkAPI.dispatch(userActions.setAuthData(response.data))

    return response.data
  } catch (e) {
    console.log(e)
    return thunkAPI.rejectWithValue('error')
  } finally {
    // thunkAPI.dispatch(loginActions.setLoading(false))
  }
})
