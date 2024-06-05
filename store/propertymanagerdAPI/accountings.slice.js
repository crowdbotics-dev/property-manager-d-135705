import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const api_v1_accounting_list = createAsyncThunk(
  "accountings/api_v1_accounting_list",
  async payload => {
    const response = await apiService.api_v1_accounting_list(payload)
    return response.data
  }
)
export const api_v1_accounting_create = createAsyncThunk(
  "accountings/api_v1_accounting_create",
  async payload => {
    const response = await apiService.api_v1_accounting_create(payload)
    return response.data
  }
)
export const api_v1_accounting_retrieve = createAsyncThunk(
  "accountings/api_v1_accounting_retrieve",
  async payload => {
    const response = await apiService.api_v1_accounting_retrieve(payload)
    return response.data
  }
)
export const api_v1_accounting_update = createAsyncThunk(
  "accountings/api_v1_accounting_update",
  async payload => {
    const response = await apiService.api_v1_accounting_update(payload)
    return response.data
  }
)
export const api_v1_accounting_partial_update = createAsyncThunk(
  "accountings/api_v1_accounting_partial_update",
  async payload => {
    const response = await apiService.api_v1_accounting_partial_update(payload)
    return response.data
  }
)
export const api_v1_accounting_destroy = createAsyncThunk(
  "accountings/api_v1_accounting_destroy",
  async payload => {
    const response = await apiService.api_v1_accounting_destroy(payload)
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const accountingsSlice = createSlice({
  name: "accountings",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(api_v1_accounting_list.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_accounting_list.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = action.payload
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_accounting_list.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_accounting_create.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_accounting_create.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities.push(action.payload)
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_accounting_create.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_accounting_retrieve.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_accounting_retrieve.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = [
            ...state.entities.filter(record => record.id !== action.payload.id),
            action.payload
          ]
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_accounting_retrieve.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_accounting_update.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_accounting_update.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.map(record =>
            record.id === action.payload.id ? action.payload : record
          )
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_accounting_update.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_accounting_partial_update.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_accounting_partial_update.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.map(record =>
            record.id === action.payload.id ? action.payload : record
          )
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_accounting_partial_update.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_accounting_destroy.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_accounting_destroy.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.filter(
            record => record.id !== action.meta.arg?.id
          )
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_accounting_destroy.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
  }
})
export default {
  api_v1_accounting_list,
  api_v1_accounting_create,
  api_v1_accounting_retrieve,
  api_v1_accounting_update,
  api_v1_accounting_partial_update,
  api_v1_accounting_destroy,
  slice: accountingsSlice
}
