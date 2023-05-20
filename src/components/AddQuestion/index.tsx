import React from 'react';
import {Button, Checkbox, Col, Form, Input, Select, Typography} from 'antd';

interface IAddQuestion {
    indexItem: number;
    name: string;
    isCorrect: number;
    answers: string[];
    changeQuestionAnswer(index: number, name: string, value: string): void;
    changeQuestionName(indexItem: number, value: string): void;
    changeQuestionIsCorrect(indexItem: number, value: number): void;
}

const AddQuestion: React.FC<IAddQuestion> = (props) => {

    return(
        <div style={{
            border: "2px solid #8f8f8f",
            borderRadius: '10px',
            padding: '15px',
            marginTop: "15px"
        }}>
            <Form.Item
                label={"Вопрос"}
            >
                <Input
                    value={props.name}
                    onChange={(
                        e
                    ) => props.changeQuestionName(props.indexItem, e.target.value)}
                />
            </Form.Item>
            <Form.Item
                label={"Номер правильного ответа"}
            >
                <Input
                    value={props.isCorrect}
                    onChange={(
                        e
                    ) => props.changeQuestionIsCorrect(props.indexItem, +e.target.value)}
                />
            </Form.Item>
            <Form.Item
                label={"Ответ 1"}
            >
                <Input
                    value={props.answers[0]}
                    onChange={(
                        e
                    ) => props.changeQuestionAnswer(0, props.name, e.target.value)}
                />
            </Form.Item>
            <Form.Item
                label={"Ответ 2"}
            >
                <Input
                    value={props.answers[1]}
                    onChange={(
                        e
                    ) => props.changeQuestionAnswer(1, props.name, e.target.value)}
                />
            </Form.Item>
            <Form.Item
                label={"Ответ 3"}
            >
                <Input
                    value={props.answers[2]}
                    onChange={(
                        e
                    ) => props.changeQuestionAnswer(2, props.name, e.target.value)}
                />
            </Form.Item>
            <Form.Item
                label={"Ответ 4"}
            >
                <Input
                    value={props.answers[3]}
                    onChange={(
                        e
                    ) => props.changeQuestionAnswer(3, props.name, e.target.value)}
                />
            </Form.Item>
        </div>
    )
}

export default AddQuestion