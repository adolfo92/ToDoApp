import { List } from "./AppModules/list";
import { listMaker, choreMaker } from "./AppModules/ui";
import { replaceUnderScores, replaceWhiteSpace } from "./AppModules/helpers";

const tablon = document.getElementById("board");

const testList = listMaker("test", tablon);

choreMaker(testList, "comprar ajo");
choreMaker(testList, "barrer piso");
