let imgBox = document.getElementById("imgBox");
        let QRimage = document.getElementById("QRimage");
        let QRtext = document.getElementById("QRtext");


        function generateQR() {

            generateBtn.textContent= "Generating..."

            if(QRtext.value.length>0){
                QRimage.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + QRtext.value;
                imgBox.classList.add("show_img");

                QRimage.onload=()=>{
                    generateBtn.textContent= "Generate"
                }

            }
            else{
                QRtext.classList.add("error");
                setTimeout(()=>{
                    QRtext.classList.remove("error")
                },1000);
            }

        }

        function downloadQR(){
            fetch(QRimage.src)
            .then(response=>{
                return response.blob()
            })
            .then(blob=>{
                let imgURL = URL.createObjectURL(blob)
                let a = document.createElement("a")
                a.href = imgURL
                a.download = "QRcode"
                a.click()
            })
        }