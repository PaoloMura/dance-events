import { SvgIcon } from "@mui/material";

/**
 * Returns an Emoji Icon
 * @param emoji - string
 * @returns 
 */
export default function EmojiIcon({ emoji }) {
  return (
    <SvgIcon classes={{ root: "MuiChip-icon" }}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="24"
        height="24"
      >
        <text x="0" y="21" fontSize="24">
          {emoji}
        </text>
      </svg>
    </SvgIcon>
  );
}
