import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const api_v1_maintenancerequest_list = createAsyncThunk(
  "maintenanceRequests/api_v1_maintenancerequest_list",
  async payload => {
    const response = await apiService.api_v1_maintenancerequest_list(payload)
    return response.data
  }
)
export const api_v1_maintenancerequest_create = createAsyncThunk(
  "maintenanceRequests/api_v1_maintenancerequest_create",
  async payload => {
    const response = await apiService.api_v1_maintenancerequest_create(payload)
    return response.data
  }
)
export const api_v1_maintenancerequest_retrieve = createAsyncThunk(
  "maintenanceRequests/api_v1_maintenancerequest_retrieve",
  async payload => {
    const response = await apiService.api_v1_maintenancerequest_retrieve(
      payload
    )
    return response.data
  }
)
export const api_v1_maintenancerequest_update = createAsyncThunk(
  "maintenanceRequests/api_v1_maintenancerequest_update",
  async payload => {
    const response = await apiService.api_v1_maintenancerequest_update(payload)
    return response.data
  }
)
export const api_v1_maintenancerequest_partial_update = createAsyncThunk(
  "maintenanceRequests/api_v1_maintenancerequest_partial_update",
  async payload => {
    const response = await apiService.api_v1_maintenancerequest_partial_update(
      payload
    )
    return response.data
  }
)
export const api_v1_maintenancerequest_destroy = createAsyncThunk(
  "maintenanceRequests/api_v1_maintenancerequest_destroy",
  async payload => {
    const response = await apiService.api_v1_maintenancerequest_destroy(payload)
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const maintenanceRequestsSlice = createSlice({
  name: "maintenanceRequests",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(api_v1_maintenancerequest_list.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_maintenancerequest_list.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = action.payload
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_maintenancerequest_list.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_maintenancerequest_create.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_maintenancerequest_create.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities.push(action.payload)
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_maintenancerequest_create.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_maintenancerequest_retrieve.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(
        api_v1_maintenancerequest_retrieve.fulfilled,
        (state, action) => {
          if (state.api.loading === "pending") {
            state.entities = [
              ...state.entities.filter(
                record => record.id !== action.payload.id
              ),
              action.payload
            ]
            state.api.loading = "idle"
          }
        }
      )
      .addCase(api_v1_maintenancerequest_retrieve.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_maintenancerequest_update.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_maintenancerequest_update.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.map(record =>
            record.id === action.payload.id ? action.payload : record
          )
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_maintenancerequest_update.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(
        api_v1_maintenancerequest_partial_update.pending,
        (state, action) => {
          if (state.api.loading === "idle") {
            state.api.loading = "pending"
          }
        }
      )
      .addCase(
        api_v1_maintenancerequest_partial_update.fulfilled,
        (state, action) => {
          if (state.api.loading === "pending") {
            state.entities = state.entities.map(record =>
              record.id === action.payload.id ? action.payload : record
            )
            state.api.loading = "idle"
          }
        }
      )
      .addCase(
        api_v1_maintenancerequest_partial_update.rejected,
        (state, action) => {
          if (state.api.loading === "pending") {
            state.api.error = action.error
            state.api.loading = "idle"
          }
        }
      )
      .addCase(api_v1_maintenancerequest_destroy.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_maintenancerequest_destroy.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.filter(
            record => record.id !== action.meta.arg?.id
          )
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_maintenancerequest_destroy.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
  }
})
export default {
  api_v1_maintenancerequest_list,
  api_v1_maintenancerequest_create,
  api_v1_maintenancerequest_retrieve,
  api_v1_maintenancerequest_update,
  api_v1_maintenancerequest_partial_update,
  api_v1_maintenancerequest_destroy,
  slice: maintenanceRequestsSlice
}
