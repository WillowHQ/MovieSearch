import React from 'react'
import AppBar from 'material-ui/AppBar'

function handleTouchTap() {
  alert('onTouchTap triggered on the title component');
}

const styles = {
  title: {
    cursor: 'pointer',
  },
}

const MenuBarLayout = () => (
  <AppBar
    title={<span style={styles.title}>Alan's Movie Manager</span>}
   
  />
)

export default MenuBarLayout;