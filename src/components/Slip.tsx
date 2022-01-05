import { Stack } from "@mui/material";
import React from "react";
import { SlipProps } from "../types";
import SlipTypeChip from "./SlipTypeChip";
import SlipCell from "./SlipCell";

interface Props extends SlipProps {
  odd?: boolean;
  onClick: VoidFunction;
}

const Slip: React.VFC<Props> = ({
  type,
  slipNo,
  slipDate,
  description,
  total,
  odd = false,
  onClick
}) => {
  return (
    <Stack
      spacing={2}
      direction="row"
      alignItems="center"
      sx={{
        backgroundColor: (theme) =>
          odd ? theme.palette.grey[100] : theme.palette.background.paper,
        p: 1
      }}
    >
      {/* 区分 */}
      <SlipTypeChip type={type} />
      {/* 伝票番号 */}
      <SlipCell value={slipNo} width={100} onClick={onClick} />
      {/* 伝票日付 */}
      <SlipCell type="date" value={slipDate} width={100} />
      {/* 概要 */}
      <SlipCell value={description} />
      {/* 金額 */}
      <SlipCell type="number" value={total} width={100} />
    </Stack>
  );
};

export default Slip;
