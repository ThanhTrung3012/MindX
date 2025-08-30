const lessons = [
  {
    id: 1,
    title: "Cài đặt và Làm quen Python",
    preview:
      "Cài đặt Python, VS Code, Extension. Tìm hiểu về ngôn ngữ Python và lệnh print() đầu tiên.",
    status: "completed",
    content: {
      description:
        "Buổi học đầu tiên giúp bạn thiết lập môi trường lập trình Python và làm quen với các khái niệm cơ bản.",
      topics: [
        "Cài đặt Python từ python.org",
        "Cài đặt Visual Studio Code",
        "Cài đặt Extension Python",
        "Giới thiệu về ngôn ngữ Python",
        "Lệnh print() và ví dụ thực tế",
        "Biến số và cách sử dụng",
        "Các kiểu dữ liệu cơ bản",
        "Lệnh input() để nhập dữ liệu",
      ],
      code: `# Cài đặt Visual Studio Code và Python
# Cài đặt Python : https://www.python.org/downloads/
# Cài đặt Visual Studio Code : https://code.visualstudio.com/download
# Cài đặt Extension Python trên Visual Studio Code
# Python : là 1 ngôn ngữ lập trình bậc cao, được thiết kế với mục tiêu dễ đọc, dễ viết, và dễ học.
# Python được ứng dụng để viết Web, AI, phát triển game.

print("Hello")
print(5)
print(51514*245124)
print(5+ 3)
print("5 + 3")
# Print() : In giá trị ra màn hình
# VD1 : In ra bảng cửu chương 2 
print("Bảng cửu chương 2 : ")
print("2 x 1 = ", 2 * 1)
print("2 x 2 = ", 2*2)
print("2 x 3 = ", 2*3)
print("2 x 4 = ", 2*4)
print("2 x 5 = ", 2*5)
print("2 x 6 = ", 2*6)
print("2 x 7 = ", 2*7)
print("2 x 8 = ", 2*8)
print("2 x 9 = ", 2*9)
print("2 x 10 = ", 2*10)

# Biến số : là vùng nhớ dùng để lưu trữ các giá trị, giá trị đó có thể thay đổi được.
# Cú pháp : < tên biến > = < giá trị > VD : score = 10, name = PTB28
# Trong đó : tên biến là tên do chúng ta tự đặt , = là gán. 
# Ví dụ : x = 2, name = PTB
x = "Hôm nay là Chủ Nhật"
print(x)
name = "PTB28"
print(name)

# Kiểu dữ liệu trong python : string ( dạng văn bản, chuỗi , kí tự), int ( số nguyên)
# float ( số thực / số thập phân ), boolean ( đúng sai )
# string ( văn bản, chuỗi, kí tự ) : luôn nằm trong dấu nháy kép ""
z = "Trung"
z1 = "4"
# int ( số nguyên )
x1 = 5
x2 = -2
# float ( số thập phân, số thực )
x3 = 5.7
x4 = 8.5
# boolean ( Đúng sai )
print(5<4) 
print(6>7)

# input : Là câu lệnh cho phép người dùng nhập dữ liệu từ bàn phím và trả về 
# giá trị mà người dùng nhập vào
# cú pháp : input()
#VD1 : 
number = input("Hãy nhập 1 số mà bạn yêu thích : ")
print(number)
#VD2 : 
ten = input("Hãy nhập tên của bạn : ")
tuoi = input("Hãy nhập tuổi của bạn : ")
print("Tên của bạn là : ",ten)
print("Tuổi của bạn là : ",tuoi)
`,

      homework: [
        "Viết chương trình nhập tuổi của bạn, in ra màn hình sau 10 năm, tuổi của bạn là bao nhiêu",
        "Viết chương trình quy đổi tiền, với 1$ = 25.000 vnd, hãy quy đổi 2000$ và in ra màn hình",
      ],
    },
  },
  {
    id: 2,
    title: "Toán tử và Biểu thức trong Python",
    preview:
      "Toán tử quan hệ (==, !=, >, <), toán tử logic (and, or, not), toán tử số học (+, -, *, /, %, //, **).",
    status: "current",
    content: {
      description:
        "Buổi học về các toán tử cơ bản trong Python: quan hệ, logic và số học. Học cách so sánh giá trị và tính toán với các phép toán khác nhau.",
      topics: [
        "Toán tử quan hệ: ==, !=, >, <, >=, <=",
        "Toán tử logic: and, or, not",
        "Toán tử số học: +, -, *, /, **, %, //",
        "Ứng dụng trong tính toán thực tế",
        "Tách và tính tổng các chữ số",
        "Tính diện tích, chu vi hình chữ nhật",
        "Tính trung bình cộng và tuổi",
      ],
      code: `# Toán tử quan hệ : Các phép so sánh và trả về kết quả True hoặc False
# - So sánh bằng ( == ) : Kiểm tra xem 2 gía trị có bằng nhau không:
print(7 == 7*1) 
# - So sánh khác ( != ) : Kiểm tra xem 2 giá trị có khác nhau không 
print(7 != 7 )
# - So sánh > , >= : Kiểm tra xem 2 giá trị có lớn hơn nhau hay không
print(2>1) 
# - So sánh < , <= : Kiểm tra xem 2 giá trị có nhỏ hơn nhau hay không 
print(2<1) 

# Toán tử logic 
# - and ( và ) : Kiểm tra xem cả 2 biểu thức con đều đúng thì biểu thức cha đúng
# - or ( hoặc ) : Kiểm tra xem ít nhất 1 trong 2 biểu thức đúng thì biểu thức cha đúng
# - not ( phủ định ) : Đảo ngược giá trị của 1 biểu thức
# Ví dụ : and (true true => true , true false => false , false true => false )
# Ví dụ : or ( true true => true , true false => true, false true => true )
# Ví dụ : not (True => False , False => True)
# Bài tập : Cho các lệnh sau , và dự đoán giá trị của các biến logic : a,b,c
# x = 10, y = 6, z = 8.  
# a = x < 12 and z > 6  => a = True and True => True
# b = x > 15 or y < 8  => b = False or True => True
# c = not b => c = not True => False

# Toán tử số học :  + - * / ** % ( chia lấy dư ), // ( chia lấy thương).   
a = 7
b = 3
print(a+b) #10
print(a-b) #4
print(a * b) #21
print(a / b) #2.3333
print( a**b ) #343
print(a%b) #7%3 == 1
print(a//b) # 7//3 == 2

# Bài tập 1 :  Viết chương trình tính tổng 2 số a và b 
a = float(input("Số a : "))
b = float(input("Số b : "))
print(a+b)

# Bài tập 2  : Viết chương trình tính tích 2 số a và b 
a = float(input("A = "))
b = float(input("B = "))
print(a*b)

# Bài tập 3 : Tính diện tích và chu vi hình chữ nhật
chieu_rong = float(input("Chiều rộng : "))
chieu_dai = float(input("Chiều dài : "))
CV = (chieu_rong + chieu_dai) * 2
DT = chieu_rong * chieu_dai
print("Chu vi hình chữ nhật là : ", CV)
print("Diện tích hình chữ nhật là : ", DT)

# Bài tập 4 : Tính trung bình cộng của 3 số a,b,c
a = float(input("Số a : "))
b = float(input("Số b : "))
c = float(input("Số c : "))
TBC = (a + b + c) / 3
print("Trung bình cộng của 3 số là : ", TBC)

# Bài tập 5 : Tính tuổi từ năm sinh, nhập vào năm sinh và in ra tuổi hiện tại
nam_sinh = int(input("Nhập năm sinh : "))
nam_hien_tai = int(input("Nhập năm hiện tại : "))
tuoi = nam_hien_tai - nam_sinh
print("Tuổi hiện tại là : ", tuoi)

# Bài tập 6 : Tính tổng các chữ số của số có 3 chữ số : 123 ( 1 + 2 + 3 = 6)
# + - * / ** % //
so = float(input("Nhập số có 3 chữ số : ")) # Giả sử nhập 123
tram = so // 100  #1   vì 123 // 100 = 1
# Lưu ý : // là phép chia lấy thương, % là phép chia lấy dư
chuc = (so%100) // 10 #2 # 123 % 100 = 23, 23 // 10 = 2
# Lưu ý : % là phép chia lấy dư, // là phép chia lấy thương
don_vi = so % 10 #3 # 123 % 10 = 3
tong = tram + chuc + don_vi #1 + 2 + 3 = 6
print("Tổng các chữ số là :", tong)`,

      homework: [
        "Viết chương trình nhập 2 số và so sánh xem số nào lớn hơn",
        "Tạo chương trình tính BMI (cân nặng / chiều cao²)",
        "Viết chương trình tính tổng các chữ số của một số có 4 chữ số",
        "Tạo máy tính đơn giản với các phép toán cơ bản",
        "Viết chương trình kiểm tra một năm có phải năm nhuận không (chia hết cho 4)",
      ],
    },
  },
  {
    id: 3,
    title: "Cấu trúc điều kiện IF/ELSE",
    preview:
      "Học cấu trúc if, if-else, if-elif-else để tạo logic điều kiện. Thực hành với các bài tập phân loại và so sánh.",
    status: "pending",
    content: {
      description:
        "Buổi học về cấu trúc điều kiện trong Python. Tìm hiểu cách sử dụng if, else, elif để tạo logic phân nhánh cho chương trình.",
      topics: [
        "Cấu trúc if đơn giản",
        "Cấu trúc if-else đầy đủ",
        "Cấu trúc if-elif-else",
        "Kiểm tra số dương/âm, chẵn/lẻ",
        "So sánh và tìm số lớn nhất/nhỏ nhất",
        "Phân loại học sinh theo điểm",
        "Kiểm tra loại tam giác",
      ],
      code: `# 1. Cấu trúc lệnh if trong python.
# - Cú pháp : 
# if < điều kiện > : 
#     <Khối lệnh thực thi>

# VD : if (trời mưa ):
#         <nghỉ học>

# 2. Cấu trúc lệnh if ở dạng đầy đủ : 
# - Cú pháp : 
# if < điều kiện > : 
#     <khối lệnh thực thi>
# else : 
#     < Khối lệnh thực thi>

# VD : if ( trời mưa ) :
#     < nghỉ học >
# else : 
#     < đi học >

# 3. Cấu trúc if -elif - else
# if <điều kiện 1 > : 
#     <Khối lệnh thực thi >
# elif < điều kiện 2 > : 
#     <Khối lệnh thực thi >
# elif < điều kiện 3 > :
#     <Khối lệnh thực thi>
#     .....
# else : 
#     <Khối lệnh thực thi>

#BT1 : Viết chương trình nhập 1 số từ bàn phím, kiểm tra số đó có phải số dương 
# hay không? Nếu đúng thì in ra "ĐÚNG", nếu sai in ra "SAI"
number = int(input("Nhập một số: "))
if number > 0:
    print("ĐÚNG")
else:
    print("SAI")

#BT2 : Viết chương trình nhập từ bàn phím , kiểm tra độ tuổi phù hợp lái xe, nếu
# trên 18 tuổi thì in ra " Phù hợp", nếu dưới 18 tuổi thì in ra "Không phù hợp"    
age = int(input("Nhập độ tuổi: "))
if age >= 18:
    print("Phù hợp")
else:
    print("Không phù hợp")

#BT3 : Viết chương trình nhập từ bàn phím 1 số nguyên, nếu số đó là số chẵn thì in ra
# "Số chẵn", nếu là số lẻ thì in ra "Số lẻ" %
#VD 7/ 3 = 2.333, 7 % 3 = 1 ( % chia lấy dư ) , 7 // 3 = 2 ( // chia lấy phần nguyên )
number1 = int(input("Nhập một số nguyên: "))
if number1 % 2 == 0:
    print("Số chẵn")
else:
    print("Số lẻ")

#BT4 : Viết chương trình nhập vào 2 số , so sánh 2 số đó
#  ( lớn hơn , nhỏ hơn, bằng nhau )
number1 = float(input("Nhập số thứ nhất: "))
number2 = float(input("Nhập số thứ hai: "))
if number1 > number2:
    print ( " Số thứ thứ nhất lớn hơn số thứ hai")
elif number1 < number2:
    print ( " Số thứ nhất nhỏ hơn số thứ hai")
else:
    print ( " Hai số bằng nhau")

#BT5 : Viết chương trình nhập 3 số , kiểm tra và tìm kiếm số lớn nhất trong 3 số đó
a = float(input("Nhập số thứ nhất: "))
b = float(input("Nhập số thứ hai: "))
c = float(input("Nhập số thứ ba: "))
if a >= b and a >= c :
    print("Số lớn nhất là:", a)
elif b >= a and b >= c :
    print("Số lớn nhất là:", b)
else:
    print("Số lớn nhất là:", c)
`,
      homework: [
        "Viết chương trình nhập 3 số, kiểm tra và tìm kiếm số nhỏ nhất trong 3 số đó",
        "Viết chương trình nhập điểm 3 môn Toán Văn Anh. Tính điểm trung bình và xếp loại : Điểm trung bình >=8 ( Giỏi ), >=6.5 ( Khá ), >=5 ( Trung bình ), <5 ( Yếu )",
        "Viết chương trình nhập 3 cạnh của tam giác và kiểm tra loại tam giác đó ( Tam giác đều, Tam giác cân, Tam giác vuông, Tam giác thường ). Nếu không phải tam giác thì in ra (Không phải tam giác) .Nếu là tam giác Tam giác đều thì in ra ( Tam giác đều ). Nếu là tam giác Tam giác cân thì in ra ( Tam giác cân ) . Nếu là tam giác Tam giác vuông thì in ra  ( Tam giác vuông ). Nếu là tam giác thường thì in ra ( Tam giác thường )." ,
      ],
    },
  },
  {
    id: 4,
    title: "Tổng kết kiến thức Python cơ bản",
    preview:
      "Tổng hợp lại các khái niệm quan trọng: print, biến, kiểu dữ liệu, toán tử, cấu trúc điều kiện, và bài tập thực hành.",
    status: "pending",
    content: {
      description:
        "Tổng kết lại các kiến thức nền tảng Python: cách in ra màn hình, khai báo biến, các kiểu dữ liệu, toán tử, comment, cấu trúc điều kiện if-else, và các bài tập ứng dụng thực tế.",
      topics: [
        "Lệnh print() và ví dụ",
        "Biến và cú pháp khai báo",
        "Các kiểu dữ liệu: int, float, string, boolean",
        "Comment trong Python",
        "Các phép toán tử số học, quan hệ, logic",
        "Cấu trúc điều kiện if, if-else, if-elif-else",
      ],
      code: '- print() : In ra màn hình.\nVD : print(5), print("PTB28")\n\n- Biến : Là vùng nhớ để lưu trữ các giá trị, có thể thay đổi.\n+ Cú pháp : <tên biến> = <giá trị>\nVD : x = 5, name = "PTB28"\n\n- Các kiểu dữ liệu trong python :\n+ int : Dữ liệu số nguyên. VD: -1, -2, 1, 2, 3\n+ float : Dữ liệu số thập phân. VD: 8.5, 6.5\n+ string : Dữ liệu dạng chuỗi, kí tự, văn bản. VD: "PTB28"\n+ boolean : Dữ liệu True/False. VD: 5 > 4, 3 > 5\n\n- Comment trong Python:\n+ 1 dòng: sử dụng dấu #\n+ Nhiều dòng: bôi đen rồi Ctrl + /\n\n- Các phép toán tử: +, -, *, /, //, %, **\n- Toán tử quan hệ: ==, !=, >=, >, <=, <\n- Toán tử logic: and, or, not\n\n- Cấu trúc if-else, if-elif-else\nif <điều kiện>:\n    <khối lệnh>\nelse:\n    <khối lệnh>\nif <điều kiện>:\n    <khối lệnh>\nelif <điều kiện>:\n    <khối lệnh>\nelse:\n    <khối lệnh>\n\n# Bài tập 1: Tính chỉ số BMI\ncan_nang = float(input("Nhập cân nặng (kg): "))\nchieu_cao = float(input("Nhập chiều cao (m): "))\nBMI = can_nang / (chieu_cao * chieu_cao)\nif BMI < 18.5:\n    print("Thiếu cân")\nelif BMI < 24.9:\n    print("Bình thường")\nelif BMI < 29.9:\n    print("Thừa cân")\nelse:\n    print("Béo phì")\n\n# Bài tập 2: Giá trị tuyệt đối\nn = float(input("Nhập số: "))\nprint(abs(n))\n\n# Bài tập 3: Tính tiền cước phút gọi\nm = int(input("Nhập số phút gọi: "))\ntien = 0\nif m <= 50:\n    tien = m * 600\nelif m <= 200:\n    tien = 50 * 600 + (m - 50) * 400\nelse:\n    tien = 50 * 600 + 150 * 400 + (m - 200) * 200\nprint("Tiền cước:", tien)',
      homework: [
        "Xếp loại sinh viên theo thang điểm 4 (0-4).",
        "Tính chỉ số BMI cơ thể và phân loại với công thức ( cân nặng / ( chiều cao * chiều cao )). Nếu BMI < 18.5 thì in ra ( Thiếu cân )  . Nếu 18.5 <= BMI < 24.9 thì in ra ( Bình thường ) . Nếu 25 <= BMI < 29.9 thì in ra ( Thừa cân ) . Nếu BMI >= 30 thì in ra ( Béo phì ) .",
        "Viết chương trình nhập số nguyên, in ra giá trị tuyệt đối của số đó.",
        "Nhập vào số phút gọi ( m ) ( số nguyên, đơn vị : phút ). Tính tiền cước theo biểu giá bâc thang sau và in ra kết quả : 50 phút đầu : 600 đồng / phút. Từ phút thứ 51 đến phút thứ 200 : 400 đồng / phút. Từ phút thứ 201 trở đi : 200 đồng / phút",
      ],
    },
  },
  {
    id: 5,
    title: "Bài kiểm tra đánh giá lần 1",
    preview: "Kiểm tra toàn bộ kiến thức đã học từ buổi 1 - 4",
    status: "pending",
    content: {
      description: "CheckPoint1.",
      topics: [
        "Bài 1 : Viết chương trình kiểm tra số lớn hơn trong 2 số a và b",
        "Bài 2 : Viết chương trình kiểm tra số nguyên chẵn lẻ",
        "Bài 3 : Viết chương trình kiểm tra số có chia hết cho cả 3 và 5 không?",
        "Bài 4 : Viết chương trình tính luỹ thừa 2 số a và b",
        "Bài 5 :Viết chương trình bằng ngôn ngữ Python để tính tiền điện của một hộ gia đình trong 1 tháng theo số điện tiêu thụ (đơn vị: kWh), với cách tính theo bậc thang như sau:",

        "Bậc điện    Số điện tiêu thụ (kWh)          Giá tiền (đồng/kWh)",
        "Bậc 1           0 – 50                      1.678    ",
        "Bậc 2           51 – 100                    1.734      ",
        "Bậc 3           101 – 200                   2.014      ",
        "Bậc 4           201 – 300                   2.536 ",
        "Bậc 5           301 – 400                   2.834 ",
        "Bậc 6           Trên 400                    2.927",
        "Kiểm tra kết quá : nhập 350 thì giá tiền cần phải trả là khoảng 767.300",
      ],
    },
  },
  {
    id: 6,
    title: "Vòng lặp hữu hạn",
    preview: "Tìm hiểu cú pháp for, range và các bài tập thực hành vòng lặp.",
    status: "pending",
    content: {
      description:
        "Buổi học về vòng lặp hữu hạn trong Python: sử dụng for, range để lặp qua các giá trị, thực hành các bài toán tổng, số chẵn/lẻ, bảng cửu chương.",
      topics: [
        "Cú pháp for i in range(start, stop, step)",
        "Ý nghĩa các tham số: start, stop, step",
        "Ví dụ về range()",
        "In dãy số, bảng cửu chương bằng vòng lặp",
        "Tính tổng, liệt kê số chẵn/lẻ, số chia hết cho 3 hoặc 5",
      ],
      code: `# Vòng lặp hữu hạn\n# Cú pháp : for i in range(start, stop, step) :\n#             < khối lệnh lặp >\n# start : giá trị bắt đầu (mặc định là 0)\n# stop : giá trị dừng (không bao gồm giá trị này)\n# step : bước nhảy (mặc định là 1)\n\n# xác định khoảng range()\n# ví dụ : range(0,5,1) = 0, 1, 2, 3, 4\n#range(0,10,1) = 0, 1, 2, 3, 4, 5, 6, 7, 8, 9\n#range(0,10) = 0, 1, 2, 3, 4, 5, 6, 7, 8, 9\n#range(0,10,2) = 0, 2, 4, 6, 8\n\n#ví dụ: In ra màn hình từ 0-5 sử dụng vòng lặp for\nfor i in range(0, 6) :\n   print(i) # 0 1 2 3 4 5\n#ví dụ : in ra màn hình từ số 3-7 sử dụng vòng lặp for\nfor i in range(3, 8) :\n   print(i) # 3 4 5 6 7\n#ví dụ : in ra bảng cửu chương 2 sử dụng vòng lặp for\nfor i in range(1, 11) :\n   print(\"2 x\", i, \"=\", 2*i) # 2 x 1 = 2 ... 2 x 10 = 20\n\n# Bài tập : Viết chương trình tính tổng các số từ 1 đến 100 sử dụng vòng lặp for\n# Kết quả : 5050\ntotal = 0\nfor i in range(1, 101) :\n   total = total + i ;\nprint(\"Tổng các số từ 1 đến 100 là :\", total) # Tổng các số từ 1 đến 100 là : 5050\n\n# Bài tập 2 : Viết chương trình in ra các số chẵn từ 1 đến 20 .\nfor i in range(2,21,2) :\n   print(i) # 2 4 6 8 10 12 14 16 18 20\n# Bài tập 3 : Viết chương trình in ra các số lẻ từ 1 đến 20 .\nfor i in range(1,21,2) :\n   print(i) # 1 3 5 7 9 11 13 15 17 19\n# Bài tập 4 : Viết chương trình tính tổng các số chia hết cho 3 hoặc 5 từ 1 đến 100 .\ntotal = 0\nfor i in range(1, 101) :\n   if i % 3 == 0 or i % 5 == 0 :\n       total = total + i ;\nprint(\"Tổng các số chia hết cho 3 hoặc 5 từ 1 đến 100 là :\", total) # Tổng các số chia hết cho 3 hoặc 5 từ 1 đến 100 là : 2418\n# Bài tập 5 : Viết chương trình tính tổng các số chẵn từ 1 đến n\nn = int(input(\"Nhập số n : \\n\"))\ntotal = 0\nfor i in range(2, n+1, 2) :\n   total = total + i ;\nprint(\"Tổng các số chẵn từ 1 đến\", n, \"là :\", total)\n\nrange(2,9,1) #2,3,4,5,6,7,8\nrange(1,12,2) #1,3,5,7,9,11`,
      homework: [
        "Viết chương trình in ra các số từ 1 đến 10 sử dụng vòng lặp for",
        "Viết chương trình tính tổng các số lẻ từ 1 đến 50",
        "Viết chương trình in ra bảng cửu chương 5",
        "Viết chương trình nhập n, in ra các số chia hết cho 7 từ 1 đến n",
        "Viết chương trình nhập n, tính tổng các số chia hết cho 2 hoặc 3 từ 1 đến n",
      ],
    },
  },
  {
    id: 7,
    title: "Vòng lặp vô hạn : while()",
    preview: "Tìm hiểu cú pháp while, ứng dụng tính tổng, liệt kê số, xử lý số nguyên.",
    status: "pending",
    content: {
      description:
        "Buổi học về vòng lặp while trong Python: sử dụng while để lặp vô hạn hoặc có điều kiện, thực hành các bài toán tổng, số chẵn, xử lý số nguyên.",
      topics: [
        "Cú pháp while <điều kiện>: <khối lệnh lặp>",
        "So sánh for và while",
        "Ứng dụng while để tính tổng, liệt kê số chẵn/lẻ",
        "Tính tổng các chữ số của số nguyên bằng while",
      ],
      code: `# Vòng lặp vô hạn : while()\n# Cú pháp : while <điều kiện>:\n#     <Khối lệnh lặp>\n\n# Ví dụ 1: Sử dụng vòng lặp while để in ra các số từ 1 đến 10\ni = 1\nwhile i <= 10:\n   print(i)\n   i = i + 1;\n# Bài tập 1 : Tính tổng các số từ 1 đến 100\ni = 1\ntong = 0\nwhile i <= 100:\n   tong = tong + i\n   i = i + 1\nprint(\"Tổng các số từ 1 đến 100 là:\", tong)\n# Bài tập 2 : In ra các số chẵn từ 1 đến 20\ni = 1\nwhile i <= 20:\n   if i % 2 == 0:\n       print(i)\n   i = i + 1\n# Bài tập 3 : Tính tổng các chữ số của 1 số nguyên\nnumber = 123\ntotal = 0\nwhile number != 0  :\n   so_cuoi = number % 10 # lấy số 3\n   total = total + so_cuoi # cộng dồn vào biến total\n   number = number // 10 # bỏ số 3 đi\nprint(\"Tổng các chữ số là:\", total)`,
      homework: [
        "Viết chương trình sử dụng while để in ra các số từ 1 đến n",
        "Viết chương trình sử dụng while để tính tổng các số lẻ từ 1 đến 50",
        "Viết chương trình sử dụng while để in ra bảng cửu chương 7",
        "Viết chương trình nhập n, sử dụng while để in ra các số chia hết cho 5 từ 1 đến n",
        "Viết chương trình nhập n, sử dụng while để tính tổng các số chia hết cho 2 hoặc 3 từ 1 đến n",
      ],
    },
  },
  {
    id: 8,
    title: "Danh sách (List) trong Python",
    preview: "Tìm hiểu về cấu trúc danh sách, các thao tác thêm/xoá/sắp xếp và ứng dụng thực tế.",
    status: "pending",
    content: {
      description:
        "Buổi học về danh sách (list) trong Python: cách khai báo, truy cập, cập nhật, duyệt, thêm/xoá/sắp xếp phần tử và các bài tập thực hành.",
      topics: [
        "Khai báo danh sách (list)",
        "Truy cập phần tử theo chỉ số",
        "Cập nhật giá trị phần tử",
        "Duyệt danh sách bằng for",
        "Các thao tác: append, insert, extend, pop, remove, reverse, sort",
      ],
      code: `#Danh sách : là một tập hợp có thứ tự các phẩn tử, cta có thể truy cập vào từng phần tử của danh sách\n# Danh sách có thể chứa nhiều giá trị và các giá trị này có thể là bất kỳ kiểu dữ liệu nào.\n# Cú pháp :\n# <tên danh sách> = [<giá trị 1>, <giá trị 2>,.....]\n# Trong đó : tên danh sách cũng cần phải tuân thủ các quy tắc đặt tên biến, <giá tri> là các kiểu dữ liệu khác\n# nhau như số thực ( float), số nguyên ( int ), chuỗi kí tư ( string ), boolean.\n# ví dụ : name = [\"PTB21\", 2.5, True, 10]\n# Chỉ số phẩn tử trong danh sách : Chỉ số là 1 giá trị nguyên dùng để xác định vị trí của ptu. Bắt đầu từ 0\n#VD1 :\nnumbers = [1,2,3,4,5,6,7,8,9,10]\n# Lấy giá trị từ trong danh sách\nprint(numbers[4])\nprint(numbers[-1])\n# cập nhật lại giá trị trong danh sách\nnumbers1 = [1,3,5,7,9]\nnumbers1[2] = 10\nprint(numbers1)\n# Len : dộ dài : đếm được số lượng ký tự trong một chuỗi ký tự\nname = \"John\"\nlenght = len(name)\nprint(lenght)\n\nlenght1 = len(numbers1)\nprint(lenght1)\n\n# Duyệt phần tử\nA = [2,4,6,8]\nfor i in range(len(A)) :\n   print(A[i])\n# Các thao tác với danh sách\n# 1. Thêm phần tử vào trong líst( danh sách)  : append()\na = [1,2,3]\na.append(4)\nprint(a)\n# insert() : Thêm các phần tử tại vị trí chỉ định. cú pháp : <tên danh sách>.insert(<chíoos>,<giá trị mới>\nb = [1,2,4,6,7]\nb.insert(2,3)\nprint(b)\n# Nối danh sách : extend()\nc = [4,5,6]\nc.extend([7,8])\nprint(c)\n# Xoá đi vị trí thứ i ( chỉ số ) trong 1 danh sách : pop()\nd = [1,2,3,4,5]\nd.pop(2)\nprint(d)\n# Xoá giá trị trong danh sách, xoá phần trử đầu tiên của list nếu có 2 số giống nhau\ne = [1,1,2,3,4]\ne.remove(1)\nprint(e)\n# Đảo ngược danh sách : reverse()\nf = [1,2,3,4]\nf.reverse()\nprint(f)\n# Sắp xếp : sort()\ng = [5,1,9,7,2]\ng.sort()\nprint(g)\n# BT1 : Sắp xếp một danh sách từ nhỏ đến lớn : numbers2 = [4,1,8,4,6,3,12,7]\nnumbers2 = [4,1,8,4,6,3,12,7]\nnumbers2.sort()\nprint(\"Sorted number : \",numbers2)\n# BT2 : Sắp xếp 1 danh sách chuỗi theo thứ tự từ điển : fruít = [\"banana\",\"apple\",\"cherry\",\"orange\"]\nfruits = [\"banana\",\"apple\",\"cherry\",\"orange\"]\nfruits.sort()\nprint(\"Sorted number : \",fruits)\n# BT3 : Xoá 1 phần tử cụ thể trong danh sách : numbers3 = [1,3,5,7] ( xoá số 3)\nnumbers3 = [1,3,5,7]\nnumbers3.remove(3)\nprint(\"Danh sách sau khi xoá số 3 : \",numbers3)\n# BT4 : Xoá tất cả các phần tử có giá trị cụ  thể từ danh sách : numbers4 = [1,2,3,4,5,3,3]\nnumbers4 = [1,2,3,4,5,3,3]\nnew = []\nfor i in numbers4:\n   if i !=3 :\n       new.append(i)\nnumbers4 = new\nprint(numbers4)\n# BT5 : Thêm 1 phần tử vào cuối danh sách : numbers5 = [0,5,10,15]\nnumbers5 = [0,5,10,15]\nnumbers5.append(6)\nprint(numbers5)`,
      homework: [
        "Khai báo một danh sách gồm 5 số nguyên bất kỳ và in ra từng phần tử",
        "Cập nhật giá trị phần tử thứ 3 trong danh sách thành 100",
        "Tính tổng các phần tử trong danh sách số nguyên",
        "Sắp xếp danh sách chuỗi theo thứ tự từ điển",
        "Xoá tất cả các phần tử có giá trị cụ thể khỏi danh sách",
      ],
    },
  },
  {
    id: 9,
    title: "Bài kiểm tra đánh giá lần 2",
    preview: "Nhập n, tính tổng các số nguyên tố từ 1 đến n.",
    status: "pending",
    content: {
      description:
        "Bài tập: Nhập n, tính tổng các số nguyên tố từ 1 đến n bằng vòng lặp và kiểm tra số nguyên tố.",
      topics: [
        "Kiểm tra số nguyên tố bằng vòng lặp",
        "Tính tổng các số nguyên tố từ 1 đến n",
        "Giải thích từng bước thuật toán",
        "Ví dụ minh hoạ kết quả",
      ],
      code: `n = int(input(\"Nhập n: \\"))\ntong = 0\ni = 2   # bắt đầu từ 2 vì 1 không phải số nguyên tố\n\nwhile i <= n:\n    # Kiểm tra i có phải số nguyên tố không\n    j = 2\n    la_nguyen_to = True\n    while j <= i // 2:\n        if i % j == 0:\n            la_nguyen_to = False\n            break\n        j += 1\n\n    if la_nguyen_to:   # nếu i là số nguyên tố thì cộng vào tổng\n        tong += i\n\n    i += 1\n\nprint(\"Tổng các số nguyên tố từ 1 đến\", n, \"là:\", tong)\n\n# 🔹 Giải thích từng bước\n# Nhập n.\n# Dùng biến i để duyệt từ 2 đến n.\n# Với mỗi số i, kiểm tra có số nào chia hết từ 2 đến i // 2 không:\n# Nếu có → i không phải số nguyên tố.\n# Nếu không → i là số nguyên tố → cộng vào tong.\n# In tổng ra màn hình.\n\n# ✅ Ví dụ chạy:\n# Nhập n = 10 → các số nguyên tố là 2, 3, 5, 7 → Tổng = 17.`,
      homework: [
        "Viết chương trình nhập n, in ra tất cả các số nguyên tố từ 1 đến n",
        "Viết chương trình nhập n, kiểm tra n có phải số nguyên tố không",
        "Viết chương trình nhập n, đếm số lượng số nguyên tố từ 1 đến n",
        "Viết chương trình nhập n, tính tổng các số chẵn từ 1 đến n",
      ],
    },
  },
  {
    id: 10,
    title: "Xâu (chuỗi) ký tự",
    preview: "Class, Object, Inheritance - những khái niệm cơ bản của OOP.",
    status: "pending",
  },
  {
    id: 11,
    title: "Hàm : Chia nhỏ công việc",
    preview: "Import modules, tạo package và quản lý thư viện.",
    status: "pending",
  },
  {
    id: 12,
    title: "Hàm có giá trị trả về",
    preview: "Gọi API, xử lý dữ liệu JSON và HTTP requests.",
    status: "pending",
  },
  {
    id: 13,
    title: "Tổng kết kiến thức: Hàm Python cơ bản",
    preview: "Tổng hợp các hàm kiểm tra, tính toán, xử lý danh sách và chuỗi.",
    status: "pending",
    content: {
      description:
        "Tổng hợp các hàm Python cơ bản: kiểm tra chẵn/lẻ, số lớn hơn, bình phương, chia hết, chu vi/diện tích hình tròn, tổng, đếm ký tự, tìm max/min, kiểm tra số âm, trung bình cộng, tổng chẵn/lẻ, tìm ước, tổng ước, sắp xếp, lọc số chẵn, đếm số từ.",
      topics: [
        "Viết hàm kiểm tra số chẵn/lẻ",
        "Viết hàm trả về số lớn hơn trong hai số",
        "Viết hàm tính bình phương của một số",
        "Viết hàm kiểm tra số chia hết cho 3 và 5",
        "Viết hàm tính chu vi và diện tích hình tròn",
        "Viết hàm tính tổng các số từ 1 đến n",
        "Viết hàm đếm số ký tự trong chuỗi",
        "Viết hàm tìm số lớn nhất trong 3 số",
        "Viết hàm kiểm tra một số có phải số âm hay không",
        "Viết hàm tính trung bình cộng của danh sách số",
        "Viết hàm tìm số nhỏ nhất trong danh sách",
        "Viết hàm tính tổng các số chẵn trong danh sách",
        "Viết hàm tính tổng các số lẻ trong danh sách",
        "Viết hàm tìm tất cả các ước của một số",
        "Viết hàm tính tổng các ước của một số",
        "Viết hàm sắp xếp danh sách tăng dần",
        "Viết hàm lọc ra các số chẵn từ danh sách",
        "Viết hàm đếm số từ trong chuỗi",
      ],
  code: `# Viết hàm kiểm tra số chẵn/lẻ.\ndef chan_le(n):\n   if n % 2 == 0:\n       return \"Chẵn\"\n   else:\n       return \"Lẻ\"\nprint(chan_le(4))\n\n# Viết hàm trả về số lớn hơn trong hai số.\ndef so_lon_hon(a, b):\n   if a > b:\n       return a\n   else:\n       return b\nprint(so_lon_hon(10, 5)) \n\n# Viết hàm tính bình phương của một số.\ndef binh_phuong(x):\n   return x ** 2\nprint(binh_phuong(3))\n\n# Viết hàm kiểm tra số chia hết cho 3 và 5.\ndef chia_het_3_va_5(n):\n   if n % 3 == 0 and n % 5 == 0:\n       return \"Đúng\"\n   else:\n       return \"Sai\"\nprint(chia_het_3_va_5(15))\n\n# Viết hàm tính chu vi và diện tích hình tròn.\ndef tinh_hinh_tron(r):\n   pi = 3.14\n   chu_vi = 2 * pi * r\n   dien_tich = pi * r * r\n   return chu_vi, dien_tich\nban_kinh = float(input(\"Nhập bán kính hình tròn: \\"))\nchu_vi, dien_tich = tinh_hinh_tron(ban_kinh)\nprint(\"Chu vi:\", chu_vi)\nprint(\"Diện tích:\", dien_tich)\n\n# Viết hàm tính tổng các số từ 1 đến n.\ndef tong_tu_1_den_n(n):\n   return n * (n + 1) // 2\nprint(tong_tu_1_den_n(5))\n\n# Viết hàm đếm số ký tự trong chuỗi.\ndef dem_ky_tu(s):\n   s = s.replace(\" \", \"\")\n   return len(s)\nprint(dem_ky_tu(\"Hello World\")) \n\n# Viết hàm tìm số lớn nhất trong 3 số.\ndef tim_max(a, b, c):\n   max_so = a\n   if b > max_so:\n       max_so = b\n   if c > max_so:\n       max_so = c\n   return max_so\nprint(tim_max(3,5,6))\n\n# Viết hàm kiểm tra một số có phải số âm hay không.\ndef kiem_tra_so_am(n):\n   if n < 0:\n       return \"là số âm\"\n   else:\n       return \"không phải là số âm\"\nprint(kiem_tra_so_am(5))\n\n# Viết hàm tính trung bình cộng của danh sách số.\ndef tinh_trung_binh(ds):\n   if len(ds) == 0:\n       return 0  # Tránh chia cho 0\n   tong = 0\n   dem = 0\n   for so in ds:\n       tong += so\n       dem += 1\n   return tong / dem\ndanh_sach = [4, 7, 10, 3]\nprint(\"Trung bình cộng là:\", tinh_trung_binh(danh_sach))\n\n# 1. Viết hàm tìm số nhỏ nhất trong danh sách.\ndef tim_so_nho_nhat(ds):\n   if len(ds) == 0:\n       return None  # Tránh lỗi khi danh sách rỗng\n   nho_nhat = ds[0]  # Giả sử phần tử đầu tiên là nhỏ nhất\n   for so in ds:\n       if so < nho_nhat:\n           nho_nhat = so\n   return nho_nhat\ndanh_sach = [5, 2, 9, -3, 0]\nprint(\"Số nhỏ nhất là:\", tim_so_nho_nhat(danh_sach))\n\n# 2. Viết hàm tính tổng các số chẵn trong danh sách.\ndef tinh_tong_chan(ds):\n   tong = 0\n   for so in ds:\n       if so % 2 == 0:\n           tong += so\n   return tong\ndanh_sach = [1, 2, 3, 4, 5, 6]\nprint(\"Tổng các số chẵn là:\", tinh_tong_chan(danh_sach))\n\n# 3. Viết hàm tính tổng các số lẻ trong danh sách.\ndef tinh_tong_so_le(danh_sach):\n   tong = 0\n   for so in danh_sach:\n       if so % 2 != 0:  # Kiểm tra nếu là số lẻ\n           tong += so\n   return tong\nds = [1, 2, 3, 4, 5, 6, 7]\nket_qua = tinh_tong_so_le(ds)\nprint(\"Tổng các số lẻ là:\", ket_qua)\n\n# 4. Viết hàm tìm tất cả các ước của một số.\ndef tim_uoc(n):\n   uoc_list = []\n   for i in range(1, n + 1):\n       if n % i == 0:\n           uoc_list.append(i)\n   return uoc_list\n\n# 5. Viết hàm tính tổng các ước của một số.\ndef tong_uoc(n):\n   tong = 0\n   for i in range(1, n + 1):\n       if n % i == 0:\n           tong += i\n   return tong\n\n# 6. Viết hàm sắp xếp danh sách tăng dần.\ndef sap_xep_tang_dan(lst):\n   return sorted(lst)\nds = [5, 2, 9, 1, 7]\nket_qua = sap_xep_tang_dan(ds)\nprint(\"Danh sách sau khi sắp xếp:\", ket_qua)\n\n# 7. Viết hàm lọc ra các số chẵn từ danh sách.\ndef loc_so_chan(danh_sach):\n   ket_qua = []\n   for so in danh_sach:\n       if so % 2 == 0:\n           ket_qua.append(so)\n   return ket_qua\nds = [1, 2, 3, 4, 5, 6]\nprint(loc_so_chan(ds))\n\n# 8. Viết hàm đếm số từ trong chuỗi.\ndef dem_so_tu(chuoi):\n   tu = chuoi.split()\n   return len(tu)\nvan_ban = \"Hôm nay trời đẹp quá\"\nprint(dem_so_tu(van_ban))\n`,
      homework: [
        "Ôn tập toàn bộ kiến thức đã học",
      ],
    },
  },
  {
    id: 14,
    title: "Hackathon",
    preview: "Tổng hợp các bài tập lớn: tam giác, danh sách, xử lý họ tên, kiểm tra ngày tháng.",
    status: "pending",
    content: {
      description:
        "Hackathon: Tổng hợp các bài tập lớn ứng dụng kiến thức Python về điều kiện, danh sách, xử lý chuỗi, kiểm tra dữ liệu.",
      topics: [
        "Bài 1 : Viết chương trình nhập vào 3 cạnh của tam giác, hãy xác định tam giác vừa nhập là dạng tam giác gì?",
        "- Không phải tam giác: Khi tổng hai cạnh bé hơn cạnh còn lại.",
        "- Tam giác đều: Ba cạnh của tam giác bằng nhau.",
        "- Tam giác cân: Tồn tại hai cạnh bằng nhau.",
        "- Tam giác vuông: Tổng bình phương hai cạnh góc vuông bằng bình phương cạnh huyền.",
        "- Tam giác thường: Các trường hợp còn lại.",
        "\nBài 2 : Viết chương trình nhập vào một danh sách các số nguyên, mỗi số nguyên cách nhau một dấu khoảng trắng. Hãy xử lý và xuất ra màn hình giá trị lớn nhất và giá trị bé nhất của danh sách vừa nhập.",
        "Gợi ý: Danh sách nhập vào dưới dạng xâu ký tự gồm số và cách nhau bởi dấu khoảng trắng. Ta có thể sử dụng lệnh split() để tách xâu ký tự thành danh sách xâu ký tự và dùng lệnh ép kiểu int() để các phần tử của danh sách thành kiểu số nguyên.",
        "\nBài 3 : Viết chương trình nhập vào họ và tên đầy đủ, Xử lý họ và tên vừa nhập bằng cách tách Họ, tên đệm, tên ra và xuất họ, tên đệm, tên thành từng dòng.",
        "- Họ: Chữ đầu tiên của Họ và tên",
        "- Tên đệm: Các chữ còn lại trừ chữ đầu tiên và chữ cuối cùng.",
        "- Tên: Chữ cuối cùng của Họ và tên",
        "Đối với các họ và tên vừa nhập chỉ có 2 chữ (không có tên đệm) thì chỉ cần xuất ra hai dòng, một dòng Họ và một dòng Tên.",
        "\nBài 4 : Viết chương trình nhập vào ngày, tháng, năm theo định dạng dd/mm/yyyy. Hãy kiểm tra xem ngày, tháng, năm nhập vào có hợp lệ hay không.",
        "Được biết tháng 2 của năm nhuận có 29 ngày, tháng 2 của năm không nhuận là 28 ngày. (Năm nhuận là năm chia hết cho 400 hoặc chia hết cho 4 nhưng không chia hết cho 100)",
        "Các tháng có 31 ngày là: 1, 3, 5, 7, 8, 10, 12",
        "Các tháng có 30 ngày là: 4, 6, 9, 11",
        "Ngày: 1 ≤ d ≤ 31",
        "Tháng: 1 ≤ m ≤ 12",
        "Năm: 1900 ≤ y",
      ],
      code: `# Bài 1: Xác định loại tam giác\na = float(input(\"Nhập cạnh a: \\"))\nb = float(input(\"Nhập cạnh b: \\"))\nc = float(input(\"Nhập cạnh c: \\"))\nif a + b <= c or a + c <= b or b + c <= a:\n    print(\"Không phải tam giác\")\nelif a == b == c:\n    print(\"Tam giác đều\")\nelif a == b or a == c or b == c:\n    print(\"Tam giác cân\")\nelif a**2 + b**2 == c**2 or a**2 + c**2 == b**2 or b**2 + c**2 == a**2:\n    print(\"Tam giác vuông\")\nelse:\n    print(\"Tam giác thường\")\n\n# Bài 2: Tìm max, min trong danh sách số nguyên nhập vào\ns = input(\"Nhập danh sách số nguyên, cách nhau bởi dấu cách: \\"))\nnums = [int(x) for x in s.split()]\nprint(\"Giá trị lớn nhất:\", max(nums))\nprint(\"Giá trị nhỏ nhất:\", min(nums))\n\n# Bài 3: Tách họ, tên đệm, tên\nhoten = input(\"Nhập họ và tên đầy đủ: \\"))\nparts = hoten.strip().split()\nif len(parts) == 2:\n    print(\"Họ:\", parts[0])\n    print(\"Tên:\", parts[1])\nelse:\n    print(\"Họ:\", parts[0])\n    print(\"Tên đệm:\", ' '.join(parts[1:-1]))\n    print(\"Tên:\", parts[-1])\n\n# Bài 4: Kiểm tra ngày tháng năm hợp lệ\ndate_str = input(\"Nhập ngày/tháng/năm (dd/mm/yyyy): \\"))\ntry:\n    d, m, y = map(int, date_str.split('/'))\n    hop_le = True\n    if not (1 <= d <= 31 and 1 <= m <= 12 and y >= 1900):\n        hop_le = False\n    else:\n        if m == 2:\n            # Kiểm tra năm nhuận\n            is_leap = (y % 400 == 0) or (y % 4 == 0 and y % 100 != 0)\n            if is_leap and d > 29:\n                hop_le = False\n            elif not is_leap and d > 28:\n                hop_le = False\n        elif m in [4, 6, 9, 11] and d > 30:\n            hop_le = False\n    print(\"Ngày hợp lệ\" if hop_le else \"Ngày không hợp lệ\")\nexcept:\n    print(\"Định dạng không hợp lệ!\")`,
      homework: [
        "Chúc các bạn đã hoàn thành xong khoá học Python Basic",
      ],
    },
  },
];

function renderLessons() {
  const grid = document.getElementById("lessonsGrid");
  grid.innerHTML = lessons
    .map(
      (lesson) => `
                <div class="lesson-card ${
                  lesson.status
                }" onclick="openLessonContent(${lesson.id})">
                    <div>
                        <div class="lesson-number">Buổi ${lesson.id}</div>
                        <h3 class="lesson-title">${lesson.title}</h3>
                        <p class="lesson-preview">${lesson.preview}</p>
                    </div>
                    <div class="lesson-status status-${lesson.status}">
                        ${
                          lesson.status === "completed"
                            ? "✅ Hoàn thành"
                            : lesson.status === "current"
                            ? "📍 Đang học"
                            : "⏳ Chưa học"
                        }
                    </div>
                </div>
            `
    )
    .join("");

  updateProgress();
}

function updateProgress() {
  const completedLessons = lessons.filter(
    (lesson) => lesson.status === "completed"
  ).length;
  const progressPercent = (completedLessons / lessons.length) * 100;

  document.getElementById("progressFill").style.width = progressPercent + "%";
  document.getElementById(
    "progressText"
  ).textContent = `Đã hoàn thành: ${completedLessons}/${lessons.length} buổi`;
}

function openLessonContent(lessonId) {
  const lesson = lessons.find((l) => l.id === lessonId);
  const modal = document.getElementById("contentModal");
  const modalTitle = document.getElementById("modalTitle");
  const modalContent = document.getElementById("modalContent");

  modalTitle.textContent = `Buổi ${lesson.id}: ${lesson.title}`;

  if (lesson.content) {
    modalContent.innerHTML = `
      <div class="content-section">
        <div class="section-title">
          <span class="section-icon">📋</span> Mô tả buổi học
        </div>
        <p>${lesson.content.description || ""}</p>
      </div>

      ${
        lesson.content.topics
          ? `
        <div class="content-section">
          <div class="section-title">
            <span class="section-icon">🎯</span> Nội dung chính
          </div>
          <ul>
            ${lesson.content.topics
              .map((topic) => `<li>${topic}</li>`)
              .join("")}
          </ul>
        </div>
      `
          : ""
      }

      ${
        lesson.content.code
          ? `
        <div class="content-section">
          <div class="section-title">
            <span class="section-icon">💻</span> Code Demo
          </div>
          <div class="code-block">${escapeHtml(lesson.content.code)}</div>
        </div>
      `
          : ""
      }

      ${
        lesson.content.homework
          ? `
        <div class="content-section exercise-section">
          <div class="section-title">
            <span class="section-icon">📝</span> Bài tập bổ trợ
          </div>
          <ol>
            ${lesson.content.homework.map((hw) => `<li>${hw}</li>`).join("")}
          </ol>
        </div>
      `
          : ""
      }

      <div class="action-row">
        <button class="mark-complete-btn" onclick="markAsComplete(${lesson.id})"
          ${lesson.status === "completed" ? "disabled" : ""}>
          ${
            lesson.status === "completed"
              ? "✅ Đã hoàn thành"
              : "✅ Đánh dấu hoàn thành"
          }
        </button>
        <button class="secondary-btn" onclick="toggleSolutions(${
          lesson.id
        })">📘 Đáp án</button>
      </div>
      <div id="solutionsPanel" class="content-section" style="display:none"></div>
    `;
  } else {
    modalContent.innerHTML = `
      <div class="content-section">
        <div class="section-title">
          <span class="section-icon">📋</span> Thông tin buổi học
        </div>
        <p>${lesson.preview}</p>
        <br><p><em>Nội dung chi tiết sẽ được cập nhật sớm...</em></p>
      </div>

      <div class="action-row">
        <button class="mark-complete-btn" onclick="markAsComplete(${lesson.id})"
          ${lesson.status === "completed" ? "disabled" : ""}>
          ${
            lesson.status === "completed"
              ? "✅ Đã hoàn thành"
              : "✅ Đánh dấu hoàn thành"
          }
        </button>
        <button class="secondary-btn" onclick="toggleSolutions(${
          lesson.id
        })">📘 Đáp án</button>
      </div>
      <div id="solutionsPanel" class="content-section" style="display:none"></div>
    `;
  }

  modal.style.display = "block";
}

// Toggle panel Đáp án trong modal
// ===== ĐÁP ÁN / SOLUTIONS =====
const solutions = {
  1: [
    {
      title:
        "Bài 1 - Viết chương trình  nhập tuổi của bạn, in ra màn hình sau 10 năm, tuổi của bạn là bao nhiêu",
      code: `
    age = float(input("Nhập tuổi hiện tại của bạn : ")) #10
    age_future = age + 10 
    print("Sau 10 năm tuổi của bạn là : " ,age_future)`,
    },
    {
      title:
        "Bài 2 - Viết chương trình quy đổi tiền, với 1$ = 25.000 vnd, hãy quy đổi 2000$ và in ra màn hình",
      code: `
    dollar = float(input("Nhập số tiền mà bạn muốn quy đổi : "))
    ty_gia = float(input("1$ = "))
    VND = dollar * ty_gia
    print(VND)`,
    },
  ],
  2: [
    {
      title: "Bài 1 - Viết chương trình nhập 2 số và so sánh xem số nào lớn hơn",
      code: `
    a = int(input("Nhập số thứ nhất: "))
    b = int(input("Nhập số thứ hai: "))
    if a > b:
        print(a, "lớn hơn", b)
    elif a < b:
        print(b, "lớn hơn", a)
    else:
        print("Hai số bằng nhau")`,
    },
    {
      title:
        "Bài 2 - Tạo chương trình tính BMI (cân nặng / chiều cao²)",
      code: `
    can_nang = float(input("Nhập cân nặng (kg): "))
    chieu_cao = float(input("Nhập chiều cao (m): "))
    bmi = can_nang / (chieu_cao ** 2)
    print("Chỉ số BMI =", bmi)`,
    },
     {
      title:
        "Bài 3 - Viết chương trình tính tổng các chữ số của một số có 4 chữ số",
      code: `
    n = int(input("Nhập số có 4 chữ số: "))
    a = n // 1000           # chữ số hàng nghìn
    b = (n // 100) % 10     # chữ số hàng trăm
    c = (n // 10) % 10      # chữ số hàng chục
    d = n % 10              # chữ số hàng đơn vị
    tong = a + b + c + d
    print("Tổng các chữ số =", tong)`,
    },
     {
      title:
        "Bài 4 - Tạo máy tính đơn giản với các phép toán cơ bản",
      code: `
    a = float(input("Nhập số thứ nhất: "))
    b = float(input("Nhập số thứ hai: "))
    op = input("Nhập phép toán (+, -, *, /): ")

    if op == "+":
        print("Kết quả =", a + b)
    elif op == "-":
        print("Kết quả =", a - b)
    elif op == "*":
        print("Kết quả =", a * b)
    elif op == "/":
        if b != 0:
            print("Kết quả =", a / b)
        else:
            print("Không thể chia cho 0")
    else:
        print("Phép toán không hợp lệ")`,
    },
     {
      title:
        "Bài 5 - Viết chương trình kiểm tra một năm có phải năm nhuận không (chia hết cho 4)",
      code: `
    nam = int(input("Nhập năm: "))

    if (nam % 4 == 0 and nam % 100 != 0) or (nam % 400 == 0):
        print(nam, "là năm nhuận")
    else:
        print(nam, "không phải năm nhuận")
        `,
    },
  ],
    3: [
    {
      title:
        "Bài 1 - Viết chương trình nhập 3 số, kiểm tra và tìm kiếm số nhỏ nhất trong 3 số đó",
      code: `
    d = float(input("Nhập số thứ nhất: "))
    e = float(input("Nhập số thứ hai: "))
    f = float(input("Nhập số thứ ba: "))
    if d <= e and d <= f :
        print("Số nhỏ nhất là:", d)
    elif e <= d and e <= f :
        print("Số nhỏ nhất là:", e)
    else:
        print("Số nhỏ nhất là:", f)`,
    },
    {
      title:
        "Bài 2 - Viết chương trình nhập điểm 3 môn Toán Văn Anh. Tính điểm trung bình và xếp loại : Điểm trung bình >=8 ( Giỏi ), >=6.5 ( Khá ), >=5 ( Trung bình ),<5 ( Yếu )",
      code: `
    toan = float(input("Nhập điểm Toán: "))
    van = float(input("Nhập điểm Văn: "))
    anh = float(input("Nhập điểm Anh: "))
    DTB = (toan + van + anh) / 3
    if DTB >= 8:
        print("Xếp loại: Giỏi")
    elif DTB >= 6.5:
        print("Xếp loại: Khá")
    elif DTB >= 5:
        print("Xếp loại: Trung bình")
    else:
        print("Xếp loại: Yếu")`,
    },
      {
      title:
        "Bài 3 - Viết chương trình nhập 3 cạnh của tam giác và kiểm tra loại tam giác đó.\n( Tam giác đều, Tam giác cân, Tam giác vuông, Tam giác thường ).\nNếu không phải tam giác thì in ra (Không phải tam giác).\nNếu là Tam giác đều thì in ra (Tam giác đều).\nNếu là Tam giác cân thì in ra (Tam giác cân).\nNếu là Tam giác vuông thì in ra (Tam giác vuông).\nNếu là Tam giác thường thì in ra (Tam giác thường).",
       code: `
    a = float(input("Nhập cạnh a: "))
    b = float(input("Nhập cạnh b: "))
    c = float(input("Nhập cạnh c: "))
    if a + b > c and a + c > b and b + c > a : 
        if a == b == c : 
            print("Tam giác đều")
        elif a == b or a == c or b == c :
            print("Tam giác cân")
        elif a**2 + b**2 == c**2 or a**2 + c**2 == b**2 or b**2 + c**2 == a**2 :
            print("Tam giác vuông")
        else :
            print("Tam giác thường")
    else :
        print("Không phải tam giác")`
    },
  ],
    4: [
    {
      title:
         "Bài 1 - Xếp loại sinh viên theo thang điểm 4 (0-4).",
      code: `
    diem = float(input("Nhập điểm (thang 4): "))

    if 3.6 <= diem <= 4.0:
        print("Xếp loại: A")
    elif 3.0 <= diem <= 3.5:
        print("Xếp loại: B")
    elif 2.0 <= diem <= 2.9:
        print("Xếp loại: C")
    elif 1.0 <= diem <= 1.9:
        print("Xếp loại: D")
    elif 0.0 <= diem < 1.0:
        print("Xếp loại: F")
    else:
        print("Điểm không hợp lệ!")
    `,
    },
    {
      title:
        "Bài 2 - Tính chỉ số BMI cơ thể và phân loại với công thức ( cân nặng / ( chiều cao * chiều cao )). Nếu BMI < 18.5 thì in ra ( Thiếu cân )  . Nếu 18.5 <= BMI < 24.9 thì in ra ( Bình thường ) . Nếu 25 <= BMI < 29.9 thì in ra ( Thừa cân ) . Nếu BMI >= 30 thì in ra ( Béo phì ) .",
      code: `
    bmi = float(input("Nhập chỉ số BMI: "))

    if bmi < 18.5:
        print("Phân loại: Gầy")
    elif 18.5 <= bmi <= 24.9:
        print("Phân loại: Bình thường")
    elif 25 <= bmi <= 29.9:
        print("Phân loại: Thừa cân")
    elif bmi >= 30:
        print("Phân loại: Béo phì")
    else:
        print("Giá trị không hợp lệ!")
    `,
    },
       {
      title:
      "Bài 3 - Viết chương trình nhập số nguyên, in ra giá trị tuyệt đối của số đó.",
      code: `
    n = int(input("Nhập số nguyên: "))

    if n < 0:
        n = -n   # đổi dấu nếu là số âm
    print("Giá trị tuyệt đối là:", n)
    `,
    },
     {
      title:
      "Bài 4 - Nhập vào số phút gọi ( m ) ( số nguyên, đơn vị : phút ). Tính tiền cước theo biểu giá bâc thang sau và in ra kết quả : 50 phút đầu : 600 đồng / phút. Từ phút thứ 51 đến phút thứ 200 : 400 đồng / phút. Từ phút thứ 201 trở đi : 200 đồng / phút",
      code: `
    m = int(input("Nhập số phút gọi: "))
    if m < 0:
        print("Số phút không hợp lệ!")
    else:
        if m <= 50:
            fee = m * 600
        elif m <= 200:
            fee = 50 * 600 + (m - 50) * 400
        else:
            fee = 50 * 600 + 150 * 400 + (m - 200) * 200
        print("Cước phí (VND):", fee)
    `,
    },
    
  ],
  5: [
    {
      title: "Bài 1 – So sánh số lớn hơn (a, b)",
      code: `a = float(input("Nhập a: "))
b = float(input("Nhập b: "))
if a > b:
    print("a lớn hơn b")
elif a < b:
    print("b lớn hơn a")
else:
    print("a bằng b")`,
    },
    {
      title: "Bài 2 – Kiểm tra chẵn / lẻ",
      code: `
    n = int(input("Nhập một số nguyên: "))

    if n % 2 == 0:
        print(n, "là số chẵn")
    else:
        print(n, "là số lẻ")

    `,
    },
    {
      title: "Bài 3 – Chia hết cho cả 3 và 5?",
      code: `
    n = int(input("Nhập số n: "))
    if n % 3 == 0 and n % 5 == 0:
        print("Chia hết cho cả 3 và 5")
    else:
        print("Không chia hết cho cả 3 và 5")
        `,
    },
    {
      title: "Bài 4 – Lũy thừa a^b",
      code: `a = float(input("Nhập a: "))
    b = float(input("Nhập b: "))
    print(a ** b)`,
    },
    {
      title: "Bài 5 – Tính tiền điện bậc thang (kWh)",
      code: `# Nhập số điện tiêu thụ
    kwh = int(input("Nhập số điện tiêu thụ (kWh): "))

    # Tính tiền theo bậc thang
    tien = 0

    if kwh <= 50:
        tien = kwh * 1678
    elif kwh <= 100:
        tien = 50 * 1678 + (kwh - 50) * 1734
    elif kwh <= 200:
        tien = 50 * 1678 + 50 * 1734 + (kwh - 100) * 2014
    elif kwh <= 300:
        tien = 50 * 1678 + 50 * 1734 + 100 * 2014 + (kwh - 200) * 2536
    elif kwh <= 400:
        tien = 50 * 1678 + 50 * 1734 + 100 * 2014 + 100 * 2536 + (kwh - 300) * 2834
    else:
        tien = (50 * 1678 + 50 * 1734 + 100 * 2014 +
                100 * 2536 + 100 * 2834 + (kwh - 400) * 2927)

    print("Tiền điện phải trả:", format(tien, ",") + " đồng")
`,
    },
  ],
    6: [
    {
      title:
        "Bài 1 : Viết chương trình in ra các số từ 1 đến 10",
      code: `
    for i in range(1, 11):
    print(i, end=" ")
    `,
    },
    {
      title:
        "Bài 2 : Viết chương trình tính tổng các số lẻ từ 1 đến 50",
      code: `
    tong = 0
    for i in range(1, 51):
        if i % 2 != 0:  # kiểm tra số lẻ
            tong += i
    print("Tổng các số lẻ từ 1 đến 50 là:", tong)
    `,
    },
    {
      title:
        "Bài 3 : Viết chương trình in ra bảng cửu chương 5",
      code: `
    for i in range(1, 11):
    print("5 x ", i , " = " , 5*i)
    `,
    },
    {
      title:
        "Bài 4 : Viết chương trình nhập n, in ra các số chia hết cho 7 từ 1 đến n",
      code: `
    n = int(input("Nhập n: "))
    print("Các số chia hết cho 7 từ 1 đến ", n , "là : ")
    for i in range(1, n+1):
        if i % 7 == 0:
            print(i)
    `,
    },
    {
      title:
        "Bài 5 : Viết chương trình nhập n, tính tổng các số chia hết cho 2 hoặc 3 từ 1 đến n",
      code: `
    n = int(input("Nhập n: "))
    tong = 0
    for i in range(1, n+1):
        if i % 2 == 0 or i % 3 == 0:
            tong += i
    print("Tổng các số chia hết cho 2 hoặc 3 từ 1 đến " , n ,"là:", tong)
  `,
    },
  ],
    7: [
        {
      title:
        "Bài 1 : Viết chương trình in ra các số từ 1 đến n",
      code: `
    n = int(input("Nhập n: "))
    i = 1
    while i <= n:
        print(i, end=" ")
        i += 1
    `,
    },
    {
      title:
        "Bài 2 : Viết chương trình tính tổng các số lẻ từ 1 đến 50",
      code: `
    i = 1
    tong = 0
    while i <= 50:
        if i % 2 != 0:   # kiểm tra số lẻ
            tong += i
        i += 1

    print("Tổng các số lẻ từ 1 đến 50 là:", tong)
    `,
    },
    {
      title:
        "Bài 3 : Viết chương trình in ra bảng cửu chương 7",
      code: `
    i = 1
    while i <= 10:
      print(f"7 x {i} = {7 * i}")
      i += 1

    `,
    },
    {
      title:
        "Bài 4 : Viết chương trình nhập n, in ra các số chia hết cho 5 từ 1 đến n",
      code: `
    n = int(input("Nhập n: "))
    i = 1
    print(f"Các số chia hết cho 5 từ 1 đến {n}:")
    while i <= n:
        if i % 5 == 0:
            print(i, end=" ")
        i += 1
    `,
    },
    {
      title:
        "Bài 5 : Viết chương trình nhập n, tính tổng các số chia hết cho 2 hoặc 3 từ 1 đến n",
      code: `
    n = int(input("Nhập n: "))
    i = 1
    tong = 0
    while i <= n:
        if i % 2 == 0 or i % 3 == 0:
            tong += i
        i += 1

    print(f"Tổng các số chia hết cho 2 hoặc 3 từ 1 đến {n} là:", tong)

  `,
    },
  ],
    8: [
    {
      title:
        "Bài 1 : Khai báo một danh sách gồm 5 số nguyên bất kỳ và in ra từng phần tử",
      code: `
    # Khai báo danh sách số nguyên
    numbers = [10, 25, 37, 48, 59]

    # In ra từng phần tử
    for num in numbers:
        print(num)

    `,
    },
    {
      title:
        "Bài 2 : Cập nhật giá trị phần tử thứ 3 trong danh sách thành 100",
      code: `
    numbers[2] = 100   # phần tử thứ 3 có chỉ số index = 2
    print("Danh sách sau khi cập nhật:", numbers)
    `,
    },
    {
      title:
        "Bài 3 : Tính tổng các phần tử trong danh sách số nguyên",
      code: `
    tong = sum(numbers)
    print("Tổng các phần tử trong danh sách:", tong)

    `,
    },
    {
      title:
        "Bài 4 : Sắp xếp danh sách chuỗi theo thứ tự từ điển (alphabet)",
      code: `
    words = ["banana", "apple", "cherry", "mango", "orange"]
    words.sort()
    print("Danh sách chuỗi sau khi sắp xếp:", words)

    `,
    },
    {
      title:
        "Bài 5 : Xoá tất cả các phần tử có giá trị cụ thể khỏi danh sách",
      code: `
    # Danh sách ví dụ có nhiều số 100
    numbers = [10, 100, 25, 100, 37, 48, 100]

    # Xóa tất cả giá trị 100
    numbers = [x for x in numbers if x != 100]

    print("Danh sách sau khi xóa:", numbers)
    `,
    },
  ],
    9: [
    {
      title:
        "Bài 1 : Nhập n, in ra tất cả các số nguyên tố từ 1 đến n",
      code: `
    n = int(input("Nhập n: "))
    print("Các số nguyên tố từ 1 đến", n, "là:")

    for i in range(2, n+1):
        la_nguyen_to = True
        for j in range(2, i):
            if i % j == 0:
                la_nguyen_to = False
                break
        if la_nguyen_to:
            print(i, end=" ")
`,
    },
    {
      title:
        "Bài 2 : Nhập n, kiểm tra n có phải số nguyên tố không",
      code: `
    n = int(input("Nhập n: "))
    la_nguyen_to = True

    if n < 2:
        la_nguyen_to = False
    else:
        for i in range(2, n):
            if n % i == 0:
                la_nguyen_to = False
                break

    if la_nguyen_to:
        print(n, "là số nguyên tố")
    else:
        print(n, "không phải số nguyên tố")
  `,
    },
       {
      title:
        "Bài 3 : Nhập n, đếm số lượng số nguyên tố từ 1 đến n",
      code: `
   n = int(input("Nhập n: "))
    dem = 0

    for i in range(2, n+1):
        la_nguyen_to = True
        for j in range(2, i):
            if i % j == 0:
                la_nguyen_to = False
                break
        if la_nguyen_to:
            dem += 1

    print("Có", dem, "số nguyên tố từ 1 đến", n)

    `,
    },
       {
      title:
        "Bài 4 : Nhập n, tính tổng các số chẵn từ 1 đến n",
      code: `
    n = int(input("Nhập n: "))
    tong = 0

    for i in range(1, n+1):
        if i % 2 == 0:
            tong += i

    print("Tổng các số chẵn từ 1 đến", n, "là:", tong)

    `,
    },
  ],
    10: [
    {
      title:
        "Viết chương trình  nhập tuổi của bạn, in ra màn hình sau 10 năm, tuổi của bạn là bao nhiêu",
      code: `
    age = float(input("Nhập tuổi hiện tại của bạn : ")) #10
    age_future = age + 10 
    print("Sau 10 năm tuổi của bạn là : " ,age_future)`,
    },
    {
      title:
        "Viết chương trình quy đổi tiền, với 1$ = 25.000 vnd, hãy quy đổi 2000$ và in ra màn hình",
      code: `
    dollar = float(input("Nhập số tiền mà bạn muốn quy đổi : "))
    ty_gia = float(input("1$ = "))
    VND = dollar * ty_gia
    print(VND)`,
    },
  ],
    11: [
    {
      title:
        "Viết chương trình  nhập tuổi của bạn, in ra màn hình sau 10 năm, tuổi của bạn là bao nhiêu",
      code: `
    age = float(input("Nhập tuổi hiện tại của bạn : ")) #10
    age_future = age + 10 
    print("Sau 10 năm tuổi của bạn là : " ,age_future)`,
    },
    {
      title:
        "Viết chương trình quy đổi tiền, với 1$ = 25.000 vnd, hãy quy đổi 2000$ và in ra màn hình",
      code: `
    dollar = float(input("Nhập số tiền mà bạn muốn quy đổi : "))
    ty_gia = float(input("1$ = "))
    VND = dollar * ty_gia
    print(VND)`,
    },
  ],
    12: [
    {
      title:
        "Viết chương trình  nhập tuổi của bạn, in ra màn hình sau 10 năm, tuổi của bạn là bao nhiêu",
      code: `
    age = float(input("Nhập tuổi hiện tại của bạn : ")) #10
    age_future = age + 10 
    print("Sau 10 năm tuổi của bạn là : " ,age_future)`,
    },
    {
      title:
        "Viết chương trình quy đổi tiền, với 1$ = 25.000 vnd, hãy quy đổi 2000$ và in ra màn hình",
      code: `
    dollar = float(input("Nhập số tiền mà bạn muốn quy đổi : "))
    ty_gia = float(input("1$ = "))
    VND = dollar * ty_gia
    print(VND)`,
    },
  ]
};

// Escape để hiển thị code an toàn trong HTML
function escapeHtml(str) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

// Render nội dung đáp án cho 1 buổi
function renderSolutions(lessonId) {
  const items = solutions[lessonId] || [];
  if (!items.length) {
    return `
      <div class="content-section">
        <div class="section-title">
          <span class="section-icon">📘</span> Đáp án
        </div>
        <p><em>Chưa có đáp án cho buổi này. Hãy thêm vào biến <code>solutions</code>.</em></p>
      </div>
    `;
  }

  return `<div class="content-section">
      <div class="section-title">
        <span class="section-icon">📘</span> Đáp án
      </div>
      ${items
        .map(
          (it) => `
        <div class="content-section" style="margin-bottom:16px;">
          <strong>${escapeHtml(it.title)}</strong>
          <div class="code-block" style="margin-top:8px;">${escapeHtml(
            it.code
          )}</div>
        </div>
      `
        )
        .join("")}
    </div>
  `;
}

// Toggle panel Đáp án trong modal
function toggleSolutions(lessonId) {
  const panel = document.getElementById("solutionsPanel");
  if (!panel) return;
  const isHidden = panel.style.display === "none" || panel.style.display === "";
  if (isHidden) {
    panel.innerHTML = renderSolutions(lessonId);
    panel.style.display = "block";
  } else {
    panel.style.display = "none";
    panel.innerHTML = "";
  }
}

function closeContentModal() {
  document.getElementById("contentModal").style.display = "none";
}

function markAsComplete(lessonId) {
  const lesson = lessons.find((l) => l.id === lessonId);
  lesson.status = "completed";

  // Update next lesson to current if exists
  const nextLesson = lessons.find((l) => l.id === lessonId + 1);
  if (nextLesson && nextLesson.status === "pending") {
    nextLesson.status = "current";
  }

  renderLessons();
  closeContentModal();
}

function getFileIcon(fileName) {
  const ext = fileName.split(".").pop().toLowerCase();
  switch (ext) {
    case "pdf":
      return "📄";
    case "doc":
    case "docx":
      return "📝";
    case "ppt":
    case "pptx":
      return "📊";
    case "html":
      return "🌐";
    case "css":
      return "🎨";
    case "js":
      return "⚡";
    case "py":
      return "🐍";
    case "txt":
      return "📄";
    case "mp4":
    case "avi":
      return "🎥";
    default:
      return "📎";
  }
}

// Close modal when clicking outside
window.addEventListener("click", function (e) {
  const modal = document.getElementById("contentModal");
  if (e.target === modal) {
    closeContentModal();
  }
});

// Initialize
renderLessons();
