import { useEffect } from "react";
import { useParams } from "react-router-dom"
import { useAppDispatch, useAppSelector } from "../../hooks/hooksState";
import "./Profile.scss"
import { getUserProfile } from "../../store/blog/blogActions";
import { ProfileUserCard } from "./ProfileUserCard";
import { PostsFeed } from "../../lib/PostsFeed";
import { ProfileSubs } from "./ProfileSubs";
function Profile() {
  console.log("Render Profile")

  const { profileId } = useParams();
  const dispatch = useAppDispatch();
  const { profileUser, posts, subs } = useAppSelector((state) => state.blog);

  useEffect(() => {
    document.title = profileId!;
    dispatch(getUserProfile(profileId!));
    
  }, [profileId])

  return (
    <div className="profile">
      <ProfileUserCard profileUser={profileUser} />
      <PostsFeed posts={posts} />
      <ProfileSubs profileUser={profileUser} subs={subs} />
    </div>
  )
}

export default Profile