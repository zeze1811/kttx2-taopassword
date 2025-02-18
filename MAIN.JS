
// Lấy phần tử có ID "password" (là nơi hiển thị mật khẩu)
const passwordBox = document.getElementById("password");
// Thiết lập độ dài mong muốn của mật khẩu
const length = 12; // Sửa lỗi chính tả từ 'lenght' thành 'length'
// Các ký tự có thể sử dụng trong mật khẩu
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbol = "@#$%^&*()_+~|}{[]></-=";
// Kết hợp tất cả các tập ký tự thành một mật khẩu
const allChars = upperCase + lowerCase + number + symbol;

// Hàm để tạo mật khẩu ngẫu nhiên
function createPassword() {
    let password = "";
    // Đảm bảo ít nhất một ký tự từ mỗi tập ký tự được bao gồm  
    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password += number[Math.floor(Math.random() * number.length)];
    password += symbol[Math.floor(Math.random() * symbol.length)];

    // Thêm các ký tự ngẫu nhiên từ tập hợp kết hợp cho đến khi đạt đến độ dài mong muốn
    while (length > password.length) {
        password += allChars[Math.floor(Math.random() * allChars.length)];
    }

    // Trộn mật khẩu để đảm bảo tính ngẫu nhiên
    password = password.split('').sort(() => Math.random() - 0.5).join('');

    // Hiển thị mật khẩu được tạo trong hộp mật khẩu
    passwordBox.value = password;
}

// Hàm sao chép mật khẩu vào clipboard
async function copyPassword() {
    try {
        await navigator.clipboard.writeText(passwordBox.value); // Sử dụng API Clipboard
        alert("Mật khẩu đã được sao chép vào clipboard!");
    } catch (err) {
        console.error("Không thể sao chép mật khẩu: ", err);
    }
