//changeBearImage
function bearFunc(){
    document.getElementById("bearA").src="https://cdn.pixabay.com/animation/2022/09/28/13/20/13-20-39-23_512.gif";
}

//toast message
//toast function
function showSuccessToast(){
    toast({
      title: "Thành công!",
      message: "Bạn đã đăng kí thành công tài khoản MS.",
      type: "success",
      duartion: 5000
    });
}
  function showWarningToast(){
    toast({
      title: "Cảnh báo",
      message: "Đăng nhập quá nhiều lần trong một khoảng thời gian ngắn.",
      type: "warning",
      duartion: 5000
    });
}
  function showErrorToast(){
    toast({
      title: "Thất bại!",
      message: "Có lỗi xảy ra, vui lòng liên hệ quản trị viên",
      type: "error",
      duartion: 5000
    });
}
//show toast 
function toast ({title = "", message = "", type = "success", duration = 3000}){
    const main = document.getElementById('toast');
    if(main){
        const toast = document.createElement('div');

        //auto remove toast
        const autoRemoveId = setTimeout(function(){
            main.removeChild(toast);
        }, duration + 2000);

        //remove toast when click
        toast.onclick = function(e){
            if(e.target.closest(".toast__close")){
                main.removeChild(toast);
                clearTimeout(autoRemoveId);
            }
        };

        const icons = {
            success: "fa-solid fa-circle-check",
            infor: "fa-sharp fa-solid fa-circle-info",
            danger: "fa-solid fa-triangle-exclamation",
            error: "fa-sharp fa-solid fa-bug"
        };
        const icon = icons[type];
        const delay = (duration / 1000).toFixed(2);


        toast.classList.add('toast', `toast--${type}`);
        toast.style.animation = `slideInLeft ease .3s, fadeOut linear 1s ${delay}s forwards`;
        toast.innerHTML = `
            <div class="toast__icon">
                <i class="${icon}"></i>
            </div>
            <div class="toast__body">
                <h3 class="toast__title">${title}</h3>
                <p class="toast__msg">${message}</p>
            </div>
            <div class="toast__close">
                <i class="fa-sharp fa-solid fa-circle-xmark"></i>
            </div>
            `;
        main.appendChild(toast);
    }
}
