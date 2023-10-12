import { CaretRightOutlined } from '@ant-design/icons';
import React from 'react';
import { Collapse, theme } from 'antd';

const text = `
React is a free and open-source front-end JavaScript library for building user interfaces based on 
components. It is maintained by Meta and a community of individual developers and companies. 
React can be used to develop single-page, mobile, or server-rendered applications with frameworks 
like Next.js..
`;

const getItems = (panelStyle) => [
    {
        key: '1',
        label: <h1 style={{ color: 'black' , font: 'bold' }}>REACT</h1>,
        children: 
        <ol style={{ listStyleType: 'decimal' }}>
                <li>{text}</li>
                <li>{text}</li>
                <li>{text}</li>
        </ol>,
        style: panelStyle
    }
];

const DropDown = (props) => {

    const { name , desc , price , image } = props;
    const { token } = theme.useToken();

    const panelStyle = {
        marginBottom: 24,
        background: token.colorWarning,
        borderRadius: token.borderRadiusLG,
        outerWidth: 25,
        textColor: token.colorWhite
    };

    return (
        <>
            <Collapse
            bordered={false}
            defaultActiveKey={['0']}
            expandIcon={({ isActive }) => <CaretRightOutlined rotate={isActive ? 90 : 0} />}
            style={{
                background: token.colorBgContainer,
                width: "20rem",
                height: "10rem"
            }}
         
            items={getItems(panelStyle)}
        />
        <p>{name}</p>
        <p>{desc}</p>
        </>
        
        
    );
};

export default DropDown;