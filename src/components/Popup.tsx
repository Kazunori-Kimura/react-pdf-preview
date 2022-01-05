import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle
} from "@mui/material";
import { SlipProps } from "../types";
import Viewer from "./Viewer";

interface Props {
  open?: boolean;
  slip?: SlipProps;
  onClose: VoidFunction;
}

const Popup: React.VFC<Props> = ({ open = false, slip, onClose }) => {
  if (typeof slip === "undefined") {
    return null;
  }

  return (
    <Dialog open={open} maxWidth="lg" onClose={onClose}>
      <DialogTitle>
        {slip.type === "invoice" ? "請求書" : "売上伝票"}
      </DialogTitle>
      <DialogContent>
        <Viewer src={slip.file} />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>閉じる</Button>
        <Button variant="contained" color="primary" onClick={onClose}>
          ダウンロード
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default Popup;
