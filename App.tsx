import React from 'react';
import { View, Text, Image } from 'react-native';
import { PostsData, UsersData } from './data';

const Post = ({
  title,
  content,
  author,
  avatar,
  createdAt,
}: {
  title: string;
  content: string;
  author: string;
  avatar: string;
  createdAt: string;
}) => {
  return (
    <View
      style={{
        borderColor: 'black',
        borderWidth: 1,
        padding: 10,
        margin: 10,
        backgroundColor: 'white',
      }}
    >
      <Text
        style={{
          fontSize: 20,
          marginBottom: 10,
        }}
      >{title}</Text>
      <Text
        style={{
          fontSize: 14,
          marginBottom: 10,
        }}
      >{content}</Text>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}
        >
          <Image
            style={{
              width: 20,
              height: 20,
              borderRadius: 10,
              marginRight: 5,
            }}
            source={{ uri: avatar }}
          />
          <Text
            style={{
              fontSize: 12,
            }}
          >{author}</Text>
        </View>
        <Text
          style={{
            fontSize: 12,
          }}
        >{createdAt}</Text>
      </View>
    </View>
  )
}

function App() {
  return (
    <View style={{
      flex: 1,
      justifyContent: 'center',
      padding: 10,
      backgroundColor: "#f0f0f0",
    }}>
      <Text style={{
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
      }}>News Feed</Text>
      <Post
        title={PostsData[0].title}
        content={PostsData[0].content}
        author={UsersData[0].name}
        avatar={UsersData[0].avatar_url}
        createdAt={PostsData[0].created_at.toString()}
      />
      <Post
        title={PostsData[1].title}
        content={PostsData[1].content}
        author={UsersData[1].name}
        avatar={UsersData[1].avatar_url}
        createdAt={PostsData[1].created_at.toString()}
      />
      <Post
        title={PostsData[2].title}
        content={PostsData[2].content}
        author={UsersData[2].name}
        avatar={UsersData[2].avatar_url}
        createdAt={PostsData[2].created_at.toString()}
      />
      <Post
        title={PostsData[3].title}
        content={PostsData[3].content}
        author={UsersData[3].name}
        avatar={UsersData[3].avatar_url}
        createdAt={PostsData[3].created_at.toString()}
      />
      <Post
        title={PostsData[4].title}
        content={PostsData[4].content}
        author={UsersData[4].name}
        avatar={UsersData[4].avatar_url}
        createdAt={PostsData[4].created_at.toString()}
      />
    </View>
  );
}


export default App;
