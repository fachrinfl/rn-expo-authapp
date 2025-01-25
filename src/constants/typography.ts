type FontWeight =
  | "normal"
  | "bold"
  | "100"
  | "200"
  | "300"
  | "400"
  | "500"
  | "600"
  | "700"
  | "800"
  | "900";

export type TypographyVariant =
  | "display-large"
  | "display-medium"
  | "display-small"
  | "display-xsmall"
  | "heading-xxlarge"
  | "heading-xlarge"
  | "heading-large"
  | "heading-medium"
  | "heading-small"
  | "heading-xsmall"
  | "label-largeMedium"
  | "label-largeBold"
  | "label-mediumMedium"
  | "label-mediumBold"
  | "label-smallMedium"
  | "label-smallBold"
  | "label-xsmallMedium"
  | "label-xsmallBold"
  | "paragraph-large"
  | "paragraph-medium"
  | "paragraph-small"
  | "paragraph-xsmall";

interface TypographyStyle {
  fontFamily: string;
  fontWeight: FontWeight;
  fontSize: number;
  lineHeight: number;
  letterSpacing?: number;
}

interface Typography {
  display: Record<"large" | "medium" | "small" | "xsmall", TypographyStyle>;
  heading: Record<
    "xxlarge" | "xlarge" | "large" | "medium" | "small" | "xsmall",
    TypographyStyle
  >;
  label: Record<
    | "largeMedium"
    | "largeBold"
    | "mediumMedium"
    | "mediumBold"
    | "smallMedium"
    | "smallBold"
    | "xsmallMedium"
    | "xsmallBold",
    TypographyStyle
  >;
  paragraph: Record<"large" | "medium" | "small" | "xsmall", TypographyStyle>;
}

const typography: Typography = {
  display: {
    large: {
      fontFamily: "Figtree-Bold",
      fontWeight: "bold",
      fontSize: 96,
      lineHeight: 112,
    },
    medium: {
      fontFamily: "Figtree-Bold",
      fontWeight: "bold",
      fontSize: 52,
      lineHeight: 64,
    },
    small: {
      fontFamily: "Figtree-Bold",
      fontWeight: "bold",
      fontSize: 44,
      lineHeight: 52,
    },
    xsmall: {
      fontFamily: "Figtree-Bold",
      fontWeight: "bold",
      fontSize: 36,
      lineHeight: 44,
    },
  },
  heading: {
    xxlarge: {
      fontFamily: "Figtree-Bold",
      fontWeight: "bold",
      fontSize: 40,
      lineHeight: 52,
    },
    xlarge: {
      fontFamily: "Figtree-Bold",
      fontWeight: "bold",
      fontSize: 36,
      lineHeight: 44,
    },
    large: {
      fontFamily: "Figtree-Bold",
      fontWeight: "bold",
      fontSize: 32,
      lineHeight: 40,
    },
    medium: {
      fontFamily: "Figtree-Bold",
      fontWeight: "bold",
      fontSize: 28,
      lineHeight: 36,
    },
    small: {
      fontFamily: "Figtree-Bold",
      fontWeight: "bold",
      fontSize: 24,
      lineHeight: 32,
    },
    xsmall: {
      fontFamily: "Figtree-Bold",
      fontWeight: "bold",
      fontSize: 20,
      lineHeight: 28,
    },
  },
  label: {
    largeMedium: {
      fontFamily: "Figtree-Medium",
      fontWeight: "500",
      fontSize: 18,
      lineHeight: 24,
    },
    largeBold: {
      fontFamily: "Figtree-Bold",
      fontWeight: "700",
      fontSize: 18,
      lineHeight: 24,
    },
    mediumMedium: {
      fontFamily: "Figtree-Medium",
      fontWeight: "500",
      fontSize: 16,
      lineHeight: 20,
    },
    mediumBold: {
      fontFamily: "Figtree-Bold",
      fontWeight: "700",
      fontSize: 16,
      lineHeight: 20,
    },
    smallMedium: {
      fontFamily: "Figtree-Medium",
      fontWeight: "500",
      fontSize: 14,
      lineHeight: 16,
    },
    smallBold: {
      fontFamily: "Figtree-Bold",
      fontWeight: "700",
      fontSize: 14,
      lineHeight: 16,
    },
    xsmallMedium: {
      fontFamily: "Figtree-Medium",
      fontWeight: "500",
      fontSize: 12,
      lineHeight: 16,
    },
    xsmallBold: {
      fontFamily: "Figtree-Bold",
      fontWeight: "700",
      fontSize: 12,
      lineHeight: 16,
    },
  },
  paragraph: {
    large: {
      fontFamily: "Figtree-Regular",
      fontWeight: "400",
      fontSize: 18,
      lineHeight: 28,
    },
    medium: {
      fontFamily: "Figtree-Regular",
      fontWeight: "400",
      fontSize: 16,
      lineHeight: 24,
    },
    small: {
      fontFamily: "Figtree-Regular",
      fontWeight: "400",
      fontSize: 14,
      lineHeight: 20,
    },
    xsmall: {
      fontFamily: "Figtree-Regular",
      fontWeight: "400",
      fontSize: 12,
      lineHeight: 20,
    },
  },
};

export const getTypographyStyle = (
  variant: TypographyVariant
): TypographyStyle => {
  const [group, size] = variant.split("-") as [keyof Typography, string];

  switch (group) {
    case "display":
    case "paragraph":
      return (
        typography[group][size as keyof Typography["display"]] ||
        typography.paragraph.large
      );
    case "heading":
      return (
        typography.heading[size as keyof Typography["heading"]] ||
        typography.paragraph.large
      );
    case "label":
      return (
        typography.label[size as keyof Typography["label"]] ||
        typography.paragraph.large
      );
    default:
      return typography.paragraph.large;
  }
};

export default typography;
