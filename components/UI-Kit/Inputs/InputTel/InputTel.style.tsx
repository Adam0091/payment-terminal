import { styled, TextField } from "@mui/material";

export const CssTextField = styled(TextField)({
  "& label.Mui-focused": {
    color: "#2965aa",
  },
  "& p": {
    color: "white !important",
  },
  "& label": {
    color: "white",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "#2965aa",
  },
  "& .MuiOutlinedInput-root": {
    "& input": {
      color: "white !important",
    },
    "& fieldset": {
      borderColor: "white",
    },
    "&:hover fieldset": {
      borderColor: "#93f6fa",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#2965aa",
    },
  },
});
