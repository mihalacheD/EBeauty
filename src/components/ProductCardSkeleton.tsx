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
        <Skeleton height={{sm : '506px', md: '414px', lg: '340px', xl: '447px'}}/>
      <Card.Body textAlign="center" padding="4">
        <SkeletonText/>
      </Card.Body>
    </Card.Root>
  )
}

export default ProductCardSkeleton
