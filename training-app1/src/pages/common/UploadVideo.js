import React, { useState } from 'react';
import { InboxOutlined, CloudUploadOutlined } from '@ant-design/icons';
import { message, Upload, Input } from 'antd';

const { Dragger } = Upload;
const { TextArea } = Input;

const props = {
    name: 'file',
    multiple: true,
    action: 'https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188',
    onChange(info) {
        const { status } = info.file;
        if (status !== 'uploading') {
            console.log(info.file, info.fileList);
        }
        if (status === 'done') {
            message.success(`${info.file.name} file uploaded successfully.`);
            console.log("first", info.file, info.fileList);
        } else if (status === 'error') {
            message.error(`${info.file.name} file upload failed.`);
        }
    },

    onDrop(e) {
        console.log('Dropped files', e.dataTransfer.files);
    },
};

const UploadFile = () => (
    <div >
        <div className='file-upload h-64'>
            <Dragger {...props}>
                <p >
                    <CloudUploadOutlined />
                </p>
                <p className="ant-upload-text">Drag Or Drop file to this area to upload</p>
                <p className="ant-upload-hint">
                    Support for a single or bulk upload.
                </p>
            </Dragger>
            <Input placeholder="Enter Course Name" />
        </div>
    </div>


);
export default UploadFile;