import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { candidateInformation } from '../data';

//handling state of the form inputs
function CandidateInput() {
    const [form, setForm] = useState({})
    const [errors, setErrors] = useState({})
    const setField = (field, value) => {
        setForm({
            ...form, 
            [field]:value
        })
        if (!!errors[field])
        setErrors({
            ...errors, 
            [field]: null
        })
    }
//form validation in order to verify empty forms are not submitted
    const validateForm = () => {
        const { firstName, lastName, address, phoneNumber, email, zipCode } = form
        const newErrors = {}

        if(!firstName || firstName === '') newErrors.firstName = 'Please enter your first name'
        if(!lastName || lastName === '') newErrors.lastName = 'Please enter your last name'
        if(!address || address === '') newErrors.address = 'Please enter your address'
        if(!phoneNumber || phoneNumber === '' || phoneNumber.length != 10) newErrors.phoneNumber = 'Please enter your 10 digit phone number'
        if(!email || email === '' ) newErrors.email = 'Please enter your correct email'
        if(!zipCode || zipCode === '' || zipCode.length != 5) newErrors.zipCode = 'Please enter your correct 5 digit ZipCode'
        
        return newErrors
    }

//preventing page refresh, form validation and pushing the verified form information to the pre-populated data in data.js
    const handleSubmit = e => {
        e.preventDefault()

        const formErrors = validateForm()
        if (Object.keys(formErrors).length > 0){
            setErrors(formErrors)
        }
        else {
            console.log('form submitted')
            candidateInformation.push(form)
            alert("Candidate information successfully added!")
        }
    }

//form layout and onchange functions to store changes made
    return (
        <div>
            <div className='m-5'>
                <Form >
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridFirstName">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control type="FirstName" placeholder="First Name" 
                        value = {form.firstName}
                        onChange={ (e)=> setField('firstName', e.target.value) } 
                        isInvalid={!!errors.firstName}
                    />
                    <Form.Control.Feedback type='invalid'>
                        {errors.firstName}
                    </Form.Control.Feedback>
                    </Form.Group>
            
                    <Form.Group as={Col} controlId="formGridLastName">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control type="LastName" placeholder="Last Name"
                        value = {form.lastName}
                        onChange={ (e)=> setField('lastName', e.target.value) } 
                        isInvalid={!!errors.lastName}
                    />
                    <Form.Control.Feedback type='invalid'>
                        {errors.lastName}
                    </Form.Control.Feedback>
                    </Form.Group>
                </Row>
            
                <Form.Group className="mb-3" controlId="formGridAddress1">
                    <Form.Label>Address</Form.Label>
                    <Form.Control placeholder="1234 Main St" 
                        value = {form.address}
                        onChange={ (e)=> setField('address', e.target.value) } 
                        isInvalid={!!errors.address}
                    />
                    <Form.Control.Feedback type='invalid'>
                        {errors.address}
                    </Form.Control.Feedback>
                </Form.Group>
            
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridPhoneNumber">
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control placeholder="1234567890"
                        value = {form.phoneNumber}
                        onChange={ (e)=> setField('phoneNumber', e.target.value) } 
                        isInvalid={!!errors.phoneNumber}
                    />
                    <Form.Control.Feedback type='invalid'>
                        {errors.phoneNumber}
                    </Form.Control.Feedback>
                    </Form.Group>
            
                    <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        placeholder="example@gmail.com"
                        value = {form.email}
                        onChange={ (e)=> setField('email', e.target.value) } 
                        isInvalid={!!errors.email}/>
                    <Form.Control.Feedback type='invalid'>
                        {errors.email}
                    </Form.Control.Feedback>
                    </Form.Group>
            
                    <Form.Group as={Col} controlId="formGridZip">
                    <Form.Label>Zip</Form.Label>
                    <Form.Control 
                        placeholder="77581"
                        value = {form.zipCode}
                        onChange={ (e)=> setField('zipCode', e.target.value) } 
                        isInvalid={!!errors.zipCode}
                    />
                    <Form.Control.Feedback type='invalid'>
                        {errors.zipCode}
                    </Form.Control.Feedback>
                    </Form.Group>
                </Row>
            
                    <Button variant="primary" type="submit" onClick={handleSubmit}>
                        Submit
                    </Button>
                </Form>
            </div>
        </div>
      );
    
}

export default CandidateInput;