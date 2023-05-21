import React, { useState } from 'react';
import { Upload, Button, Input, Typography } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { UploadChangeParam, UploadFile } from 'antd/lib/upload/interface';
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css"

const { TextArea } = Input;

const CreateManual: React.FC = () => {

   const [files, setFiles] = useState<UploadFile<any>[]>([]);
   const [textValue, setTextValue] = useState('');
   const [quillValue, setQuillValue] = React.useState("");

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

   return (
      <div>
         <Typography.Title level={2}>Доваить материал</Typography.Title>
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
