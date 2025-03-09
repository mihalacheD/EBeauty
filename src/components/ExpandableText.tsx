import { Text } from "@chakra-ui/react";


interface Props {
  children: string
}

const ExpandableText = ({children}: Props) => {

  const limit = 15;

  if(!children) return null;

  const truncatedText = children.length > limit ? children.substring(0, limit) + '...' : children;

 return(
  <Text
      fontSize={["xl", "2xl", "3xl"]} // Ajustează fontul pentru ecrane mici, medii și mari
      fontFamily="'Poppins', cursive"
      fontWeight="normal"
      color="gray.600"
      textAlign="center">
        {truncatedText}
   </Text>
 )
}

export default ExpandableText;
