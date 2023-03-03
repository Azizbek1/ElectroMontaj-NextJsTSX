import React from 'react';
import { Space, Spin } from 'antd';
import { AntdSpinnerStyled } from './Style';

const AntdSpinner: React.FC = () => (
    <AntdSpinnerStyled>
        <Space size="middle">
            <Spin size="large" />
        </Space>
    </AntdSpinnerStyled>

);

export default AntdSpinner;