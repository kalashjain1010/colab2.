import React from 'react'
import { Avatar as ChakraAvatar} from "@chakra-ui/react";
import { Link } from 'react-router-dom';
import { PROTECTED } from 'lib/routes';

function Avatar({user}) {
  return (
    <ChakraAvatar 
        as={Link}
        to={`${PROTECTED}/profile/${user.id}`}
        name={user.username}
        size={"xl"}
        src={user.avatar}
        _hover={{cursor: "pointer", opacity: "0.8"}}
    />
  )
}

export default Avatar
