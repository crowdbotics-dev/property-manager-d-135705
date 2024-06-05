import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const api_v1_tenant_list = createAsyncThunk(
  "tenants/api_v1_tenant_list",
  async payload => {
    const response = await apiService.api_v1_tenant_list(payload)
    return response.data
  }
)
export const api_v1_tenant_create = createAsyncThunk(
  "tenants/api_v1_tenant_create",
  async payload => {
    const response = await apiService.api_v1_tenant_create(payload)
    return response.data
  }
)
export const api_v1_tenant_retrieve = createAsyncThunk(
  "tenants/api_v1_tenant_retrieve",
  async payload => {
    const response = await apiService.api_v1_tenant_retrieve(payload)
    return response.data
  }
)
export const api_v1_tenant_update = createAsyncThunk(
  "tenants/api_v1_tenant_update",
  async payload => {
    const response = await apiService.api_v1_tenant_update(payload)
    return response.data
  }
)
export const api_v1_tenant_partial_update = createAsyncThunk(
  "tenants/api_v1_tenant_partial_update",
  async payload => {
    const response = await apiService.api_v1_tenant_partial_update(payload)
    return response.data
  }
)
export const api_v1_tenant_destroy = createAsyncThunk(
  "tenants/api_v1_tenant_destroy",
  async payload => {
    const response = await apiService.api_v1_tenant_destroy(payload)
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const tenantsSlice = createSlice({
  name: "tenants",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(api_v1_tenant_list.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_tenant_list.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = action.payload
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_tenant_list.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_tenant_create.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_tenant_create.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities.push(action.payload)
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_tenant_create.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_tenant_retrieve.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_tenant_retrieve.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = [
            ...state.entities.filter(record => record.id !== action.payload.id),
            action.payload
          ]
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_tenant_retrieve.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_tenant_update.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_tenant_update.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.map(record =>
            record.id === action.payload.id ? action.payload : record
          )
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_tenant_update.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_tenant_partial_update.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_tenant_partial_update.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.map(record =>
            record.id === action.payload.id ? action.payload : record
          )
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_tenant_partial_update.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_tenant_destroy.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_tenant_destroy.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.filter(
            record => record.id !== action.meta.arg?.id
          )
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_tenant_destroy.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
  }
})
export default {
  api_v1_tenant_list,
  api_v1_tenant_create,
  api_v1_tenant_retrieve,
  api_v1_tenant_update,
  api_v1_tenant_partial_update,
  api_v1_tenant_destroy,
  slice: tenantsSlice
}
