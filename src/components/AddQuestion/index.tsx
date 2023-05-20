import React from 'react';
import {Button, Checkbox, Col, Form, Input, Select, Typography} from 'antd';

interface IAddQuestion {
    name: string;
    isCorrect: number;
    answers: string[];
    changeQuestionAnswer(index: number, name: string, value: string): void;
    changeQuestionName(name: string, value: string): void;
    changeQuestionIsCorrect(name: string, value: number): void;
}

const AddQuestion: React.FC<IAddQuestion> = (props) => {

    return(
        <>
            <Form.Item
                label={"Сюда пишим вопрос"}
            >
                <Input
                    value={props.name}
                    onChange={(
                        e
                    ) => props.changeQuestionName(props.name, e.target.value)}
                />
            </Form.Item>
            <Form.Item
                label={"Номер правильного ответа"}
            >
                <Input
                    value={props.isCorrect}
                    onChange={(
                        e
                    ) => props.changeQuestionIsCorrect(props.name, +e.target.value)}
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
        </>
    )
}

export default AddQuestion