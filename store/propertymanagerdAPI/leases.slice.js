import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const api_v1_lease_list = createAsyncThunk(
  "leases/api_v1_lease_list",
  async payload => {
    const response = await apiService.api_v1_lease_list(payload)
    return response.data
  }
)
export const api_v1_lease_create = createAsyncThunk(
  "leases/api_v1_lease_create",
  async payload => {
    const response = await apiService.api_v1_lease_create(payload)
    return response.data
  }
)
export const api_v1_lease_retrieve = createAsyncThunk(
  "leases/api_v1_lease_retrieve",
  async payload => {
    const response = await apiService.api_v1_lease_retrieve(payload)
    return response.data
  }
)
export const api_v1_lease_update = createAsyncThunk(
  "leases/api_v1_lease_update",
  async payload => {
    const response = await apiService.api_v1_lease_update(payload)
    return response.data
  }
)
export const api_v1_lease_partial_update = createAsyncThunk(
  "leases/api_v1_lease_partial_update",
  async payload => {
    const response = await apiService.api_v1_lease_partial_update(payload)
    return response.data
  }
)
export const api_v1_lease_destroy = createAsyncThunk(
  "leases/api_v1_lease_destroy",
  async payload => {
    const response = await apiService.api_v1_lease_destroy(payload)
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const leasesSlice = createSlice({
  name: "leases",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(api_v1_lease_list.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_lease_list.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = action.payload
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_lease_list.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_lease_create.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_lease_create.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities.push(action.payload)
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_lease_create.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_lease_retrieve.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_lease_retrieve.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = [
            ...state.entities.filter(record => record.id !== action.payload.id),
            action.payload
          ]
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_lease_retrieve.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_lease_update.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_lease_update.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.map(record =>
            record.id === action.payload.id ? action.payload : record
          )
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_lease_update.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_lease_partial_update.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_lease_partial_update.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.map(record =>
            record.id === action.payload.id ? action.payload : record
          )
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_lease_partial_update.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_lease_destroy.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_lease_destroy.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.filter(
            record => record.id !== action.meta.arg?.id
          )
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_lease_destroy.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
  }
})
export default {
  api_v1_lease_list,
  api_v1_lease_create,
  api_v1_lease_retrieve,
  api_v1_lease_update,
  api_v1_lease_partial_update,
  api_v1_lease_destroy,
  slice: leasesSlice
}
