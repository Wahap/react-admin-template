import React, { useState } from 'react'
import axios from 'axios'
import { CButton, CCol, CForm, CFormInput, CFormFeedback, CFormLabel } from '@coreui/react'

const baseURL = 'https://cps-azure-func.azurewebsites.net/api/addAddress'

const Dashboard = () => {
  const [validated, setValidated] = useState(false)
  const [address1, setAddress1] = useState('default')
  const [address2, setAddress2] = useState('default')
  const [postcode, setPostCode] = useState('default')

  const handleSubmit = (event) => {
    const form = event.currentTarget
    if (form.checkValidity() === false) {
      event.preventDefault()
      event.stopPropagation()
    }
    setValidated(true)

    const address = { address1: address1, address2: address2, postcode: postcode }
    axios.post(baseURL, address)
  }
  return (
    <CForm className="row g-3 needs-validation" validated={validated} onSubmit={handleSubmit}>
      <CCol md={4}>
        <CFormLabel htmlFor="address1">Address1</CFormLabel>
        <CFormInput
          type="text"
          id="address1"
          required
          onChange={(e) => {
            setAddress1(e.target.value)
          }}
        />
        <CFormFeedback invalid>Please provide a valid Address1.</CFormFeedback>
      </CCol>
      <CCol md={4}>
        <CFormLabel htmlFor="address2">Address2</CFormLabel>
        <CFormInput
          type="text"
          id="address2"
          required
          onChange={(e) => {
            setAddress2(e.target.value)
          }}
        />
        <CFormFeedback invalid>Please provide a valid Address2.</CFormFeedback>
      </CCol>
      <CCol md={4}>
        <CFormLabel htmlFor="postcode">Post Code</CFormLabel>
        <CFormInput
          type="text"
          id="postcode"
          required
          onChange={(e) => {
            setPostCode(e.target.value)
          }}
        />
        <CFormFeedback invalid>Please provide a valid Post Code.</CFormFeedback>
      </CCol>
      <CCol xs={12}>
        <CButton color="primary" type="submit">
          Submit form
        </CButton>
      </CCol>
    </CForm>
  )
}

export default Dashboard
