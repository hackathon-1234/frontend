import React from 'react';
import {Button, Input, notification, Radio, RadioChangeEvent, Space, Typography} from "antd";
import {useNavigate} from "react-router-dom";

interface ITestData {
    name: string;
    answers: string[];
}

const testData: ITestData[] = [
    {
        name: "Хирургия - это...",
        answers: [
            "Раздел медицины, который изучает анатомические и физиологические особенности организма ребёнка в период роста и развития",
            "Область медицины, изучающая острые и хронические заболевания, которые лечатся при помощи разъединения и соединения тканей в ходе операции",
            "Раздел медицины, занимающийся изучением зубов, их заболеваний, методов их профилактики и лечения, а также болезней полости рта, челюстей и пограничных областей лица и шеи",
            "Это медицины, уза=учающая строение человека"
        ]
    },
    {
        name: "Кто из перечисленных не является хирургом?",
        answers: [
            "Николай Пирогов",
            "Николай Склифосовский",
            "Анри Пуанкаре",
            "Никола Тесла"
        ]
    },
    {
        name: "Какой хирургии не существует?",
        answers: [
            "Пластической",
            "Торакальной",
            "Ишемической",
            "Клинической"
        ]
    }
]

const TestClient: React.FC = () => {
    const [value, setValue] = React.useState();
    const [valueTwo, setValueTwo] = React.useState();
    const [valueThree, setValueThree] = React.useState();

    const navigate = useNavigate();

    const onChange = (e: RadioChangeEvent) => {
        setValue(e.target.value);
    };

    const onChangeTwo = (e: RadioChangeEvent) => {
        setValueTwo(e.target.value);
    };

    const onChangeTree = (e: RadioChangeEvent) => {
        setValueThree(e.target.value);
    }

    const openNotification = () => {
        notification.open({
            message: 'Успешно',
            description:
                'Ожидайте обратной связи',
            onClick: () => {
                console.log('Notification Clicked!');
            },
        });
        navigate("/client");
    };

    return (
        <>
            <Typography.Title>{testData[0].name}</Typography.Title>
            <Radio.Group onChange={onChange} value={value}>
                <Space direction="vertical">
                    <Radio value={1}>{testData[0].answers[0]}</Radio>
                    <Radio value={2}>{testData[0].answers[1]}</Radio>
                    <Radio value={3}>{testData[0].answers[2]}</Radio>
                    <Radio value={4}>{testData[0].answers[3]}</Radio>
                </Space>
            </Radio.Group>

            <Typography.Title style={{marginTop: "5px"}}>{testData[1].name}</Typography.Title>
            <Radio.Group onChange={onChangeTwo} value={valueTwo}>
                <Space direction="vertical">
                    <Radio value={1}>{testData[1].answers[0]}</Radio>
                    <Radio value={2}>{testData[1].answers[1]}</Radio>
                    <Radio value={3}>{testData[1].answers[2]}</Radio>
                    <Radio value={4}>{testData[1].answers[3]}</Radio>
                </Space>
            </Radio.Group>

            <Typography.Title style={{marginTop: "5px"}}>{testData[2].name}</Typography.Title>
            <Radio.Group onChange={onChangeTree} value={valueThree}>
                <Space direction="vertical">
                    <Radio value={1}>{testData[2].answers[0]}</Radio>
                    <Radio value={2}>{testData[2].answers[1]}</Radio>
                    <Radio value={3}>{testData[2].answers[2]}</Radio>
                    <Radio value={4}>{testData[2].answers[3]}</Radio>
                </Space>
            </Radio.Group>
            <div>
                <Button
                    type="primary"
                    style={{ marginTop: '10px' }}
                    onClick={openNotification}
                    disabled={
                        typeof value !== "number" ||
                        typeof valueTwo !== "number" ||
                        typeof valueThree !== "number"
                    }
                >
                    Завершить тестирование
                </Button>
            </div>
        </>

    )
}

export default TestClient