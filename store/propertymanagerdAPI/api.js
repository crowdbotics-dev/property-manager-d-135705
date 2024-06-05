import axios from "axios"
const propertymanagerdAPI = axios.create({
  baseURL: "https://property-manager-d-135705.botics.co",
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
function api_docs_schema_retrieve(payload) {
  return propertymanagerdAPI.get(`/api-docs/schema/`, {
    params: { lang: payload.lang }
  })
}
function api_v1_accounting_list(payload) {
  return propertymanagerdAPI.get(`/api/v1/accounting/`)
}
function api_v1_accounting_create(payload) {
  return propertymanagerdAPI.post(`/api/v1/accounting/`, payload)
}
function api_v1_accounting_retrieve(payload) {
  return propertymanagerdAPI.get(`/api/v1/accounting/${payload.id}/`)
}
function api_v1_accounting_update(payload) {
  return propertymanagerdAPI.put(`/api/v1/accounting/${payload.id}/`, payload)
}
function api_v1_accounting_partial_update(payload) {
  return propertymanagerdAPI.patch(`/api/v1/accounting/${payload.id}/`, payload)
}
function api_v1_accounting_destroy(payload) {
  return propertymanagerdAPI.delete(`/api/v1/accounting/${payload.id}/`)
}
function api_v1_budget_list(payload) {
  return propertymanagerdAPI.get(`/api/v1/budget/`)
}
function api_v1_budget_create(payload) {
  return propertymanagerdAPI.post(`/api/v1/budget/`, payload)
}
function api_v1_budget_retrieve(payload) {
  return propertymanagerdAPI.get(`/api/v1/budget/${payload.id}/`)
}
function api_v1_budget_update(payload) {
  return propertymanagerdAPI.put(`/api/v1/budget/${payload.id}/`, payload)
}
function api_v1_budget_partial_update(payload) {
  return propertymanagerdAPI.patch(`/api/v1/budget/${payload.id}/`, payload)
}
function api_v1_budget_destroy(payload) {
  return propertymanagerdAPI.delete(`/api/v1/budget/${payload.id}/`)
}
function api_v1_document_list(payload) {
  return propertymanagerdAPI.get(`/api/v1/document/`)
}
function api_v1_document_create(payload) {
  return propertymanagerdAPI.post(`/api/v1/document/`, payload)
}
function api_v1_document_retrieve(payload) {
  return propertymanagerdAPI.get(`/api/v1/document/${payload.id}/`)
}
function api_v1_document_update(payload) {
  return propertymanagerdAPI.put(`/api/v1/document/${payload.id}/`, payload)
}
function api_v1_document_partial_update(payload) {
  return propertymanagerdAPI.patch(`/api/v1/document/${payload.id}/`, payload)
}
function api_v1_document_destroy(payload) {
  return propertymanagerdAPI.delete(`/api/v1/document/${payload.id}/`)
}
function api_v1_expense_list(payload) {
  return propertymanagerdAPI.get(`/api/v1/expense/`)
}
function api_v1_expense_create(payload) {
  return propertymanagerdAPI.post(`/api/v1/expense/`, payload)
}
function api_v1_expense_retrieve(payload) {
  return propertymanagerdAPI.get(`/api/v1/expense/${payload.id}/`)
}
function api_v1_expense_update(payload) {
  return propertymanagerdAPI.put(`/api/v1/expense/${payload.id}/`, payload)
}
function api_v1_expense_partial_update(payload) {
  return propertymanagerdAPI.patch(`/api/v1/expense/${payload.id}/`, payload)
}
function api_v1_expense_destroy(payload) {
  return propertymanagerdAPI.delete(`/api/v1/expense/${payload.id}/`)
}
function api_v1_inspection_list(payload) {
  return propertymanagerdAPI.get(`/api/v1/inspection/`)
}
function api_v1_inspection_create(payload) {
  return propertymanagerdAPI.post(`/api/v1/inspection/`, payload)
}
function api_v1_inspection_retrieve(payload) {
  return propertymanagerdAPI.get(`/api/v1/inspection/${payload.id}/`)
}
function api_v1_inspection_update(payload) {
  return propertymanagerdAPI.put(`/api/v1/inspection/${payload.id}/`, payload)
}
function api_v1_inspection_partial_update(payload) {
  return propertymanagerdAPI.patch(`/api/v1/inspection/${payload.id}/`, payload)
}
function api_v1_inspection_destroy(payload) {
  return propertymanagerdAPI.delete(`/api/v1/inspection/${payload.id}/`)
}
function api_v1_lease_list(payload) {
  return propertymanagerdAPI.get(`/api/v1/lease/`)
}
function api_v1_lease_create(payload) {
  return propertymanagerdAPI.post(`/api/v1/lease/`, payload)
}
function api_v1_lease_retrieve(payload) {
  return propertymanagerdAPI.get(`/api/v1/lease/${payload.id}/`)
}
function api_v1_lease_update(payload) {
  return propertymanagerdAPI.put(`/api/v1/lease/${payload.id}/`, payload)
}
function api_v1_lease_partial_update(payload) {
  return propertymanagerdAPI.patch(`/api/v1/lease/${payload.id}/`, payload)
}
function api_v1_lease_destroy(payload) {
  return propertymanagerdAPI.delete(`/api/v1/lease/${payload.id}/`)
}
function api_v1_login_create(payload) {
  return propertymanagerdAPI.post(`/api/v1/login/`, payload)
}
function api_v1_maintenancerequest_list(payload) {
  return propertymanagerdAPI.get(`/api/v1/maintenancerequest/`)
}
function api_v1_maintenancerequest_create(payload) {
  return propertymanagerdAPI.post(`/api/v1/maintenancerequest/`, payload)
}
function api_v1_maintenancerequest_retrieve(payload) {
  return propertymanagerdAPI.get(`/api/v1/maintenancerequest/${payload.id}/`)
}
function api_v1_maintenancerequest_update(payload) {
  return propertymanagerdAPI.put(
    `/api/v1/maintenancerequest/${payload.id}/`,
    payload
  )
}
function api_v1_maintenancerequest_partial_update(payload) {
  return propertymanagerdAPI.patch(
    `/api/v1/maintenancerequest/${payload.id}/`,
    payload
  )
}
function api_v1_maintenancerequest_destroy(payload) {
  return propertymanagerdAPI.delete(`/api/v1/maintenancerequest/${payload.id}/`)
}
function api_v1_property_list(payload) {
  return propertymanagerdAPI.get(`/api/v1/property/`)
}
function api_v1_property_create(payload) {
  return propertymanagerdAPI.post(`/api/v1/property/`, payload)
}
function api_v1_property_retrieve(payload) {
  return propertymanagerdAPI.get(`/api/v1/property/${payload.id}/`)
}
function api_v1_property_update(payload) {
  return propertymanagerdAPI.put(`/api/v1/property/${payload.id}/`, payload)
}
function api_v1_property_partial_update(payload) {
  return propertymanagerdAPI.patch(`/api/v1/property/${payload.id}/`, payload)
}
function api_v1_property_destroy(payload) {
  return propertymanagerdAPI.delete(`/api/v1/property/${payload.id}/`)
}
function api_v1_revenue_list(payload) {
  return propertymanagerdAPI.get(`/api/v1/revenue/`)
}
function api_v1_revenue_create(payload) {
  return propertymanagerdAPI.post(`/api/v1/revenue/`, payload)
}
function api_v1_revenue_retrieve(payload) {
  return propertymanagerdAPI.get(`/api/v1/revenue/${payload.id}/`)
}
function api_v1_revenue_update(payload) {
  return propertymanagerdAPI.put(`/api/v1/revenue/${payload.id}/`, payload)
}
function api_v1_revenue_partial_update(payload) {
  return propertymanagerdAPI.patch(`/api/v1/revenue/${payload.id}/`, payload)
}
function api_v1_revenue_destroy(payload) {
  return propertymanagerdAPI.delete(`/api/v1/revenue/${payload.id}/`)
}
function api_v1_signup_create(payload) {
  return propertymanagerdAPI.post(`/api/v1/signup/`, payload)
}
function api_v1_tenant_list(payload) {
  return propertymanagerdAPI.get(`/api/v1/tenant/`)
}
function api_v1_tenant_create(payload) {
  return propertymanagerdAPI.post(`/api/v1/tenant/`, payload)
}
function api_v1_tenant_retrieve(payload) {
  return propertymanagerdAPI.get(`/api/v1/tenant/${payload.id}/`)
}
function api_v1_tenant_update(payload) {
  return propertymanagerdAPI.put(`/api/v1/tenant/${payload.id}/`, payload)
}
function api_v1_tenant_partial_update(payload) {
  return propertymanagerdAPI.patch(`/api/v1/tenant/${payload.id}/`, payload)
}
function api_v1_tenant_destroy(payload) {
  return propertymanagerdAPI.delete(`/api/v1/tenant/${payload.id}/`)
}
function api_v1_user_list(payload) {
  return propertymanagerdAPI.get(`/api/v1/user/`)
}
function api_v1_user_create(payload) {
  return propertymanagerdAPI.post(`/api/v1/user/`, payload)
}
function api_v1_user_retrieve(payload) {
  return propertymanagerdAPI.get(`/api/v1/user/${payload.id}/`)
}
function api_v1_user_update(payload) {
  return propertymanagerdAPI.put(`/api/v1/user/${payload.id}/`, payload)
}
function api_v1_user_partial_update(payload) {
  return propertymanagerdAPI.patch(`/api/v1/user/${payload.id}/`, payload)
}
function api_v1_user_destroy(payload) {
  return propertymanagerdAPI.delete(`/api/v1/user/${payload.id}/`)
}
function api_v1_vendor_list(payload) {
  return propertymanagerdAPI.get(`/api/v1/vendor/`)
}
function api_v1_vendor_create(payload) {
  return propertymanagerdAPI.post(`/api/v1/vendor/`, payload)
}
function api_v1_vendor_retrieve(payload) {
  return propertymanagerdAPI.get(`/api/v1/vendor/${payload.id}/`)
}
function api_v1_vendor_update(payload) {
  return propertymanagerdAPI.put(`/api/v1/vendor/${payload.id}/`, payload)
}
function api_v1_vendor_partial_update(payload) {
  return propertymanagerdAPI.patch(`/api/v1/vendor/${payload.id}/`, payload)
}
function api_v1_vendor_destroy(payload) {
  return propertymanagerdAPI.delete(`/api/v1/vendor/${payload.id}/`)
}
function rest_auth_login_create(payload) {
  return propertymanagerdAPI.post(`/rest-auth/login/`, payload)
}
function rest_auth_logout_create(payload) {
  return propertymanagerdAPI.post(`/rest-auth/logout/`)
}
function rest_auth_password_change_create(payload) {
  return propertymanagerdAPI.post(`/rest-auth/password/change/`, payload)
}
function rest_auth_password_reset_create(payload) {
  return propertymanagerdAPI.post(`/rest-auth/password/reset/`, payload)
}
function rest_auth_password_reset_confirm_create(payload) {
  return propertymanagerdAPI.post(`/rest-auth/password/reset/confirm/`, payload)
}
function rest_auth_registration_create(payload) {
  return propertymanagerdAPI.post(`/rest-auth/registration/`, payload)
}
function rest_auth_registration_resend_email_create(payload) {
  return propertymanagerdAPI.post(
    `/rest-auth/registration/resend-email/`,
    payload
  )
}
function rest_auth_registration_verify_email_create(payload) {
  return propertymanagerdAPI.post(
    `/rest-auth/registration/verify-email/`,
    payload
  )
}
function rest_auth_user_retrieve(payload) {
  return propertymanagerdAPI.get(`/rest-auth/user/`)
}
function rest_auth_user_update(payload) {
  return propertymanagerdAPI.put(`/rest-auth/user/`, payload)
}
function rest_auth_user_partial_update(payload) {
  return propertymanagerdAPI.patch(`/rest-auth/user/`, payload)
}
export const apiService = {
  api_docs_schema_retrieve,
  api_v1_accounting_list,
  api_v1_accounting_create,
  api_v1_accounting_retrieve,
  api_v1_accounting_update,
  api_v1_accounting_partial_update,
  api_v1_accounting_destroy,
  api_v1_budget_list,
  api_v1_budget_create,
  api_v1_budget_retrieve,
  api_v1_budget_update,
  api_v1_budget_partial_update,
  api_v1_budget_destroy,
  api_v1_document_list,
  api_v1_document_create,
  api_v1_document_retrieve,
  api_v1_document_update,
  api_v1_document_partial_update,
  api_v1_document_destroy,
  api_v1_expense_list,
  api_v1_expense_create,
  api_v1_expense_retrieve,
  api_v1_expense_update,
  api_v1_expense_partial_update,
  api_v1_expense_destroy,
  api_v1_inspection_list,
  api_v1_inspection_create,
  api_v1_inspection_retrieve,
  api_v1_inspection_update,
  api_v1_inspection_partial_update,
  api_v1_inspection_destroy,
  api_v1_lease_list,
  api_v1_lease_create,
  api_v1_lease_retrieve,
  api_v1_lease_update,
  api_v1_lease_partial_update,
  api_v1_lease_destroy,
  api_v1_login_create,
  api_v1_maintenancerequest_list,
  api_v1_maintenancerequest_create,
  api_v1_maintenancerequest_retrieve,
  api_v1_maintenancerequest_update,
  api_v1_maintenancerequest_partial_update,
  api_v1_maintenancerequest_destroy,
  api_v1_property_list,
  api_v1_property_create,
  api_v1_property_retrieve,
  api_v1_property_update,
  api_v1_property_partial_update,
  api_v1_property_destroy,
  api_v1_revenue_list,
  api_v1_revenue_create,
  api_v1_revenue_retrieve,
  api_v1_revenue_update,
  api_v1_revenue_partial_update,
  api_v1_revenue_destroy,
  api_v1_signup_create,
  api_v1_tenant_list,
  api_v1_tenant_create,
  api_v1_tenant_retrieve,
  api_v1_tenant_update,
  api_v1_tenant_partial_update,
  api_v1_tenant_destroy,
  api_v1_user_list,
  api_v1_user_create,
  api_v1_user_retrieve,
  api_v1_user_update,
  api_v1_user_partial_update,
  api_v1_user_destroy,
  api_v1_vendor_list,
  api_v1_vendor_create,
  api_v1_vendor_retrieve,
  api_v1_vendor_update,
  api_v1_vendor_partial_update,
  api_v1_vendor_destroy,
  rest_auth_login_create,
  rest_auth_logout_create,
  rest_auth_password_change_create,
  rest_auth_password_reset_create,
  rest_auth_password_reset_confirm_create,
  rest_auth_registration_create,
  rest_auth_registration_resend_email_create,
  rest_auth_registration_verify_email_create,
  rest_auth_user_retrieve,
  rest_auth_user_update,
  rest_auth_user_partial_update
}
