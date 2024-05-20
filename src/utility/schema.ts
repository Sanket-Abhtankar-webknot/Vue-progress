import { array, object, string } from 'yup'

export const pdSchema = object({
  name: string().min(1, 'Name is required').required(),
  email: string().email('Enter valid Email').required(),
  phoneNumber: string().required('Phone number is required')
})

export const spSchema = object({
  plan: string().required('Please select Plan'),
  duration: string().required()
})

export const aSchema = object({
  addons: array().required('Please select addon')
})
