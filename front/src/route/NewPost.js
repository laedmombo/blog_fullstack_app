import { Formik, Form, ErrorMessage, useField } from 'formik'
import * as yup from 'yup'
import { useNavigate } from 'react-router-dom'

function NewPost(){

    const navigate = useNavigate()
    const inputSchema = yup.object({
        category: yup
            .string()
            .matches(/^[a-zA-Z0-9]+$/, 'Must not include symbols')
            .max(15, 'category must be 15 characters or less')
            .required('category required'),
        
        autho: yup
            .string()
            .matches(/^[a-zA-Z0-9]+$/, 'Must not include symbols')
            .max(25, 'author must be 25 characters or less')
            .required('autho required'),

        content: yup
            .string()
            .matches(/^[a-zA-Z0-9]+$/, 'Must not include symbols')
            .max(255, 'content must be 255 characters or less')
            .required('content required'),
    })

    const MyField = (props) => {
        const [field, meta] = useField(props)

        return(
            <div>
                <input 
                    className='inp'
                    {...props}
                    {...field}
                />
                <br />
                <ErrorMessage name={field.name}/>
            </div>
        )
    }

    return (
        <div>
            <h1> Add new post</h1>
            <Formik
                initialValues={{
                    category: '',
                    author: '',
                    content: ''
                }}

                validationSchema= {inputSchema}

                onSubmit={values => {
                    fetch('http://localhost:8080/api', {
                        method: "POST",
                        headers:{
                            'Accept': 'application/json',
                            'content-type': 'application/json'
                        },
                        body: JSON.stringify(values)
                    })
                    .then(() => {
                        localStorage.setItem('token', "dumbvalue")
                        navigate('/')
                    })
                    .catch(() => {
                        console.log("error")
                        localStorage.removeItem('token')
                    })
                }}
            >
                <Form>
                    <label htmlFor='category'>category: </label>
                    <MyField 
                        type='category'
                        id='category'
                        name='category'
                        placeholder='category'
                    />

                    <label htmlFor='author'>author: </label>
                    <MyField 
                        type='author'
                        id='author'
                        name='author'
                        placeholder='author name'
                    />

                    <label htmlFor='content'>content: </label>
                    <MyField 
                        type='content'
                        id='content'
                        name='content'
                        placeholder='type your content here'
                    />
                    <br />
                    <button type='submit' className='butt'>Post</button>
                </Form>
            </Formik>
        </div>
    )
}

export default NewPost