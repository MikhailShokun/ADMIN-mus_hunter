import React from 'react'
import {Create, SimpleForm, TextInput, DateInput} from 'react-admin'

const CreatePost = (props) => {
    return (
        <Create title='Create a Post' {...props}>
            <SimpleForm>
                <TextInput source='title'/>
                <TextInput multiline source='body'/>
                <TextInput source='author'/>
                <DateInput label='Published' source='publishedAt'/>
            </SimpleForm>
        </Create>
    )
}

export default CreatePost;