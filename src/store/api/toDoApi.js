import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
const toDoURL = 'http://dummyjson.com/'

export const toDoAPI = createApi({
    reducerPath: 'toDoAPI',
    baseQuery: fetchBaseQuery({baseUrl: toDoURL}),
    endpoints: (builder) =>({
        getToDo: builder.query({
            query: () => 'todos?_limit=10'
        }),
        addToDo: builder.mutation({
            query: (body) =>({
                url: 'todo/add',
                method: 'POST',
                body
            })
        })
    })
})

export const { useGetToDoQuery, useAddToDoMutation  } = toDoAPI