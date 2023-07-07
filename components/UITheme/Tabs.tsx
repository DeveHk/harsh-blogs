import { tabsAnatomy } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools"; // import utility for setting light and dark mode props

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(tabsAnatomy.keys);

// define the base component styles
const baseStyle = definePartsStyle({
  // define the part you're going to style
  tab: {
    fontWeight: "200", // change the font weight
    fontFamily: `'Open Sans', sans-serif`,
  },
  tabpanel: {
    //fontFamily: "mono", // change the font family
  },
});

// define custom sizes
const sizes = {
  xl: definePartsStyle({
    // define the parts that will change for each size
    tab: {
      fontSize: "14px",
      py: "1",
      px: "8",
    },
  }),
  sm: definePartsStyle({
    // define the parts that will change for each size
    tab: {
      fontSize: "10px",
      py: "2",
      px: "",
    },
  }),
};

// define custom variants
const colorfulVariant = definePartsStyle((props) => {
  const { colorScheme: c } = props; // add colorScheme as a prop

  return {
    tab: {
      borderBottom: "1px solid",
      borderColor: "transparent",
      color: mode(`#896F99`, `${c}.300`)(props),
      //bg: mode(`${c}.300`, `${c}.600`)(props),
      borderTopRadius: "lg",
      //borderBottom: "none",
      _selected: {
        //bg: mode("#fff", "gray.800")(props),
        color: mode(`white`, `${c}.300`)(props),
        borderColor: "#E5E7E8",
        borderTop: "none",

        mb: "-2px",
      },
    },
    tablist: {
      borderBottom: "2x solid",
      borderColor: "inherit",
    },
    /*tabpanel: {
      border: "2px solid",
      borderColor: "inherit",
      borderBottomRadius: "lg",
      borderTopRightRadius: "lg",
    },*/
  };
});

const variants = {
  colorful: colorfulVariant,
};

// define which sizes, variants, and color schemes are applied by default
const defaultProps = {
  size: "xl" as "xl",
  variant: "colorful" as "colorful",
  colorScheme: "green" as "green",
};

// export the component theme
export const tabsTheme = defineMultiStyleConfig({
  baseStyle,
  sizes,
  variants,
  defaultProps,
});
