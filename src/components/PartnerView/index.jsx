import React from 'react'
import { Button, Drawer } from 'antd';


const PartnerView = ({openView, setOpenView}) => {

    const onClose = ()=>{
        setOpenView(false)
    }
  return (
    <Drawer width={'50%'} title="Basic Drawer" placement="right" onClose={onClose} open={openView}>
    <p>Some contents...</p>
    <p>Some contents...</p>
    <p>Some contents...</p>
  </Drawer>
  )
}

export default PartnerView