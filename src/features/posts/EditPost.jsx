import React from 'react'
import { Edit, SimpleForm, TextInput, DateInput } from 'react-admin'

const EditPost = (props) => {
    return (
        <Edit title='Edit Post' {...props}>
            <SimpleForm>
                <TextInput disabled source='id' />
                <TextInput source='title' />
                <TextInput multiline source='body' />
                <TextInput source='author' />
                <DateInput label='Published' source='publishedAt' />
            </SimpleForm>
        </Edit>
    )
}

export default EditPost