import { Button, Text } from "@chakra-ui/react";

interface RemoveButtonProps {
  onRemove: (e: React.MouseEvent) => void;
}

const RemoveButton = ({ onRemove }: RemoveButtonProps) => {

    return (
      <Button
          variant='solid'
          borderColor='red'
          width="100%"
          onClick={onRemove}>
        <Text fontSize="xl" fontWeight='medium' color='red'>Remove</Text>
      </Button>
  )
}

export default RemoveButton;
