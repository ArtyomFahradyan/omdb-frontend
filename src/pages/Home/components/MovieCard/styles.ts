import { styled } from "@mui/system";
import { CardContent } from "@mui/material";
export const Wrapper = styled("div")`
  display: flex;
  justify-content: center;
`;

export const Content = styled(CardContent)`
  > p {
    margin-top: 5px;
  }
`;
