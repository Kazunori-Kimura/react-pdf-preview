import { pdfjs } from "react-pdf";
import Popup from "./components/Popup";
import SlipList from "./components/SlipList";
import { SlipProps, Slips } from "./types";
import Header from "./components/Header";
import { Container } from "@mui/material";
import { useCallback, useState } from "react";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

export default function App() {
  const [selectSlip, setSelectSlip] = useState<SlipProps>();

  const handleClosePopup = useCallback(() => {
    setSelectSlip(undefined);
  }, []);

  return (
    <div className="App">
      <Header />
      <Container sx={{ pt: 2 }}>
        <SlipList items={Slips} onSelect={setSelectSlip} />
      </Container>
      <Popup
        open={Boolean(selectSlip)}
        slip={selectSlip}
        onClose={handleClosePopup}
      />
    </div>
  );
}
