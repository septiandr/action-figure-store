import { AppBarContainer, AppBarHeader } from "../../styles/appBarContainer";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import Actions from "../actions/actions";
import { IconButton } from "@mui/material";
import { useUIContext } from "../../store/context";

export default function AppBarMobile({ matches }) {
  const { setDrawerOpen, setShowSearchBox } = useUIContext();
  return (
    <AppBarContainer>
      <IconButton onClick={() => setDrawerOpen(true)}>
        <MenuIcon />
      </IconButton>
      <AppBarHeader textAlign={"center"} variant="h4">
        My Action Figure
      </AppBarHeader>
      <IconButton>
        <SearchIcon onClick ={() => setShowSearchBox(true)}/>
      </IconButton>
      <Actions matches={matches} />
    </AppBarContainer>
  );
}