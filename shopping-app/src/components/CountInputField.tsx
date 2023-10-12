import AddIcon from "@mui/icons-material/Add"
import RemoveIcon from "@mui/icons-material/Remove"
import {
  OutlinedInput,
  InputAdornment,
  IconButton,
  FormControl,
  styled,
} from "@mui/material"
import { useState } from "react"

interface ICountInputField {
  id: string
}

const TextCenterInput = styled(OutlinedInput)`
  input {
    text-align: center;
  }
`

export default function CountInputField({ id }: ICountInputField) {
  const [iconColor, setColor] = useState("")
  const [count, setCount] = useState(0)

  const increase = () => {
    setCount((count) => count + 1)
  }
  const decrease = () => {
    if (count > 0) {
      setCount((count) => count - 1)
    }
  }

  return (
    <FormControl
      size="small"
      sx={{
        textAlign: "center",
        bgcolor: "#fff",
        borderRadius: "4px",
        width: "150px",
      }}
      variant="outlined"
    >
      <TextCenterInput
        onBlur={() => {
          setColor("")
        }}
        onChange={(e) => setCount(Number(e.target.value))}
        onFocus={() => setColor("warning.main")}
        value={count}
        id={id}
        type="text"
        startAdornment={
          <InputAdornment position="start">
            <IconButton
              onClick={decrease}
              sx={{ color: iconColor }}
              edge="start"
            >
              <RemoveIcon />
            </IconButton>
          </InputAdornment>
        }
        endAdornment={
          <InputAdornment position="end">
            <IconButton onClick={increase} sx={{ color: iconColor }} edge="end">
              <AddIcon />
            </IconButton>
          </InputAdornment>
        }
      />
    </FormControl>
  )
}
