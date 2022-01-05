export const SlipTypes = ["invoice", "sales"] as const;
export type SlipType = typeof SlipTypes[number];

export interface SlipProps {
  type: SlipType;
  slipNo: string;
  slipDate: string;
  description: string;
  total: number;
  file: string;
}

export const Slips: SlipProps[] = [
  {
    type: "invoice",
    slipNo: "00000000",
    slipDate: "2022-01-05T04:14:59.235Z",
    description: "請求書 (2022年1月)",
    total: 12345678,
    file: "invoice.pdf"
  },
  {
    type: "sales",
    slipNo: "00000001",
    slipDate: "2022-01-05T04:14:59.235Z",
    description: "ハローズ昆布塩サバ切身2切P",
    total: 12345678,
    file: "slip.pdf"
  },
  {
    type: "sales",
    slipNo: "00000002",
    slipDate: "2022-01-05T04:14:59.235Z",
    description: "ハローズ昆布塩サバ切身2切P",
    total: 12345678,
    file: "slip.pdf"
  },
  {
    type: "sales",
    slipNo: "00000003",
    slipDate: "2022-01-05T04:14:59.235Z",
    description: "ハローズ昆布塩サバ切身2切P",
    total: 12345678,
    file: "slip.pdf"
  },
  {
    type: "sales",
    slipNo: "00000004",
    slipDate: "2022-01-05T04:14:59.235Z",
    description: "ハローズ昆布塩サバ切身2切P",
    total: 12345678,
    file: "slip.pdf"
  },
  {
    type: "sales",
    slipNo: "00000005",
    slipDate: "2022-01-05T04:14:59.235Z",
    description: "ハローズ昆布塩サバ切身2切P",
    total: 12345678,
    file: "slip.pdf"
  },
  {
    type: "sales",
    slipNo: "00000006",
    slipDate: "2022-01-05T04:14:59.235Z",
    description: "ハローズ昆布塩サバ切身2切P",
    total: 12345678,
    file: "slip.pdf"
  },
  {
    type: "sales",
    slipNo: "00000007",
    slipDate: "2022-01-05T04:14:59.235Z",
    description: "ハローズ昆布塩サバ切身2切P",
    total: 12345678,
    file: "slip.pdf"
  },
  {
    type: "sales",
    slipNo: "00000008",
    slipDate: "2022-01-05T04:14:59.235Z",
    description: "ハローズ昆布塩サバ切身2切P",
    total: 12345678,
    file: "slip.pdf"
  },
  {
    type: "sales",
    slipNo: "00000009",
    slipDate: "2022-01-05T04:14:59.235Z",
    description: "ハローズ昆布塩サバ切身2切P",
    total: 12345678,
    file: "slip.pdf"
  },
  {
    type: "sales",
    slipNo: "00000010",
    slipDate: "2022-01-05T04:14:59.235Z",
    description: "ハローズ昆布塩サバ切身2切P",
    total: 12345678,
    file: "slip.pdf"
  }
];
