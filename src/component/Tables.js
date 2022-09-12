import React from 'react'
import {Container, Row, Tabs, Tab} from 'react-bootstrap';
import Cart from '../Cart';
import Menu from '../Menu';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './tabStyles.css';

import { CartProvider} from 'react-use-cart'

const Tables = () => {
  return (
    <Container className='py-4'>
        <Row className='justyfiy-content-center'>
            <Tabs justify variant='pills' defaultActiveKey='Table1' className='mb-1 p-0'>
                <Tab eventKey='Table1' title='Table 1'>
                <CartProvider>
                    <Menu/>
                    <Cart />
                </ CartProvider>
                </Tab>
                <Tab eventKey='Table2' title='Table 2'>
                <CartProvider>
                    <Menu/>
                    <Cart />
                </ CartProvider>
                </Tab>
                <Tab eventKey='Table3' title='Table 3'>
                <CartProvider>
                    <Menu/>
                    <Cart />
                </ CartProvider>
                </Tab>
            </Tabs>
        </Row>
    </Container>
  )
}

export default Tables;