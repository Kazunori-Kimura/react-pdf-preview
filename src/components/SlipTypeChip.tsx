import { Chip, ChipProps } from "@mui/material";
import React, { useMemo } from "react";
import { SlipType } from "../types";

interface Props {
  type: SlipType;
}

const SlipTypeChip: React.VFC<Props> = ({ type }) => {
  const props: ChipProps = useMemo(() => {
    if (type === "invoice") {
      return {
        label: "請求書",
        color: "primary"
      };
    } else if (type === "sales") {
      return {
        label: "売上",
        color: "success"
      };
    }
    return {
      label: "その他",
      color: "warning",
      variant: "outlined"
    };
  }, [type]);

  return <Chip sx={{ width: 70 }} {...props} />;
};

export default SlipTypeChip;
