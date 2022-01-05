import { Stack } from "@mui/material";
import React from "react";
import SlipCell from "./SlipCell";

const SlipHeader: React.VFC = () => {
  return (
    <Stack
      spacing={2}
      direction="row"
      alignItems="center"
      sx={{
        backgroundColor: (theme) => theme.palette.grey[600],
        p: 1
      }}
    >
      {/* 区分 */}
      <SlipCell value="区分" width={70} header />
      {/* 伝票番号 */}
      <SlipCell value="伝票番号" width={100} header />
      {/* 伝票日付 */}
      <SlipCell value="伝票日付" width={100} header />
      {/* 概要 */}
      <SlipCell value="概要" header />
      {/* 金額 */}
      <SlipCell value="金額" width={100} header />
    </Stack>
  );
};

export default SlipHeader;
