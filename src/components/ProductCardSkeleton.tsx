import { Card } from "@chakra-ui/react"
import { Skeleton, SkeletonText } from "./ui/skeleton"


const ProductCardSkeleton = () => {
  return (
    <Card.Root
    borderRadius="lg"
    borderColor='gray.100'
    bg="white"
    boxShadow="sm"
    p="4"
    gap={9}
    marginX={5}
    >
        <Skeleton height={{sm : '474px', md: '337px', lg: '268px', xl: '276px'}}/>
      <Card.Body textAlign="center" padding="4">
        <SkeletonText/>
      </Card.Body>
    </Card.Root>
  )
}

export default ProductCardSkeleton
