import React, { useState } from 'react';
import {Upload, Button, Input, Typography, Select, Form} from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { UploadChangeParam, UploadFile } from 'antd/lib/upload/interface';
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css"

const { TextArea } = Input;

const cityData = {
    Zhejiang: ['Hangzhou', 'Ningbo', 'Wenzhou'],
    Jiangsu: ['Nanjing', 'Suzhou', 'Zhenjiang'],
};

type CityName = keyof typeof cityData;

const CreateManual: React.FC = () => {
   const provinceData: string[] = ['Zhejiang', 'Jiangsu'];
   const [files, setFiles] = useState<UploadFile<any>[]>([]);
   const [textValue, setTextValue] = useState('');
   const [quillValue, setQuillValue] = React.useState("");
   const [cities, setCities] = React.useState(cityData[provinceData[0] as CityName]);
   const [secondCity, setSecondCity] = React.useState(cityData[provinceData[0] as CityName][0])

   const handleFileChange = (info: UploadChangeParam<UploadFile<any>>) => {
      setFiles(info.fileList);
   };

   const handleTextChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
      setTextValue(event.target.value);
   };

   const handleUpload = () => {
      // Do something with the files and text value
      console.log('Files:', files);
      console.log('Text:', textValue);
   };

    const handleProvinceChange = (value: CityName) => {
        setCities(cityData[value]);
        setSecondCity(cityData[value][0]);
    };

   return (
      <div>
         <Typography.Title level={2}>Доваить материал</Typography.Title>

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
          <div className={"editor"} style={{width: "100%"}}>
            <ReactQuill
               theme={"snow"}
               value={quillValue}
               onChange={setQuillValue}
               className={"editor-input"}
               style={{
                  width: "100%",
                   height: "300px"
               }}
            />
         </div>
         {/*<TextArea value={textValue} rows={6} onChange={handleTextChange} />*/}
         <Upload multiple={true} beforeUpload={() => false} onChange={handleFileChange}>
            <Button icon={<UploadOutlined />} style={{ marginTop: '10px' }}>
               Select Files
            </Button>
         </Upload>
         <Button type="primary" onClick={handleUpload} style={{ marginTop: '10px' }}>
            Сохранить
         </Button>
      </div>
   );
};

export default CreateManual;
