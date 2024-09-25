"use strict";

let list

function confirm(){
  fetch('/data.json')
  .then(response => response.json())
  .then(data => {

    const add_det = {
      "name":$('#name_v').val(),
      "email":$('#email_v').val(),
      "phone":$('#phone_v').val(),
      "position":$('#position_v').val(),
      "major":$('#major_v').val(),
      "join_year":$('#join_year_v').val(),
      "descrip":$('#descrip_v').val()
    };

    list = data;

    list[list.length] = add_det;



    // 수정된 JSON 데이터를 Blob으로 변환하여 다운로드
    const jsonString = JSON.stringify(list);
    const blob = new Blob([jsonString], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'data.json';  // 파일 이름을 설정
    a.click();
    URL.revokeObjectURL(url);


    // const stroageEngine_pop_up = multer.diskStorage({
    //   destination: (req, file, callback) => {
    //     callback(null, path.join(__dirname, '../../public/image'))
    //   },
    
    //   filename: (req, file, callback) => {
    
    //     callback(null, "pop_up" + path.extname(file.originalname));
    //   },
    // });
    
    
    
    // router.post("/admin/management/pop_up", multer({ storage: stroageEngine_pop_up }).single('pop_up_file'), ctrl.procedure.pop_up);


    console.log(list);
    console.log(add_det);
    console.log(typeof list);
  })
  .catch(error => {
      console.error('JSON 파일을 불러오는데 분제가 발생했습니다.', error);
  });

  alert('게시물이 추가됩니다.');
}


function cancel(){
  
}
