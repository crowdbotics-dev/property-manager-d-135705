import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const api_v1_revenue_list = createAsyncThunk(
  "revenues/api_v1_revenue_list",
  async payload => {
    const response = await apiService.api_v1_revenue_list(payload)
    return response.data
  }
)
export const api_v1_revenue_create = createAsyncThunk(
  "revenues/api_v1_revenue_create",
  async payload => {
    const response = await apiService.api_v1_revenue_create(payload)
    return response.data
  }
)
export const api_v1_revenue_retrieve = createAsyncThunk(
  "revenues/api_v1_revenue_retrieve",
  async payload => {
    const response = await apiService.api_v1_revenue_retrieve(payload)
    return response.data
  }
)
export const api_v1_revenue_update = createAsyncThunk(
  "revenues/api_v1_revenue_update",
  async payload => {
    const response = await apiService.api_v1_revenue_update(payload)
    return response.data
  }
)
export const api_v1_revenue_partial_update = createAsyncThunk(
  "revenues/api_v1_revenue_partial_update",
  async payload => {
    const response = await apiService.api_v1_revenue_partial_update(payload)
    return response.data
  }
)
export const api_v1_revenue_destroy = createAsyncThunk(
  "revenues/api_v1_revenue_destroy",
  async payload => {
    const response = await apiService.api_v1_revenue_destroy(payload)
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const revenuesSlice = createSlice({
  name: "revenues",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(api_v1_revenue_list.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_revenue_list.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = action.payload
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_revenue_list.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_revenue_create.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_revenue_create.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities.push(action.payload)
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_revenue_create.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_revenue_retrieve.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_revenue_retrieve.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = [
            ...state.entities.filter(record => record.id !== action.payload.id),
            action.payload
          ]
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_revenue_retrieve.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_revenue_update.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_revenue_update.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.map(record =>
            record.id === action.payload.id ? action.payload : record
          )
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_revenue_update.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_revenue_partial_update.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_revenue_partial_update.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.map(record =>
            record.id === action.payload.id ? action.payload : record
          )
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_revenue_partial_update.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_revenue_destroy.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_revenue_destroy.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.filter(
            record => record.id !== action.meta.arg?.id
          )
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_revenue_destroy.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
  }
})
export default {
  api_v1_revenue_list,
  api_v1_revenue_create,
  api_v1_revenue_retrieve,
  api_v1_revenue_update,
  api_v1_revenue_partial_update,
  api_v1_revenue_destroy,
  slice: revenuesSlice
}
