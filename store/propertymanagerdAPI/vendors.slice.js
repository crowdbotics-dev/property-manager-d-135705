import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const api_v1_vendor_list = createAsyncThunk(
  "vendors/api_v1_vendor_list",
  async payload => {
    const response = await apiService.api_v1_vendor_list(payload)
    return response.data
  }
)
export const api_v1_vendor_create = createAsyncThunk(
  "vendors/api_v1_vendor_create",
  async payload => {
    const response = await apiService.api_v1_vendor_create(payload)
    return response.data
  }
)
export const api_v1_vendor_retrieve = createAsyncThunk(
  "vendors/api_v1_vendor_retrieve",
  async payload => {
    const response = await apiService.api_v1_vendor_retrieve(payload)
    return response.data
  }
)
export const api_v1_vendor_update = createAsyncThunk(
  "vendors/api_v1_vendor_update",
  async payload => {
    const response = await apiService.api_v1_vendor_update(payload)
    return response.data
  }
)
export const api_v1_vendor_partial_update = createAsyncThunk(
  "vendors/api_v1_vendor_partial_update",
  async payload => {
    const response = await apiService.api_v1_vendor_partial_update(payload)
    return response.data
  }
)
export const api_v1_vendor_destroy = createAsyncThunk(
  "vendors/api_v1_vendor_destroy",
  async payload => {
    const response = await apiService.api_v1_vendor_destroy(payload)
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const vendorsSlice = createSlice({
  name: "vendors",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(api_v1_vendor_list.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_vendor_list.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = action.payload
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_vendor_list.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_vendor_create.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_vendor_create.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities.push(action.payload)
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_vendor_create.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_vendor_retrieve.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_vendor_retrieve.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = [
            ...state.entities.filter(record => record.id !== action.payload.id),
            action.payload
          ]
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_vendor_retrieve.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_vendor_update.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_vendor_update.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.map(record =>
            record.id === action.payload.id ? action.payload : record
          )
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_vendor_update.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_vendor_partial_update.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_vendor_partial_update.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.map(record =>
            record.id === action.payload.id ? action.payload : record
          )
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_vendor_partial_update.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_vendor_destroy.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_vendor_destroy.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.filter(
            record => record.id !== action.meta.arg?.id
          )
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_vendor_destroy.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
  }
})
export default {
  api_v1_vendor_list,
  api_v1_vendor_create,
  api_v1_vendor_retrieve,
  api_v1_vendor_update,
  api_v1_vendor_partial_update,
  api_v1_vendor_destroy,
  slice: vendorsSlice
}
