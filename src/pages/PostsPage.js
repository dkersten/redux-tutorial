import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchPosts } from '../actions/postsActions'

const PostsPage = ({dispatch, loading, posts, hasErrors}) => {
    useEffect(() => {
        dispatch(fetchPosts())
    }, [dispatch])

    return(
        <section>
            <h1>Posts</h1>
        </section>
    )
}

const mapStateToProps = (state) => ({
    loading: state.posts.loading,
    posts: state.posts.posts,
    hasErrors: state.posts.hasErrors,
})

export default connect(mapStateToProps)(PostsPage)