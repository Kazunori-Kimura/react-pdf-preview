import { Box, SxProps, Theme, Typography } from "@mui/material";
import { useMemo } from "react";

interface StringCellProps {
  type?: "string";
  value: string;
  width?: number;
  header?: boolean;
  onClick?: VoidFunction;
}
interface NumberCellProps {
  type: "number";
  value: number;
  width?: number;
  header?: boolean;
  onClick?: VoidFunction;
}
interface DateCellProps {
  type: "date";
  value: string;
  width?: number;
  header?: boolean;
  onClick?: VoidFunction;
}

type Props = StringCellProps | NumberCellProps | DateCellProps;

const NumberFormatter = new Intl.NumberFormat("ja-JP");
const DateFormatter = new Intl.DateTimeFormat("ja-JP");

const SlipCell: React.VFC<Props> = ({
  type = "string",
  value,
  width,
  header = false,
  onClick
}) => {
  const displayValue = useMemo(() => {
    switch (type) {
      case "string":
        return value;
      case "number":
        if (typeof value === "number") {
          return NumberFormatter.format(value);
        }
        return "0";
      case "date":
        try {
          const date = new Date(value);
          return DateFormatter.format(date);
        } catch (e) {
          console.error(e);
          return "";
        }
    }
  }, [type, value]);

  return (
    <Box
      sx={() => {
        const styles: SxProps<Theme> = {
          overflow: "hidden"
        };

        if (typeof width === "number") {
          styles["width"] = width;
        } else {
          styles["flex"] = 1;
        }

        return styles;
      }}
    >
      <Typography
        variant="body2"
        component="div"
        sx={(theme) => ({
          width: "100%",
          textAlign: header ? "center" : type === "number" ? "right" : "left",
          overflow: "hidden",
          whiteSpace: "nowrap",
          textOverflow: "ellipsis",
          color: header
            ? theme.palette.grey[100]
            : typeof onClick === "undefined"
            ? "inherit"
            : theme.palette.primary.main,
          cursor: typeof onClick === "undefined" ? "inherit" : "pointer"
        })}
        onClick={onClick}
      >
        {displayValue}
      </Typography>
    </Box>
  );
};

export default SlipCell;
