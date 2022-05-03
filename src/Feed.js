import React from 'react';
import './Feed.css';
import MessageSender from './MessageSender';
import Post from './Post';
import StoryReel from './StoryReel';

function Feed() {
  return (
    <div className="feed">
      <StoryReel />
      {/* StoryReel*/}

      <MessageSender />
      {/* MessageSender*/}

      <Post
        profilePic="https://media-exp1.licdn.com/dms/image/C5603AQEcSTENhjBzKg/profile-displayphoto-shrink_400_400/0/1648283285853?e=1655337600&v=beta&t=3cyNZzdPum6xgssarsgKgWCP180gr-TJwVHiGcid29k"
        message="WOW this works!!"
        timestamp="This is a timestamp"
        username="iharsh_27"
        image="https://static.toiimg.com/photo/msid-84144219.cms"
      />

      <Post
        profilePic="https://media-exp1.licdn.com/dms/image/C5603AQEcSTENhjBzKg/profile-displayphoto-shrink_400_400/0/1648283285853?e=1655337600&v=beta&t=3cyNZzdPum6xgssarsgKgWCP180gr-TJwVHiGcid29k"
        message="WOW this works!!"
        timestamp="This is a timestamp"
        username="iharsh_27"
      />
    </div>
  );
}

export default Feed;