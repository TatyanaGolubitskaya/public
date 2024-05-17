import { Card, Divider, Badge, Avatar } from 'antd'
import { getPostComments } from '../store/blog/blogActions'
import { useAppDispatch } from '../hooks/hooksState';
import { postType } from '../store/blog/blogTypes';
import { memo } from 'react';

export const PostsFeed = memo(({posts}: {posts: postType[]}) => {
    console.log("Render PostsFeed");
    const dispatch = useAppDispatch();

    return (
        <div className="profile-posts">
            {posts.map((post) => {
                return <Card
                    className="profile-posts-post"
                    key={post.id}
                    title={post.title}
                    extra={<a href="#">More</a>}
                    cover={<img alt="example" src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" />}
                >
                    <p>{post.body}</p>
                    <Divider />
                    {post.tags.map((tag) => {
                        return <><Badge key={tag} count={tag} color='#faad14' />  </>
                    })}
                    <p>
                        👍 {post.reactions}
                        <span className="comments-icon" onClick={() => dispatch(getPostComments(post.id))}>
                            💬
                        </span>
                    </p>
                    <hr />
                    <div className="profile-comments" >
                        
                        {post.comments?.map((comment) => {
                            
                            return <div className="comment" key={comment.id}>
                                    <p>
                                        <Avatar src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png" />
                                        {comment.user.username}</p>
                                    <p className="comment-body">{comment.body}</p>
                                </div>
                        })}
                    </div>
                </Card>
            })}
        </div>
    )
}
)