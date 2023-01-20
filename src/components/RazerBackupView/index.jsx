import React from 'react'
import { Button, Drawer } from 'antd';

const RazerBackupCode = ({open, setOpen}) => {

    const onClose=()=>{
        setOpen(false)
    }
  return (
    <Drawer width={'70%'} title="Basic Drawer" placement="right" onClose={onClose} open={open}>
    <p>Some contents...</p>
    <p>Some contents...</p>
    <p>Some contents...</p>
  </Drawer>
  )
}

export default RazerBackupCode