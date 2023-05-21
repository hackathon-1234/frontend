import React from 'react';
import { Card } from 'antd';

const { Meta } = Card;


const MyTests: React.FC = () => {
    return (
        <div
            style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center"
            }}
        >
            <Card
                hoverable
                style={{ width: 240, borderColor: "#66fc11" }}
                cover={<img alt="example" src="https://quality-lab.ru/wp-content/themes/qlofficial/assets/img/header-extended/notepad.png" />}
            >
                <Meta title="Хирург" description="Продвинутый уровень" />
            </Card>
            <Card
                hoverable
                style={{ width: 240, borderColor: "#66fc11" }}
                cover={<img alt="example" src="https://quality-lab.ru/wp-content/themes/qlofficial/assets/img/header-extended/notepad.png" />}
            >
                <Meta title="Хирург" description="Средний уровень" />
            </Card>
            <Card
                hoverable
                style={{ width: 240, borderColor: "#66fc11" }}
                cover={<img alt="example" src="https://quality-lab.ru/wp-content/themes/qlofficial/assets/img/header-extended/notepad.png" />}
            >
                <Meta title="Хирург" description="Легкий уровень" />
            </Card>

        </div>
    )
}

export default MyTests