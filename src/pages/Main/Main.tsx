import { useEffect } from "react"
import { useAppDispatch, useAppSelector } from "../../hooks/hooksState"
import { PostsFeed } from "../../lib/PostsFeed"
import { Skeleton } from "antd"
import { getFeedPosts } from "../../store/feed/feedActions"
import { increment, decrement } from "../../store/feed/feedSlice"

function Main() {
  const dispatch = useAppDispatch()
  const { posts, page } = useAppSelector((state) => state.feed)


  useEffect(() => {
    dispatch(getFeedPosts(page))
  }, [page])

  console.log("Render main");

  return (
    <div>
      <div className="btns">
        <button onClick={() => dispatch(decrement())}>{"<"}</button>
        {page}
        <button onClick={() => dispatch(increment())}>{">"}</button>
      </div>
      <PostsFeed posts={posts} />
    </div>
  )
}

export default Main