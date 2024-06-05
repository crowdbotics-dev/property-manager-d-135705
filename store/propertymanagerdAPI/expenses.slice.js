import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const api_v1_expense_list = createAsyncThunk(
  "expenses/api_v1_expense_list",
  async payload => {
    const response = await apiService.api_v1_expense_list(payload)
    return response.data
  }
)
export const api_v1_expense_create = createAsyncThunk(
  "expenses/api_v1_expense_create",
  async payload => {
    const response = await apiService.api_v1_expense_create(payload)
    return response.data
  }
)
export const api_v1_expense_retrieve = createAsyncThunk(
  "expenses/api_v1_expense_retrieve",
  async payload => {
    const response = await apiService.api_v1_expense_retrieve(payload)
    return response.data
  }
)
export const api_v1_expense_update = createAsyncThunk(
  "expenses/api_v1_expense_update",
  async payload => {
    const response = await apiService.api_v1_expense_update(payload)
    return response.data
  }
)
export const api_v1_expense_partial_update = createAsyncThunk(
  "expenses/api_v1_expense_partial_update",
  async payload => {
    const response = await apiService.api_v1_expense_partial_update(payload)
    return response.data
  }
)
export const api_v1_expense_destroy = createAsyncThunk(
  "expenses/api_v1_expense_destroy",
  async payload => {
    const response = await apiService.api_v1_expense_destroy(payload)
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const expensesSlice = createSlice({
  name: "expenses",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(api_v1_expense_list.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_expense_list.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = action.payload
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_expense_list.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_expense_create.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_expense_create.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities.push(action.payload)
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_expense_create.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_expense_retrieve.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_expense_retrieve.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = [
            ...state.entities.filter(record => record.id !== action.payload.id),
            action.payload
          ]
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_expense_retrieve.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_expense_update.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_expense_update.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.map(record =>
            record.id === action.payload.id ? action.payload : record
          )
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_expense_update.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_expense_partial_update.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_expense_partial_update.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.map(record =>
            record.id === action.payload.id ? action.payload : record
          )
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_expense_partial_update.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_expense_destroy.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_expense_destroy.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.filter(
            record => record.id !== action.meta.arg?.id
          )
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_expense_destroy.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
  }
})
export default {
  api_v1_expense_list,
  api_v1_expense_create,
  api_v1_expense_retrieve,
  api_v1_expense_update,
  api_v1_expense_partial_update,
  api_v1_expense_destroy,
  slice: expensesSlice
}
