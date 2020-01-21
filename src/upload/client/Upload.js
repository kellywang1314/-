import React from 'react'
import { Upload, Button, Icon, message } from 'antd'
// 单个大文件上传

const LEN = 10
export default class FileUpload extends React.Component {
    constructor() {
        super()
        this.state = {
            uploading: false,
            fileList: [],
            fileChunkList: [],
            reqData: []
        }
    }

    createFileChunk = (file, LEN) => {
        const fileList = []
        const chuckSize = Math.ceil(file.size / 10)
        let currentSize = 0
        while (currentSize < file.size) {
            fileList.push({ file: file.slice(currentSize, currentSize + chuckSize) })
            currentSize += chuckSize
        }
        return fileList
    }

    uploadChunk = async () => {
        const { reqData,fileList } = this.state
        const reqList = reqData
            .map(({ chunk, hash }) => {
                let formData = new FormData()
                formData.append('chunk', chunk)
                formData.append('hash', hash)
                formData.append('filename', fileList[0].name)
                return { formData }
            })
            .map(async ({ formData }) => {
                fetch({
                    method: "POST",
                    url: 'http://localhost:8080/upload',
                    data: formData
                })
            })
        Promise.all(reqList).then(() => {
            // 上传完成之后，请求合并
            setTimeout(() => {
                requestMerge()
            }, 1000)
        })
    }

    handleUploadFile = async () => {
        const { fileList } = this.state
        if (!fileList[0]) return
        const fileChunkList = createFileChunk(fileList[0], LEN)
        const reqData = fileChunkList.map(({ file }, index) => (
            {
                chunk: file,
                hash: $file.name + '-' + index
            }
        ))
        this.setState({
            fileChunkList:fileChunkList,
            reqData:reqData
        })
        // 发送请求
        await uploadChunk()
    }

    requestMerge = async () => {
        const { fileList } = this.state
        let filename = fileList[0].name
        fetch({
            method: 'POST',
            url: 'http://localhost:8080/merge',
            headers: { "content-type": "application/json" },
            data: JSON.stringify({ filename: filename })
        }).then((data) => {
            console.log(data)
        })
    }

    fetch = ({
        method,
        url,
        // 这里为什么需要JSON.stringify序列化data：xhr.send()方法要求传入数据格式是字符串/DOM/formData/Blob,不能是对象
        data = {},
        headers = {}
    }) => {
        return new Promise((resolve, reject) => {
            let xhr = new XMLHttpRequest()
            xhr.open(method, url)
            Object.keys(headers).forEach((item) => {
                xhr.setRequestHeader(item, headers[item])
            })
            xhr.send(data)
            xhr.onload = (e) => {
                resolve(e.target.response)
            }
        })
    }

    render() {
        const { uploading, fileList } = this.state
        const props = {
            // 删除文件
            onRemove: file => {
                this.setState(state => {
                    const index = state.fileList.indexOf(file)
                    const newFileList = state.fileList.slice()
                    newFileList.splice(index, 1)
                    return {
                        fileList: newFileList,
                    }
                })
            },
            // 上传文件之前的钩子，参数为上传的文件
            beforeUpload: file => {
                this.setState(state => ({
                    fileList: [...state.fileList, file],
                }))
                return false
            },
            fileList,
        };
        return (
            <div>
                <Upload {...props}>
                    <Button>
                        <Icon type="upload" /> 选择文件
                    </Button>
                </Upload>
                <Button
                    type="primary"
                    onClick={this.handleUploadFile}
                    disabled={fileList.length === 0}
                    loading={uploading}
                    style={{ marginTop: 16 }}
                >
                    {uploading ? '上传中' : '开始上传'}
                </Button>
            </div>
        )
    }
}