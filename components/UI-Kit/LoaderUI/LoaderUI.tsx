import { CircularProgress } from "@mui/material";
import { FixedCircular } from "./LoaderUI.style";

export const LoaderUI = () => {
  return (
    <FixedCircular>
      <CircularProgress />
    </FixedCircular>
  );
};
