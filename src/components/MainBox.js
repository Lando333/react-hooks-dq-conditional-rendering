import React , {useState} from "react";
import MenuBar from "./MenuBar";
import { Profile, Photos, Cocktails, Pokemon } from "./pages";

function MainBox() {
  /*
  Replace the code below! Depending on what menu item is selected in the menu, 
  I should render either a Profile, Photos, Cocktails, or Pokemon component.
  Think of a way to track which menu item was selected. 
  - Which component should have state? 
  - Which component should have methods to control state? 
  - Where should these methods be called?
  */
  

  const [activePage, setActivePage] = useState(0)
  
  function choosePage(id) {
    setActivePage(id)
  }

  let detailsToDisplay;
  if (activePage === 1) {
    detailsToDisplay = <Profile />
    console.log(detailsToDisplay)
  } else if (activePage === 2) {
    detailsToDisplay = <Photos />
    console.log(detailsToDisplay)
  } else if (activePage === 3) {
    detailsToDisplay = <Cocktails />
    console.log(detailsToDisplay)
  } else if (activePage === 4) {
    detailsToDisplay = <Pokemon />
    console.log(detailsToDisplay)
  }

  

  return (
    <div>
      <MenuBar choosePage={choosePage} />
      {detailsToDisplay}
    </div>
  );
}

export default MainBox;
