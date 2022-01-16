import React, { ReactNode } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import { makeStyles } from '@material-ui/core/styles';

function ElevationScroll(props: any) {
  const { children } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

const useStyles = makeStyles((theme) => ({
  toolbarMargin: {
    ...theme.mixins.toolbar,
    marginBottom: '1px',
  },
  customizedToolBar: {
    borderBottom: '1px solid #e2e8f0',
    minHeight: 60,
  },
}));

export default function Header({ children }: { children: ReactNode }) {
  const classes = useStyles();

  return (
    <>
      <ElevationScroll>
        <AppBar position="fixed" color="inherit">
          <Toolbar className={classes.customizedToolBar}>{children}</Toolbar>
        </AppBar>
      </ElevationScroll>
      <div className={classes.toolbarMargin} />
    </>
  );
}
