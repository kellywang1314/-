(function(){
    let $file
    let input = document.querySelector('#file')
    let div = document.querySelector('#upload')
    input.onchange = (e) => {this.handleFileChange(e)}
    div.onclick = () => {this.handleUploadFile()}
    
    handleFileChange = (e) => {
        let [file]= e.target.files
        if(!file) return
        $file = file

    }

    handleUploadFile = () => {
        let file = $file
        let res = fetch({method:'POST',url:'http://localhost:8080/upload'})
    }

    fetch = ({
        method,
        url,
        data = {},
        headers = {}
    }) => {
        return new Promise((resolve) => {
            let xhr = new XMLHttpRequest()
            xhr.open(method,url)

            Object.keys(headers).forEach((item) => {
                xhr.setRequestHeader(item,headers(item))
            })
            xhr.send(data)
            xhr.onload = (e) => {
                resolve(e.target.response)
            }
        })   
    }

})(window)