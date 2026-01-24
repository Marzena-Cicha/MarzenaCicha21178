import classes from './main-header-background.module.css';

export default function MainHeaderBackground() {
  return (
    <div className={classes.background}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" aria-hidden="true">
        <path
          fill="rgba(255,255,255,0.08)"
          d="M0,128L60,112C120,96,240,64,360,53.3C480,43,600,53,720,80C840,107,960,149,1080,170.7C1200,192,1320,192,1380,192L1440,192L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
        />
      </svg>
    </div>
  );
}
