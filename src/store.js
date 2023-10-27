import { configureStore } from '@reduxjs/toolkit'
import { taskslice } from './reducers/task_slice'


export default configureStore({
  reducer: {
    task: taskslice,
  },
})