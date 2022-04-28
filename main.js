// Hàm DOM tới #id
function getId(n) {
    return document.getElementById(n);
}

/**
 * Bài 1
 */

/** Mô hình 3 khối
 * - Đầu vào:
 *      - 
 * - Xử lý:
 *      - Điều kiện là S < 10000
 *      - S là tổng cộng dồn của biến n sau mỗi lần nhảy
 * - Đầu ra:
 *      - show kết quả
 */

// Code

getId("subMit").onclick = function() {

    var n = 0;
    var S = 0;

    while (S < 10000) {
        n++;
        S += n;
    }

    getId("ft").innerHTML = "Số nguyên dương nhỏ nhất: " + n;

}

/**
 * Bài 2
 */

/** Mô hình 3 khối
 * - Đầu vào:
 *      - Nhận dữ liệu từ người dùng
 * - Xử lý:
 *      - dùng vòng lặp for
 *      - điều kiện lặp là i <= n
 *      - tích bằng tích nhân với x qua mỗi lần lặp
 *      - tổng bằng tổng cộng tích qua mỗi lần lặp
 * - Đầu ra:
 *      - Show kết quả
 */

// Code

getId("subMit1").onclick = function() {

    var x = getId("a1").value * 1;
    var n = getId("b1").value * 1;
    var tich = 1;
    var tong = 0;

    for (var i = 1; i <= n; i++) {
        tich *= x;
        tong += tich;
    }

    getId("ft1").innerHTML = "Tổng: " + tong;
}

// --------------------------------------------------------

/**
 * Bài 3
 */

/** Mô hình 3 khối
 * - Đầu ra:
 *      - Nhập vào số n
 * - Xử lý:
 *      - điều kiện là i <= n
 *      - biến giaiThua nhân với i qua mỗi lần lặp cho đến khi i = n
 * - Đầu ra:
 *      - Show kết quả
 */

// Code

getId("subMit2").onclick = function() {

    var n = getId("a2").value * 1;
    var giaiThua = 1;

    for (var i = 1; i <= n; i++) {
        giaiThua *= i;
    }

    getId("ft2").innerHTML = "Giai thừa: " + giaiThua;
}

// -----------------------------------------------------

/**
 * Bài 4
 */

/** Mô hình 3 khối
 * - Đầu vào:
 *      - 
 * - Xử lý:
 *      - Tạo biến content
 *      - Điều kiện: i <= 10
 *      - Cho i chạy từ 1 đến 10
 *      - Nếu i chia hết cho 2 thì là chẵn => div màu đỏ => cộng dồn vào content
 *      - Nếu i không chia hết cho 2 thì là lẻ => div màu xanh => cộng dồn vào content
 * - Đầu ra:
 *      - Show kết quả
 */

// Code

getId("subMit3").onclick = function() {

    var content = "";

    for (var i = 1; i <= 10; i++) {
        if (i % 2 == 0) {
            content += "<div class='bg-danger' style='color: white'>Chẵn</div>";
        } else {
            content += "<div class='bg-info' style='color: black'>Lẻ</div>"
        }
    }

    getId("ft3").innerHTML = content;
}