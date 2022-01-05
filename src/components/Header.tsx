import ReceiptIcon from "@mui/icons-material/Receipt";
import LogoutIcon from "@mui/icons-material/Logout";
import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";
import React from "react";

const Header: React.VFC = () => {
  return (
    <AppBar position="static">
      <Toolbar variant="dense">
        <ReceiptIcon />
        <Typography variant="h6" component="h1" sx={{ ml: 2, flex: 1 }}>
          請求書/売上伝票ダウンロード
        </Typography>
        <Typography variant="caption" sx={{ mr: 1 }}>
          株式会社 〇〇 / 〇〇 様
        </Typography>
        <IconButton color="inherit" edge="end">
          <LogoutIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
