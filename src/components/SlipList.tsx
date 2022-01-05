import { Box, Pagination, Stack } from "@mui/material";
import { SlipProps } from "../types";
import Slip from "./Slip";
import SlipListHeader from "./SlipListHeader";

interface Props {
  items: SlipProps[];
  onSelect: (slip: SlipProps) => void;
}

const SlipList: React.VFC<Props> = ({ items, onSelect }) => {
  return (
    <>
      <Stack
        direction="column"
        sx={{
          borderWidth: 1,
          borderStyle: "solid",
          borderColor: (theme) => theme.palette.divider
        }}
      >
        <SlipListHeader />
        {items.map((item, index) => (
          <Slip
            key={`${item.type}-${item.slipNo}`}
            {...item}
            odd={index % 2 === 1}
            onClick={() => onSelect(item)}
          />
        ))}
      </Stack>
      <Box
        sx={{ width: "100%", display: "flex", justifyContent: "center", p: 1 }}
      >
        <Pagination count={10} />
      </Box>
    </>
  );
};

export default SlipList;
