import React, { useState } from 'react';
import { Button, Checkbox, Col, Form, Input, Select, Typography } from 'antd';
import AddQuestion from "../AddQuestion";
import { useAppSelector } from "../../hooks/useRedux";
import addQuestion from "../AddQuestion";


const cityData = {
    Zhejiang: ['Hangzhou', 'Ningbo', 'Wenzhou'],
    Jiangsu: ['Nanjing', 'Suzhou', 'Zhenjiang'],
};

type CityName = keyof typeof cityData;

interface IQuestion {
    indexItem: number;
    name: string;
    isCorrect: number;
    answers: string[];
}

const CreateTest: React.FC = () => {
    const provinceData: string[] = ['Zhejiang', 'Jiangsu'];

    const [cities, setCities] = React.useState(cityData[provinceData[0] as CityName]);
    const [secondCity, setSecondCity] = React.useState(cityData[provinceData[0] as CityName][0])
    const [questionCounter, setQuestionCounter] = useState(0);
    const [questions, setQuestions] = React.useState<IQuestion[]>([]);


    const handleProvinceChange = (value: CityName) => {
        setCities(cityData[value]);
        setSecondCity(cityData[value][0]);
    };

    const createQuestion = () => {
        // @ts-ignore
        setQuestions((prevState) => {
            return [
                ...prevState,
                {
                    indexItem: questionCounter + 1,
                    name: "",
                    isCorrect: null,
                    answers: [],
                }
            ]
        })
        setQuestionCounter(prevState => prevState + 1);
    }

    const changeQuestionAnswer = (index: number, name: string, value: string) => {
        const data = questions.filter(elem => elem.name === name)[0];

        console.log(data)

        data.answers[index] = value;

        setQuestions(prevState => {
            return [
                ...prevState.filter(elem => elem.name !== name),
                data
            ]
        })
    }

    const changeQuestionName = (indexItem: number, value: string) => {
        const dataQuestions = questions;
        dataQuestions.forEach(elem => {
            if (elem.indexItem === indexItem) {
                elem.name = value;
            }
        });

        console.log(dataQuestions)

        setQuestions([...dataQuestions])
    }

    const changeQuestionIsCorrect = (indexItem: number, value: number) => {
        const dataQuestions = questions;
        dataQuestions.forEach(elem => {
            if (elem.indexItem === indexItem) {
                elem.isCorrect = +value;
            }
        });

        setQuestions([...dataQuestions])
    }

    const submitTest = () => {
        console.log(questions)
    }


    return (
        <>
            <Typography.Title>Создание теста</Typography.Title>
            <Form>
                <Form.Item
                    label={"Специализация"}
                >
                    <Select
                        placeholder={"Специальность"}
                        style={{ width: 120 }}
                        onChange={handleProvinceChange}
                        options={provinceData.map((province) => ({ label: province, value: province }))}
                    />
                </Form.Item>
                <Button
                    type="primary"
                    onClick={createQuestion}
                >
                    Добавить вопрос
                </Button>

                <div style={{ marginTop: "15px" }}>
                    {
                        questionCounter !== 0 ? (
                            <>
                                {
                                    questions.map((elem, index) => (
                                        <>
                                            <AddQuestion
                                                key={index}
                                                name={elem.name}
                                                isCorrect={elem.isCorrect}
                                                answers={elem.answers}
                                                indexItem={elem.indexItem}
                                                changeQuestionAnswer={changeQuestionAnswer}
                                                changeQuestionName={changeQuestionName}
                                                changeQuestionIsCorrect={changeQuestionIsCorrect}
                                            />
                                        </>
                                    ))
                                }
                                <Button
                                    type="primary"
                                    onClick={submitTest}
                                    style={{
                                        marginTop: "10px"
                                    }}
                                >
                                    Сохранить
                                </Button>
                            </>
                        ) : (<p>Вопросов пока нет</p>)
                    }
                </div>


            </Form>
        </>
    )
}

export default CreateTest