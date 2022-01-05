import { Box } from "@mui/material";
import React from "react";
import { Document, Page } from "react-pdf";

interface Props {
  src: string;
}

const Viewer: React.VFC<Props> = ({ src }) => {
  return (
    <Box sx={{ border: "1px solid black", width: 600 }}>
      <Document file={`${window.location.href}${src}`}>
        <Page pageNumber={1} width={600} />
      </Document>
    </Box>
  );
};

export default Viewer;
