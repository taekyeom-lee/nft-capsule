import SignIn from '../SignIn/SignIn';
import classes from './MainContent.module.css';

function MainContent() {
  return (
    <div className={classes.mainContent}>
      <SignIn />
    </div>
  );
}

export default MainContent;
