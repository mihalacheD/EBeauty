import { Box, Button, Container, Input, Text, VStack, Flex, NativeSelect, Dialog } from "@chakra-ui/react";
import { useForm, Controller } from "react-hook-form";
import { MdCheckCircle } from "react-icons/md";
import { useCart } from "../hooks/useCart";
import { Field } from "@chakra-ui/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

interface CheckoutFormData {
  name: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  postalCode: string;
  country: string;
  paymentMethod: string;
}

const Checkout = () => {
  const { total, clearCart } = useCart();
  const { control,register, handleSubmit, formState: { errors, isValid } } = useForm<CheckoutFormData>({ mode: "onChange" });
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const navigate = useNavigate();

  const onSubmit = (data: CheckoutFormData) => {
      console.log("Order placed:", data);
      setIsDialogOpen(true);

       // Golim coșul de cumpărături
       clearCart();

      // Redirecționăm utilizatorul către o pagină de confirmare după 2 secunde
    setTimeout(() => {
      navigate("/cart");
    }, 3000);

  };

  // Calcul Order Summary
  const shippingCost = total > 0 ? 5 : 0;
  const discount = total > 50 ? 10 : 0;
  const finalTotal = total - discount + shippingCost;

  return (
    <Container maxW="container.md" py={6}>
      <Text fontSize="2xl" fontWeight="bold" mb={4}>Checkout</Text>
      <Flex gap={6} direction={{ base: "column", md: "row" }}>
        {/* FORMULAR */}
        <Box as="form" onSubmit={handleSubmit(onSubmit)} flex="1">
          <VStack gap={4} align="stretch">
            <Field.Root>
              <Field.Label htmlFor="name">Name</Field.Label>
              <Input id="name" {...register("name", { required: "Name is required" })} placeholder="John Doe" />
              {errors.name && <Text color="red.500">{errors.name.message}</Text>}
            </Field.Root>

            <Field.Root>
              <Field.Label htmlFor="address">Address</Field.Label>
              <Input id="address" {...register("address", { required: "Address is required" })} placeholder="123 Main St" />
              {errors.address && <Text color="red.500">{errors.address.message}</Text>}
            </Field.Root>

            <Field.Root>
              <Field.Label htmlFor="phone">Phone Number</Field.Label>
              <Input type="tel" id="phone" {...register("phone", { required: "Phone number is required" })} placeholder="(123) 456-7890" />
              {errors.phone && <Text color="red.500">{errors.phone.message}</Text>}
            </Field.Root>

          {/* Payment Method */}
          <Field.Root>
            <Field.Label htmlFor="paymentMethod">Payment Method</Field.Label>
            <Controller
              name="paymentMethod"
              control={control}
              rules={{ required: "Payment method is required" }}
              render={({ field }) => (
                <NativeSelect.Root
                  id="paymentMethod"
                  {...field} // Acesta va înregistra valoarea și ref-ul pentru validare
                >
                  <NativeSelect.Field placeholder="Select payment">
                    <option value="creditCard">Credit Card</option>
                    <option value="paypal">PayPal</option>
                    <option value="bankTransfer">Bank Transfer</option>
                  </NativeSelect.Field>
                  <NativeSelect.Indicator />
                </NativeSelect.Root>
              )}
            />
            {errors.paymentMethod && <Text color="red.500">{errors.paymentMethod.message}</Text>}
          </Field.Root>

          </VStack>
        </Box>

        {/* ORDER SUMMARY */}
        <Box p={6} bg="white" boxShadow="sm" borderRadius="md" width="100%" maxW="400px">
          <Text fontSize="xl" fontWeight="bold" mb={4}>Order Summary</Text>

          <Flex justify="space-between" mb={2}>
            <Text>Subtotal:</Text>
            <Text fontWeight="bold">${total.toFixed(2)}</Text>
          </Flex>

          <Flex justify="space-between" mb={2}>
            <Text>Discount:</Text>
            <Text fontWeight="bold" color={discount > 0 ? "green.500" : "gray.500"}>- ${discount.toFixed(2)}</Text>
          </Flex>

          <Flex justify="space-between" mb={2}>
            <Text>Shipping:</Text>
            <Text fontWeight="bold">${shippingCost.toFixed(2)}</Text>
          </Flex>

          <Box borderBottom="1px solid" borderColor="gray.200" my={4} />

          <Flex justify="space-between" mb={4}>
            <Text fontSize="lg" fontWeight="bold">Total:</Text>
            <Text fontSize="lg" fontWeight="bold">${finalTotal.toFixed(2)}</Text>
          </Flex>
          <Box>
            <Button mt={6} bg='#186bd8' color='white' type="submit" width="100%" disabled={!isValid} onClick={handleSubmit(onSubmit)}>
             <Text fontSize="xl" fontWeight='medium'>Place Order</Text>
            </Button>
          </Box>
        </Box>

      </Flex>

       {/* Dialog pop up */}
       <Dialog.Root placement='center' motionPreset="slide-in-top" open={isDialogOpen} onInteractOutside={() => setIsDialogOpen(false)}>
        <Dialog.Backdrop onClick={() => setIsDialogOpen(false)} />
        <Dialog.Positioner>
        <Dialog.Content boxShadow="lg" padding={6} m={2} gap={5}>
          <Dialog.Title textAlign='center'>Order Successfully Placed!</Dialog.Title>
            {/* Animație cu check */}
            <Box display="flex" justifyContent="center" mb={4}>
            <MdCheckCircle
              size={40}
              color="green"
              className="check-animation" // Clasă pentru animație
            />
          </Box>
          <Text>Your order has been placed successfully. Thank you for shopping with us!</Text>
         </Dialog.Content>
       </Dialog.Positioner>
      </Dialog.Root>

    </Container>
  );
};

export default Checkout;

