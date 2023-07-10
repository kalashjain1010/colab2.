import { Box } from "@chakra-ui/react";
import Post from "components/post";
import { usePost } from "hooks/posts";
import React from "react";
import { useParams } from "react-router-dom";
import NewComment from "./NewComment";

function Comments() {
  const {id} = useParams();
  const {post,isLoading}= usePost(id);

  if(isLoading) return ".........loading"
  return (
    <>
    <Box align="center" pt={50}>
      <Post post={post} />
      <NewComment post={post} />
    </Box>
    </>
  )
}

export default Comments;
