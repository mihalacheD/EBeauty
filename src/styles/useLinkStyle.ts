import { useBreakpointValue } from "@chakra-ui/react";

export const useLinkStyles = () => {

  const activeColor = useBreakpointValue({ base: "#606060", xl: "white" });
  const defaultColor = useBreakpointValue({ base: "#949494", xl: "white"});


  return (isActive: boolean) => ({
    color: isActive ? activeColor : defaultColor,
    textDecoration: isActive ? "underline": "none",
    fontSize: "1.5em",
    fontWeight: "600",
    marginBottom: "8px",
    _hover: {
      color: "#606060"
    }
  });

};