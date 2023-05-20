import React, { useState } from 'react';
import { Upload, Button, Input } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { UploadChangeParam, UploadFile } from 'antd/lib/upload/interface';

const { TextArea } = Input;

const CreateManual: React.FC = () => {

   const [files, setFiles] = useState<UploadFile<any>[]>([]);
   const [textValue, setTextValue] = useState('');

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
         <TextArea value={textValue} onChange={handleTextChange} />
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
